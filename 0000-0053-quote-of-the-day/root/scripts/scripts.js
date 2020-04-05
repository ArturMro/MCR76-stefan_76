console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');

  addMyEventListeners();
  
  quoteOfTheDay();
  
  
});


function addMyEventListeners(){

      
};




function quoteOfTheDay() {
  console.log('quoteOfTheDay function called');
  
  var quotes = ['You can totally do this.', 'Impossible is for the unwilling.', 'When nothing goes right, go left.', 'Try Again. Fail again. Fail better.', 'I can and I will.'];
 
  
  //random number 1-6
  var uno = Math.floor(Math.random() * 6) + 1;
  console.log(uno);

  // random number between 2 numbers
  var num1 = 6;
  var num2 = 20;
  var duo = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
  console.log(duo);
  
  //random number above number 15 lets say up too...100
  var tres = Math.floor(Math.random() * 6) + 15;  //or it will be up to 99 got confused on it
  console.log(tres);

  $('#quoteOfTheDay').html(quotes[Math.floor(Math.random() * quotes.length)]);
}






