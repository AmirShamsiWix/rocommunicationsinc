const elementsToToggle = document.querySelectorAll('.item-header');
const expandAllButton = document.querySelector('[data-tracking="accordion__expand-all"]');
const collapseAllButton = document.querySelector('[data-tracking="accordion__collapse-all"]');

// Add event listener to each element
elementsToToggle.forEach(element => {
  element.addEventListener('click', function() {
    const content = this.nextElementSibling;
    
    // Toggle the display of the content
    if (content.style.display === 'block') {
      content.style.display = 'none';
      this.querySelector('path').setAttribute('d', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z');
      collapseAllButton.setAttribute('disabled', 'true');
    } else {
      content.style.display = 'block';
      this.querySelector('path').setAttribute('d', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z');
      collapseAllButton.removeAttribute('disabled');
    }
  });
});


expandAllButton.addEventListener('click', function() {
    elementsToToggle.forEach(element => {
        const content = element.nextElementSibling;
        content.style.display = 'block';
        element.querySelector('path').setAttribute('d', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z');
    });
    collapseAllButton.removeAttribute('disabled');
    expandAllButton.setAttribute('disabled', 'true');
    }
);

collapseAllButton.addEventListener('click', function() {
    elementsToToggle.forEach(element => {
        const content = element.nextElementSibling;
        content.style.display = 'none';
        element.querySelector('path').setAttribute('d', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z');
    });
    collapseAllButton.setAttribute('disabled', 'true');
    expandAllButton.removeAttribute('disabled');
    }
);