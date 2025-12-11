# 📚      Library Management System - Complete Documentation

## 🌟 Project Overview

**Library Management System** is a comprehensive web-based platform designed to modernize and streamline library operations. The system provides an intuitive interface for members to browse, borrow, and reserve books, while offering powerful administrative tools for librarians and administrators to manage the entire library ecosystem efficiently.

Built with modern web technologies (HTML, CSS, JavaScript, Flask, MySQL), the system features a beautiful, responsive design with multiple theme options and an AI-powered chatbot assistant to enhance user experience.

---

## 📋 Executive Summary

### Problem Statement

Physical libraries face significant challenges in managing their operations efficiently:
- **Manual Processing Bottlenecks**: Traditional paper-based borrowing and return processes are time-consuming and error-prone
- **Inventory Management Issues**: Difficulty tracking book availability, reserved items, and borrowed copies in real-time
- **Poor User Experience**: Members struggle to discover books, check availability, and manage their borrowing history
- **Financial Tracking**: Manual calculation of late fees and rental charges leads to errors and disputes
- **Limited Accessibility**: No convenient way for members to browse the catalog and reserve books remotely
- **Lack of Insights**: Absence of data-driven insights about popular books, member behavior, and library performance

### Solution

Our Library Management System addresses these challenges by providing:
- **Digital Transformation**: Complete digitization of library operations with an intuitive web interface
- **Real-time Inventory Tracking**: Automated system to track book availability, reservations, and borrowing status
- **Smart Reservation System**: Queue-based reservation system that automatically notifies members when books become available
- **Automated Financial Management**: Automatic calculation of rental fees and late fines with comprehensive payment tracking
- **Enhanced Discovery**: Advanced search, filtering, and AI-powered book recommendations
- **Data Analytics**: Comprehensive dashboards and reports for informed decision-making
- **Multi-user Architecture**: Role-based access control for members, librarians, and administrators

---

## 🎯 Project Objectives

### Primary Goals

1. **Streamline Library Operations**
   - Automate borrowing and return processes
   - Reduce manual data entry and paperwork
   - Minimize processing time for each transaction

2. **Enhance Member Experience**
   - Provide easy-to-use interface for book discovery
   - Enable online reservation and borrowing requests
   - Offer personalized book recommendations
   - Track reading history and preferences

3. **Improve Inventory Management**
   - Real-time tracking of book availability
   - Automated alerts for low stock items
   - Queue management for popular books

4. **Financial Transparency**
   - Automated calculation of rental fees
   - Transparent late fine system
   - Comprehensive revenue tracking and reporting

5. **Data-Driven Insights**
   - Analytics on book popularity and trends
   - Member engagement metrics
   - Financial performance reports

### Secondary Goals

- Reduce operational costs through automation
- Improve library resource utilization
- Increase member satisfaction and retention
- Support scalability for growing library collections
- Enable data-driven collection development decisions

---

## 🏗️ System Architecture

### Technology Stack

**Frontend:**
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox/Grid, custom themes
- **JavaScript (ES6+)**: Dynamic interactions, AJAX requests, form validation

**Backend:**
- **Flask (Python)**: Lightweight web framework for RESTful API
- **Flask-SQLAlchemy**: ORM for database operations
- **Flask-Login**: User session management
- **Flask-JWT-Extended**: Token-based authentication

**Database:**
- **MySQL**: Relational database management system
- **Triggers**: Automated fine calculation
- **Stored Procedures**: Complex queries and reports
- **Views**: Simplified data access

**Additional Technologies:**
- **AJAX**: Asynchronous data loading
- **Chart.js**: Data visualization for admin dashboard
- **OpenAI API** (Optional): Chatbot intelligence

---

## 👥 User Roles & Permissions

### 1. Member (Library Patron)
**Access Level:** Standard User

**Capabilities:**
- Browse and search book catalog
- View book details, ratings, and reviews
- Borrow available books (with rental payment)
- Reserve books that are currently unavailable
- Manage personal profile and preferences
- Track borrowed books and due dates
- View borrowing history
- Add books and authors to favorites
- Write reviews and rate books
- Interact with AI chatbot for recommendations
- View and pay outstanding fines

**Restrictions:**
- Cannot modify book catalog
- Cannot access other members' data
- Cannot perform administrative tasks

### 2. Librarian
**Access Level:** Staff User

**Capabilities:**
- All member capabilities, plus:
- Process book borrowing transactions
- Mark books as "collected" when members pick them up
- Process book returns
- Calculate and record late fines
- Convert reservations to borrowings when books available
- Add new library members
- View and edit member information
- Waive fines in special circumstances
- Grant free book borrowings
- View activity logs
- Generate borrowing reports

