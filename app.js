// --- Supabase Initialization ---
// Replace these with your actual Supabase project credentials
const SUPABASE_URL = 'https://your-project-url.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// --- Card Data ---
const statsCards = [
    { id: 'stat-1', icon: '📊', title: 'Prevalence', description: '1 in 5 adults experience mental illness each year...', source: 'https://namimobile.org/resources/about-mental-illness/fact-sheets/' },
    { id: 'stat-2', icon: '📈', title: 'Treatment Efficacy', description: 'Between 70% and 90% of individuals have a significant reduction...', source: 'https://namimobile.org/resources/about-mental-illness/fact-sheets/' },
    { id: 'stat-3', icon: '🧠', title: 'Stress vs. Anxiety', description: 'Stress and anxiety are related but different...', source: 'https://www.apa.org/topics/stress/anxiety-difference' },
    { id: 'stat-4', icon: '💬', title: 'Common Misconceptions', description: 'Mental health conditions are not a sign of weakness...', source: 'https://www.psychiatry.org/news-room/apa-blogs/myths-and-facts-about-mental-health' },
    { id: 'stat-5', icon: '🔄', title: 'Recovery Is Possible', description: 'With the right support, many people recover...', source: 'https://www.amerihealthcaritasla.com/content/dam/amerihealth-caritas/acla/pdf/member/depression/recovering-from-depression.pdf.coredownload.inline.pdf' }
];

const resourceCards = [
    { id: 'res-1', icon: '📱', title: 'Text-Based Support', description: 'Crisis Text Line: Text HOME to 741741...', source: 'https://www.crisistextline.org' },
    { id: 'res-2', icon: '💻', title: 'Online Therapy Directories', description: 'Psychology Today offers a comprehensive directory...', source: 'https://www.psychologytoday.com/us/therapists' },
    { id: 'res-3', icon: '🌱', title: 'Daily Check-In Prompts', description: 'Short, simple prompts you can use in under 5 minutes...', source: 'https://www.elitetherapeuticservices.com/blog/daily-mental-health-check-in-prompts-you-can-use-in-under-5-minutes' },
    { id: 'res-4', icon: '🛠️', title: 'Coping Skills', description: 'Coping skills are essential tools for managing stress...', source: 'https://www.dallastherapeutic.com/blog/the-essential-role-of-coping-skills-in-mental-health' },
    { id: 'res-5', icon: '🧘', title: 'Grounding Techniques', description: '30 grounding techniques to help manage anxiety...', source: 'https://pacdc.org/2017/wp-content/uploads/2020/11/Grounding-Techniques_-30-Techniques-for-Anxiety-PTSD-and-More.pdf' },
    { id: 'res-6', icon: '📋', title: 'Self-Care Wellness Toolkit', description: 'A comprehensive toolkit covering self-care strategies...', source: 'https://www.humboldt.edu/sites/default/files/wellbeing/2025-11/selfcarewellnesstoolkitfordepressionandanxietyforwebsitewithreferences.pdf' },
    { id: 'res-7', icon: '🤝', title: 'Mental Health First Aid', description: 'Learn how to recognize and respond to mental health crises...', source: 'https://mentalhealthfirstaid.org/news/algee-how-mhfa-helps-you-respond-in-crisis-and-non-crisis-situations/' },
    { id: 'res-8', icon: '📚', title: 'HelpGuide', description: 'A trusted non-profit resource offering expert-reviewed guides...', source: 'https://www.helpguide.org/' }
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

    div.addEventListener('click', () => {
        window.open(card.source, '_blank', 'noopener,noreferrer');
    });

    return div;
}

function renderAllCards() {
    const statsGrid = document.getElementById('stats-grid');
    const resourcesGrid = document.getElementById('resources-grid');
    if (statsGrid) statsCards.forEach(card => statsGrid.appendChild(createCard(card)));
    if (resourcesGrid) resourceCards.forEach(card => resourcesGrid.appendChild(createCard(card)));
}

