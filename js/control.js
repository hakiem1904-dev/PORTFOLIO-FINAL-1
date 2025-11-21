// JavaScript Document
var typed = new Typed('.element', {
 strings: ["Graphic Designer?", "UI/UX Enthusiast?", "Content Visual Creator?"],
 typeSpeed:50,
 backSpeed:50,
 loop:true,
 });
$('.counter').countUp();
$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});
AOS.init();