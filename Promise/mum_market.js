// Simulating your mum going to the market with a Promise

function goMarket() {
    return new Promise((resolve, reject) => {
      // Simulating shopping process with a delay
      setTimeout(() => {
        const rubberBall = Math.random() < 0.7; // 70% chance to get a rubber ball
        const snack = Math.random() < 0.8; // 80% chance to get a snack
        const newShirt = Math.random() < 0.9; // 90% chance to get a new shirt
        
        if (rubberBall && snack && newShirt) {
          resolve({
            rubberBall: rubberBall,
            snack: snack,
            newShirt: newShirt
          });
        } else {
          reject("Failed to get all items. Reporting to dad.");
        }
      }, 2000); // Simulating a shopping trip delay of 2 seconds
    });
  }
  
  // Your mum goes to the market with the Promise
  goMarket()
    .then((items) => {
      console.log("Mum: All items purchased successfully!");
      return items; // Pass the purchased items to the next then block
    })
    .then((items) => {
      console.log("You: Playing with the new rubber ball");
      items.activity1 = "Playing with the new rubber ball"; // Add activity to the items object
      return items; // Pass the updated items object to the next then block
    })
    .then((items) => {
      console.log("You: Eating the snack");
      items.activity2 = "Eating the snack"; // Add activity to the items object
      return items; // Pass the updated items object to the next then block
    })
    .then((items) => {
      console.log("You: Wearing the new shirt");
      items.activity3 = "Wearing the new shirt"; // Add activity to the items object
      return items; // Pass the updated items object to the next then block
    })
    .catch((errorMessage) => {
      console.log("Mum:", errorMessage);
      console.log("Mum: Reporting to dad!");
    })
    .finally(() => {
      console.log("Mum: Back from the market.");
    });
  