**Restrictions:**
- Cannot add/edit/delete books or authors
- Cannot add/remove other librarians
- Cannot access financial analytics
- Cannot modify system settings

### 3. Administrator (Library Owner)
**Access Level:** Full Control

**Capabilities:**
- All librarian capabilities, plus:
- Complete book management (add, edit, delete)
- Author management (add, edit, delete)
- Quote management for inspiration section
- Add and remove librarians
- Delete any member account
- Full access to financial dashboard
- View comprehensive analytics:
  - Total revenue and profit margins
  - Most borrowed books
  - Most active members
  - Category popularity trends
- System-wide statistics and reports
- Configure system settings:
  - Fine per day rate
  - Maximum borrowing period
  - Maximum books per member
- View library overview dashboard

**Unique Features:**
- Financial reports and profit tracking
- Strategic insights for collection development
- Complete system control

---

##       Core Features

###     Book Management

**For Members:**
- **Browse Catalog**: View books organized by categories (Drama, Science Fiction, Romance, Mystery, Biography, etc.)
- **Advanced Search**: Search by title, author, category, or keywords
- **Book Details Page**:
  - Cover image and title
  - Author information with biography link
  - Description and summary
  - Publication date
  - Average rating (stars)
  - Available copies count
  - Rental price per day
  - User reviews and comments
- **Borrow Function**:
  - Click "Borrow" button (if copies available)
  - View total cost calculation
  - Confirm borrowing request
  - Receive confirmation and pickup instructions
- **Reserve Function**:
  - Available only when all copies are borrowed
  - Join queue for next available copy
  - See position in queue
  - Receive notification when book ready
- **Favorites**: Add books to personal favorites list
- **Reviews**: Rate books (1-5 stars) and write reviews

**For Administrators:**
- **Add New Books**:
  - Upload cover image
  - Enter title, author, category
  - Write description
  - Set publication date
  - Specify total copies
  - Set rental price per day
- **Edit Books**: Update any book information
- **Delete Books**: Remove books from catalog
- **Manage Inventory**: Adjust available copies count

###    Author Management

**For Members:**
- **Browse Authors**: View list of all authors
- **Author Profile Page**:
  - Author name and photo
  - Biography and background
  - Birth date
  - Complete list of their books in library
- **Add to Favorites**: Mark favorite authors

**For Administrators:**
- **Add Authors**: Create new author profiles
- **Edit Authors**: Update author information
- **Delete Authors**: Remove author profiles
- **Link Books**: Associate books with authors

###   Quotes Section

**For Members:**
- View inspirational quotes from books
- See associated book title or author name
- Get inspired to read new books

**For Administrators:**
- Add new quotes
- Edit existing quotes
- Delete quotes
- Associate quotes with books/authors

###   User Profile & Preferences

**Personal Information:**
- Username and email
- Profile picture upload
- Account creation date
- Account status

**Reading Preferences:**
- Favorite books list
- Favorite authors list
- Preferred categories
- Books read (with count)
- Books to read (wishlist)
- Reading goals

**Current Activity:**
- **Borrowed Books Section**:
  - Book title and cover
  - Borrow date
  - Due date
  - Rental amount paid
  - Status: "Awaiting Pickup" or "Collected"
  - Days until due
  - Late status indicator
- **Active Reservations**:
  - Reserved book details
  - Reservation date
  - Queue position
  - Status updates
- **Outstanding Fines**:
  - Total amount due
  - Breakdown by book
  - Payment options

###  Borrowing Workflow

**Step 1: Request Borrowing**
- Member selects "Borrow" on book detail page
- System checks availability
- Calculates rental cost (price_per_day × max_borrow_days)
- Creates borrowing record with status "Pending Pickup"
- Decreases available_copies count
- Displays confirmation message

**Step 2: Pickup at Library**
- Member visits library with confirmation
- Librarian finds borrowing record in system
- Verifies member identity
- Clicks "Mark as Collected"
- System updates:
  - Status → "Borrowed"
  - Payment recorded (is_paid = true)
  - Due date calculated (today + max_borrow_days)
  - Begins tracking for late fines
- Member receives book

**Step 3: Return Process**
- Member returns book to library
- Librarian selects "Process Return"
- **If On Time**:
  - Status → "Returned"
  - Return date recorded
  - Available copies increased
  - No fine charged
- **If Late**:
  - System calculates days overdue
  - Fine amount = days_overdue × fine_per_day
  - Creates fine record
  - Displays amount to collect
  - After payment, marks fine as paid
  - Updates book availability
- **If Reservation Exists**:
  - Automatically notifies next person in queue
  - Updates reservation status to "Ready for Pickup"

