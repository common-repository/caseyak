const enabledCheckbox = document.getElementById('cy-enabled');
if (enabledCheckbox) {
    enabledCheckbox.addEventListener('change', (event) => {
      if (event.currentTarget.checked) {
        alert('This will enable the CaseYak plugin. Click Save to make it happen.');
      } else {
        alert('This will disable the CaseYak plugin but retain your plugin settings. Click Save to make it happen.');
      }
    })
}
const submitButton = document.getElementById('yak-submit');
if (submitButton) {
    submitButton.addEventListener('click', (e) => {
        submitButton.classList.add('is-loading');
    })
}
function manualClicked() {
  document.getElementById("manual-form").style.display = 'block';
}

function checkSubId() {
  const subID = document.getElementById("manual-subID");
  if (!subID.value) { 
    document.getElementById("sub-error").innerHTML = "Please enter a subscription ID";
    return false;
  }
  if (subID.value.slice(0,4) != 'sub_') {
    document.getElementById("sub-error").innerHTML = "Please enter a valid subscription ID";
    return false;
  }
  document.getElementById("checkout-button-manual").classList.add('is-loading');
  document.getElementById("manual-form").submit();
  return true;
}