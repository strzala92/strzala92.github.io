'use strict';

var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', ustawTlo);

function ustawTlo() {


    for (var i = 0; i < document.getElementsByTagName('p').length; i++) {

        if (document.getElementsByTagName("p")[i].style.backgroundColor == "") {
                if (i % 2 == 1) {
                    document.getElementsByTagName('p')[i].style.backgroundColor = "yellow";
                } else {
                    document.getElementsByTagName('p')[i].style.backgroundColor = "red";
                }

            } else {
                document.getElementsByTagName('p')[i].removeAttribute("style");
//                document.getElementsByTagName('p')[i].style.backgroundColor = "";
            }
        }
    }



//function zmientlo(){
//    for(var  i = 0; i < document.getElementsByTagName('p').length;i++)
//        {
//            document.getElementsByTagName('p')[i].style.backgroundColor = "green";
//        }
//}
//
//button.addEventListener('mouseout',zmientlo);