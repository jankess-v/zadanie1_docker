const KEY = '238435330a34742afe868f5a779865d0'
document.addEventListener('DOMContentLoaded', () => {
    const now = new Date().toISOString();
    console.log(`Serwer uruchomiono - ${now}`)
    console.log(`Jakub Jankowski`)
    console.log(`Aplikacja działa na porcie 3000`)
    const countrySelect = document.getElementById('country');
    const citySelect = document.getElementById('city');

    const citiesByCountry = {
        PL: [
            { name: "Warszawa", value: "Warsaw" },
            { name: "Kraków", value: "Krakow" },
            { name: "Gdańsk", value: "Gdansk" }
        ],
        DE: [
            { name: "Berlin", value: "Berlin" },
            { name: "Monachium", value: "Munich" },
            { name: "Hamburg", value: "Hamburg" }
        ]
    };

    countrySelect.addEventListener('change', () => {
        const selectedCountry = countrySelect.value;

        citySelect.innerHTML = '';
        citySelect.disabled = true;

        if (selectedCountry) {
            citySelect.disabled = false;

            const defaultOption = document.createElement('option');
            defaultOption.textContent = '-- Wybierz miasto --';
            defaultOption.value = '';
            citySelect.appendChild(defaultOption);

            citiesByCountry[selectedCountry].forEach(city => {
                const option = document.createElement('option');
                option.textContent = city.name;
                option.value = city.value;
                citySelect.appendChild(option);
            });
        } else {
            const option = document.createElement('option');
            option.textContent = '-- Najpierw wybierz kraj --';
            option.value = '';
            citySelect.appendChild(option);
        }
    });

    const button = document.getElementById('submit');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const city = citySelect.value;
        fetchData(city);
    });
});

function fetchData(city) {
    const weather = document.getElementById('weather');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric&lang=pl`
    fetch(url)
        .then(response => {
            if(!response.ok) throw new Error("Nie udało się pobrać danych pogodowych")
            return response.json()
        })
        .then(data => {
            const temp = data.main.temp
            const weatherData = data.weather[0].description

            weather.innerHTML= `
                <h2>Pogoda w ${city}:</h2>
                <p>Temperatura: ${temp}°C</p>
                <p>Warunki: ${weatherData}</p>
            `
        })
        .catch(err => {
            weather.innerHTML = `<p style="color:red;">Błąd: ${err.message}</p>`;
        })
}