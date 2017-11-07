/*This is my script for the open weather API*/

document.getElementById("theCity")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("myButton").click();
    }
});

var theButton = document.getElementById("myButton");

theButton.addEventListener("click", getWeather, false);

function getWeather() {
    
    var userCity = document.getElementById("theCity").value;
    
    var theAPICall = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + userCity + "&units=metric&APPID=68a89318b5cc992b38418286e0e6fb29&cnt=7";
    
   
    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", theAPICall, true);
    
    myRequest.onload = function() {
        
        if (myRequest.readyState == 4 && myRequest.status == 200) {

            var myData = JSON.parse(myRequest.responseText);
            
            
            /* ======= NAVBAR TOP ========= */
            
            document.getElementById("navbar").style.position = "relative";
            document.getElementById("navbar").style.top = 0;

            
            /* ======= HIDE SLIDESHOW ========= */

            document.getElementById("bgSlides").style.display = "none";

            
            /* ======= REVEAL WEEK TABLE ========= */

            document.getElementById("weatherTable").style.visibility = "visible";

            
            /* ======= TODAY ========= */
            
            document.getElementById("today").innerHTML = "TODAY";
            
            
            /* ======= TODAY'S DATE ========= */
            
            var currentDate = new Date();
            
            var day = currentDate.getDate();
            var month = currentDate.getMonth() + 1;
            var year = currentDate.getFullYear();

            currentDate = day + "/" + month + "/" + year;

            document.getElementById("todaysDate").innerHTML = currentDate;
            
            
            /* ======= CHOSEN CITY  ========= */
            
            document.getElementById("cityTitle").innerHTML = myData.city.name;
            
            
            /* ======= CHOSEN CITY COUNTRY ========= */
            
            document.getElementById("country").innerHTML = myData.city.country;
            
            
            /* ======= BACKGROUND IMAGE ========= */
            

            /* ====== IMAGES BACKGROUND OPTION ======= */

            
            //sunny
            if (myData.list[0].weather[0].icon == "01d" || myData.list[0].weather[0].icon == "01n")
            {
            document.getElementById("bgImg").src = "img/sun2.jpeg";
            }
            //few clouds
            else if (myData.list[0].weather[0].icon == "02d" || myData.list[0].weather[0].icon == "02n")
            {
            document.getElementById("bgImg").src = "img/clouds1.jpeg";
            }
            //scattered clouds
            else if (myData.list[0].weather[0].icon == "03d" || myData.list[0].weather[0].icon == "03n")
            {
            document.getElementById("bgImg").src = "img/clouds3.jpg";
            }
            //broken clouds
            else if (myData.list[0].weather[0].icon == "04d" || myData.list[0].weather[0].icon == "04n")
            {
            document.getElementById("bgImg").src = "img/darkclouds2.jpeg";
            }
            //shower rain
            else if (myData.list[0].weather[0].icon == "09d" || myData.list[0].weather[0].icon == "09n")
            {
            document.getElementById("bgImg").src = "img/rain7.jpg";
            }
            //rain
            else if (myData.list[0].weather[0].icon == "10d" || myData.list[0].weather[0].icon == "10n")
            {
            document.getElementById("bgImg").src = "img/rain7.jpg";
            }
            //thunderstorm
            else if (myData.list[0].weather[0].icon == "11d" || myData.list[0].weather[0].icon == "11n")
            {
            document.getElementById("bgImg").src = "img/storm3.jpg";
            }
            //snow
            else if (myData.list[0].weather[0].icon == "13d" || myData.list[0].weather[0].icon == "13n")
            {
            document.getElementById("bgImg").src = "img/snow2.jpg";
            }
            //mist
            else if (myData.list[0].weather[0].icon == "50d" || myData.list[0].weather[0].icon == "50n")
            {
            document.getElementById("bgImg").src = "img/mist2.jpg";
            }
            
            
            /* ====== VIDEOS BACKGROUND OPTION ======= */
            

//                //sunny
//                if (myData.list[0].weather[0].icon == "01d" || myData.list[0].weather[0].icon == "01n")
//                {
//                var myBg = document.createElement("video");
//                myBg.src = "vids/Sun1.mp4";
//                myBg.setAttribute("autoplay", "autoplay");
//                myBg.setAttribute("loop", "loop");
//                myBg.muted = true;
//                document.getElementById("bgImg").appendChild(myBg);
//                }
//                //few clouds
//                else if (myData.list[0].weather[0].icon == "02d" || myData.list[0].weather[0].icon == "02n")
//                {
//                var myBg = document.createElement("video");
//                myBg.src = "vids/Clouds5.mp4";
//                myBg.setAttribute("autoplay", "autoplay");
//                myBg.setAttribute("loop", "loop");
//                myBg.muted = true;
//                document.getElementById("bgImg").appendChild(myBg);
//                }
//                // scattered clouds
//                else if (myData.list[0].weather[0].icon == "03d" || myData.list[0].weather[0].icon == "03n")
//                {
//                var myBg = document.createElement("video");
//                myBg.src = "vids/Clouds3.mp4";
//                myBg.setAttribute("autoplay", "autoplay");
//                myBg.setAttribute("loop", "loop");
//                myBg.muted = true;
//                document.getElementById("bgImg").appendChild(myBg);
//                }
//                // broken clouds
//                else if (myData.list[0].weather[0].icon == "04d" || myData.list[0].weather[0].icon == "04n")
//                {
//                var myBg = document.createElement("video");
//                myBg.src = "vids/DarkClouds1.mp4";
//                myBg.setAttribute("autoplay", "autoplay");
//                myBg.setAttribute("loop", "loop");
//                myBg.muted = true;
//                document.getElementById("bgImg").appendChild(myBg);
//                }
//                // shower rain
//                else if (myData.list[0].weather[0].icon == "09d" || myData.list[0].weather[0].icon == "09n")
//                {
//                var myBg = document.createElement("video");
//                myBg.src = "vids/Rain3.mp4";
//                myBg.setAttribute("autoplay", "autoplay");
//                myBg.setAttribute("loop", "loop");
//                myBg.muted = true;
//                document.getElementById("bgImg").appendChild(myBg);
//                }
//                // rain
//                else if (myData.list[0].weather[0].icon == "10d" || myData.list[0].weather[0].icon == "10n")
//                {
//                var myBg = document.createElement("video");
//                myBg.src = "vids/Rain3.mp4";
//                myBg.setAttribute("autoplay", "autoplay");
//                myBg.setAttribute("loop", "loop");
//                myBg.muted = true;
//                document.getElementById("bgImg").appendChild(myBg);
//                }
//                // thunderstorm
//                else if (myData.list[0].weather[0].icon == "11d" || myData.list[0].weather[0].icon == "11n")
//                {
//                var myBg = document.createElement("video");
//                myBg.src = "vids/Storm1.mp4";
//                myBg.setAttribute("autoplay", "autoplay");
//                myBg.setAttribute("loop", "loop");
//                myBg.muted = true;
//                document.getElementById("bgImg").appendChild(myBg);
//                }
//                // snow
//                else if (myData.list[0].weather[0].icon == "13d" || myData.list[0].weather[0].icon == "13n")
//                {
//                var myBg = document.createElement("video");
//                myBg.src = "vids/Snow3.mp4";
//                myBg.setAttribute("autoplay", "autoplay");
//                myBg.setAttribute("loop", "loop");
//                myBg.muted = true;
//                document.getElementById("bgImg").appendChild(myBg);
//                }
//                // mist
//                else if (myData.list[0].weather[0].icon == "50d" || myData.list[0].weather[0].icon == "50n")
//                {
//                var myBg = document.createElement("video");
//                myBg.src = "vids/Rain1.mp4";
//                myBg.setAttribute("autoplay", "autoplay");
//                myBg.setAttribute("loop", "loop");
//                myBg.muted = true;
//                document.getElementById("bgImg").appendChild(myBg);
//                }
            
            
            
            
            
            /* ======= ICON IMAGE  ========= */


            //sunny
            if (myData.list[0].weather[0].icon == "01d" || myData.list[0].weather[0].icon == "01n")
            {
            document.getElementById("imageToday").src = "icons/sun.png";
            }
            //few clouds
            else if (myData.list[0].weather[0].icon == "02d" || myData.list[0].weather[0].icon == "02n")
            {
            document.getElementById("imageToday").src = "icons/suncloud2.png";
            }
            //scattered clouds
            else if (myData.list[0].weather[0].icon == "03d" || myData.list[0].weather[0].icon == "03n")
            {
            document.getElementById("imageToday").src = "icons/cloud1.png";
            }
            //broken clouds
            else if (myData.list[0].weather[0].icon == "04d" || myData.list[0].weather[0].icon == "04n")
            {
            document.getElementById("imageToday").src = "icons/clouds2.png";
            }
            //shower rain
            else if (myData.list[0].weather[0].icon == "09d" || myData.list[0].weather[0].icon == "09n")
            {
            document.getElementById("imageToday").src = "icons/rain.png";
            }
            //rain
            else if (myData.list[0].weather[0].icon == "10d" || myData.list[0].weather[0].icon == "10n")
            {
            document.getElementById("imageToday").src = "icons/rain.png";
            }
            //thunderstorm
            else if (myData.list[0].weather[0].icon == "11d" || myData.list[0].weather[0].icon == "11n")
            {
            document.getElementById("imageToday").src = "icons/thunder.png";
            }
            //snow
            else if (myData.list[0].weather[0].icon == "13d" || myData.list[0].weather[0].icon == "13n")
            {
            document.getElementById("imageToday").src = "icons/snow.png";
            }
            //mist
            else if (myData.list[0].weather[0].icon == "50d" || myData.list[0].weather[0].icon == "50n")
            {
            document.getElementById("imageToday").src = "icons/mist.png";
            }
            
            
            /* ======= HIGH TEMP  ========= */
            
            document.getElementById("highToday").innerHTML = Math.round(myData.list[0].temp.max) + "&deg;C";
            
            document.getElementById("highTitle").innerHTML = "High:";
            
            
            /* ======= LOW TEMP  ========= */
            
            document.getElementById("lowToday").innerHTML = Math.round(myData.list[0].temp.min) + "&deg;C";
            
            document.getElementById("lowTitle").innerHTML = "Low:";
            
            
            /* ======= WEATHER DESC  ========= */
           
            if (myData.list[0].weather[0].description == "sky is clear" || myData.list[0].weather[0].description == "sky is clear")
            {
            document.getElementById("dayDescription").innerHTML = "Clear Sky";
            } 
            else {
               document.getElementById("dayDescription").innerHTML = myData.list[0].weather[0].description; 
            }
            
            
            /*This is the code for the 3 day forecast*/
            
            var D0 = new Date (myData.list[0].dt *1000);
            //console.log(D0);
            var D1 = new Date (myData.list[1].dt *1000);
            //console.log(D1);
            var D2 = new Date (myData.list[2].dt *1000);
            //console.log(D2);
            var D3 = new Date (myData.list[3].dt *1000);
            //console.log(D3);
            var D4 = new Date (myData.list[4].dt *1000);
            //console.log(D4);
            var D5 = new Date (myData.list[5].dt *1000);
            //console.log(D5);
            var D6 = new Date (myData.list[6].dt *1000);
            //console.log(D6);

            var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            
            
//            /* ========= DATES FOR WEEK TABLE ============ */
//            
//            //DAY 1
//            var dayOne = new Date();
//            dayOne.setDate(dayOne.getDate() + 1);
//            var day1 = dayOne.getDate();
//            var month1 = dayOne.getMonth() + 1;
//            var year1 = dayOne.getFullYear();
//            dayOne = day1 + "/" + month1 + "/" + year1;
//            
//            document.getElementById("r1date").innerHTML = dayOne;
//            
//            //DAY 2
//            var dayTwo = new Date();
//            dayTwo.setDate(dayTwo.getDate() + 2);
//            var day2 = dayTwo.getDate();
//            var month2 = dayTwo.getMonth() + 1;
//            var year2 = dayTwo.getFullYear();
//            dayTwo = day2 + "/" + month2 + "/" + year2;
//            
//            document.getElementById("r2date").innerHTML = dayTwo;
//            
//            //DAY 3
//            var dayThree = new Date();
//            dayThree.setDate(dayThree.getDate() + 3);
//            var day3 = dayThree.getDate();
//            var month3 = dayThree.getMonth() + 1;
//            var year3 = dayThree.getFullYear();
//            dayThree = day3 + "/" + month3 + "/" + year3;
//            
//            document.getElementById("r3date").innerHTML = dayThree;
//            
//            //DAY 4
//            var dayFour = new Date();
//            dayFour.setDate(dayFour.getDate() + 4);
//            var day4 = dayFour.getDate();
//            var month4 = dayFour.getMonth() + 1;
//            var year4 = dayFour.getFullYear();
//            dayFour = day4 + "/" + month4 + "/" + year4;
//            
//            document.getElementById("r4date").innerHTML = dayFour;
//            
//            //DAY 5
//            var dayFive = new Date();
//            dayFive.setDate(dayFive.getDate() + 5);
//            var day5 = dayFive.getDate();
//            var month5 = dayFive.getMonth() + 1;
//            var year5 = dayFive.getFullYear();
//            dayFive = day5 + "/" + month5 + "/" + year5;
//            
//            document.getElementById("r5date").innerHTML = dayFive;
//            
//            //DAY 6
//            var daySix = new Date();
//            daySix.setDate(daySix.getDate() + 6);
//            var day6 = daySix.getDate();
//            var month6 = daySix.getMonth() + 1;
//            var year6 = daySix.getFullYear();
//            daySix = day6 + "/" + month6 + "/" + year6;
//            
//            document.getElementById("r6date").innerHTML = daySix;
            
            
            /* ========= WEEK TABLE ============ */
            
            
            // TABLE HEADER
            
            document.getElementById("tableHead").innerHTML= "This Week";
            
            
            /* ========= DAY 1 ============ */
            
            // DAY OF WEEK
            document.getElementById('r1c1').innerHTML= days[D1.getDay()];

//            var weatherImage = "http://openweathermap.org/img/w/"+myData.list[1].weather[0].icon+".png";
//            document.getElementById('r1c2').src = weatherImage;
            
            // ICONS
            
            //sunny
            if (myData.list[1].weather[0].icon == "01d" || myData.list[1].weather[0].icon == "01n")
            {
            document.getElementById("r1c2").src = "icons/sun.png";
            }
            //few clouds
            else if (myData.list[1].weather[0].icon == "02d" || myData.list[1].weather[0].icon == "02n")
            {
            document.getElementById("r1c2").src = "icons/suncloud2.png";
            }
            //scattered clouds
            else if (myData.list[1].weather[0].icon == "03d" || myData.list[1].weather[0].icon == "03n")
            {
            document.getElementById("r1c2").src = "icons/cloud1.png";
            }
            //broken clouds
            else if (myData.list[1].weather[0].icon == "04d" || myData.list[1].weather[0].icon == "04n")
            {
            document.getElementById("r1c2").src = "icons/clouds2.png";
            }
            //shower rain
            else if (myData.list[1].weather[0].icon == "09d" || myData.list[1].weather[0].icon == "09n")
            {
            document.getElementById("r1c2").src = "icons/rain.png";
            }
            //rain
            else if (myData.list[1].weather[0].icon == "10d" || myData.list[1].weather[0].icon == "10n")
            {
            document.getElementById("r1c2").src = "icons/rain.png";
            }
            //thunderstorm
            else if (myData.list[1].weather[0].icon == "11d" || myData.list[1].weather[0].icon == "11n")
            {
            document.getElementById("r1c2").src = "icons/thunder.png";
            }
            //snow
            else if (myData.list[1].weather[0].icon == "13d" || myData.list[1].weather[0].icon == "13n")
            {
            document.getElementById("r1c2").src = "icons/snow.png";
            }
            //mist
            else if (myData.list[1].weather[0].icon == "50d" || myData.list[1].weather[0].icon == "50n")
            {
            document.getElementById("r1c2").src = "icons/mist.png";
            }

            // HIGH TEMP
            document.getElementById('r1c3').innerHTML = "High:<br>" + Math.round(myData.list[1].temp.max) + "&deg;C";
            // LOW TEMP
            document.getElementById('r1c4').innerHTML = "Low:<br>" + Math.round(myData.list[1].temp.min) + "&deg;C";
            // DESC
            if (myData.list[1].weather[0].description == "sky is clear" || myData.list[1].weather[0].description == "sky is clear")
            {
            document.getElementById("r1desc").innerHTML = "Clear Sky";
            } 
            else {
               document.getElementById("r1desc").innerHTML = myData.list[1].weather[0].description; 
            }

            
            /* ========= DAY 2 ============ */
            
            // DAY OF WEEK
            document.getElementById('r2c1').innerHTML= days[D2.getDay()];

            // ICONS
            
            //sunny
            if (myData.list[2].weather[0].icon == "01d" || myData.list[2].weather[0].icon == "01n")
            {
            document.getElementById("r2c2").src = "icons/sun.png";
            }
            //few clouds
            else if (myData.list[2].weather[0].icon == "02d" || myData.list[2].weather[0].icon == "02n")
            {
            document.getElementById("r2c2").src = "icons/suncloud2.png";
            }
            //scattered clouds
            else if (myData.list[2].weather[0].icon == "03d" || myData.list[2].weather[0].icon == "03n")
            {
            document.getElementById("r2c2").src = "icons/cloud1.png";
            }
            //broken clouds
            else if (myData.list[2].weather[0].icon == "04d" || myData.list[2].weather[0].icon == "04n")
            {
            document.getElementById("r2c2").src = "icons/clouds2.png";
            }
            //shower rain
            else if (myData.list[2].weather[0].icon == "09d" || myData.list[2].weather[0].icon == "09n")
            {
            document.getElementById("r2c2").src = "icons/rain.png";
            }
            //rain
            else if (myData.list[2].weather[0].icon == "10d" || myData.list[2].weather[0].icon == "10n")
            {
            document.getElementById("r2c2").src = "icons/rain.png";
            }
            //thunderstorm
            else if (myData.list[2].weather[0].icon == "11d" || myData.list[2].weather[0].icon == "11n")
            {
            document.getElementById("r2c2").src = "icons/thunder.png";
            }
            //snow
            else if (myData.list[2].weather[0].icon == "13d" || myData.list[2].weather[0].icon == "13n")
            {
            document.getElementById("r2c2").src = "icons/snow.png";
            }
            //mist
            else if (myData.list[2].weather[0].icon == "50d" || myData.list[2].weather[0].icon == "50n")
            {
            document.getElementById("r2c2").src = "icons/mist.png";
            }
            
            // HIGH TEMP
            document.getElementById('r2c3').innerHTML = "High:<br>" + Math.round(myData.list[2].temp.max) + "&deg;C";
            // LOW TEMP
            document.getElementById('r2c4').innerHTML = "Low:<br>" + Math.round(myData.list[2].temp.min) + "&deg;C";
            // DESC
            if (myData.list[2].weather[0].description == "sky is clear" || myData.list[2].weather[0].description == "sky is clear")
            {
            document.getElementById("r2desc").innerHTML = "Clear Sky";
            } 
            else {
               document.getElementById("r2desc").innerHTML = myData.list[2].weather[0].description; 
            }


            /* ========= DAY 3 ============ */
            
            // DAY OF WEEK
            document.getElementById('r3c1').innerHTML= days[D3.getDay()];

            // ICONS
            
            //sunny
            if (myData.list[3].weather[0].icon == "01d" || myData.list[3].weather[0].icon == "01n")
            {
            document.getElementById("r3c2").src = "icons/sun.png";
            }
            //few clouds
            else if (myData.list[3].weather[0].icon == "02d" || myData.list[3].weather[0].icon == "02n")
            {
            document.getElementById("r3c2").src = "icons/suncloud2.png";
            }
            //scattered clouds
            else if (myData.list[3].weather[0].icon == "03d" || myData.list[3].weather[0].icon == "03n")
            {
            document.getElementById("r3c2").src = "icons/cloud1.png";
            }
            //broken clouds
            else if (myData.list[3].weather[0].icon == "04d" || myData.list[3].weather[0].icon == "04n")
            {
            document.getElementById("r3c2").src = "icons/clouds2.png";
            }
            //shower rain
            else if (myData.list[3].weather[0].icon == "09d" || myData.list[3].weather[0].icon == "09n")
            {
            document.getElementById("r3c2").src = "icons/rain.png";
            }
            //rain
            else if (myData.list[3].weather[0].icon == "10d" || myData.list[3].weather[0].icon == "10n")
            {
            document.getElementById("r3c2").src = "icons/rain.png";
            }
            //thunderstorm
            else if (myData.list[3].weather[0].icon == "11d" || myData.list[3].weather[0].icon == "11n")
            {
            document.getElementById("r3c2").src = "icons/thunder.png";
            }
            //snow
            else if (myData.list[3].weather[0].icon == "13d" || myData.list[3].weather[0].icon == "13n")
            {
            document.getElementById("r3c2").src = "icons/snow.png";
            }
            //mist
            else if (myData.list[3].weather[0].icon == "50d" || myData.list[3].weather[0].icon == "50n")
            {
            document.getElementById("r3c2").src = "icons/mist.png";
            }

            // HIGH TEMP
            document.getElementById('r3c3').innerHTML = "High:<br>" + Math.round(myData.list[3].temp.max) + "&deg;C";
            //LOW TEMP
            document.getElementById('r3c4').innerHTML = "Low:<br>" + Math.round(myData.list[3].temp.min) + "&deg;C";
            // DESC
            if (myData.list[3].weather[0].description == "sky is clear" || myData.list[3].weather[0].description == "sky is clear")
            {
            document.getElementById("r3desc").innerHTML = "Clear Sky";
            } 
            else {
               document.getElementById("r3desc").innerHTML = myData.list[3].weather[0].description; 
            }
            
            
            /* ========= DAY 4 ============ */
            
            // DAY OF WEEK
            document.getElementById('r4c1').innerHTML= days[D4.getDay()];

            // ICONS
            
            //sunny
            if (myData.list[4].weather[0].icon == "01d" || myData.list[4].weather[0].icon == "01n")
            {
            document.getElementById("r4c2").src = "icons/sun.png";
            }
            //few clouds
            else if (myData.list[4].weather[0].icon == "02d" || myData.list[4].weather[0].icon == "02n")
            {
            document.getElementById("r4c2").src = "icons/suncloud2.png";
            }
            //scattered clouds
            else if (myData.list[4].weather[0].icon == "03d" || myData.list[4].weather[0].icon == "03n")
            {
            document.getElementById("r4c2").src = "icons/cloud1.png";
            }
            //broken clouds
            else if (myData.list[4].weather[0].icon == "04d" || myData.list[4].weather[0].icon == "04n")
            {
            document.getElementById("r4c2").src = "icons/clouds2.png";
            }
            //shower rain
            else if (myData.list[4].weather[0].icon == "09d" || myData.list[4].weather[0].icon == "09n")
            {
            document.getElementById("r4c2").src = "icons/rain.png";
            }
            //rain
            else if (myData.list[4].weather[0].icon == "10d" || myData.list[4].weather[0].icon == "10n")
            {
            document.getElementById("r4c2").src = "icons/rain.png";
            }
            //thunderstorm
            else if (myData.list[4].weather[0].icon == "11d" || myData.list[4].weather[0].icon == "11n")
            {
            document.getElementById("r4c2").src = "icons/thunder.png";
            }
            //snow
            else if (myData.list[4].weather[0].icon == "13d" || myData.list[4].weather[0].icon == "13n")
            {
            document.getElementById("r4c2").src = "icons/snow.png";
            }
            //mist
            else if (myData.list[4].weather[0].icon == "50d" || myData.list[4].weather[0].icon == "50n")
            {
            document.getElementById("r4c2").src = "icons/mist.png";
            }

            // HIGH TEMP
            document.getElementById('r4c3').innerHTML = "High:<br>" + Math.round(myData.list[4].temp.max) + "&deg;C";
            // LOW TEMP
            document.getElementById('r4c4').innerHTML = "Low:<br>" + Math.round(myData.list[4].temp.min) + "&deg;C";
            // DESC
            if (myData.list[4].weather[0].description == "sky is clear" || myData.list[4].weather[0].description == "sky is clear")
            {
            document.getElementById("r4desc").innerHTML = "Clear Sky";
            } 
            else {
               document.getElementById("r4desc").innerHTML = myData.list[4].weather[0].description; 
            }
            
            
            /* ========= DAY 5 ============ */
            
            // DAY OF WEEK
            document.getElementById('r5c1').innerHTML= days[D5.getDay()];

            // ICONS
            
            //sunny
            if (myData.list[5].weather[0].icon == "01d" || myData.list[5].weather[0].icon == "01n")
            {
            document.getElementById("r5c2").src = "icons/sun.png";
            }
            //few clouds
            else if (myData.list[5].weather[0].icon == "02d" || myData.list[5].weather[0].icon == "02n")
            {
            document.getElementById("r5c2").src = "icons/suncloud2.png";
            }
            //scattered clouds
            else if (myData.list[5].weather[0].icon == "03d" || myData.list[5].weather[0].icon == "03n")
            {
            document.getElementById("r5c2").src = "icons/cloud1.png";
            }
            //broken clouds
            else if (myData.list[5].weather[0].icon == "04d" || myData.list[5].weather[0].icon == "04n")
            {
            document.getElementById("r5c2").src = "icons/clouds2.png";
            }
            //shower rain
            else if (myData.list[5].weather[0].icon == "09d" || myData.list[5].weather[0].icon == "09n")
            {
            document.getElementById("r5c2").src = "icons/rain.png";
            }
            //rain
            else if (myData.list[5].weather[0].icon == "10d" || myData.list[5].weather[0].icon == "10n")
            {
            document.getElementById("r5c2").src = "icons/rain.png";
            }
            //thunderstorm
            else if (myData.list[5].weather[0].icon == "11d" || myData.list[5].weather[0].icon == "11n")
            {
            document.getElementById("r5c2").src = "icons/thunder.png";
            }
            //snow
            else if (myData.list[5].weather[0].icon == "13d" || myData.list[5].weather[0].icon == "13n")
            {
            document.getElementById("r5c2").src = "icons/snow.png";
            }
            //mist
            else if (myData.list[5].weather[0].icon == "50d" || myData.list[5].weather[0].icon == "50n")
            {
            document.getElementById("r5c2").src = "icons/mist.png";
            }

            // HIGH TEMP
            document.getElementById('r5c3').innerHTML = "High:<br>" + Math.round(myData.list[5].temp.max) + "&deg;C";
            // LOW TEMP
            document.getElementById('r5c4').innerHTML = "Low:<br>" + Math.round(myData.list[5].temp.min) + "&deg;C";
            // DESC
            if (myData.list[5].weather[0].description == "sky is clear" || myData.list[5].weather[0].description == "sky is clear")
            {
            document.getElementById("r5desc").innerHTML = "Clear Sky";
            } 
            else {
               document.getElementById("r5desc").innerHTML = myData.list[5].weather[0].description; 
            }
            
            
            /* ========= DAY 6 ============ */
            
            // DAY OF WEEK
            document.getElementById('r6c1').innerHTML= days[D6.getDay()];

            // ICONS
            
            //sunny
            if (myData.list[6].weather[0].icon == "01d" || myData.list[6].weather[0].icon == "01n")
            {
            document.getElementById("r6c2").src = "icons/sun.png";
            }
            //few clouds
            else if (myData.list[6].weather[0].icon == "02d" || myData.list[6].weather[0].icon == "02n")
            {
            document.getElementById("r6c2").src = "icons/suncloud2.png";
            }
            //scattered clouds
            else if (myData.list[6].weather[0].icon == "03d" || myData.list[6].weather[0].icon == "03n")
            {
            document.getElementById("r6c2").src = "icons/cloud1.png";
            }
            //broken clouds
            else if (myData.list[6].weather[0].icon == "04d" || myData.list[6].weather[0].icon == "04n")
            {
            document.getElementById("r6c2").src = "icons/clouds2.png";
            }
            //shower rain
            else if (myData.list[6].weather[0].icon == "09d" || myData.list[6].weather[0].icon == "09n")
            {
            document.getElementById("r6c2").src = "icons/rain.png";
            }
            //rain
            else if (myData.list[6].weather[0].icon == "10d" || myData.list[6].weather[0].icon == "10n")
            {
            document.getElementById("r6c2").src = "icons/rain.png";
            }
            //thunderstorm
            else if (myData.list[6].weather[0].icon == "11d" || myData.list[6].weather[0].icon == "11n")
            {
            document.getElementById("r6c2").src = "icons/thunder.png";
            }
            //snow
            else if (myData.list[6].weather[0].icon == "13d" || myData.list[6].weather[0].icon == "13n")
            {
            document.getElementById("r6c2").src = "icons/snow.png";
            }
            //mist
            else if (myData.list[6].weather[0].icon == "50d" || myData.list[6].weather[0].icon == "50n")
            {
            document.getElementById("r6c2").src = "icons/mist.png";
            }
            
            // HIGH TEMP
            document.getElementById('r6c3').innerHTML = "High:<br>" + Math.round(myData.list[6].temp.max) + "&deg;C";
            // LOW TEMP
            document.getElementById('r6c4').innerHTML = "Low:<br>" + Math.round(myData.list[6].temp.min) + "&deg;C";
            // DESC
            if (myData.list[6].weather[0].description == "sky is clear" || myData.list[6].weather[0].description == "sky is clear")
            {
            document.getElementById("r6desc").innerHTML = "Clear Sky";
            } 
            else {
               document.getElementById("r6desc").innerHTML = myData.list[6].weather[0].description; 
            }
            

            
            console.log(myData);
        }
    }
    
    myRequest.send();
    
}

