document.addEventListener('DOMContentLoaded', function () {

    const closeButtons = document.querySelectorAll('.close-btn');

    function adjustGridContainerHeights(column) {
        const visibleGridContainers = Array.from(column.querySelectorAll('.grid-container')).filter(container => container.style.display !== 'none');
        const percentage = 100 / visibleGridContainers.length;

        visibleGridContainers.forEach(container => {
            container.style.height = percentage + '%';
        });
    }

    function handleCloseButtonClick(event) {
        const gridContainer = event.target.closest('.grid-container');
        const column = gridContainer.closest('.column');

        gridContainer.style.display = 'none';
        adjustGridContainerHeights(column);
    }

    closeButtons.forEach(button => {
        button.addEventListener('click', handleCloseButtonClick);
    });
});
