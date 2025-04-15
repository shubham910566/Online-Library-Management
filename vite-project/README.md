# 📚 Online Library System

A simple **React**-based application for an online library system. Users can browse, search, add books, and remove books from the library. The app uses **React Router**, **Redux Toolkit**, and **React Hooks** for managing state and routing.

---

## 🚀 Features

- **Home Page**: View categories and popular books.
- **Browse Books**: Browse books by category and search by title or author.
- **Book Details**: View detailed information about a specific book.
- **Add Book**: Add new books to the library.
- **Remove Book**: Remove a book from the library (via the "Remove" button).
- **404 Page**: Handles undefined routes and redirects to the Home page.
- **Client-side Routing**: Built with `react-router-dom` to handle navigation.

---

## 🛠️ Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Redux Toolkit**: State management for the books data.
- **React Router DOM**: Client-side routing.
- **JavaScript (ES6+)**: Modern JavaScript features.
- **Vite / Create React App**: Development tools to build and run the app.

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         // Navigation Bar Component
│   ├── Home.jsx           // Home Page Component
│   ├── BrowseBooks.jsx    // Browse Books Page Component
│   ├── BookDetails.jsx    // Book Details Page Component
│   ├── AddBook.jsx        // Add New Book Form
│   └── NotFound.jsx       // 404 Page Component
├── utils/
│   ├── Data.js            // Dummy Data (book collection)
│   └── Store.js           // Redux store & slice (books)
├── App.jsx                // Main App Component (Outlets)
└── main.jsx               // Entry point for React(Routing)
```

---

## 🧑‍💻 Getting Started

#### 1. Clone the repository:

```bash
git clone https://github.com/shubham910566/Online-Library-Management.git
cd vite-project
```

#### 2. Install dependencies:

```bash
npm install
```

#### 3. Start the development server:

```bash
npm run dev
```

> If you're using **Create React App**, run:

```bash
npm start
```

#### 4. Open the app in your browser:

```
http://localhost:5173/
```

or

```
http://localhost:3000/
```

---


## ✅ To Do / Future Enhancements

- Add backend integration to store data persistently.
- Implement user authentication for adding and managing books.
- Add pagination to the Browse Books page if the list of books becomes too large.
- Implement a confirmation dialog for book removal to prevent accidental deletions.

---

## 📄 License

This project is **open-source** and free to use.

---

## 📝 Conclusion

This project demonstrates a simple **online library system** where users can browse, add, search, and remove books. It's a great starting point for anyone looking to build more advanced applications using **React** and **Redux**!
