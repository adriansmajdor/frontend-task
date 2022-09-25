var alert = document.querySelector('.aside_alert__popupbox');
var overlay = document.querySelector('.aside_alert__overlay');
var close = document.querySelector('.aside_alert__closebutton');


close.addEventListener('click', closeAlert);
close.addEventListener('keypress', closeAlert);

function closeAlert() { 
    

    overlay.classList.add('aside_alert__overlay');
    alert.classList.add('aside_alert__popupbox')
    overlay.classList.remove('aside_alert__overlay--visible');
    alert.classList.remove('aside_alert__popupbox--visible');


};

overlay.addEventListener('click', clickoutsidealert)

function clickoutsidealert() {
    
    if (!alert.contains(event.target)) {
        
        overlay.classList.add('aside_alert__overlay');
        alert.classList.add('aside_alert__popupbox')
        overlay.classList.remove('aside_alert__overlay--visible');
        alert.classList.remove('aside_alert__popupbox--visible');
        resetCounterButton.innerHTML = 'Reset Counter';
    
    }
        
};


var openAlertButton = document.querySelector('.main_container__openAlertButton');

openAlertButton.addEventListener('click', openAlert);

function openAlert() {

    overlay.classList.add('aside_alert__overlay--visible');
    alert.classList.add('aside_alert__popupbox--visible')
    overlay.classList.remove('aside_alert__overlay');
    alert.classList.remove('aside_alert__popupbox');

};

var clicks = 0;

openAlertButton.addEventListener('click', clickCounter);

function clickCounter() {

   
    if (localStorage.clickcount) {

        localStorage.clickcount = Number(localStorage.clickcount)+1;

    } else {

        localStorage.clickcount = 1;
    }

    document.querySelector('.aside_alert__counter').innerHTML = localStorage.clickcount;

};

var resetCounterButton = document.querySelector('.aside_alert__resetCounterButton');
var counter = document.querySelector('.aside_alert__counter');

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

    resetCounterButton.classList.add('aside_alert__resetCounterButton--visible');
    resetCounterButton.classList.remove('aside_alert__resetCounterButton');

    } else {


            resetCounterButton.classList.add('aside_alert__resetCounterButton');
            resetCounterButton.classList.remove('aside_alert__resetCounterButton--visible');

    }

};

