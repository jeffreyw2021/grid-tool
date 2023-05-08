const columns = document.querySelectorAll('.column');
const grids = document.querySelectorAll('.grid-container');
let dragrange = 20;

const updateFontSize = () => {
    const flipClockContainer = document.querySelector(".flip-clock-container");
    const secondsContainer = document.querySelector("#seconds-container");
    const ampmContainer = document.querySelector("#ampm-container");
    const divider = document.querySelector("#divider");

    const containerWidth = flipClockContainer.offsetWidth;
    const fontSize = containerWidth * 0.2;
    const subFontSize = containerWidth * 0.03;
    const marginY = containerWidth * 0.027;
    const marginX = containerWidth * 0.013;
    const dividerHeight = containerWidth * 0.0025;

    flipClockContainer.style.fontSize = `${fontSize}px`;
    secondsContainer.style.fontSize = `${subFontSize}px`;
    ampmContainer.style.fontSize = `${subFontSize}px`;

    ampmContainer.style.marginTop = `${marginY}px`;
    ampmContainer.style.marginLeft = `${marginX}px`;
    secondsContainer.style.marginBottom = `${marginY}px`;
    secondsContainer.style.marginRight = `${marginX}px`;

    divider.style.height = `${dividerHeight}px`;
};

const updateWeatherFontSize = () => {
    const weatherWidget = document.getElementById("weather-widget");
    const weatherHeader = document.querySelector("#weather-container h2");
    const exactTemp = document.getElementById("exact-temp");
    const weatherIcon = document.querySelector(".weather-icon i");
    const feelTemp = document.getElementById("feel-temp");
    const weatherDesc = document.getElementById("weather-desc");

    const forecastDays = document.querySelectorAll(".forecast .forcast-day");
    const forecastTemps = document.querySelectorAll(".forecast .forcast-temp");
    const forecastIcons = document.querySelectorAll(".forecast .forcast-icon");
    const forecastWeathers = document.querySelectorAll(".forecast .forcast-weather");

    const sunMoonList = document.querySelector(".sun-moon-list");
    const sunMoonItems = document.querySelectorAll(".sun-moon-item");
    const sunMoonIcons = document.querySelectorAll(".sun-moon-item i");

    const weatherWidgetWidth = weatherWidget.offsetWidth;
    const weatherWidgetHeight = weatherWidget.offsetHeight;

    const weatherHeaderFontSize = Math.min(weatherWidgetWidth * 0.05, weatherWidgetHeight * 0.1);
    const exactTempFontSize = Math.min(weatherWidgetWidth * 0.15, weatherWidgetHeight * 0.25);
    const weatherIconSize = Math.min(weatherWidgetWidth * 0.15, weatherWidgetHeight * 0.25);
    const feelTempFontSize = Math.min(weatherWidgetWidth * 0.04, weatherWidgetHeight * 0.08);
    const weatherDescFontSize = Math.min(weatherWidgetWidth * 0.04, weatherWidgetHeight * 0.08);

    const forecastDayFontSize = Math.min(weatherWidgetWidth * 0.03, weatherWidgetHeight * 0.06);
    const forecastTempFontSize = Math.min(weatherWidgetWidth * 0.04, weatherWidgetHeight * 0.08);
    const forecastIconSize = Math.min(weatherWidgetWidth * 0.06, weatherWidgetHeight * 0.12);
    const forecastWeatherFontSize = Math.min(weatherWidgetWidth * 0.02, weatherWidgetHeight * 0.04);
    
    const sunMoonItemFontSize = Math.min(weatherWidgetWidth * 0.02, weatherWidgetHeight * 0.04);
    const sunMoonListMinHeight = Math.min(weatherWidgetWidth * 0.12, weatherWidgetHeight * 0.2);
    const sunMoonIconSize = Math.min(weatherWidgetWidth * 0.04, weatherWidgetHeight * 0.08);

    weatherHeader.style.fontSize = `${weatherHeaderFontSize}px`;
    exactTemp.style.fontSize = `${exactTempFontSize}px`;
    weatherIcon.style.fontSize = `${weatherIconSize}px`;
    feelTemp.style.fontSize = `${feelTempFontSize}px`;
    weatherDesc.style.fontSize = `${weatherDescFontSize}px`;

    forecastDays.forEach(day => {
        day.style.fontSize = `${forecastDayFontSize}px`;
    });
    forecastTemps.forEach(temp => {
        temp.style.fontSize = `${forecastTempFontSize}px`;
    });
    forecastIcons.forEach(icon => {
        icon.style.fontSize = `${forecastIconSize}px`;
    });
    forecastWeathers.forEach(weather => {
        weather.style.fontSize = `${forecastWeatherFontSize}px`;
    });

    sunMoonList.style.minHeight = `${sunMoonListMinHeight}px`;
    sunMoonItems.forEach(item => {
        item.style.fontSize = `${sunMoonItemFontSize}px`;
    });
    sunMoonIcons.forEach(icon => {
        icon.style.fontSize = `${sunMoonIconSize}px`;
    });

    const hourlyTemps = document.querySelectorAll(".sun-moon-item .hourly-temp");
    const hourlyTempFontSize = Math.min(weatherWidgetWidth * 0.02, weatherWidgetHeight * 0.04);
    hourlyTemps.forEach(temp => {
        temp.style.fontSize = `${hourlyTempFontSize}px`;
    });
};

