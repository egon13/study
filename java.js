const toggle = document.querySelector('.hamburger'); //class node 중 navbar_toggleBtn 지정
const menu = document.querySelector('.item2');
const icons = document.querySelector('.item3');
 
toggle.addEventListener('click', ()=>{
 menu.classList.toggle('active'); // click했을 때 active가 없다면 active를 추가해 주고 있으면 active를 없애줌
 icons.classList.toggle('active');
});