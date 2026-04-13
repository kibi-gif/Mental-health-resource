// --- Card Data ---
const statsCards = [
    {
        id: 'stat-1',
        icon: '📊',
        title: 'Prevalence',
        description: '1 in 5 adults experience mental illness each year. It is as common as many physical ailments.',
        summary: 'According to NAMI (National Alliance on Mental Illness), mental illness is far more widespread than many people realize — affecting roughly 1 in 5 adults in the United States every year. This includes conditions like depression, anxiety, bipolar disorder, and schizophrenia. The data underscores that mental health conditions are medical realities, not personal choices, and that seeking help is both normal and encouraged.',
        source: 'https://namimobile.org/resources/about-mental-illness/fact-sheets/'
    },
    {
        id: 'stat-2',
        icon: '📈',
        title: 'Treatment Efficacy',
        description: 'Between 70% and 90% of individuals have a significant reduction of symptoms with proper support and treatment.',
        summary: 'NAMI\'s fact sheets highlight that mental health treatment is genuinely effective. The majority of people — between 70% and 90% — experience meaningful symptom relief when they receive appropriate care. Treatment options include therapy (such as CBT), medication, peer support groups, and lifestyle changes. The key message: reaching out for help has a strong track record of making a real difference.',
        source: 'https://namimobile.org/resources/about-mental-illness/fact-sheets/'
    },
    {
        id: 'stat-3',
        icon: '🧠',
        title: 'Stress vs. Anxiety',
        description: 'Stress and anxiety are related but different. Stress is typically triggered by an external cause, while anxiety persists even without an identifiable stressor.',
        summary: 'The American Psychological Association explains that while stress and anxiety share many symptoms — irritability, trouble sleeping, difficulty concentrating — they have important distinctions. Stress is a response to an external trigger and usually resolves when the trigger does. Anxiety, however, can persist even when there is no clear cause, and may require professional support. Recognizing the difference is a helpful first step toward knowing what kind of help might be most useful.',
        source: 'https://www.apa.org/topics/stress/anxiety-difference'
    },
    {
        id: 'stat-4',
        icon: '💬',
        title: 'Common Misconceptions',
        description: 'Mental health conditions are not a sign of weakness or a personal failing. They are medical conditions influenced by genetics, environment, and life experience.',
        summary: 'The American Psychiatric Association addresses widespread myths about mental health. Mental illness is not caused by personal weakness, laziness, or poor character — it results from a complex mix of biological, psychological, and social factors. Common misconceptions (like "just think positive" or "it\'s not a real illness") can delay people from seeking care. Replacing these myths with facts helps reduce stigma and encourages more people to get the support they need.',
        source: 'https://www.psychiatry.org/news-room/apa-blogs/myths-and-facts-about-mental-health'
    },
    {
        id: 'stat-5',
        icon: '🔄',
        title: 'Recovery Is Possible',
        description: 'With the right support, many people recover from depression and go on to live full, meaningful lives. Recovery looks different for everyone.',
        summary: 'This resource from AmeriHealth Caritas outlines what recovery from depression can look like in practice. It emphasizes that recovery is not always linear — it involves building a support network, developing healthy routines, and working with healthcare providers over time. Recovery does not always mean being symptom-free; for many people, it means managing symptoms well enough to live a fulfilling life. Hope and progress are possible with consistent, compassionate care.',
        source: 'https://www.amerihealthcaritasla.com/content/dam/amerihealth-caritas/acla/pdf/member/depression/recovering-from-depression.pdf.coredownload.inline.pdf'
    }
];

