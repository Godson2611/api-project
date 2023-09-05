/** @format */

const getApi = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const respons = await fetch(url);
  const data = await respons.json();
  for (i = 0; i < data.length; i++) {
    const rowDiv = document.querySelector(".row");
    const divCards = document.createElement("div");
    divCards.setAttribute("class", "card-body");
    rowDiv.appendChild(divCards);
    divCards.innerHTML = `
    <div class="col">
      <div class="card p-3">
        <div class="card-body container-fluid">
          <p class="card-text"><b>Name:${data[i].name}</b></p>
          <p class="card-text">Email:${data[i].email}</p>
          <p class="card-text">street:${data[i].address.street}</p>
          <p class="card-text">City:${data[i].address.city}</p>
        </div>
      </div>
    </div>
    `;
  }
  rowDiv.appendChild(divCards);
};
getApi();
