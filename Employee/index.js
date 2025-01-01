
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// Show Sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// Hide Sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// Change Theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});


// Sidebar animation
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
  sideMenu.classList.add("sidebar-open");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("sidebar-open");
  setTimeout(() => {
    sideMenu.style.display = "none";
  }, 300); // match the transition time
});

function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  // Remove active class from all tabs
  document.querySelectorAll('.horizontal nav ul li a').forEach(tab => {
    tab.classList.remove('active');
  });

  // Show the clicked section and mark the tab as active
  document.getElementById(sectionId).classList.add('active');
  document.getElementById(sectionId + 'Tab').classList.add('active');
}
const employeeData = {
  "Brooklyn Simmons": {
    firstName: "Brooklyn",
    lastName: "Simmons",
    email: "brok-simms@mail.com",
    phone: "(+62) 928 7273 7262",
    position: "Creative Director"
  },
  "Cody Fisher": {
    firstName: "Cody",
    lastName: "Fisher",
    email: "cody_fisher99@mail.com",
    phone: "(+62) 928 7273 7262",
    position: "Head of Development"
  },
  "Ralph Edwards": {
    firstName: "Ralph",
    lastName: "Edwards",
    email: "ralph_uxdsg@mail.com",
    phone: "(+62) 928 7273 7262",
    position: "Sr. UI/UX Designer"
  },
  "Jane Cooper": {
    firstName: "Jane",
    lastName: "Cooper",
    email: "jane_cooper@mail.com",
    phone: "(+62) 123 4567 8901",
    position: "HR Manager"
  },
  "Esther Howard": {
    firstName: "Esther",
    lastName: "Howard",
    email: "esther_howard@mail.com",
    phone: "(+62) 321 6547 8902",
    position: "Marketing Specialist"
  },
  "Wade Warren": {
    firstName: "Wade",
    lastName: "Warren",
    email: "wade_warren@mail.com",
    phone: "(+62) 456 7890 1234",
    position: "Graphic Designer"
  },
  "Arlene McCoy": {
    firstName: "Arlene",
    lastName: "McCoy",
    email: "arlene_mccoy@mail.com",
    phone: "(+62) 987 6543 2100",
    position: "Software Engineer"
  }
};

// Event listeners for action buttons
document.querySelectorAll('.action-btn').forEach(button => {
  button.addEventListener('click', event => {
    const employeeName = event.target.getAttribute('data-employee');
    const modal = document.getElementById('employeeModal');

    if (employeeData[employeeName]) {
      document.getElementById('modal-first-name').value = employeeData[employeeName].firstName;
      document.getElementById('modal-last-name').value = employeeData[employeeName].lastName;
      document.getElementById('modal-email').value = employeeData[employeeName].email;
      document.getElementById('modal-phone').value = employeeData[employeeName].phone;
      document.getElementById('modal-position').value = employeeData[employeeName].position;
    }

    modal.style.display = 'block';
  });
});

document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('employeeModal').style.display = 'none';
});

document.querySelector('.cancel-btn').addEventListener('click', () => {
  document.getElementById('employeeModal').style.display = 'none';
});
