'use strict';
$('#lookup').on('click',function () {
  var searchTerm = $('#searchText').val();
  var $result = $('#weatherResult');
  $.get('http://api.openweathermap.org/data/2.5/weather?q='+searchTerm, function (data) {
    $result.html(data.weather[0].description);
    console.log(data);
  })
});
