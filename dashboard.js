// Mock profile data with avatar colors for visual representation
const mockProfiles = [
  {
    id: 1,
    name: 'Sarah Chen',
    age: 28,
    role: 'Senior Frontend Developer',
    company: 'Google',
    location: 'San Francisco, CA',
    bio: 'Passionate about React and building beautiful UIs. Love hiking on weekends and exploring new coffee shops. Looking for someone who appreciates good design and bad puns.',
    techStack: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
    verified: true,
    distance: 3,
    avatarGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    interests: ['Hiking', 'Coffee', 'Design']
  },
  {
    id: 2,
    name: 'Alex Rodriguez',
    age: 31,
    role: 'ML Engineer',
    company: 'OpenAI',
    location: 'San Francisco, CA',
    bio: 'Building the future with AI/ML. When not training models, you can find me at tech meetups or playing guitar. Seeking someone curious about technology and life.',
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'AWS'],
    verified: true,
    distance: 5,
    avatarGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    interests: ['Guitar', 'AI', 'Meetups']
  },
  {
    id: 3,
    name: 'Emily Watson',
    age: 26,
    role: 'Full Stack Developer',
    company: 'Stripe',
    location: 'San Francisco, CA',
    bio: 'Code by day, game by night. Love building scalable systems and playing competitive games. Looking for a player 2 in life and gaming!',
    techStack: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    verified: true,
    distance: 7,
    avatarGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    interests: ['Gaming', 'Esports', 'Anime']
  },
  {
    id: 4,
    name: 'Marcus Johnson',
    age: 29,
    role: 'DevOps Engineer',
    company: 'Netflix',
    location: 'Los Gatos, CA',
    bio: 'Keeping the cloud running smooth. Passionate about automation, containers, and reliability. Outside work, I enjoy rock climbing and craft beer.',
    techStack: ['Kubernetes', 'Docker', 'AWS', 'Python'],
    verified: true,
    distance: 12,
    avatarGradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    interests: ['Rock Climbing', 'Beer', 'DevOps']
  },
  {
    id: 5,
    name: 'Priya Sharma',
    age: 27,
    role: 'Product Manager',
    company: 'Meta',
    location: 'Menlo Park, CA',
    bio: 'Bridging tech and business. Love data-driven decisions and user-centric design. Foodie, traveler, and always up for a good debate about product strategy.',
    techStack: ['Product Management', 'Analytics', 'Figma', 'SQL'],
    verified: true,
    distance: 8,
    avatarGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    interests: ['Travel', 'Food', 'Strategy']
  },
  {
    id: 6,
    name: 'Jordan Kim',
    age: 30,
    role: 'iOS Developer',
    company: 'Apple',
    location: 'Cupertino, CA',
    bio: 'Building apps that people love. SwiftUI enthusiast and accessibility advocate. Looking for someone to share boba runs and weekend coding sessions.',
    techStack: ['Swift', 'SwiftUI', 'Objective-C', 'Xcode'],
    verified: true,
    distance: 15,
    avatarGradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    interests: ['Boba', 'iOS', 'Photography']
  },
  {
    id: 7,
    name: 'Taylor Brooks',
    age: 25,
    role: 'UI/UX Designer',
    company: 'Figma',
    location: 'San Francisco, CA',
    bio: 'Designing experiences that delight. Obsessed with micro-interactions and color theory. Seeking a fellow creative who appreciates beautiful things.',
    techStack: ['Figma', 'Sketch', 'Adobe XD', 'Prototyping'],
    verified: true,
    distance: 4,
    avatarGradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    interests: ['Art', 'Museums', 'Typography']
  },
  {
    id: 8,
    name: 'Ryan Martinez',
    age: 33,
    role: 'Security Engineer',
    company: 'Cloudflare',
    location: 'San Francisco, CA',
    bio: 'Keeping the internet safe, one vulnerability at a time. CTF player and open source contributor. Looking for someone with a curious mind.',
    techStack: ['Security', 'Go', 'Rust', 'Linux'],
    verified: true,
    distance: 6,
    avatarGradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    interests: ['CTF', 'Open Source', 'Podcasts']
  },
  {
    id: 9,
    name: 'Mia Thompson',
    age: 28,
    role: 'Data Scientist',
    company: 'Spotify',
    location: 'San Francisco, CA',
    bio: 'Finding patterns in chaos. Love using data to tell stories and build recommendation systems. Music lover seeking someone to share playlists with.',
    techStack: ['Python', 'R', 'SQL', 'Machine Learning'],
    verified: true,
    distance: 9,
    avatarGradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
    interests: ['Music', 'Data', 'Concerts']
  },
  {
    id: 10,
    name: 'Chris Anderson',
    age: 32,
    role: 'Backend Engineer',
    company: 'Uber',
    location: 'San Francisco, CA',
    bio: 'Building systems at scale. Java enthusiast who secretly loves functional programming. Looking for someone to explore the city and debate language choices.',
    techStack: ['Java', 'Scala', 'Kafka', 'Microservices'],
    verified: true,
    distance: 11,
    avatarGradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    interests: ['City Exploration', 'Architecture', 'Coffee']
  }
];

