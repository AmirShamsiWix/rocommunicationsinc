
var footerForm = document.getElementById("my-form-footer");
var modal = document.getElementById("subscribe-modal");

async function handleSubmitFooter(event) {
  event.preventDefault();
  var status = document.getElementById("subscribe-modal-message");
  var closeBtn = document.getElementById("closeBtn");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: footerForm.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thank you for your submission. We will get back to you soon.";
    closeBtn.addEventListener("click", function() {
        $(modal).modal('hide');
    });
    footerForm.reset();
    $(modal).modal('show');
    setTimeout(function() {
      $(modal).modal('hide');
    }, 3000);
  }).catch(error => {
    status.innerHTML = "Oops! Something went wrong.";
    $(modal).modal('show');
  });
}

footerForm.addEventListener("submit", handleSubmitFooter);