const books = [
    { id: 1, title: "Rich Dad Poor Dad", author_id: 1, category: "Business & Finance", description: "A personal finance book that advocates financial independence through investing, real estate, owning businesses, and building wealth.", cover_image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg", publication_date: "1997-04-01", total_copies: 5, available_copies: 3, price_per_day: 8.00, rating: 4.8 },
    { id: 2, title: "The Intelligent Investor", author_id: 1, category: "Business & Finance", description: "Benjamin Graham's classic guide to value investing and financial wisdom.", cover_image: "https://m.media-amazon.com/images/I/71vllLbpsdL.UF1000,1000_QL80.jpg", publication_date: "1949-01-01", total_copies: 3, available_copies: 2, price_per_day: 7.00, rating: 4.7 },
    { id: 3, title: "Think and Grow Rich", author_id: 7, category: "Business & Finance", description: "Napoleon Hill's timeless classic on success and personal achievement.", cover_image: "https://m.media-amazon.com/images/I/61IxJuRI39L.AC_UF1000,1000_QL80.jpg", publication_date: "1937-01-01", total_copies: 4, available_copies: 4, price_per_day: 6.00, rating: 4.6 },
    { id: 4, title: "The 4-Hour Work Week", author_id: 1, category: "Business & Finance", description: "Timothy Ferriss guide to lifestyle design and escaping the 9-5 grind.", cover_image: "https://m.media-amazon.com/images/I/71vO9Tbf4-L.AC_UF1000,1000_QL80.jpg", publication_date: "2007-04-24", total_copies: 3, available_copies: 1, price_per_day: 7.50, rating: 4.5 },
    { id: 5, title: "Zero to One", author_id: 1, category: "Business & Finance", description: "Peter Thiel guide to building innovative startups and thinking differently.", cover_image: "https://m.media-amazon.com/images/I/51zGCdRQXOL.AC_UF1000,1000_QL80.jpg", publication_date: "2014-09-16", total_copies: 4, available_copies: 3, price_per_day: 8.00, rating: 4.9 },
    { id: 6, title: "أبي الذي أكره", author_id: 10, category: "Arabic Literature", description: "رواية عن العلاقات الأسرية المعقدة والصراع بين الأجيال", cover_image: "https://www.tirryaq.com/wp-content/uploads/2022/04/%D8%A3%D8%A8%D9%8A-%D8%A7%D9%84%D8%B0%D9%8A%D8%A3%D9%83%D8%B1%D9%87.jpg", publication_date: "1960-01-01", total_copies: 4, available_copies: 2, price_per_day: 6.00, rating: 4.4 },
    { id: 7, title: "الثلاثية - Cairo Trilogy", author_id: 3, category: "Arabic Literature", description: "ثلاثية نجيب محفوظ الشهيرة: بين القصرين، قصر الشوق، السكرية", cover_image: "https://i.ebayimg.com/images/g/f8AAAOSwpDdVUNHH/s-l400.jpg", publication_date: "1956-01-01", total_copies: 5, available_copies: 4, price_per_day: 7.00, rating: 4.9 },
    { id: 8, title: "الأيام - The Days", author_id: 4, category: "Arabic Literature", description: "السيرة الذاتية لطه حسين في ثلاثة أجزاء", cover_image: "https://asfar.io/product/the-days-taha-hussein-youssef-nawfal/the-days-taha-hussein-youssef-nawfal.jpg", publication_date: "1929-01-01", total_copies: 3, available_copies: 3, price_per_day: 5.50, rating: 4.7 },
    { id: 9, title: "عمارة يعقوبيان", author_id: 8, category: "Arabic Literature", description: "رواية تصور المجتمع المصري من خلال سكان عمارة واحدة", cover_image: "https://www.neelwafurat.com/images/lb/abookstore/covers/normal/324/324381.jpg", publication_date: "2002-01-01", total_copies: 4, available_copies: 2, price_per_day: 6.50, rating: 4.6 },
    { id: 10, title: "The Alchemist", author_id: 6, category: "Fantasy & Adventure", description: "A philosophical story about following your dreams and finding your personal legend.", cover_image: "https://tse1.mm.bing.net/th/id/OIP.8jO5wOWAtlNC-aQJWKKlPAHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3", publication_date: "1988-01-01", total_copies: 5, available_copies: 4, price_per_day: 6.50, rating: 4.7 },
    { id: 11, title: "How to Win Friends and Influence People", author_id: 7, category: "Self-Development", description: "Dale Carnegies timeless guide to building relationships and influencing others.", cover_image: "https://tse3.mm.bing.net/th/id/OIP.qNo41BIBgbh5GRMnsUs32AHaLb?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3", publication_date: "1936-10-01", total_copies: 5, available_copies: 4, price_per_day: 6.00, rating: 4.9 },
    { id: 12, title: "The 7 Habits of Highly Effective People", author_id: 7, category: "Self-Development", description: "Stephen Coveys principle-centered approach to solving personal and professional problems.", cover_image: "https://tse4.mm.bing.net/th/id/OIP.8_SeZIaVtv6pZgfwe_JSfQHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3", publication_date: "1989-08-15", total_copies: 4, available_copies: 3, price_per_day: 6.50, rating: 4.8 },
    { id: 13, title: "Atomic Habits", author_id: 7, category: "Self-Development", description: "James Clears guide to building good habits and breaking bad ones.", cover_image: "https://jamesclear.com/wp-content/uploads/2019/04/atomicHC-flat-1-e1556572683325.jpg", publication_date: "2018-10-16", total_copies: 6, available_copies: 5, price_per_day: 7.00, rating: 4.9 },
    { id: 14, title: "The Power of Now", author_id: 6, category: "Self-Development", description: "Eckhart Tolles guide to spiritual enlightenment and living in the present.", cover_image: "https://tse3.mm.bing.net/th/id/OIP.7Q5PqgnL1bVp0Q42hSBSEQHaLJ?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3", publication_date: "1997-01-01", total_copies: 4, available_copies: 2, price_per_day: 6.00, rating: 4.7 },
    { id: 15, title: "Mans Search for Meaning", author_id: 7, category: "Self-Development", description: "Viktor Frankls profound exploration of finding purpose through suffering.", cover_image: "https://tse4.mm.bing.net/th/id/OIP.F1PjeVnTf4_e1oo0HQkq3AHaLH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3", publication_date: "1946-01-01", total_copies: 3, available_copies: 2, price_per_day: 5.50, rating: 4.9 },
    { id: 16, title: "1984", author_id: 5, category: "Dystopian", description: "A future government controls thought and speech through surveillance and punishes individuality.", cover_image: "https://cdn.abjjad.com/pub/0e90beaa-507e-4642-9b0a-01208d63ce64-192X290.png", publication_date: "1949-06-08", total_copies: 3, available_copies: 2, price_per_day: 5.50, rating: 4.4 },
    { id: 17, title: "فتاة الياقة الزرقاء", author_id: 9, category: "Fantasy", description: "A dystopian sci-fi novel set in a far future where a pandemic has devastated female fertility, focusing on a rare class of reproductive women (marked by blue collars) who are systematically exploited by an oppressive regime to ensure humanity's survival.", cover_image: "https://cdn.abjjad.com/pub/e0367c56-8df6-461a-b30a-40b920365c82.png", publication_date: "2021-01-01", total_copies: 3, available_copies: 2, price_per_day: 5.40, rating: 4 },
    { id: 18, title: "أرض زيكولا", author_id: 9, category: "Fantasy", description: "(Land of Zykola) is a gripping fantasy novel set on a divided continent, where the encounter between a soldier and a mysterious girl from a forbidden forest unravels a thrilling tale of secrets, power, and rebellion against oppression.", cover_image: "https://upload.wikimedia.org/wikipedia/ar/9/98/%D8%A3%D8%B1%D8%B6_%D8%B2%D9%8A%D9%83%D9%88%D9%84%D8%A7.jpg", publication_date: "2010-10-01", total_copies: 3, available_copies: 2, price_per_day: 5.60, rating: 4.5 },
    { id: 19, title: "أسف لم أعد أستطيع", author_id: 2, category: "Novel and short story literature", description: "A collection of eight long stories that address complex social and personal issues.", cover_image: "https://cdn.abjjad.com/pub/155e40af-a3d5-483f-bc5e-e995f1d10236.png", publication_date: "2000-01-01", total_copies: 3, available_copies: 2, price_per_day: 5.00, rating: 3 },
    { id: 20, title: "أولاد حارتنا", author_id: 3, category: "Novel and short story literature", description: "A profoundly symbolic novel depicting humanity's struggle against injustice and the search for salvation, through the story of successive generations in an Egyptian alleyway.", cover_image: "https://ugarit-buchladen.com/wp-content/uploads/2021/06/%D8%AD%D8%A7%D8%B1%D8%AA%D9%86%D8%A712.jpg", publication_date: "1950-09-21", total_copies: 3, available_copies: 2, price_per_day: 5.00, rating: 4.5 },
    { id: 21, title: "ممتلئ بالفراغ", author_id: 10, category: "Self-Help & Psychology", description: "A profound philosophical and psychological book that addresses addictions and compulsive behaviors (such as food, shopping, relationship, and technology addictions) as symptoms of an (existential void) resulting from childhood traumas or deep psychological wounds, and offers a journey to recovery from these behaviors through emotional and scientific language.", cover_image: "https://cdn.abjjad.com/pub/8e9c25f5-532b-4731-aae0-d584b6f283e1.png", publication_date: "2025-01-01", total_copies: 3, available_copies: 2, price_per_day: 5.00, rating: 4.6 },
    { id: 22, title: "المُعذَّبون في الأرض", author_id: 4, category: "Arabic Literature", description: "A moving collection of realistic short stories reflecting the suffering of the poor and marginalized classes in Egypt during the 1940s, and revealing poverty, injustice, and classism.", cover_image: "https://downloads.hindawi.org/covers/304x406/59136080.jpg", publication_date: "in 1949", total_copies: 3, available_copies: 3, price_per_day: 5.50, rating: 4.7 }
];

// =============== POPUP Functions ===============
// LocalStorage
let borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks') || '[]');
let reservedBooks = JSON.parse(localStorage.getItem('reservedBooks') || '[]');
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let userRatings = JSON.parse(localStorage.getItem('userRatings') || '{}');

function saveData() {
    localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));
    localStorage.setItem('reservedBooks', JSON.stringify(reservedBooks));
    localStorage.setItem('favorites', JSON.stringify(favorites));
    localStorage.setItem('userRatings', JSON.stringify(userRatings));
    updateCounts();
}

