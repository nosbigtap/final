angular.module('stacksheet', [])
  .controller('textController', ['$http', '$document', '$timeout', textController]);


function textController($http, $document, $timeout){
    var txtCtrl = this;
    txtCtrl.textAreas = [];

    //Draggibilly
    txtCtrl.$dragify = function () {
      $('.item').draggabilly({
        handle: '.handle',
        grid: [ 20, 20 ],
        containment: true,
      });
    }


    //add element
    txtCtrl.addTextArea = function() {
        console.info("Clicked addTextControl", txtCtrl);
        txtCtrl.textAreas.push(' ');

        $timeout(txtCtrl.$dragify, 500);
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
