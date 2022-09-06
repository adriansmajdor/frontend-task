var alert = document.querySelector('.alert');
var overlay = document.querySelector('.overlay');
var close = document.querySelector('.close');

close.addEventListener('click', closingAlert);
close.addEventListener('keypress', closingAlert);

    function closingAlert(){
    
        alert.style.opacity = '0';
        overlay.style.opacity = '0';
    
        setTimeout(function(){ alert.style.display = 'none'; }, 600);
        setTimeout(function(){ overlay.style.display = 'none'; }, 600);

    }



var openAlertButton = document.querySelector('.openAlertButton');
                       
openAlertButton.addEventListener('click', function() {

    alert.style.opacity = '1';
    overlay.style.opacity = '1';

    setTimeout(function(){ alert.style.display = 'flex'; }, 0);
    setTimeout(function(){ overlay.style.display = 'flex'; },0);

},);


var clicks = 0;

openAlertButton.addEventListener('click', clickCounter);

function clickCounter() {

   
    if (localStorage.clickcount) {

        localStorage.clickcount = Number(localStorage.clickcount)+1;

    } else {

        localStorage.clickcount = 1;
    }

    document.querySelector('.counter').innerHTML = localStorage.clickcount;

};

var resetCounterButton = document.querySelector('.resetCounterButton');
var counter = document.querySelector('.counter');

resetCounterButton.addEventListener('click', resetCounter);

function resetCounter() {

    clicks = 0;
    counter.textContent = clicks;
    localStorage.setItem('clickcount', clicks);

};


resetCounterButton.addEventListener('click', changebtntext);

function changebtntext() {

    resetCounterButton.innerHTML = 'Done!'; 

};



close.addEventListener('click', changebtntext2);

function changebtntext2() {

    setTimeout(function() {

        resetCounterButton.innerHTML = 'Reset Counter';


    }, 1000);

};

openAlertButton.addEventListener('click', refreshLocalStorage)

function refreshLocalStorage() {


    var a = localStorage.getItem('clickcount');

    if(a >= 5) {

    resetCounterButton.style.display = 'inline-block';

    } else {


            resetCounterButton.style.display = 'none';

    }

};

overlay.addEventListener('click', clickoutsidealert)

function clickoutsidealert() {
    
    if (!alert.contains(event.target)) {
        
    alert.style.opacity = '0';
    overlay.style.opacity = '0';

    setTimeout(function(){ alert.style.display = 'none'; }, 600);
    setTimeout(function(){ overlay.style.display = 'none'; },600);

    setTimeout(function() { resetCounterButton.innerHTML = 'Reset Counter'; }, 600);
    
    }
        
};





