// Profile page JavaScript
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    loadProfile();
    setupEventListeners();
});

function checkAuth() {
    const userData = localStorage.getItem('techconnect_user');
    if (!userData) {
        window.location.href = 'index.html';
        return;
    }
}

function loadProfile() {
    const userData = JSON.parse(localStorage.getItem('techconnect_user') || '{}');
    const profileData = JSON.parse(localStorage.getItem('techconnect_profile') || '{}');

    // Merge user data with profile data
    const profile = { ...userData, ...profileData };

    // Set defaults if not set
    const defaultProfile = {
        name: profile.name || 'Tech User',
        email: profile.email || 'user@techconnect.com',
        role: profile.role || 'Software Engineer',
        company: profile.company || 'Tech Company',
        location: profile.location || 'San Francisco, CA',
        experience: profile.experience || '3-5 years',
        bio: profile.bio || 'Passionate tech professional looking to connect with like-minded individuals. Love building innovative solutions and exploring new technologies.',
        techStack: profile.techStack || ['JavaScript', 'React', 'Node.js', 'Python'],
        verified: profile.verified || false,
        linkedinVerified: profile.linkedinVerified || false,
        xVerified: profile.xVerified || false
    };

    // Update UI
    document.getElementById('profileName').textContent = defaultProfile.name;
    document.getElementById('profileRole').textContent = defaultProfile.role;
    document.getElementById('profileBio').textContent = defaultProfile.bio;
    document.getElementById('profileCompany').textContent = defaultProfile.company;
    document.getElementById('profileLocation').textContent = defaultProfile.location;
    document.getElementById('profileExperience').textContent = defaultProfile.experience;
    document.getElementById('profileEmail').textContent = defaultProfile.email;

    // Set avatar initial
    const initial = defaultProfile.name.charAt(0).toUpperCase();
    document.getElementById('avatarInitial').textContent = initial;

    // Set verification badge
    if (defaultProfile.linkedinVerified || defaultProfile.xVerified) {
        document.getElementById('verifiedBadge').style.display = 'inline-flex';
        document.getElementById('verifiedBadge').innerHTML = defaultProfile.linkedinVerified
            ? '<i class="fas fa-check-circle"></i> LinkedIn Verified'
            : '<i class="fas fa-check-circle"></i> X Verified';
    }

    // Tech stack tags
    const techStackContainer = document.getElementById('techStackTags');
    techStackContainer.innerHTML = defaultProfile.techStack.map(tech =>
        `<span class="tech-tag">${tech}</span>`
    ).join('');

    // Load stats from localStorage or use defaults
    const stats = JSON.parse(localStorage.getItem('techconnect_stats') || '{}');
    document.getElementById('statLikes').textContent = stats.likes || Math.floor(Math.random() * 50) + 20;
    document.getElementById('statMatches').textContent = stats.matches || Math.floor(Math.random() * 15) + 5;
    document.getElementById('statViews').textContent = stats.views || Math.floor(Math.random() * 200) + 50;
    document.getElementById('statScore').textContent = stats.score || Math.floor(Math.random() * 20) + 80;
}

function setupEventListeners() {
    // Toggle switches
    document.querySelectorAll('.settings-item').forEach(item => {
        const toggle = item.querySelector('.toggle-switch');
        if (toggle) {
            item.addEventListener('click', () => {
                toggle.classList.toggle('active');
                showNotification('Setting updated!', 'success');
            });
        }
    });

    // Edit Profile button
    document.getElementById('editProfileBtn')?.addEventListener('click', () => {
        window.location.href = 'profile-setup.html';
    });

    // Verify Profile button
    document.getElementById('verifyProfileBtn')?.addEventListener('click', () => {
        showVerificationModal();
    });

    // Edit Bio button
    document.getElementById('editBioBtn')?.addEventListener('click', () => {
        showEditBioModal();
    });

    // Edit Tech button
    document.getElementById('editTechBtn')?.addEventListener('click', () => {
        showNotification('Tech stack editor coming soon!', 'info');
    });

    // Edit Avatar button
    document.getElementById('editAvatarBtn')?.addEventListener('click', () => {
        showNotification('Photo upload coming soon!', 'info');
    });

    // Logout button
    document.getElementById('logoutBtn')?.addEventListener('click', () => {
        logout();
    });
}

