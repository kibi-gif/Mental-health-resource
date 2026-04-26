// ════════════════════════════════════════════
//  PATHFINDER  —  app.js  (upgraded)
// ════════════════════════════════════════════

// ── Card Data ─────────────────────────────
const statsCards = [
    {
        id: 'stat-1',
        icon: '📊',
        title: 'Prevalence',
        tags: ['facts', 'education'],
        description: '1 in 5 adults experience mental illness each year — as common as many physical conditions.',
        summary: 'Mental illness is far more common than most people realise. According to NAMI, approximately 1 in 5 U.S. adults — around 57.8 million people — lives with a mental health condition in any given year. These conditions range from anxiety and depression to bipolar disorder and schizophrenia. Because mental illness is so widespread, it is important to reduce stigma and treat it with the same seriousness as physical health.',
        source: 'https://namimobile.org/resources/about-mental-illness/fact-sheets/'
    },
    {
        id: 'stat-2',
        icon: '📈',
        title: 'Treatment Efficacy',
        tags: ['facts', 'education'],
        description: 'Between 70–90% of individuals see significant symptom reduction with proper support and treatment.',
        summary: 'The good news is that mental health treatment works. NAMI\'s fact sheets report that between 70% and 90% of people who seek appropriate care experience a meaningful reduction in symptoms and an improved quality of life. Effective treatment options include psychotherapy (such as CBT), medication, peer support, and lifestyle changes. The biggest barrier is often simply taking the first step to ask for help.',
        source: 'https://namimobile.org/resources/about-mental-illness/fact-sheets/'
    },
    {
        id: 'stat-3',
        icon: '🧠',
        title: 'Stress vs. Anxiety',
        tags: ['education'],
        description: 'Stress is triggered by an external cause. Anxiety can persist even without an identifiable stressor.',
        summary: 'The American Psychological Association explains that while stress and anxiety share many symptoms — racing thoughts, tension, irritability, and sleep problems — they have an important difference. Stress is a response to a specific external pressure and tends to ease when that pressure lifts. Anxiety, on the other hand, can persist or arise even in the absence of a clear trigger. Recognising this difference helps in choosing the right coping strategies.',
        source: 'https://www.apa.org/topics/stress/anxiety-difference'
    },
    {
        id: 'stat-4',
        icon: '💬',
        title: 'Common Misconceptions',
        tags: ['education'],
        description: 'Mental health conditions are not a sign of weakness. They are medical conditions influenced by genetics, environment, and life experience.',
        summary: 'The American Psychiatric Association addresses widespread myths that hold people back from seeking care. Mental illness is not caused by personal weakness, poor parenting, or a lack of willpower — it arises from a complex mix of genetics, brain chemistry, trauma, and environment. Common misconceptions include "just think positive," "it\'s not a real illness," or "people with mental illness are dangerous." Replacing these myths with accurate information helps reduce stigma.',
        source: 'https://www.psychiatry.org/news-room/apa-blogs/myths-and-facts-about-mental-health'
    },
    {
        id: 'stat-5',
        icon: '🔄',
        title: 'Recovery Is Possible',
        tags: ['facts', 'education'],
        description: 'With the right support, many people recover from depression and go on to live full, meaningful lives.',
        summary: 'This resource from AmeriHealth Caritas outlines what a realistic path to recovery from depression looks like. Recovery is not always linear — it involves working with healthcare providers, building a support network, developing healthy routines, and practising self-compassion. For many people, recovery does not mean the complete absence of symptoms, but rather managing them well enough to engage fully in life. Hope and steady progress are achievable.',
        source: 'https://www.amerihealthcaritasla.com/content/dam/amerihealth-caritas/acla/pdf/member/depression/recovering-from-depression.pdf.coredownload.inline.pdf'
    }
];

