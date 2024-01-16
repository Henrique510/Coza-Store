window.addEventListener("scroll", function(){
    let header = document.querySelector('.menu2')
    header.classList.toggle('rolagem', window.scrollY > 500)
    })
    