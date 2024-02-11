const city = document.getElementById("cityName")

const btn = document.getElementById("btn")

const temp = document.getElementById("temp")




const getWeather = async () => {
    console.log("Shree")
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=82b88acebb7357102178513e1785e179&units=metric`)

    const data = await res.json()
    console.log(data)
    temp.innerText = `${data.main.temp} Degree Celsius`
    console.log(city.value)

}



btn.addEventListener("click", getWeather)