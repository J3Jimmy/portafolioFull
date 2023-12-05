document.addEventListener('DOMContentLoaded', function () {

  const menu = document.getElementById('menu');

  const navMenu = document.querySelector('.nav--menu')

  const navClose=document.querySelectorAll('.navClose')

  menu.addEventListener('click', function () {
    // window.alert('clickkkkkkkkkkkk 👌')
    navMenu.classList.toggle('transalate--menu')
  })


  navClose.forEach(function(e){
    e.addEventListener('click', function () {
         // window.alert('clickkkkkkkkkkkk 👌')
         navMenu.classList.toggle('transalate--menu')
    })

  })

})