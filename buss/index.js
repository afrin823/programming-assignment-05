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