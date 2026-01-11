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
  },
  {
    id: 11,
    name: 'Nina Patel',
    age: 29,
    role: 'Blockchain Developer',
    company: 'Coinbase',
    location: 'San Francisco, CA',
    bio: 'Decentralizing the future. Passionate about Web3, smart contracts, and cryptography. Looking for someone who understands HODL isn\'t just a typo.',
    techStack: ['Solidity', 'Rust', 'Web3.js', 'Ethereum'],
    verified: true,
    distance: 10,
    avatarGradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
    interests: ['Crypto', 'DeFi', 'Snowboarding']
  },
  {
    id: 12,
    name: 'David Lee',
    age: 27,
    role: 'Game Developer',
    company: 'Unity',
    location: 'San Francisco, CA',
    bio: 'Creating immersive worlds. Love physics simulations and shaders. Looking for a player 2 to co-op through life.',
    techStack: ['C#', 'Unity', 'C++', 'OpenGL'],
    verified: true,
    distance: 8,
    avatarGradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    interests: ['Gaming', 'VR', 'Sci-Fi']
  },
  {
    id: 13,
    name: 'Sophie Martin',
    age: 30,
    role: 'SRE',
    company: 'Datadog',
    location: 'San Francisco, CA',
    bio: 'Keeping the lights on. Obsessed with uptime and observability. Dealing with incidents is my day job, hoping our connection won\'t be one.',
    techStack: ['Go', 'Kubernetes', 'Terraform', 'Datadog'],
    verified: true,
    distance: 14,
    avatarGradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    interests: ['Hiking', 'Photography', 'Gardening']
  },
  {
    id: 14,
    name: 'James Wilson',
    age: 34,
    role: 'Engineering Manager',
    company: 'LinkedIn',
    location: 'Sunnyvale, CA',
    bio: 'People over code. Love mentoring, building teams, and solving complex organizational problems. Looking for a partner to share life\'s roadmap.',
    techStack: ['Leadership', 'Management', 'Agile', 'Strategy'],
    verified: true,
    distance: 20,
    avatarGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    interests: ['Leadership', 'Mentoring', 'Cooking']
  },
  {
    id: 15,
    name: 'Elena Popova',
    age: 26,
    role: 'Android Developer',
    company: 'Square',
    location: 'San Francisco, CA',
    bio: 'Mobile-first mindset. Kotlin enthusiast and UI perfectionist. Love salsa dancing and spicy food.',
    techStack: ['Kotlin', 'Android', 'Compose', 'Java'],
    verified: true,
    distance: 5,
    avatarGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    interests: ['Dancing', 'Travel', 'Food']
  },
  {
    id: 16,
    name: 'Michael Chang',
    age: 28,
    role: 'Frontend Engineer',
    company: 'Airbnb',
    location: 'San Francisco, CA',
    bio: 'Crafting pixel-perfect experiences. Accessibility advocate and design system nerd. Looking for someone to explore art galleries with.',
    techStack: ['React', 'TypeScript', 'CSS', 'A11y'],
    verified: true,
    distance: 2,
    avatarGradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    interests: ['Art', 'Design', 'Architecture']
  },
  {
    id: 17,
    name: 'Rachel Green',
    age: 25,
    role: 'QA Engineer',
    company: 'Zoom',
    location: 'San Jose, CA',
    bio: 'Breaking things so you don\'t have to. Detail-oriented and process-driven. Love puzzles and escape rooms.',
    techStack: ['Selenium', 'Cypress', 'Python', 'Jenkins'],
    verified: true,
    distance: 18,
    avatarGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    interests: ['Puzzles', 'Escape Rooms', 'Reading']
  },
  {
    id: 18,
    name: 'Thomas Anderson',
    age: 31,
    role: 'Software Architect',
    company: 'Oracle',
    location: 'Redwood City, CA',
    bio: 'Seeing the matrix. Designing scalable and resilient systems. Love philosophy and martial arts.',
    techStack: ['Java', 'Cloud', 'Microservices', 'System Design'],
    verified: true,
    distance: 15,
    avatarGradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    interests: ['Martial Arts', 'Philosophy', 'Sci-Fi']
  },
  {
    id: 19,
    name: 'Jessica Lee',
    age: 27,
    role: 'UX Researcher',
    company: 'Pinterest',
    location: 'San Francisco, CA',
    bio: 'Understanding the "why". Love talking to users and uncovering insights. Empathetic listener seeking a deep connection.',
    techStack: ['User Research', 'Usability Testing', 'Psychology', 'Figma'],
    verified: true,
    distance: 6,
    avatarGradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    interests: ['Psychology', 'People Watching', 'Yoga']
  },
  {
    id: 20,
    name: 'Kevin Park',
    age: 29,
    role: 'Full Stack Engineer',
    company: 'Notion',
    location: 'San Francisco, CA',
    bio: 'Building tools for thought. Productivity nerd and keyboard enthusiast. Looking for someone to optimize life with.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    verified: true,
    distance: 4,
    avatarGradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    interests: ['Keyboards', 'Productivity', 'Cycling']
  },
  {
    id: 21,
    name: 'Amara Singh',
    age: 26,
    role: 'Developer Advocate',
    company: 'Vercel',
    location: 'Remote / SF',
    bio: 'Building community and content. Love public speaking and teaching. Extrovert looking for an adventure buddy.',
    techStack: ['Next.js', 'React', 'Content', 'Community'],
    verified: true,
    distance: 1,
    avatarGradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
    interests: ['Speaking', 'Travel', 'Blogging']
  },
  {
    id: 22,
    name: 'Daniel Cohen',
    age: 32,
    role: 'Data Engineer',
    company: 'Snowflake',
    location: 'San Mateo, CA',
    bio: 'Pipelines and warehouses. Love clean data and efficient queries. avid runner and coffee snob.',
    techStack: ['Python', 'SQL', 'Spark', 'Airflow'],
    verified: true,
    distance: 20,
    avatarGradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    interests: ['Running', 'Coffee', 'Hiking']
  },
  {
    id: 23,
    name: 'Grace Kim',
    age: 28,
    role: 'Cybersecurity Analyst',
    company: 'Palo Alto Networks',
    location: 'Santa Clara, CA',
    bio: 'Defending the network. Paranoid by trade, optimist by nature. Love mystery novels and baking.',
    techStack: ['Security', 'Network', 'Forensics', 'Python'],
    verified: true,
    distance: 25,
    avatarGradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
    interests: ['Reading', 'Baking', 'Mystery']
  },
  {
    id: 24,
    name: 'Samir Patel',
    age: 30,
    role: 'Product Designer',
    company: 'DoorDash',
    location: 'San Francisco, CA',
    bio: 'Solving problems with design. Love clean lines and intuitive interfaces. Foodie looking for a dining companion.',
    techStack: ['Figma', 'Prototyping', 'Design Systems', 'UI/UX'],
    verified: true,
    distance: 5,
    avatarGradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    interests: ['Food', 'Design', 'Travel']
  }
];

