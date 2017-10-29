'use strict';

$("body").find("p").eq(2).css({'color':'red'});


$('p').each(function(index,element){
    if(index != 2)
    $(this).css('color','green');
    console.log("Element: " + element, index);
}
           
           )