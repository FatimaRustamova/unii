let table1 = document.querySelector("#table1");
let input = document.querySelector("input");

fetch("https://northwind.vercel.app/api/products")
  .then(res => res.json())
  .then(data => {
    data.forEach(element => {
      table1.innerHTML += `<tr>
        <td>${element.id}</td>
        <td><a href="./info.html?id=${element.id}">${element.name}</a></td>
        <td>${element.unitPrice}</td>
        <td>${element.unitsInStock}</td>
        <td><button id="btn2" onclick="deleteElement(${element.id})">Delete</button></td>
        <td><button id="btn2"><a href="./update.html?id=${element.id}">Update</a></button></td>
      </tr>`
    })
    input.addEventListener("input", (e) => {
      let filter = data.filter((el) => {
        return el.name.toLowerCase().startsWith(e.target.value)
      })
      table1.innerHTML = ` <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>PRICE</th>
      <th>STOCK</th>
    </tr>`;
      filter.forEach(element => {
        table1.innerHTML += `<tr>
          <td>${element.id}</td>
          <td>${element.name}</td>
          <td>${element.unitPrice}</td>
          <td>${element.unitsInStock}</td>
        </tr>`
      })
    })
  })

function deleteElement(id){
  alert(`${id} nömrəli məhsul uğurla silindi`);
  axios.delete(`https://northwind.vercel.app/api/products/${id}`);
  window.location.reload();
}

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", ()=>{
//   window.location("./add.html")
// })