###  Reservation System

**Queue Management:**
- When all copies borrowed, "Reserve" button appears
- Member clicks "Reserve"
- System adds to reservation queue
- Shows current position in queue
- Member can cancel reservation anytime

**Notification Process:**
- When book returned and available
- System checks for reservations
- Notifies first person in queue via email/in-app
- Changes reservation status to "Ready"
- Gives member time window to collect (e.g., 3 days)
- If not collected within window, moves to next person

**Conversion to Borrowing:**
- Librarian converts reservation to borrowing
- Follows standard borrowing workflow
- Removes from queue
- Book marked as borrowed

### 💰 Financial Management

**Rental Fees:**
- Calculated automatically: price × duration
- Collected at pickup
- Tracked in borrowing records

**Late Fines:**
- Automatically calculated when overdue
- Based on configurable rate per day
- Added to member's account
- Visible in member profile
- Must be paid before borrowing more books

**Payment Tracking:**
- All transactions recorded
- Payment status (paid/unpaid)
- Payment date and method
- Receipt generation

**For Administrators:**
- **Revenue Dashboard**:
  - Total revenue (all-time)
  - Revenue by period (daily/weekly/monthly)
  - Revenue breakdown (rentals vs. fines)
  - Profit margins
  - Top revenue-generating books
- **Financial Reports**:
  - Income statements
  - Outstanding payments
  - Member payment history

### 🤖 AI Chatbot Assistant

**Capabilities:**
- Answer questions about library services
- Recommend books based on:
  - User's reading history
  - Preferred categories
  - Current trends
  - Similar books to favorites
- Discuss books and authors
- Help find specific books
- Provide library information:
  - Opening hours
  - Policies
  - How to borrow/reserve

**Conversation History:**
- All chats saved in database
- Retrieve previous conversations
- Context-aware responses
- Learning from interactions

### 📈 Admin Dashboard & Analytics

**Overview Section:**
- Total members count
- Total books in catalog
- Books currently borrowed
- Active reservations
- Total revenue
- Outstanding fines

**Popular Books Widget:**
- Most borrowed books (all-time)
- Trending books (this month)
- Highest rated books
- Category breakdown

**Member Analytics:**
- Most active members
- New member registrations (trend)
- Member engagement metrics
- Reading patterns

**Financial Charts:**
- Revenue over time (line chart)
- Revenue by category (pie chart)
- Rentals vs. fines (bar chart)
- Monthly comparison (area chart)

**Activity Log:**
- Recent borrowings
- Recent returns
- New member registrations
- System events


 

## 🗄️ Database Schema

### Core Tables

**users**
```
user_id (PK, INT, AUTO_INCREMENT)
username (VARCHAR(100), UNIQUE)
email (VARCHAR(150), UNIQUE)
password_hash (VARCHAR(255))
role (ENUM: 'member', 'librarian', 'admin')
profile_image (VARCHAR(255))
registration_date (DATETIME)
status (ENUM: 'active', 'suspended')
```

**books**
```
book_id (PK, INT, AUTO_INCREMENT)
title (VARCHAR(255))
author_id (FK → authors.author_id)
category (VARCHAR(100))
description (TEXT)
cover_image (VARCHAR(255))
publication_date (DATE)
total_copies (INT)
available_copies (INT)
price_per_day (DECIMAL(10,2))
average_rating (DECIMAL(3,2))
```

**authors**
```
author_id (PK, INT, AUTO_INCREMENT)
name (VARCHAR(150))
biography (TEXT)
birth_date (DATE)
photo (VARCHAR(255))

```

**borrowings**
```
borrowing_id (PK, INT, AUTO_INCREMENT)
user_id (FK → users.user_id)
book_id (FK → books.book_id)
librarian_id (FK → users.user_id)
borrow_date (DATETIME)
due_date (DATE)
return_date (DATE, NULL)
status (ENUM: 'pending_pickup', 'borrowed', 'returned', 'overdue')
total_cost (DECIMAL(10,2))
is_paid (BOOLEAN)
```

**reservations**
```
reservation_id (PK, INT, AUTO_INCREMENT)
user_id (FK → users.user_id)
book_id (FK → books.book_id)
reservation_date (DATETIME)
status (ENUM: 'waiting', 'ready', 'collected', 'cancelled')
queue_position (INT)
```

**fines**
```
fine_id (PK, INT, AUTO_INCREMENT)
borrowing_id (FK → borrowings.borrowing_id)
user_id (FK → users.user_id)
amount (DECIMAL(10,2))
days_overdue (INT)
is_paid (BOOLEAN)
payment_date (DATE, NULL)
```

