const share = document.querySelector(".card__info__share--icon");
const popup = document.querySelector(".card__info__share--popup");

share.addEventListener("click", () => popup.classList.toggle("active"));
