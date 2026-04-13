// ════════════════════════════════════════════
//  CARD DATA
//  Add summary field to each card for the
//  expanded detail modal.
// ════════════════════════════════════════════
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);
const statsCards = [
    {
        id: 'stat-1',
        icon: '📊',
        title: 'Prevalence',
        description: '1 in 5 adults experience mental illness each year. It is as common as many physical ailments.',
        summary: 'Mental illness is far more common than most people realise. According to NAMI, approximately 1 in 5 U.S. adults — around 57.8 million people — lives with a mental health condition in any given year. These conditions range from anxiety and depression to bipolar disorder and schizophrenia. Because mental illness is so widespread, it is important to reduce stigma and treat it with the same seriousness as physical health.',
        source: 'https://namimobile.org/resources/about-mental-illness/fact-sheets/'
    },
    {
        id: 'stat-2',
        icon: '📈',
        title: 'Treatment Efficacy',
        description: 'Between 70–90% of individuals see significant symptom reduction with proper support and treatment.',
        summary: 'The good news is that mental health treatment works. NAMI\'s fact sheets report that between 70% and 90% of people who seek appropriate care experience a meaningful reduction in symptoms and an improved quality of life. Effective treatment options include psychotherapy (such as CBT), medication, peer support, and lifestyle changes. The biggest barrier is often simply taking the first step to ask for help — which is always worth it.',
        source: 'https://namimobile.org/resources/about-mental-illness/fact-sheets/'
    },
    {
        id: 'stat-3',
        icon: '🧠',
        title: 'Stress vs. Anxiety',
        description: 'Stress is typically triggered by an external cause, while anxiety persists even without an identifiable stressor.',
        summary: 'The American Psychological Association explains that while stress and anxiety share many symptoms — racing thoughts, tension, irritability, and sleep problems — they have an important difference. Stress is a response to a specific external pressure (a deadline, a conflict, a life change) and tends to ease when that pressure lifts. Anxiety, on the other hand, can persist or arise even in the absence of a clear trigger. Recognising this difference helps in choosing the right coping strategies or knowing when to seek professional support.',
        source: 'https://www.apa.org/topics/stress/anxiety-difference'
    },
    {
        id: 'stat-4',
        icon: '💬',
        title: 'Common Misconceptions',
        description: 'Mental health conditions are not a sign of weakness. They are medical conditions influenced by genetics, environment, and life experience.',
        summary: 'The American Psychiatric Association addresses widespread myths that hold people back from seeking care. Mental illness is not caused by personal weakness, poor parenting, or a lack of willpower — it arises from a complex mix of genetics, brain chemistry, trauma, and environment. Common misconceptions include "just think positive," "it\'s not a real illness," or "people with mental illness are dangerous." Replacing these myths with accurate information helps reduce stigma and encourages more people to reach out for support.',
        source: 'https://www.psychiatry.org/news-room/apa-blogs/myths-and-facts-about-mental-health'
    },
    {
        id: 'stat-5',
        icon: '🔄',
        title: 'Recovery Is Possible',
        description: 'With the right support, many people recover from depression and go on to live full, meaningful lives.',
        summary: 'This resource from AmeriHealth Caritas outlines what a realistic path to recovery from depression looks like. Recovery is not always linear — it involves working with healthcare providers, building a support network, developing healthy routines, and practising self-compassion. For many people, recovery does not mean the complete absence of symptoms, but rather managing them well enough to engage fully in life. Hope and steady progress are achievable with consistent, personalised care.',
        source: 'https://www.amerihealthcaritasla.com/content/dam/amerihealth-caritas/acla/pdf/member/depression/recovering-from-depression.pdf.coredownload.inline.pdf'
    }
];

