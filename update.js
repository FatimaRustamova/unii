let id = new URLSearchParams(window.location.search).get("id");
let table2 = document.querySelector("#table2");


fetch(`https://northwind.vercel.app/api/products/${id}`)
.then(res => res.json())
.then(element => {
    table2.innerHTML += `
        <tr>
            <td><input id="inp" type="text"  value="${element.id}"></td>
            <td><input id="inp" type="text" id='name' value="${element.name}"></td>
            <td><input id="inp" type="text" id='price' value="${element.unitPrice}"></td>
            <td><input id="inp" type="text" id='stock' value="${element.unitsInStock}"></td>
          </tr>
        ` 

        let btn3 = document.querySelector("#btn3");
        let nameInp = document.querySelector('#name');
        let priceInp = document.querySelector('#price');
        let stockInp = document.querySelector('#stock');

        btn3.addEventListener('click', ()=>{

            axios.patch('https://northwind.vercel.app/api/products/'+id, {
                name : nameInp.value,
                unitPrice : priceInp.value,
                unitsInStock : stockInp.value
            }).then(res=> window.location='./index.html')

        })
})

