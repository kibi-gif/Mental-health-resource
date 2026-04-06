// --- Card Data ---
// To add a new card, just add a new object to the relevant array below.
// Fields: id, icon, title, description, source (URL that opens on click)

const statsCards = [
    {
        id: 'stat-1',
        icon: '📊',
        title: 'Prevalence',
        description: '1 in 5 adults experience mental illness each year. It is as common as many physical ailments.',
        source: 'https://namimobile.org/resources/about-mental-illness/fact-sheets/'
    },
    {
        id: 'stat-2',
        icon: '📈',
        title: 'Treatment Efficacy',
        description: 'Between 70% and 90% of individuals have a significant reduction of symptoms with proper support and treatment.',
        source: 'https://namimobile.org/resources/about-mental-illness/fact-sheets/'
    },
    {
        id: 'stat-3',
        icon: '🧠',
        title: 'Stress vs. Anxiety',
        description: 'Stress and anxiety are related but different. Stress is typically triggered by an external cause, while anxiety persists even without an identifiable stressor.',
        source: 'https://www.apa.org/topics/stress/anxiety-difference'
    },
    {
        id: 'stat-4',
        icon: '💬',
        title: 'Common Misconceptions',
        description: 'Mental health conditions are not a sign of weakness or a personal failing. They are medical conditions influenced by genetics, environment, and life experience.',
        source: 'https://www.psychiatry.org/news-room/apa-blogs/myths-and-facts-about-mental-health'
    },
    {
        id: 'stat-5',
        icon: '🔄',
        title: 'Recovery Is Possible',
        description: 'With the right support, many people recover from depression and go on to live full, meaningful lives. Recovery looks different for everyone.',
        source: 'https://www.amerihealthcaritasla.com/content/dam/amerihealth-caritas/acla/pdf/member/depression/recovering-from-depression.pdf.coredownload.inline.pdf'
    }
];

const resourceCards = [
    {
        id: 'res-1',
        icon: '📱',
        title: 'Text-Based Support',
        description: 'Crisis Text Line: Text HOME to 741741 for free, 24/7 crisis counseling by trained volunteers.',
        source: 'https://www.crisistextline.org'
    },
    {
        id: 'res-2',
        icon: '💻',
        title: 'Online Therapy Directories',
        description: 'Psychology Today offers a comprehensive directory to find therapists offering various modalities, including gentle and self-guided approaches.',
        source: 'https://www.psychologytoday.com/us/therapists'
    },
    {
        id: 'res-3',
        icon: '🌱',
        title: 'Daily Check-In Prompts',
        description: 'Short, simple prompts you can use in under 5 minutes to check in with your mental and emotional state each day.',
        source: 'https://www.elitetherapeuticservices.com/blog/daily-mental-health-check-in-prompts-you-can-use-in-under-5-minutes'
    },
    {
        id: 'res-4',
        icon: '🛠️',
        title: 'Coping Skills',
        description: 'Coping skills are essential tools for managing stress and emotional pain. Learn why they matter and how to build a personal toolkit.',
        source: 'https://www.dallastherapeutic.com/blog/the-essential-role-of-coping-skills-in-mental-health'
    },
    {
        id: 'res-5',
        icon: '🧘',
        title: 'Grounding Techniques',
        description: '30 grounding techniques to help manage anxiety, PTSD, and overwhelming emotions — practical exercises you can use anywhere.',
        source: 'https://pacdc.org/2017/wp-content/uploads/2020/11/Grounding-Techniques_-30-Techniques-for-Anxiety-PTSD-and-More.pdf'
    },
    {
        id: 'res-6',
        icon: '📋',
        title: 'Self-Care Wellness Toolkit',
        description: 'A comprehensive toolkit covering self-care strategies for managing depression and anxiety, with references to evidence-based practices.',
        source: 'https://www.humboldt.edu/sites/default/files/wellbeing/2025-11/selfcarewellnesstoolkitfordepressionandanxietyforwebsitewithreferences.pdf'
    },
    {
        id: 'res-7',
        icon: '🤝',
        title: 'Mental Health First Aid',
        description: 'Learn how to recognize and respond to mental health crises and non-crisis situations using the ALGEE action plan.',
        source: 'https://mentalhealthfirstaid.org/news/algee-how-mhfa-helps-you-respond-in-crisis-and-non-crisis-situations/'
    },
    {
        id: 'res-8',
        icon: '📚',
        title: 'HelpGuide',
        description: 'A trusted non-profit resource offering expert-reviewed guides on mental health, relationships, and emotional well-being.',
        source: 'https://www.helpguide.org/'
    }
];

// --- Render Cards ---
function createCard(card) {
    const div = document.createElement('div');
    div.className = 'card';
    div.dataset.id = card.id;

    div.innerHTML = `
        <div class="card-visual">${card.icon}</div>
        <h3>${card.title}</h3>
        <p>${card.description}</p>
        <div class="card-actions">
            <a class="source-btn" href="${card.source}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">View Source ↗</a>
            <button class="bookmark-btn" onclick="event.stopPropagation(); toggleBookmark('${card.id}', '${card.title}', '${card.description.replace(/'/g, "\\'")}')">Bookmark</button>
        </div>
    `;

    // Clicking the card itself also opens the source
    div.addEventListener('click', () => {
        window.open(card.source, '_blank', 'noopener,noreferrer');
    });

    return div;
}

function renderAllCards() {
    const statsGrid = document.getElementById('stats-grid');
    const resourcesGrid = document.getElementById('resources-grid');

    statsCards.forEach(card => statsGrid.appendChild(createCard(card)));
    resourceCards.forEach(card => resourcesGrid.appendChild(createCard(card)));
}

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
    renderAllCards();
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
        bookmarks.splice(existingIndex, 1);
    } else {
        bookmarks.push({ id, title, description });
    }

    localStorage.setItem(storageKey, JSON.stringify(bookmarks));
    updateBookmarkButtons();
    if (bookmarksModal.style.display === 'flex') renderBookmarks();
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