const resourceCards = [
    {
        id: 'res-1',
        icon: '📱',
        title: 'Crisis Text Line',
        tags: ['crisis'],
        description: 'Text HOME to 741741 for free, 24/7 crisis counseling by trained volunteers. No call needed.',
        summary: 'Crisis Text Line offers free, confidential mental health support entirely via text message — available 24 hours a day, every day of the year. Texting HOME to 741741 connects you with a trained Crisis Counselor who can help with anxiety, depression, relationship struggles, grief, or thoughts of self-harm. Text-based support can feel more accessible than calling a hotline, especially in situations where speaking out loud is not possible or comfortable. No app download is required.',
        source: 'https://www.crisistextline.org'
    },
    {
        id: 'res-2',
        icon: '💻',
        title: 'Therapist Directory',
        tags: ['therapy'],
        description: 'Psychology Today\'s directory helps you find therapists by location, specialty, insurance, and more.',
        summary: 'Psychology Today\'s therapist finder is one of the most comprehensive directories available, letting you filter by location, insurance accepted, specialty (anxiety, trauma, grief, etc.), and therapy type. It covers thousands of licensed professionals offering both in-person and teletherapy options. Whether you are looking for a trauma-informed therapist, a CBT specialist, or someone experienced with LGBTQ+ concerns, you can browse and reach out at your own pace.',
        source: 'https://www.psychologytoday.com/us/therapists'
    },
    {
        id: 'res-3',
        icon: '🌱',
        title: 'Daily Check-In Prompts',
        tags: ['self-help'],
        description: 'Short, simple prompts you can use in under 5 minutes to check in with your emotional state each day.',
        summary: 'Elite Therapeutic Services offers a set of therapist-designed daily check-in prompts that take just five minutes. These prompts encourage you to notice your emotional state, identify any stressors, and acknowledge what you need — before small tensions grow into larger problems. Regular check-ins increase emotional self-awareness, help you spot early signs of burnout or anxiety, and complement any therapy you may already be doing. They are intentionally simple enough to use even on the hardest days.',
        source: 'https://www.elitetherapeuticservices.com/blog/daily-mental-health-check-in-prompts-you-can-use-in-under-5-minutes'
    },
    {
        id: 'res-4',
        icon: '🛠️',
        title: 'Coping Skills Toolkit',
        tags: ['skills', 'self-help'],
        description: 'Learn why coping skills matter and how to build a personalised toolkit that works for you.',
        summary: 'Dallas Therapeutic Services explains that coping skills are not mere distractions — they are intentional, practised strategies for managing difficult emotions and situations. There are two broad types: problem-focused coping (tackling the source of stress directly) and emotion-focused coping (regulating your emotional response when the situation cannot be changed). Building a personal toolkit takes time, but the skills become more automatic with practice.',
        source: 'https://www.dallastherapeutic.com/blog/the-essential-role-of-coping-skills-in-mental-health'
    },
    {
        id: 'res-5',
        icon: '🧘',
        title: 'Grounding Techniques',
        tags: ['skills', 'self-help', 'crisis'],
        description: '30 grounding techniques to manage anxiety, PTSD, and overwhelming emotions — usable anywhere.',
        summary: 'This guide from PACDC provides 30 grounding techniques — sensory and cognitive exercises designed to anchor you to the present moment and interrupt overwhelming thoughts or feelings. Grounding is especially helpful for anxiety, panic attacks, flashbacks, and dissociation. Techniques include the well-known "5-4-3-2-1" method, breathing exercises, physical movement, and cognitive reframing. None of the techniques require any equipment — they can be used quietly and discreetly wherever you are.',
        source: 'https://pacdc.org/2017/wp-content/uploads/2020/11/Grounding-Techniques_-30-Techniques-for-Anxiety-PTSD-and-More.pdf'
    },
    {
        id: 'res-6',
        icon: '📋',
        title: 'Self-Care Wellness Toolkit',
        tags: ['self-help', 'education'],
        description: 'An evidence-based toolkit covering self-care strategies for managing depression and anxiety.',
        summary: 'This toolkit from Humboldt State University\'s wellness centre provides a broad, evidence-based overview of self-care strategies for depression and anxiety. It covers physical wellness (sleep hygiene, exercise, nutrition), emotional regulation techniques, the role of social connection, and guidance on when and how to seek professional support. Each section cites research to back up its recommendations.',
        source: 'https://wellbeing.humboldt.edu/sites/default/files/health/self_care_wellness_toolkit_for_depression_and_anxiety_for_website_with_references.pdf'
    },
    {
        id: 'res-7',
        icon: '🤝',
        title: 'Mental Health First Aid',
        tags: ['skills', 'education'],
        description: 'Learn to recognise and respond to mental health crises using the ALGEE action plan.',
        summary: 'Mental Health First Aid teaches a five-step action plan called ALGEE: Assess for risk of suicide or harm; Listen non-judgmentally; Give reassurance and information; Encourage appropriate professional help; Encourage self-help and other support strategies. The programme is designed for everyday people — not just healthcare professionals — to help them respond when someone they know is experiencing a mental health or substance use challenge. Training is available in-person and online.',
        source: 'https://mentalhealthfirstaid.org/news/algee-how-mhfa-helps-you-respond-in-crisis-and-non-crisis-situations/'
    },
    {
        id: 'res-8',
        icon: '📚',
        title: 'HelpGuide',
        tags: ['education', 'self-help'],
        description: 'A trusted non-profit offering expert-reviewed guides on mental health, relationships, and well-being.',
        summary: 'HelpGuide is a nonprofit that provides free, expert-reviewed articles on a wide range of mental health topics — from anxiety, depression, and trauma to sleep, relationships, and emotional resilience. All content is developed in partnership with Harvard Health Publishing and reviewed by licensed clinicians. Unlike many health websites, HelpGuide is entirely ad-free and designed to empower readers to make informed, confident decisions about their care.',
        source: 'https://www.helpguide.org/'
    }
];

