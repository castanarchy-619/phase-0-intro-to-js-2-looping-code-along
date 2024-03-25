function writeCards(namesArray, eventName) {
    const messages = [];
    
    for (let i = 0; i < namesArray.length; i++) {
      const message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
      messages.push(message); 
    }
    
    return messages; 
  }
  
  const thankYouMessages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(thankYouMessages);
function countDown(number) {
    if (number <= 0) {
        console.log("Please provide a positive integer greater than zero.");
        return;
    }
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
countDown(10);