document.getElementById("modal-button-1").addEventListener("click", function() {
    document.getElementById("modal-1").style.display = "none";
});

document.getElementById("offer1").addEventListener("click", function() {
    document.getElementById("modal-1").style.display = "block";
});

document.getElementById("modal-button-2").addEventListener("click", function() {
    document.getElementById("modal-2").style.display = "none";
});

document.getElementById("offer2").addEventListener("click", function() {
    document.getElementById("modal-2").style.display = "block";
});

document.getElementById("modal-button-3").addEventListener("click", function() {
    document.getElementById("modal-3").style.display = "none";
});

document.getElementById("offer3").addEventListener("click", function() {
    document.getElementById("modal-3").style.display = "block";
});

document.getElementById("modal-button-4").addEventListener("click", function() {
    document.getElementById("modal-4").style.display = "none";
});

document.getElementById("offer4").addEventListener("click", function() {
    document.getElementById("modal-4").style.display = "block";
});

document.getElementById("modal-button-5").addEventListener("click", function() {
    document.getElementById("modal-5").style.display = "none";
});

document.getElementById("offer5").addEventListener("click", function() {
    document.getElementById("modal-5").style.display = "block";
});

document.getElementById("modal-button-6").addEventListener("click", function() {
    document.getElementById("modal-6").style.display = "none";
});

document.getElementById("offer6").addEventListener("click", function() {
    document.getElementById("modal-6").style.display = "block";
});

const elementsToToggle = document.querySelectorAll('.item-header');

// Add event listener to each element
elementsToToggle.forEach(element => {
  element.addEventListener('click', function() {
    const content = this.nextElementSibling;
    
    // Toggle the display of the content
    if (content.style.display === 'block') {
      content.style.display = 'none';
      this.querySelector('path').setAttribute('d', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z');
    } else {
      content.style.display = 'block';
      this.querySelector('path').setAttribute('d', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z');
    }
  });
});


const expandAllButton = document.querySelector('[data-tracking="accordion__expand-all"]');
const collapseAllButton = document.querySelector('[data-tracking="accordion__collapse-all"]');


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