**comments**
```
comment_id (PK, INT, AUTO_INCREMENT)
user_id (FK → users.user_id)
book_id (FK → books.book_id)
content (TEXT)
rating (INT, 1-5)
comment_date (DATETIME)
```

**quotes**
```
quote_id (PK, INT, AUTO_INCREMENT)
content (TEXT)
book_id (FK → books.book_id, NULL)
author_id (FK → authors.author_id, NULL)
added_by_admin_id (FK → users.user_id)
```

**user_preferences**
```
preference_id (PK, INT, AUTO_INCREMENT)
user_id (FK → users.user_id)
favorite_books (JSON)
favorite_authors (JSON)
favorite_categories (JSON)
books_read (JSON)
books_to_read (JSON)
reading_count (INT)
theme_preference (VARCHAR(50))
```

**chatbot_history**
```
chat_id (PK, INT, AUTO_INCREMENT)
user_id (FK → users.user_id)
message (TEXT)
response (TEXT)
timestamp (DATETIME)
```

**activity_log**
```
activity_id (PK, INT, AUTO_INCREMENT)
user_id (FK → users.user_id)
action_type (VARCHAR(100))
description (TEXT)
timestamp (DATETIME)
```

**settings**
```
setting_id (PK, INT, AUTO_INCREMENT)
fine_per_day (DECIMAL(10,2))
max_borrow_days (INT)
max_books_per_user (INT)
reservation_hold_days (INT)
```

### Database Triggers

**auto_calculate_fines**
```sql
-- Automatically calculate fines for overdue books
-- Runs daily to check all active borrowings
```

**update_book_availability**
```sql
-- Update available_copies when book borrowed/returned
-- Maintains inventory accuracy
```

**manage_reservation_queue**
```sql
-- Automatically adjust queue positions
-- Notify next person when book available
```

---
# 🗄️ Database Relationships - Library Management System

## 1️⃣ ONE-TO-MANY RELATIONSHIPS (1:N)

### **1. Users → Borrowings** (1:N)
**Type**: One-to-Many  
**Description**: One user can have multiple borrowings, but each borrowing belongs to one user

```
Users (1) ─────< Borrowings (N)
```

**Business Rule**: 
- A member can borrow multiple books over time
- Each borrowing record is associated with exactly one member

---

### **2. Users → Reservations** (1:N)
**Type**: One-to-Many  
**Description**: One user can have multiple reservations, but each reservation belongs to one user

```
Users (1) ─────< Reservations (N)
```
**Business Rule**: 
- A member can reserve multiple books
- Each reservation is made by exactly one member

---

### **3. Users → Comments** (1:N)
**Type**: One-to-Many  
**Description**: One user can write multiple comments/reviews, but each comment is written by one user

```
Users (1) ─────< Comments (N)
```
**Business Rule**: 
- A member can write reviews for multiple books
- Each review is written by exactly one member

---

### **4. Users → Fines** (1:N)
**Type**: One-to-Many  
**Description**: One user can have multiple fines, but each fine belongs to one user

```
Users (1) ─────< Fines (N)
```
**Business Rule**: 
- A member can accumulate multiple fines over time
- Each fine is charged to exactly one member

---

### **5. Users → Chatbot_History** (1:N)
**Type**: One-to-Many  
**Description**: One user can have multiple chat conversations, but each chat belongs to one user

```
Users (1) ─────< Chatbot_History (N)
```
**Business Rule**: 
- A member can have many chatbot interactions
- Each chat message is associated with exactly one member

---

### **6. Users → Activity_Log** (1:N)
**Type**: One-to-Many  
**Description**: One user can have multiple activity records, but each activity belongs to one user

```
Users (1) ─────< Activity_Log (N)
```
**Business Rule**: 
- A user's actions are logged multiple times
- Each activity log entry is for exactly one user

---

### **7. Books → Borrowings** (1:N)
**Type**: One-to-Many  
**Description**: One book can be borrowed multiple times, but each borrowing is for one book

```
Books (1) ─────< Borrowings (N)
```
**Business Rule**: 
- A book can have multiple borrowing records over time
- Each borrowing involves exactly one book

---

### **8. Books → Reservations** (1:N)
**Type**: One-to-Many  
**Description**: One book can have multiple reservations, but each reservation is for one book

```
Books (1) ─────< Reservations (N)
```
**Business Rule**: 
- A book can be reserved by multiple members (queue)
- Each reservation is for exactly one book

---

### **9. Books → Comments** (1:N)
**Type**: One-to-Many  
**Description**: One book can have multiple comments/reviews, but each comment is about one book

