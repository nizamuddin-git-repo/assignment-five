



const allbtn = document.getElementsByClassName("add-btn");


for (btn of allbtn) {
  btn.addEventListener("click", function (e) {
   

    const placeName = e.target.parentNode.childNodes[3].innerText;

    const price = document.getElementById("price").innerText;
    const busClass = document.getElementById("Available").innerText;
    const SelectedDiv = document.getElementById("Selected-div");

    e.target.style.backgroundColor = "green";

    e.target.setAttribute('disabled', false);

    const setSeatCount = getConvertValue('seat-count');
    if(setSeatCount + 1 > 4){
        alert('not limit ')
        return;
    }

    const seatleft = getConvertValue('seat-left')
    document.getElementById('seat-left').innerText = seatleft - 1;

    const seatCount = getConvertValue('seat-count');
    document.getElementById('seat-count').innerText = seatCount + 1;

    const p = document.createElement("p");
    const p2 = document.createElement("p2");
    const p3 = document.createElement("p3");

    p.innerText = placeName;
    p2.innerText = busClass;
    p3.innerText = price;

    SelectedDiv.appendChild(p);
    SelectedDiv.appendChild(p2);
    SelectedDiv.appendChild(p3);

    updateTotalPrice(price);
    updateGrandTotal();
  });
}


function updateGrandTotal(Coupon) {
    
  const totalPrice = getConvertValue("total-price");

  if (Coupon == undefined) {
    document.getElementById("grand-total").innerText = totalPrice;
  } else {
    const couponCode = document.getElementById("apply-Coupon").value;

    if (couponCode == "nizam") {
      const discount = totalPrice * 0.2;
      document.getElementById("grand-total").innerText = totalPrice - discount;
    } else {
      alert("please enter valid coupon code");
    }
  }
}

function updateTotalPrice(price) {
  const totalPrice = getConvertValue("total-price");
  const sum = totalPrice + parseInt(price);
  document.getElementById("total-price").innerText = sum;
}

function getConvertValue(id) {
  const Price = document.getElementById(id).innerText;
  const convertPrice = parseInt(Price);
  return convertPrice;
}

