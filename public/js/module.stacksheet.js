angular.module('stacksheet', [])
  .controller('textController', ['$http', textController]);


function textController($http){
    var txtCtrl = this;
    txtCtrl.textAreas = [];


    // txtCtrl.dragify = function() {
    //   // multiple .draggable elements
    //   // get all draggie elements
    //   var draggableElems = document.querySelectorAll('.draggable');
    //   // array of Draggabillies
    //   var draggies = []
    //   // init Draggabillies
    //   for ( var i=0, len = draggableElems.length; i < len; i++ ) {
    //     var draggableElem = draggableElems[i];
    //     var draggie = new Draggabilly( draggableElem, {
    //       handle: '.handle',
    //       containment: true,
    //       grid: [ 20, 20 ],
    //     });
    //     draggies.push( draggie );
    //   }
    // };

    //add element
    txtCtrl.addTextArea = function() {
        console.info("Clicked addTextControl", txtCtrl);
        txtCtrl.textAreas.push(' ');
        
    };
    // remove element
    txtCtrl.removeTextArea = function() {
        console.info("Clicked removeTextArea");
    };

    // save text info
    txtCtrl.saveInfo = function($index){
       console.log('saved stuff', $index, txtCtrl.textAreas, txtCtrl.textAreas[$index]);
       $http.post('/projects/routes/info', txtCtrl.textAreas);
    };
    txtCtrl.getInfo = function($index){
      $http.get('/projects/models/element', Element);
    };
};




// //Pen
// var editor = new Pen(document.getElementById('editor'));
//
// // config
//  var options = {
//    // toolbar: document.getElementById('custom-toolbar'),
//    editor: document.querySelector('[data-toggle="pen"]'),
//    debug: true,
//    list: [
//      'insertimage', 'blockquote', 'h2', 'h3', 'p', 'code', 'insertorderedlist', 'insertunorderedlist', 'inserthorizontalrule',
//      'indent', 'outdent', 'bold', 'italic', 'underline', 'createlink'
//    ]
//  };
