// Update Clock Function
function updateClock() {
  const now = new Date();

  // Get current day
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const currentDay = now.getDay();
  const dayRow = document.getElementById('day-row');
  
  dayRow.innerHTML = days.map((day, index) =>
    `<span class="${index === currentDay ? 'active' : ''}">${day}</span>`
  ).join('');

  // Get current time
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;

  // Get current date
  const year = now.getFullYear();
  const month = now.toLocaleString('default', { month: 'short' }).toUpperCase();
  const date = String(now.getDate()).padStart(2, '0');
  document.getElementById('date').textContent = `${year} ${month} ${date}`;

  // Set background based on the time of day
  const currentHour = now.getHours();
  if (currentHour >= 6 && currentHour < 12) {
    document.body.className = 'morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    document.body.className = 'afternoon';
  } else {
    document.body.className = 'night';
  }
}

// Create Particles
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    particlesContainer.appendChild(particle);
  }
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Set event listeners
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

// Initialize
createParticles();
setInterval(updateClock, 1000);
