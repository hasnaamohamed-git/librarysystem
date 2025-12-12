📚 Library Management System Testing 
📌 Overview

This document provides a complete  Test Plan for the Library Management System.
It focuses on testing the user interface, navigation, form validation, and role-based pages for:

Admin

Librarian

Member



🧪 1. General Testing Guidelines
✔ Test Type

Functional UI testing

Navigation testing

Buttons & interactions

Mobile

✔ Browsers

Chrome

Firefox

Edge

🧩 2. Admin Role – Test Scenarios
## Demo Video

<video width="600" controls>
  <source src="D:/hasnaa/Downloads/1212 (1).mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

A. Admin Login

Test login page UI components.

Valid admin credentials → Redirect to admin dashboard.

Invalid credentials → Show error message.

“Show Password” toggle works correctly.

Empty fields → Validation message displayed.

B. Admin Dashboard

Dashboard cards load correctly (Books, Members, Borrowings…).

Clicking a card redirects to the correct management page.

Stats and numbers display correctly (Frontend mock values).

C. Book Management
1. View Books

Books displayed in Cards/Table format.

Book cover, title, author, category appear correctly.

“Details” button opens book details page.

2. Add Book

Open Add Book form.

Image upload preview works.

Required fields enforced with validation.

Submit button adds the book to the list (Frontend only).

Cancel button closes the form.

3. Edit Book

Edit form loads existing data.

All fields editable.

Save button updates UI.

4. Delete Book

Delete button shows confirmation modal.

After deletion, book disappears from UI.

Cancel button closes modal.

D. Author Management

View authors list with image + name.

Add new author using form with validation.

Edit author details.

Delete authors with confirmation modal.

E. Quotes Management

View quotes list.

Add a new quote.

Edit quote text.

Delete quote → confirmation required.

F. Librarian Management

View all librarians.

Add new librarian.

Edit existing librarian info.

Delete librarian.

G. Activity Log

Activities listed in chronological order.

Check scrolling functionality.



🧩 3. Librarian Role – Test Scenarios
## Demo Video

<video width="600" controls>
  <source src="D:/hasnaa/Downloads/1212 (1)(1).mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

A. Quotes Management

View quotes list.

Add a new quote.

Edit quote text.

B. Author Management

View authors list with image + name.

Add new author using form with validation.

Edit author details.

Delete authors with confirmation modal.

C. Book Management
1. View Books

Books displayed in Cards/Table format.

Book cover, title, author, category appear correctly.

“Details” button opens book details page.

2. Add Book

Open Add Book form.

Image upload preview works.

Required fields enforced with validation.

Submit button adds the book to the list (Frontend only).

Cancel button closes the form.

3. Edit Book

Edit form loads existing data.

All fields editable.

Save button updates UI.

4. Delete Book

Delete button shows confirmation modal.

After deletion, book disappears from UI.

Cancel button closes modal.

D. Member Management

View list of library members.

Clicking a member opens their profile page.

🧩 4. Member Role – Test Scenarios
## Demo Video

<video width="600" controls>
  <source src="D:/hasnaa/Downloads/1212 (1)(2).mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
A. Home Page

Homepage shows featured.

Categories list displayed correctly.


B. Browse Books

Books can be filtered and searched.

Pagination or infinite scrolling works (if implemented).

Clicking a book opens details page.

C. Book Details Page

Displays:

Cover image

Book title

Author name 

Category

Ratings

Availability

Description

Button types based on availability:

Borrow (if available)

Reserve (if no available copies)

D. Borrow Book (Frontend Simulation)

Clicking “Borrow” opens confirmation modal.

UI shows simulated success message.

Book moves to “Borrowed Books” section for UI testing.

E. Reserve Book

Reservation modal appears.

UI shows queue position.

“Cancel Reservation” works.

F. Member Profile Page

Profile details displayed:

Username

Email


Lists displayed:

Borrowed books

Reserved books

Favorites



🧪 5. UI/UX General Tests
A. Navigation Bar

Links change according to role.

Active page highlighting works.


B. Form Validation

Check for:

Required fields

Invalid email

Invalid file upload

Max/min length validations


🔧 6. Issues Solved (Completed Fixes)
✔ Images not loading → fixed
✔ Navigation between pages → fixed
✔ Delete action missing confirmation → modal added
✔ Dashboard UI alignment issues → fixed
✔ Fines → fixed
✔ reserve when available books = 0 → fixed
✔ number of Quotes → fixed
✔ size of Auther Page → fixed
✔ security in ChatBot → fixed



🔮 7. Future Enhancements (To Be Solved Later)
🔸 Backend integration for real borrowing/return logic
🔸 API for:

Borrowing

Fines

Reservations

User profiles

🔸 Mobile UI improvements
🔸 Notification system (email + in-app)
🔸 Full chatbot integration
🔸 Optimized global search engine
🔸 Loading skeleton for slow pages
🔸 Advanced analytics dashboard
✅ Done!


📌 Add installation steps for the project

Just tell me!
