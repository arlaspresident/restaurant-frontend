document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/menu')
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById('menu-container');
        container.innerHTML = '';
  
        data.forEach(item => {
          const div = document.createElement('div');
          div.classList.add('menu-item');
          div.innerHTML = `
          <div class="left">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            </div>
            <div class="price">${item.price} kr</div>
          `;
          container.appendChild(div);
        });
      })
      .catch(err => {
        console.error('Fel vid hämtning av meny:', err);
        const container = document.getElementById('menu-container');
        container.innerHTML = 'Kunde inte ladda menyn';
      });
  });
  