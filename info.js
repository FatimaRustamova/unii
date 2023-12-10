let id = new URLSearchParams(window.location.search).get("id");
let info = document.querySelector(".inform");

fetch(`https://northwind.vercel.app/api/products/${id}`)
.then(res => res.json())
.then(data => {
    info.innerHTML += `
       <div class="mehsul">
            <h2>Mehsulun adi: ${data.name}</h2>
            <h2>Mehsulun qiymeti: ${data.unitPrice}</h2>
            <h2>Stokda var: ${data.unitsInStock}</h2>
            <h2>Qablasdirmada: ${data.quantityPerUnit}</h2>
       </div>
    `
})

let btn = document.querySelector("#btn");

