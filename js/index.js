// window.scrollTo({ top: 0, behavior: 'smooth' })


const info = document.getElementById('info');
const box1 = document.getElementById('box1');



window.addEventListener('scroll', (event) => {
    let scroll = this.scrollY;

    if (scroll >= 420 ) {
        box1.style.display = 'flex'
        info.style.display = 'flex'
    }
});





const openPage = (msg) => {
    if (msg === 'instagram') {
        window.open('https://www.instagram.com/arteflorescer.pe/', '_blank').focus();
    }

}