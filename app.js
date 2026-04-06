// --- State Management ---
let currentUser = null;

// --- DOM Elements ---
const authNavBtn = document.getElementById('auth-nav-btn');
const bookmarksNavBtn = document.getElementById('bookmarks-nav-btn');
const authModal = document.getElementById('auth-modal');
const bookmarksModal = document.getElementById('bookmarks-modal');
const closeBtn = document.querySelector('.close-btn');
const closeBtnBm = document.querySelector('.close-btn-bm');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const usernameInput = document.getElementById('username');
const bookmarksList = document.getElementById('bookmarks-list');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    checkLoginState();
    updateBookmarkButtons();
});

// --- Modal Logic ---
authNavBtn.addEventListener('click', (e) => {
    e.preventDefault();
    authModal.style.display = 'flex';
});

bookmarksNavBtn.addEventListener('click', (e) => {
    e.preventDefault();
    renderBookmarks();
    bookmarksModal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => authModal.style.display = 'none');
closeBtnBm.addEventListener('click', () => bookmarksModal.style.display = 'none');

window.addEventListener('click', (e) => {
    if (e.target === authModal) authModal.style.display = 'none';
    if (e.target === bookmarksModal) bookmarksModal.style.display = 'none';
});

// --- Authentication (Local Storage Mock) ---
loginBtn.addEventListener('click', () => {
    const user = usernameInput.value.trim();
    if (user) {
        localStorage.setItem('currentUser', user);
        // Initialize an empty bookmark array for new users
        if (!localStorage.getItem(`bookmarks_${user}`)) {
            localStorage.setItem(`bookmarks_${user}`, JSON.stringify([]));
        }
        checkLoginState();
        authModal.style.display = 'none';
    }
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    checkLoginState();
    authModal.style.display = 'none';
});

function checkLoginState() {
    currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        authNavBtn.textContent = `Hello, ${currentUser}`;
        bookmarksNavBtn.classList.remove('hidden');
        loginBtn.classList.add('hidden');
        logoutBtn.classList.remove('hidden');
        usernameInput.classList.add('hidden');
        document.getElementById('auth-title').textContent = 'Manage Account';
    } else {
        authNavBtn.textContent = 'Sign In / Register';
        bookmarksNavBtn.classList.add('hidden');
        loginBtn.classList.remove('hidden');
        logoutBtn.classList.add('hidden');
        usernameInput.classList.remove('hidden');
        usernameInput.value = '';
        document.getElementById('auth-title').textContent = 'Create Account or Sign In';
    }
    updateBookmarkButtons();
}

// --- Bookmarking Logic ---
function toggleBookmark(id, title, description) {
    if (!currentUser) {
        alert("Please sign in to save items to review later.");
        authModal.style.display = 'flex';
        return;
    }

    const storageKey = `bookmarks_${currentUser}`;
    let bookmarks = JSON.parse(localStorage.getItem(storageKey)) || [];
    
    const existingIndex = bookmarks.findIndex(bm => bm.id === id);

    if (existingIndex > -1) {
        // Remove bookmark
        bookmarks.splice(existingIndex, 1);
    } else {
        // Add bookmark
        bookmarks.push({ id, title, description });
    }

    localStorage.setItem(storageKey, JSON.stringify(bookmarks));
    updateBookmarkButtons();
    if (bookmarksModal.style.display === 'flex') {
        renderBookmarks(); // Refresh list if open
    }
}

function updateBookmarkButtons() {
    if (!currentUser) return;
    
    const storageKey = `bookmarks_${currentUser}`;
    let bookmarks = JSON.parse(localStorage.getItem(storageKey)) || [];
    const bookmarkedIds = bookmarks.map(bm => bm.id);

    document.querySelectorAll('.bookmark-btn').forEach(btn => {
        const cardId = btn.closest('.card').dataset.id;
        if (bookmarkedIds.includes(cardId)) {
            btn.textContent = 'Saved';
            btn.classList.add('bookmarked');
        } else {
            btn.textContent = 'Bookmark';
            btn.classList.remove('bookmarked');
        }
    });
}

function renderBookmarks() {
    if (!currentUser) return;
    
    const storageKey = `bookmarks_${currentUser}`;
    let bookmarks = JSON.parse(localStorage.getItem(storageKey)) || [];
    
    bookmarksList.innerHTML = '';
    
    if (bookmarks.length === 0) {
        bookmarksList.innerHTML = '<p>You haven\'t saved anything yet.</p>';
        return;
    }

    bookmarks.forEach(bm => {
        const div = document.createElement('div');
        div.className = 'bookmark-item';
        div.innerHTML = `
            <h4>${bm.title}</h4>
            <p>${bm.description}</p>
        `;
        bookmarksList.appendChild(div);
    });
}
