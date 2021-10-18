window.scrollTo({ top: 0, behavior: 'smooth' })


const box1 = document.getElementById('box1');


window.addEventListener('scroll', (event) => {
    let scroll = this.scrollY;
    console.log(scroll);

    if (scroll >= 80 && scroll < 200) {
        box1.style.right = `${scroll}px`
    }
});





const openPage = (msg) => {
    if (msg === 'instagram') {
        window.open('https://www.instagram.com/arteflorescer.pe/', '_blank').focus();
    }

}