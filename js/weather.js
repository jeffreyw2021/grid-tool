function getWeatherBackground(description) {
    const weatherConditions = [
        { condition: 'clear sky', background: { day: 'linear-gradient(135deg, #56CCF2, #2F80ED)', night: 'linear-gradient(135deg, #020024, #090979)' } },
        { condition: 'few clouds', background: { day: 'linear-gradient(135deg, #84D8E6, #3F90C3)', night: 'linear-gradient(135deg, #272727, #2e2e2e)' } },
        { condition: 'scattered clouds', background: { day: 'linear-gradient(135deg, #A7E0F2, #4C9FD8)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } },
        { condition: 'broken clouds', background: { day: 'linear-gradient(135deg, #C1EAF5, #5FB0E8)', night: 'linear-gradient(135deg, #2a2a2a, #050505)' } },
        { condition: 'overcast clouds', background: { day: 'linear-gradient(135deg, #B1BFD5, #5C789E)', night: 'linear-gradient(135deg, #1c1c1c, #070707)' } },
        { condition: 'shower rain', background: { day: 'linear-gradient(135deg, #24E2B5, #0D7C77)', night: 'linear-gradient(135deg, #1a1a1a, #050505)' } },
        { condition: 'light rain', background: { day: 'linear-gradient(135deg, #84E3CC, #218D84)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } },
        { condition: 'moderate rain', background: { day: 'linear-gradient(135deg, #46D6C1, #1D7C76)', night: 'linear-gradient(135deg, #272727, #2e2e2e)' } },
        { condition: 'heavy intensity rain', background: { day: 'linear-gradient(135deg, #00BFB2, #00765E)', night: 'linear-gradient(135deg, #020024, #090979)' } },
        { condition: 'very heavy rain', background: { day: 'linear-gradient(135deg, #00A49C, #00564C)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } },
        { condition: 'extreme rain', background: { day: 'linear-gradient(135deg, #009488, #004B3A)', night: 'linear-gradient(135deg, #2a2a2a, #050505)' } },
        { condition: 'freezing rain', background: { day: 'linear-gradient(135deg, #84E3CC, #006954)', night: 'linear-gradient(135deg, #1a1a1a, #050505)' } },
        { condition: 'light intensity shower rain', background: { day: 'linear-gradient(135deg, #84E3CC, #0D7C77)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } },
        { condition: 'heavy intensity shower rain', background: { day: 'linear-gradient(135deg, #46D6C1, #0D7C77)', night: 'linear-gradient(135deg, #272727, #2e2e2e)' } },
        { condition: 'ragged shower rain', background: { day: 'linear-gradient(135deg, #24E2B5, #00564C)', night: 'linear-gradient(135deg, #1a1a1a, #050505)' } },
        { condition: 'thunderstorm', background: { day: 'linear-gradient(135deg, #FFD86A, #FF9600)', night: 'linear-gradient(135deg, #5a5a5a, #090979)' } },
        { condition: 'light thunderstorm', background: { day: 'linear-gradient(135deg, #FFEA95, #FFB200)', night: 'linear-gradient(135deg, #272727, #2e2e2e)' } },
        { condition: 'heavy thunderstorm', background: { day: 'linear-gradient(135deg, #FFC300, #FF7700)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } },
        { condition: 'ragged thunderstorm', background: { day: 'linear-gradient(135deg, #FFD64B, #FF9600)', night: 'linear-gradient(135deg, #1a1a1a, #050505)' } },
        { condition: 'thunderstorm with light rain', background: { day: 'linear-gradient(135deg, #FFE17F, #FF9600)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } },
        { condition: 'thunderstorm with rain', background: { day: 'linear-gradient(135deg, #FFD64B, #FF7700)', night: 'linear-gradient(135deg, #272727, #2e2e2e)' } },
        { condition: 'thunderstorm with heavy rain', background: { day: 'linear-gradient(135deg, #FFC300, #FF7700)', night: 'linear-gradient(135deg, #020024, #090979)' } },
        { condition: 'thunderstorm with light drizzle', background: { day: 'linear-gradient(135deg, #FFE17F, #FFB200)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } },
        { condition: 'thunderstorm with drizzle', background: { day: 'linear-gradient(135deg, #FFE17F, #FFB200)', night: 'linear-gradient(135deg, #272727, #2e2e2e)' } },
        { condition: 'thunderstorm with heavy drizzle', background: { day: 'linear-gradient(135deg, #FFD64B, #FF9600)', night: 'linear-gradient(135deg, #1a1a1a, #050505)' } },
        { condition: 'light intensity drizzle', background: { day: 'linear-gradient(135deg, #A6F0E4, #4BADC7)', night: 'linear-gradient(135deg, #272727, #2e2e2e)' } },
        { condition: 'drizzle', background: { day: 'linear-gradient(135deg, #8CDAE1, #3F90C3)', night: 'linear-gradient(135deg, #1a1a1a, #050505)' } },
        { condition: 'heavy intensity drizzle', background: { day: 'linear-gradient(135deg, #64C4DB, #2D80B3)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } },
        { condition: 'light intensity drizzle rain', background: { day: 'linear-gradient(135deg, #A7E0F2, #4C9FD8)', night: 'linear-gradient(135deg, #272727, #2e2e2e)' } },
        { condition: 'drizzle rain', background: { day: 'linear-gradient(135deg, #84D8E6, #3F90C3)', night: 'linear-gradient(135deg, #1a1a1a, #050505)' } },
        { condition: 'heavy intensity drizzle rain', background: { day: 'linear-gradient(135deg, #64C4DB, #2D80B3)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } },
        { condition: 'shower rain and drizzle', background: { day: 'linear-gradient(135deg, #84D8E6, #218D84)', night: 'linear-gradient(135deg, #1a1a1a, #050505)' } },
        { condition: 'heavy shower rain and drizzle', background: { day: 'linear-gradient(135deg, #46D6C1, #1D7C76)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } },
        { condition: 'shower drizzle', background: { day: 'linear-gradient(135deg, #A7E0F2, #4C9FD8)', night: 'linear-gradient(135deg, #272727, #2e2e2e)' } },
        { condition: 'light snow', background: { day: 'linear-gradient(135deg, #C4D4F1, #7081AD)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } },
        { condition: 'snow', background: { day: 'linear-gradient(135deg, #A6BDEA, #5777B0)', night: 'linear-gradient(135deg, #1a1a1a, #050505)' } },
        { condition: 'heavy snow', background: { day: 'linear-gradient(135deg, #819AC8, #3F5193)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } },
        { condition: 'sleet', background: { day: 'linear-gradient(135deg, #B0C1E1, #5C789E)', night: 'linear-gradient(135deg, #1a1a1a, #050505)' } },
        { condition: 'light shower sleet', background: { day: 'linear-gradient(135deg, #C4D4F1, #7081AD)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } },
        { condition: 'shower sleet', background: { day: 'linear-gradient(135deg, #A6BDEA, #5777B0)', night: 'linear-gradient(135deg, #1a1a1a, #050505)' } },
        { condition: 'light rain and snow', background: { day: 'linear-gradient(135deg, #B0C1E1, #5C789E)', night: 'linear-gradient(135deg, #1a1a1a, #050505)' } },
        { condition: 'rain and snow', background: { day: 'linear-gradient(135deg, #A6BDEA, #5777B0)', night: 'linear-gradient(135deg, #1a1a1a, #050505)' } },
        { condition: 'light shower snow', background: { day: 'linear-gradient(135deg, #C4D4F1, #7081AD)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } },
        { condition: 'shower snow', background: { day: 'linear-gradient(135deg, #A6BDEA, #5777B0)', night: 'linear-gradient(135deg, #1a1a1a, #050505)' } },
        { condition: 'heavy shower snow', background: { day: 'linear-gradient(135deg, #819AC8, #3F5193)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } },
        { condition: 'mist', background: { day: 'linear-gradient(135deg, #AECBD8, #517C9B)', night: 'linear-gradient(135deg, #1a1a1a, #050505)' } },
        { condition: 'haze', background: { day: 'linear-gradient(135deg, #AECBD8, #517C9B)', night: 'linear-gradient(135deg, #1a1a1a, #050505)' } },
        { condition: 'smoke', background: { day: 'linear-gradient(135deg, #BDBDBD, #424242)', night: 'linear-gradient(135deg, #1a1a1a, #050505)' } },
        { condition: 'dust', background: { day: 'linear-gradient(135deg, #FFCC80, #E65100)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } },
        { condition: 'sand', background: { day: 'linear-gradient(135deg, #FFAB40, #BF360C)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } },
        { condition: 'ash', background: { day: 'linear-gradient(135deg, #A1887F, #4E342E)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } },
        { condition: 'squall', background: { day: 'linear-gradient(135deg, #BDBDBD, #616161)', night: 'linear-gradient(135deg, #1a1a1a, #050505)' } },
        { condition: 'tornado', background: { day: 'linear-gradient(135deg, #212121, #000000)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } },
        { condition: 'volcanic ash', background: { day: 'linear-gradient(135deg, #8D6E63, #3E2723)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } },
        { condition: 'sand/dust whirls', background: { day: 'linear-gradient(135deg, #F57C00, #BF360C)', night: 'linear-gradient(135deg, #3d3d3d, #222222)' } }
    ];


    for (const condition of weatherConditions) {
        if (description.includes(condition.condition)) {
            return isNight() ? condition.background.night : condition.background.day;
        }
    }

    // Default background if no specific condition is found
    return isNight() ? 'linear-gradient(135deg, #3d3d3d, #222222)' : 'linear-gradient(135deg, #C9D6FF, #E2E2E2)';
}

function isNight() {
    const hours = new Date().getHours();
    return hours < 6 || hours >= 18;
}

// Function to map OpenWeatherMap icons to Font Awesome icons
function getFontAwesomeIcon(icon) {
    switch (icon) {
        case '01d': // clear sky (day)
            return 'fas fa-sun';
        case '01n': // clear sky (night)
            return 'fas fa-moon';
        case '02d': // few clouds (day)
        case '02n': // few clouds (night)
            return 'fas fa-cloud-sun';
        case '03d': // scattered clouds (day)
        case '03n': // scattered clouds (night)
        case '04d': // broken clouds (day)
        case '04n': // broken clouds (night)
            return 'fas fa-cloud';
        case '09d': // shower rain (day)
        case '09n': // shower rain (night)
            return 'fas fa-cloud-showers-heavy';
        case '10d': // rain (day)
        case '10n': // rain (night)
            return 'fas fa-cloud-rain';
        case '11d': // thunderstorm (day)
        case '11n': // thunderstorm (night)
            return 'fas fa-bolt';
        case '13d': // snow (day)
        case '13n': // snow (night)
            return 'fas fa-snowflake';
        case '50d': // mist (day)
        case '50n': // mist (night)
            return 'fas fa-smog';
        default:
            return 'fas fa-cloud';
    }
}

navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // Call Sunrise-Sunset API to get sunrise and sunset data
    const date = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
    fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&date=${date}&formatted=0`)
        .then((response) => response.json())
        .then((sunData) => {
            const sunrise = new Date(sunData.results.sunrise).getHours();
            const sunset = new Date(sunData.results.sunset).getHours();

            // Generate sun/moon condition list for each hour
            const sunMoonList = Array.from({ length: 24 }, (_, i) => {
                const isDaytime = i >= sunrise && i < sunset;
                const dayNightIcon = isDaytime ? 'fas fa-sun' : 'fas fa-moon';
                return `<li class="sun-moon-item"><i class="${dayNightIcon}" aria-hidden="true"></i> ${i}:00</li>`;
            }).join('');

            // Call OpenWeatherMap API to get weather data
            fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=431594b196de136c21bc7888f08b5444`
            )
                .then((response) => response.json())
                .then((data) => {
                    // Extract relevant data from API response
                    const { city, list } = data;
                    const currentWeather = list[0];

                    // Set background based on weather description
                    const weatherWidget = document.getElementById("weather-widget");
                    weatherWidget.style.background = getWeatherBackground(currentWeather.weather[0].description);

                    // Get Font Awesome icon
                    const icon = getFontAwesomeIcon(currentWeather.weather[0].icon);

                    // Define array to map day of week
                    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

                    // Group forecast data by day of week
                    const forecastDataByDay = {};
                    list.forEach((forecast) => {
                        const date = new Date(forecast.dt * 1000);
                        const dayOfWeek = daysOfWeek[date.getDay()];
                        if (!forecastDataByDay[dayOfWeek]) {
                            forecastDataByDay[dayOfWeek] = [];
                        }
                        forecastDataByDay[dayOfWeek].push(forecast);
                    });

                    // Create HTML to display weather data
                    const forecastHtml = Object.entries(forecastDataByDay).map(([dayOfWeek, forecasts]) => {
                        const icon = getFontAwesomeIcon(forecasts[0].weather[0].icon);
                        const temp = Math.round(forecasts[0].main.temp);
                        const desc = forecasts[0].weather[0].description;
                        return `
                        <div class="forecast">
                        <p class="forcast-day">${dayOfWeek}</p>
                        <p class="forcast-temp">${temp}°</p>
                        <i class="${icon} forcast-icon" aria-hidden="true"></i>
                        <p class="forcast-weather">${desc}</p>
                        </div>
                    `;
                    }).join('');

                    // Determine whether it's day or night
                    const currentHour = new Date().getHours();
                    const isDaytime = currentHour >= sunrise && currentHour < sunset;
                    const dayNightIcon = isDaytime ? 'fas fa-sun' : 'fas fa-moon';

                    const html = `
                    <div id="weather-container">
                        <h2>${city.name}</h2>
                        <div id="tempWeather">
                            <p id="exact-temp">${Math.round(currentWeather.main.temp)}°</p>
                            <div class="weather-icon">
                                <i class="${icon}" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div id="weather-details">
                            <p id="feel-temp">feels like: ${Math.round(currentWeather.main.feels_like)}°</p>
                            <p id="weather-desc">${currentWeather.weather[0].description}</p>
                        </div>
                        <ul class="sun-moon-list">
                            ${sunMoonList}
                        </ul>
                        <div id="weather-forecast">
                            ${forecastHtml}
                        </div>
                    </div>
                `;

                    weatherWidget.innerHTML = html;
                });
        });
});

