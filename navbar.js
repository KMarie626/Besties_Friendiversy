const navbar = document.getElementById("site-navbar");

navbar.innerHTML = `
  <nav class="navbar" aria-label="Main navigation">
    <a class="logo" href="index.html">Our Place ♡</a>

    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="index2.html">About Us</a></li>
      <li><a href="index3.html">Pictures</a></li>
      <li><a href="index4.html">Year 1</a></li>
      <li><a href="index5.html">Year 2</a></li>
    </ul>
  </nav>
`;

const currentPage =
  window.location.pathname.split("/").pop() || "index.html";

const navLinks = navbar.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});

const pageTitles = {
  "index.html": "Our Place | Home",
  "index2.html": "Our Place | About Us",
  "index3.html": "Our Place | Pictures",
  "index4.html": "Our Place | Year 1",
  "index5.html": "Our Place | Year 2"
};

document.title = pageTitles[currentPage] || "Our Place";