let currentProfileIndex = 0;
let cardStack = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  loadProfiles();
  setupEventListeners();
});

function checkAuth() {
  const userData = localStorage.getItem('techconnect_user');
  if (!userData) {
    window.location.href = 'index.html';
    return;
  }

  const user = JSON.parse(userData);
  if (!user.profileComplete) {
    window.location.href = 'profile-setup.html';
  }
}

async function loadProfiles() {
  const cardStackContainer = document.getElementById('cardStack');

  // Show loading
  cardStackContainer.innerHTML = '<div class="flex-center" style="min-height: 600px;"><div class="spinner"></div></div>';

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Clear loading
  cardStackContainer.innerHTML = '';

  // Create cards
  mockProfiles.forEach((profile, index) => {
    const card = createProfileCard(profile, index);
    cardStackContainer.appendChild(card);
    cardStack.push(card);
  });

  // Show top card
  if (cardStack.length > 0) {
    cardStack[0].style.display = 'block';
    setupCardInteraction(cardStack[0], mockProfiles[0]);
  }
}

function createProfileCard(profile, index) {
  const card = document.createElement('div');
  card.className = 'profile-card';
  card.dataset.profileId = profile.id;
  card.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--bg-secondary);
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    cursor: grab;
    display: none;
    z-index: ${mockProfiles.length - index};
    border: 3px solid transparent;
  `;

  card.innerHTML = `
    <!-- Like/Nope Indicators -->
    <div class="swipe-indicator like-indicator" style="position: absolute; top: 30px; left: 30px; z-index: 10; opacity: 0; transform: rotate(-20deg); padding: 0.75rem 1.5rem; border: 4px solid var(--success-color); border-radius: var(--radius-md); color: var(--success-color); font-size: 2rem; font-weight: 800; text-transform: uppercase; transition: opacity 0.2s ease;">
      LIKE
    </div>
    <div class="swipe-indicator nope-indicator" style="position: absolute; top: 30px; right: 30px; z-index: 10; opacity: 0; transform: rotate(20deg); padding: 0.75rem 1.5rem; border: 4px solid var(--warning-color); border-radius: var(--radius-md); color: var(--warning-color); font-size: 2rem; font-weight: 800; text-transform: uppercase; transition: opacity 0.2s ease;">
      NOPE
    </div>
    
    <!-- Profile Image Area -->
    <div style="position: relative; height: 450px; background: ${profile.avatarGradient || 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))'}; overflow: hidden;">
      <!-- Avatar with Initial -->
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -60%); width: 160px; height: 160px; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 4rem; font-weight: 800; color: white; border: 4px solid rgba(255,255,255,0.3);">
        ${profile.name.split(' ').map(n => n[0]).join('')}
      </div>
      
      <!-- Gradient Overlay -->
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8) 100%);"></div>
      
      <!-- Profile Info Overlay -->
      <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 2rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
          <h2 style="margin: 0; font-size: 2rem;">${profile.name}, ${profile.age}</h2>
          ${profile.verified ? '<i class="fas fa-check-circle" style="color: var(--accent-color); font-size: 1.5rem;"></i>' : ''}
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
          <i class="fas fa-briefcase" style="color: var(--text-secondary);"></i>
          <span style="color: var(--text-secondary);">${profile.role} at ${profile.company}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <i class="fas fa-map-marker-alt" style="color: var(--text-secondary);"></i>
          <span style="color: var(--text-secondary);">${profile.location} • ${profile.distance} miles away</span>
        </div>
      </div>
      
      <!-- Info Button -->
      <button class="info-btn" style="position: absolute; bottom: 2rem; right: 2rem; width: 50px; height: 50px; border-radius: 50%; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border: 2px solid rgba(255,255,255,0.3); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: var(--transition-base);">
        <i class="fas fa-chevron-down" style="font-size: 1.25rem; transition: transform 0.3s ease;"></i>
      </button>
    </div>
    
    <!-- Expandable Details Section -->
    <div class="card-details" style="padding: 0; max-height: 0; overflow: hidden; transition: max-height 0.3s ease, padding 0.3s ease;">
      <div style="padding: 2rem;">
        <!-- About -->
        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.125rem; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-user" style="color: var(--primary-color);"></i> About
          </h3>
          <p style="color: var(--text-secondary); line-height: 1.7;">${profile.bio}</p>
        </div>
        
        <!-- Interests -->
        ${profile.interests ? `
        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.125rem; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-heart" style="color: var(--warning-color);"></i> Interests
          </h3>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${profile.interests.map(interest => `
              <span style="background: rgba(245, 87, 108, 0.2); border: 1px solid var(--warning-color); color: var(--warning-color); padding: 0.375rem 0.875rem; border-radius: var(--radius-full); font-size: 0.875rem;">${interest}</span>
            `).join('')}
          </div>
        </div>
        ` : ''}
        
        <!-- Tech Stack -->
        <div>
          <h3 style="font-size: 1.125rem; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-code" style="color: var(--primary-color);"></i> Tech Stack
          </h3>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${profile.techStack.map(tech => `
              <span class="badge badge-primary">${tech}</span>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  return card;
}

function setupCardInteraction(card, profile) {
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  const infoBtn = card.querySelector('.info-btn');
  const cardDetails = card.querySelector('.card-details');
  let detailsExpanded = false;

  infoBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    detailsExpanded = !detailsExpanded;
    cardDetails.style.maxHeight = detailsExpanded ? '500px' : '0';
    infoBtn.style.transform = detailsExpanded ? 'rotate(180deg)' : 'rotate(0)';
  });

  card.addEventListener('mousedown', handleStart);
  card.addEventListener('touchstart', handleStart);

  function handleStart(e) {
    if (e.target.closest('.info-btn') || e.target.closest('.card-details')) return;

    isDragging = true;
    card.style.cursor = 'grabbing';
    startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchend', handleEnd);
  }

  function handleMove(e) {
    if (!isDragging) return;

    currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const deltaX = currentX - startX;
    const rotation = deltaX / 20;

    card.style.transform = `translateX(${deltaX}px) rotate(${rotation}deg)`;

    // Get indicators
    const likeIndicator = card.querySelector('.like-indicator');
    const nopeIndicator = card.querySelector('.nope-indicator');

    // Show like/pass indicators based on swipe direction
    if (deltaX > 50) {
      card.style.borderColor = 'var(--success-color)';
      if (likeIndicator) likeIndicator.style.opacity = Math.min((deltaX - 50) / 100, 1);
      if (nopeIndicator) nopeIndicator.style.opacity = 0;
    } else if (deltaX < -50) {
      card.style.borderColor = 'var(--warning-color)';
      if (nopeIndicator) nopeIndicator.style.opacity = Math.min((-deltaX - 50) / 100, 1);
      if (likeIndicator) likeIndicator.style.opacity = 0;
    } else {
      card.style.borderColor = 'transparent';
      if (likeIndicator) likeIndicator.style.opacity = 0;
      if (nopeIndicator) nopeIndicator.style.opacity = 0;
    }
  }

  function handleEnd() {
    if (!isDragging) return;

    isDragging = false;
    card.style.cursor = 'grab';

    const deltaX = currentX - startX;

    if (Math.abs(deltaX) > 100) {
      // Swipe action
      if (deltaX > 0) {
        handleLike(profile);
      } else {
        handlePass(profile);
      }
      removeCard(card, deltaX > 0);
    } else {
      // Reset card
      card.style.transform = '';
      card.style.borderColor = 'transparent';
      // Reset indicators
      const likeIndicator = card.querySelector('.like-indicator');
      const nopeIndicator = card.querySelector('.nope-indicator');
      if (likeIndicator) likeIndicator.style.opacity = 0;
      if (nopeIndicator) nopeIndicator.style.opacity = 0;
    }

    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('touchmove', handleMove);
    document.removeEventListener('mouseup', handleEnd);
    document.removeEventListener('touchend', handleEnd);
  }
}

function setupEventListeners() {
  document.getElementById('likeBtn').addEventListener('click', () => {
    if (currentProfileIndex < mockProfiles.length) {
      handleLike(mockProfiles[currentProfileIndex]);
      removeCard(cardStack[currentProfileIndex], true);
    }
  });

  document.getElementById('passBtn').addEventListener('click', () => {
    if (currentProfileIndex < mockProfiles.length) {
      handlePass(mockProfiles[currentProfileIndex]);
      removeCard(cardStack[currentProfileIndex], false);
    }
  });

  document.getElementById('superLikeBtn').addEventListener('click', () => {
    if (currentProfileIndex < mockProfiles.length) {
      handleSuperLike(mockProfiles[currentProfileIndex]);
      removeCard(cardStack[currentProfileIndex], true);
    }
  });

  document.getElementById('keepSwipingBtn').addEventListener('click', () => {
    closeMatchModal();
  });

  document.getElementById('sendMessageBtn').addEventListener('click', () => {
    window.location.href = 'messages.html';
  });
}

function handleLike(profile) {
  console.log('Liked:', profile.name);

  // Simulate match (30% chance)
  if (Math.random() > 0.7) {
    showMatchModal(profile);
  } else {
    showNotification(`You liked ${profile.name}!`, 'success');
  }
}

function handlePass(profile) {
  console.log('Passed:', profile.name);
  showNotification('Passed', 'info');
}

function handleSuperLike(profile) {
  console.log('Super liked:', profile.name);
  showNotification(`Super liked ${profile.name}! 🌟`, 'success');

  // Higher chance of match with super like
  if (Math.random() > 0.5) {
    setTimeout(() => showMatchModal(profile), 500);
  }
}

function removeCard(card, isLike) {
  const direction = isLike ? 1 : -1;
  card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
  card.style.transform = `translateX(${direction * 1000}px) rotate(${direction * 30}deg)`;
  card.style.opacity = '0';

  setTimeout(() => {
    card.remove();
    currentProfileIndex++;

    if (currentProfileIndex < cardStack.length) {
      cardStack[currentProfileIndex].style.display = 'block';
      setupCardInteraction(cardStack[currentProfileIndex], mockProfiles[currentProfileIndex]);
    } else {
      showNoMoreCards();
    }
  }, 300);
}

function showNoMoreCards() {
  document.getElementById('cardStack').style.display = 'none';
  document.getElementById('actionButtons').style.display = 'none';
  document.getElementById('noMoreCards').classList.remove('hidden');
}

function showMatchModal(profile) {
  const modal = document.getElementById('matchModal');
  document.getElementById('matchName').textContent = profile.name;

  // Set avatars (using placeholder colors)
  const userAvatar = document.getElementById('userAvatar');
  const matchAvatar = document.getElementById('matchAvatar');

  userAvatar.src = 'data:image/svg+xml,' + encodeURIComponent(`
    <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#667eea"/>
      <text x="60" y="75" font-size="48" fill="white" text-anchor="middle" font-family="Arial">You</text>
    </svg>
  `);

  matchAvatar.src = 'data:image/svg+xml,' + encodeURIComponent(`
    <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#764ba2"/>
      <text x="60" y="75" font-size="48" fill="white" text-anchor="middle" font-family="Arial">${profile.name[0]}</text>
    </svg>
  `);

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeMatchModal() {
  const modal = document.getElementById('matchModal');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
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
  
  .profile-card {
    transition: transform 0.1s ease;
  }
  
  .info-btn:hover {
    background: rgba(255,255,255,0.3) !important;
    transform: scale(1.1);
  }
`;
document.head.appendChild(style);
