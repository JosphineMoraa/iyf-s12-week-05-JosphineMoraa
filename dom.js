// ============================================
// LESSON 9 — CLASSWORK EXERCISE: dom.js (Tasks 9.1–9.4)
// ============================================

// small helper: logs ✓ or ✗ so you can check yourself
const check = (label, ok) => console.log(`${ok ? "✓" : "✗"} ${label}`);

// ============================================
// STEP 1 — Task 9.1: select TEN ways. Store each in a const, then log it.
// ============================================

// TODO 1 the h1
const todo1 = document.querySelector('h1');
check("Task 9.1 - TODO 1 (h1)", todo1 !== null);
console.log(todo1);

// TODO 2 all elements with class "content"
const todo2 = document.querySelectorAll('.content');
check("Task 9.1 - TODO 2 (.content)", todo2.length > 0);
console.log(todo2);

// TODO 3 the form with id "contact-form" (use getElementById — no #)
const todo3 = document.getElementById('contact-form');
check("Task 9.1 - TODO 3 (getElementById)", todo3 !== null);
console.log(todo3);

// TODO 4 the email input INSIDE the form (one querySelector with a descendant selector)
const todo4 = document.querySelector('#contact-form input[type="email"], #contact-form input[name="email"], #contact-form input');
check("Task 9.1 - TODO 4 (email input)", todo4 !== null);
console.log(todo4);

// TODO 5 all list items in the nav
const todo5 = document.querySelectorAll('nav li, .nav-list li');
check("Task 9.1 - TODO 5 (nav list items)", todo5.length > 0);
console.log(todo5);

// TODO 6 the first .nav-link
const todo6 = document.querySelector('.nav-link');
check("Task 9.1 - TODO 6 (first .nav-link)", todo6 !== null);
console.log(todo6);

// TODO 7 the last paragraph in the article (hint: p:last-of-type)
const todo7 = document.querySelector('article p:last-of-type');
check("Task 9.1 - TODO 7 (last paragraph in article)", todo7 !== null);
console.log(todo7);

// TODO 8–10 three more of your own — e.g. the submit button, every h2 in main, the footer
const todo8 = document.querySelector('button[type="submit"], #contact-form button');
const todo9 = document.querySelectorAll('main h2');
const todo10 = document.querySelector('footer');
check("Task 9.1 - TODO 8-10 (extra elements)", todo8 !== null && todo9.length >= 0 && todo10 !== null);
console.log("Submit button:", todo8);
console.log("H2s in main:", todo9);
console.log("Footer:", todo10);

// Then: what does document.querySelector(".does-not-exist") return? Log it.
const nonExistent = document.querySelector(".does-not-exist");
console.log("Non-existent selector returns:", nonExistent);

// And: turn your nav items NodeList into an array of their text with [...list].map()
const navLinksArray = [...document.querySelectorAll('.nav-link')].map(link => link.textContent);
console.log("Nav links text array:", navLinksArray);


// ============================================
// STEP 2 — Task 9.2: traverse. Say the route out loud before you write it.
// ============================================

// TODO 1 from the header, find the nav inside it
const headerToNav = document.querySelector('header').querySelector('nav');
console.log("9.2 TODO 1:", headerToNav);

// TODO 2 from the first .nav-link, get its parent li
const linkToLi = document.querySelector('.nav-link').parentElement;
console.log("9.2 TODO 2:", linkToLi);

// TODO 3 from the article, get its next sibling (should be a section)
const articleNextSibling = document.querySelector('article').nextElementSibling;
console.log("9.2 TODO 3:", articleNextSibling);

// TODO 4 from the ul, get all its child li elements
const ulChildren = document.querySelector('ul').children;
console.log("9.2 TODO 4:", ulChildren);

// TODO 5 from the footer, go up to the body
const footerToBody = document.querySelector('footer').parentElement;
console.log("9.2 TODO 5:", footerToBody);

// TODO 6 from the first .nav-link, use closest() to reach the header
const linkToHeader = document.querySelector('.nav-link').closest('header');
console.log("9.2 TODO 6:", linkToHeader);


// ============================================
// STEP 3 — Task 9.3: change things
// ============================================

// TODO 1 change the h1 text to something of yours
document.querySelector('h1').textContent = "My Updated DOM Practice Title";

// TODO 2 point the first .nav-link at https://developer.mozilla.org, open in a new tab
const firstNavLink = document.querySelector('.nav-link');
if (firstNavLink) {
  firstNavLink.href = "https://developer.mozilla.org";
  firstNavLink.setAttribute("target", "_blank");
  firstNavLink.setAttribute("rel", "noopener");
}

// TODO 3 read the article's data-id and data-category with dataset; add data-status="reviewed"
const articleElem = document.querySelector('article');
if (articleElem) {
  console.log("Article data-id:", articleElem.dataset.id);
  console.log("Article data-category:", articleElem.dataset.category);
  articleElem.dataset.status = "reviewed";
}

// TODO 4 add the class "highlight" to the first .content paragraph, toggle "accent" on the second — NO element.style
const firstContent = document.querySelector('.content');
const secondContent = document.querySelectorAll('.content')[1];

if (firstContent) firstContent.classList.add('highlight');
if (secondContent) secondContent.classList.toggle('accent');

// TODO 5 THE INJECTION DEMO
// Write one sentence in a comment: which one would you use for a user's comment, and why?
// -> I would use textContent for a user's comment because it treats input strictly as text, preventing malicious HTML or script injections.


// ============================================
// STEP 4 — Task 9.4: create, remove, clone
// ============================================

// TODO 1 write addNavItem(text, href)
function addNavItem(text, href) {
  const navList = document.querySelector('.nav-list') || document.querySelector('ul');
  if (!navList) return;

  const li = document.createElement('li');
  const a = document.createElement('a');
  
  a.className = "nav-link";
  a.href = href;
  a.textContent = text;
  
  li.appendChild(a);
  navList.appendChild(li);
}

addNavItem("Blog", "#blog");
addNavItem("Portfolio", "#portfolio");

// TODO 2 create a paragraph and insert it BEFORE the article's first paragraph
const article = document.querySelector('article');
if (article) {
  const newP = document.createElement('p');
  newP.textContent = "This is a newly inserted paragraph before the first paragraph.";
  const firstP = article.querySelector('p');
  if (firstP) {
    article.insertBefore(newP, firstP);
  } else {
    article.appendChild(newP);
  }
}

// TODO 3 clone the first nav li (deep), change its text to "Cloned", prepend it to the list
const firstNavLi = document.querySelector('nav li, .nav-list li');
const navListContainer = document.querySelector('.nav-list') || document.querySelector('ul');

if (firstNavLi && navListContainer) {
  const clonedLi = firstNavLi.cloneNode(true);
  const clonedA = clonedLi.querySelector('a');
  if (clonedA) {
    clonedA.textContent = "Cloned";
  } else {
    clonedLi.textContent = "Cloned";
  }
  navListContainer.prepend(clonedLi);
}

// TODO 4 remove the footer
const footer = document.querySelector('footer');
if (footer) {
  footer.remove();
}