$(document).ready(function(){
    
/*start scroll to element smoothly*/   
$(".navbar-light .navbar-nav .nav-link").click(function(e){
    e.preventDefault()
   // console.log(   $(this).data("location") ) //test only
    
$("html,body")
    .animate({scrollTop:$('#' + $(this).data("location")).offset().top-66},1200)
    
})    
/*end  scroll to element smoothly*/   
    
/*start sync links with sections*/  
$(window).scroll(function(){
    $(".my-block").each(function(){
        if( $(window).scrollTop() > $(this).offset().top-68 )
            var myele= $(this).attr("id")
        //console.log( myele)
$('.navbar-light .navbar-nav .nav-link[data-location="'+myele+'"]')
    .parents(".nav-item ").addClass("active").siblings().removeClass("active")
    })
   })
/*end sync links with sections*/ 
    
/* start go-up button*/  
    $(window).scroll(function(){
        if( $(window).scrollTop()>200){
            $(".go-up").fadeIn(300) // show it
        }
        else{
           $(".go-up").fadeOut(300) // hide it again
        }
        
    })
$(".go-up").click(function(){  // go to the top of the page on click
    $("body,html").animate({scrollTop:0},1200)
})    
/* end go-up button*/  
    
/*start header*/  
$(".header .info .button-list .btn-first").click(function(){
    $("html,body").animate({scrollTop: $(".supscription").offset().top-67 },1200)
})  
    
$(".header .info .button-list .btn-second").click(function(){
    $("html,body").animate({scrollTop: $(".schedule").offset().top-67 },1200)
})       
/*end header*/
    
/*start forms input effects*/   
$("form input").focusin(function(){
    var old = $(this).attr("placeholder") // store old value of placeholder
  //  console.log(old)//test
    $(this).attr("placeholder","") //empty placeholder
    
  $("form input").focusout(function(){
     $(this).attr("placeholder",old) // restore old value of placeholder
  })  
})
    
$("form input").focusout(function(){     // show risk 
    if ($(this).val()==""){
        $(this).css({border:"1px solid red"})
        $(this).parent().find(".risk").show()
    }

})
$("form input").keypress(function(){   // hide risk
    $(this).css({border:"1px solid #cccccc"})
        $(this).parent().find(".risk").hide() 
})    
/*end forms input effects*/ 
    
/*start schedule*/ 
/*dynamic tabs*/
$(".schedule .events .navigation button").click(function(){ 
 $(this).addClass("active").siblings().removeClass("active")// add active class on buttons 
 var myele = $(this).data("tab") // define var for data-tab
 //console.log(myele) //test only
 $(".schedule .info section").hide()// hide all info divs
 $("."+myele).fadeIn(300) // then show specific info
    })
/*dynamic tabs*/
/*slide toggle effect for info*/ 
$(".schedule .info section .item p i").click(function(){
    $(this).toggleClass("fa-plus fa-minus") //toggle icon plus- minus
    $(this).parents(".item").find(".hidden-content").toggleClass("is-hidden-now");
    if(  $(this).parents(".item").find(".hidden-content").hasClass("is-hidden-now")){
        $(this).parents(".item").find(".hidden-content").slideDown() //how it
    }
    else{
         $(this).parents(".item").find(".hidden-content").slideUp() // hide it again
    }
})    
/*slide toggle effect for info*/ 
/*end schedule*/ 
    
/*start gallery*/
$(".gallery .item ").mouseenter(function(){ // on mouse enter  show
    $(this).find(".overlay").fadeIn(300)
}) 
    
$(".gallery .item ").mouseleave(function(){ // on mouse leave  hide
    $(this).find(".overlay").fadeOut(300)
})  
   
$(".gallery .item ").mouseenter(function(){  // for small images only
   $(this).find(".overlay-small").fadeIn(300).css({display:"flex"})
}) 
         
/*end gallery*/

    
/*start speakers*/
$(".speakers .item  ").mouseenter(function(){
    $(this).find(" .social-links ").fadeIn(300).css({display:"flex"})  // show
})   
    
$(".speakers .item  ").mouseleave(function(){
    $(this).find(" .social-links ").fadeOut(300)  // hide it again
})        
/*end speakers*/
    
/*start faqs*/
   $(".faqs .info section .item p i").click(function(){
    $(this).toggleClass("fa-plus fa-minus") //toggle icon plus- minus
    $(this).parents(".item").find(".hidden-content").toggleClass("is-hidden-now");
    if(  $(this).parents(".item").find(".hidden-content").hasClass("is-hidden-now")){
        $(this).parents(".item").find(".hidden-content").slideDown() //how it
    }
    else{
         $(this).parents(".item").find(".hidden-content").slideUp() // hide it again
    }
})    
/*end faqs*/    
    
})/*main function do not touch*/

/* external plugins start....*/
/*start header bx-slider*/  
$(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth:"auto",
    auto:true,
      
  });
});   
/*end header bx-slider*/

/*start carousel slider*/
$('.carousel').carousel({
  interval: 2500,
})
/*end carousel slider*/