const resourceCards = [
    {
        id: 'res-1',
        icon: '📱',
        title: 'Text-Based Support',
        description: 'Crisis Text Line: Text HOME to 741741 for free, 24/7 crisis counseling by trained volunteers.',
        summary: 'Crisis Text Line offers free, confidential mental health support entirely via text message — available 24 hours a day, every day of the year. Texting HOME to 741741 connects you with a trained Crisis Counselor who can help with anxiety, depression, relationship struggles, grief, or thoughts of self-harm. Text-based support can feel more accessible than calling a hotline, especially in situations where speaking out loud is not possible or comfortable. No app download is required.',
        source: 'https://www.crisistextline.org'
    },
    {
        id: 'res-2',
        icon: '💻',
        title: 'Online Therapy Directories',
        description: 'Psychology Today\'s directory helps you find therapists offering many modalities, including gentle and self-guided approaches.',
        summary: 'Psychology Today\'s therapist finder is one of the most comprehensive directories available, letting you filter by location, insurance accepted, specialty (anxiety, trauma, grief, etc.), and therapy type. It covers thousands of licensed professionals offering both in-person and teletherapy options. Whether you are looking for a trauma-informed therapist, a CBT specialist, or someone experienced with LGBTQ+ concerns, you can browse and reach out at your own pace — no commitment required.',
        source: 'https://www.psychologytoday.com/us/therapists'
    },
    {
        id: 'res-3',
        icon: '🌱',
        title: 'Daily Check-In Prompts',
        description: 'Short, simple prompts you can use in under 5 minutes to check in with your mental and emotional state each day.',
        summary: 'Elite Therapeutic Services offers a set of therapist-designed daily check-in prompts that take just five minutes. These prompts encourage you to notice your emotional state, identify any stressors, and acknowledge what you need — before small tensions grow into larger problems. Regular check-ins increase emotional self-awareness, help you spot early signs of burnout or anxiety, and complement any therapy you may already be doing. They are intentionally simple enough to use even on the hardest days.',
        source: 'https://www.elitetherapeuticservices.com/blog/daily-mental-health-check-in-prompts-you-can-use-in-under-5-minutes'
    },
    {
        id: 'res-4',
        icon: '🛠️',
        title: 'Coping Skills',
        description: 'Coping skills are essential tools for managing stress and emotional pain. Learn why they matter and how to build a personal toolkit.',
        summary: 'Dallas Therapeutic Services explains that coping skills are not mere distractions — they are intentional, practised strategies for managing difficult emotions and situations. There are two broad types: problem-focused coping (tackling the source of stress directly) and emotion-focused coping (regulating your emotional response when the situation cannot be changed). Building a personal toolkit takes time, but the skills become more automatic with practice. The resource also addresses how some habitual coping patterns can become unhelpful and how to replace them with healthier alternatives.',
        source: 'https://www.dallastherapeutic.com/blog/the-essential-role-of-coping-skills-in-mental-health'
    },
    {
        id: 'res-5',
        icon: '🧘',
        title: 'Grounding Techniques',
        description: '30 grounding techniques to help manage anxiety, PTSD, and overwhelming emotions — practical exercises you can use anywhere.',
        summary: 'This guide from PACDC provides 30 grounding techniques — sensory and cognitive exercises designed to anchor you to the present moment and interrupt overwhelming thoughts or feelings. Grounding is especially helpful for anxiety, panic attacks, flashbacks, and dissociation. Techniques include the well-known "5-4-3-2-1" method, breathing exercises, physical movement, and cognitive reframing. None of the techniques require any equipment or a specific location — they can be used quietly and discreetly wherever you are.',
        source: 'https://pacdc.org/2017/wp-content/uploads/2020/11/Grounding-Techniques_-30-Techniques-for-Anxiety-PTSD-and-More.pdf'
    },
    {
        id: 'res-6',
        icon: '📋',
        title: 'Self-Care Wellness Toolkit',
        description: 'A comprehensive toolkit covering self-care strategies for managing depression and anxiety, with evidence-based references.',
        summary: 'This toolkit from Humboldt State University\'s wellness centre provides a broad, evidence-based overview of self-care strategies for depression and anxiety. It covers physical wellness (sleep hygiene, exercise, nutrition), emotional regulation techniques, the role of social connection, and guidance on when and how to seek professional support. Each section cites research to back up its recommendations. Whether you are managing mild symptoms independently or supplementing professional treatment, this toolkit provides clear, practical starting points.',
        source: 'https://wellbeing.humboldt.edu/sites/default/files/health/self_care_wellness_toolkit_for_depression_and_anxiety_for_website_with_references.pdf'
    },
    {
        id: 'res-7',
        icon: '🤝',
        title: 'Mental Health First Aid',
        description: 'Learn to recognise and respond to mental health crises using the ALGEE action plan.',
        summary: 'Mental Health First Aid teaches a five-step action plan called ALGEE: Assess for risk of suicide or harm; Listen non-judgmentally; Give reassurance and information; Encourage appropriate professional help; Encourage self-help and other support strategies. The programme is designed for everyday people — not just healthcare professionals — to help them respond when someone they know is experiencing a mental health or substance use challenge. Training is available in-person and online across the country.',
        source: 'https://mentalhealthfirstaid.org/news/algee-how-mhfa-helps-you-respond-in-crisis-and-non-crisis-situations/'
    },
    {
        id: 'res-8',
        icon: '📚',
        title: 'HelpGuide',
        description: 'A trusted non-profit resource offering expert-reviewed guides on mental health, relationships, and emotional well-being.',
        summary: 'HelpGuide is a nonprofit that provides free, expert-reviewed articles on a wide range of mental health topics — from anxiety, depression, and trauma to sleep, relationships, and emotional resilience. All content is developed in partnership with Harvard Health Publishing and reviewed by licensed clinicians. Unlike many health websites, HelpGuide is entirely ad-free and designed to empower readers to understand their mental health and make informed, confident decisions about their care. It is one of the most trustworthy free resources available.',
        source: 'https://www.helpguide.org/'
    }
];

