const apiKey = "0aa04cb08f8c1f6a8c7b36e01c080cef"

let countryAcronyms
const apiCountryURL = `https://flagsapi.com/${countryAcronyms}/flat/64.png`

const cityInput = document.querySelector("#cityInput")
const searchBtn = document.querySelector("#search")

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weatherIcon")
const countryElement = document.querySelector("#country")
const umidityElement = document.querySelector("#umidity span")
const windElement = document.querySelector("#wind span")

// Functions

const getWeatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    console.log(data)
}

const showWeatherData = city => {
    getWeatherData(city)
}
// Events

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const city = cityInput.value
    showWeatherData(city)
})