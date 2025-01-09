// Booking form and confirmation message elements
const form = document.getElementById('ticket-booking-form');
const confirmationMessage = document.getElementById('confirmation-message');
const bookBtn = document.getElementById('book-btn');

// Confirmation details
const confirmedMovie = document.getElementById('confirmed-movie');
const confirmedShowtime = document.getElementById('confirmed-showtime');
const confirmedTickets = document.getElementById('confirmed-tickets');

// Handle the form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    // Get values from the form
    const movie = document.getElementById('movie').value;
    const showtime = document.getElementById('showtime').value;
    const tickets = document.getElementById('tickets').value;

    // Simple validation
    if (movie === "" || showtime === "" || tickets === "") {
        alert("Please fill in all fields before submitting.");
        return;
    }

    // Fill in the confirmation details
    confirmedMovie.textContent = movie;
    confirmedShowtime.textContent = showtime;
    confirmedTickets.textContent = tickets;

    // Show the confirmation message and hide the form
    confirmationMessage.classList.remove('hidden');
    form.reset(); // Reset the form fields
});