function showVerificationModal() {
    const modalHtml = `
        <div id="verifyModal" class="modal-overlay">
            <div class="modal" style="max-width: 500px;">
                <div class="modal-header">
                    <h3 class="modal-title">Verify Your Profile</h3>
                    <button class="modal-close" onclick="closeVerifyModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <p style="color: var(--text-secondary); margin-bottom: 2rem;">
                        Verified profiles get 3x more matches! Choose a platform to verify:
                    </p>
                    
                    <button class="btn btn-outline" style="width: 100%; margin-bottom: 1rem; justify-content: flex-start; gap: 1rem;" onclick="verifyWithLinkedIn()">
                        <i class="fab fa-linkedin" style="color: #0077B5; font-size: 1.5rem;"></i>
                        <div style="text-align: left;">
                            <div style="font-weight: 600;">Verify with LinkedIn</div>
                            <div style="font-size: 0.75rem; color: var(--text-muted);">Connect your professional profile</div>
                        </div>
                    </button>
                    
                    <button class="btn btn-outline" style="width: 100%; justify-content: flex-start; gap: 1rem;" onclick="verifyWithX()">
                        <i class="fab fa-x-twitter" style="color: var(--text-primary); font-size: 1.5rem;"></i>
                        <div style="text-align: left;">
                            <div style="font-weight: 600;">Verify with X</div>
                            <div style="font-size: 0.75rem; color: var(--text-muted);">Connect your X Twitter account</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeVerifyModal() {
    const modal = document.getElementById('verifyModal');
    if (modal) modal.remove();
}

function verifyWithLinkedIn() {
    closeVerifyModal();
    showNotification('Connecting to LinkedIn...', 'info');

    setTimeout(() => {
        // Simulate verification
        const userData = JSON.parse(localStorage.getItem('techconnect_user') || '{}');
        userData.linkedinVerified = true;
        localStorage.setItem('techconnect_user', JSON.stringify(userData));

        showNotification('LinkedIn verification successful! 🎉', 'success');
        document.getElementById('verifiedBadge').style.display = 'inline-flex';
        document.getElementById('verifiedBadge').innerHTML = '<i class="fas fa-check-circle"></i> LinkedIn Verified';
    }, 2000);
}

function verifyWithX() {
    closeVerifyModal();
    showNotification('Connecting to X...', 'info');

    setTimeout(() => {
        // Simulate verification
        const userData = JSON.parse(localStorage.getItem('techconnect_user') || '{}');
        userData.xVerified = true;
        localStorage.setItem('techconnect_user', JSON.stringify(userData));

        showNotification('X verification successful! 🎉', 'success');
        document.getElementById('verifiedBadge').style.display = 'inline-flex';
        document.getElementById('verifiedBadge').innerHTML = '<i class="fas fa-check-circle"></i> X Verified';
    }, 2000);
}

function showEditBioModal() {
    const currentBio = document.getElementById('profileBio').textContent;

    const modalHtml = `
        <div id="editBioModal" class="modal-overlay">
            <div class="modal" style="max-width: 500px;">
                <div class="modal-header">
                    <h3 class="modal-title">Edit Bio</h3>
                    <button class="modal-close" onclick="closeEditBioModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="form-label">Your Bio</label>
                        <textarea id="bioTextarea" class="form-textarea" style="min-height: 150px;">${currentBio}</textarea>
                        <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem;">
                            <span id="bioCharCount">${currentBio.length}</span>/500 characters
                        </p>
                    </div>
                    <button class="btn btn-primary" style="width: 100%;" onclick="saveBio()">
                        <i class="fas fa-save"></i> Save Changes
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Character counter
    document.getElementById('bioTextarea').addEventListener('input', (e) => {
        document.getElementById('bioCharCount').textContent = e.target.value.length;
    });
}

function closeEditBioModal() {
    const modal = document.getElementById('editBioModal');
    if (modal) modal.remove();
}

function saveBio() {
    const newBio = document.getElementById('bioTextarea').value;

    // Save to localStorage
    const profileData = JSON.parse(localStorage.getItem('techconnect_profile') || '{}');
    profileData.bio = newBio;
    localStorage.setItem('techconnect_profile', JSON.stringify(profileData));

    // Update UI
    document.getElementById('profileBio').textContent = newBio;

    closeEditBioModal();
    showNotification('Bio updated successfully!', 'success');
}

function logout() {
    localStorage.removeItem('techconnect_user');
    localStorage.removeItem('techconnect_profile');
    localStorage.removeItem('techconnect_remember');
    showNotification('Logging out...', 'info');

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--success-gradient)' : type === 'error' ? 'var(--secondary-gradient)' : 'var(--primary-gradient)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        font-weight: 500;
    `;

    const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span style="font-size: 1.25rem;">${icon}</span>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);
