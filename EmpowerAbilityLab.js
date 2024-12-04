//Template Function that can be used to run JavaScript on the page

//Note: This can be changed to whatever JavaScript formatting you would like
function knowledgeRunner() {

}

function navigateTo(section) {
    document.querySelectorAll('main > section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(section).classList.remove('hidden');
}

window.navigateTo = navigateTo;

// Function to show/hide the event details textarea when the "Invite a Speaker" checkbox is selected
function toggleEventDetails() {
    var checkbox = document.getElementById('option2');
    var eventDetails = document.getElementById('eventDetails');
    if (checkbox.checked) {
        eventDetails.classList.remove('hidden');
    } else {
        eventDetails.classList.add('hidden');
    }
}

// Handle form submission (example: show a thank you message)
function handleSubmit(event) {
    event.preventDefault();
    var formMessage = document.getElementById('formMessage');
    formMessage.textContent = "Thank you for scheduling a call. We will get back to you soon!";
}
knowledgeRunner()

// Open Modal
document.getElementById('openModalButton').addEventListener('click', function () {
    const modal = document.getElementById('customModal');
    modal.classList.add('show'); // Bootstrap "show" class to display modal
    modal.style.display = 'block'; // Ensure modal is visible
    modal.setAttribute('aria-hidden', 'false'); // Update ARIA attribute
});

// Close Modal
function closeModal() {
    const modal = document.getElementById('customModal');
    modal.classList.remove('show');
    modal.style.display = 'none'; // Hide modal
    modal.setAttribute('aria-hidden', 'true'); // Update ARIA attribute
}
