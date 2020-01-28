
    var css = document.querySelector("h1");
    var color1 = document.querySelector(".color1");
    var color2 = document.querySelector(".color2");
    var body = document.getElementById("color_body");
    
    
    function setGradient(){
        color1_value = color1.value;
        color2_value = color2.value;
        body.style.background = "linear-gradient(to right, "+color1_value+ ", " +color2_value+")";
    }
    



