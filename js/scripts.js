//==== Business logic====//

$(document).ready(function() {

  var score = 0;

  $("#qTwo,#qThree,#qFour,#qFive,#qSix,#qSeven,#qEight,#qNine,#qTen,.result").hide();

  $('#next1').click(function() {
    var q1 = $("input:radio[name=qOne]:checked").val();
    $('#qTwo').show();
    $('#qOne').hide();
  });

  $('#next2').click(function() {
    var q2 = $("input:radio[name=qTwo]:checked").val();
    $('#qThree').show();
    $('#qTwo').hide();
  });

  $('#previous2').click(function() {
    var q2 = $("input:radio[name=qTwo]:checked").val();
    $('#qOne').show();
    $('#qTwo').hide();
  });

  $('#next3').click(function() {
    var q3 = $("input:radio[name=qThree]:checked").val();
    $('#qFour').show();
    $('#qThree').hide();
  });

  $('#previous3').click(function() {
    var q3 = $("input:radio[name=qThree]:checked").val();
    $('#qTwo').show();
    $('#qThree').hide();
  });
  $('#next4').click(function() {
    var q4 = $("input:radio[name=qFour]:checked").val();
    $('#qFive').show();
    $('#qFour').hide();
  });

  $('#previous4').click(function() {
    var q4 = $("input:radio[name=qFour]:checked").val();
    $('#qThree').show();
    $('#qFour').hide();
  });

  $('#next5').click(function() {
    var q5 = $("input:radio[name=qFive]:checked").val();
    $('#qSix').show();
    $('#qFive').hide();
  });

  $('#previous5').click(function() {
    var q2 = $("input:radio[name=qFive]:checked").val();
    $('#qFour').show();
    $('#qFive').hide();
  });

  $('#next6').click(function() {
    var q6 = $("input:radio[name=qSix]:checked").val();
    $('#qSeven').show();
    $('#qSix').hide();
  });

  $('#previous6').click(function() {
    var q6 = $("input:radio[name=qSix]:checked").val();
    $('#qFive').show();
    $('#qSix').hide();
  });

  $('#next7').click(function() {
    var q7 = $("input:radio[name=qSeven]:checked").val();
    $('#qEight').show();
    $('#qSeven').hide();
  });

  $('#previous7').click(function() {
    var q7 = $("input:radio[name=qSeven]:checked").val();
    $('#qSix').show();
    $('#qSeven').hide();
  });

  $('#next8').click(function() {
    var q8 = $("input:radio[name=qEight]:checked").val();
    $('#qNine').show();
        $('#qEight').hide();
  });

  $('#previous8').click(function() {
    var q8 = $("input:radio[name=qEight]:checked").val();
    $('#qSeven').show();
    $('#qEight').hide();
  });


  $('#next9').click(function() {
    var q9 = $("input:radio[name=qNine]:checked").val();
    $('#qTen').show();
    $(".result").show();
    $("#youScore").show();
      $('#qNine').hide();
  });

  $('#previous9').click(function() {
    var q9 = $("input:radio[name=qNine]:checked").val();
    $('#qEight').show();
    $('#qNine').hide();
  });


$("form#quizPage").submit(function(event){
var q1 = $("input:radio[name=qOne]:checked").val();
var q2 = $("input:radio[name=qTwo]:checked").val();
var q3 = $("input:radio[name=qThree]:checked").val();
var q4 = $("input:radio[name=qFour]:checked").val();
var q5 = $("input:radio[name=qFive]:checked").val();
var q6 = $("input:radio[name=qSix]:checked").val();
var q7 = $("input:radio[name=qSeven]:checked").val();
var q8 = $("input:radio[name=qEight]:checked").val();
var q9 = $("input:radio[name=qNine]:checked").val();
var q10 = $("input:radio[name=qTen]:checked").val();
$("#youScore").show();

var youScore = parseInt(q1)+parseInt(q2)+parseInt(q3)+parseInt(q4)+parseInt(q5)+parseInt(q6)+parseInt(q7)+parseInt(q8)+parseInt(q9)+parseInt(q10);
$("#youScore").text("YOU SCORED: " + youScore + " OUT OF 100");

//==== User Interface ====//


$("form#quizPage").show(1250);
$("#youScore").show(3000);
event.preventDefault();
});

});
