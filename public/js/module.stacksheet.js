angular.module('module.stacksheet', [])
  .controller('stackController', stacksheet);
  textAreas ={}
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

//New textarea function
funtion addText(){
  var textBlock = document.createElement('textarea');
};

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
