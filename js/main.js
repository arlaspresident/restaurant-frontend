fetch('http://localhost:3000/api/menu')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('menu-container');
    data.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p><strong>${item.price} kr</strong></p>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error('Fel vid hämtning av meny:', err));