const allCards = [...statsCards, ...resourceCards];
function findCard(id) { return allCards.find(c => c.id === id); }

// ── Mood Config ────────────────────────────
const moodConfig = {
    overwhelmed: {
        msg: "It makes sense to feel overwhelmed right now. Let's start small — here are some tools that can help you take a breath and regain your footing.",
        cards: ['res-5', 'res-4', 'res-3']
    },
    anxious: {
        msg: "Anxiety is incredibly common and very treatable. These resources are a good place to start — from understanding what you're feeling to practical tools for relief.",
        cards: ['stat-3', 'res-5', 'res-4']
    },
    low: {
        msg: "Feeling low is hard, and it takes courage to acknowledge it. You're in the right place. These resources speak directly to where you are.",
        cards: ['stat-5', 'res-6', 'res-2']
    },
    lost: {
        msg: "Not knowing what you need is okay — that's exactly where Pathfinder can help. Start here and follow what resonates.",
        cards: ['stat-4', 'res-8', 'res-3']
    },
    crisis: {
        msg: "If you're in crisis, please reach out right now. You deserve immediate support — and it's available 24/7.",
        cards: ['res-1', 'res-5', 'res-7']
    },
    learning: {
        msg: "Knowledge is a powerful first step. Here are some of the clearest, most reliable resources to build your understanding.",
        cards: ['stat-1', 'stat-2', 'res-8']
    },
    supporting: {
        msg: "Supporting someone you care about is meaningful and sometimes hard. These resources will help you help them — without burning out yourself.",
        cards: ['res-7', 'stat-4', 'res-8']
    },
    okay: {
        msg: "That's wonderful. Prevention and self-awareness are just as important as crisis support. Here are some tools to help you stay well.",
        cards: ['res-3', 'res-6', 'res-4']
    }
};

// ── State ──────────────────────────────────
let currentUser     = null;
let currentCardData = null;
let activeFilter    = 'all';
let searchQuery     = '';

// ── DOM Refs ───────────────────────────────
const authNavBtn        = document.getElementById('auth-nav-btn');
const authNavBtnMobile  = document.getElementById('auth-nav-btn-mobile');
const bookmarksNavBtn   = document.getElementById('bookmarks-nav-btn');
const bmCountBadge      = document.getElementById('bm-count');

