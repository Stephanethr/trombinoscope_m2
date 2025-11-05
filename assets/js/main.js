fetch("data/people.json")
  .then(response => response.json())
  .then(people => {
    const container = document.getElementById("trombinoscope");
    people.forEach(person => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="assets/photos/${person.id}.png" alt="${person.firstname} ${person.lastname}">
        <h3>${person.firstname} ${person.lastname}</h3>
      `;
      card.onclick = () => {
        window.location.href = `person.html?id=${person.id}`;
      };
      container.appendChild(card);
    });
  });
