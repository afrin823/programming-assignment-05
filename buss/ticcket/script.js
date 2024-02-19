// alert("connect hoise")

const btnElement = document.getElementsByClassName("all-btn");
let count = 0;
let totalSeatLeft = 40;
let sum = 0;
const ticketPrice = 550;

// console.log(document.getElementById("number").value.length);


for (const btn of btnElement) {
  btn.addEventListener("click", function (event) {
    count++;
    totalSeatLeft--;

    // event.target.classList.add('bg-freen')

    //added seats
    if (count <= 4) {
      const seatName = event.target;
      //   console.log(seatName);
      seatName.classList.add("bg-green");
      seatName.classList.add("pointer-events-none");
      //   seatName.setAttribute("disabled", true);

      const addedSeat = document.getElementById("added-seat");
      addedSeat.innerText = count;
      //totalLeftSeat
      const seatLeftText = document.getElementById("seat-left");
      seatLeftText.innerText = totalSeatLeft;

      //appending
      const appendContainer = document.getElementById("append-container");
      const li = document.createElement("li");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      p1.innerText = event.target.innerText;
      p2.innerText = "Economy";
      p3.innerText = "550";
      li.appendChild(p1);
      li.appendChild(p2);
      li.appendChild(p3);

      appendContainer.appendChild(li);
      //   console.log(appendContainer);

      const totalPrice = document.getElementById("total-price").innerText;
      let convertedTotalPrice = parseInt(totalPrice);
      // sum =count *ticketPrice;
      sum += ticketPrice;

      document.getElementById("total-price").innerText = sum;

      document.getElementById("grand-total").innerText = sum;

      //coupon section
      let grandTotal = 0;

      if (count == 4) {
        document.getElementById("apply").disabled = false;
        document.getElementById("apply").addEventListener("click", function () {
          const couponText = document.getElementById("coupon").value;
        //   console.log(couponText);

          if (couponText === "NEW15" && count >= 4) {
            grandTotal = sum * 0.85;
            document.getElementById("grand-total").innerText = grandTotal;

            let grandTotalDiscount = sum - grandTotal;
            // console.log(grandTotalDiscount);
            document.getElementById("discounted-price").innerText =
              grandTotalDiscount;

            document.getElementById("apply-coupon").classList.add("hidden");
            document.getElementById("discount-section")
              .classList.remove("hidden");
            //  const discountPriceText =
            //    document.getElementById("discount-amount").innerText;
            //    discountPriceText=grandTotal;
          } else if (couponText === "Couple 20" && count >= 4) {
            grandTotal = sum * 0.8;
            document.getElementById("grand-total").innerText = grandTotal;
            let grandTotalDiscount=sum-grandTotal;
            // console.log(grandTotalDiscount);
            document.getElementById("discounted-price").innerText =
              grandTotalDiscount;


            document.getElementById("apply-coupon").classList.add("hidden");
            document
              .getElementById("discount-section")
              .classList.remove("hidden");

          } else {
            // console.log('pani kha');
            alert("Not eligible. You must have use valid coupon code");
          }
        });
      }

      //next button

      const btnNext = document.getElementById("next");
    //   console.log(btnNext.innerText);
      const num = document.getElementById("number");
      // console.log(num.value.length);

      // console.log('value',btnNext.innerText);

      num.addEventListener('keyup',function(event){
        // console.log(event.key);
        convertedKey=parseInt(event.key);
        console.log(event.key.length);

        console.log( typeof convertedKey);

        if (count > 0 && convertedKey>=0 ) {
          btnNext.disabled = false;
          // if (num.value.length > 0) {
          //   btnNext.disabled = false;
          // }
        }
      })
      

      // console.log(sum);
    } else {
      alert("Maximum ticket limit crossed");

      return;
    }
  });
}

// if (count === 0){
//     document.getElementById
// }

// document.getElementById("apply").disabled = true;