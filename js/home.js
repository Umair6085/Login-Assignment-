var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var clr = document.getElementById("clr");
var result = document.getElementById("result");
var original = document.getElementById("original").innerHTML = "Faisalabad, Lahore, Karachi, Islamabad, Burewala, Sheikhupura, Kashmir";

var cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"];

var username = localStorage.getItem("username");
      document.getElementById("uName").innerHTML = username;
//Print All Cities--------------------------------------------------------------------------------------------------------------


btn5.onclick = function(){
    
    result.innerHTML = " "
    for(let index = 0 , sr = 1 ; index < cities.length ; index++ , sr++){
        result.innerHTML += sr + ")" + cities[index] + "<br>";
      }
      console.log(cities)
    
}


//Add City in List--------------------------------------------------------------------------------------------------------------


btn6.onclick = function(){
    
    let city = document.getElementById("input").value;
    
    if(city.length < 3){
        Toastify({
            text: "Please Enter Valid City Name in Input Field !",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return;
    } 
    
    let cityFirstLetter = city.slice(0, 1).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase();
    let capitalized = cityFirstLetter + cityAllLetters;
    
    let cityFound = false;
    
    
    for( let i = 0; i < cities.length; i++){
        
        if (cities[i] === capitalized ) {
            cityFound = true;
            Toastify({
                text: capitalized + ' Already in your list !',
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
            return;
        }
        
    }
    
    if( cityFound === false){
        cities.push(capitalized);
        Toastify({
            text: capitalized + ' Added to your list !',
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
    
}


//Clear Btn---------------------------------------------------------------------------------------------------------------------


document.getElementById("ClearResult").onclick = function(){
    result.innerHTML = " ";
}

document.getElementById('clr').onclick = function(){
    document.getElementById('input').value = "";
}
