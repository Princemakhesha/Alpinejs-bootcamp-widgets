// function transportFee(price){
//     switch(price){
//       case "morning":
//         return "R20";
//         break;
//       case "afternoon":
//         return "R10"
//         break;
//       case "nightshift":
//         return "free"
//         break;
//                 }
//   }

  const transportFee = {
    shift: null,
    price: 0,

    calculateFee() {
        if (this.shift === "morning") {
            this.price = 20.00;
        } else if (this.shift === "afternoon") {
            this.price = 10.00;
        } else if (this.shift === "nightshift") {
            this.price = 0.00;
        } else {
            this.price = 0.00; // Set a default value if no shift is selected
        }
    }
}