function updateCounts() {
    document.getElementById('borrowedCount').textContent = borrowedBooks.length;
    document.getElementById('reservedCount').textContent = reservedBooks.length;
    document.getElementById('favCount').textContent = favorites.length;
}

let currentBookId = null;

// Open Popup
function openPopup(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    currentBookId = bookId;

    document.getElementById("popupImage").src = book.cover_image;
    document.getElementById("popupTitle").innerText = book.title;
    document.getElementById("popupDesc").innerText = book.description;
    document.getElementById("popupAuthor").innerText = book.author_id;
    document.getElementById("popupAvailable").innerText = book.available_copies;

    const actionBtn = document.getElementById("actionBtn");
    if (book.available_copies > 0) {
        actionBtn.textContent = "Borrow Now";
        actionBtn.onclick = borrowBook;
    } else {
        actionBtn.textContent = "Reserve";
        actionBtn.onclick = reserveBook;
    }

    document.getElementById("readBtn").onclick = () => {
        document.getElementById("readBtn").classList.toggle("red-btn");
    };

    // Favorite Heart (left)
    const heart = document.getElementById("favHeart");
    const isFav = favorites.includes(bookId);
    heart.innerHTML = isFav ? "❤️" : "♡";
    heart.className = isFav ? "fav-heart favorited" : "fav-heart";
    heart.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(bookId);
    };

    // Average rating stars (pink)
    const starsDiv = document.getElementById("popupStars");
    starsDiv.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
        starsDiv.innerHTML += i <= Math.round(book.rating) ? "★" : "☆";
    }

    // User rating
    const userRate = userRatings[bookId] || 0;
    document.querySelectorAll(".rate-star").forEach(star => {
        const val = parseInt(star.dataset.value);
        star.innerHTML = val <= userRate ? "★" : "☆";
        star.style.color = val <= userRate ? "#ff6b9d" : "#ddd";
        star.onclick = (e) => {
            e.stopPropagation();
            rateBook(bookId, val);
        };
    });

    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Actions (no full refresh)