```
Books (1) ─────< Comments (N)
```
**Business Rule**: 
- A book can have many reviews from different members
- Each review is about exactly one book

---

### **10. Authors → Books** (1:N)
**Type**: One-to-Many  
**Description**: One author can write multiple books, but each book has one primary author

```
Authors (1) ─────< Books (N)
```

**Business Rule**: 
- An author can write multiple books
- Each book has exactly one primary author (simplified model)

**Note**: In real-world scenarios, books can have multiple authors (M:N), but for simplicity, we use 1:N here.

---

### **11. Borrowings → Fines** (1:N)
**Type**: One-to-Many  
**Description**: One borrowing can generate multiple fines (e.g., multiple late periods), but typically 1:1

```
Borrowings (1) ─────< Fines (N)
```
**Business Rule**: 
- A borrowing can result in fines if returned late
- Each fine is associated with exactly one borrowing

**Practical Note**: Usually this is 1:1, but allowing 1:N provides flexibility for multiple fine adjustments.

---

## 🔀 MANY-TO-MANY RELATIONSHIPS (M:N)

### **12. Users ↔ Books (Favorites)** (M:N)
**Type**: Many-to-Many  
**Description**: Users can favorite multiple books, and books can be favorited by multiple users

```
Users (M) ←────→ Books (N)
```
**Business Rule**: 
- A member can mark multiple books as favorites
- A book can be favorited by multiple members

---

### **13. Users ↔ Authors (Favorites)** (M:N)
**Type**: Many-to-Many  
**Description**: Users can favorite multiple authors, and authors can be favorited by multiple users

```
Users (M) ←────→ Authors (N)
```
**Business Rule**: 
- A member can follow multiple authors
- An author can be followed by multiple members

---

### **14. Users ↔ Books (Reading List)** (M:N)
**Type**: Many-to-Many  
**Description**: Users can have multiple books in their reading lists (read/to-read), and books can be in multiple users' lists

```
Users (M) ←────→ Books (N)
```
**Business Rule**: 
- A member can track multiple books (read/want to read)
- A book can appear in multiple members' reading lists

---

## 🎯 ONE-TO-ONE RELATIONSHIPS (1:1)

### **15. Users ↔ User_Preferences** (1:1)
**Type**: One-to-One  
**Description**: Each user has exactly one preferences profile, and each preferences profile belongs to one user

```
Users (1) ←────→ User_Preferences (1)
```
**Business Rule**: 
- Each member has exactly one preferences profile
- Each preferences profile is for exactly one member

**Why Separate Table?**
- Keeps user table clean and focused on authentication
- Preferences can grow without affecting user table
- Better performance for queries that don't need preferences

---

### **16. Books ↔ Quotes** (1:N but can be 1:1 for specific quotes)
**Type**: One-to-Many (but often treated as optional 1:1)  
**Description**: A quote can be associated with one book, but a book can have multiple quotes

```
Books (1) ─────< Quotes (N)
OR
Authors (1) ─────< Quotes (N)
```
**Business Rule**: 
- A quote can be from a specific book OR just attributed to an author
- A book/author can have multiple famous quotes
- Both book_id and author_id are nullable (at least one must be set)

---

## 📋 SPECIAL RELATIONSHIPS

### **Librarian Processing Relationship**
**Type**: One-to-Many (Special)  
**Description**: One librarian can process multiple borrowings

```
Users (Librarian) (1) ─────< Borrowings (N)
```
**Business Rule**: 
- A librarian can process many borrowings
- Each borrowing is processed by one librarian (when collected)
- This field is NULL until book is collected

---

### **Admin Adding Quotes Relationship**
**Type**: One-to-Many (Special)  
**Description**: One admin can add multiple quotes

```
Users (Admin) (1) ─────< Quotes (N)
```
**Business Rule**: 
- An admin can add multiple quotes
- Each quote is added by one admin (for tracking)

---

## 📊 SUMMARY TABLE

