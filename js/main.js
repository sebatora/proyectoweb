$(document).ready(function(){
    console.log("jQuery y Web cargados");

// SLIDER
    $(function(){
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200,
          responsive: true,
          pager: true          
        });
      });



// POSTS
  const date = new Date();
  var month = date.toLocaleString("default", {month:"long"});
  var posts = [
    {
      title: "Prueba de titulo 1",
      date: "Publicado el dia "+ date.getDate() + " de " + month + " del " + date.getFullYear(),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit nulla neque, at suscipit ipsum venenatis vulputate. Sed a sagittis risus. Nam feugiat aliquam est, ac pellentesque nunc viverra sed. Maecenas vitae velit ac enim viverra venenatis quis eu ex. Maecenas auctor diam magna, eu sollicitudin orci eleifend sed. Mauris nunc sapien, rutrum ut nisi in, dignissim fringilla tortor. Sed facilisis consequat diam, vel aliquet mi bibendum in. Nulla sit amet porttitor felis. In et mi nec urna varius suscipit sed vel urna. Pellentesque ac turpis pulvinar, faucibus ante ac, congue elit. Donec rutrum purus at nisi feugiat, eu varius enim semper. Nulla egestas mollis ipsum, in porta tortor tincidunt vel."
    },
    {
      title: "Prueba de titulo 2",
      date: "Publicado el dia "+ date.getDate() + " de " + month + " del " + date.getFullYear(),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit nulla neque, at suscipit ipsum venenatis vulputate. Sed a sagittis risus. Nam feugiat aliquam est, ac pellentesque nunc viverra sed. Maecenas vitae velit ac enim viverra venenatis quis eu ex. Maecenas auctor diam magna, eu sollicitudin orci eleifend sed. Mauris nunc sapien, rutrum ut nisi in, dignissim fringilla tortor. Sed facilisis consequat diam, vel aliquet mi bibendum in. Nulla sit amet porttitor felis. In et mi nec urna varius suscipit sed vel urna. Pellentesque ac turpis pulvinar, faucibus ante ac, congue elit. Donec rutrum purus at nisi feugiat, eu varius enim semper. Nulla egestas mollis ipsum, in porta tortor tincidunt vel."
    },
    {
      title: "Prueba de titulo 3",
      date: "Publicado el dia "+ date.getDate() + " de " + month + " del " + date.getFullYear(),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit nulla neque, at suscipit ipsum venenatis vulputate. Sed a sagittis risus. Nam feugiat aliquam est, ac pellentesque nunc viverra sed. Maecenas vitae velit ac enim viverra venenatis quis eu ex. Maecenas auctor diam magna, eu sollicitudin orci eleifend sed. Mauris nunc sapien, rutrum ut nisi in, dignissim fringilla tortor. Sed facilisis consequat diam, vel aliquet mi bibendum in. Nulla sit amet porttitor felis. In et mi nec urna varius suscipit sed vel urna. Pellentesque ac turpis pulvinar, faucibus ante ac, congue elit. Donec rutrum purus at nisi feugiat, eu varius enim semper. Nulla egestas mollis ipsum, in porta tortor tincidunt vel."
    },
    {
      title: "Prueba de titulo 4",
      date: "Publicado el dia "+ date.getDate() + " de " + month + " del " + date.getFullYear(),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit nulla neque, at suscipit ipsum venenatis vulputate. Sed a sagittis risus. Nam feugiat aliquam est, ac pellentesque nunc viverra sed. Maecenas vitae velit ac enim viverra venenatis quis eu ex. Maecenas auctor diam magna, eu sollicitudin orci eleifend sed. Mauris nunc sapien, rutrum ut nisi in, dignissim fringilla tortor. Sed facilisis consequat diam, vel aliquet mi bibendum in. Nulla sit amet porttitor felis. In et mi nec urna varius suscipit sed vel urna. Pellentesque ac turpis pulvinar, faucibus ante ac, congue elit. Donec rutrum purus at nisi feugiat, eu varius enim semper. Nulla egestas mollis ipsum, in porta tortor tincidunt vel."
    },
    {
      title: "Prueba de titulo 5",
      date: "Publicado el dia "+ date.getDate() + " de " + month + " del " + date.getFullYear(),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit nulla neque, at suscipit ipsum venenatis vulputate. Sed a sagittis risus. Nam feugiat aliquam est, ac pellentesque nunc viverra sed. Maecenas vitae velit ac enim viverra venenatis quis eu ex. Maecenas auctor diam magna, eu sollicitudin orci eleifend sed. Mauris nunc sapien, rutrum ut nisi in, dignissim fringilla tortor. Sed facilisis consequat diam, vel aliquet mi bibendum in. Nulla sit amet porttitor felis. In et mi nec urna varius suscipit sed vel urna. Pellentesque ac turpis pulvinar, faucibus ante ac, congue elit. Donec rutrum purus at nisi feugiat, eu varius enim semper. Nulla egestas mollis ipsum, in porta tortor tincidunt vel."
    },
    {
      title: "Prueba de titulo 6",
      date: "Publicado el dia "+ date.getDate() + " de " + month + " del " + date.getFullYear(),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit nulla neque, at suscipit ipsum venenatis vulputate. Sed a sagittis risus. Nam feugiat aliquam est, ac pellentesque nunc viverra sed. Maecenas vitae velit ac enim viverra venenatis quis eu ex. Maecenas auctor diam magna, eu sollicitudin orci eleifend sed. Mauris nunc sapien, rutrum ut nisi in, dignissim fringilla tortor. Sed facilisis consequat diam, vel aliquet mi bibendum in. Nulla sit amet porttitor felis. In et mi nec urna varius suscipit sed vel urna. Pellentesque ac turpis pulvinar, faucibus ante ac, congue elit. Donec rutrum purus at nisi feugiat, eu varius enim semper. Nulla egestas mollis ipsum, in porta tortor tincidunt vel."
    },
  ]

  posts.forEach((item, index) => {
    var post = `
    <article class="post">
    <h2>${item.title}</h2>
    <span class="date">${item.date}</span>
    <p>${item.content}</p>
    
    <a href="#" class="button-more">Leer más</a>

</article>
    `

    $("#posts").append(post)
  });
    


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



});