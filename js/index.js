// window.scrollTo({ top: 0, behavior: 'smooth' })

const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;

  if (scroll >= 420) {
    box1.style.display = "flex";
    info1.style.display = "flex";
  }

  if (scroll >= 600) {
    box2.style.display = "flex";
    info2.style.display = "flex";
  }

  if (scroll >= 1300) {
    // box3.style.display = "flex";
    info3.style.display = "flex";
  }
});

const openPage = (msg) => {
  if (msg === "instagram") {
    window
      .open("https://www.instagram.com/arteflorescer.pe/", "_blank")
      .focus();
  }

  if (msg === "facebook") {
    window.open("https://www.facebook.com/arteflorescer.pe/", "_blank").focus();
  }

  if (msg === "whatsapp") {
    window.open("https://wa.me/+5581996755608", "_blank").focus();
  }
};
