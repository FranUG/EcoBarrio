// JavaScript source code

var menu = document.getElementById("menu_hamburguesa");
menu.style.display = "none";

document.getElementById("boton_menu_hamburguesa").addEventListener("click", function () { 	
	if(menu.style.display === "none"){
	      menu.style.display = "flex";
	}	
});

document.getElementById("menu_hamburguesa").addEventListener("click", function () {
      menu.style.display = "none";
});  

