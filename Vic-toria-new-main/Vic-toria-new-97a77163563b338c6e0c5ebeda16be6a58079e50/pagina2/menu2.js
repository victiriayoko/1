window.addEventListener("scroll",function(){
    let header = document.querySelector ('.cabeçalho-dois')
    header.classList.toggle('rolar',window.scrollY > 0)
})