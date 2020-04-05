console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');

  addMyEventListeners();
  
  
  
  
});


//var scrolled_val = $(document).scrollTop().valueOf();

function addMyEventListeners(){

  $('#backToTop').click(function(){
    console.log('Button has been clicked');
    scrollToTop();
  });
      
  
  $(window).scroll(function(){
    var windowHeight = $(this).scrollTop();
    console.log('Window height is ' + windowHeight);

  if(windowHeight > 200){
    $('#backToTop').css('opacity', '1');  //fadeOut();
  }else{
    $('#backToTop').css('opacity', '0');    //fadeIn();
  }

});
};

function scrollToTop(){
  console.log('scrollToTop() has been invoked');
  $('html').animate({scrollTop: 0}, 500, 'swing');
}







