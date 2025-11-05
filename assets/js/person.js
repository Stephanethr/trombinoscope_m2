const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

fetch("data/people.json")
  .then(response => response.json())
  .then(people => {
    const person = people.find(p => p.id === id);
    if (!person) return;

    const profile = document.getElementById("profile");
    profile.innerHTML = `
      <img src="assets/photos/${person.id}.png" alt="${person.firstname} ${person.lastname}">
      <div class="profile-info">
        <h2>${person.firstname} ${person.lastname}</h2>
        <p><strong>Age :</strong> ${person.age} ans</p>
        <p><strong>Date of birth :</strong> ${person.birth_date}</p>
        <p><strong>Place of birth :</strong> ${person.birth_place}</p>
        <p><strong>Nationality :</strong> ${person.nationality}</p>
        <hr>
        <p><strong>Strength :</strong> ${person.strength}</p>
        <p><strong>Weakness :</strong> ${person.weakness}</p>
        <p><strong>Achievement :</strong> ${person.achievement}</p>
        <hr>
        <p><strong>Fun fact :</strong> ${person.funfact}</p>
        <hr>
        <p><strong>Email :</strong> <a href="mailto:${person.email}">${person.email}</a></p>
        <p class="bio">${person.bio}</p>
      </div>
    `;
  });
