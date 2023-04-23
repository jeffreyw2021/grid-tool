document.addEventListener('DOMContentLoaded', function () {
  const gridButtonTemplate = `
  <div class="grid-buttons">
  <div class="grid-btn right-btn"></div>
  <div class="grid-btn func-btn shrink-btn">
    <i class="fa-solid fa-minus"></i>
    <i class="fa-solid fa-plus" style="display:none"></i>
  </div>
  <div class="grid-btn func-btn expand-btn">
    <i class="fa-solid fa-expand"></i>
    <i class="fa-solid fa-compress" style="display:none"></i>
  </div>
</div>
  `;

  const gridContainers = document.querySelectorAll('.grid-container');
  let activeExpandBtn = null;

  function setLastNonShrunkGridButtonColorGray() {
    const columns = document.querySelectorAll('.column');

    columns.forEach(column => {
      const allGridContainers = Array.from(column.children).filter(el =>
        el.classList.contains('grid-container')
      );

      const shrunkGridContainersCount = allGridContainers.reduce(
        (count, el) => count + (el.classList.contains('shrunk') ? 1 : 0),
        0
      );

      if (shrunkGridContainersCount >= 2) {
        let lastNonShrunkGridContainer = null;
        for (let i = allGridContainers.length - 1; i >= 0; i--) {
          if (!allGridContainers[i].classList.contains('shrunk')) {
            lastNonShrunkGridContainer = allGridContainers[i];
            break;
          }
        }

        if (lastNonShrunkGridContainer) {
          const sbtn = lastNonShrunkGridContainer.querySelector('.shrink-btn');
          sbtn.style.backgroundColor = '#ccc';
        }
      }
    });
  }
  function checkActiveExpandBtn() {
    if (activeExpandBtn) {
      const shrinkBtns = document.querySelectorAll('.shrink-btn');
      shrinkBtns.forEach(shrinkBtn => {
        shrinkBtn.style.backgroundColor = '#ccc';
      });
    }
    else {
      const shrinkBtns = document.querySelectorAll('.shrink-btn');
      shrinkBtns.forEach(shrinkBtn => {
        shrinkBtn.style.backgroundColor = '';
      });
    }
  }

  const resizeObserver = new ResizeObserver(entries => {
    setLastNonShrunkGridButtonColorGray();
  });

  gridContainers.forEach(gridContainer => {
    gridContainer.insertAdjacentHTML('afterbegin', gridButtonTemplate)
    gridContainer.dataset.initialHeight = gridContainer.offsetHeight
    gridContainer.dataset.resizable = 'true'

    const shrinkBtn = gridContainer.querySelector('.shrink-btn')
    const expandBtn = gridContainer.querySelector('.expand-btn')

    shrinkBtn.addEventListener('click', () => {

      if (activeExpandBtn) {
        return;
      }

      const column = gridContainer.parentElement
      const columnHeight = column.offsetHeight
      const allGridContainers = Array.from(column.children).filter(el =>
        el.classList.contains('grid-container')
      )

      const shrunkGridContainersCount = allGridContainers.reduce(
        (count, el) => count + (el.classList.contains('shrunk') ? 1 : 0),
        0
      )

      if (
        shrunkGridContainersCount >= 2 &&
        !gridContainer.classList.contains('shrunk')
      ) {
        return
      }

      const isShrunk = gridContainer.classList.toggle('shrunk');

      // Get the .grid element inside the gridContainer
      const grid = gridContainer.querySelector('.grid');

      if (isShrunk) {
        // Set display to 'none' for all the children of .grid
        Array.from(grid.children).forEach(child => {
          child.style.display = 'none';
        });
      } else {
        // Set display back to the initial value for all the children of .grid
        Array.from(grid.children).forEach(child => {
          child.style.display = '';
        });
      }

      gridContainer.style.height = isShrunk
        ? '40px'
        : `${gridContainer.dataset.initialHeight}px`
      gridContainer.dataset.resizable = !isShrunk

      const minusIcon = shrinkBtn.querySelector('.fa-minus')
      const plusIcon = shrinkBtn.querySelector('.fa-plus')
      minusIcon.style.display = isShrunk ? 'none' : 'flex'
      plusIcon.style.display = isShrunk ? 'flex' : 'none'

      const otherGridContainers = allGridContainers.filter(
        el => el !== gridContainer
      )

      if (shrunkGridContainersCount === 1 && isShrunk) {
        const nonShrunkGridContainer = otherGridContainers.find(
          el => !el.classList.contains('shrunk')
        )
        if (nonShrunkGridContainer) {
          const remainingHeight = columnHeight - 40 - 40
          nonShrunkGridContainer.style.height = `${remainingHeight}px`
        }
      } else {
        let remainingHeight =
          columnHeight -
          (isShrunk ? 40 : parseInt(gridContainer.dataset.initialHeight))

        const resizableHeightSum = otherGridContainers.reduce(
          (sum, el) =>
            sum +
            (el.dataset.resizable === 'true'
              ? parseInt(el.dataset.initialHeight)
              : 0),
          0
        )

        otherGridContainers.forEach(otherGridContainer => {
          if (otherGridContainer.dataset.resizable === 'true') {
            const otherInitialHeight = otherGridContainer.dataset.initialHeight
            const otherHeightRatio = otherInitialHeight / resizableHeightSum
            otherGridContainer.style.height = `${remainingHeight * otherHeightRatio
              }px`
          }
        })
      }
    })

    

    resizeObserver.observe(gridContainer);
  })
})

