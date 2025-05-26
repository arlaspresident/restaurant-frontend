document.addEventListener("DOMContentLoaded",()=>{fetch("https://restaurant-backend-u697.onrender.com/api/menu").then(e=>e.json()).then(e=>{let n=document.getElementById("menu-container");n.innerHTML="",e.forEach(e=>{let t=document.createElement("div");t.classList.add("menu-item"),t.innerHTML=`
          <div class="left">
            <h3>${e.title}</h3>
            <p>${e.description}</p>
            </div>
            <div class="price">${e.price} kr</div>
          `,n.appendChild(t)})}).catch(e=>{console.error("Fel vid hämtning av meny:",e),document.getElementById("menu-container").innerHTML="Kunde inte ladda menyn"})});
//# sourceMappingURL=menu.1478d338.js.map
