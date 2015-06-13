'use strict';
$('#lookup').on('click',function () {
  var searchTerm = $('#searchText').val();
  var $result = $('#weatherResult');
  $.get ('http://api.openweathermap.org/data/2.5/weather?q='+searchTerm, function (data) {
    $result.html('The sunset today in '+  data.name + ' will happen at ' + data.sys.sunset);
    console.log(data);
  });
});
