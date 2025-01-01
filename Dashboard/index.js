// Executes when document is loaded
document.addEventListener("DOMContentLoaded", (ev) => {
  // Recent Orders Data
  document.getElementById("recent-orders--table").appendChild(buildTableBody());

  // Updates Data
  document
    .getElementsByClassName("recent-updates")
    .item(0)
    .appendChild(buildUpdatesList());

  // Sales Analytics
  const salesAnalytics = document.getElementById("analytics");
  buildSalesAnalytics(salesAnalytics);
});

// Document Builder
const buildTableBody = () => {
  const recentOrderData = RECENT_ORDER_DATA;

  const tbody = document.createElement("tbody");

  let bodyContent = "";
  for (const row of recentOrderData) {
    bodyContent += `
      <tr>
        <td>${row.productName}</td>
        <td>${row.productNumber}</td>
        <td>${row.payment}</td>
        <td class="${row.statusColor}">${row.status}</td>
        <td class="primary">Details</td>
      </tr>
    `;
  }

  tbody.innerHTML = bodyContent;

  return tbody;
};

const buildUpdatesList = () => {
  const updateData = UPDATE_DATA;

  const div = document.createElement("div");
  div.classList.add("updates");

  let updateContent = "";
  for (const update of updateData) {
    updateContent += `
      <div class="update">
        <div class="profile-photo">
          <img src="${update.imgSrc}" />
        </div>
        <div class="message">
          <p><b>${update.profileName}</b> ${update.message}</p>
          <small class="text-muted">${update.updatedTime}</small>
        </div>
      </div>
    `;
  }

  div.innerHTML = updateContent;

  return div;
};

const buildSalesAnalytics = (element) => {
  const salesAnalyticsData = SALES_ANALYTICS_DATA;

  for (const analytic of salesAnalyticsData) {
    const item = document.createElement("div");
    item.classList.add("item");
    item.classList.add(analytic.itemClass);

    const itemHtml = `
      <div class="icon">
        <span class="material-icons-sharp"> ${analytic.icon} </span>
      </div>
      <div class="right">
        <div class="info">
          <h3>${analytic.title}</h3>
          <small class="text-muted"> Last 24 Hours </small>
        </div>
        <h5 class="${analytic.colorClass}">${analytic.percentage}%</h5>
        <h3>${analytic.sales}</h3>
      </div>
    `;

    item.innerHTML = itemHtml;

    element.appendChild(item);
  }
};


// Document operation functions
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

document.addEventListener("DOMContentLoaded", () => {
  const recentOrdersTable = document.getElementById("recent-orders--table");
  const ordersData = RECENT_ORDER_DATA;
  const rowsPerPage = 5;
  let currentPage = 1;

  const buildTableBody = (page = 1) => {
    const tbody = document.createElement("tbody");
    tbody.innerHTML = "";

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedOrders = ordersData.slice(start, end);

    paginatedOrders.forEach(row => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${row.productName}</td>
        <td>${row.productNumber}</td>
        <td>${row.payment}</td>
        <td class="${row.statusColor}">${row.status}</td>
        <td class="primary">Details</td>`;
      tbody.appendChild(tr);
    });

    return tbody;
  };

  const paginateTable = () => {
    const tbody = buildTableBody(currentPage);
    recentOrdersTable.querySelector("tbody")?.remove();
    recentOrdersTable.appendChild(tbody);
  };

  const filterTable = (query) => {
    currentPage = 1;  // Reset pagination
    const filteredOrders = ordersData.filter(order => order.productName.toLowerCase().includes(query.toLowerCase()));
    RECENT_ORDER_DATA = filteredOrders;  // Update data
    paginateTable();
  };

  document.getElementById("search-orders").addEventListener("input", (e) => {
    filterTable(e.target.value);
  });

  document.getElementById("next-page").addEventListener("click", () => {
    if (currentPage * rowsPerPage < ordersData.length) {
      currentPage++;
      paginateTable();
    }
  });

  document.getElementById("prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      paginateTable();
    }
  });

  // Initial population
  paginateTable();
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
