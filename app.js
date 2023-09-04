/** @format */

{
  /* <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div> */
}

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
