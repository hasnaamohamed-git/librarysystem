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
function openPopup(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) {
        console.error(`Book with ID ${bookId} not found.`);
        return;
    }

    document.getElementById("popupImage").src = book.cover_image;
    document.getElementById("popupTitle").innerText = book.title;
    document.getElementById("popupDesc").innerText = book.description;
    document.getElementById("popupAuthor").innerText = `Author ID: ${book.author_id}`;
    document.getElementById("popupAvailable").innerText = book.available_copies;

    const starsContainer = document.getElementById("popupStars");
    starsContainer.innerHTML = "";
    const fullStars = Math.round(book.rating); 

    for (let i = 0; i < 5; i++) {
        starsContainer.innerHTML += i < fullStars ? "⭐" : "☆";
    }

    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// =============== DATA FILTERS & SORTING ===============

// 1. الكتب الموصى بها (Recommended): أعلى تقييماً (أعلى من 4.7)
const recommended = books.filter(book => book.rating >= 4.7);

// 2. الوافدون الجدد (New Arrivals): أحدث 4 كتب (فرز حسب تاريخ النشر)
const validDateBooks = books.filter(book => book.publication_date && !isNaN(new Date(book.publication_date)));
const newArrivals = validDateBooks.sort((a, b) => {
    return new Date(b.publication_date) - new Date(a.publication_date); 
}).slice(0, 4);

// 3. جميع الكتب (All Books): الآن تشمل جميع الكتب (بدون تصفية)
const allBooks = books;


// =============== DISPLAY Function ===============
function displayBooks(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    data.forEach(book => {
        const div = document.createElement("div");
        div.className = "book-card";

        div.innerHTML = `
            <img src="${book.cover_image}" alt="Book Cover for ${book.title}">
            <h4>${book.title}</h4>
            <p>${book.category}</p>
            <span>⭐ ${book.rating} | $${book.price_per_day}/day</span>
        `;

        div.onclick = () => openPopup(book.id); 
        container.appendChild(div);
    });
}

// =============== INITIAL LOAD & SEARCH ===============

displayBooks(recommended, "recommended");
displayBooks(newArrivals, "newArrivals");
displayBooks(allBooks, "allBooks");


document.getElementById("searchInput").addEventListener("keyup", function () {
    const value = this.value.toLowerCase().trim();

    const recommendedContainer = document.getElementById("recommended");
    const newArrivalsContainer = document.getElementById("newArrivals");
    const allBooksContainer = document.getElementById("allBooks");

    const recommendedTitle = recommendedContainer.previousElementSibling;
    const newArrivalsTitle = newArrivalsContainer.previousElementSibling;
    const allBooksTitle = allBooksContainer.previousElementSibling;

    if (value) {
        const filtered = books.filter(book =>
            book.title.toLowerCase().includes(value)
        );

        
        displayBooks([], "recommended"); 
        displayBooks([], "newArrivals");  
        displayBooks(filtered, "allBooks"); 
        
      
        if(recommendedTitle) recommendedTitle.style.display = 'none';
        if(newArrivalsTitle) newArrivalsTitle.style.display = 'none';
        
        if(allBooksTitle) {
            allBooksTitle.style.display = 'block';
            allBooksTitle.innerText = `Search Results (${filtered.length})`;
        }


    } else {

        displayBooks(recommended, "recommended");
        displayBooks(newArrivals, "newArrivals");
        displayBooks(allBooks, "allBooks"); 
        
        if(recommendedTitle) {
            recommendedTitle.style.display = 'block';
            recommendedTitle.innerText = 'Recommended for You';
        }
        if(newArrivalsTitle) {
            newArrivalsTitle.style.display = 'block';
            newArrivalsTitle.innerText = 'New Arrivals';
        }
        if(allBooksTitle) {
            allBooksTitle.style.display = 'block';
            allBooksTitle.innerText = 'All Books';
        }
    }
});