let isResizingColumns = false;
let isResizingGrids = false;
let columnToResize, columnToResizeNext;
let gridToResize, gridToResizeNext, gridToResizePrevious;
let lastX = 0;
let lastY = 0;
const threshold = 10;

columns.forEach((column, index) => {
    column.addEventListener('mousedown', (e) => {
        const target = e.target;
        const targetRect = target.getBoundingClientRect();
        const leftEdge = targetRect.left;
        const rightEdge = targetRect.right;

        if ((index > 0 && e.clientX >= leftEdge - dragrange && e.clientX <= leftEdge + dragrange) ||
            (index < columns.length - 1 && e.clientX >= rightEdge - dragrange && e.clientX <= rightEdge + dragrange)) {
            document.body.classList.add('resize-columns');
        } else {
            document.body.classList.remove('resize-columns');
        }

        if (index > 0 && e.clientX >= leftEdge - dragrange && e.clientX <= leftEdge + dragrange) {
            columnToResize = columns[index - 1];
            columnToResizeNext = column;
            isResizingColumns = true;
        } else if (index < columns.length - 1 && e.clientX >= rightEdge - dragrange && e.clientX <= rightEdge + dragrange) {
            columnToResize = column;
            columnToResizeNext = columns[index + 1];
            isResizingColumns = true;
        }

        lastX = e.clientX;
    });
});

grids.forEach((grid, index) => {
    grid.addEventListener('mousedown', (e) => {
        const target = e.target;
        const targetRect = target.getBoundingClientRect();
        const topEdge = targetRect.top;
        const bottomEdge = targetRect.bottom;

        if ((index % 2 === 0 && e.clientY >= bottomEdge - dragrange && e.clientY <= bottomEdge + dragrange) ||
            (index % 2 === 1 && e.clientY >= topEdge - dragrange && e.clientY <= topEdge + dragrange)) {
            document.body.classList.add('resize-grids');
        } else {
            document.body.classList.remove('resize-grids');
        }

        if (index % 2 === 0 && e.clientY >= bottomEdge - dragrange && e.clientY <= bottomEdge + dragrange) {
            gridToResize = grids[index];
            gridToResizeNext = grids[index + 1];
            isResizingGrids = true;
        } else if (index % 2 === 1 && e.clientY >= topEdge - dragrange && e.clientY <= topEdge + dragrange) {
            gridToResize = grids[index - 1];
            gridToResizeNext = grids[index];
            isResizingGrids = true;
        }

        lastY = e.clientY;
    });
});

function onMouseMove(e) {
    if (isResizingColumns || isResizingGrids) {
        document.body.classList.add('no-select');
    } else {
        document.body.classList.remove('no-select');
    }
    if (isResizingColumns) {
        const deltaX = e.clientX - lastX;
        if (Math.abs(deltaX) >= threshold) {
            const newWidth = columnToResize.offsetWidth + deltaX;
            const newWidthNext = columnToResizeNext.offsetWidth - deltaX;
            columnToResize.style.width = newWidth + 'px';
            columnToResizeNext.style.width = newWidthNext + 'px';
            lastX = e.clientX;
        }
        updateWeatherFontSize();
        updateFontSize();
    }
    if (isResizingGrids) {
        const deltaY = e.clientY - lastY;
        if (Math.abs(deltaY) >= threshold) {
            const newHeight = gridToResize.offsetHeight + deltaY;
            const newHeightNext = gridToResizeNext.offsetHeight - deltaY;
            gridToResize.style.height = newHeight + 'px';
            gridToResizeNext.style.height = newHeightNext + 'px';
            lastY = e.clientY;
        }
        updateWeatherFontSize();
    }
}

function onMouseUp() {
    isResizingColumns = false;
    isResizingGrids = false;

    lastX = 0;
    lastY = 0;

    columnToResize = null;
    columnToResizeNext = null;
    gridToResize = null;
    gridToResizeNext = null;

    document.body.classList.remove('no-select');
    document.body.classList.remove('resize-columns');
    document.body.classList.remove('resize-grids');

}

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);