let currentProfileIndex = 0;
let cardStack = [];
let isDraggingCard = false; // Global flag to prevent multiple drags

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
}

async function loadProfiles() {
  const cardStackContainer = document.getElementById('cardStack');

  // Show loading
  cardStackContainer.innerHTML = '<div class="flex-center" style="min-height: 600px;"><div class="spinner"></div></div>';

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 800));

  // Clear loading
  cardStackContainer.innerHTML = '';

  // Create cards in reverse order so first index is on top visually via appendChild
  // But we want index 0 to be top. 
  // z-index should be higher for lower index.
  mockProfiles.forEach((profile, index) => {
    const card = createProfileCard(profile, index);
    cardStackContainer.appendChild(card);
    cardStack.push(card);
  });

  // Make top card visible
  updateVisibleCards();
}

function updateVisibleCards() {
  const cardStackContainer = document.getElementById('cardStack');

  // Hide all
  cardStack.forEach(c => c.style.display = 'none');

  // Show current
  if (currentProfileIndex < cardStack.length) {
    const currentCard = cardStack[currentProfileIndex];
    currentCard.style.display = 'block';
    currentCard.style.zIndex = '100';
    setupCardInteraction(currentCard, mockProfiles[currentProfileIndex]);

    // Pre-load next card behind it for smoothness
    if (currentProfileIndex + 1 < cardStack.length) {
      const nextCard = cardStack[currentProfileIndex + 1];
      nextCard.style.display = 'block';
      nextCard.style.zIndex = '90';
      nextCard.style.transform = 'scale(0.95) translateY(10px)';
      nextCard.style.opacity = '0.5';
    }
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
    border: 3px solid transparent;
    transform-origin: 50% 100%;
    will-change: transform, opacity;
  `;

  card.innerHTML = `
    <!-- Like/Nope Indicators -->
    <div class="swipe-indicator like-indicator" style="position: absolute; top: 40px; left: 20px; z-index: 10; opacity: 0; transform: rotate(-20deg); padding: 0.5rem 1rem; border: 4px solid var(--success-color); border-radius: var(--radius-md); color: var(--success-color); font-size: 2rem; font-weight: 800; text-transform: uppercase; transition: opacity 0.1s ease;">
      LIKE
    </div>
    <div class="swipe-indicator nope-indicator" style="position: absolute; top: 40px; right: 20px; z-index: 10; opacity: 0; transform: rotate(20deg); padding: 0.5rem 1rem; border: 4px solid var(--warning-color); border-radius: var(--radius-md); color: var(--warning-color); font-size: 2rem; font-weight: 800; text-transform: uppercase; transition: opacity 0.1s ease;">
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
          ${profile.verified ? '<i class="fas fa-check-circle" style="color: var(--accent-color); font-size: 1.5rem;" title="Verified Profile"></i>' : ''}
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
      <button class="info-btn" style="position: absolute; bottom: 2rem; right: 2rem; width: 50px; height: 50px; border-radius: 50%; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border: 2px solid rgba(255,255,255,0.3); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: var(--transition-base); z-index: 20;">
        <i class="fas fa-chevron-down" style="font-size: 1.25rem; transition: transform 0.3s ease;"></i>
      </button>
    </div>
    
    <!-- Expandable Details Section -->
    <div class="card-details" style="padding: 0; max-height: 0; overflow: hidden; transition: max-height 0.3s ease, padding 0.3s ease; background: var(--bg-tertiary);">
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
  if (card.dataset.interactionsSetup === 'true') return;

  let startX = 0;
  let currentX = 0;
  let localIsDragging = false;

  const infoBtn = card.querySelector('.info-btn');
  const cardDetails = card.querySelector('.card-details');
  let detailsExpanded = false;

  // Info Button Toggle
  infoBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Stop bubbling to drag handlers
    e.preventDefault();
    detailsExpanded = !detailsExpanded;
    cardDetails.style.maxHeight = detailsExpanded ? '500px' : '0';
    infoBtn.querySelector('i').style.transform = detailsExpanded ? 'rotate(180deg)' : 'rotate(0)';
  });

  // Mouse/Touch Events
  card.addEventListener('mousedown', handleStart);
  card.addEventListener('touchstart', handleStart);

  function handleStart(e) {
    // Stop if clicking buttons
    if (e.target.closest('.info-btn') || e.target.closest('.card-details')) return;

    // Prevent default only on touch to stop scrolling, but let mouse click work
    if (e.type === 'touchstart') e.preventDefault();

    localIsDragging = true;
    isDraggingCard = true;
    card.style.cursor = 'grabbing';
    card.style.transition = 'none'; // Disable transition for direct 1:1 movement

    startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchend', handleEnd);
  }

  function handleMove(e) {
    if (!localIsDragging) return;
    if (e.type === 'touchmove') e.preventDefault(); // Prevent scrolling

    currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const deltaX = currentX - startX;
    const rotation = deltaX * 0.1; // Smoother rotation

    card.style.transform = `translateX(${deltaX}px) rotate(${rotation}deg)`;

    // Get indicators
    const likeIndicator = card.querySelector('.like-indicator');
    const nopeIndicator = card.querySelector('.nope-indicator');

    // Show indicators and border
    if (deltaX > 20) {
      const opacity = Math.min((deltaX - 20) / 100, 1);
      if (likeIndicator) likeIndicator.style.opacity = opacity;
      if (nopeIndicator) nopeIndicator.style.opacity = 0;
      card.style.borderColor = `rgba(67, 233, 123, ${opacity})`;
    } else if (deltaX < -20) {
      const opacity = Math.min((-deltaX - 20) / 100, 1);
      if (nopeIndicator) nopeIndicator.style.opacity = opacity;
      if (likeIndicator) likeIndicator.style.opacity = 0;
      card.style.borderColor = `rgba(245, 87, 108, ${opacity})`;
    } else {
      if (likeIndicator) likeIndicator.style.opacity = 0;
      if (nopeIndicator) nopeIndicator.style.opacity = 0;
      card.style.borderColor = 'transparent';
    }
  }

  function handleEnd() {
    if (!localIsDragging) return;

    localIsDragging = false;
    isDraggingCard = false;
    card.style.cursor = 'grab';
    card.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'; // Add springy return

    const deltaX = currentX - startX;

    // Threshold to swipe
    if (Math.abs(deltaX) > 120) {
      const isLike = deltaX > 0;
      if (isLike) {
        handleLike(profile);
      } else {
        handlePass(profile);
      }
      removeCard(card, isLike);
    } else {
      // Reset position
      card.style.transform = '';
      card.style.borderColor = 'transparent';

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

  card.dataset.interactionsSetup = 'true';
}

function setupEventListeners() {
  document.getElementById('likeBtn').addEventListener('click', () => {
    if (currentProfileIndex < mockProfiles.length && !isDraggingCard) {
      handleLike(mockProfiles[currentProfileIndex]);
      removeCard(cardStack[currentProfileIndex], true);
    }
  });

  document.getElementById('passBtn').addEventListener('click', () => {
    if (currentProfileIndex < mockProfiles.length && !isDraggingCard) {
      handlePass(mockProfiles[currentProfileIndex]);
      removeCard(cardStack[currentProfileIndex], false);
    }
  });

  document.getElementById('superLikeBtn').addEventListener('click', () => {
    if (currentProfileIndex < mockProfiles.length && !isDraggingCard) {
      handleSuperLike(mockProfiles[currentProfileIndex]);
      removeCard(cardStack[currentProfileIndex], true); // Treat as like
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

  // Simulate match (40% chance)
  if (Math.random() > 0.6) {
    showMatchModal(profile);
  } else {
    showNotification(`Liked ${profile.name}`, 'success');
  }

  // Track stats (mock)
  updateStats('likes');
}

function handlePass(profile) {
  console.log('Passed:', profile.name);
  // showNotification('Passed', 'info'); // Too noisy
}

function handleSuperLike(profile) {
  console.log('Super liked:', profile.name);
  showNotification(`Super Liked ${profile.name}! 🌟`, 'success');

  // Higher probability match
  if (Math.random() > 0.3) {
    setTimeout(() => showMatchModal(profile), 800);
  }
}

function removeCard(card, isLike) {
  const direction = isLike ? 1 : -1;

  // We already set transition in handleEnd, but if triggered by buttons we need it here
  card.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.5s ease';
  card.style.transform = `translateX(${direction * window.innerWidth}px) rotate(${direction * 45}deg)`;
  card.style.opacity = '0';

  setTimeout(() => {
    card.style.display = 'none'; // Hide it completely

    currentProfileIndex++;

    if (currentProfileIndex < cardStack.length) {
      updateVisibleCards();
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
      <text x="60" y="75" font-size="48" fill="white" text-anchor="middle" font-family="Arial">Me</text>
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

  // Confetti effect could go here
  updateStats('matches');
}

function closeMatchModal() {
  const modal = document.getElementById('matchModal');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

function updateStats(type) {
  // This would typically communicate with a backend or update localStorage
  // For now we just animate the counters if they exist
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
