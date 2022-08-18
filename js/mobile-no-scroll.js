(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-button]'),
      body: document.querySelector('[data-page]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
        refs.body.classList.toggle('body--no-scroll');
  }
})();