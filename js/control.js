// JavaScript Document
var typed = new Typed('.element', {
 strings: ["Web Designer.", "Code Developer.","Apps Designer." , "Flim Maker"],
 typeSpeed:50,
 backSpeed:50,
 loop:true,
 });
$('.counter').countUp();
$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});
AOS.init();