const resourceCards = [
    {
        id: 'res-1',
        icon: '📱',
        title: 'Text-Based Support',
        description: 'Crisis Text Line: Text HOME to 741741 for free, 24/7 crisis counseling by trained volunteers.',
        summary: 'Crisis Text Line offers free, confidential mental health support via text message, available around the clock, every day of the year. By texting HOME to 741741, you are connected to a trained Crisis Counselor who can help with anxiety, depression, relationship issues, thoughts of self-harm, and more. Text-based support can feel more accessible than calling a hotline, especially in situations where speaking out loud is not possible or comfortable.',
        source: 'https://www.crisistextline.org'
    },
    {
        id: 'res-2',
        icon: '💻',
        title: 'Online Therapy Directories',
        description: 'Psychology Today offers a comprehensive directory to find therapists offering various modalities, including gentle and self-guided approaches.',
        summary: 'Psychology Today\'s therapist finder lets you filter by location, insurance, specialty, and therapy type — making it easier to find someone who fits your specific situation. The directory covers thousands of licensed professionals offering in-person and teletherapy options. Whether you\'re looking for a trauma-informed therapist, a CBT specialist, or someone experienced with LGBTQ+ concerns, the directory can help you narrow down your options at your own pace.',
        source: 'https://www.psychologytoday.com/us/therapists'
    },
    {
        id: 'res-3',
        icon: '🌱',
        title: 'Daily Check-In Prompts',
        description: 'Short, simple prompts you can use in under 5 minutes to check in with your mental and emotional state each day.',
        summary: 'Elite Therapeutic Services offers a set of therapist-designed prompts that take just five minutes to work through. These prompts help you increase emotional awareness, spot early signs of stress or burnout, and reinforce healthy boundaries. Regular check-ins — even brief ones — can complement therapy and help you stay attuned to your emotional state before small stressors grow into larger problems. The prompts are designed to be gentle and accessible, even on busy or difficult days.',
        source: 'https://www.elitetherapeuticservices.com/blog/daily-mental-health-check-in-prompts-you-can-use-in-under-5-minutes'
    },
    {
        id: 'res-4',
        icon: '🛠️',
        title: 'Coping Skills',
        description: 'Coping skills are essential tools for managing stress and emotional pain. Learn why they matter and how to build a personal toolkit.',
        summary: 'Dallas Therapeutic Services explains that coping skills are intentional strategies for managing difficult emotions and situations — not just distractions. They fall into two broad categories: problem-focused coping (addressing the source of stress directly) and emotion-focused coping (managing your emotional response). Building a personal toolkit of coping skills takes practice, but over time they become more automatic. The article also addresses why some coping habits can become unhelpful and how to replace them with healthier alternatives.',
        source: 'https://www.dallastherapeutic.com/blog/the-essential-role-of-coping-skills-in-mental-health'
    },
    {
        id: 'res-5',
        icon: '🧘',
        title: 'Grounding Techniques',
        description: '30 grounding techniques to help manage anxiety, PTSD, and overwhelming emotions — practical exercises you can use anywhere.',
        summary: 'This PDF guide from PACDC provides 30 grounding techniques — practical, sensory-based exercises designed to help you stay present and interrupt overwhelming thoughts or feelings. Grounding works by anchoring your attention to the present moment, which can reduce the intensity of anxiety, panic, flashbacks, and dissociation. Techniques range from the well-known "5-4-3-2-1" sensory method to physical movement exercises, breathing patterns, and cognitive reframing. No equipment needed — these can be used anywhere, anytime.',
        source: 'https://pacdc.org/2017/wp-content/uploads/2020/11/Grounding-Techniques_-30-Techniques-for-Anxiety-PTSD-and-More.pdf'
    },
    {
        id: 'res-6',
        icon: '📋',
        title: 'Self-Care Wellness Toolkit',
        description: 'A comprehensive toolkit covering self-care strategies for managing depression and anxiety, with references to evidence-based practices.',
        summary: 'This toolkit from Humboldt State University\'s wellness center provides a broad, evidence-based overview of self-care strategies for managing depression and anxiety. It covers physical wellness (sleep, exercise, nutrition), emotional regulation strategies, social connection, and professional support options. Each section is grounded in research and designed to be practical for everyday use. Whether you are managing mild symptoms or supporting recovery alongside professional treatment, this toolkit offers concrete starting points.',
        source: 'https://wellbeing.humboldt.edu/sites/default/files/health/self_care_wellness_toolkit_for_depression_and_anxiety_for_website_with_references.pdf'
    },
    {
        id: 'res-7',
        icon: '🤝',
        title: 'Mental Health First Aid',
        description: 'Learn how to recognize and respond to mental health crises and non-crisis situations using the ALGEE action plan.',
        summary: 'Mental Health First Aid teaches a five-step action plan known as ALGEE: Assess for risk of suicide or harm, Listen non-judgmentally, Give reassurance and information, Encourage appropriate professional help, and Encourage self-help and other support strategies. The program is designed for everyday people — not just healthcare professionals — to help them respond effectively when someone they know is experiencing a mental health challenge. Training is available in-person and online across the country.',
        source: 'https://mentalhealthfirstaid.org/news/algee-how-mhfa-helps-you-respond-in-crisis-and-non-crisis-situations/'
    },
    {
        id: 'res-8',
        icon: '📚',
        title: 'HelpGuide',
        description: 'A trusted non-profit resource offering expert-reviewed guides on mental health, relationships, and emotional well-being.',
        summary: 'HelpGuide is a nonprofit organization that provides free, expert-reviewed articles on a wide range of mental health topics — from anxiety, depression, and trauma to sleep, relationships, and healthy aging. All content is developed in partnership with Harvard Health Publishing and reviewed by licensed professionals. Unlike many health websites, HelpGuide is entirely ad-free and designed to empower readers to understand their mental health and make informed decisions about their care.',
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
            <button class="source-btn open-detail-btn">Learn More ↗</button>
            <button class="bookmark-btn" onclick="event.stopPropagation(); toggleBookmark('${card.id}', '${card.title}', '${card.description.replace(/'/g, "\\'")}')">Bookmark</button>
        </div>
    `;

    div.querySelector('.open-detail-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        openCardModal(card);
    });

    div.addEventListener('click', () => openCardModal(card));

    return div;
}

function renderAllCards() {
    const statsGrid = document.getElementById('stats-grid');
    const resourcesGrid = document.getElementById('resources-grid');
    statsCards.forEach(card => statsGrid.appendChild(createCard(card)));
    resourceCards.forEach(card => resourcesGrid.appendChild(createCard(card)));
}

// --- Card Detail Modal ---
function openCardModal(card) {
    document.getElementById('card-modal-icon').textContent = card.icon;
    document.getElementById('card-modal-title').textContent = card.title;
    document.getElementById('card-modal-description').textContent = card.description;
    document.getElementById('card-modal-summary').textContent = card.summary;
    document.getElementById('card-modal-source').href = card.source;

    const bmBtn = document.getElementById('card-modal-bookmark-btn');
    bmBtn.dataset.id = card.id;
    bmBtn.dataset.title = card.title;
    bmBtn.dataset.description = card.description;

    updateCardModalBookmarkBtn(card.id);
    document.getElementById('card-modal').style.display = 'flex';
}

function updateCardModalBookmarkBtn(cardId) {
    const bmBtn = document.getElementById('card-modal-bookmark-btn');
    if (!currentUser) {
        bmBtn.textContent = 'Sign In to Bookmark';
        bmBtn.classList.remove('bookmarked');
        return;
    }
    const bookmarks = JSON.parse(localStorage.getItem(`bookmarks_${currentUser}`)) || [];
    const isBookmarked = bookmarks.some(bm => bm.id === cardId);
    bmBtn.textContent = isBookmarked ? 'Saved ✓' : 'Bookmark';
    bmBtn.classList.toggle('bookmarked', isBookmarked);
}

document.getElementById('card-modal-bookmark-btn').addEventListener('click', () => {
    const btn = document.getElementById('card-modal-bookmark-btn');
    const id = btn.dataset.id;
    const title = btn.dataset.title;
    const description = btn.dataset.description;

    if (!currentUser) {
        document.getElementById('card-modal').style.display = 'none';
        authModal.style.display = 'flex';
        return;
    }
    toggleBookmark(id, title, description);
    updateCardModalBookmarkBtn(id);
});

document.querySelector('.close-btn-card').addEventListener('click', () => {
    document.getElementById('card-modal').style.display = 'none';
});

// --- State ---
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
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const bookmarksList = document.getElementById('bookmarks-list');
const authError = document.getElementById('auth-error');

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    renderAllCards();
    checkLoginState();
    updateBookmarkButtons();
});

// --- Modal Triggers ---
authNavBtn.addEventListener('click', (e) => {
    e.preventDefault();
    authError.classList.add('hidden');
    authError.textContent = '';
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
    if (e.target === document.getElementById('card-modal')) document.getElementById('card-modal').style.display = 'none';
});

// --- Authentication ---
loginBtn.addEventListener('click', () => {
    const user = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    authError.classList.add('hidden');
    authError.textContent = '';

    if (!user || !email || !password) {
        authError.textContent = 'Please fill in all fields to continue.';
        authError.classList.remove('hidden');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        authError.textContent = 'Please enter a valid email address.';
        authError.classList.remove('hidden');
        return;
    }

    if (password.length < 4) {
        authError.textContent = 'Password must be at least 4 characters.';
        authError.classList.remove('hidden');
        return;
    }

    // Check if user exists
    const existingUser = localStorage.getItem(`user_${user}`);
    if (existingUser) {
        // Returning user — validate password
        const userData = JSON.parse(existingUser);
        if (userData.password !== password) {
            authError.textContent = 'Incorrect password for that username.';
            authError.classList.remove('hidden');
            return;
        }
    } else {
        // New user — register
        localStorage.setItem(`user_${user}`, JSON.stringify({ email, password }));
        localStorage.setItem(`bookmarks_${user}`, JSON.stringify([]));
    }

    localStorage.setItem('currentUser', user);
    checkLoginState();
    authModal.style.display = 'none';
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    checkLoginState();
    authModal.style.display = 'none';
});

function checkLoginState() {
    currentUser = localStorage.getItem('currentUser');

    const authFields = document.getElementById('auth-fields');
    const manageAccount = document.getElementById('manage-account');

    if (currentUser) {
        authNavBtn.textContent = `Hello, ${currentUser}`;
        bookmarksNavBtn.classList.remove('hidden');
        authFields.classList.add('hidden');
        manageAccount.classList.remove('hidden');
        document.getElementById('manage-user-info').textContent = `Signed in as ${currentUser}`;
        document.getElementById('auth-title').textContent = 'Manage Account';
        document.getElementById('auth-subtitle').textContent = 'You\'re signed in and your bookmarks are saved.';

        // Update "You are not alone, [username]" text
        const aloneText = document.getElementById('alone-text');
        aloneText.innerHTML = `You are not alone, <strong>${currentUser}</strong>. Here is what the data says.`;
    } else {
        authNavBtn.textContent = 'Sign In / Register';
        bookmarksNavBtn.classList.add('hidden');
        authFields.classList.remove('hidden');
        manageAccount.classList.add('hidden');
        usernameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        document.getElementById('auth-title').textContent = 'Create Account or Sign In';
        document.getElementById('auth-subtitle').textContent = 'Save information to review later on your own terms.';

        const aloneText = document.getElementById('alone-text');
        aloneText.textContent = 'You are not alone. Here is what the data says.';
    }
    updateBookmarkButtons();
}

// --- Bookmarking ---
function toggleBookmark(id, title, description) {
    if (!currentUser) {
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
    document.querySelectorAll('.bookmark-btn').forEach(btn => {
        const card = btn.closest('.card');
        if (!card) return;
        const cardId = card.dataset.id;

        if (!currentUser) {
            btn.textContent = 'Sign In to Save';
            btn.classList.remove('bookmarked');
            return;
        }
        const bookmarks = JSON.parse(localStorage.getItem(`bookmarks_${currentUser}`)) || [];
        const isBookmarked = bookmarks.some(bm => bm.id === cardId);
        btn.textContent = isBookmarked ? 'Saved ✓' : 'Bookmark';
        btn.classList.toggle('bookmarked', isBookmarked);
    });
}

function renderBookmarks() {
    if (!currentUser) return;
    const storageKey = `bookmarks_${currentUser}`;
    let bookmarks = JSON.parse(localStorage.getItem(storageKey)) || [];
    bookmarksList.innerHTML = '';

    if (bookmarks.length === 0) {
        bookmarksList.innerHTML = '<p class="no-bookmarks">You haven\'t saved anything yet.</p>';
        return;
    }

    // Combine all cards for lookup
    const allCards = [...statsCards, ...resourceCards];

    bookmarks.forEach(bm => {
        const fullCard = allCards.find(c => c.id === bm.id);
        const div = document.createElement('div');
        div.className = 'bookmark-item';
        div.innerHTML = `
            <div class="bookmark-item-header">
                <span class="bookmark-icon">${fullCard ? fullCard.icon : '📌'}</span>
                <h4>${bm.title}</h4>
            </div>
            <p>${bm.description}</p>
            ${fullCard ? `<button class="open-from-bookmark source-btn" data-id="${bm.id}">Open Card ↗</button>` : ''}
        `;
        if (fullCard) {
            div.querySelector('.open-from-bookmark').addEventListener('click', () => {
                bookmarksModal.style.display = 'none';
                openCardModal(fullCard);
            });
        }
        bookmarksList.appendChild(div);
    });
}
