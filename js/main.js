//hämta menydata från backend api
fetch('https://restaurant-backend-u697.onrender.com/api/menu')
  .then(res => res.json()) //kovertera till json
  .then(data => {
    const container = document.getElementById('menu-container');

    //loopa igenom varje objekt o skapa html
    data.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p><strong>${item.price} kr</strong></p>
      `;
      container.appendChild(div); //lögg till menykortet i dom
    });
  })
  .catch(err => console.error('Fel vid hämtning av meny:', err));
