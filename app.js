// State Management
const state = {
  currentUser: null,
  isAuthenticated: false,
  matches: [],
  messages: []
};

// DOM Elements
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const heroSignupBtn = document.getElementById('heroSignupBtn');
const ctaSignupBtn = document.getElementById('ctaSignupBtn');
const finalCtaBtn = document.getElementById('finalCtaBtn');
const closeLoginModal = document.getElementById('closeLoginModal');
const closeSignupModal = document.getElementById('closeSignupModal');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const learnMoreBtn = document.getElementById('learnMoreBtn');

// Modal Functions
function openModal(modal) {
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Event Listeners - Modal Controls
loginBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  openModal(loginModal);
});

signupBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  openModal(signupModal);
});

heroSignupBtn?.addEventListener('click', () => {
  openModal(signupModal);
});

ctaSignupBtn?.addEventListener('click', () => {
  openModal(signupModal);
});

finalCtaBtn?.addEventListener('click', () => {
  openModal(signupModal);
});

closeLoginModal?.addEventListener('click', () => {
  closeModal(loginModal);
});

closeSignupModal?.addEventListener('click', () => {
  closeModal(signupModal);
});

switchToSignup?.addEventListener('click', (e) => {
  e.preventDefault();
  closeModal(loginModal);
  openModal(signupModal);
});

switchToLogin?.addEventListener('click', (e) => {
  e.preventDefault();
  closeModal(signupModal);
  openModal(loginModal);
});

// Close modal when clicking outside
loginModal?.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    closeModal(loginModal);
  }
});

signupModal?.addEventListener('click', (e) => {
  if (e.target === signupModal) {
    closeModal(signupModal);
  }
});

// Learn More - Smooth Scroll
learnMoreBtn?.addEventListener('click', () => {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});

// Form Submissions
loginForm?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const rememberMe = document.getElementById('rememberMe').checked;

  // Show loading state
  const submitBtn = loginForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<div class="spinner" style="width: 20px; height: 20px; border-width: 2px;"></div>';
  submitBtn.disabled = true;

  // Simulate API call for initial credentials check
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Close login modal and show X Auth Modal
  closeModal(loginModal);

  // Create and show X Auth Modal
  const xAuthModal = document.createElement('div');
  xAuthModal.className = 'modal-overlay';
  xAuthModal.id = 'xAuthModal';
  xAuthModal.innerHTML = `
    <div class="modal" style="max-width: 400px; text-align: center;">
      <div class="modal-body" style="padding: 3rem 2rem;">
        <div style="font-size: 3rem; margin-bottom: 1.5rem; color: #1DA1F2;">
            <i class="fab fa-x-twitter"></i>
        </div>
        <h2 style="margin-bottom: 1rem;">X Authorization Required</h2>
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">
            To ensure the authenticity of our community, we require all users to verify their identity via X (formerly Twitter) for every login.
        </p>
        <button id="authorizeXBtn" class="btn btn-primary" style="width: 100%; background: #000; color: #fff;">
            <i class="fab fa-x-twitter"></i> Authorize with X
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(xAuthModal);

  // Handle X Auth
  const authBtn = document.getElementById('authorizeXBtn');
  authBtn.addEventListener('click', async () => {
    const originalBtnText = authBtn.innerHTML;
    authBtn.innerHTML = '<div class="spinner" style="width: 20px; height: 20px; border-width: 2px; border-color: #fff; border-top-color: transparent;"></div> Authorizing...';
    authBtn.disabled = true;

    // Simulate X Auth delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // User Data
    const userData = {
      email,
      name: email.split('@')[0],
      verified: true // Verified via X
    };

    localStorage.setItem('techconnect_user', JSON.stringify(userData));
    if (rememberMe) {
      localStorage.setItem('techconnect_remember', 'true');
    }

    state.currentUser = userData;
    state.isAuthenticated = true;

    // Remove modal
    xAuthModal.remove();

    // Show success
    showNotification('X Authorization Successful! Welcome back.', 'success');

    // Redirect
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 1000);
  });
});

signupForm?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const role = document.getElementById('signupRole').value;
  const agreeTerms = document.getElementById('agreeTerms').checked;

  if (!agreeTerms) {
    showNotification('Please agree to the Terms of Service and Privacy Policy', 'error');
    return;
  }

  // Show loading state
  const submitBtn = signupForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<div class="spinner" style="width: 20px; height: 20px; border-width: 2px;"></div>';
  submitBtn.disabled = true;

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Store user data
  const userData = {
    name,
    email,
    role,
    verified: false,
    createdAt: new Date().toISOString()
  };

  localStorage.setItem('techconnect_user', JSON.stringify(userData));
  state.currentUser = userData;
  state.isAuthenticated = true;

  // Reset button
  submitBtn.innerHTML = originalText;
  submitBtn.disabled = false;

  // Close modal
  closeModal(signupModal);

  // Show success message
  showNotification('Account created successfully! Redirecting to profile setup...', 'success');

  // Redirect to profile setup
  setTimeout(() => {
    window.location.href = 'profile-setup.html';
  }, 1500);
});

// Social Login Handlers
document.getElementById('linkedinSignup')?.addEventListener('click', () => {
  showNotification('LinkedIn verification will be implemented soon!', 'info');
  // In a real app, this would redirect to LinkedIn OAuth
  // window.location.href = '/auth/linkedin';
});

document.getElementById('xSignup')?.addEventListener('click', () => {
  showNotification('X (Twitter) verification will be implemented soon!', 'info');
  // In a real app, this would redirect to X OAuth
  // window.location.href = '/auth/twitter';
});

// Notification System
function showNotification(message, type = 'info') {
  // Remove existing notification if any
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

  // Auto remove after 4 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}

// Check if user is already logged in
function checkAuth() {
  const userData = localStorage.getItem('techconnect_user');
  if (userData) {
    state.currentUser = JSON.parse(userData);
    state.isAuthenticated = true;

    // Update UI if on landing page
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
      updateNavForAuthUser();
    }
  }
}

function updateNavForAuthUser() {
  const navMenu = document.querySelector('.navbar-menu');
  if (navMenu && state.isAuthenticated) {
    navMenu.innerHTML = `
      <li><a href="dashboard.html" class="navbar-link">Dashboard</a></li>
      <li><a href="matches.html" class="navbar-link">Matches</a></li>
      <li><a href="messages.html" class="navbar-link">Messages</a></li>
      <li><a href="profile.html" class="btn btn-ghost">Profile</a></li>
      <li><a href="#" class="btn btn-primary" id="logoutBtn">Logout</a></li>
    `;

    document.getElementById('logoutBtn')?.addEventListener('click', (e) => {
      e.preventDefault();
      logout();
    });
  }
}

function logout() {
  localStorage.removeItem('techconnect_user');
  localStorage.removeItem('techconnect_remember');
  state.currentUser = null;
  state.isAuthenticated = false;
  showNotification('Logged out successfully', 'success');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1000);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.style.background = 'rgba(10, 10, 15, 0.95)';
    navbar.style.boxShadow = 'var(--shadow-md)';
  } else {
    navbar.style.background = 'rgba(10, 10, 15, 0.8)';
    navbar.style.boxShadow = 'none';
  }

  lastScroll = currentScroll;
});

// Initialize
checkAuth();

// Add CSS for notification animation
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

console.log('🚀 TechConnect initialized successfully!');
