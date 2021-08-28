document.getElementById('waring').style.display = 'none';
const tempareture = () => {
    const inputField = document.getElementById('inputField');
    const inputFieldText = inputField.value;

    if (inputFieldText == '') {
        alert('please,write here')

    } else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputFieldText}&appid=${'8a87d865049fdb358233a36db352b7f8'}`
    
        fetch(url).then(res => res.json()).then(json => displayWeather(json))
    }


    

    inputField.value = '';
}

const displayWeather = data => {
  console.log(data)
    const weather = document.getElementById('weather');
    weather.textContent = '';
    
    try {
        const div = document.createElement('div');
        div.innerHTML = `
            <h1>${data.name}</h1>
            <h2><span>${data.main.temp}</span>&deg;C</h2>
            <h6>${data.weather[0].main}</h6>
            <p>${data.weather[0].description}</p>
        `
    
        weather.appendChild(div)
        document.getElementById('waring').style.display = 'none';
    } catch (err) {
        document.getElementById('waring').style.display = 'block';
    }



}