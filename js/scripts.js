$(document).ready(function(){
  var itemCount = 0;
  $('#addItem').click(function(event){
    debugger;
    event.preventDefault();
    itemCount += 1;
    $('ul#itemList').prepend('<li><input type="text" class="form-control" id="item' +itemCount+'"></li>');
  });

});