| # | Relationship           | Type| From Table | To Table        | Foreign Key       | Cardinality 
|---|--------------          |-----|------------|----------       |-------------      |-------------
| 1 | User Borrowings        | 1:N | users      | borrowings      | user_id           | One user → Many borrowings 
| 2 | User Reservations      | 1:N | users      | reservations    | user_id           | One user → Many reservations 
| 3 | User Comments          | 1:N | users      | comments        | user_id           | One user → Many comments 
| 4 | User Fines             | 1:N | users      | fines           | user_id           | One user → Many fines 
| 5 | User Chats             | 1:N | users      | chatbot_history | user_id           | One user → Many chats
| 6 | User Activities        | 1:N | users      | activity_log    | user_id           | One user → Many activities 
| 7 | Book Borrowings        | 1:N | books      | borrowings      | book_id           | One book → Many borrowings 
| 8 | Book Reservations      | 1:N | books      | reservations    | book_id           | One book → Many reservations 
| 9 | Book Comments          | 1:N | books      | comments        | book_id           | One book → Many comments 
| 10 | Author Books          | 1:N | authors    | books           | author_id         | One author → Many books 
| 11 | Borrowing Fines       | 1:N | borrowings | fines           | borrowing_id      | One borrowing → Many fines 
| 12 | User-Book Favorites   | M:N | users      | books           | (JSON/Junction)   | Many users ↔ Many books 
| 13 | User-Author Favorites | M:N | users      | authors         | (JSON/Junction)   | Many users ↔ Many authors 
| 14 | User Reading Lists    | M:N | users      | books           | (JSON/Junction)   | Many users ↔ Many books 
| 15 | User Preferences      | 1:1 | users      | user_preferences| user_id (UNIQUE)  | One user ↔ One preferences 
| 16 | Book/Author Quotes    | 1:N |books/author| quotes          | book_id/author_id | One book → Many quotes 

---

## 🎨  Visual Representation

```
┌─────────────┐
│   USERS     │
│  (Member/   │
│  Librarian/ │
│   Admin)    │
└──────┬──────┘
       │
       ├──────── (1:N) ───────→ BORROWINGS
       │
       ├──────── (1:N) ───────→ RESERVATIONS
       │
       ├──────── (1:N) ───────→ COMMENTS
       │
       ├──────── (1:N) ───────→ FINES
       │
       ├──────── (1:N) ───────→ CHATBOT_HISTORY
       │
       ├──────── (1:N) ───────→ ACTIVITY_LOG
       │
       ├──────── (1:1) ───────→ USER_PREFERENCES
       │
       └──────── (M:N) ───────→ BOOKS (favorites/reading lists)


┌─────────────┐
│   BOOKS     │
└──────┬──────┘
       │
       ├──────── (1:N) ───────→ BORROWINGS
       │
       ├──────── (1:N) ───────→ RESERVATIONS
       │
       ├──────── (1:N) ───────→ COMMENTS
       │
       ├──────── (1:N) ───────→ QUOTES
       │
       └──────── (N:1) ───────← AUTHORS


┌─────────────┐
│   AUTHORS   │
└──────┬──────┘
       │
       ├──────── (1:N) ───────→ BOOKS
       │
       ├──────── (1:N) ───────→ QUOTES
       │
       └──────── (M:N) ───────→ USERS (favorites)


┌─────────────┐
│ BORROWINGS  │
└──────┬──────┘
       │
       └──────── (1:N) ───────→ FINES


┌─────────────┐
│   QUOTES    │
└──────┬──────┘
       │
       ├──────── (N:1) ───────← BOOKS (optional)
       │
       ├──────── (N:1) ───────← AUTHORS (optional)
       │
       └──────── (N:1) ───────← USERS (admin who added)
```
#     ERD
<img width="3167" height="1608" alt="erd web" src="https://github.com/user-attachments/assets/5ca89639-1780-4c72-9519-036051778f69" />

## Schema

<img width="1327" height="1276" alt="Untitled (5)" src="https://github.com/user-attachments/assets/dbbaa173-52b4-45a6-bc0f-f2c9093c498e" />





#      DataBase Details:
- INSERT SAMPLE USERS
- Password for all users: "password123"
-role ENUM('member', 'librarian', 'admin')
- status of Borrowing  ENUM('pending_pickup', 'borrowed', 'returned', 'overdue') DEFAULT 'pending_pickup'
 
-status of reservation ENUM('waiting', 'ready', 'collected', 'cancelled') DEFAULT 'waiting'
#  Database Components Summary

## 🔍 Database Views (7 Views)
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/7f8c87ef-9925-4de5-b6da-f2e0600aeb8e" />

### 1. *active_borrowings*
*Purpose:* Display all currently active book borrowings with user and book details.

*Returns:*
- Borrowing details (ID, dates, status, cost, payment status)
- User information (ID, username, email)
- Book details (ID, title, cover image)
- Author name
- Days until due / days overdue

*Use Case:* Track current borrowings, identify upcoming due dates, monitor overdue items.

---

### 2. *books_catalog*
*Purpose:* Complete book catalog with availability status and statistics.

*Returns:*
- Full book details (title, category, description, cover, dates)
- Author information (name, photo, biography)
- Availability metrics (total copies, available copies)
- Pricing information
- Average rating
- Review count and total borrows
- Availability status (available/unavailable)

*Use Case:* Display books in member interface, check availability, show statistics.

