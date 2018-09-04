Array.from(
  document.querySelectorAll('.benefits__item'),
  function(el) {
    el.addEventListener('mousemove', function(e) {
      el.style.setProperty('--px', e.layerX);
      el.style.setProperty('--py', e.layerY);
    });

  });
