$(function(){
    
    'use strict';
    
    // Adjust header height 
    
    $('.header').height($(window).height());
    
     $(window).resize(function(){
         
         $('.header').height($(window).height());
     })
    
    $('.links li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        
    });
  
    
    // smoth scroll to div 
   $('.links li a').click(function(){
       
       $('html , body').animate({
           
           scrollTop:$('#' + $(this).data('value')).offset().top
       },1000)
   })
    
   // our auto slider code 
    (function autoSlider() {
       
       $('.slider .active').each(function () {
           
           if (!$(this).is(':last-child')) {
               
               $(this).delay(5000).fadeOut(1000,function () {

                   $(this).removeClass('active').next().addClass('active').fadeIn(1000);

                   autoSlider();
            });
               
           } else {
               
               $(this).delay(5000).fadeOut(1000,function () {
                   
                   $(this).removeClass('active');
                   
                   $('.slider div').eq(0).addClass('active').fadeIn(1000);
                   
                   autoSlider();
               });
    
           }
           
       });
       
   }());
    
    /********** finsh auto slider *******************/
    
    /********** finsh auto slider *******************/
    
});













































