// Mock conversations data
const mockConversations = [
    {
        id: 1,
        name: 'Sarah Chen',
        role: 'Senior Frontend Developer',
        avatar: 'SC',
        lastMessage: 'That sounds amazing! When are you free?',
        timestamp: '2m ago',
        unread: 2,
        online: true,
        messages: [
            { id: 1, sender: 'them', text: 'Hey! I saw you work with React too! 👋', timestamp: '10:30 AM' },
            { id: 2, sender: 'me', text: 'Yes! I love React. Been using it for about 3 years now.', timestamp: '10:32 AM' },
            { id: 3, sender: 'them', text: 'Nice! Have you tried the new React Server Components?', timestamp: '10:35 AM' },
            { id: 4, sender: 'me', text: 'Not yet, but I\'ve been reading about them. They look really promising!', timestamp: '10:37 AM' },
            { id: 5, sender: 'them', text: 'We should grab coffee and talk about it! I\'ve been experimenting with them.', timestamp: '10:40 AM' },
            { id: 6, sender: 'me', text: 'That sounds amazing! When are you free?', timestamp: '10:42 AM' },
            { id: 7, sender: 'them', text: 'That sounds amazing! When are you free?', timestamp: '10:45 AM' }
        ]
    },
    {
        id: 2,
        name: 'Alex Rodriguez',
        role: 'ML Engineer',
        avatar: 'AR',
        lastMessage: 'The new GPT model is incredible!',
        timestamp: '1h ago',
        unread: 0,
        online: true,
        messages: [
            { id: 1, sender: 'them', text: 'Hi! I see you\'re interested in AI/ML too!', timestamp: 'Yesterday' },
            { id: 2, sender: 'me', text: 'Absolutely! It\'s fascinating. What are you working on?', timestamp: 'Yesterday' },
            { id: 3, sender: 'them', text: 'Currently training some LLMs. The results are mind-blowing!', timestamp: 'Yesterday' },
            { id: 4, sender: 'me', text: 'That\'s so cool! I\'d love to learn more about it.', timestamp: 'Today' },
            { id: 5, sender: 'them', text: 'The new GPT model is incredible!', timestamp: 'Today' }
        ]
    },
    {
        id: 3,
        name: 'Emily Watson',
        role: 'Full Stack Developer',
        avatar: 'EW',
        lastMessage: 'Haha, I love that game too!',
        timestamp: '3h ago',
        unread: 0,
        online: false,
        messages: [
            { id: 1, sender: 'them', text: 'Hey! Fellow gamer here! 🎮', timestamp: 'Yesterday' },
            { id: 2, sender: 'me', text: 'Nice! What do you play?', timestamp: 'Yesterday' },
            { id: 3, sender: 'them', text: 'Mostly competitive FPS and some RPGs. You?', timestamp: 'Yesterday' },
            { id: 4, sender: 'me', text: 'Same! Been grinding ranked lately.', timestamp: 'Today' },
            { id: 5, sender: 'them', text: 'Haha, I love that game too!', timestamp: 'Today' }
        ]
    }
];

let activeConversation = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    loadConversations();
    setupEventListeners();
});

function checkAuth() {
    const userData = localStorage.getItem('techconnect_user');
    if (!userData) {
        window.location.href = 'index.html';
    }
}

function loadConversations() {
    const conversationsList = document.getElementById('conversationsList');

    mockConversations.forEach(conversation => {
        const conversationEl = createConversationElement(conversation);
        conversationsList.appendChild(conversationEl);
    });
}