// ════════════════════════════════════════════
//  HELPER: all cards combined
// ════════════════════════════════════════════
const allCards = [...statsCards, ...resourceCards];
function findCard(id) { return allCards.find(c => c.id === id); }

// ════════════════════════════════════════════
//  STATE
// ════════════════════════════════════════════
let currentUser     = null;   // username string or null
let currentCardData = null;   // card object currently shown in detail modal

// ════════════════════════════════════════════
//  DOM REFS
// ════════════════════════════════════════════
const authNavBtn        = document.getElementById('auth-nav-btn');
const bookmarksNavBtn   = document.getElementById('bookmarks-nav-btn');

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

const toast             = document.getElementById('toast');
const toastMsg          = document.getElementById('toast-msg');

// ════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    renderAllCards();
    checkLoginState();
});

// ════════════════════════════════════════════
//  CARD RENDERING
// ════════════════════════════════════════════
function createCard(card) {
    const div = document.createElement('div');
    div.className = 'card';
    div.dataset.id = card.id;
    div.setAttribute('role', 'button');
    div.setAttribute('tabindex', '0');

    div.innerHTML = `
        <div class="card-visual">${card.icon}</div>
        <h3>${card.title}</h3>
        <p>${card.description}</p>
        <div class="card-actions">
            <span class="card-expand-hint">Click to learn more ↗</span>
            <button class="bookmark-btn" aria-label="Bookmark ${card.title}">Bookmark</button>
        </div>
    `;

    // Open detail modal on card click (anywhere except bookmark button)
    div.addEventListener('click', (e) => {
        if (e.target.classList.contains('bookmark-btn')) return;
        openCardModal(card);
    });
    div.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') openCardModal(card);
    });

    // Bookmark button
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
}

