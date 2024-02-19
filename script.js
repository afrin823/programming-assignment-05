//ph poribahan
// function poribahanArea(){
//     const paribahanSection = document.getElementById('ph-paribahan');
//     console.log(paribahanSection.classList);
// }

// function bussSiteCount(){
//     const bussSit = ['a1','a2','a3','a4','b1','b2','b3','b4','c1','c2','c3','c4','d1','d2','d3','d4','e1','e2','e3','e4','f1','f2','f3','f4','g1','g2','g3','g4','h1','h2','h3','h4','i1','i2','i3','i4','j1','j2','j3','j4']
   

//     //randome site number
//     const randomeSit = Math.random() * 39;
//     const siteIndex = Math.round(randomeSit);
   

//     const sit = bussSit[siteIndex];
//     //  console.log(siteIndex, sit);
//     return sit;
// }
// bussSiteCount();
// function sitBackgroundColor(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-green-700')
// }
// function continueGame(){
//     const busSit = bussSiteCount();
//     console.log('your random site:', busSit);

//     const currentSitElement = document.getElementById('current-sit');
//     currentSitElement.innerText = busSit;
//     console.log(currentSitElement);
// }
// function play(){
//     const paribahanSection = document.getElementById('ph-paribahan');
//     continueGame(); 
// }
// play()

function getElementById(elementId) {
    const element = document.getElementById(elementId);
    return element;
}
function createElementByTag(element) {
    return document.createElement(element);

}

function getElementInnerTextById(elementId) {
    return getElementById(elementId).innerText;
}

function buyTicketButton(){
    getElementById('ph-paribahan').scrollIntoView({behavior: 'smooth'});
}

const seats = document.getElementsByClassName('seats');
let seatBooked = parseInt(getElementInnerTextById('seat-booked'));

for (const seat of seats) {
    seat.addEventListener('click', function () {
        if (seatBooked != 4) {
            seat.style.backgroundColor = '#1DD100';
            seatBooked++;
            document.getElementById('seat-booked').innerText = seatBooked;
            const seatNumber = seat.innerText;
            BookedSeatDetails(seatNumber);
            totalPrice();
            seatsLeft()
        }
    })
}

function seatsLeft() {
    const seatsLeft = parseInt(getElementById('seats-left').innerText);
    let seatLeft = seatsLeft - 1;
    getElementById('seats-left').innerText = seatLeft;

}

function BookedSeatDetails(seatNumber) {
    const tbody = getElementById('tbody');

    const tr = createElementByTag('tr');

    tbody.appendChild(tr);

    const td = createElementByTag('td');
    const td1 = createElementByTag('td');
    const td2 = createElementByTag('td');

    td.innerText = seatNumber;
    tr.appendChild(td);

    td1.innerText = 'Economy';
    tr.appendChild(td1);

    td2.innerText = 550;
    tr.appendChild(td2);



}

function totalPrice() {
    let totalPrice = getElementById('total-price').innerText;

    let totalPriceInt = parseInt(totalPrice);

    totalPriceInt = totalPriceInt + 550;

    getElementById('total-price').innerText = totalPriceInt;
    const grandtotal = getElementById('grand-price');
    grandtotal.innerText = totalPriceInt;


}

getElementById('coupon-check').addEventListener('keyup', function (e) {
    let totalPrice = getElementById('total-price').innerText;
    if ((e.target.value !== '') && parseInt(totalPrice) !== 0) {
        getElementById('apply').removeAttribute('disabled');
    }

})

function applyCoupon() {
    const couponCode = getElementById('coupon-check').value;
    let totalPrice = getElementById('total-price').innerText;
    let discount = getElementById('discount');
    const grandtotal = getElementById('grand-price');
    if (couponCode == 'NEW15') {
        const grandPrice = totalPrice - totalPrice * (15 / 100);
        grandtotal.innerText = grandPrice;
        getElementById('coupon-div').classList.add('hidden')
        discount.innerText = totalPrice * (15 / 100);
        getElementById('discount-div').classList.remove('hidden');

    }
    else if (couponCode == 'COUPLE20') {
        const grandPrice = totalPrice - totalPrice * (20 / 100);
        grandtotal.innerText = grandPrice;
        getElementById('coupon-div').classList.add('hidden')
        discount.innerText = totalPrice * (20 / 100);
        getElementById('discount-div').classList.remove('hidden');

    }
    else {
        alert('Invalid Coupon!! Please type valid coupon code');
    }
    getElementById('coupon-check').value = '';
}

getElementById('phone-number').addEventListener('keyup', function (e) {
    const bookedSeats = parseInt(getElementInnerTextById('seat-booked'));
    const pName = getElementById('passenger-name');
    const pNumber = getElementById('phone-number');
    if (bookedSeats !== 0) {
        if (pName.value !== '' && e.target.value !== '') {
            getElementById('next-btn').removeAttribute('disabled');
        }
    }
})


function showModal(){
    getElementById('modal').classList.remove('hidden');
}