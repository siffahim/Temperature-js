document.getElementById('waring').style.display = 'none';
const tempareture = () => {
    const inputField = document.getElementById('inputField');
    const inputFieldText = inputField.value;

    if (inputFieldText == '') {
        alert('please,write here')

    } else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputFieldText}&appid=${'8a87d865049fdb358233a36db352b7f8'}&units=metric`
    
        fetch(url).then(res => res.json()).then(json => displayWeather(json))
    }
    inputField.value = '';
}

const searchWetaherText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayWeather = tempareture => {
    console.log(tempareture.cod)
    if (tempareture.cod === '404') {
        document.getElementById('waring').style.display = 'block';
        document.getElementById('weather').style.display = 'none';
    }
    else {
        searchWetaherText('city', tempareture.name);
        searchWetaherText('tempareture', tempareture.main.temp);
        searchWetaherText('condition', tempareture.weather[0].main);
        searchWetaherText('humidity', tempareture.main.humidity);
        
        const img = `http://openweathermap.org/img/wn/${tempareture.weather[0].icon}@2x.png`;
        const imgIcon = document.getElementById('img-icon');
        imgIcon.setAttribute('src', img)
        
        document.getElementById('waring').style.display = 'none';
        document.getElementById('weather').style.display = 'block';
    }


    //another way
   /*  try {
        const weather = document.getElementById('weather');
        weather.textContent = '';
        const div = document.createElement('div');
        div.innerHTML = `
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" width="100px"/>
            <h1>${data.name}</h1>
            <h2><span>${(data.main.temp - 273.15).toFixed(2)}</span>&deg;C</h2>
            <h6>${data.weather[0].main}</h6>
            <p>Humidity: ${data.main.humidity}%</p>
        `
    
        weather.appendChild(div)
        document.getElementById('waring').style.display = 'none';
    } catch (err) {
        document.getElementById('waring').style.display = 'block';
    }
 */


}