// ════════════════════════════════════════════
//  CARD DETAIL MODAL
// ════════════════════════════════════════════
function openCardModal(card) {
    currentCardData = card;

    cmIcon.textContent        = card.icon;
    cmTitle.textContent       = card.title;
    cmDescription.textContent = card.description;
    cmSummary.textContent     = card.summary;
    cmSourceBtn.href          = card.source;

    refreshCardModalBookmarkBtn();
    refreshCardModalEmailBtn();

    cmEmailStatus.textContent = '';
    cmEmailStatus.classList.add('hidden');
    cmEmailStatus.className = 'cm-email-status hidden';

    cardModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeCardModal() {
    cardModal.style.display  = 'none';
    document.body.style.overflow = '';
    currentCardData = null;
}

function refreshCardModalBookmarkBtn() {
    if (!currentCardData) return;
    const saved = isBookmarked(currentCardData.id);
    cmBookmarkBtn.textContent = saved ? '✓ Saved' : 'Bookmark';
    cmBookmarkBtn.classList.toggle('bookmarked', saved);
}

function refreshCardModalEmailBtn() {
    if (!currentCardData) return;
    const userData = currentUser ? getUserData(currentUser) : null;
    const consented = userData && userData.emailConsent;
    cmEmailBtn.classList.toggle('hidden', !consented);
}

cardCloseBtn.addEventListener('click', closeCardModal);
cardModal.addEventListener('click', (e) => { if (e.target === cardModal) closeCardModal(); });

// Bookmark from within card modal
cmBookmarkBtn.addEventListener('click', () => {
    if (!currentCardData) return;
    handleBookmarkToggle(currentCardData.id, currentCardData.title, currentCardData.description);
    refreshCardModalBookmarkBtn();
});

// Email from within card modal
cmEmailBtn.addEventListener('click', () => {
    if (!currentCardData || !currentUser) return;
    const userData = getUserData(currentUser);
    if (!userData || !userData.emailConsent) return;

    sendCardByEmail(currentUser, userData.email, currentCardData);
});

// ════════════════════════════════════════════
//  AUTH MODAL
// ════════════════════════════════════════════
authNavBtn.addEventListener('click', (e) => {
    e.preventDefault();
    clearAuthError();
    authModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

authCloseBtn.addEventListener('click', closeAuthModal);
authModal.addEventListener('click', (e) => { if (e.target === authModal) closeAuthModal(); });

function closeAuthModal() {
    authModal.style.display = 'none';
    document.body.style.overflow = '';
}

// ── Login / Register ──
loginBtn.addEventListener('click', () => {
    clearAuthError();
    const user  = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const pass  = passwordInput.value;
    const consent = emailConsentChk.checked;

    if (!user || !email || !pass) {
        showAuthError('Please fill in all three fields.');
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showAuthError('Please enter a valid email address.');
        return;
    }
    if (pass.length < 6) {
        showAuthError('Password must be at least 6 characters.');
        return;
    }

    const existing = getUserData(user);
    if (existing) {
        // Returning user — validate password
        if (existing.password !== pass) {
            showAuthError('Incorrect password for that username.');
            return;
        }
    } else {
        // New user — register
        saveUserData(user, { email, password: pass, emailConsent: consent });
        localStorage.setItem(`bookmarks_${user}`, JSON.stringify([]));
    }

    localStorage.setItem('currentUser', user);
    checkLoginState();
    closeAuthModal();
});

// ── Manage preferences (logged-in view) ──
savePrefsBtn.addEventListener('click', () => {
    if (!currentUser) return;
    const userData = getUserData(currentUser);
    userData.emailConsent = manageConsentChk.checked;
    saveUserData(currentUser, userData);
    showToast('Preference saved!');
    refreshCardModalEmailBtn();
});

// ── Logout ──
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    checkLoginState();
    closeAuthModal();
});

// ════════════════════════════════════════════
//  LOGIN STATE
// ════════════════════════════════════════════
function checkLoginState() {
    currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
        authNavBtn.textContent = `Hello, ${currentUser}`;
        bookmarksNavBtn.classList.remove('hidden');

        // Switch modal to manage view
        authSigninView.classList.add('hidden');
        authManageView.classList.remove('hidden');

        const userData = getUserData(currentUser);
        manageGreeting.textContent = `Signed in as ${currentUser}${userData ? ' · ' + userData.email : ''}`;
        manageConsentChk.checked = userData ? !!userData.emailConsent : false;

        // Update "You are not alone" text
        document.getElementById('alone-subtitle').innerHTML =
            `You are not alone, <strong>${currentUser}</strong>. Here is what the data says.`;
    } else {
        authNavBtn.textContent = 'Sign In / Register';
        bookmarksNavBtn.classList.add('hidden');

        authSigninView.classList.remove('hidden');
        authManageView.classList.add('hidden');

        usernameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        emailConsentChk.checked = false;

        document.getElementById('alone-subtitle').textContent =
            'You are not alone. Here is what the data says.';
    }

    updateBookmarkButtons();
    refreshCardModalBookmarkBtn();
    refreshCardModalEmailBtn();
}

