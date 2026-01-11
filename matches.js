// Mock matches data
const mockMatches = [
    {
        id: 1,
        name: 'Sarah Chen',
        age: 28,
        role: 'Senior Frontend Developer',
        company: 'Google',
        avatarGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        matchedDate: '2 hours ago',
        isNew: true,
        isVerified: true,
        distance: 5,
        techStack: ['React', 'TypeScript']
    },
    {
        id: 2,
        name: 'Alex Rodriguez',
        age: 31,
        role: 'ML Engineer',
        company: 'OpenAI',
        avatarGradient: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
        matchedDate: 'Yesterday',
        isNew: false,
        isVerified: true,
        distance: 12,
        techStack: ['Python', 'PyTorch']
    },
    {
        id: 3,
        name: 'Emily Watson',
        age: 26,
        role: 'Full Stack Developer',
        company: 'Stripe',
        avatarGradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        matchedDate: '3 days ago',
        isNew: false,
        isVerified: false,
        distance: 3,
        techStack: ['Node.js', 'PostgreSQL']
    },
    {
        id: 4,
        name: 'David Kim',
        age: 29,
        role: 'DevOps Engineer',
        company: 'Netflix',
        avatarGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        matchedDate: 'Just now',
        isNew: true,
        isVerified: true,
        distance: 8,
        techStack: ['AWS', 'Kubernetes']
    },
    {
        id: 5,
        name: 'Lisa Wang',
        age: 27,
        role: 'Product Designer',
        company: 'Airbnb',
        avatarGradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        matchedDate: '5 days ago',
        isNew: false,
        isVerified: true,
        distance: 15,
        techStack: ['Figma', 'React']
    },
    {
        id: 6,
        name: 'James Wilson',
        age: 30,
        role: 'System Architect',
        company: 'Microsoft',
        avatarGradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
        matchedDate: '1 week ago',
        isNew: false,
        isVerified: false,
        distance: 20,
        techStack: ['GCP', 'Java']
    },
    {
        id: 7,
        name: 'Elena Popova',
        age: 25,
        role: 'Android Developer',
        company: 'Uber',
        avatarGradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
        matchedDate: 'Just now',
        isNew: true,
        isVerified: true,
        distance: 2,
        techStack: ['Kotlin', 'Android']
    },
    {
        id: 8,
        name: 'Marcus Johnson',
        age: 32,
        role: 'CTO',
        company: 'TechStartup',
        avatarGradient: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)',
        matchedDate: '2 weeks ago',
        isNew: false,
        isVerified: true,
        distance: 45,
        techStack: ['Leadership', 'Go']
    }
];

let currentFilter = 'all';
let searchQuery = '';
let selectedMatchId = null;

document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    renderMatches();
    setupEventListeners();
    updateMatchCount();
});

function checkAuth() {
    const user = localStorage.getItem('techConnectUser');
    if (!user) {
        window.location.href = 'index.html';
    }
}

function renderMatches() {
    const grid = document.getElementById('matchesGrid');
    const emptyState = document.getElementById('emptyState');
    grid.innerHTML = '';

    const filteredMatches = mockMatches.filter(match => {
        // Filter logic
        if (currentFilter === 'new' && !match.isNew) return false;
        if (currentFilter === 'nearby' && match.distance > 10) return false;
        if (currentFilter === 'verified' && !match.isVerified) return false;

        // Search logic
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            return match.name.toLowerCase().includes(query) ||
                match.role.toLowerCase().includes(query) ||
                match.company.toLowerCase().includes(query);
        }

        return true;
    });

    if (filteredMatches.length === 0) {
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    filteredMatches.forEach((match, index) => {
        const card = document.createElement('div');
        card.className = 'glass-card match-card';
        card.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s both`;

        card.innerHTML = `
            <div style="position: relative; margin-bottom: 1rem;">
                <div style="width: 100%; height: 200px; background: ${match.avatarGradient}; border-radius: var(--radius-md); position: relative; overflow: hidden;">
                    ${match.isNew ? `
                        <div class="badge badge-success" style="position: absolute; top: 10px; right: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.2);">
                            NEW
                        </div>
                    ` : ''}
                </div>
                <div style="position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%); width: 40px; height: 40px; background: var(--bg-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid var(--primary-color);">
                    <i class="fas fa-code" style="color: var(--primary-color);"></i>
                </div>
            </div>
            
            <div class="text-center" style="margin-top: 1.5rem;">
                <h3 style="margin-bottom: 0.25rem;">
                    ${match.name}, ${match.age}
                    ${match.isVerified ? '<i class="fas fa-check-circle" style="color: var(--accent-color); font-size: 0.875rem;" title="Verified Profile"></i>' : ''}
                </h3>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                    ${match.role} @ ${match.company}
                </p>
                <div style="display: flex; gap: 0.5rem; justify-content: center; margin-bottom: 1rem;">
                    ${match.techStack.map(tech => `
                        <span style="font-size: 0.75rem; padding: 0.25rem 0.5rem; background: rgba(255,255,255,0.05); border-radius: 4px; color: var(--text-muted);">
                            ${tech}
                        </span>
                    `).join('')}
                </div>
                <p style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 1rem;">
                    <i class="fas fa-clock"></i> Matched ${match.matchedDate}
                </p>
                
                <div style="display: flex; gap: 0.5rem;">
                    <a href="messages.html?user=${match.id}" class="btn btn-primary" style="flex: 1; font-size: 0.875rem; padding: 0.5rem;">
                        Message
                    </a>
                    <button class="btn btn-outline unmatch-btn" data-id="${match.id}" data-name="${match.name}" style="padding: 0.5rem 0.75rem;">
                        <i class="fas fa-user-minus"></i>
                    </button>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });

    // Setup unmatch buttons
    document.querySelectorAll('.unmatch-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            selectedMatchId = parseInt(btn.dataset.id);
            const name = btn.dataset.name;
            showUnmatchModal(name);
        });
    });
}

function setupEventListeners() {
    // Search
    const searchInput = document.getElementById('matchSearch');
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderMatches();
    });

    // Filters
    const filterBtns = document.querySelectorAll('[data-filter]');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.style.background = 'transparent';
            });
            btn.classList.add('active');
            btn.style.background = 'var(--bg-glass)';

            // Apply filter
            currentFilter = btn.dataset.filter;
            renderMatches();
        });
    });

    // Unmatch Modal
    const modal = document.getElementById('unmatchModal');
    const closeBtn = document.getElementById('closeUnmatchModal');
    const cancelBtn = document.getElementById('cancelUnmatch');
    const confirmBtn = document.getElementById('confirmUnmatch');

    const closeModal = () => {
        modal.classList.add('hidden');
        selectedMatchId = null;
    };

    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    confirmBtn.addEventListener('click', () => {
        if (selectedMatchId) {
            handleUnmatch(selectedMatchId);
            closeModal();
        }
    });
}

function showUnmatchModal(name) {
    document.getElementById('unmatchName').textContent = name;
    document.getElementById('unmatchModal').classList.remove('hidden');
}

function handleUnmatch(id) {
    // In a real app, make API call here
    // For now, remove from mock data
    const index = mockMatches.findIndex(m => m.id === id);
    if (index !== -1) {
        mockMatches.splice(index, 1);
        renderMatches();
        updateMatchCount();

        // Show success notification
        // We could reuse the notification system from other files if we shared it
    }
}

function updateMatchCount() {
    const countElement = document.getElementById('matchCount');
    if (countElement) {
        countElement.textContent = mockMatches.length;
    }
}
