(function(){
    const list = document.querySelector('.menu_links');
    const menu = document.querySelector('.menu_hamburguer');

    window.addEventListener('resize', ()=>{
        if(window.innerWidth>800){
            deleteStyleHeight();
            if(list.classList.contains('menu_links--show')){
                list.classList.remove('menu_links--show');
            }
        }else{
            addClick();
        }
    })

    menu.addEventListener('click', ()=> list.classList.toggle('menu_links--show'));

})();