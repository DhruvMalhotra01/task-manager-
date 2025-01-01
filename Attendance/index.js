
const today = new Date();
        
        // Format it as yyyy-mm-dd
        const formattedDate = today.toISOString().split('T')[0];
        
        // Display the date
        document.getElementById('current-date').textContent = formattedDate;
// Function to create the attendance table
function generateAttendanceTable(date) {
  const tableContainer = document.getElementById('attendance-table');
  tableContainer.innerHTML = ''; // Clear any previous table

  const attendanceForDate = attendanceData[date];

  if (attendanceForDate) {
      const table = document.createElement('table');

      // Create the table headers
      const headerRow = document.createElement('tr');

      // Name Header
      const nameHeader = document.createElement('th');
      nameHeader.textContent = 'Employee';
      headerRow.appendChild(nameHeader);

      // Clock-in & Out Header
      const clockInOutHeader = document.createElement('th');
      clockInOutHeader.textContent = 'Clock-in & Out';
      headerRow.appendChild(clockInOutHeader);

      // Overtime Header
      const overtimeHeader = document.createElement('th');
      overtimeHeader.textContent = 'Overtime';
      headerRow.appendChild(overtimeHeader);

      // Attendance Status Header
      const statusHeader = document.createElement('th');
      statusHeader.textContent = 'Attendance Status';
      headerRow.appendChild(statusHeader);

      table.appendChild(headerRow);

      // Create table rows for each employee's attendance
      attendanceForDate.forEach(entry => {
          const row = document.createElement('tr');

          // Name Cell with picture
          const nameCell = document.createElement('td');
          nameCell.classList.add('employee-cell');
          const img = document.createElement('img');
          img.src = entry.profilePicture; // Assuming entry contains a profilePicture URL
          img.classList.add('profile-pic');
          const nameText = document.createElement('div');
          nameText.classList.add('name-text');
          nameText.innerHTML = `<strong>${entry.name}</strong><br>${entry.id}`; // Show employee ID under the name

          nameCell.appendChild(img);
          nameCell.appendChild(nameText);
          row.appendChild(nameCell);

          // Clock-in & Out Cell
          const clockInOutCell = document.createElement('td');
          clockInOutCell.classList.add('clock-in-out-cell');
          clockInOutCell.innerHTML = `
              <span class="clock-in">${entry.clockIn}</span>
              <span class="duration">${entry.duration}</span>
              <span class="clock-out">${entry.clockOut}</span>
          `;
          row.appendChild(clockInOutCell);

          // Overtime Cell
          const overtimeCell = document.createElement('td');
          overtimeCell.classList.add('overtime-cell');
          overtimeCell.innerHTML = entry.overtime ? `<span class="overtime">${entry.overtime}</span>` : '<span class="no-overtime">None</span>';
          row.appendChild(overtimeCell);

          // Attendance Status Cell
          const statusCell = document.createElement('td');
          statusCell.textContent = entry.status;
          row.appendChild(statusCell);

          table.appendChild(row);
      });

      tableContainer.appendChild(table);
  } else {
      tableContainer.textContent = 'No attendance data available for this date.';
  }
}

// Event listener for the date picker
document.getElementById('date-picker').addEventListener('change', function() {
  const selectedDate = this.value;
  generateAttendanceTable(selectedDate);
});

// Function to format the date as YYYY-MM-DD
function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Ensure 2 digits
  const day = date.getDate().toString().padStart(2, '0'); // Ensure 2 digits
  return `${year}-${month}-${day}`;
}

// Automatically show the table for the current date on page load
window.onload = function() {
  const today = new Date();
  const formattedToday = formatDate(today);
  document.getElementById('date-picker').value = formattedToday; // Set the date picker's value to today
  generateAttendanceTable(formattedToday); // Display today's attendance table
};
function searchEmployee() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const table = document.getElementById("attendance-table");
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
      const td = rows[i].getElementsByTagName("td")[0];
      if (td) {
          const txtValue = td.textContent || td.innerText;
          rows[i].style.display = txtValue.toLowerCase().includes(input) ? "" : "none";
      }
  }
}

const xValues = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const yValues = [80, 100, 95, 80, 100, 90, 70];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: true,
      lineTension: 0,
      backgroundColor: "rgba(0, 0, 255, 0.2)", // Fill color
      borderColor: "rgba(0, 0, 255, 1.0)", // Line color
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      xAxes: [{
        ticks: {
          fontColor: "#4169E1" // Inherit CSS variable color
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 120,
          stepSize: 20,
          fontColor: "#4169E1" // Inherit CSS variable color
        },
        scaleLabel: {
          display: true,
          labelString: "Percentage",
          fontColor: "#4169E1" // Inherit CSS variable color
        }
      }]
    }
  }
});
