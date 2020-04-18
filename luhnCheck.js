function luhnCheck(cardNum){
  cardNum = String(cardNum.split("").reverse().join(""));

  let odds = 0;
  let evens = 0;
  for (i = 0; i < cardNum.length; i++){
    if(i % 2 == 0){
      odds += parseInt(cardNum[i]);
    }else{
      let num = parseInt(cardNum[i] * 2);
      if((String(num)).length > 1){
        evens += parseInt(String(num)[0]) + parseInt(String(num)[1])
      }else{
          evens += num;
        }
    }
  }
  if(String(odds+evens).slice(-1) == 0){
    console.log("Valid Number");
  }else{
    console.log("Invalid Number");
  }
}