function createConversationElement(conversation) {
    const div = document.createElement('div');
    div.className = 'conversation-item';
    div.style.cssText = `
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid var(--border-color);
    cursor: pointer;
    transition: var(--transition-fast);
    display: flex;
    gap: 1rem;
    align-items: center;
    background: ${activeConversation?.id === conversation.id ? 'var(--bg-glass)' : 'transparent'};
  `;

    div.innerHTML = `
    <div style="position: relative;">
      <div class="avatar" style="width: 56px; height: 56px; background: var(--primary-gradient); display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 1.25rem;">
        ${conversation.avatar}
      </div>
      ${conversation.online ? '<div style="position: absolute; bottom: 2px; right: 2px; width: 14px; height: 14px; background: var(--success-color); border: 2px solid var(--bg-secondary); border-radius: 50%;"></div>' : ''}
    </div>
    <div style="flex: 1; min-width: 0;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
        <h4 style="margin: 0; font-size: 1rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${conversation.name}</h4>
        <span style="font-size: 0.75rem; color: var(--text-muted); white-space: nowrap;">${conversation.timestamp}</span>
      </div>
      <p style="margin: 0; font-size: 0.875rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: ${conversation.unread > 0 ? '600' : '400'};">
        ${conversation.lastMessage}
      </p>
    </div>
    ${conversation.unread > 0 ? `
      <div style="width: 24px; height: 24px; background: var(--primary-gradient); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 600;">
        ${conversation.unread}
      </div>
    ` : ''}
  `;

    div.addEventListener('click', () => openConversation(conversation));

    div.addEventListener('mouseenter', () => {
        if (activeConversation?.id !== conversation.id) {
            div.style.background = 'var(--bg-tertiary)';
        }
    });

    div.addEventListener('mouseleave', () => {
        if (activeConversation?.id !== conversation.id) {
            div.style.background = 'transparent';
        }
    });

    return div;
}

function openConversation(conversation) {
    activeConversation = conversation;

    // Update UI
    document.getElementById('noChatSelected').classList.add('hidden');
    document.getElementById('activeChat').classList.remove('hidden');

    // Update header
    const avatar = document.getElementById('chatAvatar');
    avatar.src = 'data:image/svg+xml,' + encodeURIComponent(`
    <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="40" fill="#667eea"/>
      <text x="40" y="52" font-size="32" fill="white" text-anchor="middle" font-family="Arial">${conversation.avatar}</text>
    </svg>
  `);

    document.getElementById('chatName').textContent = conversation.name;
    document.getElementById('chatStatus').textContent = conversation.online ? 'Active now' : 'Offline';
    document.getElementById('chatStatus').style.color = conversation.online ? 'var(--success-color)' : 'var(--text-muted)';

    // Load messages
    loadMessages(conversation.messages);

    // Update conversation list highlighting
    document.querySelectorAll('.conversation-item').forEach((item, index) => {
        item.style.background = index === mockConversations.indexOf(conversation) ? 'var(--bg-glass)' : 'transparent';
    });

    // Mark as read
    conversation.unread = 0;
    updateConversationsList();
}

function loadMessages(messages) {
    const messagesArea = document.getElementById('messagesArea');
    messagesArea.innerHTML = '';

    let lastDate = null;

    messages.forEach(message => {
        // Add date separator if needed
        if (message.timestamp !== lastDate) {
            const dateSeparator = document.createElement('div');
            dateSeparator.style.cssText = 'text-align: center; margin: 1.5rem 0;';
            dateSeparator.innerHTML = `<span style="background: var(--bg-tertiary); padding: 0.5rem 1rem; border-radius: var(--radius-full); font-size: 0.875rem; color: var(--text-muted);">${message.timestamp}</span>`;
            messagesArea.appendChild(dateSeparator);
            lastDate = message.timestamp;
        }

        const messageEl = createMessageElement(message);
        messagesArea.appendChild(messageEl);
    });

    // Scroll to bottom
    messagesArea.scrollTop = messagesArea.scrollHeight;
}

