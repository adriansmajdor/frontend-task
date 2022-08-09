var alert = document.querySelector('.alert');
var overlay = document.querySelector('.overlay');
var close = document.querySelector('.close');

close.addEventListener('click', closing);
close.addEventListener('keypress', closing);

    function closing(){
    
        alert.style.opacity = '0';
        overlay.style.opacity = '0';
    
        setTimeout(function(){ alert.style.display = 'none'; }, 600);
        setTimeout(function(){ overlay.style.display = 'none'; }, 600);

    }



var b1 = document.querySelector('.b1');
                       
b1.addEventListener('click', function() {

    alert.style.opacity = '1';
    overlay.style.opacity = '1';

    setTimeout(function(){ alert.style.display = 'flex'; }, 0);
    setTimeout(function(){ overlay.style.display = 'flex'; },0);

},);


var clicks = 0;

b1.addEventListener('click', clickCounter);

function clickCounter() {

   
    if (localStorage.clickcount) {

        localStorage.clickcount = Number(localStorage.clickcount)+1;

    } else {

        localStorage.clickcount = 1;
    }

    document.querySelector('.counter').innerHTML = localStorage.clickcount;

};

var b2 = document.querySelector('.b2');
var counter = document.querySelector('.counter');

b2.addEventListener('click', resetCounter);

function resetCounter() {

    clicks = 0;
    counter.textContent = clicks;
    localStorage.setItem('clickcount', clicks);

};


b2.addEventListener('click', changebtntext);

function changebtntext() {

    b2.innerHTML = 'Done!'; 

};



close.addEventListener('click', changebtntext2);

function changebtntext2() {

    setTimeout(function() {

        b2.innerHTML = 'Reset Counter';


    }, 1000);

};

b1.addEventListener('click', rl)

function rl() {


    var a = localStorage.getItem('clickcount');

    if(a >= 5) {

    b2.style.display = 'inline-block';

    } else {


            b2.style.display = 'none';

    }

};

overlay.addEventListener('click', clickoutsidealert)

function clickoutsidealert() {
    
    if (!alert.contains(event.target)) {
        
    alert.style.opacity = '0';
    overlay.style.opacity = '0';

    setTimeout(function(){ alert.style.display = 'none'; }, 600);
    setTimeout(function(){ overlay.style.display = 'none'; },600);

    setTimeout(function() { b2.innerHTML = 'Reset Counter'; }, 600);
    
    }
        
};





