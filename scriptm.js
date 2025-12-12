// ===== FORCE RESET DATABASE (Remove this after first run) =====
// localStorage.removeItem('authors');
// localStorage.removeItem('books');
// After running once, comment these lines back out to keep the data

// ===== DATA INITIALIZATION =====
const initialAuthors = [
    {
        id: 1,
        name: "Robert Kiyosaki",
        nationality: "American",
        biography: "American businessman and author of Rich Dad Poor Dad.",
        birthDate: "1947-04-08",
        photo: "https://richdad.com/wp-content/uploads/2025/06/robert-holding-rdpd-both-hands6567-crop01.png",
        books: [1, 2]
    },
    {
        id: 2,
        name: "J.K. Rowling",
        nationality: "British",
        biography: "British author, creator of the Harry Potter fantasy series.",
        birthDate: "1965-07-31",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiSAmttfeMfKBgiz1kji8KZuOrx7EKeq50H6Ma_opPtDo8GB0vW6B5971XPitliMPMrWQR3w&s",
        books: [3, 4]
    },
    {
        id: 3,
        name: "Naguib Mahfouz",
        nationality: "Egyptian",
        biography: "Egyptian Nobel Prize-winning author, known for Cairo Trilogy.",
        birthDate: "1911-12-11",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptZHpWgN_d9LDxsRJn97AB2WrQbUvlp9yNHK-UPmM0fFJTCa4no6sVGuwU8Li9VXUPOF68serQBwxdrq_ZyOskWBZCf9qpxwSPalLQX8tgg&s=10",
        books: [5, 6]
    },
    {
        id: 4,
        name: "Stephen King",
        nationality: "American",
        biography: "Prolific American author known for horror and suspense novels.",
        birthDate: "1947-09-21",
        photo: "https://i.guim.co.uk/img/media/56be7b100f9704b507dbac33715297ae2f5bd11e/0_491_4024_2414/master/4024.jpg?width=1200&quality=85&auto=format&fit=max&s=6e21ac79a974ab9293cd1d138c43113c",
        books: [7, 8]
    },
    {
        id: 5,
        name: "Agatha Christie",
        nationality: "British",
        biography: "English writer, known as the Queen of Detective Fiction.",
        birthDate: "1890-01-15",
        photo: "https://cdn.britannica.com/18/12918-050-72F3A354/Agatha-Christie-1946.jpg",
        books: [9, 10]
    },
    {
        id: 6,
        name: "Paulo Coelho",
        nationality: "Brazilian",
        biography: "Brazilian lyricist and author, famous for The Alchemist.",
        birthDate: "1947-08-24",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaBTN5fuKujQM2oc_eJbr393FYMRqlY5GfWGUlc5XW0ww3oKMnzYb07OcLWEXF4ne-hq0zZvXAp8JGMIhfDSSn4FQMKzKWqKlBc-FDrg&s=10",
        books: [11]
    },
    {
        id: 7,
        name: "George R.R. Martin",
        nationality: "American",
        biography: "American novelist, famous for A Song of Ice and Fire series.",
        birthDate: "1948-09-20",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREutx5vIrFIYohjgUgjS71WoimBb9qUueXYqGYPIu-g21_mzqem4ytDeV7kRQZ8-rgqD93IpHd0fG4ZmKyx6pimqJKjpDgX4Moot73ta8&s=10",
        books: [12, 13]
    },
    {
        id: 8,
        name: "Chimamanda Ngozi Adichie",
        nationality: "Nigerian",
        biography: "Nigerian-American author known for contemporary African narratives.",
        birthDate: "1977-05-15",
        photo: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/C28A/production/_92020894_hi017748493_bbc.jpg",
        books: [14]
    },
    {
        id: 9,
        name: "Margaret Atwood",
        nationality: "Canadian",
        biography: "Canadian author known for speculative fiction and poetry.",
        birthDate: "1939-11-18",
        photo: "https://thegentlewoman.co.uk/img/YWJOYkVodmFUNHM5bTArbWhuY1pHdz09/margaret-2.jpg",
        books: [15]
    },
    {
        id: 10,
        name: "Haruki Murakami",
        nationality: "Japanese",
        biography: "Japanese author known for surreal and imaginative fiction.",
        birthDate: "1949-01-09",
        photo: "https://static01.nyt.com/images/2011/10/23/magazine/23murakami1_span/23murakami1_span-articleLarge.jpg?year=2011&h=478&w=600&s=60526c9c5fa0b415fc3976ba9f5cd59fb90c72f01a7a71d68e4d42604c7457e2&k=ZQJBKqZ0VN",
        books: [16, 17]
    }
];

