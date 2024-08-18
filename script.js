document.addEventListener("DOMContentLoaded", function() {
  const headers = document.querySelectorAll('.hover-effect');
  
  headers.forEach(header => {
    const text = header.textContent;
    header.innerHTML = '';
    
    text.split('').forEach(letter => {
      const span = document.createElement('span');
      span.textContent = letter === ' ' ? '\u00A0' : letter; 
      header.appendChild(span);
    });
  });
});
