$(document).ready(function(){
    console.log("jQuery y Web cargados");

// SELECTOR DE TEMA

var theme =  $("#theme");
var slide1 = $("#slide1")
var slide2 = $("#slide2")
var slide3 = $("#slide3")


$("#to-green").click(function(e){
  theme.attr("href", "css/green.css");
  slide1.attr("src", "img/hojas.jpeg");
  slide2.attr("src", "img/hojasred.jpeg");
  slide3.attr("src", "img/cielo.jpeg");
  slide1.attr("title", "Hojas");
  slide2.attr("title", "Otoño");
  slide3.attr("title", "Cielo");
});

$("#to-red").click(function(){
  theme.attr("href", "css/red.css");
  slide3.attr("src", "img/hojas.jpeg");
  slide1.attr("src", "img/hojasred.jpeg");
  slide2.attr("src", "img/cielo.jpeg");
  slide3.attr("title", "Hojas");
  slide1.attr("title", "Otoño");
  slide2.attr("title", "Cielo");
});

$("#to-blue").click(function(){
  theme.attr("href", "css/blue.css");
  slide2.attr("src", "img/hojas.jpeg");
  slide3.attr("src", "img/hojasred.jpeg");
  slide1.attr("src", "img/cielo.jpeg");
  slide2.attr("title", "Hojas");
  slide3.attr("title", "Otoño");
  slide1.attr("title", "Cielo");
});



// IR ARRIBA

$(".subir").click(function(e){
  e.preventDefault();

  $("html, body").animate({
    scrollTop: 0
  }, 500);
  
  return false
});



// LOGIN

$("#login form").submit(function(){
  var form_name = $("#form_name").val();
  localStorage.setItem("form_name", form_name);
  
});

var form_name = localStorage.getItem("form_name");

if(form_name != null && form_name !="undefined"){
  
  var about_p = $("#about p");

  about_p.html("<br><strong>Bienvenido, "+form_name+"</strong>");
  about_p.append('<br><a href="#" id= "logout">Cerrar sesión</a>');

  $("#login").hide();  

  $("#logout").click(function(){
    localStorage.clear();
    location.reload();
  });
}



// RELOJ
setInterval(function(){
    
    var reloj = moment().format("HH:mm:ss")
        $("#watch").html(reloj)

, 000});

});