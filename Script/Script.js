//INICIALIZACION
$("#Tangrama").hide();

$("#start").click(function(){
    $("#Inicio").hide();
    $("#Tangrama").show();
    $( "#Pieza_1" ).draggable();

  });