document.querySelectorAll('.cta-btn, .ghost-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.animate(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(0.98)' },
        { transform: 'scale(1)' }
      ],
      {
        duration: 220,
        easing: 'ease-out'
      }
    );
  });
});

const orderBadge = document.querySelector('.badge');
if (orderBadge) {
  const states = ['Pending', 'Preparing', 'Ready'];
  let index = 0;
  setInterval(() => {
    index = (index + 1) % states.length;
    orderBadge.textContent = states[index];
  }, 2600);
}
