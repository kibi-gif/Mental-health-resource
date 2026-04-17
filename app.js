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
                <span class="category">${card.Icon}</span>
                <h3>${card.title}</h3>
                <div class="big-stat">${card.summary}</div>
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
                <span class="category">${card.Icon}</span>
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
