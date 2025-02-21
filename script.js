document.getElementById('bugForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const bugTitle = document.getElementById('bugTitle').value;
  const bugDescription = document.getElementById('bugDescription').value;

  // Create bug object
  const bug = {
    title: bugTitle,
    description: bugDescription,
    id: Date.now()
  };

  // Add bug to local storage
  const bugs = JSON.parse(localStorage.getItem('bugs')) || [];
  bugs.push(bug);
  localStorage.setItem('bugs', JSON.stringify(bugs));

  // Clear form
  document.getElementById('bugForm').reset();

  // Display bugs
  displayBugs();
});

function displayBugs() {
  const bugs = JSON.parse(localStorage.getItem('bugs')) || [];
  const bugList = document.getElementById('bugList');
  bugList.innerHTML = '';

  bugs.forEach(bug => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${bug.title}</strong>: ${bug.description}`;
    bugList.appendChild(li);
  });
}

// Display bugs on page load
document.addEventListener('DOMContentLoaded', displayBugs);
