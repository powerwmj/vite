let menu = document.querySelector('.header__menu');
let prevScrollTop = 0;
let nowScrollTop = 0;

function wheelDelta(){
  return prevScrollTop - nowScrollTop > 0 ? 'up' : 'down';
}

window.addEventListener('scroll', function(){
  
  nowScrollTop = window.scrollY;
  if(nowScrollTop > 140) {
    menu.classList.add('active');
  } else {
    menu.classList.remove('active');
  }
  if(wheelDelta() == 'down'){
    if(nowScrollTop > 1000) {
      menu.classList.add('black');
    } else {
      menu.classList.remove('black');
    }
  }
  if(wheelDelta() == 'up'){
    if(nowScrollTop < 1000) {
      menu.classList.remove('black');
    } 
  }
  prevScrollTop = nowScrollTop;
  
  // menu btn
  // const body = document.querySelector('body');
  const menubtn = document.querySelector('.header__menu__btn');
  const allmenu = document.querySelector('.header-wrap');
  const dim = document.querySelector('.dim');
  menubtn.addEventListener('click', function(){
    allmenu.classList.add('active');
  });
  dim.addEventListener('click', function(){
    allmenu.classList.remove('active');
  })

});