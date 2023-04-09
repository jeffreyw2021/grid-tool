document.addEventListener('DOMContentLoaded', function () {
  // ========== column ========== //
  const column1 = document.getElementById('column-1');
  const column2 = document.getElementById('column-2');
  const column3 = document.getElementById('column-3');
  const DRAGGABLE_ZONE_WIDTH = 50;
  let isResizing = false;
  let activeColumns;
  // ========== grid ========== //
  const topDragDetectors = document.querySelectorAll('.top-dragdetector');
  const bottomDragDetectors = document.querySelectorAll('.bottom-dragdetector');
  const gridContainers1 = document.querySelectorAll('.grid-container-1');
  const gridContainers2 = document.querySelectorAll('.grid-container-2');
  const gridContainers3 = document.querySelectorAll('.grid-container-3');
  const DRAGGABLE_ZONE_HEIGHT = 200;
  let GridResizing = false;
  let activeGridContainers = null;

  function getMousePosition(event) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  }

  function handleMouseMove(event) {
    if (!isResizing || !activeColumns) return;

    const mousePosition = getMousePosition(event);
    const newWidth = mousePosition.x - activeColumns.leftColumn.getBoundingClientRect().left;
    const totalWidth = activeColumns.leftColumn.offsetWidth + activeColumns.rightColumn.offsetWidth;

    activeColumns.leftColumn.style.width = newWidth + 'px';
    activeColumns.rightColumn.style.width = (totalWidth - newWidth) + 'px';

    if (!GridResizing || !activeGridContainers) return;

    if (activeGridContainers.mode === 'top') {
      handleTopMouseMove(event);
    } else {
      handleBottomMouseMove(event);
    }
  }

  function handleTopMouseMove(event) {
    const mousePosition = getMousePosition(event);
    const newHeight = mousePosition.y - activeGridContainers.gridContainer1[0].getBoundingClientRect().top;
    const totalHeight = activeGridContainers.gridContainer1[0].offsetHeight + activeGridContainers.gridContainer2[0].offsetHeight + activeGridContainers.gridContainer3[0].offsetHeight;

    const newHeightPercentage = (newHeight / totalHeight) * 100;
    const remainingHeightPercentage = (100 - newHeightPercentage) / 2;

    activeGridContainers.gridContainer1.forEach(container => container.style.height = newHeightPercentage + '%');
    activeGridContainers.gridContainer2.forEach(container => container.style.height = remainingHeightPercentage + '%');
    activeGridContainers.gridContainer3.forEach(container => container.style.height = remainingHeightPercentage + '%');
    activeGridContainers.topDragDetector[0].style.height = (newHeight + 50) + 'px';
  }

  function handleBottomMouseMove(event) {
    const mousePosition = getMousePosition(event);
    const newHeight = activeGridContainers.gridContainer3[0].getBoundingClientRect().bottom - mousePosition.y;
    const totalHeight = activeGridContainers.gridContainer1[0].offsetHeight + activeGridContainers.gridContainer2[0].offsetHeight + activeGridContainers.gridContainer3[0].offsetHeight;

    const newHeightPercentage = (newHeight / totalHeight) * 100;
    const remainingHeightPercentage = (100 - newHeightPercentage) / 2;

    activeGridContainers.gridContainer3.forEach(container => container.style.height = newHeightPercentage + '%');
    activeGridContainers.gridContainer1.forEach(container => container.style.height = remainingHeightPercentage + '%');
    activeGridContainers.gridContainer2.forEach(container => container.style.height = remainingHeightPercentage + '%');
    activeGridContainers.bottomDragDetector[0].style.height = (newHeight + 50) + 'px';
  }

  function handleMouseDown(event) {
    const mousePosition = getMousePosition(event);
    const column1Rect = column1.getBoundingClientRect();
    const column2Rect = column2.getBoundingClientRect();
    const column3Rect = column3.getBoundingClientRect();

    if (mousePosition.x > column1Rect.right - DRAGGABLE_ZONE_WIDTH && mousePosition.x < column1Rect.right) {
      isResizing = true;
      activeColumns = { leftColumn: column1, rightColumn: column2 };
    } else if (mousePosition.x > column2Rect.left && mousePosition.x < column2Rect.left + DRAGGABLE_ZONE_WIDTH) {
      isResizing = true;
      activeColumns = { leftColumn: column1, rightColumn: column2 };
    } else if (mousePosition.x > column2Rect.right - DRAGGABLE_ZONE_WIDTH && mousePosition.x < column2Rect.right) {
      isResizing = true;
      activeColumns = { leftColumn: column2, rightColumn: column3 };
    } else if (mousePosition.x > column3Rect.left && mousePosition.x < column3Rect.left + DRAGGABLE_ZONE_WIDTH) {
      isResizing = true;
      activeColumns = { leftColumn: column2, rightColumn: column3 };
    } else {
      isResizing = false;
      activeColumns = null;
    }

    for (let i = 0; i < topDragDetectors.length; i++) {
      
      if (mousePosition.x > column1Rect.left && mousePosition.x < column1Rect.right) {
        i = 0;
      }
      else if (mousePosition.x > column2Rect.left && mousePosition.x < column2Rect.right) {
        i = 1;
      }
      else if (mousePosition.x > column3Rect.left && mousePosition.x < column3Rect.right) {
        i = 2;
      }
      const topDragDetectorRect = topDragDetectors[i].getBoundingClientRect();
      const bottomDragDetectorRect = bottomDragDetectors[i].getBoundingClientRect();

      if (mousePosition.y > topDragDetectorRect.bottom - DRAGGABLE_ZONE_HEIGHT && mousePosition.y < topDragDetectorRect.bottom) {
        GridResizing = true;
        activeGridContainers = {
          topDragDetector: [topDragDetectors[i]],
          bottomDragDetector: [bottomDragDetectors[i]],
          gridContainer1: [gridContainers1[i]],
          gridContainer2: [gridContainers2[i]],
          gridContainer3: [gridContainers3[i]],
          mode: 'top'
        };
        break;
      }
      else if (mousePosition.y > bottomDragDetectorRect.top && mousePosition.y < bottomDragDetectorRect.top + DRAGGABLE_ZONE_HEIGHT) {
        GridResizing = true;
        activeGridContainers = {
          topDragDetector: [topDragDetectors[i]],
          bottomDragDetector: [bottomDragDetectors[i]],
          gridContainer1: [gridContainers1[i]],
          gridContainer2: [gridContainers2[i]],
          gridContainer3: [gridContainers3[i]],
          mode: 'bottom'
        };
        break;
      }
      else {
        GridResizing = false;
        activeGridContainers = null;
      }
    }
  }

  function handleMouseUp() {
    isResizing = false;
    activeColumns = null;
    GridResizing = false;
    activeGridContainers = null;
  }

  document.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
});
