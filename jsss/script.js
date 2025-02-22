// Interactive Button to Change Theme
document.getElementById('colorButton').addEventListener('click', function() {
    const body = document.body;
    const resume = document.querySelector('.resume');
    const headers = document.querySelectorAll('h1, h2');
    const buttons = document.querySelectorAll('button');
  
    // Toggle dark mode
    body.classList.toggle('dark-mode');
    resume.classList.toggle('dark-mode');
    headers.forEach(header => header.classList.toggle('dark-mode'));
    buttons.forEach(button => button.classList.toggle('dark-mode'));
  });
  
  // Add dark mode styles dynamically
  const style = document.createElement('style');
  style.innerHTML = `
    .dark-mode {
      background-color: #333;
      color: #f4f4f4;
    }
    .resume.dark-mode {
      background-color: #444;
      color: #f4f4f4;
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    }
    h1.dark-mode, h2.dark-mode {
      color: #f4f4f4;
    }
    button.dark-mode {
      background-color: #f4f4f4;
      color: #333;
    }
  `;
  document.head.appendChild(style);
