$(document).ready(function(){
var arr = [];
  $('#info').submit(function(event){
    event.preventDefault();
    var arr = []
    var arr_2 = []
    var shoppingList = $('input#grocery_list').val();
    arr.push(shoppingList);

    $('.result').append('<li>'+ arr +'</li>');






  });
});