function createMessageElement(message) {
    const div = document.createElement('div');
    div.style.cssText = `
    display: flex;
    justify-content: ${message.sender === 'me' ? 'flex-end' : 'flex-start'};
    margin-bottom: 0.5rem;
  `;

    const bubble = document.createElement('div');
    bubble.style.cssText = `
    max-width: 60%;
    padding: 0.875rem 1.25rem;
    border-radius: var(--radius-lg);
    background: ${message.sender === 'me' ? 'var(--primary-gradient)' : 'var(--bg-tertiary)'};
    color: ${message.sender === 'me' ? 'white' : 'var(--text-primary)'};
    word-wrap: break-word;
    animation: messageSlideIn 0.2s ease;
  `;
    bubble.textContent = message.text;

    div.appendChild(bubble);
    return div;
}

function setupEventListeners() {
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');

    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        sendMessage();
    });

    // Auto-resize textarea
    messageInput.addEventListener('input', () => {
        messageInput.style.height = 'auto';
        messageInput.style.height = messageInput.scrollHeight + 'px';
    });

    // Send on Enter, new line on Shift+Enter
    messageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // Search functionality
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterConversations(searchTerm);
    });
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const text = messageInput.value.trim();

    if (!text || !activeConversation) return;

    const newMessage = {
        id: Date.now(),
        sender: 'me',
        text: text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Add to conversation
    activeConversation.messages.push(newMessage);
    activeConversation.lastMessage = text;
    activeConversation.timestamp = 'Just now';

    // Update UI
    const messageEl = createMessageElement(newMessage);
    document.getElementById('messagesArea').appendChild(messageEl);

    // Scroll to bottom
    const messagesArea = document.getElementById('messagesArea');
    messagesArea.scrollTop = messagesArea.scrollHeight;

    // Clear input
    messageInput.value = '';
    messageInput.style.height = 'auto';

    // Update conversations list
    updateConversationsList();

    // Simulate response after a delay
    setTimeout(() => {
        simulateResponse();
    }, 2000 + Math.random() * 2000);
}

function simulateResponse() {
    if (!activeConversation) return;

    const responses = [
        'That\'s really interesting!',
        'I totally agree with you!',
        'Haha, that\'s awesome! 😄',
        'Tell me more about that!',
        'I\'ve been thinking the same thing!',
        'That sounds great!',
        'Absolutely! Let\'s do it.',
        'I\'m excited about this!'
    ];

    const responseText = responses[Math.floor(Math.random() * responses.length)];

    const responseMessage = {
        id: Date.now(),
        sender: 'them',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    activeConversation.messages.push(responseMessage);
    activeConversation.lastMessage = responseText;
    activeConversation.timestamp = 'Just now';

    const messageEl = createMessageElement(responseMessage);
    document.getElementById('messagesArea').appendChild(messageEl);

    const messagesArea = document.getElementById('messagesArea');
    messagesArea.scrollTop = messagesArea.scrollHeight;

    updateConversationsList();

    // Show notification
    showNotification(`${activeConversation.name} sent a message`, 'info');
}

function updateConversationsList() {
    const conversationsList = document.getElementById('conversationsList');
    conversationsList.innerHTML = '';
    loadConversations();
}

function filterConversations(searchTerm) {
    const items = document.querySelectorAll('.conversation-item');
    items.forEach((item, index) => {
        const conversation = mockConversations[index];
        const matchesSearch = conversation.name.toLowerCase().includes(searchTerm) ||
            conversation.lastMessage.toLowerCase().includes(searchTerm);
        item.style.display = matchesSearch ? 'flex' : 'none';
    });
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

    notification.innerHTML = `
    <div style="display: flex; align-items: center; gap: 0.75rem;">
      <i class="fas fa-comment-dots"></i>
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
  
  @keyframes messageSlideIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  #messagesArea::-webkit-scrollbar {
    width: 8px;
  }
  
  #messagesArea::-webkit-scrollbar-track {
    background: var(--bg-tertiary);
  }
  
  #messagesArea::-webkit-scrollbar-thumb {
    background: var(--bg-glass);
    border-radius: var(--radius-full);
  }
  
  #messagesArea::-webkit-scrollbar-thumb:hover {
    background: var(--border-color);
  }
`;
document.head.appendChild(style);
