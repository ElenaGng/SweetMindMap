var mySource, myTarget;

$(document).ready(function(){
  $("#startButton").click(function () {
    $(".modalChild").hide();
    $(".modalStart").fadeOut(600, function() {StartclickFunction()});
      });

      $(document).click(function(e){
        if (e.button == 0) {
          $("#contextMenu").fadeOut(300);
        }
      });

      $("#addNewIdea").click(function(){
        $("#container").hide();
        $(".modalChild").fadeIn(100);
        $("#childButton").one("click",function(){createMind()});
      });
    });

function StartclickFunction(){
  var masterId = $('#startId').val();
  var masterText = $('#startText').val();
  $("<div/>", { text: masterId + "\n" + masterText }).attr({
    id: masterId }).popup("master").mousedown(function(e){
        if(e.button == 2){
          $("#contextMenu").css('left', e.pageX+5);
          $("#contextMenu").css('top', e.pageY+5);
          $("#contextMenu").fadeIn(100);
          mySource = event.target.id;
          //console.log("///mySource : " + event.target.id);
        }
    });
  }

    function createMind(){
      var mindrId = $('#childId').val();
      var mindText = $('#childText').val();
      $("<div/>", { text: mindrId + "\n" + mindText }).attr({
        id: mindrId}).popup("mind").mousedown(function(e){
            if(e.button == 2){
              $("#contextMenu").css('left', e.pageX+5);
              $("#contextMenu").css('top', e.pageY+5);
              $("#contextMenu").fadeIn(100);
              mySource = event.target.id;
            //  console.log("///mySource : " + event.target.id);
              }
        });


      myTarget = $("#mindrId");
      console.log("mySource : " + mySource);
      console.log("myTarget : " + myTarget);


      jsPlumb.ready(function(){
        jsPlumb.Defaults.Container = $("#container");
        jsPlumb.connect({
          source: mySource,
          target: myTarget,
          endpoint:"Rectangle"});
          console.log("jsPlumb source : " + mySource);
          console.log("jsPlumb target : " + myTarget);
      });

        $(".modalChild").hide();
        $("#container").fadeIn(100);
        $('#childId').val('  Your idea in a single word !');
        $('#childText').val('  Describe you idea in a phrase !');
    }
