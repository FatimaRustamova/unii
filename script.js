let table = document.querySelector("#table1");
let input = document.querySelector("input");

fetch("https://northwind.vercel.app/api/products")
  .then(res => res.json())
  .then(data => {
    data.forEach(element => {
      table.innerHTML += `<tr>
        <td>${element.id}</td>
        <td><a href="./info.html?id=${element.id}">${element.name}</a></td>
        <td>${element.unitPrice}</td>
        <td>${element.unitsInStock}</td>
        <td><button>Delete</button></td>
        <td><button><a href="./update.html?id=${element.id}">Update</a?</button></td>
      </tr>`
    })
    input.addEventListener("input", (e) => {
      let filter = data.filter((el) => {
        return el.name.toLowerCase().startsWith(e.target.value)
      })
      table.innerHTML = ` <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>PRICE</th>
      <th>STOCK</th>
    </tr>`;
      filter.forEach(element => {
        table.innerHTML += `<tr>
          <td>${element.id}</td>
          <td>${element.name}</td>
          <td>${element.unitPrice}</td>
          <td>${element.unitsInStock}</td>
        </tr>`
      })
    })
  })

