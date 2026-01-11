// Profile Setup State
const profileData = {
    basicInfo: {},
    techProfile: {},
    verification: { verified: false, method: null },
    preferences: {}
};

let currentStep = 1;

// Tech Stack Options
const techStackOptions = [
    'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'Go', 'Rust',
    'React', 'Vue', 'Angular', 'Node.js', 'Django', 'Flask', 'Spring',
    'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL',
    'GraphQL', 'REST API', 'Machine Learning', 'AI', 'Blockchain'
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    populateTechStack();
    setupEventListeners();
    updateDistanceValue();
});

function checkAuth() {
    const userData = localStorage.getItem('techconnect_user');
    if (!userData) {
        window.location.href = 'index.html';
    }
}

function populateTechStack() {
    const techStackContainer = document.getElementById('techStack');
    techStackOptions.forEach(tech => {
        const label = document.createElement('label');
        label.className = 'tech-stack-option';
        label.innerHTML = `
      <input type="checkbox" name="techStack" value="${tech}">
      <span>${tech}</span>
    `;
        techStackContainer.appendChild(label);
    });
}

function setupEventListeners() {
    // Step 1: Basic Info
    document.getElementById('basicInfoForm').addEventListener('submit', handleBasicInfoSubmit);

    // Step 2: Tech Profile
    document.getElementById('techProfileForm').addEventListener('submit', handleTechProfileSubmit);
    document.getElementById('backToStep1').addEventListener('click', () => goToStep(1));

    // Step 3: Verification
    document.getElementById('verifyLinkedIn').addEventListener('click', handleLinkedInVerification);
    document.getElementById('verifyX').addEventListener('click', handleXVerification);
    document.getElementById('skipVerification').addEventListener('click', () => goToStep(4));
    document.getElementById('backToStep2').addEventListener('click', () => goToStep(2));

    // Step 4: Preferences
    document.getElementById('preferencesForm').addEventListener('submit', handlePreferencesSubmit);
    document.getElementById('backToStep3').addEventListener('click', () => goToStep(3));

    // Distance slider
    document.getElementById('distance').addEventListener('input', updateDistanceValue);
}

function updateDistanceValue() {
    const distanceSlider = document.getElementById('distance');
    const distanceValue = document.getElementById('distanceValue');
    distanceValue.textContent = `${distanceSlider.value} miles`;
}

async function handleBasicInfoSubmit(e) {
    e.preventDefault();

    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const location = document.getElementById('location').value;
    const bio = document.getElementById('bio').value;

    // Validate bio length
    if (bio.length < 50) {
        showNotification('Bio must be at least 50 characters long', 'error');
        return;
    }

    profileData.basicInfo = { age, gender, location, bio };

    // Show loading
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="spinner" style="width: 20px; height: 20px; border-width: 2px;"></div>';
    submitBtn.disabled = true;

    await new Promise(resolve => setTimeout(resolve, 500));

    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;

    goToStep(2);
}

async function handleTechProfileSubmit(e) {
    e.preventDefault();

    const company = document.getElementById('company').value;
    const experience = document.getElementById('experience').value;
    const interests = document.getElementById('interests').value;

    // Get selected tech stack
    const techStackCheckboxes = document.querySelectorAll('input[name="techStack"]:checked');
    const techStack = Array.from(techStackCheckboxes).map(cb => cb.value);

    if (techStack.length === 0) {
        showNotification('Please select at least one technology', 'error');
        return;
    }

    profileData.techProfile = { company, experience, techStack, interests };

    // Show loading
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="spinner" style="width: 20px; height: 20px; border-width: 2px;"></div>';
    submitBtn.disabled = true;

    await new Promise(resolve => setTimeout(resolve, 500));

    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;

    goToStep(3);
}

