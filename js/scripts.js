$(document).ready(function(){
  $("form#hawaii").submit(function(event){

  var climate = $("input:radio[name=weather]:checked").val();
  var view = $("input:radio[name=landscape]:checked").val();
  var first = $("input:radio[name=event1]:checked").val();
  var second = $("input:radio[name=event2]:checked").val();
  var kids = $("input:radio[name=children]:checked").val();

  if (climate === 'sun') {
    $("#maui").show();
  }

  event.preventDefault();
  });
)};
