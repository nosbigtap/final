angular.module('stacksheet', []);
  .controller('textController', txtCtrl);

//add element (Draggable Textarea)
function txtCtrl(body) {
    // Adds an element to the document
    var p = document.getElementById('textarea');
    var newElement = document.createElement('textarea');
    newElement.setAttribute('draggable');
    newElement.innerHTML = html;
    p.appendChild('body');
}
// function txtCtrl(){
//   newTextElem = document.createElement('textArea');
//   newTextElem.className="draggable";
// }

//remove element (Dragabble textarea)
function removeTxtElem(body) {
    // Removes an element from the document
    var element = document.getElementById('textarea');
    element.parentNode.removeChild(element);
}

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

//Pen
var editor = new Pen(document.getElementById('editor'));

// config
 var options = {
   // toolbar: document.getElementById('custom-toolbar'),
   editor: document.querySelector('[data-toggle="pen"]'),
   debug: true,
   list: [
     'insertimage', 'blockquote', 'h2', 'h3', 'p', 'code', 'insertorderedlist', 'insertunorderedlist', 'inserthorizontalrule',
     'indent', 'outdent', 'bold', 'italic', 'underline', 'createlink'
   ]
 };