const authModal         = document.getElementById('auth-modal');
const authCloseBtn      = document.getElementById('auth-close-btn');
const authSigninView    = document.getElementById('auth-signin-view');
const authManageView    = document.getElementById('auth-manage-view');
const usernameInput     = document.getElementById('username');
const emailInput        = document.getElementById('email');
const passwordInput     = document.getElementById('password');
const emailConsentChk   = document.getElementById('email-consent');
const authError         = document.getElementById('auth-error');
const loginBtn          = document.getElementById('login-btn');
const manageGreeting    = document.getElementById('manage-greeting');
const manageConsentChk  = document.getElementById('manage-email-consent');
const savePrefsBtn      = document.getElementById('save-prefs-btn');
const logoutBtn         = document.getElementById('logout-btn');

const bookmarksModal    = document.getElementById('bookmarks-modal');
const bmCloseBtn        = document.getElementById('bm-close-btn');
const bookmarksList     = document.getElementById('bookmarks-list');

const cardModal         = document.getElementById('card-modal');
const cardCloseBtn      = document.getElementById('card-close-btn');
const cmIcon            = document.getElementById('cm-icon');
const cmTitle           = document.getElementById('cm-title');
const cmDescription     = document.getElementById('cm-description');
const cmSummary         = document.getElementById('cm-summary');
const cmSourceBtn       = document.getElementById('cm-source-btn');
const cmBookmarkBtn     = document.getElementById('cm-bookmark-btn');
const cmEmailBtn        = document.getElementById('cm-email-btn');
const cmEmailStatus     = document.getElementById('cm-email-status');
const cmTags            = document.getElementById('cm-tags');

const toast             = document.getElementById('toast');
const toastMsg          = document.getElementById('toast-msg');

const moodGrid          = document.getElementById('mood-grid');
const moodResult        = document.getElementById('mood-result');
const moodResultMsg     = document.getElementById('mood-result-msg');
const moodResultCards   = document.getElementById('mood-result-cards');
const moodReset         = document.getElementById('mood-reset');

const filterBtns        = document.querySelectorAll('.filter-btn');
const searchInput       = document.getElementById('resource-search');
const searchClear       = document.getElementById('search-clear');
const noResults         = document.getElementById('no-results');
const clearFiltersBtn   = document.getElementById('clear-filters');

// ══════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    renderAllCards();
    checkLoginState();
    initCursor();
    initHeader();
    initScrollReveal();
    initHamburger();
    initMood();
    initFilters();
    initSearch();
});

// ══════════════════════════════════════════
//  CUSTOM CURSOR
// ══════════════════════════════════════════
function initCursor() {
    const dot  = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mx = -100, my = -100;
    let rx = -100, ry = -100;

    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        dot.style.left  = mx + 'px';
        dot.style.top   = my + 'px';
    });

    // Ring lags behind for fluid feel
    (function animateRing() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = rx + 'px';
        ring.style.top  = ry + 'px';
        requestAnimationFrame(animateRing);
    })();

    // Hover effect
    document.querySelectorAll('a, button, .card, .mood-btn, .bookmark-item, .mood-mini-card').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
}

// ══════════════════════════════════════════
//  HEADER SCROLL STATE
// ══════════════════════════════════════════
function initHeader() {
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
}

// ══════════════════════════════════════════
//  HAMBURGER
// ══════════════════════════════════════════
function initHamburger() {
    const btn = document.getElementById('hamburger');
    const nav = document.getElementById('mobile-nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => {
        nav.classList.toggle('open');
        nav.classList.toggle('hidden', !nav.classList.contains('open'));
    });
    // Close on mobile nav link click
    nav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            nav.classList.remove('open');
            nav.classList.add('hidden');
        });
    });
}

// ══════════════════════════════════════════
//  SCROLL REVEAL
// ══════════════════════════════════════════
function initScrollReveal() {
    const els = document.querySelectorAll('.card, .mood-section, .content-section, .section-header, .filter-bar, .search-wrap');
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    els.forEach((el, i) => {
        el.classList.add('scroll-reveal');
        el.style.transitionDelay = `${(i % 5) * 0.06}s`;
        io.observe(el);
    });
}

