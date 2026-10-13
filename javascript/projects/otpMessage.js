let otpGenerator= ()=>{
  let otpUsed="";
  for(let i = 0; i < 6; i++) {
    otpUsed+= Math.floor(Math.random()*10);
  }
  return otpUsed;
}

let messDetails = {
  amount: 100,
  AccNumber: 986746581234,
  otp: otpGenerator()
};

let AccDetail = [];
for (let key in messDetails) {
  if (key === "AccNumber") {
    for (let i = 0; i < messDetails[key].toString().length; i++) {
      AccDetail.push(messDetails[key].toString()[i]);
    }
  }
}

cardNumber=AccDetail.fill('X', 0, 8).slice(6, 12).join('');


console.log(`Your OTP for Transaction for ${messDetails.amount} Rupees with Card Number ending with ${cardNumber} is ${messDetails.otp}`);
