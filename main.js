var inputSearch=document.querySelector('.input-search');
var city=document.querySelector('.city');
var country=document.querySelector('.country');
var time=document.querySelector('.time')
var value=document.querySelector('.value');
var shortDesc=document.querySelector('.short-desc');
var visibility=document.querySelector('.visibility span')
var wind=document.querySelector('.wind span');
var cloud=document.querySelector('.cloud span');
var temperature=document.querySelector('.temperature')
var temperatureK=document.querySelector('.temperature span:last-child')
var inner=document.querySelector('.inner')
 function changeWeather(data){
     let cityName=data.name
     cityName===undefined?alert("Wrong city name, please re-enter.") : city.innerText = data.name
    country.innerText=data.sys.country
    let temp=value.innerText=Math.floor((data.main.temp-273.15))
    temp>=18?(document.body.className='hot'):(document.body.className='cold')
    shortDesc.innerText=data.weather[0].main
    visibility.innerText=data.visibility + '(m)'
    wind.innerText=data.wind.speed +'(m/s)'
    cloud.innerText=data.clouds.all+'(%)'
    time.innerText= new Date().toLocaleString()   
    inner.addEventListener('mouseover', e=>{
        value.innerText=Math.floor((data.main.temp-273.15)*1.8+32)
        temperatureK.innerHTML=`
        <sup>o</sup>
        F
    `
    })
    inner.addEventListener('mouseout', e=>{
        value.innerText=Math.floor(data.main.temp-273.15)
        temperatureK.innerHTML=` 
        <sup>o</sup>
        C
        `
    })
   
}
inputSearch.addEventListener('keydown',function(e){
    if(e.which==13){
        getWeather(e.target.value)
        inputSearch.value=''
    }
})
async function getWeather(input){
    let WeatherAPIURL=`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=9132cb50154a0d1e555bbdcdb3d46f2b`
    let data= await fetch(WeatherAPIURL).then(res=>res.json())
    changeWeather(data)
}
getWeather('Ha noi')