// ══════════════════════════════════════════
//  MOOD CHECK-IN
// ══════════════════════════════════════════
function initMood() {
    moodGrid.querySelectorAll('.mood-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const mood = btn.dataset.mood;
            selectMood(mood, btn);
        });
    });
    moodReset.addEventListener('click', resetMood);
}

function selectMood(mood, btn) {
    // Visual state
    moodGrid.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cfg = moodConfig[mood];
    if (!cfg) return;

    moodResultMsg.textContent = cfg.msg;
    moodResultCards.innerHTML = '';

    cfg.cards.forEach(id => {
        const card = findCard(id);
        if (!card) return;
        const div = document.createElement('div');
        div.className = 'mood-mini-card';
        div.innerHTML = `
            <div class="mc-icon">${card.icon}</div>
            <h4>${card.title}</h4>
            <p>${card.description.substring(0, 80)}…</p>
        `;
        div.addEventListener('click', () => openCardModal(card));
        moodResultCards.appendChild(div);
    });

    moodGrid.classList.add('hidden');
    moodResult.classList.remove('hidden');
}

function resetMood() {
    moodResult.classList.add('hidden');
    moodGrid.classList.remove('hidden');
    moodGrid.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
}

// ══════════════════════════════════════════
//  FILTERS
// ══════════════════════════════════════════
function initFilters() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            applyFilters();
        });
    });
    clearFiltersBtn && clearFiltersBtn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        document.querySelector('[data-filter="all"]').classList.add('active');
        activeFilter = 'all';
        searchInput.value = '';
        searchQuery = '';
        searchClear.classList.add('hidden');
        applyFilters();
    });
}

function applyFilters() {
    const grid = document.getElementById('resources-grid');
    const cards = grid.querySelectorAll('.card');
    let visible = 0;

    cards.forEach(cardEl => {
        const id   = cardEl.dataset.id;
        const card = findCard(id);
        if (!card) return;

        const matchesFilter = activeFilter === 'all' || card.tags.includes(activeFilter);
        const matchesSearch = !searchQuery ||
            card.title.toLowerCase().includes(searchQuery) ||
            card.description.toLowerCase().includes(searchQuery) ||
            card.tags.some(t => t.includes(searchQuery));

        if (matchesFilter && matchesSearch) {
            cardEl.classList.remove('card-filtered-out');
            visible++;
        } else {
            cardEl.classList.add('card-filtered-out');
        }
    });

    noResults.classList.toggle('hidden', visible > 0);
}

// ══════════════════════════════════════════
//  SEARCH
// ══════════════════════════════════════════
function initSearch() {
    searchInput.addEventListener('input', () => {
        searchQuery = searchInput.value.trim().toLowerCase();
        searchClear.classList.toggle('hidden', !searchQuery);
        applyFilters();
    });
    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        searchClear.classList.add('hidden');
        applyFilters();
        searchInput.focus();
    });
}

// ══════════════════════════════════════════
//  CARD RENDERING
// ══════════════════════════════════════════
function createTagEl(tag) {
    const span = document.createElement('span');
    span.className = `card-tag tag-${tag}`;
    span.textContent = tag === 'self-help' ? 'Self-Help' : tag.charAt(0).toUpperCase() + tag.slice(1);
    return span;
}

function createCard(card) {
    const div = document.createElement('div');
    div.className = 'card';
    div.dataset.id = card.id;
    div.setAttribute('role', 'button');
    div.setAttribute('tabindex', '0');

    const tagsHtml = card.tags.map(t =>
        `<span class="card-tag tag-${t}">${t === 'self-help' ? 'Self-Help' : t.charAt(0).toUpperCase() + t.slice(1)}</span>`
    ).join('');

    div.innerHTML = `
        <div class="card-tags">${tagsHtml}</div>
        <div class="card-visual">${card.icon}</div>
        <h3>${card.title}</h3>
        <p>${card.description}</p>
        <div class="card-footer">
            <span class="card-expand-hint">Learn more ↗</span>
            <button class="bookmark-btn" aria-label="Bookmark ${card.title}">Save</button>
        </div>
    `;

    div.addEventListener('click', (e) => {
        if (e.target.classList.contains('bookmark-btn')) return;
        openCardModal(card);
    });
    div.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') openCardModal(card);
    });
    div.querySelector('.bookmark-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        handleBookmarkToggle(card.id, card.title, card.description);
    });

    return div;
}

