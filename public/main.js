


// multiple .draggable elements

// get all draggie elements
var draggableElems = document.querySelectorAll('.draggable');
// array of Draggabillies
var draggies = []
// init Draggabillies
for ( var i=0, len = draggableElems.length; i < len; i++ ) {
  var draggableElem = draggableElems[i];
  var draggie = new Draggabilly( draggableElem, {
    handle: '.handle',
    containment: true,
    grid: [ 20, 20 ]
  });
  draggies.push( draggie );
}

var editor = new MediumEditor('.editable');
