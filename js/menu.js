document.addEventListener('DOMContentLoaded', () => {

  //hämta menydata från backend
    fetch('https://restaurant-backend-u697.onrender.com/api/menu')
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById('menu-container');
        container.innerHTML = ''; //rensa eventuell gammal data
  
          //gruppera rätter efter kategori
        const grouped = data.reduce((acc, item) => {
            if (!acc[item.category]) acc[item.category] = [];
            acc[item.category].push(item);
            return acc;
          }, {});
          //sorteringsordning
          const sortOrder = ['Förrätt', 'Varmrätt', 'Efterrätt', 'Dryck'];
          sortOrder.forEach(category => {
            if (!grouped[category]) return;
    
            const section = document.createElement('section');
            const heading = document.createElement('h2');
            heading.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            section.appendChild(heading);

 //lägg till varje objekt under rätt kategori
        grouped[category].forEach(item => {
          const div = document.createElement('div');
          div.classList.add('menu-item');
          div.innerHTML = `
          <div class="left">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            </div>
            <div class="price">${item.price} kr</div>
          `;
          section.appendChild(div);
        });

          container.appendChild(section); //lögg till sektionen på sidan
        });
      })
      .catch(err => {
        console.error('Fel vid hämtning av meny:', err);
        const container = document.getElementById('menu-container');
        container.innerHTML = 'Kunde inte ladda menyn';
      });
  });
  