function borrowBook() {
    const book = books.find(b => b.id === currentBookId);
    if (book && book.available_copies > 0) {
        book.available_copies--;
        if (!borrowedBooks.includes(currentBookId)) borrowedBooks.push(currentBookId);
        saveData();
        alert("Borrowed successfully!");
        openPopup(currentBookId); // Just refresh popup
        updateDynamicSections();   // Only update borrowed & counts
    }
}

function reserveBook() {
    if (!reservedBooks.includes(currentBookId)) {
        reservedBooks.push(currentBookId);
        saveData();
        alert("Book reserved!");
        updateDynamicSections();
    }
}

function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(f => f !== id);
    } else {
        favorites.push(id);
    }
    saveData();
    openPopup(id);
    updateDynamicSections();
    updateAllFavoriteHearts(); // Update hearts on all cards
}

function rateBook(id, rating) {
    userRatings[id] = rating;
    saveData();
    openPopup(id);
}

// Update only dynamic sections (no full refresh)
function updateDynamicSections() {
    displayBooks(books.filter(b => borrowedBooks.includes(b.id)), "borrowedBooks");
    displayBooks(books.filter(b => reservedBooks.includes(b.id)), "reservedBooks");
    updateCounts();
}

function updateAllFavoriteHearts() {
    document.querySelectorAll('.book-card .fav-heart').forEach(heart => {
        const card = heart.parentElement;
        const bookId = parseInt(card.querySelector('img').alt.match(/\d+/) || card.querySelector('h4').innerText); // fallback
        const idMatch = card.innerHTML.match(/toggleFavorite\((\d+)\)/);
        if (idMatch) {
            const id = parseInt(idMatch[1]);
            const isFav = favorites.includes(id);
            heart.innerHTML = isFav ? "❤️" : "♡";
            heart.className = isFav ? "fav-heart favorited" : "fav-heart";
        }
    });
}

