document.addEventListener('DOMContentLoaded', function() {
  const catalogItems = document.querySelectorAll('.catalog-item');

  catalogItems.forEach(item => {
    item.addEventListener('click', function() {
      // Add logic for handling click events
      alert('This will navigate to the selected category.');
    });
  });
});
