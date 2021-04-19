//INICIALIZACION
$("#Tangrama").hide();
let anguloPieza_1=0;


$("#start").click(function(){
    $("#Inicio").hide();
    $("#Tangrama").show();
    $( "#Pieza_1" ).draggable();

  });

  $("#Pieza_1").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: anguloPieza_1,
        animateTo: anguloPieza_1+90,
        })
        anguloPieza_1=anguloPieza_1+90;
        if(anguloPieza_1==360){
          anguloPieza_1=0;
        }
        console.log(anguloPieza_1);
      }
    }
  });