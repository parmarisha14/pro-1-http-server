<img width="1919" height="904" alt="Screenshot 2025-07-19 143850" src="https://github.com/user-attachments/assets/a034a84f-1294-4a66-8647-fcc1e312fad4" />

<img width="1919" height="905" alt="Screenshot 2025-07-19 143957" src="https://github.com/user-attachments/assets/140c5aa7-c676-4e53-acf8-941901b13a20" />

<img width="1891" height="911" alt="Screenshot 2025-07-19 144038" src="https://github.com/user-attachments/assets/f562b31f-83b5-490d-85c1-b93119836ba7" />

<img width="1919" height="903" alt="Screenshot 2025-07-19 144424" src="https://github.com/user-attachments/assets/8ee617cd-4703-4d3e-9d59-3dac16ccf379" />


📄 Project Documentation: Node.js Static Website

🧾 Project Title:

Node.js Static Website with Routing and Responsive Design

📌 Objective:

To create a basic multi-page static website using Node.js that dynamically serves different HTML files (index, about, contact, and 404) and implements modern responsive UI using Bootstrap 5.

🛠️ Technologies Used:

Node.js (HTTP & FS Modules)

HTML5

CSS3

Bootstrap 5.3.2

JavaScript (for Bootstrap interactivity)

📁 Project Structure:


/project-folder

├── server.js           # Node.js server with routing logic

├── index.html          # Homepage

├── about.html          # About Us page

├── contact.html        # Contact form page

└── 404.html            # Error page for unknown routes

🚀 Features:

✅ Node.js Server (server.js)
Uses http and fs modules

Serves HTML files based on URL routes:

/ → index.html

/about → about.html

/contact → contact.html

All other paths → 404.html

Sends appropriate content-type headers

✅ Pages:

1. Home Page (index.html)

Contains a welcoming hero section

Styled using gradient backgrounds and Bootstrap cards

Responsive navigation bar with links to all pages

2. About Page (about.html)

Introduces the purpose and goal of the website

Clean card-style section with centered text

Matches the theme with shared navbar and footer

3. Contact Page (contact.html)
   
Contains a styled Bootstrap form for user input

Sections for name, email, and message

Fully responsive and visually aligned with other pages

4. 404 Error Page (404.html)
   
Clearly informs the user when a page is not found

Big 404 code display with a modern look

“Go Back Home” button for navigation

🎨 UI/UX Highlights:

Consistent navbar across all pages with:

Gradient background

Active tab highlighting

External link to Node.js docs

All pages use a gradient background and card-style content layout

Footer is fixed-style and consistent for branding

🔄 Routing Logic in server.js:


switch (req.url) {
    case '/': filePath = 'index.html'; break;
    
    case '/about': filePath = 'about.html'; break;
    
    case '/contact': filePath = 'contact.html'; break;
    
    default: filePath = '404.html'; break;
}

🧪 How to Run:

Open terminal in the project folder.

Run the server:

node server.js

Open browser and visit:

http://localhost:8081

