# Week 5: DOM Manipulation:Interactive To-Do List

## Live Demo
- [View Live Project](https://josphinemoraa.github.io/iyf-s12-week-05-JosphineMoraa/

## Project Description
This repository contains all the required projects for Week 5, focused on learning JavaScript DOM manipulation. It includes the core DOM selection practice files (`dom-practice.html` & `dom.js`), a dedicated `daily-challenges/` folder with interactive mini-apps, and a fully functional dynamic To-Do List application built to assignment standards.

## Technologies Used
- **HTML5**: Semantic layout and document structure
- **CSS3**: Custom styling, layout design, and element state transitions
- **JavaScript (ES6+)**: DOM manipulation, event delegation, and array data management
- **GitHub Pages**: Live deployment and hosting

## How to Run

### 1. Run Live in Browser (Recommended)
You can view and interact with the deployed application directly online:
👉 **[Launch Live Demo](https://josphinemoraa.github.io/iyf-s12-week-05-JosphineMoraa/)**

---

### 2. Run Locally
To inspect or run the source code on your local computer:

1. **Clone the repository**
   ```bash
   git clone [https://github.com/JosphineMoraa/iyf-s12-week-05-JosphineMoraa.git](https://github.com/JosphineMoraa/iyf-s12-week-05-JosphineMoraa.git)
   
## Lessons Learned

### 1. Selecting and Changing Web Elements
- **Finding Elements:** I learned how to use JavaScript to select specific elements on a webpage using commands like `querySelector` and `getElementById`.
- **Changing Styles:** I learned how to dynamically change colors, modify classes, and update page elements when a user clicks or interacts with the site.

### 2. Efficient Event Handling

- **One Listener for Many Items:** Instead of attaching a separate click listener to every single list item, I attached one listener to the main parent container.
- **Handling New Items:** This makes the code run faster and guarantees that any newly created tasks automatically respond to clicks without adding extra code.

### 3. Website Security
- **Using `textContent`:** I learned to always use `textContent` instead of `innerHTML` when displaying text entered by users.
- **Preventing Hacks:** This protects the app from Cross-Site Scripting (XSS) attacks by treating all user input strictly as plain text, preventing malicious scripts from executing.

### 4. Managing App Data (State)
- **Data-First Thinking:** I learned to store all active tasks inside a JavaScript array first.
- **Updating the Screen:** Whenever a task is added, checked off, or deleted, the JavaScript array updates first, and a custom function redraws the screen to match the new state.
-
## Author and Contact
Josphine Moraa
Email:https://mail.google.com/mail/?view=cm&fs=1&to=ondarajosphine@gmail.com
GitHub: @ JosphineMoraa

Email:https://mail.google.com/mail/?view=cm&fs=1&to=ondarajosphine@gmail.com
