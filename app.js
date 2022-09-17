const btn = document.getElementById('myBtn');
const modal = document.getElementById('myModal');

btn.addEventListener('click', openModal);

function openModal() {
    modal.classList.add('open');
    attachModalEvents();
}

function attachModalEvents() {
    modal.querySelector('.close').addEventListener('click', closeModal);
    document.addEventListener('keydown', handlEscape);
    modal.addEventListener('click', handleOutside);
}

function closeModal() {
    modal.classList.remove('open');
    detachModalEvents();
}

function handlEscape(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
}

function handleOutside(e) {
    const isClickOutside = !!e.target.closest('.modal-content');

    if (!isClickOutside) {
        closeModal();
    }
}

function detachModalEvents() {
    modal.querySelector('.close').removeEventListener('click', closeModal);
    document.removeEventListener('keydown', handlEscape);
}
