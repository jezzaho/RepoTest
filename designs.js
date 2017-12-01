// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//gridWidth
//var canvasHeight = $('input_height').val();
//var canvasWidth = $('input_width').val();
function colorMe(){

  $('#colorPicker').change(function(){
    var colore = $('#colorPicker').val();
    $('#submit').animate({backgroundColor: colore}, 1000);
    $('#title , #canvas, p, form, sizePicker, h2').animate({color: colore}, 1000);
    $('#inputWidth, #inputHeight').animate({backgroundColor: colore}, 1000);
    state = false;
  });
}

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


$(document).ready(function(){
  $('td').mousedown(function(){
    var color = $('#colorPicker').val();
    $(this).css('background-color',color);

  });
});
}
