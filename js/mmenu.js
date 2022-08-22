(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-mobile-open]"),
    closeModalBtn: document.querySelector("[data-mobile-close]"),
    modal: document.querySelector("[data-mobile]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("mobile-open");
    refs.modal.classList.toggle("is-hidden-menu");
  }
})();