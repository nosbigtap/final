angular.module('stacksheet', [])
  .controller('textController', ['$http', '$document', '$timeout', textController]);


function textController($http, $document, $timeout){
    var txtCtrl = this;
    txtCtrl.textAreas = [];

    //Draggibilly
    txtCtrl.$dragify = function () {
      $('.item').draggabilly({
        handle: '.handle',
        grid: [ 10, 10 ],
        containment: true,
      });
    }

    //add element
    txtCtrl.addTextArea = function() {
        console.info("Clicked addTextControl", txtCtrl);
        txtCtrl.textAreas.push({
          style: {},
          text: '',
          left: Number,
          top: Number,
        });

        $timeout(txtCtrl.$dragify, 500);
    };

    // remove element
    txtCtrl.removeTextArea = function() {
        console.info("Clicked removeTextArea");
    };

    // save text info
    txtCtrl.saveInfo = function($index){
       console.log('saved stuff', $index, txtCtrl.textAreas, txtCtrl.textAreas[$index]);

       var textarea = $($('.item textarea')[$index]);

      //  console.log(
      //    textarea,
      //    textarea.width(),
      //    textarea.height(),
      //    textarea.text()
      //  );

       $http.post('/projects/routes/info', {
         style: {
           width: textarea.width()+'px',
           height: textarea.height()+'px',
         },
         text: textarea.text()
       }).then(function(res){
         console.log(res.data);
       }, function(err) {
          console.error(err);
       });
    };

    //load info
    txtCtrl.getInfo = function(){
      $http.get('/projects/elements')
        .then(function success(res){
          console.log(res.data);
          txtCtrl.textAreas = res.data;
          $timeout(txtCtrl.$dragify, 500);
        },
        function (err){
          console.log("get info error", err)
        });
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
