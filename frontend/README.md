# 👥 User Directory Table

A modern **React + TailwindCSS** web app that fetches and displays user data from [ReqRes API](https://reqres.in/api/users).  
Includes **search, sorting, filtering, pagination, and responsive design** — built for clean UI and great performance.

---

## 🚀 Features

- 🌐 **Fetches live user data** from public API  
- 🔍 **Search** users by **name** or **email**  
- ↕️ **Sort** users by **first name** or **email**  
- 🎯 **Filter** users (e.g., Gmail users, names starting with A)  
- 📑 **Pagination** support for API pages  
- 🎨 Beautiful **TailwindCSS** UI  
- 📱 Fully **responsive** layout for all devices  
- ⏳ **Loading spinner** during data fetching  
- ☁️ **Easy deployment** to **Vercel / Netlify**
---

## 📂 Folder Structure
```
user-directory/
├── public/
│ └── favicon.ico
├── src/
│ ├── api/
│ │ └── userApi.js
│ ├── components/
│ │ ├── SearchBar.jsx
│ │ ├── SortDropdown.jsx
│ │ ├── FilterDropdown.jsx
│ │ ├── Pagination.jsx
│ │ └── Spinner.jsx
│ ├── pages/
│ │ └── UserDirectory.jsx
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│ └── utils/
│ └── helpers.js
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🛠️ Tech Stack

| ⚙️ Category | 🧩 Tools Used |
|--------------|----------------|
| 💻 Frontend | React (Vite) ⚡ |
| 🎨 Styling | Tailwind CSS 🎨 |
| 🌐 API | [ReqRes API](https://reqres.in/api/users) 🔗 |
| 📦 HTTP Client | Axios ⚙️ |
| ☁️ Deployment | Netlify / Vercel 🚀 |

---

## ⚙️ Setup Instructions

### 1️⃣ Open frontend
```bash
cd frontend
```

### 2️⃣ Install Dependencies
```
npm install
```

### 3️⃣ Run the Development Server
```
npm run dev
```
> Now open → http://localhost:5173

---

## 🧩 API Reference
### Endpoint:
```
GET https://reqres.in/api/users?page={page}
```
### Example Response:
| Field        | Description       |
| ------------ | ----------------- |
| `avatar`     | Profile Image URL |
| `name`       | User Name         |
| `email`      | User Email        |

---


## 🧭 Core Functionalities
| Feature               | Description                                      |
| --------------------- | ------------------------------------------------ |
| 🔍 **Search**         | Search by first name, last name, or email        |
| ↕️ **Sort**           | Sort alphabetically by first name or email       |
| 🧰 **Filter**         | Filter by Gmail users or names                   |
| 📑 **Pagination**     | Navigate between API pages (Prev/Next)           |
| ⏳ **Loading Spinner** | Appears during data fetch                        |
| 📱 **Responsive UI**  | Works seamlessly on mobile, tablet, desktop      |

---