const initialBooks = [
    { id: 1, title: "Rich Dad Poor Dad", authorId: 1, isbn: "0671015906", copies: 3, status: "Available", photo: "https://m.media-amazon.com/images/I/61M1eEsuSML._AC_UF1000,1000_QL80_.jpg" },
    { id: 2, title: "Cashflow Quadrant", authorId: 1, isbn: "0892399235", copies: 2, status: "Available", photo: "https://diwanegypt.com/wp-content/uploads/2021/10/9781612680064.jpg" },
    { id: 3, title: "Harry Potter and the Philosopher's Stone", authorId: 2, isbn: "9780747532699", copies: 5, status: "Available", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttbZNVGzKnwLBGXrKBkt0VY2J2DubjnH_lSQrJCzdSf5fe4OK8yUM27EYhteFc68Ii7Xr9g&s=10" },
    { id: 4, title: "Harry Potter and the Chamber of Secrets", authorId: 2, isbn: "9780747538493", copies: 4, status: "Borrowed", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1rI0fB3GdfQCFT3HYWrIIreGt74rV1R0n8JgYUmXtzMeOCdIKv4MdmSafc0hi7DksbRtO&s=10" },
    { id: 5, title: "Palace Walk", authorId: 3, isbn: "9789774249143", copies: 2, status: "Available", photo: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1644747130i/762134.jpg" },
    { id: 6, title: "Cairo Trilogy", authorId: 3, isbn: "9789774249150", copies: 1, status: "Overdue", photo: "https://usercontent.one/wp/www.ravimagazine.com/wp-content/uploads/2016/01/egyptian-trilology1.jpg?media=1756411367" },
    { id: 7, title: "The Shining", authorId: 4, isbn: "0385333312", copies: 3, status: "Available", photo: "https://m.media-amazon.com/images/M/MV5BNmM5ZThhY2ItOGRjOS00NzZiLWEwYTItNDgyMjFkOTgxMmRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { id: 8, title: "It", authorId: 4, isbn: "0451191382", copies: 2, status: "Borrowed", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcSh7zXxw6k-D7nceuqme8Ko7TMhd_PVzDCg&s" },
{ id: 9, title: "Murder on the Orient Express", authorId: 5, isbn: "0062693980", copies: 4, status: "Available", photo: "https://lumiere-a.akamaihd.net/v1/images/image_37a1eab9.jpeg?region=0%2C0%2C1400%2C2100" },
    { id: 10, title: "And Then There Were None", authorId: 5, isbn: "0062693980", copies: 3, status: "Available", photo: "https://m.media-amazon.com/images/M/MV5BMjcwYTg5ZWEtMGYwMy00NmVkLWE4NGEtNmJmZTMzMDE2MDNiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { id: 11, title: "The Alchemist", authorId: 6, isbn: "0062315005", copies: 5, status: "Available", photo: "https://prodimage.images-bn.com/pimages/9780062315007_p0_v3_s1200x630.jpg" },
    { id: 12, title: "A Game of Thrones", authorId: 7, isbn: "0553103547", copies: 2, status: "Available", photo: "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { id: 13, title: "A Clash of Kings", authorId: 7, isbn: "0553108034", copies: 2, status: "Borrowed", photo: "https://m.media-amazon.com/images/I/91c5Z3pXhtL._AC_UF1000,1000_QL80_.jpg" },
    { id: 14, title: "Americanah", authorId: 8, isbn: "0307271560", copies: 3, status: "Available", photo: "https://prodimage.images-bn.com/pimages/9780307455925_p0_v5_s1200x630.jpg" },
    { id: 15, title: "The Handmaid's Tale", authorId: 9, isbn: "0385490232", copies: 2, status: "Available", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIQXUigCe_VorUn4Zabj6_tEMw6RDCC0iqjO6-67vs67Y5b6LruMxZlIz0qXnTGjXN4CQTg&s=10" },
    { id: 16, title: "Norwegian Wood", authorId: 10, isbn: "0099448017", copies: 3, status: "Available", photo: "https://images.squarespace-cdn.com/content/v1/5ae815c95b409b2edc74c363/1560821457407-28Y3VD3GUSEW9D613PXR/Norwegian+Wood" },
    { id: 17, title: "Kafka on the Shore", authorId: 10, isbn: "0099458322", copies: 2, status: "Overdue", photo: "https://blog.streetwriters.co/media/posts/86/kafka2.jpeg" }
];

// ===== LOCALSTORAGE UTILITIES =====
function initializeStorage() {
    if (!localStorage.getItem('authors')) {
        localStorage.setItem('authors', JSON.stringify(initialAuthors));
    }
    if (!localStorage.getItem('books')) {
        localStorage.setItem('books', JSON.stringify(initialBooks));
    }
}

function getAuthors() {
    return JSON.parse(localStorage.getItem('authors')) || initialAuthors;
}

function saveAuthors(authors) {
    localStorage.setItem('authors', JSON.stringify(authors));
}

function getBooks() {
    return JSON.parse(localStorage.getItem('books')) || initialBooks;
}

function saveBooks(books) {
    localStorage.setItem('books', JSON.stringify(books));
}

function getAuthorById(id) {
    return getAuthors().find(a => a.id === id);
}

function getBooksByAuthorId(authorId) {
    return getBooks().filter(b => b.authorId === authorId);
}

function getBookById(id) {
    return getBooks().find(b => b.id === id);
}

// ===== HELPERS =====
function $(sel, ctx = document) { return ctx.querySelector(sel); }
function $all(sel, ctx = document) { return Array.from(ctx.querySelectorAll(sel)); }
function debounce(fn, wait = 250) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

let activeModal = null;

// ===== MODAL UTIL =====
function createModal(html) {
  if (activeModal) activeModal.remove();
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = html;
  document.body.appendChild(overlay);
  activeModal = overlay;
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.remove();
      activeModal = null;
    }
  });
  return overlay;
}

// ===== SEARCH =====
function initSearch() {
  const input = document.querySelector('.search-input');
  if (!input) return;

  const doSearch = () => {
    const term = input.value.toLowerCase().trim();
    const rows = $all('tbody tr');
    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = term === '' || text.includes(term) ? '' : 'none';
    });
  };

  input.addEventListener('input', debounce(doSearch, 200));
}

// ===== ROW ACTIONS =====
function initRowActions() {
  const tbody = document.querySelector('tbody');
  if (!tbody) return;

  tbody.addEventListener('click', (e) => {
    const btn = e.target.closest('button, .status');
    if (!btn) return;

    const row = btn.closest('tr');
    if (btn.classList.contains('btn-delete')) {
      showDeleteModal(row);
    } else if (btn.classList.contains('btn-edit')) {
      showEditModal(row);
    } else if (btn.classList.contains('btn-view')) {
      showViewModal(row);
    } else if (btn.classList.contains('status')) {
      toggleStatus(btn);
    }
  });
}

// ===== STATUS TOGGLE =====
function toggleStatus(span) {
  if (!span) return;
  const statuses = ['Available', 'Borrowed', 'Overdue'];
  let currentIndex = statuses.indexOf(span.textContent.trim());
  let nextIndex = (currentIndex + 1) % statuses.length;
  const nextStatus = statuses[nextIndex];
  
  span.textContent = nextStatus;
  span.classList.remove('status-available', 'status-borrowed', 'status-overdue');
  
  if (nextStatus === 'Available') span.classList.add('status-available');
  else if (nextStatus === 'Borrowed') span.classList.add('status-borrowed');
  else if (nextStatus === 'Overdue') span.classList.add('status-overdue');
  
  // Update in storage
  updateRowInStorage(span.closest('tr'));
}

// ===== UPDATE ROW IN STORAGE =====
function updateRowInStorage(row) {
  const cells = $all('td', row);
  const isAuthorsPage = !!$('#authors-table-body');
  
  if (isAuthorsPage) {
    const id = parseInt(cells[0].textContent);
    const authors = getAuthors();
    const author = authors.find(a => a.id === id);
    if (author) {
      author.name = cells[1].textContent;
      author.nationality = cells[2].textContent;
      author.birthDate = cells[4].textContent;
      saveAuthors(authors);
    }
  } else {
    const id = parseInt(cells[0].textContent);
    const books = getBooks();
    const book = books.find(b => b.id === id);
    if (book) {
      book.title = cells[1].textContent;
      book.isbn = cells[3].textContent;
      book.copies = parseInt(cells[4].textContent) || 0;
      const statusSpan = cells[5]?.querySelector('.status');
      if (statusSpan) book.status = statusSpan.textContent.trim();
      saveBooks(books);
    }
  }
}

// ===== DELETE =====
function showDeleteModal(row) {
  const title = row.querySelector('td:nth-child(2)')?.textContent || 'this record';
  const html = `
    <div class="modal">
      <h3>Confirm Deletion</h3>
      <p>Are you sure you want to delete "${title}"?</p>
      <div class="modal-buttons">
        <button class="modal-btn modal-btn-cancel">Cancel</button>
        <button class="modal-btn modal-btn-confirm">Delete</button>
      </div>
    </div>
  `;
  const overlay = createModal(html);

  $('.modal-btn-cancel', overlay).addEventListener('click', () => {
    overlay.remove(); activeModal = null;
  });
  
  $('.modal-btn-confirm', overlay).addEventListener('click', () => {
    const id = parseInt(row.querySelector('td:first-child').textContent);
    const isAuthorsPage = !!$('#authors-table-body');
    
    if (isAuthorsPage) {
      const authors = getAuthors();
      const filtered = authors.filter(a => a.id !== id);
      saveAuthors(filtered);
      populateAuthorsTable(filtered);
    } else {
      const books = getBooks();
      const filtered = books.filter(b => b.id !== id);
      saveBooks(filtered);
      populateBooksTable(filtered);
    }
    
    row.remove();
    overlay.remove();
    activeModal = null;
    alert(`"${title}" has been deleted.`);
  });
}

// ===== VIEW =====
function showViewModal(row) {
  const headers = $all('thead th').map(h => h.textContent.trim());
  const cells = $all('td', row);
  let content = '<div class="modal"><h3>Details</h3><div class="view-grid">';
  
  cells.forEach((c, i) => {
    if (headers[i] && i < cells.length - 1) {
      content += `<div><strong>${headers[i]}:</strong> ${c.textContent.trim()}</div>`;
    }
  });
  
  content += `</div><div style="text-align:right;margin-top:12px"><button class="modal-btn modal-btn-close">Close</button></div></div>`;
  const overlay = createModal(content);
  
  $('.modal-btn-close', overlay).addEventListener('click', () => { 
    overlay.remove(); 
    activeModal = null; 
  });
}

// ===== EDIT =====
function showEditModal(row) {
  const cells = $all('td', row);
  if (!cells.length) return;

  const headers = $all('thead th').map(h => h.textContent.trim());
  
  // Get the ID (could be author or book)
  const recordId = parseInt(cells[0].textContent);
  const isAuthors = isAuthorsPage();
  const author = isAuthors ? getAuthorById(recordId) : null;
  const book = !isAuthors ? getBookById(recordId) : null;
  
  const inputs = [];
  
  for (let i = 0; i < cells.length - 1; i++) {
    const header = headers[i] || `col${i}`;
    let value = cells[i].textContent.trim();
    
    if (cells[i].querySelector('.status')) {
      value = cells[i].querySelector('.status').textContent.trim();
    }
    
    const readonly = i === 0 ? 'readonly' : '';
    inputs.push(`<label>${header}<input data-index="${i}" value="${value}" ${readonly} /></label>`);
  }
  
  // Add photo URL field for authors page
  if (isAuthors && author) {
    inputs.push(`<label>Photo URL<input type="url" id="author-photo-url" value="${author.photo}" placeholder="https://example.com/photo.jpg" /></label>`);
  }
  
  // Add photo URL field for books page
  if (!isAuthors && book) {
    inputs.push(`<label>Book Photo URL<input type="url" id="book-photo-url" value="${book.photo}" placeholder="https://example.com/book-cover.jpg" /></label>`);
  }

  const html = `
    <div class="modal">
      <h3>Edit Record</h3>
      <form class="edit-form">
        ${inputs.join('')}
        <div style="text-align:right;margin-top:12px">
          <button type="button" class="modal-btn modal-btn-cancel">Cancel</button>
          <button type="submit" class="modal-btn modal-btn-save">Save</button>
        </div>
      </form>
    </div>
  `;
  const overlay = createModal(html);

  $('.modal-btn-cancel', overlay).addEventListener('click', () => { 
    overlay.remove(); 
    activeModal = null; 
  });

  overlay.querySelector('.edit-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formInputs = $all('input[data-index]', overlay);
    
    formInputs.forEach(inp => {
      const idx = Number(inp.dataset.index);
      if (!Number.isNaN(idx) && idx < cells.length - 1) {
        const cell = cells[idx];
        
        if (cell.querySelector('.status')) {
          const statusSpan = cell.querySelector('.status');
          statusSpan.textContent = inp.value;
          statusSpan.className = 'status';
          if (inp.value.toLowerCase().includes('available')) {
            statusSpan.classList.add('status-available');
          } else if (inp.value.toLowerCase().includes('borrowed')) {
            statusSpan.classList.add('status-borrowed');
          } else if (inp.value.toLowerCase().includes('overdue')) {
            statusSpan.classList.add('status-overdue');
          }
        } else {
          cell.textContent = inp.value;
        }
      }
    });
    
    // Update photo URL in storage for authors
    if (isAuthors && author) {
      const photoInput = $('#author-photo-url', overlay);
      if (photoInput) {
        const authors = getAuthors();
        const authorToUpdate = authors.find(a => a.id === recordId);
        if (authorToUpdate) {
          authorToUpdate.name = formInputs[1]?.value.trim() || authorToUpdate.name;
          authorToUpdate.nationality = formInputs[2]?.value.trim() || authorToUpdate.nationality;
          authorToUpdate.photo = photoInput.value.trim() || authorToUpdate.photo;
          saveAuthors(authors);
        }
      }
    }
    
    // Update photo URL in storage for books
    if (!isAuthors && book) {
      const photoInput = $('#book-photo-url', overlay);
      if (photoInput) {
        const books = getBooks();
        const bookToUpdate = books.find(b => b.id === recordId);
        if (bookToUpdate) {
          bookToUpdate.title = formInputs[1]?.value.trim() || bookToUpdate.title;
          bookToUpdate.isbn = formInputs[3]?.value.trim() || bookToUpdate.isbn;
          bookToUpdate.copies = parseInt(formInputs[4]?.value) || bookToUpdate.copies;
          bookToUpdate.photo = photoInput.value.trim() || bookToUpdate.photo;
          const statusSpan = cells[5]?.querySelector('.status');
          if (statusSpan) bookToUpdate.status = statusSpan.textContent.trim();
          saveBooks(books);
        }
      }
    }
    
    overlay.remove(); 
    activeModal = null;
    alert('Record updated successfully!');
  });
}

