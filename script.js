

const allbtn = document.getElementsByClassName('add-btn');

let count = 0;

for(btn of allbtn){
    btn.addEventListener('click', function (e) {
       count = count + 1;


        const placeName = e.target.parentNode.childNodes[3].innerText;

        const SelectedDiv =document.getElementById('Selected-div');

        const price = document.getElementById('price').innerText;

        // const busClass = document.getElementById('bus-class').innerText;

        // const seatPrice = document.getElementById('seat-price').innerText;

        // const convertPrice = parseInt(seatPrice);
        


        const p = document.createElement('p')
        p.innerText = placeName;
        const p2 = document.createElement('p2')
        p2.innerText = price;

        // const p3 = document.createElement('p3')
        // p.innerText = convertPrice;

        SelectedDiv.appendChild(p);
        SelectedDiv.appendChild(p2);


        const totalPrice = document.getElementById('total-price').innerText;

        const convertTotalPrice = parseInt(totalPrice);

        const total = convertTotalPrice + parseInt(price);


        const grandTotal = document.getElementById('grand-total').innerText;

        const convertGrandTotal = parseInt(grandTotal);

        const totalGrand = convertGrandTotal + parseInt(price);

        setInnerText('grand-total', totalGrand);
        setInnerText('total-price', total)
       setInnerText('seat-count', count);
    });
}



function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}