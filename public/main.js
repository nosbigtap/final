


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

tinymce.init({
        selector: "textarea",
        width: 350,
        height: 200,
        statusbar: false,
        menubar:false,
        toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table | fontsizeselect"
     })
