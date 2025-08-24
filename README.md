# 🚐 TravelTrucks – Campervan Rental App

**TravelTrucks** is a frontend application for a campervan rental company. The app allows users to browse available campers, filter them by various criteria, view details, read reviews, and make bookings.

## 🔗 Live Demo

- **Live site**: [https://your-project-link.vercel.app](https://your-project-link.vercel.app)
- **Repository**: https://github.com/irina8660/Campers

## ⚙️ Technologies Used

- **React** (with Vite)
- **Redux Toolkit**
- **React Router**
- **Axios**
- **CSS Modules**
- **React Hot Toast** – notifications
- **React Spinners** – loaders
- **React Calendar** – booking calendar

## 🗺️ Routes

- `/` – Home page
- `/catalog` – Campers catalog
- `/catalog/:id` – Single camper page
  - `/features` – Features section
  - `/reviews` – Reviews section
- `*` – Not Found page

## 🧩 Features

- 🔍 **Camper filtering** by location, vehicle type, and available amenities (AC, kitchen, etc.) – **handled on the backend**
- 💖 **Favorites list** – campers can be added to favorites and persist after page reload
- 🔁 **Pagination** – “Load More” button loads additional results
- 📄 **Detailed camper page** with full information, photo gallery, features, and specifications
- 📅 **Booking form** with calendar-based date range selection and validation using Formik + Yup
- 🔔 **Success notification** after booking
- 🌐 **Lazy loading** of pages and components
- 🚛 **Global loading spinner** during async actions
- 🎨 **Fully pixel-perfect design** according to Figma layout
- 🚫 **404 Not Found page** for undefined routes with a link back to the catalog

## 🔗 API

The project uses a public mock API:

- `GET /campers` – Fetch all campers
- `GET /campers/:id` – Fetch camper details by ID

API base URL: [https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers)

## 🧠 State Management (Redux)

- `campers`: camper listings
- `filters`: active filtering criteria
- `favorites`: list of favorites (persisted in localStorage)
- `loading`: global `isLoading` flag for async operations

## 🚀 Getting Started

```bash
git clone https://github.com/irina8660/Campers
cd travel-trucks
npm install
npm run dev
```

👩‍💻 Author
• Iryna Yefremova
• Email: ira.efremova95@gmail.com
• GitHub: @irina8660
