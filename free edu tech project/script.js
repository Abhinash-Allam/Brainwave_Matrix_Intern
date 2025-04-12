
const resources = [
  // Science
  { title: "Physics Essentials", category: "Science", cost: "Free", image: "assets/images/physics.png", redirect: "https://www.khanacademy.org/science/hs-physics"},
  { title: "Basic Chemistry", category: "Science", cost: "Low-Cost", image: "assets/images/chemistry.jpg", redirect: "https://www.khanacademy.org/science/chemistry" },
  { title: "Biology Basics", category: "Science", cost: "Free", image: "assets/images/biology.jpg", redirect: "https://www.khanacademy.org/science/high-school-biology" },
  { title: "Environmental Science", category: "Science", cost: "Free", image: "assets/images/environment.jpg", redirect: "https://www.coursera.org/learn/environmental-science" },
  { title: "Astronomy 101", category: "Science", cost: "Free", image: "assets/images/astronomy.jpg", redirect: "https://www.coursera.org/learn/astronomy" },
  { title: "Human Anatomy", category: "Science", cost: "Low-Cost", image: "assets/images/anatomy.jpg", redirect: "https://www.khanacademy.org/science/health-and-medicine/human-anatomy-and-physiology" },

  // Math
  { title: "Algebra Basics", category: "Math", cost: "Free", image: "assets/images/algebra.jpg", redirect: "https://www.khanacademy.org/math/algebra" },
  { title: "Geometry 101", category: "Math", cost: "Free", image: "assets/images/geometry.jpg", redirect: "https://www.khanacademy.org/math/geometry" },
  { title: "Trigonometry Crash Course", category: "Math", cost: "Free", image: "assets/images/trigonometry.jpg", redirect: "https://www.khanacademy.org/math/trigonometry" },
  { title: "Probability & Stats", category: "Math", cost: "Low-Cost", image: "assets/images/statistics.jpg", redirect: "https://www.khanacademy.org/math/statistics-probability" },
  { title: "Calculus Prep", category: "Math", cost: "Free", image: "assets/images/calculus.jpg", redirect: "https://www.khanacademy.org/math/precalculus" },
  { title: "Data Math", category: "Math", cost: "Free", image: "assets/images/data-math.jpg", redirect: "https://www.coursera.org/learn/datasciencemathskills" },

  // Technology
  { title: "HTML & CSS", category: "Technology", cost: "Free", image: "assets/images/html-css.jpg", redirect: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" },
  { title: "JavaScript Basics", category: "Technology", cost: "Free", image: "assets/images/javascript.jpg", redirect: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/" },
  { title: "Python for Everyone", category: "Technology", cost: "Low-Cost", image: "assets/images/python.jpg", redirect: "https://www.freecodecamp.org/learn/scientific-computing-with-python/" },
  { title: "Web Dev 101", category: "Technology", cost: "Free", image: "assets/images/webdev.jpg", redirect: "https://www.theodinproject.com/paths/foundations/courses/foundations" },
  { title: "React Starter", category: "Technology", cost: "Free", image: "assets/images/react.jpg", redirect: "https://scrimba.com/learn/learnreact" },
  { title: "Git & GitHub", category: "Technology", cost: "Free", image: "assets/images/git.jpg", redirect: "https://www.coursera.org/learn/introduction-git-github" },

  // Trending
  { title: "Python for Everyone", category: "Trending", cost: "Low-Cost", image: "assets/images/python.jpg", redirect: "https://www.freecodecamp.org/learn/scientific-computing-with-python/" },
  { title: "JavaScript Basics", category: "Trending", cost: "Free", image: "assets/images/javascript.jpg", redirect: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/" },
  { title: "React Starter", category: "Trending", cost: "Free", image: "assets/images/react.jpg", redirect: "https://scrimba.com/learn/learnreact" },

  // New Arrivals
  { title: "Data Math", category: "New", cost: "Free", image: "assets/images/data-math.jpg", redirect: "https://www.coursera.org/learn/datasciencemathskills" },
  { title: "Web Dev 101", category: "New", cost: "Free", image: "assets/images/webdev.jpg", redirect: "https://www.theodinproject.com/paths/foundations/courses/foundations" },
  { title: "Git & GitHub", category: "New", cost: "Free", image: "assets/images/git.jpg", redirect: "https://www.coursera.org/learn/introduction-git-github" }
];

function renderResources(list) {
  const container = document.getElementById("resource-list");
  container.innerHTML = "";
  list.forEach(res => {
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
      <div class="card h-100 shadow-sm" onclick="redirectTo('${res.redirect}')">
        <img src="${res.image}" class="card-img-top" alt="${res.title}">
        <div class="card-body">
          <h5 class="card-title">${res.title}</h5>
          <p class="card-text">
            <span class="badge bg-success badge-cost">${res.cost}</span>
            <span class="badge bg-secondary">${res.category}</span>
          </p>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function redirectTo(url) {
  window.location.href = url;
}

function filterResources() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const filtered = resources.filter(res =>
    res.title.toLowerCase().includes(query) &&
    (category === "" || res.category === category)
  );
  renderResources(filtered);
}

document.getElementById("searchInput").addEventListener("input", filterResources);
renderResources(resources);
