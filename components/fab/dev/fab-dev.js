// Fabs Component
const fabs = document.querySelectorAll('media-fab-filled, media-fab-text, media-fab-outlined');

const applyFabSize = (fab) => {
  const size = fab.getAttribute('size');
  let height, width;

  if (size === 'small') {
    height = '35px';
    width = '35px';
  } else if (size === 'large') {
    height = '65px';
    width = '65px';
  } else {
    height = '50px';
    width = '50px';
  }

  fab.style.minHeight = height;
  fab.style.minWidth = width;
  fab.style.maxHeight = height;
  fab.style.maxWidth = width;
};

const fabMutationHandler = (mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'size') {
      const fab = mutation.target;
      applyFabSize(fab);
    }
  }
};

const fabObserver = new MutationObserver(fabMutationHandler);

fabs.forEach(fab => {
  applyFabSize(fab);
  fabObserver.observe(fab, { attributes: true });
});
