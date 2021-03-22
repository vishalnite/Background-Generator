
var css= document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body= document.getElementById("gradient");
var button= document.getElementById("random");

function set_gradient()
{
	body.style.background= "linear-gradient(to right, "+color1.value+" , "+color2.value+")";
	css.textContent= body.style.background + ";";
}

function random_color()
{
	var val="0123456789ABCDEF";
	var color="#";
	for(var i=0;i<6;i++)
	{
		color+=val[Math.floor(Math.random()*16)];
	}
	return color;
}

function random_color_change()
{
    color1.setAttribute("value", random_color());
    color2.setAttribute("value", random_color());
    set_gradient();
}

set_gradient();

color1.addEventListener("input", set_gradient);

color2.addEventListener("input", set_gradient);

button.addEventListener("click", random_color_change);