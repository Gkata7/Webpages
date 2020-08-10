const items = document.querySelectorAll('#timeline li');

const isInViewPort = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 && 
    rect.left >= 0 && 
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) && 
      rect.right <= (window.innerWidth || 
        document.documentElement.clientwidth)
  );
};
// Checks to see if the item are within the View port
const run = () =>
items.forEach(item => {
  if(isInViewPort(item)) {
    item.classList.add('show');
  };
});

// Event Listeners
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);