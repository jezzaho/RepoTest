// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//gridWidth
//var canvasHeight = $('input_height').val();
//var canvasWidth = $('input_width').val();

function makeGrid(){
$('#makingGrid').empty();
var width = $('#inputWidth').val(); // defining a canvasWidth
  var height = $('#inputHeight').val(); // defining a canvasHeight
  for(var i = 0; i < height; i++){ //for loop making an <tr> element of table (height)
    $('#makingGrid').append('<tr></tr>');
    }
    $('tr').each(function(){
      for(var j = 0; j < width; j++){
        $(this).append('<td></td>');
      }
      window.scrollBy(0,400);
    });

function colorMe(){

  $('#colorPicker').change(function(){
    var state = true;
    var pre = '#2DB57B';
    if(state){
    $('#submit').css('background-color', pre);

  }
    var colore = $('#colorPicker').val();
    $('#submit').css('background-color',colore);
    $('#title , #canvas, p, sizePicker, h2').css('color', colore);
    state = false;
  });
}
$(document).ready(function(){
  colorMe();
  $('td').mousedown(function(){
    var color = $('#colorPicker').val();
    $(this).css('background-color',color);

  });
});
}
