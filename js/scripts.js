$(document).ready(function(){
  $("form#hawaii").submit(function(event){

  var weather =$("input:radio[name=weather]:checked").val();

  var result;
  if (weather === sun){
    result === Maui;
  }

  $("#result").text(result);
  event.preventDefault();
});

)};
