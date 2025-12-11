// nav.js
const currentUser = JSON.parse(localStorage.getItem('currentUser')) || { role: 'user' }; // Default to user if not logged in

if (!currentUser || !currentUser.role) {
    window.location.href = 'profile.html';
}

function getNavLinks() {
  const links = [];
  if (currentUser.role === 'user') {
    links.push(
        { text: 'Profile', href: 'profile.html' },
      { text: 'Books', href: 'books_user.html' },
      { text: 'Authors', href: 'Authors.html' },
      { text: 'Quotes', href: 'quotes.html' },
      {text :'ChatBot',href:'chatbot.html'}
    );
  } else if (currentUser.role === 'librarian') {
    links.push(
      { text: 'Profile', href: 'profile.html' },
      { text: 'Manage Books', href: 'manageBooks.html' },
      { text: 'Manage Authors', href: 'manageAuthors.html' },
      { text: 'Manage Quotes', href: 'manage quotes.html' },
      { text: 'Manage Members', href: 'member_mangement.html' },
      {text :'ChatBot',href:'chatbot.html'}
    );
  } else if (currentUser.role === 'admin') {
    links.push(
        { text: 'Profile', href: 'profile.html' },
      { text: 'Dashboard', href: 'AD with chatbot.html' },
      { text: 'Manage Books', href: 'manageBooks.html' },
      { text: 'Manage Authors', href: 'manageAuthors.html' },
      { text: 'Manage Quotes', href: 'manage quotes.html' },
      { text: 'Manage Users', href: 'ManageMembers&Librarians.html' },
      {text :'ChatBot',href:'chatbot.html'}
    );
  }
  // Add logout to all roles
  links.push({ text: 'Logout', href: '#', onclick: 'logout()' });
  return links;
}

function logout() {
  if (confirm('Are you sure you want to logout?')) {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html'; // Redirect to landing/home
  }
}

function injectNav() {
  const links = getNavLinks();
  const currentPath = window.location.pathname.split('/').pop() || 'books_user.html';

  // Helper to create link element
  function createLink(link) {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    a.style.color = 'white'; // Added: Set link text color to white
    a.style.textDecoration = 'none'; // Added: Remove underline
    a.style.fontWeight = 'bold'; // Added: Make text bold
    if (link.onclick) a.onclick = () => { eval(link.onclick); return false; }; // For logout
    if (link.href === currentPath || link.href === '#' + currentPath) {
      a.classList.add('active'); // Highlight current page if class exists in original
    }
    return a;
  }

  // For books_user.html (.nav-links ul)
  let navUl = document.querySelector('.nav-links');
  if (navUl) {
    navUl.innerHTML = ''; // Clear existing
    links.forEach(link => {
      navUl.appendChild(createLink(link));
    });
    return;
  }

  // For quotes.html and manage quotes.html (.topbar, insert before .icons)
  let topbarIcons = document.querySelector('.icons');
  if (topbarIcons) {
    let ul = document.querySelector('.topbar-links');
    if (!ul) {
      ul = document.createElement('ul');
      ul.className = 'topbar-links';
      ul.style.listStyle = 'none';
      ul.style.display = 'flex';
      ul.style.gap = '20px';
      ul.style.marginRight = '20px';
      const topbar = document.querySelector('.topbar');
      if (topbar) topbar.insertBefore(ul, topbarIcons);
    }
    ul.innerHTML = '';
    links.forEach(link => {
      const li = document.createElement('li');
      li.appendChild(createLink(link));
      ul.appendChild(li);
    });
    return;
  }

  // For manageAuthors.html and manageBooks.html (.navbar, insert before .nav-right)
  let navRight = document.querySelector('.nav-right');
  if (navRight) {
    let ul = document.querySelector('.nav-links');
    if (!ul) {
      ul = document.createElement('ul');
      ul.className = 'nav-links';
      ul.style.listStyle = 'none';
      ul.style.display = 'flex';
      ul.style.gap = '20px';
      ul.style.marginRight = '20px';
      ul.style.color = 'white';
      const navbar = document.querySelector('.navbar');
      if (navbar) navbar.insertBefore(ul, navRight);
    }
    ul.innerHTML = '';
    links.forEach(link => {
      const li = document.createElement('li');
      li.appendChild(createLink(link));
      ul.appendChild(li);
    });
    return;
  }

  // For Authors.html (.header, insert before .user-controls)
  let userControls = document.querySelector('.user-controls');
  if (userControls) {
    let ul = document.querySelector('.nav-links');
    if (!ul) {
      ul = document.createElement('ul');
      ul.className = 'nav-links';
      ul.style.listStyle = 'none';
      ul.style.display = 'flex';
      ul.style.gap = '20px';
      ul.style.marginRight = '20px';
      const header = document.querySelector('.header');
      if (header) header.insertBefore(ul, userControls);
    }
    ul.innerHTML = '';
    links.forEach(link => {
      const li = document.createElement('li');
      li.appendChild(createLink(link));
      ul.appendChild(li);
    });
    return;
  }

  // For AD with chatbot.html (.top-bar, insert after .left-nav before .search-bar)
  let leftNav = document.querySelector('.left-nav');
  if (leftNav) {
    let ul = document.querySelector('.nav-links');
    if (!ul) {
      ul = document.createElement('ul');
      ul.className = 'nav-links';
      ul.style.listStyle = 'none';
      ul.style.display = 'flex';
      ul.style.gap = '20px';
      ul.style.marginLeft = '20px';
      const topBar = document.querySelector('.top-bar');
      if (topBar) topBar.insertBefore(ul, document.querySelector('.search-bar'));
    }
    ul.innerHTML = '';
    links.forEach(link => {
      const li = document.createElement('li');
      li.appendChild(createLink(link));
      ul.appendChild(li);
    });
    return;
  }

  // For ManageMembers&Librarians.html and member_mangement.html (.header-left, append after existing)
  let headerLeft = document.querySelector('.header-left');
  if (headerLeft) {
    let ul = document.querySelector('.nav-links');
    if (!ul) {
      ul = document.createElement('ul');
      ul.className = 'nav-links';
      ul.style.listStyle = 'none';
      ul.style.display = 'flex';
      ul.style.gap = '20px';
      ul.style.marginLeft = '20px';
      headerLeft.appendChild(ul);
    }
    ul.innerHTML = '';
    links.forEach(link => {
      const li = document.createElement('li');
      li.appendChild(createLink(link));
      ul.appendChild(li);
    });
    return;
  }

  // For profile.html (already has .nav-links, append to it)
  navUl = document.querySelector('.nav-links');
  if (navUl) {
    // Clear existing links except role-specific ones if needed, but since profile has its own, append
    links.forEach(link => {
      navUl.appendChild(createLink(link));
    });
  }
}


document.addEventListener('DOMContentLoaded', injectNav);
