# 📚 Library Management System - Testing Documentation

## 📌 Overview

This document provides a complete test plan for the Library Management System, focusing on testing the user interface, navigation, form validation, and role-based pages for three user types:

- **Admin**
- **Librarian**
- **Member**

---

## 🧪 1. General Testing Guidelines

### Test Types
- Functional UI testing
- Navigation testing
- Buttons & interactions
- Mobile responsiveness

### Supported Browsers
- Chrome
- Firefox
- Edge

---

## 🧩 2. Admin Role – Test Scenarios

**[Watch Demo Video](#)** *()*

### A. Admin Login
- [ ] Test login page UI components
- [ ] Valid admin credentials → Redirect to admin dashboard
- [ ] Invalid credentials → Show error message
- [ ] "Show Password" toggle works correctly
- [ ] Empty fields → Validation message displayed

### B. Admin Dashboard
- [ ] Dashboard cards load correctly (Books, Members, Borrowings)
- [ ] Clicking a card redirects to the correct management page
- [ ] Stats and numbers display correctly (Frontend mock values)

### C. Book Management

#### View Books
- [ ] Books displayed in Cards/Table format
- [ ] Book cover, title, author, category appear correctly
- [ ] "Details" button opens book details page

#### Add Book
- [ ] Open Add Book form
- [ ] Image upload preview works
- [ ] Required fields enforced with validation
- [ ] Submit button adds the book to the list (Frontend only)
- [ ] Cancel button closes the form

#### Edit Book
- [ ] Edit form loads existing data
- [ ] All fields editable
- [ ] Save button updates UI

#### Delete Book
- [ ] Delete button shows confirmation modal
- [ ] After deletion, book disappears from UI
- [ ] Cancel button closes modal

### D. Author Management
- [ ] View authors list with image and name
- [ ] Add new author using form with validation
- [ ] Edit author details
- [ ] Delete authors with confirmation modal

### E. Quotes Management
- [ ] View quotes list
- [ ] Add a new quote
- [ ] Edit quote text
- [ ] Delete quote with confirmation required

### F. Librarian Management
- [ ] View all librarians
- [ ] Add new librarian
- [ ] Edit existing librarian info
- [ ] Delete librarian

### G. Activity Log
- [ ] Activities listed in chronological order
- [ ] Check scrolling functionality

---

## 🧩 3. Librarian Role – Test Scenarios

[Watch Demo Video](librianvideo.mp4)

### A. Quotes Management
- [ ] View quotes list
- [ ] Add a new quote
- [ ] Edit quote text

### B. Author Management
- [ ] View authors list with image and name
- [ ] Add new author using form with validation
- [ ] Edit author details
- [ ] Delete authors with confirmation modal

### C. Book Management

#### View Books
- [ ] Books displayed in Cards/Table format
- [ ] Book cover, title, author, category appear correctly
- [ ] "Details" button opens book details page

#### Add Book
- [ ] Open Add Book form
- [ ] Image upload preview works
- [ ] Required fields enforced with validation
- [ ] Submit button adds the book to the list (Frontend only)
- [ ] Cancel button closes the form

#### Edit Book
- [ ] Edit form loads existing data
- [ ] All fields editable
- [ ] Save button updates UI

#### Delete Book
- [ ] Delete button shows confirmation modal
- [ ] After deletion, book disappears from UI
- [ ] Cancel button closes modal

### D. Member Management
- [ ] View list of library members
- [ ] Clicking a member opens their profile page

---

## 🧩 4. Member Role – Test Scenarios

**[Watch Demo Video](#)** *(Add your video link here)*

### A. Home Page
- [ ] Homepage shows featured content
- [ ] Categories list displayed correctly

### B. Browse Books
- [ ] Books can be filtered and searched
- [ ] Pagination or infinite scrolling works (if implemented)
- [ ] Clicking a book opens details page

### C. Book Details Page

**Displays:**
- [ ] Cover image
- [ ] Book title
- [ ] Author name
- [ ] Category
- [ ] Ratings
- [ ] Availability
- [ ] Description

**Button types based on availability:**
- [ ] "Borrow" button (if available)
- [ ] "Reserve" button (if no available copies)

### D. Borrow Book (Frontend Simulation)
- [ ] Clicking "Borrow" opens confirmation modal
- [ ] UI shows simulated success message
- [ ] Book moves to "Borrowed Books" section for UI testing

### E. Reserve Book
- [ ] Reservation modal appears


### F. Member Profile Page

**Profile details displayed:**
- [ ] Username
- [ ] Email

**Lists displayed:**
- [ ] Borrowed books
- [ ] Reserved books
- [ ] Favorites

---

## 🧪 5. UI/UX General Tests

### A. Navigation Bar
- [ ] Links change according to role
- [ ] Active page highlighting works

### B. Form Validation
Check for:
- [ ] Required fields
- [ ] Invalid email format
- [ ] Invalid file upload
- [ ] Max/min length validations

---

## ✅ 6. Issues Resolved

- ✔️ Images not loading
- ✔️ Navigation between pages
- ✔️ Delete action missing confirmation modal
- ✔️ Dashboard UI alignment issues
- ✔️ Fines functionality
- ✔️ Reserve button when available books = 0
- ✔️ Number of quotes display
- ✔️ Author page sizing
- ✔️ ChatBot security

---

## 🔮 7. Future Enhancements

### Backend Integration
- 🔸 Real borrowing/return logic
- 🔸 API endpoints for:
  - Borrowing
  - Fines
  - Reservations
  - User profiles

### UI/UX Improvements
- 🔸 Mobile UI enhancements
- 🔸 Loading skeleton for slow pages
- 🔸 Optimized global search engine

### New Features
- 🔸 Notification system (email + in-app)
- 🔸 Full chatbot integration
- 🔸 Advanced analytics dashboard

---