function renderAllCards() {
    const statsGrid     = document.getElementById('stats-grid');
    const resourcesGrid = document.getElementById('resources-grid');
    statsCards.forEach(c => statsGrid.appendChild(createCard(c)));
    resourceCards.forEach(c => resourcesGrid.appendChild(createCard(c)));
    updateBookmarkButtons();
    updateBmCount();
    initScrollReveal();
}

// ══════════════════════════════════════════
//  CARD DETAIL MODAL
// ══════════════════════════════════════════
function openCardModal(card) {
    currentCardData = card;

    cmIcon.textContent        = card.icon;
    cmTitle.textContent       = card.title;
    cmDescription.textContent = card.description;
    cmSummary.textContent     = card.summary;
    cmSourceBtn.href          = card.source;

    // Tags
    cmTags.innerHTML = '';
    card.tags.forEach(t => cmTags.appendChild(createTagEl(t)));

    refreshCardModalBookmarkBtn();
    refreshCardModalEmailBtn();

    cmEmailStatus.textContent = '';
    cmEmailStatus.className = 'cm-email-status hidden';

    cardModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeCardModal() {
    cardModal.style.display = 'none';
    document.body.style.overflow = '';
    currentCardData = null;
}

function refreshCardModalBookmarkBtn() {
    if (!currentCardData) return;
    const saved = isBookmarked(currentCardData.id);
    cmBookmarkBtn.textContent = saved ? '✓ Saved' : '⬡ Save';
    cmBookmarkBtn.classList.toggle('bookmarked', saved);
}

function refreshCardModalEmailBtn() {
    if (!currentCardData) return;
    const userData = currentUser ? getUserData(currentUser) : null;
    cmEmailBtn.classList.toggle('hidden', !(userData && userData.emailConsent));
}

cardCloseBtn.addEventListener('click', closeCardModal);
cardModal.addEventListener('click', (e) => {
    if (e.target === cardModal || e.target.classList.contains('modal-backdrop')) closeCardModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeCardModal(); closeAuthModal(); closeBookmarksModal(); }
});

cmBookmarkBtn.addEventListener('click', () => {
    if (!currentCardData) return;
    handleBookmarkToggle(currentCardData.id, currentCardData.title, currentCardData.description);
    refreshCardModalBookmarkBtn();
});
cmEmailBtn.addEventListener('click', () => {
    if (!currentCardData || !currentUser) return;
    const userData = getUserData(currentUser);
    if (!userData || !userData.emailConsent) return;
    sendCardByEmail(currentUser, userData.email, currentCardData);
});

