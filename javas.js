

var input = document.getElementsByTagName('input') ;
var form = document.getElementById('myform')
var c = input.length ;
var element = document.getElementById('lastname') ;

function desactivespan(){
    var spans = document.getElementsByTagName('span') ;
    var c = spans.length ;
    for(var i=0 ;i<c ;i++){
        spans[i].style.display = 'none' ;
    }
}

var global ={} ;

global.lastname = function(){
    var lastname = document.getElementById('lastname') ;
    var span = lastname.nextElementSibling ;
    if(lastname.value.length<=4){

        span.style.display='inline-block' ;
        lastname.className = 'incorect' ;   
    }else{
        span.style.display = 'none' ;
        lastname.className = 'correct';
    }
} ;

global.firstname = function(){
    var firstname = document.getElementById('firstname') ;
    var span = firstname.nextElementSibling ;

    if(firstname.value.length<=4){
        span.style.display = 'inline-block' ;
        firstname.className = 'incorect' ;
    }else{
        span.style.display = 'none';
        firstname.className = 'correct';
    }
} ;

global.password = function(){

    var password = document.getElementById('password') ;
    var span = password.nextElementSibling ;

    if(password.value.length<=6){
        span.style.display = 'inline-block';
        password.className = 'incorect';
    }else{
        span.style.display = 'none';
        password.className = 'correct';
    }

} ;

var inputs = document.querySelectorAll('input') ;
alert(inputs.length)
var c = inputs.length ;

for (var i = 0; i<c ; i++) {
   if(inputs[i].type=='text' || inputs[i].type=='password'){
        alert(i) ;
       inputs[i].onkeyup = function(){
            global[this.id]() ;
       }
   }    
}

desactivespan() ;
/*
form.onsubmit= function(e){
    e.preventDefault() ;
    global.lastname() ;
    global.firstname() ;
    global.password() ;
}*/