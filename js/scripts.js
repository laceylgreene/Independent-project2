$(document).ready(function(){
  $("form#hawaii").submit(function(event){

  var climate = $("input:radio[name=weather]:checked").val();
  var view = $("input:radio[name=landscape]:checked").val();
  var first = $("input:radio[name=event1]:checked").val();
  var second = $("input:radio[name=event2]:checked").val();
  var kids = $("input:radio[name=children]:checked").val();

  if (climate === 'rain' && view === 'boonies' && first === 'hike' && second === 'beach' && kids === 'yes') {
    $("#big").show();
  }
  else if (climate === 'sun' && view === 'city' && first === 'shop' && second === 'club' && kids === 'no'){
    $("#oahu").show();
  }
  else if (climate === 'sun' && view === 'city' || 'boonies' && first === 'shop' && second === 'club' || 'beach' && kids === 'yes' || 'no') {
    $("#maui").show();
  }
  event.preventDefault();
  });
});
