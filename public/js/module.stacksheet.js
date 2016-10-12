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
          parent: {
            style: {}
          },
          text: ''
        });

        $timeout(txtCtrl.$dragify, 500);
    };

// remove element
    txtCtrl.removeTextArea = function() {
        console.info("Clicked removeTextArea", txtCtrl.lastFocus);
        $(txtCtrl.lastFocus).parent().remove();
    };
    $http.delete('/projects/routes/info', txtCtrl.lastFocus).then(function(res){
      console.log(res.data);
    });
txtCtrl.focusTextArea = function (){
  txtCtrl.lastFocus = document.activeElement;
}

// save text info
    txtCtrl.saveInfo = function($index){
       console.log('saved stuff', $index, txtCtrl.textAreas, txtCtrl.textAreas[$index]);

       var textarea = $($('.item textarea')[$index]),
           parent = $($('.item')[$index]),
           payload = {
             parent: {
               left: parent.position().left+'px',
               top: parent.position().top+'px'
            },
             style: {
               width: textarea.width()+'px',
               height: textarea.height()+'px',
             },
             text: textarea.text()
           };

           console.log('PAYLOAD:::', payload);

       $http.post('/projects/routes/info', payload).then(function(res){
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
