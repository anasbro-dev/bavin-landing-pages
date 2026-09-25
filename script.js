const toast = document.getElementById('toast');

document.querySelectorAll('.js-order-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (toast) {
      toast.textContent = `تم تسجيل طلب ${form.dataset.product || 'المنتج'} تجريبيًا ✓`;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2600);
    }
  });
});