// --- DOM Elements ---
const authNavBtn = document.getElementById('auth-nav-btn');
const bookmarksNavBtn = document.getElementById('bookmarks-nav-btn');
const authModal = document.getElementById('auth-modal');
const bookmarksModal = document.getElementById('bookmarks-modal');
const closeBtn = document.querySelector('.close-btn');
const closeBtnBm = document.querySelector('.close-btn-bm');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const emailInput = document.getElementById('username'); // Use this for Email
const passwordInput = document.createElement('input'); // Note: You'll need a password field in your HTML

// --- Initialization ---
document.addEventListener('DOMContentLoaded', async () => {
    renderAllCards();
    
    // Check session on load
    const { data: { session } } = await supabase.auth.getSession();
    handleAuthStateChange(session?.user ?? null);

    // Listen for auth changes (login/logout)
    supabase.auth.onAuthStateChange((_event, session) => {
        handleAuthStateChange(session?.user ?? null);
    });
});

// --- Authentication Logic ---
loginBtn.addEventListener('click', async () => {
    const email = emailInput.value.trim();
    // For this rewrite, we assume you've added a password field or are using a simple password
    const password = "Password123!"; 

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    
    if (error) {
        // If user doesn't exist, try signing them up
        const { error: signUpError } = await supabase.auth.signUp({ email, password });
        if (signUpError) alert(signUpError.message);
    }
    authModal.style.display = 'none';
});

logoutBtn.addEventListener('click', async () => {
    await supabase.auth.signOut();
    authModal.style.display = 'none';
});

function handleAuthStateChange(user) {
    if (user) {
        authNavBtn.textContent = `Hello, ${user.email.split('@')[0]}`;
        bookmarksNavBtn.classList.remove('hidden');
        loginBtn.classList.add('hidden');
        logoutBtn.classList.remove('hidden');
        emailInput.classList.add('hidden');
        document.getElementById('auth-title').textContent = 'Manage Account';
    } else {
        authNavBtn.textContent = 'Sign In / Register';
        bookmarksNavBtn.classList.add('hidden');
        loginBtn.classList.remove('hidden');
        logoutBtn.classList.add('hidden');
        emailInput.classList.remove('hidden');
        document.getElementById('auth-title').textContent = 'Create Account or Sign In';
    }
    updateBookmarkButtons();
}

// --- Bookmarking Logic ---
async function toggleBookmark(id, title, description) {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        alert("Please sign in to save items.");
        authModal.style.display = 'flex';
        return;
    }

    const { data: existing } = await supabase
        .from('bookmarks')
        .select('id')
        .eq('user_id', user.id)
        .eq('card_id', id)
        .maybeSingle();

    if (existing) {
        await supabase.from('bookmarks').delete().eq('user_id', user.id).eq('card_id', id);
    } else {
        await supabase.from('bookmarks').insert([{ 
            user_id: user.id, 
            card_id: id, 
            title: title, 
            description: description 
        }]);
    }

    updateBookmarkButtons();
    if (bookmarksModal.style.display === 'flex') renderBookmarks();
}

async function updateBookmarkButtons() {
    const { data: { user } } = await supabase.auth.getUser();
    
    // Clear buttons if no user
    if (!user) {
        document.querySelectorAll('.bookmark-btn').forEach(btn => {
            btn.textContent = 'Bookmark';
            btn.classList.remove('bookmarked');
        });
        return;
    }

    const { data: bookmarks } = await supabase
        .from('bookmarks')
        .select('card_id')
        .eq('user_id', user.id);

    const bookmarkedIds = bookmarks ? bookmarks.map(bm => bm.card_id) : [];

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

async function renderBookmarks() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data: bookmarks } = await supabase
        .from('bookmarks')
        .select('*')
        .eq('user_id', user.id);

    const bookmarksList = document.getElementById('bookmarks-list');
    bookmarksList.innerHTML = '';

    if (!bookmarks || bookmarks.length === 0) {
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

// --- Modal Listeners (Stay the same) ---
authNavBtn.addEventListener('click', (e) => { e.preventDefault(); authModal.style.display = 'flex'; });
bookmarksNavBtn.addEventListener('click', (e) => { e.preventDefault(); renderBookmarks(); bookmarksModal.style.display = 'flex'; });
closeBtn.addEventListener('click', () => authModal.style.display = 'none');
closeBtnBm.addEventListener('click', () => bookmarksModal.style.display = 'none');
