
$( "#split" ).click(function() {
 console.log('hi')
 // $('#split').css('color', '#E91179')
 // similar behavior as an HTTP redirect
 window.location.replace("./page2.html");

});

function myMap() {
var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
