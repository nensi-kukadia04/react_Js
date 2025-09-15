
# 🎓 Student Management System

A **React + TypeScript** based student management application with a clean, responsive interface that allows users to **add, view, and manage student records** with ease.  

![Preview](Screenshot%202025-08-25%20182339.png)  
![Preview](Screenshot%202025-08-25%20182418.png)  

---

## ✨ Features

- 📝 **Student Information Form**
  - First & Last Name  
  - Email Address  
  - Phone Number  
  - Gender Selection  
  - Standard/Grade Selection (1st–12th)  
  - Hobby Selection (multiple choices)  

- 📊 **Data Display**
  - Real-time table view of all students  
  - Sticky header table design  
  - Edit ✏️ and Delete 🗑️ actions  

- 🧭 **Navigation Bar**
  - Application branding  
  - User profile dropdown  
  - Responsive mobile menu  

- ✅ **Form Validation**
  - Required field validation  
  - Email & phone number format check  

- 🌙 **Dark Mode Support**
  - Toggle between light & dark themes  

- 📱 **Responsive UI**
  - Works seamlessly on mobile, tablet, and desktop  

---

## 🛠️ Tech Stack

- ⚛️ React 18 (with TypeScript)  
- 🎨 Tailwind CSS  
- 📦 Flowbite UI Components  
- 🔔 React Toastify & SweetAlert2 (notifications & alerts)  
- ⚡ React Hooks (`useState`, `useEffect`)  

---

## 📁 Project Structure

```
src/
├── Components/
│   ├── Navbar.tsx          # Top navigation bar
│   ├── StudentSideBar.tsx  # Sidebar navigation
│   └── StudentForm.tsx     # Form + Table component
├── App.tsx                 # Root component
├── main.tsx                # Entry point
└── index.css               # Global styles
```

---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js (v14 or higher)  
- npm / yarn  

### ⚡ Installation
```bash
# Clone repository
git clone <your-repo-url>
cd student-management-app

# Install dependencies
npm install

# Run development server
npm run dev
```

👉 Open [http://localhost:5173](http://localhost:5173) in your browser.  

---

## 💡 Usage

1. Open the **form** and enter student details  
2. Choose **gender, standard, and hobbies**  
3. Click **Add Student ➕**  
4. View records in the **table**  
5. Use **✏️ Edit** or **🗑️ Delete** to manage students  

---

## 🔧 Components Overview

### 📌 StudentForm
- Handles **form state & validation**  
- Stores data in **localStorage**  
- Displays students in **responsive table**  
- Supports **Add/Edit/Delete**  

### 📌 Navbar
- Branding + navigation links  
- Theme toggle 🌙☀️  
- User profile dropdown  

### 📌 StudentSideBar
- User profile section  
- Sidebar navigation menu  
- Logout option  

---

## 📋 Form Fields

| Field       | Type            | Required | Validation |
|-------------|-----------------|----------|------------|
| First Name  | Text            | ✅       | Non-empty |
| Last Name   | Text            | ✅       | Non-empty |
| Email       | Email           | ✅       | Valid email format |
| Phone No    | Number          | ✅       | Valid Indian mobile format |
| Gender      | Radio (M/F)     | ✅       | Must select |
| Standard    | Dropdown (1-12) | ✅       | Must select |
| Hobby       | Checkboxes      | ✅       | At least one |

---

## 🎨 Customization

- **Add new hobbies** → Update `allHobby` in `StudentForm.tsx`  
```ts
const allHobby: string[] = ["Reading", "Writing", "Travelling", "Dancing", "Music"];
```

- **Add new standards** → Update `allStd` in `StudentForm.tsx`  
```ts
const allStd: string[] = ["1st", "2nd", "3rd", "4th", "13th"];
```

- **Styling** → Modify Tailwind classes for custom UI  

---

## 🔮 Future Enhancements

- 💾 Persistent storage with database integration  
- 🔍 Search & filter in student table  
- 📤 Data export (CSV, PDF)  
- 🖼️ Profile photo upload  
- 🆔 Auto-generated Student IDs  
- 📑 Pagination for large lists  

---

## 🌐 Browser Support

✅ Chrome (latest)  
✅ Firefox (latest)  
✅ Edge (latest)  
✅ Safari (latest)  

---

## 🤝 Contributing

1. Fork the repository  
2. Create a new branch → `git checkout -b feature/AmazingFeature`  
3. Commit changes → `git commit -m 'Add AmazingFeature'`  
4. Push to branch → `git push origin feature/AmazingFeature`  
5. Open a Pull Request  

---

## 📄 License

This project is licensed under the **MIT License**.  

---