async function handleLinkedInVerification() {
    showNotification('Connecting to LinkedIn...', 'info');

    // Simulate OAuth flow
    await new Promise(resolve => setTimeout(resolve, 2000));

    profileData.verification = {
        verified: true,
        method: 'linkedin',
        verifiedAt: new Date().toISOString()
    };

    showNotification('LinkedIn verification successful!', 'success');

    setTimeout(() => {
        goToStep(4);
    }, 1000);
}

async function handleXVerification() {
    showNotification('Connecting to X (Twitter)...', 'info');

    // Simulate OAuth flow
    await new Promise(resolve => setTimeout(resolve, 2000));

    profileData.verification = {
        verified: true,
        method: 'twitter',
        verifiedAt: new Date().toISOString()
    };

    showNotification('X verification successful!', 'success');

    setTimeout(() => {
        goToStep(4);
    }, 1000);
}

async function handlePreferencesSubmit(e) {
    e.preventDefault();

    const lookingFor = document.getElementById('lookingFor').value;
    const ageMin = document.getElementById('ageMin').value;
    const ageMax = document.getElementById('ageMax').value;
    const distance = document.getElementById('distance').value;

    // Get interested in
    const interestedInCheckboxes = document.querySelectorAll('input[name="interestedIn"]:checked');
    const interestedIn = Array.from(interestedInCheckboxes).map(cb => cb.value);

    if (interestedIn.length === 0) {
        showNotification('Please select at least one preference', 'error');
        return;
    }

    if (parseInt(ageMin) >= parseInt(ageMax)) {
        showNotification('Minimum age must be less than maximum age', 'error');
        return;
    }

    profileData.preferences = {
        lookingFor,
        interestedIn,
        ageRange: { min: ageMin, max: ageMax },
        distance
    };

    // Show loading
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="spinner" style="width: 20px; height: 20px; border-width: 2px;"></div>';
    submitBtn.disabled = true;

    // Save complete profile
    await saveProfile();

    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;

    // Redirect to dashboard
    showNotification('Profile setup complete! Welcome to TechConnect 🎉', 'success');

    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 2000);
}

async function saveProfile() {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Get existing user data
    const userData = JSON.parse(localStorage.getItem('techconnect_user'));

    // Merge with profile data
    const completeProfile = {
        ...userData,
        ...profileData.basicInfo,
        ...profileData.techProfile,
        verification: profileData.verification,
        preferences: profileData.preferences,
        profileComplete: true,
        completedAt: new Date().toISOString()
    };

    // Save to localStorage
    localStorage.setItem('techconnect_user', JSON.stringify(completeProfile));

    console.log('Profile saved:', completeProfile);
}

function goToStep(step) {
    // Hide all steps
    document.querySelectorAll('.setup-step').forEach(s => s.classList.add('hidden'));

    // Show target step
    document.getElementById(`step${step}`).classList.remove('hidden');

    // Update progress
    currentStep = step;
    document.getElementById('currentStep').textContent = step;

    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = `${(step / 4) * 100}%`;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    max-width: 400px;
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
    }, 4000);
}

// Add custom styles for form elements
const style = document.createElement('style');
style.textContent = `
  .tech-stack-option,
  .preference-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: var(--bg-tertiary);
    border: 2px solid var(--border-color);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: var(--transition-base);
    user-select: none;
  }
  
  .tech-stack-option:hover,
  .preference-option:hover {
    border-color: var(--primary-color);
    background: rgba(102, 126, 234, 0.1);
  }
  
  .tech-stack-option input:checked + span,
  .preference-option input:checked + span {
    color: var(--primary-color);
    font-weight: 600;
  }
  
  .tech-stack-option input,
  .preference-option input {
    accent-color: var(--primary-color);
  }
  
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    height: 6px;
    background: var(--bg-tertiary);
    border-radius: var(--radius-full);
    outline: none;
  }
  
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: var(--primary-gradient);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
  }
  
  input[type="range"]::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: var(--primary-gradient);
    border-radius: 50%;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
  }
  
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
