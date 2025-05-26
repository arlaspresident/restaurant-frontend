fetch("https://restaurant-backend-u697.onrender.com/api/menu").then(e=>e.json()).then(e=>{let n=document.getElementById("menu-container");e.forEach(e=>{let t=document.createElement("div");t.innerHTML=`
        <h3>${e.title}</h3>
        <p>${e.description}</p>
        <p><strong>${e.price} kr</strong></p>
      `,n.appendChild(t)})}).catch(e=>console.error("Fel vid hämtning av meny:",e));
//# sourceMappingURL=restaurant-frontend.a2107a2f.js.map