---

### 3. *user_statistics*
*Purpose:* Comprehensive reading statistics for each member.

*Returns:*
- User profile (ID, username, email, registration date)
- Borrowing metrics (total, active, returned)
- Active reservations count
- Financial data (total spent, fines, unpaid fines)
- Reading count
- Favorite books count

*Use Case:* Member profile dashboard, library analytics, member engagement tracking.

---

### 4. *popular_books*
*Purpose:* Rank books by popularity based on multiple metrics.

*Returns:*
- Book details (ID, title, cover, category)
- Author name
- Average rating
- Borrow count
- Review count
- Reservation count

*Use Case:* Homepage recommendations, trending books section, collection development insights.

---

### 5. *financial_overview*
*Purpose:* Monthly financial performance analysis.

*Returns:*
- Month identifier
- Total transactions
- Revenue breakdown (total, paid, pending)
- Fine revenue (total, collected)
- Total income

*Use Case:* Admin financial dashboard, revenue tracking, monthly reports.

---

### 6. *overdue_books_report*
*Purpose:* List all overdue borrowings with calculated fines.

*Returns:*
- Borrowing ID
- User details (ID, username, email)
- Book title
- Borrow and due dates
- Days overdue
- Calculated fine amount
- Payment status

*Use Case:* Librarian dashboard, fine collection, reminder notifications.

---

### 7. *category_performance*
*Purpose:* Analyze performance metrics by book category.

*Returns:*
- Category name
- Total books and copies
- Available copies
- Average category rating
- Total borrows
- Total reviews

*Use Case:* Collection development, identify popular categories, inventory planning.

---

## ⚡ Database Triggers (7 Triggers)
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/e5ae3b46-5990-43ed-818b-788d38fb4716" />

### 1. *update_book_rating_after_insert*
*Event:* AFTER INSERT on comments

*Action:* Automatically recalculates and updates the average rating for a book when a new comment/review is added.

*Benefits:* Ensures ratings are always current without manual updates.

---

### 2. *update_book_rating_after_update*
*Event:* AFTER UPDATE on comments

*Action:* Recalculates book average rating when an existing comment is modified.

*Benefits:* Maintains accurate ratings when users edit their reviews.

---

### 3. *update_book_rating_after_delete*
*Event:* AFTER DELETE on comments

*Action:* Recalculates book average rating when a comment is removed. Sets to 0 if no comments remain.

*Benefits:* Prevents outdated ratings when reviews are deleted.

---

### 4. *decrease_copies_on_borrow*
*Event:* AFTER INSERT on borrowings

*Action:* Decreases the available_copies count by 1 when a new borrowing is created with status 'pending_pickup' or 'borrowed'.

*Benefits:* Real-time inventory tracking, prevents overbooking.

---

### 5. *increase_copies_on_return*
*Event:* AFTER UPDATE on borrowings

*Action:* Increases available_copies by 1 when borrowing status changes to 'returned'.

*Benefits:* Automatically updates inventory when books are returned.

---

### 6. *create_user_preferences*
*Event:* AFTER INSERT on users

*Action:* Automatically creates an empty user_preferences record for new users with initialized JSON arrays.

*Benefits:* Ensures every user has a preferences record, prevents null reference errors.

---

### 7. *check_overdue_status*
*Event:* BEFORE UPDATE on borrowings

*Action:* Automatically changes status to 'overdue' when due date has passed and book is still borrowed.

*Benefits:* Automated overdue detection without manual intervention.

---

## 🔧 Stored Procedures (6 Procedures)
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/46bf8fcd-40ec-47b8-94e4-d1d408aab5a7" />

### 1. *calculate_overdue_fine*
sql
CALL calculate_overdue_fine(borrowing_id, OUT fine_amount, OUT days_overdue)


*Purpose:* Calculate fine amount for an overdue borrowing.

*Parameters:*
- IN p_borrowing_id: The borrowing ID to check
- OUT p_fine_amount: Calculated fine (days × rate)
- OUT p_days_overdue: Number of days past due date

*Logic:*
- Retrieves fine rate from settings
- Calculates days between due date and return date (or current date)
- Returns fine = days_overdue × fine_per_day
- Returns 0 if not overdue

*Use Case:* Calculate fines during book return, display owed amounts to users.

---

### 2. *process_book_return*
sql
CALL process_book_return(borrowing_id, librarian_id)


*Purpose:* Complete book return process including fine creation.

*Parameters:*
- IN p_borrowing_id: The borrowing to process
- IN p_librarian_id: Librarian processing the return

*Logic:*
- Calls calculate_overdue_fine to check for fines
- Updates borrowing status to 'returned'
- Sets return_date to current date
- Creates fine record if overdue
- Logs activity

