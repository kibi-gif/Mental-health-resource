/**
 * PATHFINDER - Core Application Logic
 * Integrated with Supabase for Database Persistence
 */

// 1. SUPABASE CONFIGURATION
// Replace these with your actual Supabase Project details
const supabaseUrl = 'https://kjvvwvhdynqhzvhlzgng.supabase.co'; 
const supabaseKey = 'sb_publishable_uCXf67mdMM1D1Vw655peXg_6dl4Wpn0';
const { createClient } = window['@supabase/supabase-js'];
const supabase = createClient(supabaseUrl, supabaseKey);

// 2. DATA STRUCTURES
const statsCards = [
    {
        id: 'anxiety-stats',
        category: 'Mental Health',
        title: 'Anxiety Disorders',
        stat: '301 Million',
        description: 'People globally living with an anxiety disorder as of 2019.',
        source: 'World Health Organization (WHO)'
    },
    {
        id: 'depression-stats',
        category: 'Mental Health',
        title: 'Depression',
        stat: '5.0%',
        description: 'Of adults suffer from depression globally.',
        source: 'WHO'
    },
    {
        id: 'youth-stats',
        category: 'Youth',
        title: 'Youth Mental Health',
        stat: '1 in 7',
        description: '10–19-year-olds experience mental health conditions.',
        source: 'WHO'
    }
];

const resourceCards = [
    {
        id: 'emergency-resource',
        category: 'Emergency',
        title: 'Emergency Services',
        phone: '911',
        description: 'Call if you or someone else is in immediate danger.',
        link: '#'
    },
    {
        id: '988-resource',
        category: 'Crisis Line',
        title: '988 Suicide & Crisis Lifeline',
        phone: '988',
        description: 'Available 24/7 for people in distress.',
        link: 'https://988lifeline.org'
    },
    {
        id: 'samhsa-resource',
        category: 'Treatment',
        title: 'SAMHSA Helpline',
        phone: '1-800-662-4357',
        description: 'Treatment referral and info service.',
        link: 'https://www.samhsa.gov'
    }
];

// 3. STATE MANAGEMENT
let currentUser = null;

// 4. INITIALIZATION
document.addEventListener('DOMContentLoaded', async () => {
    renderAllCards();
    setupEventListeners();
    await checkLoginState();
});

// 5. CORE FUNCTIONS
async function checkLoginState() {
    const { data: { user } } = await supabase.auth.getUser();
    currentUser = user;

    const authNavBtn = document.getElementById('auth-nav-btn');
    const bookmarksNavBtn = document.getElementById('bookmarks-nav-btn');
    const authSigninView = document.getElementById('auth-signin-view');
    const authManageView = document.getElementById('auth-manage-view');
    const subtitle = document.getElementById('alone-subtitle');

    if (currentUser) {
        authNavBtn.textContent = `Hello, ${currentUser.email.split('@')[0]}`;
        bookmarksNavBtn.classList.remove('hidden');
        authSigninView.classList.add('hidden');
        authManageView.classList.remove('hidden');
        document.getElementById('manage-greeting').textContent = `Signed in as ${currentUser.email}`;
        subtitle.innerHTML = `You are not alone, <strong>${currentUser.email.split('@')[0]}</strong>. Here is what the data says.`;
    } else {
        authNavBtn.textContent = 'Sign In / Register';
        bookmarksNavBtn.classList.add('hidden');
        authSigninView.classList.remove('hidden');
        authManageView.classList.add('hidden');
        subtitle.textContent = 'You are not alone. Here is what the data says.';
    }
    
    await updateBookmarkButtons();
}

async function handleAuthAction() {
    const email = document.getElementById('email-input').value.trim();
    const password = document.getElementById('password-input').value;

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    // Try Login
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        // If login fails, try Sign Up
        const { error: signUpError } = await supabase.auth.signUp({ email, password });
        if (signUpError) {
            alert("Error: " + signUpError.message);
        } else {
            alert("Account created! Please check your email for a confirmation link.");
        }
    } else {
        closeModal('auth-modal');
        await checkLoginState();
    }
}

async function toggleBookmark(cardId) {
    if (!currentUser) {
        openModal('auth-modal');
        return;
    }

    // Check if already bookmarked
    const { data: existing } = await supabase
        .from('bookmarks')
        .select('*')
        .eq('user_id', currentUser.id)
        .eq('card_id', cardId)
        .single();

    if (existing) {
        await supabase.from('bookmarks').delete().eq('id', existing.id);
    } else {
        await supabase.from('bookmarks').insert([{ user_id: currentUser.id, card_id: cardId }]);
    }
    
    await updateBookmarkButtons();
}

async function updateBookmarkButtons() {
    let savedIds = new Set();
    
    if (currentUser) {
        const { data } = await supabase
            .from('bookmarks')
            .select('card_id')
            .eq('user_id', currentUser.id);
        
        if (data) savedIds = new Set(data.map(b => b.card_id));
    }

    document.querySelectorAll('.bookmark-btn').forEach(btn => {
        const id = btn.getAttribute('data-id');
        if (savedIds.has(id)) {
            btn.classList.add('active');
            btn.innerHTML = '★ Saved';
        } else {
            btn.classList.remove('active');
            btn.innerHTML = '☆ Bookmark';
        }
    });
}

// 6. UI RENDERING
function renderAllCards() {
    const statsGrid = document.getElementById('stats-grid');
    const resourceGrid = document.getElementById('resource-grid');

    if (statsGrid) {
        statsGrid.innerHTML = statsCards.map(card => `
            <div class="card stat-card">
                <span class="category">${card.category}</span>
                <h3>${card.title}</h3>
                <div class="big-stat">${card.stat}</div>
                <p>${card.description}</p>
                <div class="card-footer">
                    <span class="source">${card.source}</span>
                    <button class="bookmark-btn" data-id="${card.id}" onclick="toggleBookmark('${card.id}')">☆ Bookmark</button>
                </div>
            </div>
        `).join('');
    }

    if (resourceGrid) {
        resourceGrid.innerHTML = resourceCards.map(card => `
            <div class="card resource-card">
                <span class="category">${card.category}</span>
                <h3>${card.title}</h3>
                <div class="phone-number">${card.phone}</div>
                <p>${card.description}</p>
                <div class="card-footer">
                    <a href="${card.link}" class="resource-link" target="_blank">Visit Site</a>
                    <button class="bookmark-btn" data-id="${card.id}" onclick="toggleBookmark('${card.id}')">☆ Bookmark</button>
                </div>
            </div>
        `).join('');
    }
}

// 7. EVENT LISTENERS & MODALS
function setupEventListeners() {
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');

    if (loginBtn) loginBtn.addEventListener('click', handleAuthAction);
    if (logoutBtn) logoutBtn.addEventListener('click', async () => {
        await supabase.auth.signOut();
        window.location.reload();
    });
}

// Modal Toggle Helpers
function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }
window.openModal = openModal;
window.closeModal = closeModal;
window.toggleBookmark = toggleBookmark;
