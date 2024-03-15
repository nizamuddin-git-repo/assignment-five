

const allbtn = document.getElementsByClassName('add-btn');

let count = 0;

let count2 = 40;

for(btn of allbtn){
    btn.addEventListener('click', function (e) {
       count = count + 1;
       count2 = count2 -1;


        const placeName = e.target.parentNode.childNodes[3].innerText;


        const SelectedDiv = document.getElementById('Selected-div');
        const price = document.getElementById('price').innerText;
        const busClass = document.getElementById('Available').innerText;

        e.target.style.backgroundColor = "green";


        const p = document.createElement('p')
        const p2 = document.createElement('p2')
        const p3 = document.createElement('p3')

        p.innerText = placeName;
        p2.innerText = busClass;
        p3.innerText = price;


        SelectedDiv.appendChild(p);
        SelectedDiv.appendChild(p2);
        SelectedDiv.appendChild(p3);


        totalPrice('total-price', parseInt(price))
        grandTotal('grand-total', parseInt(price) )
    

       setInnerText('seat-count', count);
       setInnerText('seat-left', count2);

    });
}


function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}


function totalPrice(id, value) {
    const totalPrice = document.getElementById(id).innerText;
    const convertTotalPrice = parseInt(totalPrice);
    const total = convertTotalPrice + parseInt(value);
    setInnerText('total-price', total);

}


function grandTotal(id, value) {
    const totalPrice = document.getElementById(id).innerText;
    const convertTotalPrice = parseInt(totalPrice);
    const totalGrand = convertTotalPrice + parseInt(value);
    setInnerText('grand-total', totalGrand);
}

