//require('dotenv').config()
//console.log(process.env)
async function getWeather() {
    const location = document.getElementById('loca').value;
    console.log(location)
    const apiKey = 'api-key';
    const url = `api-url`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Location is not in the API database');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('result').innerHTML = error.message;
    }
}

function displayWeather(data) {
    const weatherDescription = data.current.condition.text;
    const temperature = data.current.temp_c;
    const city = data.location.name;
    const country = data.location.country;

    document.getElementById('result').innerHTML = `
        <h2>${city}, ${country}</h2>
        <p>${weatherDescription}</p>
        <p>Temperature: ${temperature}°C</p>
        <button id=''
    `;
}
