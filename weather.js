$(document).ready(function(){
//input
    let cityName;
//call api on search button
    $('button').on('click', function (){
       cityName = $('#cityInput').val()
       let url = 'http://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&APPID=24f795928727a00946fd850779c07817&units=imperial';
    
       $.getJSON(url,function(data){

    //current date
        let date = new Date();
        //day of week
        let day = date.getDay();
        let daysOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        day = daysOfTheWeek[day]; //end day
        //month
        let month = date.getMonth();
        let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        month = months[month]; //end month
        //day of month
        let dayOfMonth = date.getDate();
        //year
        let year = date.getFullYear();

    //weather info
        //city name
        cityName = data.city.name;
        //temperature
        let temp = data.list[0].main.temp;
        temp = Math.floor(temp);
        //current weather
        let weather = data.list[0].weather[0].main;
        let weatherDescription = data.list[0].weather[0].description;
        //weather icon
        let icon = data.list[0].weather[0].icon;
        //wind speed
        let windSpeed = data.list[0].wind.speed;
        
        $('#cityName').html(cityName);
        $('#weatherCondition').html(weather);
        $('#temperature').html(temp + '&#8457;');
        $('#date').html(day + ' ' + month + ' ' + dayOfMonth + ', ' + year);
        $('.windSpeed').html(windSpeed + ' mph winds');        
        });
    });
});