// ══════════════════════════════════════════
//  AUTH MODAL
// ══════════════════════════════════════════
function openAuthModal() {
    clearAuthError();
    authModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function closeAuthModal() {
    authModal.style.display = 'none';
    document.body.style.overflow = '';
}

authNavBtn.addEventListener('click', (e) => { e.preventDefault(); openAuthModal(); });
authNavBtnMobile && authNavBtnMobile.addEventListener('click', (e) => { e.preventDefault(); openAuthModal(); });
authCloseBtn.addEventListener('click', closeAuthModal);
authModal.addEventListener('click', (e) => {
    if (e.target === authModal || e.target.classList.contains('modal-backdrop')) closeAuthModal();
});

loginBtn.addEventListener('click', () => {
    clearAuthError();
    const user    = usernameInput.value.trim();
    const email   = emailInput.value.trim();
    const pass    = passwordInput.value;
    const consent = emailConsentChk.checked;

    if (!user || !email || !pass) { showAuthError('Please fill in all three fields.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showAuthError('Please enter a valid email address.'); return; }
    if (pass.length < 6) { showAuthError('Password must be at least 6 characters.'); return; }

    const existing = getUserData(user);
    if (existing) {
        if (existing.password !== pass) { showAuthError('Incorrect password for that username.'); return; }
    } else {
        saveUserData(user, { email, password: pass, emailConsent: consent });
        localStorage.setItem(`bookmarks_${user}`, JSON.stringify([]));
    }

    localStorage.setItem('currentUser', user);
    checkLoginState();
    closeAuthModal();
    showToast(`Welcome back, ${user} ✦`);
});

savePrefsBtn.addEventListener('click', () => {
    if (!currentUser) return;
    const userData = getUserData(currentUser);
    userData.emailConsent = manageConsentChk.checked;
    saveUserData(currentUser, userData);
    showToast('Preference saved!');
    refreshCardModalEmailBtn();
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    checkLoginState();
    closeAuthModal();
    showToast('Signed out. See you soon.');
});

// ══════════════════════════════════════════
//  LOGIN STATE
// ══════════════════════════════════════════
function checkLoginState() {
    currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
        authNavBtn.textContent       = `✦ ${currentUser}`;
        if (authNavBtnMobile) authNavBtnMobile.textContent = `✦ ${currentUser}`;
        bookmarksNavBtn.classList.remove('hidden');

        authSigninView.classList.add('hidden');
        authManageView.classList.remove('hidden');

        const userData = getUserData(currentUser);
        manageGreeting.textContent  = `${currentUser} · ${userData ? userData.email : ''}`;
        manageConsentChk.checked    = userData ? !!userData.emailConsent : false;

        document.getElementById('alone-subtitle').innerHTML =
            `You are not alone, <strong>${currentUser}</strong>. Here is what the research tells us.`;
    } else {
        authNavBtn.textContent = 'Sign In';
        if (authNavBtnMobile) authNavBtnMobile.textContent = 'Sign In';
        bookmarksNavBtn.classList.add('hidden');

        authSigninView.classList.remove('hidden');
        authManageView.classList.add('hidden');
        usernameInput.value       = '';
        emailInput.value          = '';
        passwordInput.value       = '';
        emailConsentChk.checked   = false;

        document.getElementById('alone-subtitle').textContent =
            'You are not alone. Here is what the research tells us.';
    }

    updateBookmarkButtons();
    updateBmCount();
    refreshCardModalBookmarkBtn();
    refreshCardModalEmailBtn();
}

// ══════════════════════════════════════════
//  BOOKMARKS MODAL
// ══════════════════════════════════════════
function openBookmarksModal() {
    renderBookmarks();
    bookmarksModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function closeBookmarksModal() {
    bookmarksModal.style.display = 'none';
    document.body.style.overflow = '';
}

bookmarksNavBtn.addEventListener('click', (e) => { e.preventDefault(); openBookmarksModal(); });
bmCloseBtn.addEventListener('click', closeBookmarksModal);
bookmarksModal.addEventListener('click', (e) => {
    if (e.target === bookmarksModal || e.target.classList.contains('modal-backdrop')) closeBookmarksModal();
});

function renderBookmarks() {
    if (!currentUser) return;
    const bookmarks = getBookmarks();
    bookmarksList.innerHTML = '';

    if (bookmarks.length === 0) {
        bookmarksList.innerHTML = '<p class="bm-empty">You haven\'t saved anything yet. Browse the cards below and hit Save on anything useful.</p>';
        return;
    }

    bookmarks.forEach(bm => {
        const card = findCard(bm.id);
        const div = document.createElement('div');
        div.className = 'bookmark-item';
        div.setAttribute('role', 'button');
        div.setAttribute('tabindex', '0');

        div.innerHTML = `
            <div class="bm-row">
                <span class="bm-icon">${card ? card.icon : '📌'}</span>
                <div class="bm-text">
                    <h4>${bm.title}</h4>
                    <p>${bm.description.substring(0, 90)}…</p>
                </div>
                <span class="bm-arrow">›</span>
            </div>
        `;

        const clickHandler = () => {
            if (card) {
                closeBookmarksModal();
                setTimeout(() => openCardModal(card), 80);
            }
        };
        div.addEventListener('click', clickHandler);
        div.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') clickHandler(); });
        bookmarksList.appendChild(div);
    });
}

// ══════════════════════════════════════════
//  BOOKMARK LOGIC
// ══════════════════════════════════════════
function handleBookmarkToggle(id, title, description) {
    if (!currentUser) {
        closeCardModal();
        openAuthModal();
        return;
    }
    const bookmarks = getBookmarks();
    const idx = bookmarks.findIndex(bm => bm.id === id);
    if (idx > -1) {
        bookmarks.splice(idx, 1);
        showToast('Removed from saved items');
    } else {
        bookmarks.push({ id, title, description });
        showToast('Saved! Find it in My Saved Items ✦');
    }
    saveBookmarks(bookmarks);
    updateBookmarkButtons();
    updateBmCount();
    if (bookmarksModal.style.display === 'flex') renderBookmarks();
}

function isBookmarked(id) {
    if (!currentUser) return false;
    return getBookmarks().some(bm => bm.id === id);
}

function updateBookmarkButtons() {
    document.querySelectorAll('.card').forEach(cardEl => {
        const id  = cardEl.dataset.id;
        const btn = cardEl.querySelector('.bookmark-btn');
        if (!btn) return;
        if (!currentUser) {
            btn.textContent = 'Sign in to save';
            btn.classList.remove('bookmarked');
        } else {
            const saved = isBookmarked(id);
            btn.textContent = saved ? '✓ Saved' : 'Save';
            btn.classList.toggle('bookmarked', saved);
        }
    });
}

function updateBmCount() {
    if (!currentUser) { bmCountBadge && bmCountBadge.classList.add('hidden'); return; }
    const count = getBookmarks().length;
    if (bmCountBadge) {
        bmCountBadge.textContent = count;
        bmCountBadge.classList.toggle('hidden', count === 0);
    }
}

// ══════════════════════════════════════════
//  EMAIL
// ══════════════════════════════════════════
function sendCardByEmail(username, userEmail, card) {
    const subject = encodeURIComponent(`Pathfinder Resource: ${card.title}`);
    const body = encodeURIComponent(
`Hi ${username},

Here is a resource you saved from Pathfinder:

━━━━━━━━━━━━━━━━━━━━━━
${card.icon}  ${card.title}
━━━━━━━━━━━━━━━━━━━━━━

${card.description}

SUMMARY
──────────────────────
${card.summary}

FULL SOURCE
──────────────────────
${card.source}

━━━━━━━━━━━━━━━━━━━━━━
Sent via Pathfinder Mental Health Resources
`
    );

    const a = document.createElement('a');
    a.href = `mailto:${userEmail}?subject=${subject}&body=${body}`;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    cmEmailStatus.textContent = '✓ Your email client has opened with this resource\'s details.';
    cmEmailStatus.className = 'cm-email-status success';
}

// ══════════════════════════════════════════
//  TOAST
// ══════════════════════════════════════════
let toastTimer = null;
function showToast(msg) {
    toastMsg.textContent = msg;
    toast.classList.remove('hidden');
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 400);
    }, 2600);
}

// ══════════════════════════════════════════
//  LOCAL STORAGE
// ══════════════════════════════════════════
function getUserData(u)      { return JSON.parse(localStorage.getItem(`user_${u}`)) || null; }
function saveUserData(u, d)  { localStorage.setItem(`user_${u}`, JSON.stringify(d)); }
function getBookmarks()      { return JSON.parse(localStorage.getItem(`bookmarks_${currentUser}`)) || []; }
function saveBookmarks(bms)  { localStorage.setItem(`bookmarks_${currentUser}`, JSON.stringify(bms)); }

// ══════════════════════════════════════════
//  AUTH ERROR
// ══════════════════════════════════════════
function showAuthError(msg) {
    authError.textContent = msg;
    authError.classList.remove('hidden');
}
function clearAuthError() {
    authError.textContent = '';
    authError.classList.add('hidden');
}