// Display function
function displayBooks(list, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    list.forEach(book => {
        const div = document.createElement("div");
        div.className = "book-card";
        const isFav = favorites.includes(book.id);
        div.innerHTML = `
            <span class="fav-heart ${isFav ? 'favorited' : ''}" 
                  onclick="event.stopPropagation(); toggleFavorite(${book.id})">
                ${isFav ? '❤️' : '♡'}
            </span>
            <img src="${book.cover_image}" alt="${book.title}" onerror="this.src='https://via.placeholder.com/160x220?text=No+Image'">
            <h4>${book.title}</h4>
            <p>${book.category}</p>
            <span>⭐ ${book.rating} | $${book.price_per_day}/day</span>
        `;
        div.onclick = (e) => {
            if (!e.target.classList.contains('fav-heart')) openPopup(book.id);
        };
        container.appendChild(div);
    });
}

// Render all sections (only on load or search)
function renderAll() {
    const recommended = books
        .filter(b => b.rating >= 4.7)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3); // Only top 3

    const newArrivals = [...books]
        .sort((a, b) => new Date(b.publication_date) - new Date(a.publication_date))
        .slice(0, 4);

    displayBooks(books.filter(b => borrowedBooks.includes(b.id)), "borrowedBooks");
    displayBooks(books.filter(b => reservedBooks.includes(b.id)), "reservedBooks");
    displayBooks(recommended, "recommended"); // Only 3
    displayBooks(newArrivals, "newArrivals");
    displayBooks(books.filter(b => b.category === "Business & Finance"), "category-business");
    displayBooks(books.filter(b => b.category === "Arabic Literature"), "category-arabic");
    displayBooks(books.filter(b => b.category === "Fantasy & Adventure"), "category-fantasy");
    displayBooks(books.filter(b => b.category === "Self-Development"), "category-selfdev");
    displayBooks(books.filter(b => b.category === "Self-Help & Psychology"), "category-psychology");
    displayBooks(books, "allBooks");
    updateCounts();
}

// Search
document.getElementById("searchInput").addEventListener("keyup", function () {
    const term = this.value.toLowerCase();
    const filtered = books.filter(b => 
        b.title.toLowerCase().includes(term) || 
        b.category.toLowerCase().includes(term)
    );

    if (term) {
        document.querySelectorAll(".main-content h2").forEach(h2 => {
            const section = h2.nextElementSibling;
            if (section && section.id !== "allBooks") {
                h2.style.display = "none";
                section.style.display = "none";
            }
        });
    } else {
        document.querySelectorAll(".main-content h2").forEach(h2 => {
            h2.style.display = "block";
            if (h2.nextElementSibling) h2.nextElementSibling.style.display = "grid";
        });
    }
    displayBooks(filtered, "allBooks");
});

// Initial load
renderAll();
