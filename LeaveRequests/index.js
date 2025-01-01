// Toggle dropdown visibility
function toggleDropdown(button) {
  const dropdownContent = button.nextElementSibling;
  
  // Close other open dropdowns
  document.querySelectorAll('.dropdown-content').forEach(content => {
    if (content !== dropdownContent) {
      content.style.display = "none";
    }
  });

  // Toggle current dropdown
  dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

// Close dropdown if clicked outside
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    document.querySelectorAll('.dropdown-content').forEach(content => {
      content.style.display = "none";
    });
  }
};

// Helper function to close dropdown
function closeDropdown(button) {
  const dropdownContent = button.closest(".dropdown-content");
  dropdownContent.style.display = "none";
}

function approveRequest(button) {
  const statusCell = button.closest("tr").querySelector(".status");
  statusCell.classList.remove("pending", "declined"); // Remove other status classes
  statusCell.classList.add("approved");
  statusCell.innerText = "Approved";

  // Force style recalculation (optional, in case the style is not updating)
  window.getComputedStyle(statusCell).color;

  // Close dropdown after action
  closeDropdown(button);
}

function declineRequest(button) {
  const statusCell = button.closest("tr").querySelector(".status");
  statusCell.classList.remove("pending", "approved"); // Remove other status classes
  statusCell.classList.add("declined");
  statusCell.innerText = "Declined";

  // Close dropdown after action
  closeDropdown(button);
}

function sendMessage(button) {
  alert("Message sent to the employee!");
  
  // Close dropdown after action
  closeDropdown(button);
}

// Filter function for search
function filterTable() {
  const searchTerm = document.getElementById("search-bar").value.toLowerCase();
  const rows = document.querySelectorAll("#leave-requests tbody tr");

  rows.forEach(row => {
    const employeeName = row.querySelector("td:first-child").innerText.toLowerCase();
    row.style.display = employeeName.includes(searchTerm) ? "" : "none";
  });
}


// Export to Excel (using SheetJS)
function exportToExcel() {
  alert("Export to Excel functionality coming soon!");
}

// Export to PDF (using jsPDF)
function exportToPDF() {
  alert("Export to PDF functionality coming soon!");
}

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
