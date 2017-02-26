$(document).ready(function(){
  $("form#hawaii").submit(function(event){

  var weather = $("input:radio[name=weather]:checked").val();
  var landscape = $("input:radio[name=landscape]:checked").val();
  var event1 = $("input:radio[name=event1]:checked").val();
  var event2 = $("input:radio[name=event2]:checked").val();
  var children = $("input:radio[name=children]:checked").val();

  var result;
  if (weather === sun){
    result === Maui;
  }

  $("#result").text(result);
  event.preventDefault();
});

)};
