document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');
    const status = document.getElementById('status');

  //lyssna på formulärets submit
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      //skapa en bokning med användarens input
      const booking = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        guests: document.getElementById('guests').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        message: document.getElementById('message').value
      };
  
      try {
        //skicka bokningen till backend
        const res = await fetch('https://restaurant-backend-u697.onrender.com/api/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(booking)
        });
  
        const data = await res.json();
  //om allt ok, visa bekräftelse och nollställ formuläret
        if (res.ok) {
          status.textContent = 'Bokning skickad';
          form.reset();
        } else {
          //om backend svarar med ett fel
          status.textContent = data.error || 'Kunde inte skicka bokning';
        }
      } catch (err) {
        //fångar andra fel
        console.error('Fel vid bokning:', err);
        status.textContent = 'Något gick fel';
      }
    });
  });
  