*Use Case:* Librarian processes book returns at the desk.

---

### 3. *create_borrowing_request*
sql
CALL create_borrowing_request(user_id, book_id, days, OUT borrowing_id, OUT total_cost, OUT message)


*Purpose:* Create a new borrowing request with validation.

*Parameters:*
- IN p_user_id: Member requesting the book
- IN p_book_id: Book to borrow
- IN p_days: Number of days to borrow
- OUT p_borrowing_id: Created borrowing ID (or NULL if failed)
- OUT p_total_cost: Calculated rental cost
- OUT p_message: Success or error message

*Logic:*
- Checks book availability
- Validates user hasn't exceeded borrowing limit
- Calculates total cost (days × price_per_day)
- Sets due date
- Creates borrowing record
- Logs activity

*Use Case:* Member requests to borrow a book through the website.

---

### 4. *get_book_recommendations*
sql
CALL get_book_recommendations(user_id, limit)


*Purpose:* Generate personalized book recommendations for a user.

*Parameters:*
- IN p_user_id: User to get recommendations for
- IN p_limit: Maximum number of recommendations

*Logic:*
- Retrieves user's favorite categories from preferences
- Finds highly-rated books (rating ≥ 4.0)
- Excludes books user has already read
- Orders by rating and recency
- Returns top N recommendations

*Use Case:* Display "Recommended for You" section on homepage.

---

### 5. *update_queue_positions*
sql
CALL update_queue_positions(book_id)


*Purpose:* Reorder reservation queue positions for a specific book.

*Parameters:*
- IN p_book_id: Book to update queue for

*Logic:*
- Finds all waiting reservations for the book
- Orders by reservation date (first-come-first-served)
- Updates queue_position (1, 2, 3, etc.)

*Use Case:* Maintain fair queue when reservations are added/cancelled.

---

### 6. *get_dashboard_statistics*
sql
CALL get_dashboard_statistics()


*Purpose:* Retrieve comprehensive statistics for admin dashboard.

*Returns (Multiple Result Sets):*

*Set 1 - Book Statistics:*
- Total books, total copies, available copies, borrowed copies

*Set 2 - User Statistics:*
- Total users, members, librarians, active users

*Set 3 - Borrowing Statistics:*
- Total borrowings, active, overdue, returned

*Set 4 - Financial Statistics:*
- Total revenue, paid revenue, pending revenue

*Set 5 - Fine Statistics:*
- Total fines, fines collected, fines pending

*Use Case:* Admin dashboard overview, generate reports, monitor library health.


## 🔐 Security Features

### Authentication
- Password hashing (bcrypt)
- Secure session management
- JWT tokens for API authentication
- Password strength requirements
- Email verification (optional)

### Authorization
- Role-based access control (RBAC)
- Middleware for route protection
- Permission checks on all operations
- Audit logging for sensitive actions

### Data Protection
- SQL injection prevention (parameterized queries)
- XSS protection (input sanitization)
- CSRF tokens
- Secure file upload validation
- HTTPS enforcement (production)

### Privacy
- Personal data encryption
- Limited data sharing between roles
- Member data privacy from other members
- Secure password reset mechanism



## 🧪 Testing

### Test Coverage

**Unit Tests:**
- User authentication
- Book CRUD operations
- Borrowing logic
- Fine calculation
- Reservation queue management

**Integration Tests:**
- Complete borrowing workflow
- Reservation to borrowing conversion
- Payment processing
- Email notifications

**API Tests:**
- All REST endpoints
- Authentication/authorization
- Error handling
- Input validation

**UI Tests:**
- Form submissions
- Navigation
- Theme switching
- Responsive design



## 📊 Performance Metrics

### Expected Performance
- **Page Load Time**: < 2 seconds
- **API Response Time**: < 500ms
- **Database Queries**: Optimized with indexes
- **Concurrent Users**: 100+ supported
- **Uptime**: 99.9% target

### Optimization Techniques
- Database query optimization
- Caching frequently accessed data
- Lazy loading for images
- Minified CSS/JS files
- CDN for static assets
- Pagination for large datasets

---

## 🔮 Future Enhancements

### Phase 2 Features
- Mobile app (iOS/Android)
- Advanced book recommendations (ML)
- Social features (reading clubs, book discussions)
- E-book integration
- Audio book support
- Multiple language support
- Integration with external book APIs (Google Books, Open Library)

### Phase 3 Features
- Library card barcode scanning
- Self-service kiosks
- Library event management
- Author event bookings
- Book donations tracking
- Inter-library loans
- Analytics dashboard for members

---

