const nav = document.querySelector('.menu-container');
const navSecond = document.querySelector('.menu-container1');
const navContainer = document.querySelector('#nav');
const navList = document.querySelector('.nav-list');
const conatiner = document.querySelector('.container');
const rem = '20rem';
const li = document.querySelectorAll('.li');
nav.addEventListener('click', function (){
    navContainer.style.height = '20rem';
    navContainer.style.display = 'inline-block';
    navList.style.display = 'inline-block';
    nav.style.display = 'none';
    navSecond.style.display = 'inline-block';
    navSecond.addEventListener('click', function(){
        navContainer.style.height = '5rem';
        navList.style.display = 'none';
        nav.style.display = 'inline-block';
        navSecond.style.display = 'none';
    })
});

const COMPAC = document.querySelector('.alert');
COMPAC.addEventListener('click', function () {
    alert("PAYMENT GATEWAY NOT YET AVAILABLE");
})
const COMPAC2 = document.querySelector('.main__btn');
COMPAC2.addEventListener('click', function () {
    alert("PAYMENT GATEWAY NOT YET AVAILABLE");
})


const openbtn = document.querySelector('.open');
const closebtn = document.querySelector('.close');


openbtn.addEventListener('click', function (){
    // console.log('work');
    let press = document.querySelector('.press');
    let btns = document.querySelector('.open');
    let btnText = document.querySelector('.more');
    closebtn.style.display = 'inline-block';
    openbtn.style.display = 'none';
    press.style.display = 'inline-block';
})

closebtn.addEventListener('click', function (){
    // console.log('work');
    let press = document.querySelector('.press');
    let btns = document.querySelector('.open');
    let btnText = document.querySelector('.more');
    openbtn.style.display = 'inline-block';
    closebtn.style.display = 'none';
    press.style.display = 'none';
})



const openbtn1 = document.querySelector('.open1');
const closebtn1 = document.querySelector('.close1');


openbtn1.addEventListener('click', function (){
    // console.log('work');
    let press = document.querySelector('.press1');
    let btns = document.querySelector('.open1');
    let btnText = document.querySelector('.more1');
    closebtn1.style.display = 'inline-block';
    openbtn1.style.display = 'none';
    press.style.display = 'inline-block';
})

closebtn1.addEventListener('click', function (){
    // console.log('work');
    let press = document.querySelector('.press1');
    let btns = document.querySelector('.open1');
    let btnText = document.querySelector('.more1');
    openbtn1.style.display = 'inline-block';
    closebtn1.style.display = 'none';
    press.style.display = 'none';
})



const openbtn2 = document.querySelector('.open2');
const closebtn2 = document.querySelector('.close2');


openbtn2.addEventListener('click', function (){
    // console.log('work');
    let press = document.querySelector('.press2');
    let btns = document.querySelector('.open2');
    let btnText = document.querySelector('.more2');
    closebtn2.style.display = 'inline-block';
    openbtn2.style.display = 'none';
    press.style.display = 'inline-block';
})

closebtn2.addEventListener('click', function (){
    // console.log('work');
    let press = document.querySelector('.press2');
    let btns = document.querySelector('.open2');
    let btnText = document.querySelector('.more2');
    openbtn2.style.display = 'inline-block';
    closebtn2.style.display = 'none';
    press.style.display = 'none';
})