// ===== POPULATE AUTHORS TABLE =====
function populateAuthorsTable(authors) {
  const tbody = $('#authors-table-body');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  authors.forEach(author => {
    const bookCount = getBooksByAuthorId(author.id).length;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${author.id}</td>
      <td><a href="#" onclick="showAuthorProfile(${author.id}); return false;" style="color: #0066cc; text-decoration: none;">${author.name}</a></td>
      <td>${author.nationality}</td>
      <td>${bookCount}</td>
      <td>${new Date(author.birthDate).getFullYear()}</td>
      <td>
        <button class="action-btn btn-view">View</button>
        <button class="action-btn btn-edit">Edit</button>
        <button class="action-btn btn-delete">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// ===== POPULATE BOOKS TABLE =====
function populateBooksTable(books) {
  const tbody = document.querySelector('tbody');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  books.forEach(book => {
    const author = getAuthorById(book.authorId);
    const statusClass = `status-${book.status.toLowerCase()}`;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.id}</td>
      <td><a href="#" onclick="showBookProfile(${book.id}); return false;" style="color: #0066cc; text-decoration: none;">${book.title}</a></td>
      <td>${author ? author.name : 'Unknown'}</td>
      <td>${book.isbn}</td>
      <td>${book.copies}</td>
      <td><span class="status ${statusClass}">${book.status}</span></td>
      <td>
        <button class="action-btn btn-view">View</button>
        <button class="action-btn btn-edit">Edit</button>
        <button class="action-btn btn-delete">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// ===== DETECT CURRENT PAGE =====
function isAuthorsPage() {
  return !!document.getElementById('authors-table-body') || 
         document.title.includes('Manage Authors');
}

function isBooksPage() {
  return !!document.querySelector('th:nth-child(4)') && 
         document.querySelector('th:nth-child(4)').textContent.includes('ISBN');
}

// ===== AUTHOR PROFILE =====
function showAuthorProfile(id) {
  const author = getAuthorById(id);
  if (!author) return;
  
  const tableSection = document.querySelector('table');
  if (tableSection) tableSection.style.display = 'none';
  
  const headerSection = document.querySelector('.header');
  if (headerSection) headerSection.style.display = 'none';
  
  const profileSection = document.getElementById('author-profile') || createProfileSection('author-profile');
  profileSection.classList.add('show');
  profileSection.style.display = 'block';
  profileSection.style.padding = '30px';
  
  const books = getBooksByAuthorId(id);
  let booksHtml = '';
  
  books.forEach(book => {
    booksHtml += `
      <div class="book-card">
        <img src="${book.photo}" alt="${book.title}" onerror="this.src='https://via.placeholder.com/150x200?text=Book+Cover'">
        <h4>${book.title}</h4>
        <p><strong>ISBN:</strong> ${book.isbn}</p>
        <p><strong>Status:</strong> ${book.status}</p>
      </div>
    `;
  });
  
  profileSection.innerHTML = `
    <div class="profile-header">
      <img src="${author.photo}" alt="${author.name}" class="profile-photo" onerror="this.src='https://via.placeholder.com/150'">
      <div class="profile-info">
        <h3>${author.name}</h3>
        <p><strong>Nationality:</strong> ${author.nationality}</p>
        <p><strong>Birth Date:</strong> ${author.birthDate}</p>
        <p><strong>Bio:</strong> ${author.biography}</p>
      </div>
    </div>
    <h3>Books (${books.length})</h3>
    <div class="books-container">
      ${booksHtml || '<p>No books available</p>'}
    </div>
    <button class="back-btn" onclick="goBackToAuthors()">Back to Authors</button>
  `;
}

function goBackToAuthors() {
  const profileSection = document.getElementById('author-profile');
  if (profileSection) {
    profileSection.style.display = 'none';
    profileSection.classList.remove('show');
  }
  
  const tableSection = document.querySelector('table');
  if (tableSection) tableSection.style.display = '';
  
  const headerSection = document.querySelector('.header');
  if (headerSection) headerSection.style.display = '';
  
  populateAuthorsTable(getAuthors());
}

// ===== BOOK PROFILE =====
function showBookProfile(id) {
  const book = getBookById(id);
  const author = getAuthorById(book.authorId);
  if (!book) return;
  
  const tableSection = document.querySelector('table');
  if (tableSection) tableSection.style.display = 'none';
  
  const headerSection = document.querySelector('.header');
  if (headerSection) headerSection.style.display = 'none';
  
  const profileSection = document.getElementById('book-profile') || createProfileSection('book-profile');
  profileSection.classList.add('show');
  profileSection.style.display = 'block';
  profileSection.style.padding = '30px';
  
  profileSection.innerHTML = `
    <div class="profile-header">
      <img src="${book.photo}" alt="${book.title}" class="profile-photo" onerror="this.src='https://via.placeholder.com/150x200?text=Book+Cover'">
      <div class="profile-info">
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${author ? author.name : 'Unknown'}</p>
        <p><strong>ISBN:</strong> ${book.isbn}</p>
        <p><strong>Copies Available:</strong> ${book.copies}</p>
        <p><strong>Status:</strong> <span class="status status-${book.status.toLowerCase()}">${book.status}</span></p>
      </div>
    </div>
    <button class="back-btn" onclick="goBackToBooks()">Back to Books</button>
  `;
}

function goBackToBooks() {
  const profileSection = document.getElementById('book-profile');
  if (profileSection) {
    profileSection.style.display = 'none';
    profileSection.classList.remove('show');
  }
  
  const tableSection = document.querySelector('table');
  if (tableSection) tableSection.style.display = '';
  
  const headerSection = document.querySelector('.header');
  if (headerSection) headerSection.style.display = '';
  
  populateBooksTable(getBooks());
}

function createProfileSection(id) {
  const section = document.createElement('div');
  section.id = id;
  document.querySelector('.container').appendChild(section);
  return section;
}

// ===== ADD BUTTON =====
function initAddButton() {
  const addBtn = document.querySelector('.btn-add');
  if (!addBtn) return;

  addBtn.addEventListener('click', () => {
    if (isAuthorsPage()) {
      showAddAuthorModal();
    } else if (isBooksPage()) {
      showAddBookModal();
    }
  });
}

function showAddAuthorModal() {
  const html = `
    <div class="modal">
      <h3>Add New Author</h3>
      <form class="add-form">
        <label>Name<input type="text" name="name" required placeholder="Enter author name"></label>
        <label>Nationality<input type="text" name="nationality" required placeholder="e.g., American, British, Egyptian"></label>
        <label>Biography<textarea name="biography" required placeholder="Enter author biography"></textarea></label>
        <label>Birth Date<input type="date" name="birthDate" required></label>
        <label>Photo URL<input type="url" name="photo" placeholder="https://example.com/photo.jpg" value="https://via.placeholder.com/150"></label>
        <div style="text-align:right;margin-top:12px">
          <button type="button" class="modal-btn modal-btn-cancel">Cancel</button>
          <button type="submit" class="modal-btn modal-btn-add">Add Author</button>
        </div>
      </form>
    </div>
  `;
  const overlay = createModal(html);

  $('.modal-btn-cancel', overlay).addEventListener('click', () => { 
    overlay.remove(); 
    activeModal = null; 
  });

  overlay.querySelector('.add-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const authors = getAuthors();
    const newId = Math.max(...authors.map(a => a.id), 0) + 1;
    
    const newAuthor = {
      id: newId,
      name: form.name.value.trim(),
      nationality: form.nationality.value.trim(),
      biography: form.biography.value.trim(),
      birthDate: form.birthDate.value,
      photo: form.photo.value.trim() || 'https://via.placeholder.com/150',
      books: []
    };

    authors.push(newAuthor);
    saveAuthors(authors);
    populateAuthorsTable(authors);
    overlay.remove();
    activeModal = null;
    alert('Author added successfully!');
  });
}

function showAddBookModal() {
  const authors = getAuthors();
  const authorOptions = authors.map(a => `<option value="${a.id}">${a.name}</option>`).join('');
  
  const html = `
    <div class="modal">
      <h3>Add New Book</h3>
      <form class="add-form">
        <label>Title<input type="text" name="title" required placeholder="Enter book title"></label>
        <label>Author<select name="authorId" required>${authorOptions}</select></label>
        <label>ISBN<input type="text" name="isbn" required placeholder="e.g., 0123456789"></label>
        <label>Copies<input type="number" name="copies" required min="1" placeholder="Number of copies"></label>
        <label>Status<select name="status" required>
          <option value="Available">Available</option>
          <option value="Borrowed">Borrowed</option>
          <option value="Overdue">Overdue</option>
        </select></label>
        <label>Book Photo URL<input type="url" name="photo" placeholder="https://example.com/book-cover.jpg"></label>
        <div style="text-align:right;margin-top:12px">
          <button type="button" class="modal-btn modal-btn-cancel">Cancel</button>
          <button type="submit" class="modal-btn modal-btn-add">Add Book</button>
        </div>
      </form>
    </div>
  `;
  const overlay = createModal(html);

  $('.modal-btn-cancel', overlay).addEventListener('click', () => { 
    overlay.remove(); 
    activeModal = null; 
  });

  overlay.querySelector('.add-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const books = getBooks();
    const newId = Math.max(...books.map(b => b.id), 0) + 1;
    
    const newBook = {
      id: newId,
      title: form.title.value.trim(),
      authorId: parseInt(form.authorId.value),
      isbn: form.isbn.value.trim(),
      copies: parseInt(form.copies.value),
      status: form.status.value,
      photo: form.photo.value.trim() || 'https://via.placeholder.com/150x200?text=Book+Cover'
    };

    books.push(newBook);
    saveBooks(books);
    populateBooksTable(books);
    overlay.remove();
    activeModal = null;
    alert('Book added successfully!');
  });
}

// ===== INITIALIZE PAGE =====
function initializePage() {
  initializeStorage();
  initSearch();
  initRowActions();
  initAddButton();

  if (isAuthorsPage()) {
    populateAuthorsTable(getAuthors());
  } else if (isBooksPage()) {
    populateBooksTable(getBooks());
  }
}


document.addEventListener('DOMContentLoaded', initializePage);
