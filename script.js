
// SCROLL CARD BUTTONS //

const wrappers = document.querySelectorAll('.cards-wrapper');

document.querySelectorAll('.scroll-btn-left').forEach((btn, i) => {
    btn.addEventListener('click', () => {
        wrappers[i].scrollBy({ left: -300, behavior: 'smooth' });
    });
});

document.querySelectorAll('.scroll-btn-right').forEach((btn, i) => {
    btn.addEventListener('click', () => {
        wrappers[i].scrollBy({ left: 300, behavior: 'smooth' });
    });
});



// FORM SUBMISSION MESSAGE //
const form = document.getElementById('email-input-div');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        form.reset();
        alert('Thanks for subscribing!');
    } else {
        alert('Something went wrong, please try again.');
    }
});