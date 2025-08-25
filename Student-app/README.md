Student Management System
A comprehensive React-based student management application with a clean, responsive interface that allows users to add, view, and manage student records.

✨ Features
📝 Student Information Form: Collects comprehensive student details including:

First and last name

Email address

Phone number

Gender selection

Standard/grade selection (1st-12th)

Hobby selection (multiple choices)

📊 Data Display: Real-time table view of all added students with:

All form fields displayed

Action buttons for editing and deleting records

Responsive table design with sticky headers

🧭 Navigation Bar: Professional navbar with:

Application branding

User profile dropdown

Navigation menu items

✅ Form Validation: Required field validation for essential information

📱 Responsive Design: Works on various screen sizes with a clean UI

🌙 Dark Mode Support: Includes dark theme styling using Tailwind CSS

🛠️ Technologies Used
React 18 with TypeScript

Tailwind CSS for styling

React Hooks (useState) for state management

Flowbite components for UI elements

📁 Project Structure
text
src/
├── Components/
│   ├── Navbar.tsx          # Navigation component
│   └── StudentForm.tsx     # Main form and table component
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles
🚀 Getting Started
Prerequisites
Node.js (v14 or higher)

npm or yarn package manager

Installation
Clone the repository:

bash
git clone <your-repo-url>
cd student-management-app
Install dependencies:

bash
npm install
Start the development server:

bash
npm run dev
Open http://localhost:5173 to view the application in your browser.

💡 Usage
Use the navigation bar to access different sections of the application

Fill out the student form with the required information

Select appropriate options for gender, standard, and hobbies

Click "Add Student" to submit the form

View the added student in the table on the right side

Use the edit (✎) and delete (❌) buttons to manage student records

🔧 Component Details
StudentForm Component
Manages form state using React useState hooks

Handles form submission and validation

Displays student data in a responsive table

Implements checkbox handling for multiple hobby selection

Navbar Component
Provides application navigation

Includes user profile dropdown menu

Responsive design with mobile hamburger menu

🗄️ State Management
The application uses React's useState hook to manage:

Form field values (firstName, lastName, email, etc.)

Collection of all student records

Checkbox states for hobby selection

📋 Form Fields
First Name: Text input (required)

Last Name: Text input (required)

Email: Email input (required)

Phone No: Number input (required)

Gender: Radio buttons (Male/Female)

Standard: Dropdown selection (1st-12th)

Hobby: Checkbox group (Reading, Writing, Travelling, Dancing)

🎨 Customization
Adding New Hobbies
Edit the allHobby array in the StudentForm component:

typescript
const allHobby: string[] = ["Reading", "Writing", "Travelling", "Dancing", "New Hobby"];
Modifying Standards
Edit the allStd array in the StudentForm component:

typescript
const allStd: string[] = ["1st", "2nd", "3rd", /* ... */, "New Grade"];
Styling
The application uses Tailwind CSS. Modify classes in components to change the appearance.

🌐 Browser Support
This application supports all modern browsers including:

Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

🔮 Future Enhancements
Data persistence (localStorage or backend integration)

Edit functionality for existing records

Search and filter capabilities in the student table

Data export options (CSV, PDF)

Enhanced form validation with error messages

Photo upload functionality

Student ID generation

Pagination for large student lists

preview
![alt text](<Screenshot 2025-08-25 182339.png>)
![alt text](<Screenshot 2025-08-25 182418.png>)

📄 License
This project is licensed under the MIT License.