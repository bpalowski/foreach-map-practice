$(document).ready(function(){
  var itemCount = 0;
  var returnList = [];
  $('#addItem').click(function(event){
    event.preventDefault();
    itemCount += 1;
    $('ul#itemList').prepend('<li><input type="text" class="form-control" id="item' +itemCount+'"></li>');
  });
  $('#submitList').click(function(event){
    event.preventDefault();
//    itemCount.forEach(item(function(){
//      var userInput = $("input#item" + item).val();
//      returnList.push(userInput);
    alert(itemCount);
   });
    console.log(returnList);


});