// ════════════════════════════════════════════
//  BOOKMARKS MODAL
// ════════════════════════════════════════════
bookmarksNavBtn.addEventListener('click', (e) => {
    e.preventDefault();
    renderBookmarks();
    bookmarksModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

bmCloseBtn.addEventListener('click', closeBookmarksModal);
bookmarksModal.addEventListener('click', (e) => { if (e.target === bookmarksModal) closeBookmarksModal(); });

function closeBookmarksModal() {
    bookmarksModal.style.display = 'none';
    document.body.style.overflow = '';
}

function renderBookmarks() {
    if (!currentUser) return;
    const bookmarks = getBookmarks();
    bookmarksList.innerHTML = '';

    if (bookmarks.length === 0) {
        bookmarksList.innerHTML = '<p class="bm-empty">You haven\'t saved anything yet.</p>';
        return;
    }

    bookmarks.forEach(bm => {
        const card = findCard(bm.id);
        const div = document.createElement('div');
        div.className = 'bookmark-item';
        div.setAttribute('role', 'button');
        div.setAttribute('tabindex', '0');
        div.title = 'Click to open full details';

        div.innerHTML = `
            <div class="bm-row">
                <span class="bm-icon">${card ? card.icon : '📌'}</span>
                <div class="bm-text">
                    <h4>${bm.title}</h4>
                    <p>${bm.description}</p>
                </div>
                <span class="bm-arrow">›</span>
            </div>
        `;

        // Clicking a bookmark item opens the card detail modal
        const clickHandler = () => {
            if (card) {
                closeBookmarksModal();
                // Small delay so bookmarks modal fully closes first
                setTimeout(() => openCardModal(card), 80);
            }
        };
        div.addEventListener('click', clickHandler);
        div.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') clickHandler();
        });

        bookmarksList.appendChild(div);
    });
}

// ════════════════════════════════════════════
//  BOOKMARKING LOGIC
// ════════════════════════════════════════════
function handleBookmarkToggle(id, title, description) {
    if (!currentUser) {
        closeCardModal();
        authModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        return;
    }
    const bookmarks = getBookmarks();
    const idx = bookmarks.findIndex(bm => bm.id === id);
    if (idx > -1) {
        bookmarks.splice(idx, 1);
        showToast('Bookmark removed.');
    } else {
        bookmarks.push({ id, title, description });
        showToast('Bookmarked!');
    }
    saveBookmarks(bookmarks);
    updateBookmarkButtons();
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
            btn.textContent = saved ? '✓ Saved' : 'Bookmark';
            btn.classList.toggle('bookmarked', saved);
        }
    });
}

// ════════════════════════════════════════════
//  EMAIL FEATURE
//  We use mailto: since this is a static site
//  with no backend. The user's own email client
//  opens pre-filled with the card content.
// ════════════════════════════════════════════
function sendCardByEmail(username, userEmail, card) {
    const subject = encodeURIComponent(`Pathfinder Resource: ${card.title}`);
    const body = encodeURIComponent(
`Hi ${username},

Here is a resource you requested from Pathfinder:

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

    const mailto = `mailto:${userEmail}?subject=${subject}&body=${body}`;

    // Open mailto link
    const a = document.createElement('a');
    a.href = mailto;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Show status inside modal
    cmEmailStatus.textContent = '✓ Your email client has been opened with this card\'s details.';
    cmEmailStatus.className = 'cm-email-status success';
}

// ════════════════════════════════════════════
//  TOAST
// ════════════════════════════════════════════
let toastTimer = null;
function showToast(msg) {
    toastMsg.textContent = msg;
    toast.classList.remove('hidden');
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 400);
    }, 2400);
}

// ════════════════════════════════════════════
//  LOCAL STORAGE HELPERS
// ════════════════════════════════════════════
function getUserData(username)         { return JSON.parse(localStorage.getItem(`user_${username}`)) || null; }
function saveUserData(username, data)  { localStorage.setItem(`user_${username}`, JSON.stringify(data)); }
function getBookmarks()                { return JSON.parse(localStorage.getItem(`bookmarks_${currentUser}`)) || []; }
function saveBookmarks(bms)            { localStorage.setItem(`bookmarks_${currentUser}`, JSON.stringify(bms)); }

// ════════════════════════════════════════════
//  AUTH ERROR HELPERS
// ════════════════════════════════════════════
function showAuthError(msg) {
    authError.textContent = msg;
    authError.classList.remove('hidden');
}
function clearAuthError() {
    authError.textContent = '';
    authError.classList.add('hidden');
}
