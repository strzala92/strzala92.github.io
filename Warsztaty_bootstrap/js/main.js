//document.getElementById("nav-menu");
//
//
//document.getElementsByTagName("body")[0].onscroll = function()
//{
//if(Math.round(window.pageYOffset) > 84){
//    document.getElementById("nav-menu").style.backgroundColor = 'rgba(14, 216,15, 0.5)';}
//else
//       {document.getElementById("nav-menu").style.backgroundColor = 'rgba(0,0,0,0.0)'; 
//    
//}};

$(function(){
$(window).scroll(function(){
    console.log('asd');
    if($(window).scrollTop()>50)
        {
            $('#nav-menu').addClass('scroll');
            $('#nav-menu').css({'transition':'all .4s'});
        }
    else{
          $('#nav-menu').removeClass('scroll');
}});
    if($(window).scrollTop()>50)
        {
            $('#nav-menu').addClass('scroll');
        }
});

