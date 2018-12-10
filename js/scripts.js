//==== Business logic====//

$(document).ready(function() {

$("form#quizPage").submit(function(event){
var qN1 = $("input:radio[name=js]:checked").val();
var qN2 = $("input:radio[name=html]:checked").val();
var qN3 = $("input:radio[name=css]:checked").val();
var qN4 = $("input:radio[name=java]:checked").val();
var qN5 = $("input:radio[name=python]:checked").val();
var qN6 = $("input:radio[name=string]:checked").val();
var qN7 = $("input:radio[name=object]:checked").val();
var qN8 = $("input:radio[name=fixed]:checked").val();
var qN9 = $("input:radio[name=pitch]:checked").val();
var qN10 = $("input:radio[name=bold]:checked").val();

var youScore = parseInt(qN1)+parseInt(qN2)+parseInt(qN3)+parseInt(qN4)+parseInt(qN5)+parseInt(qN6)+parseInt(qN7)+parseInt(qN8)+parseInt(qN9)+parseInt(qN10);
$("#youScore").text("YOU SCORED: " + youScore + " OUT OF 100");

//==== User Interface ====//
$("form#quizPage").show(1250);
$("#youScore").show(3000);
event.preventDefault();
});

});












// // When the user scrolls the page, execute myFunction  // window.onscroll = function() {myFunction()};

// // Get the header // var header = document.getElementById("myHeader");

// // Get the offset position of the navbar // var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll
// position // function myFunction() { //   if (window.pageYOffset > sticky) { //     header.classList.add("sticky"); //
// } else { //     header.classList.remove("sticky"); //   } // }

// $(document).ready(function() { //         $(".quiz-page form").submit(function(event) { // var quiz-page = ["Q1",
// "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10"] // quiz-page.forEach(function(quiz-page) { //   var results=
// ("Q1"+"Q2"+"Q3"+"Q4"+"Q5"+"Q6"+"Q7"+"Q8"+"Q9"+"Q10").val();

//             console.log(results); //             $("." + quiz-page).text(results).val(); //           });

//           $("#results").show();

//           event.preventDefault(); //         }); //       }); // function myFunction() { //   var popup =
// document.getElementById("myPopup"); //   popup.classList.toggle("show"); //

// function myFunction(R){
//   return document.getElementById(R);
//   Var position = 0, quiz, quiz-page, question, choice, choices, choiceA, choiceB, choiceC, choiceD, correctAnswer = 0;
//   var questions = [
//
//     [ "Which of the following is correct about features of JavaScript?","JavaScript is a lightweight, interpreted, programming language.","JavaScript is designed for creating network-centric applications.","JavaScript is complementary to and integrated with Java.","All of the above.","C" ],
//     [ "Which of the following is the correct syntax to print a page using JavaScript?","window.print();","browser.print();","navigator.print();","document.print();","A" ],
//     [ "Which built-in method calls a function for each element in the array?","while()","loop()","forEach()","None of the above.","C" ],
//     [ "Which built-in method returns the calling string value converted to upper case?","toUpperCase()","toUpper()","changeCase(case)","None of the above.","A" ],
//     [ "Which of the following function of String object combines the text of two strings and returns a new string?","add()","merge()","concat()","append()","C" ]
// ];
//
//
// function renderQuestion(){
//   quiz = myFunction("quiz");
//   if(position>=questions.length){
//     quiz.innerHTML = "<h2>You got "+correctAnswer+" of "+questions.length+" questions correct</h2>";
//     myFunction("quiz-page").innerHTML = "All Done!";
//     position = 0;
//     correctAnswer = 0;
//     return false;
//   }
//   myFunction("quiz-page").innerHTML= "Question "+(position+1)+" of "+questions.length;
//   question = questions[position][0];
//   choiceA = questions[position][1];
//   choiceB = questions[position][2];
//   choiceC = questions[position][3];
//   choiceD = questions[position][4];
//   quiz.innerHTML = "<h4>"+question+"</h4>";
//   quiz.innerHTML += "<input type='checkbox' name='choices' value='A'>"+choiceA+"<br>";
//   quiz.innerHTML += "<input type='checkbox' name='choices' value='B'>"+choiceB+"<br>";
//   quiz.innerHTML += "<input type='checkbox' name='choices' value='C'>"+choiceC+"<br>";
//   quiz.innerHTML += "<input type='checkbox' name='choices' value='D'>"+choiceD+"<br><br>";
//   quiz.innerHTML += "<button onClick= 'checkAnswer()''>Submit Answer</button>";
// }
//
// function checkAnswer(){
//   choices = document.getElementsByName("choices");
//   for(var i=0; i<choices.length; i++){
//     if(choices[i].checked){
//       choice = choices[i].value;
//     }
//   }
//   if(choice == questions[position][5]){
//     correct++;
//   }
//   position++;
//   renderQuestion();
// }
// window.addEventListener("load", renderQuestion, false);
