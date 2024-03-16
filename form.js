function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  let amPm = 'AM';

  if (hours > 12) {
      hours -= 12;
      amPm = 'PM';
  }

  hours = hours === 0 ? 12 : hours;

  document.getElementById('current-time').textContent = `${hours}:${minutes} ${amPm}`;
}

updateTime(); // Update immediately
setInterval(updateTime, 1000); // Update every second

