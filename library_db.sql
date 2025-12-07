-- ============================================
-- Complete Library Management System Database
-- With Sample Data, Triggers, Views, and Procedures
-- ============================================

-- Create database
CREATE DATABASE IF NOT EXISTS library_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE library_db;

-- ============================================
-- 1. USERS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('member', 'librarian', 'admin') NOT NULL DEFAULT 'member',
    profile_image VARCHAR(255) DEFAULT 'default_avatar.png',
    registration_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('active', 'suspended') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_role (role),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 2. AUTHORS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS authors (
    author_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    biography TEXT,
    birth_date DATE,
    photo VARCHAR(255) DEFAULT 'default_author.png',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 3. BOOKS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS books (
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    author_id INT NOT NULL,
    category VARCHAR(100) NOT NULL,
    description TEXT,
    cover_image VARCHAR(255) DEFAULT 'default_book.png',
    publication_date DATE,
    total_copies INT NOT NULL DEFAULT 1,
    available_copies INT NOT NULL DEFAULT 1,
    price_per_day DECIMAL(10, 2) NOT NULL DEFAULT 5.00,
    average_rating DECIMAL(3, 2) DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES authors(author_id) 
        ON DELETE RESTRICT ON UPDATE CASCADE,
    INDEX idx_title (title),
    INDEX idx_category (category),
    INDEX idx_author (author_id),
    INDEX idx_available (available_copies),
    CHECK (available_copies >= 0),
    CHECK (available_copies <= total_copies),
    CHECK (average_rating >= 0 AND average_rating <= 5)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 4. BORROWINGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS borrowings (
    borrowing_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    book_id INT NOT NULL,
    librarian_id INT,
    borrow_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    due_date DATE,
    return_date DATE,
    status ENUM('pending_pickup', 'borrowed', 'returned', 'overdue') DEFAULT 'pending_pickup',
    total_cost DECIMAL(10, 2) NOT NULL,
    is_paid BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) 
        ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (book_id) REFERENCES books(book_id) 
        ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (librarian_id) REFERENCES users(user_id) 
        ON DELETE SET NULL ON UPDATE CASCADE,
    INDEX idx_user (user_id),
    INDEX idx_book (book_id),
    INDEX idx_status (status),
    INDEX idx_due_date (due_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 5. RESERVATIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS reservations (
    reservation_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    book_id INT NOT NULL,
    reservation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('waiting', 'ready', 'collected', 'cancelled') DEFAULT 'waiting',
    queue_position INT,
    notified_date DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) 
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (book_id) REFERENCES books(book_id) 
        ON DELETE CASCADE ON UPDATE CASCADE,
    INDEX idx_user (user_id),
    INDEX idx_book (book_id),
    INDEX idx_status (status),
    INDEX idx_queue (book_id, queue_position)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 6. FINES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS fines (
    fine_id INT PRIMARY KEY AUTO_INCREMENT,
    borrowing_id INT NOT NULL,
    user_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    days_overdue INT NOT NULL,
    is_paid BOOLEAN DEFAULT FALSE,
    payment_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (borrowing_id) REFERENCES borrowings(borrowing_id) 
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) 
        ON DELETE RESTRICT ON UPDATE CASCADE,
    INDEX idx_user (user_id),
    INDEX idx_borrowing (borrowing_id),
    INDEX idx_paid (is_paid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 7. COMMENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS comments (
    comment_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    book_id INT NOT NULL,
    content TEXT NOT NULL,
    rating INT NOT NULL,
    comment_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) 
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (book_id) REFERENCES books(book_id) 
        ON DELETE CASCADE ON UPDATE CASCADE,
    INDEX idx_user (user_id),
    INDEX idx_book (book_id),
    INDEX idx_rating (rating),
    CHECK (rating >= 1 AND rating <= 5)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 8. QUOTES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS quotes (
    quote_id INT PRIMARY KEY AUTO_INCREMENT,
    content TEXT NOT NULL,
    book_id INT,
    author_id INT,
    added_by_admin_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (book_id) REFERENCES books(book_id) 
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (author_id) REFERENCES authors(author_id) 
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (added_by_admin_id) REFERENCES users(user_id) 
        ON DELETE RESTRICT ON UPDATE CASCADE,
    INDEX idx_book (book_id),
    INDEX idx_author (author_id),
    CHECK (book_id IS NOT NULL OR author_id IS NOT NULL)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 9. USER_PREFERENCES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS user_preferences (
    preference_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL UNIQUE,
    favorite_books JSON,
    favorite_authors JSON,
    favorite_categories JSON,
    books_read JSON,
    books_to_read JSON,
    reading_count INT DEFAULT 0,
    theme_preference VARCHAR(50) DEFAULT 'pink-blue',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) 
        ON DELETE CASCADE ON UPDATE CASCADE,
    INDEX idx_user (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 10. CHATBOT_HISTORY TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS chatbot_history (
    chat_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    message TEXT NOT NULL,
    response TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) 
        ON DELETE CASCADE ON UPDATE CASCADE,
    INDEX idx_user (user_id),
    INDEX idx_timestamp (timestamp)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 11. ACTIVITY_LOG TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS activity_log (
    activity_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    action_type VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) 
        ON DELETE SET NULL ON UPDATE CASCADE,
    INDEX idx_user (user_id),
    INDEX idx_action (action_type),
    INDEX idx_timestamp (timestamp)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 12. SETTINGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS settings (
    setting_id INT PRIMARY KEY AUTO_INCREMENT,
    setting_name VARCHAR(100) NOT NULL UNIQUE,
    setting_value VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- INSERT SAMPLE DATA
-- ============================================

-- Insert Users (1 Admin, 4 Librarians, 5 Members)
INSERT INTO users (username, email, password_hash, role, status, registration_date) VALUES
('admin', 'admin@library.com', '$2y$10$abcdefghijklmnopqrstuvwxyz123456', 'admin', 'active', '2024-01-01 08:00:00'),
('librarian1', 'lib1@library.com', '$2y$10$abcdefghijklmnopqrstuvwxyz123456', 'librarian', 'active', '2024-01-15 09:00:00'),
('librarian2', 'lib2@library.com', '$2y$10$abcdefghijklmnopqrstuvwxyz123456', 'librarian', 'active', '2024-02-01 10:00:00'),
('librarian3', 'lib3@library.com', '$2y$10$abcdefghijklmnopqrstuvwxyz123456', 'librarian', 'active', '2024-03-01 11:00:00'),
('librarian4', 'lib4@library.com', '$2y$10$abcdefghijklmnopqrstuvwxyz123456', 'librarian', 'active', '2024-04-01 12:00:00'),
('ahmed_ali', 'ahmed@example.com', '$2y$10$abcdefghijklmnopqrstuvwxyz123456', 'member', 'active', '2024-05-10 14:00:00'),
('sara_mohamed', 'sara@example.com', '$2y$10$abcdefghijklmnopqrstuvwxyz123456', 'member', 'active', '2024-06-15 15:00:00'),
('khaled_hassan', 'khaled@example.com', '$2y$10$abcdefghijklmnopqrstuvwxyz123456', 'member', 'active', '2024-07-20 16:00:00'),
('fatima_omar', 'fatima@example.com', '$2y$10$abcdefghijklmnopqrstuvwxyz123456', 'member', 'active', '2024-08-25 17:00:00'),
('youssef_ibrahim', 'youssef@example.com', '$2y$10$abcdefghijklmnopqrstuvwxyz123456', 'member', 'active', '2024-09-30 18:00:00');

-- Insert Authors
INSERT INTO authors (name, biography, birth_date, photo) VALUES
('Robert Kiyosaki', 'American businessman and author of Rich Dad Poor Dad, a book on financial literacy and investing.', '1947-04-08', 'https://th.bing.com/th/id/R.9d5bd50fb9acc76597a455b6cb122f6f?rik=B2Yo6SNPmAMikg&riu=http%3a%2f%2fnetworktambayan.weebly.com%2fuploads%2f1%2f2%2f9%2f0%2f12903731%2f238086710.jpg&ehk=pMpegMraaWimG6TFp4IKb3SaxxC3zrgNvqtMLc3%2fZq8%3d&risl=&pid=ImgRaw&r=0'),
('Ihsan Abdel Quddous', 'إحسان عبد القدوس - Egyptian writer and novelist known for his romantic and social novels.', '1919-01-01', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIg9MxGK2d0TbMS0DVzBLdwrsXd1u-BgPAI-szK6Mv-VYOLt3iIiuoE1ghIuPEzqyhFHnce7Pmwihgq7jKtTcuespxLFnguY2UuyrjvVu&s=10'),
('Naguib Mahfouz', 'نجيب محفوظ - Egyptian Nobel Prize-winning author, known for Cairo Trilogy.', '1911-12-11', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptZHpWgN_d9LDxsRJn97AB2WrQbUvlp9yNHK-UPmM0fFJTCa4no6sVGuwU8Li9VXUPOF68serQBwxdrq_ZyOskWBZCf9qpxwSPalLQX8tgg&s=10'),
('J.K. Rowling', 'British author, creator of the Harry Potter fantasy series.', '1965-07-31', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWni83eyAQynahbD0PwrkbFshIst-cMKiZAm-MDKqSXupchkPL-eLaNIGB9PjBHnF5ehBJ2j7199MdvwjFFY4CFVJWu877ZeioR_9aA97&s=10'),
('Agatha Christie', 'British crime novelist, known as the Queen of Mystery.', '1890-09-15', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidrI-o4YsxBTHyw5C894l7Uhk3Q4Usqkb0Ki8pGp1LYdRduXfM20dcXi5b2Aaj1WgX_gdz8s_ofG_Zt3JZed5Xa6PnGUPskZXJpXDSNUyRg&s=10'),
('Taha Hussein', 'طه حسين - Egyptian writer and intellectual, Dean of Arabic Literature.', '1889-11-15', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1LVqF_iyUOha13nU60DGd9hVhOd1wcDNPxH6cmNYY2EOMpVcC9Txiy0lXykwp-ybsv6pOur5rivYq8nohS9wIicyLx_PiiMvscss6eh0n&s=10'),
('George Orwell', 'British novelist and essayist, known for 1984 and Animal Farm.', '1903-06-25', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDff7rjfTY5XEJ7RC3_g5Dh8EOULqwyI5MiGA9XVF3OVage9BrGKBPf-WtOyH2Mvz8vp1O9vFrvhl09WfhjsKFvhDltjdp8wcMFROQo8cv&s=10'),
('Paulo Coelho', 'Brazilian lyricist and novelist, author of The Alchemist.', '1947-08-24', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq9OVzRqVFJZf84VyEDppWBUjK-ThYCFrGuLGGI3b-s27cuS9MSIAlKYMKMvTAZL0mJVB3CIJ-gjLt_nulCpJgbkSMorgpEGLj08ZLs3qX&s=10'),
('Dale Carnegie', 'American writer and lecturer on self-improvement and interpersonal skills.', '1888-11-24', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdrpBVx8WSqPcpjTf2HVXK3fq7bHyx46QGQspUSbGRh1x7inGJ3eb2hqb-osMRxFHwF9W8XY3zDSShVj5u8ljdIrpS9nFl0qzULiFb5P9oSw&s=10'),
('Alaa Al Aswany', 'علاء الأسواني - Egyptian writer and novelist, author of The Yacoubian Building.', '1957-05-26', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81TExhFxiC9BXIbhC3VsXYX1YwsVw-qGdvH_EBnpBhTqaLo1psdpWf_bfvy5euQ4uUIiJe2SIV1xDM9H95tHVVdBuytBo4sOvKSrLzomEPw&s=10');

-- Insert Books - 5 Categories with 5 books each
INSERT INTO books (title, author_id, category, description, cover_image, publication_date, total_copies, available_copies, price_per_day) VALUES
-- Business & Finance
('Rich Dad Poor Dad', 1, 'Business & Finance', 'A personal finance book that advocates financial independence through investing, real estate, owning businesses, and building wealth.', 'https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg', '1997-04-01', 5, 3, 8.00),
('The Intelligent Investor', 1, 'Business & Finance', 'Benjamin Graham''s classic guide to value investing and financial wisdom.', 'https://m.media-amazon.com/images/I/71vllLbpsdL.UF1000,1000_QL80.jpg', '1949-01-01', 3, 2, 7.00),
('Think and Grow Rich', 9, 'Business & Finance', 'Napoleon Hill''s timeless classic on success and personal achievement.', 'https://m.media-amazon.com/images/I/61IxJuRI39L.AC_UF1000,1000_QL80.jpg', '1937-01-01', 4, 4, 6.00),
('The 4-Hour Work Week', 1, 'Business & Finance', 'Timothy Ferriss guide to lifestyle design and escaping the 9-5 grind.', 'https://m.media-amazon.com/images/I/71vO9Tbf4-L.AC_UF1000,1000_QL80.jpg', '2007-04-24', 3, 1, 7.50),
('Zero to One', 1, 'Business & Finance', 'Peter Thiel guide to building innovative startups and thinking differently.', 'https://m.media-amazon.com/images/I/51zGCdRQXOL.AC_UF1000,1000_QL80.jpg', '2014-09-16', 4, 3, 8.00),

-- Arabic Literature
('أبي الذي أكره', 2, 'Arabic Literature', 'رواية عن العلاقات الأسرية المعقدة والصراع بين الأجيال', 'https://www.tirryaq.com/wp-content/uploads/2022/04/%D8%A3%D8%A8%D9%8A-%D8%A7%D9%84%D8%B0%D9%8A%D8%A3%D9%83%D8%B1%D9%87.jpg', '1960-01-01', 4, 2, 6.00),
('الثلاثية - Cairo Trilogy', 3, 'Arabic Literature', 'ثلاثية نجيب محفوظ الشهيرة: بين القصرين، قصر الشوق، السكرية', 'https://i.ebayimg.com/images/g/f8AAAOSwpDdVUNHH/s-l400.jpg', '1956-01-01', 5, 4, 7.00),
('الأيام - The Days', 6, 'Arabic Literature', 'السيرة الذاتية لطه حسين في ثلاثة أجزاء', 'https://asfar.io/product/the-days-taha-hussein-youssef-nawfal/the-days-taha-hussein-youssef-nawfal.jpg', '1929-01-01', 3, 3, 5.50),
('عمارة يعقوبيان', 10, 'Arabic Literature', 'رواية تصور المجتمع المصري من خلال سكان عمارة واحدة', 'https://www.neelwafurat.com/images/lb/abookstore/covers/normal/324/324381.jpg', '2002-01-01', 4, 2, 6.50),
('لا أحد ينام في الإسكندرية', 2, 'Arabic Literature', 'رواية تاريخية عن الإسكندرية في الحرب العالمية الثانية', 'https://diwanegypt.com/wp-content/uploads/2020/08/9789770910498-1.jpg', '1996-01-01', 3, 2, 6.00),
-- Fantasy & Adventure
('Harry Potter and the Philosophers Stone', 4, 'Fantasy & Adventure', 'The first book in the Harry Potter series about a young wizard discovering his magical heritage.', 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg/250px-Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg', '1997-06-26', 6, 4, 7.00),
('Harry Potter and the Chamber of Secrets', 4, 'Fantasy & Adventure', 'Harrys second year at Hogwarts with mysterious attacks and a hidden chamber.', 'https://tse3.mm.bing.net/th/id/OIP.zhjMmYnbBCD-QrignQ3QqQHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3https://images-na.ssl-images-amazon.com/images/I/81lAPl9Fl+L.jpg', '1998-07-02', 5, 3, 7.00),
('The Alchemist', 8, 'Fantasy & Adventure', 'A philosophical story about following your dreams and finding your personal legend.', 'https://tse1.mm.bing.net/th/id/OIP.8jO5wOWAtlNC-aQJWKKlPAHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3', '1988-01-01', 5, 4, 6.50),
('The Hobbit', 4, 'Fantasy & Adventure', 'J.R.R. Tolkiens classic tale of Bilbo Baggins unexpected journey.', 'https://th.bing.com/th/id/OIP.ANUHtJ7912YmyZWuwmWymwHaEo?w=256&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1', '1937-09-21', 4, 3, 7.50),
('The Chronicles of Narnia', 4, 'Fantasy & Adventure', 'C.S. Lewis magical world of Narnia and the adventures within.', 'https://th.bing.com/th/id/OIP.0vid4G0vy25Jy1k0m47oTAHaGY?w=204&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1', '1950-10-16', 4, 2, 7.00),

-- Mystery & Thriller
('Murder on the Orient Express', 5, 'Mystery & Thriller', 'Hercule Poirot investigates a murder on the famous Orient Express train.', 'https://th.bing.com/th/id/OIP.xz2rW2BMjgLTlQYN51POVAHaFj?w=210&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1', '1934-01-01', 4, 2, 6.50),

('And Then There Were None', 5, 'Mystery & Thriller', 'Ten strangers trapped on an island, dying one by one according to a nursery rhyme.', 'https://th.bing.com/th/id/OIP.fMkJme65G7aafUNKW6Et8gHaKZ?w=184&h=258&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1', '1939-11-06', 5, 3, 6.50),

('The Da Vinci Code', 5, 'Mystery & Thriller', 'Robert Langdon uncovers a religious mystery that could shake Christianity.', 'https://th.bing.com/th/id/OIP._Er4RjZdSRisoUq5KOqWOwHaLg?w=184&h=286&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1', '2003-03-18', 4, 2, 7.00),

('Gone Girl', 5, 'Mystery & Thriller', 'A psychological thriller about a missing wife and dark secrets.', 'https://th.bing.com/th/id/OIP.bDDKaN8Yqoue0LP3fhK1qwHaLH?w=115&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1', '2012-06-05', 3, 1, 7.50),

('The Girl with the Dragon Tattoo', 5, 'Mystery & Thriller', 'A journalist and a hacker investigate a decades-old disappearance.', 'https://th.bing.com/th/id/OIP.yirgwvCkFUpKYiQ513kR1AHaLH?w=115&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1', '2005-08-01', 4, 3, 7.00),

-- Self-Development
('How to Win Friends and Influence People', 9, 'Self-Development', 'Dale Carnegies timeless guide to building relationships and influencing others.', 'https://tse3.mm.bing.net/th/id/OIP.qNo41BIBgbh5GRMnsUs32AHaLb?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3', '1936-10-01', 5, 4, 6.00),

('The 7 Habits of Highly Effective People', 9, 'Self-Development', 'Stephen Coveys principle-centered approach to solving personal and professional problems.', 'https://tse4.mm.bing.net/th/id/OIP.8_SeZIaVtv6pZgfwe_JSfQHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3', '1989-08-15', 4, 3, 6.50),

('Atomic Habits', 9, 'Self-Development', 'James Clears guide to building good habits and breaking bad ones.', 'https://jamesclear.com/wp-content/uploads/2019/04/atomicHC-flat-1-e1556572683325.jpg', '2018-10-16', 6, 5, 7.00),

('The Power of Now', 8, 'Self-Development', 'Eckhart Tolles guide to spiritual enlightenment and living in the present.', 'https://tse3.mm.bing.net/th/id/OIP.7Q5PqgnL1bVp0Q42hSBSEQHaLJ?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3', '1997-01-01', 4, 2, 6.00),

('Mans Search for Meaning', 9, 'Self-Development', 'Viktor Frankls profound exploration of finding purpose through suffering.', 'https://tse4.mm.bing.net/th/id/OIP.F1PjeVnTf4_e1oo0HQkq3AHaLH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3', '1946-01-01', 3, 2, 5.50);

-- Insert Settings
INSERT INTO settings (setting_name, setting_value, description) VALUES
('fine_per_day', '2.00', 'Fine amount per day for overdue books'),
('max_borrow_days', '14', 'Maximum number of days to borrow a book'),
('max_books_per_user', '5', 'Maximum number of books a user can borrow at once'),
('reservation_hold_days', '3', 'Number of days to hold a reserved book before canceling');

-- Insert Borrowings
INSERT INTO borrowings (user_id, book_id, librarian_id, borrow_date, due_date, return_date, status, total_cost, is_paid) VALUES
(6, 1, 2, '2024-11-15 10:00:00', '2024-11-29', NULL, 'borrowed', 112.00, TRUE),
(7, 6, 3, '2024-11-20 14:30:00', '2024-12-04', NULL, 'borrowed', 84.00, TRUE),
(8, 11, 2, '2024-11-01 09:00:00', '2024-11-15', '2024-11-14', 'returned', 98.00, TRUE),
(9, 16, 4, '2024-11-25 11:00:00', '2024-12-09', NULL, 'borrowed', 91.00, FALSE),
(10, 21, 3, '2024-10-20 16:00:00', '2024-11-03', NULL, 'overdue', 84.00, FALSE);

-- Insert Reservations
INSERT INTO reservations (user_id, book_id, reservation_date, status, queue_position, notified_date) VALUES
(6, 4, '2024-12-01 10:00:00', 'waiting', 1, NULL),
(7, 19, '2024-12-02 14:00:00', 'waiting', 2, NULL),
(8, 24, '2024-12-03 09:00:00', 'ready', NULL, '2024-12-05 10:00:00'),
(9, 14, '2024-11-28 15:00:00', 'collected', NULL, '2024-11-30 10:00:00'),
(10, 8, '2024-12-04 11:00:00', 'waiting', 3, NULL);

-- Insert Fines
INSERT INTO fines (borrowing_id, user_id, amount, days_overdue, is_paid, payment_date) VALUES
(5, 10, 68.00, 34, FALSE, NULL),
(3, 8, 0.00, 0, TRUE, '2024-11-14'),
(1, 6, 16.00, 8, TRUE, '2024-12-05'),
(4, 9, 0.00, 0, FALSE, NULL),
(2, 7, 0.00, 0, TRUE, NULL);

-- Insert Comments
INSERT INTO comments (user_id, book_id, content, rating, comment_date) VALUES
-- Rich Dad Poor Dad
(6, 1, 'كتاب رائع غير تفكيري في المال والاستثمار! Highly recommended!', 5, '2024-11-16'),
(7, 1, 'Eye-opening concepts about financial literacy. Must read!', 5, '2024-11-17'),
(8, 1, 'Very practical advice on building wealth and passive income.', 4, '2024-11-18'),
(9, 1, 'Great book but some concepts need adaptation to our region.', 4, '2024-11-19'),
(10, 1, 'Changed my perspective on money completely!', 5, '2024-11-20'),
-- أبي الذي أكره
(6, 6, 'رواية مؤثرة جداً عن العلاقات الأسرية والصراعات النفسية', 5, '2024-11-21'),
(7, 6, 'إحسان عبد القدوس في أفضل حالاته، أسلوب سلس ومشوق', 5, '2024-11-22'),
(8, 6, 'قصة عميقة تلامس الواقع المصري في تلك الفترة', 4, '2024-11-23'),
(9, 6, 'رواية كلاسيكية يجب قراءتها لفهم الأدب العربي', 5, '2024-11-24'),
(10, 6, 'شخصيات معقدة وواقعية، تحفة أدبية', 4, '2024-11-25'),
-- Harry Potter
(6, 11, 'Magical world that captures your imagination! Perfect for all ages.', 5, '2024-11-26'),
(7, 11, 'Started the series and cant put it down. Amazing storytelling!', 5, '2024-11-27'),
(8, 11, 'A timeless classic that appeals to readers of all ages.', 5, '2024-11-28'),
(9, 11, 'J.K. Rowling created an incredible universe. Must read!', 4, '2024-11-29'),
(10, 11, 'The beginning of an epic journey. Love it!', 5, '2024-11-30'),
-- Murder on the Orient Express
(6, 16, 'Agatha Christie at her best! Brilliant mystery with unexpected twists.', 5, '2024-12-01'),
(7, 16, 'Classic whodunit that keeps you guessing until the end.', 5, '2024-12-02'),
(8, 16, 'Clever plot and fascinating characters. Highly recommended!', 4, '2024-12-03'),
(9, 16, 'One of the best mystery novels ever written.', 5, '2024-12-04'),
(10, 16, 'Poirot is an amazing detective! Love the suspense.', 4, '2024-12-05'),
-- How to Win Friends
(6, 21, 'Life-changing book about human relations and communication.', 5, '2024-12-06'),
(7, 21, 'Timeless principles that still work today. Essential reading!', 5, '2024-12-07'),
(8, 21, 'Practical advice that I use every day. Wonderful book!', 4, '2024-12-08'),
(9, 21, 'Dale Carnegie wisdom is priceless. Everyone should read this.', 5, '2024-12-09'),
(10, 21, 'Improved my social skills significantly. Thank you!', 5, '2024-12-10');

-- Insert Quotes
INSERT INTO quotes (content, book_id, author_id, added_by_admin_id) VALUES
('The rich do not work for money. They make money work for them.', 1, 1, 1),
('قراءة الكتب هي أفضل وسيلة للتعلم من تجارب الآخرين', NULL, 2, 1),
('الخوف لا يمنع الموت، إنما يمنع الحياة', NULL, 3, 1),
('It does not do to dwell on dreams and forget to live.', 11, 4, 1),
('The best way to find out if you can trust somebody is to trust them.', NULL, 1, 1),
('الحياة ليست عادلة، ولكن علينا أن نكون عادلين', NULL, 6, 1),
('If you want to be happy, be.', NULL, 8, 1),
('You can make more friends in two months by becoming interested in other people than you can in two years by trying to get other people interested in you.', 21, 9, 1),
('And when you want something, all the universe conspires in helping you to achieve it.', 13, 8, 1),
('التعليم هو السلاح الأقوى الذي يمكنك استخدامه لتغيير العالم', NULL, 10, 1);

-- Insert User Preferences (auto-created by trigger, but we add some data)
UPDATE user_preferences SET 
    favorite_books = JSON_ARRAY(1, 6, 11),
    favorite_authors = JSON_ARRAY(1, 2, 4),
    favorite_categories = JSON_ARRAY('Business & Finance', 'Arabic Literature', 'Fantasy & Adventure'),
    books_read = JSON_ARRAY(11),
    books_to_read = JSON_ARRAY(1, 6, 16),
    reading_count = 3
WHERE user_id = 6;

UPDATE user_preferences SET 
    favorite_books = JSON_ARRAY(6, 21),
    favorite_authors = JSON_ARRAY(2, 9),
    favorite_categories = JSON_ARRAY('Arabic Literature', 'Self-Development'),
    books_read = JSON_ARRAY(6),
    books_to_read = JSON_ARRAY(21, 13),
    reading_count = 5
WHERE user_id = 7;

UPDATE user_preferences SET 
    favorite_books = JSON_ARRAY(11, 16),
    favorite_authors = JSON_ARRAY(4, 5),
    favorite_categories = JSON_ARRAY('Fantasy & Adventure', 'Mystery & Thriller'),
    books_read = JSON_ARRAY(11, 16),
    books_to_read = JSON_ARRAY(12, 17),
    reading_count = 8
WHERE user_id = 8;

UPDATE user_preferences SET 
    favorite_books = JSON_ARRAY(1, 13, 21),
    favorite_authors = JSON_ARRAY(1, 8, 9),
    favorite_categories = JSON_ARRAY('Business & Finance', 'Self-Development'),
    books_read = JSON_ARRAY(1, 21),
    books_to_read = JSON_ARRAY(3, 23),
    reading_count = 4
WHERE user_id = 9;

UPDATE user_preferences SET 
    favorite_books = JSON_ARRAY(16, 21),
    favorite_authors = JSON_ARRAY(5, 9),
    favorite_categories = JSON_ARRAY('Mystery & Thriller', 'Self-Development'),
    books_read = JSON_ARRAY(21),
    books_to_read = JSON_ARRAY(16, 17, 18),
    reading_count = 2
WHERE user_id = 10;

-- Insert Chatbot History
INSERT INTO chatbot_history (user_id, message, response, timestamp) VALUES
(6, 'Can you recommend a good business book?', 'I recommend "Rich Dad Poor Dad" by Robert Kiyosaki. It is an excellent book about financial literacy and building wealth. Would you like to know more about it?', '2024-11-15 10:30:00'),
(6, 'Tell me more about it', 'Rich Dad Poor Dad teaches you how to make money work for you instead of working for money. It covers investing, real estate, and building passive income streams. The book has changed millions of lives!', '2024-11-15 10:32:00'),
(7, 'هل يوجد روايات عربية جيدة؟', 'بالتأكيد! أنصحك برواية "أبي الذي أكره" لإحسان عبد القدوس. إنها رواية رائعة عن العلاقات الأسرية. هل تريد معرفة المزيد؟', '2024-11-20 15:00:00'),
(7, 'نعم، أخبرني المزيد', 'هذه الرواية تتناول الصراعات الأسرية والعلاقات المعقدة بين الآباء والأبناء. أسلوب إحسان عبد القدوس سلس ومشوق، وهي من كلاسيكيات الأدب العربي.', '2024-11-20 15:02:00'),
(8, 'What is Harry Potter about?', 'Harry Potter is a fantasy series about a young wizard who discovers his magical heritage on his 11th birthday. The series follows his adventures at Hogwarts School of Witchcraft and Wizardry. It is a tale of friendship, courage, and the battle between good and evil.', '2024-11-26 14:00:00'),
(9, 'Do you have mystery books?', 'Yes! We have excellent mystery books including Agatha Christie classics like "Murder on the Orient Express" and "And Then There Were None". Both are masterpieces of the mystery genre. Which would you like to borrow?', '2024-12-01 16:00:00'),
(10, 'I need help with self-improvement', 'Great! I recommend "How to Win Friends and Influence People" by Dale Carnegie. It is a timeless classic on building relationships and communication skills. We also have "Atomic Habits" for building good habits. What area would you like to focus on?', '2024-12-06 11:00:00'),
(6, 'How can I reserve a book?', 'To reserve a book, simply go to the book details page and click the "Reserve" button. You will be notified when the book becomes available. The library holds reservations for 3 days.', '2024-12-07 09:00:00'),
(7, 'كم يوم يمكنني استعارة كتاب؟', 'يمكنك استعارة الكتاب لمدة 14 يوم كحد أقصى. إذا تأخرت في الإرجاع، ستكون هناك غرامة 2 جنيه لكل يوم تأخير.', '2024-12-07 10:00:00'),
(8, 'What are the borrowing fees?', 'Borrowing fees vary by book. Most books cost between 5-8 EGP per day. You can see the exact price on each book details page. Late returns incur a fine of 2 EGP per day.', '2024-12-07 11:00:00');

-- Insert Activity Log
INSERT INTO activity_log (user_id, action_type, description, ip_address, user_agent, timestamp) VALUES
(1, 'LOGIN', 'Admin logged in successfully', '192.168.1.100', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', '2024-12-07 08:00:00'),
(1, 'ADD_BOOK', 'Added new book: Rich Dad Poor Dad', '192.168.1.100', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', '2024-12-07 08:15:00'),
(2, 'LOGIN', 'Librarian1 logged in', '192.168.1.101', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', '2024-12-07 09:00:00'),
(6, 'REGISTER', 'New member registered: ahmed_ali', '192.168.1.150', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0)', '2024-12-07 09:30:00'),
(6, 'LOGIN', 'Member ahmed_ali logged in', '192.168.1.150', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0)', '2024-12-07 09:31:00'),
(6, 'BORROW_REQUEST', 'Requested to borrow: Rich Dad Poor Dad', '192.168.1.150', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0)', '2024-12-07 09:45:00'),
(2, 'APPROVE_BORROW', 'Approved borrowing for user ahmed_ali', '192.168.1.101', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', '2024-12-07 10:00:00'),
(7, 'ADD_REVIEW', 'Added review for book: أبي الذي أكره', '192.168.1.151', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', '2024-12-07 10:30:00'),
(8, 'RETURN_BOOK', 'Returned book: Harry Potter', '192.168.1.152', 'Mozilla/5.0 (Linux; Android 11)', '2024-12-07 11:00:00'),
(1, 'ADD_QUOTE', 'Added new inspirational quote', '192.168.1.100', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', '2024-12-07 11:30:00');

-- ============================================
-- TRIGGERS
-- ============================================

DELIMITER //





-- Trigger: Update book average rating after new comment
CREATE TRIGGER update_book_rating_after_insert
AFTER INSERT ON comments
FOR EACH ROW
BEGIN
    UPDATE books 
    SET average_rating = (
        SELECT ROUND(AVG(rating), 2) 
        FROM comments 
        WHERE book_id = NEW.book_id
    )
    WHERE book_id = NEW.book_id;
END//

-- Trigger: Update book average rating after comment update
CREATE TRIGGER update_book_rating_after_update
AFTER UPDATE ON comments
FOR EACH ROW
BEGIN
    UPDATE books 
    SET average_rating = (
        SELECT ROUND(AVG(rating), 2) 
        FROM comments 
        WHERE book_id = NEW.book_id
    )
    WHERE book_id = NEW.book_id;
END//

-- Trigger: Update book average rating after comment delete
CREATE TRIGGER update_book_rating_after_delete
AFTER DELETE ON comments
FOR EACH ROW
BEGIN
    UPDATE books 
    SET average_rating = COALESCE((
        SELECT ROUND(AVG(rating), 2) 
        FROM comments 
        WHERE book_id = OLD.book_id
    ), 0)
    WHERE book_id = OLD.book_id;
END//

-- Trigger: Decrease available copies when book borrowed
CREATE TRIGGER decrease_copies_on_borrow
AFTER INSERT ON borrowings
FOR EACH ROW
BEGIN
    IF NEW.status = 'pending_pickup' OR NEW.status = 'borrowed' THEN
        UPDATE books 
        SET available_copies = available_copies - 1 
        WHERE book_id = NEW.book_id AND available_copies > 0;
    END IF;
END//

-- Trigger: Increase available copies when book returned
CREATE TRIGGER increase_copies_on_return
AFTER UPDATE ON borrowings
FOR EACH ROW
BEGIN
    IF OLD.status != 'returned' AND NEW.status = 'returned' THEN
        UPDATE books 
        SET available_copies = available_copies + 1 
        WHERE book_id = NEW.book_id;
    END IF;
END//

-- Trigger: Auto-create user preferences on new user
CREATE TRIGGER create_user_preferences
AFTER INSERT ON users
FOR EACH ROW
BEGIN
    INSERT INTO user_preferences (user_id, favorite_books, favorite_authors, favorite_categories, books_read, books_to_read)
    VALUES (NEW.user_id, '[]', '[]', '[]', '[]', '[]');
END//

-- Trigger: Auto-update overdue status
CREATE TRIGGER check_overdue_status
BEFORE UPDATE ON borrowings
FOR EACH ROW
BEGIN
    IF NEW.status = 'borrowed' AND NEW.due_date < CURDATE() THEN
        SET NEW.status = 'overdue';
    END IF;
END//

DELIMITER ;

-- ============================================
-- VIEWS
-- ============================================

-- View: Active Borrowings
CREATE OR REPLACE VIEW active_borrowings AS
SELECT 
    b.borrowing_id,
    b.borrow_date,
    b.due_date,
    b.status,
    b.total_cost,
    b.is_paid,
    u.user_id,
    u.username,
    u.email,
    bk.book_id,
    bk.title AS book_title,
    bk.cover_image,
    a.name AS author_name,
    DATEDIFF(b.due_date, CURDATE()) AS days_until_due,
    CASE 
        WHEN b.status IN ('borrowed', 'overdue') AND CURDATE() > b.due_date THEN DATEDIFF(CURDATE(), b.due_date)
        ELSE 0 
    END AS days_overdue
FROM borrowings b
JOIN users u ON b.user_id = u.user_id
JOIN books bk ON b.book_id = bk.book_id
JOIN authors a ON bk.author_id = a.author_id
WHERE b.status IN ('pending_pickup', 'borrowed', 'overdue');

-- View: Books Catalog with Full Details
CREATE OR REPLACE VIEW books_catalog AS
SELECT 
    b.book_id,
    b.title,
    b.category,
    b.description,
    b.cover_image,
    b.publication_date,
    b.total_copies,
    b.available_copies,
    b.price_per_day,
    b.average_rating,
    a.author_id,
    a.name AS author_name,
    a.photo AS author_photo,
    a.biography AS author_biography,
    COUNT(DISTINCT c.comment_id) AS review_count,
    COUNT(DISTINCT br.borrowing_id) AS total_borrows,
    CASE 
        WHEN b.available_copies > 0 THEN 'available'
        ELSE 'unavailable'
    END AS availability_status
FROM books b
JOIN authors a ON b.author_id = a.author_id
LEFT JOIN comments c ON b.book_id = c.book_id
LEFT JOIN borrowings br ON b.book_id = br.book_id
GROUP BY b.book_id, a.author_id;

-- View: User Reading Statistics
CREATE OR REPLACE VIEW user_statistics AS
SELECT 
    u.user_id,
    u.username,
    u.email,
    u.registration_date,
    u.status,
    COUNT(DISTINCT b.borrowing_id) AS total_borrowings,
    COUNT(DISTINCT CASE WHEN b.status IN ('borrowed', 'pending_pickup') THEN b.borrowing_id END) AS active_borrowings,
    COUNT(DISTINCT CASE WHEN b.status = 'returned' THEN b.borrowing_id END) AS returned_borrowings,
    COUNT(DISTINCT r.reservation_id) AS active_reservations,
    COALESCE(SUM(b.total_cost), 0) AS total_spent,
    COALESCE(SUM(f.amount), 0) AS total_fines,
    COALESCE(SUM(CASE WHEN f.is_paid = FALSE THEN f.amount ELSE 0 END), 0) AS unpaid_fines,
    up.reading_count,
    JSON_LENGTH(up.favorite_books) AS favorite_books_count
FROM users u
LEFT JOIN borrowings b ON u.user_id = b.user_id
LEFT JOIN reservations r ON u.user_id = r.user_id AND r.status = 'waiting'
LEFT JOIN fines f ON u.user_id = f.user_id
LEFT JOIN user_preferences up ON u.user_id = up.user_id
WHERE u.role = 'member'
GROUP BY u.user_id;

-- View: Popular Books
CREATE OR REPLACE VIEW popular_books AS
SELECT 
    b.book_id,
    b.title,
    b.cover_image,
    b.category,
    a.name AS author_name,
    b.average_rating,
    COUNT(DISTINCT br.borrowing_id) AS borrow_count,
    COUNT(DISTINCT c.comment_id) AS review_count,
    COUNT(DISTINCT r.reservation_id) AS reservation_count
FROM books b
JOIN authors a ON b.author_id = a.author_id
LEFT JOIN borrowings br ON b.book_id = br.book_id
LEFT JOIN comments c ON b.book_id = c.book_id
LEFT JOIN reservations r ON b.book_id = r.book_id
GROUP BY b.book_id
ORDER BY borrow_count DESC, b.average_rating DESC;

-- View: Financial Overview
CREATE OR REPLACE VIEW financial_overview AS
SELECT 
    DATE_FORMAT(b.borrow_date, '%Y-%m') AS month,
    COUNT(DISTINCT b.borrowing_id) AS total_transactions,
    SUM(b.total_cost) AS total_revenue,
    SUM(CASE WHEN b.is_paid = TRUE THEN b.total_cost ELSE 0 END) AS paid_revenue,
    SUM(CASE WHEN b.is_paid = FALSE THEN b.total_cost ELSE 0 END) AS pending_revenue,
    SUM(f.amount) AS fine_revenue,
    SUM(CASE WHEN f.is_paid = TRUE THEN f.amount ELSE 0 END) AS fine_collected,
    (SUM(b.total_cost) + SUM(f.amount)) AS total_income
FROM borrowings b
LEFT JOIN fines f ON b.borrowing_id = f.borrowing_id
GROUP BY DATE_FORMAT(b.borrow_date, '%Y-%m')
ORDER BY month DESC;

-- View: Overdue Books Report
CREATE OR REPLACE VIEW overdue_books_report AS
SELECT 
    b.borrowing_id,
    u.user_id,
    u.username,
    u.email,
    bk.title AS book_title,
    b.borrow_date,
    b.due_date,
    DATEDIFF(CURDATE(), b.due_date) AS days_overdue,
    (DATEDIFF(CURDATE(), b.due_date) * (SELECT setting_value FROM settings WHERE setting_name = 'fine_per_day')) AS calculated_fine,
    b.total_cost,
    b.is_paid
FROM borrowings b
JOIN users u ON b.user_id = u.user_id
JOIN books bk ON b.book_id = bk.book_id
WHERE b.status = 'overdue' AND b.return_date IS NULL
ORDER BY days_overdue DESC;

-- View: Category Performance
CREATE OR REPLACE VIEW category_performance AS
SELECT 
    b.category,
    COUNT(DISTINCT b.book_id) AS total_books,
    SUM(b.total_copies) AS total_copies,
    SUM(b.available_copies) AS available_copies,
    AVG(b.average_rating) AS avg_category_rating,
    COUNT(DISTINCT br.borrowing_id) AS total_borrows,
    COUNT(DISTINCT c.comment_id) AS total_reviews
FROM books b
LEFT JOIN borrowings br ON b.book_id = br.book_id
LEFT JOIN comments c ON b.book_id = c.book_id
GROUP BY b.category
ORDER BY total_borrows DESC;

-- ============================================
-- STORED PROCEDURES
-- ============================================

DELIMITER //

-- Procedure: Calculate Fine for Overdue Book
CREATE PROCEDURE calculate_overdue_fine(
    IN p_borrowing_id INT,
    OUT p_fine_amount DECIMAL(10,2),
    OUT p_days_overdue INT
)
BEGIN
    DECLARE v_due_date DATE;
    DECLARE v_return_date DATE;
    DECLARE v_fine_per_day DECIMAL(10,2);
    
    -- Get fine rate from settings
    SELECT CAST(setting_value AS DECIMAL(10,2)) INTO v_fine_per_day
    FROM settings WHERE setting_name = 'fine_per_day';
    
    -- Get borrowing details
    SELECT due_date, return_date INTO v_due_date, v_return_date
    FROM borrowings WHERE borrowing_id = p_borrowing_id;
    
    -- Calculate days overdue
    IF v_return_date IS NULL THEN
        SET p_days_overdue = DATEDIFF(CURDATE(), v_due_date);
    ELSE
        SET p_days_overdue = DATEDIFF(v_return_date, v_due_date);
    END IF;
    
    -- Calculate fine (only if overdue)
    IF p_days_overdue > 0 THEN
        SET p_fine_amount = p_days_overdue * v_fine_per_day;
    ELSE
        SET p_fine_amount = 0;
        SET p_days_overdue = 0;
    END IF;
END//

-- Procedure: Process Book Return
CREATE PROCEDURE process_book_return(
    IN p_borrowing_id INT,
    IN p_librarian_id INT
)
BEGIN
    DECLARE v_user_id INT;
    DECLARE v_fine_amount DECIMAL(10,2);
    DECLARE v_days_overdue INT;
    
    -- Get user_id
    SELECT user_id INTO v_user_id FROM borrowings WHERE borrowing_id = p_borrowing_id;
    
    -- Calculate fine
    CALL calculate_overdue_fine(p_borrowing_id, v_fine_amount, v_days_overdue);
    
    -- Update borrowing status
    UPDATE borrowings 
    SET status = 'returned', 
        return_date = CURDATE(),
        librarian_id = p_librarian_id
    WHERE borrowing_id = p_borrowing_id;
    
    -- Insert fine if overdue
    IF v_fine_amount > 0 THEN
        INSERT INTO fines (borrowing_id, user_id, amount, days_overdue, is_paid)
        VALUES (p_borrowing_id, v_user_id, v_fine_amount, v_days_overdue, FALSE);
    END IF;
    
    -- Log activity
    INSERT INTO activity_log (user_id, action_type, description)
    VALUES (p_librarian_id, 'RETURN_BOOK', CONCAT('Processed return for borrowing_id: ', p_borrowing_id));
END//

-- Procedure: Create Borrowing Request
CREATE PROCEDURE create_borrowing_request(
    IN p_user_id INT,
    IN p_book_id INT,
    IN p_days INT,
    OUT p_borrowing_id INT,
    OUT p_total_cost DECIMAL(10,2),
    OUT p_message VARCHAR(255)
)
BEGIN
    DECLARE v_available_copies INT;
    DECLARE v_price_per_day DECIMAL(10,2);
    DECLARE v_max_books INT;
    DECLARE v_active_borrowings INT;
    DECLARE v_due_date DATE;
    
    -- Check book availability
    SELECT available_copies, price_per_day INTO v_available_copies, v_price_per_day
    FROM books WHERE book_id = p_book_id;
    
    IF v_available_copies <= 0 THEN
        SET p_message = 'Book is not available for borrowing';
        SET p_borrowing_id = NULL;
        SET p_total_cost = 0;
    ELSE
        -- Check user borrowing limit
        SELECT CAST(setting_value AS UNSIGNED) INTO v_max_books
        FROM settings WHERE setting_name = 'max_books_per_user';
        
        SELECT COUNT(*) INTO v_active_borrowings
        FROM borrowings 
        WHERE user_id = p_user_id AND status IN ('pending_pickup', 'borrowed');
        
        IF v_active_borrowings >= v_max_books THEN
            SET p_message = CONCAT('You have reached the maximum borrowing limit of ', v_max_books, ' books');
            SET p_borrowing_id = NULL;
            SET p_total_cost = 0;
        ELSE
            -- Calculate cost and due date
            SET p_total_cost = v_price_per_day * p_days;
            SET v_due_date = DATE_ADD(CURDATE(), INTERVAL p_days DAY);
            
            -- Create borrowing
            INSERT INTO borrowings (user_id, book_id, due_date, status, total_cost, is_paid)
            VALUES (p_user_id, p_book_id, v_due_date, 'pending_pickup', p_total_cost, FALSE);
            
            SET p_borrowing_id = LAST_INSERT_ID();
            SET p_message = 'Borrowing request created successfully';
            
            -- Log activity
            INSERT INTO activity_log (user_id, action_type, description)
            VALUES (p_user_id, 'BORROW_REQUEST', CONCAT('Requested to borrow book_id: ', p_book_id));
        END IF;
    END IF;
END//

-- Procedure: Get Book Recommendations
CREATE PROCEDURE get_book_recommendations(
    IN p_user_id INT,
    IN p_limit INT
)
BEGIN
    DECLARE v_favorite_categories JSON;
    
    -- Get user's favorite categories
    SELECT favorite_categories INTO v_favorite_categories
    FROM user_preferences WHERE user_id = p_user_id;
    
    -- Recommend books from favorite categories with high ratings
    SELECT DISTINCT
        b.book_id,
        b.title,
        b.cover_image,
        b.category,
        b.average_rating,
        a.name AS author_name,
        b.available_copies > 0 AS is_available
    FROM books b
    JOIN authors a ON b.author_id = a.author_id
    WHERE b.average_rating >= 4.0
    AND b.book_id NOT IN (
        SELECT JSON_UNQUOTE(JSON_EXTRACT(books_read, CONCAT('$[', numbers.n, ']')))
        FROM user_preferences
        CROSS JOIN (
            SELECT 0 AS n UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4
            UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9
        ) AS numbers
        WHERE user_id = p_user_id
        AND JSON_EXTRACT(books_read, CONCAT('$[', numbers.n, ']')) IS NOT NULL
    )
    ORDER BY b.average_rating DESC, b.book_id DESC
    LIMIT p_limit;
END//

-- Procedure: Update Queue Positions
CREATE PROCEDURE update_queue_positions(
    IN p_book_id INT
)
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE v_reservation_id INT;
    DECLARE v_position INT DEFAULT 1;
    DECLARE cur CURSOR FOR 
        SELECT reservation_id 
        FROM reservations 
        WHERE book_id = p_book_id AND status = 'waiting'
        ORDER BY reservation_date ASC;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
    
    OPEN cur;
    
    read_loop: LOOP
        FETCH cur INTO v_reservation_id;
        IF done THEN
            LEAVE read_loop;
        END IF;
        
        UPDATE reservations 
        SET queue_position = v_position
        WHERE reservation_id = v_reservation_id;
        
        SET v_position = v_position + 1;
    END LOOP;
    
    CLOSE cur;
END//

-- Procedure: Get Dashboard Statistics
CREATE PROCEDURE get_dashboard_statistics()
BEGIN
    -- Total Books
    SELECT 
        COUNT(*) AS total_books,
        SUM(total_copies) AS total_copies,
        SUM(available_copies) AS available_copies,
        (SUM(total_copies) - SUM(available_copies)) AS borrowed_copies
    FROM books;
    
    -- Total Users
    SELECT 
        COUNT(*) AS total_users,
        SUM(CASE WHEN role = 'member' THEN 1 ELSE 0 END) AS total_members,
        SUM(CASE WHEN role = 'librarian' THEN 1 ELSE 0 END) AS total_librarians,
        SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) AS active_users
    FROM users;
    
    -- Borrowing Statistics
    SELECT 
        COUNT(*) AS total_borrowings,
        SUM(CASE WHEN status = 'borrowed' THEN 1 ELSE 0 END) AS active_borrowings,
        SUM(CASE WHEN status = 'overdue' THEN 1 ELSE 0 END) AS overdue_borrowings,
        SUM(CASE WHEN status = 'returned' THEN 1 ELSE 0 END) AS returned_borrowings
    FROM borrowings;
    
    -- Financial Statistics
    SELECT 
        SUM(total_cost) AS total_revenue,
        SUM(CASE WHEN is_paid = TRUE THEN total_cost ELSE 0 END) AS paid_revenue,
        SUM(CASE WHEN is_paid = FALSE THEN total_cost ELSE 0 END) AS pending_revenue
    FROM borrowings;
    
    -- Fine Statistics
    SELECT 
        COALESCE(SUM(amount), 0) AS total_fines,
        COALESCE(SUM(CASE WHEN is_paid = TRUE THEN amount ELSE 0 END), 0) AS fines_collected,
        COALESCE(SUM(CASE WHEN is_paid = FALSE THEN amount ELSE 0 END), 0) AS fines_pending
    FROM fines;
END//

DELIMITER ;

