// Here is an example with Promises where we need to wait for both responses before performing an action

const promise1 = () => new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 19);
});

const promise2 = () => new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 23);
});

// Challenge 1

// Try using JUST Promise syntax to sum the results of both Promises and console log the message below
// "The answer to life, the universe, and everything is: 42"

Promise.all([promise1(),promise2()])
.then(function (result){
        const sum= result[0]+result[1];
        console.log(`The answer to life, the universe, and everything is: ${sum}`)
  })
  .catch(function (err){
    console.error(err.mesaage)
  })

// REMINDER: If you want to use Promise.allSettled in your answer, you will need to run the following command in your terminal window first:
// source  update_node.sh


// your code here

// ---------------------------------------------------------------------------

// Challenge 2
// Now try the same example, but instead of implementing it with Promises, use Async/await
// Console log: "The answer to life, the universe, and everything is: 42"


/* const runAsync= function async(){
try{
    const result = await Promise.all([promise1(),promise2()])
      const sum= result[0]+result[1];
      console.log(`The answer to life, the universe, and everything is: ${sum}`)
}catch(err){
  console.error(error.message)
}
} */

// Async function to run the promises
const runAsync = async () => {
  try {
      const results = await Promise.all([promise1(), promise2()]); // Await the results of both promises
      const sum = results[0] + results[1]; // Calculate the sum
      console.log(`The answer to life, the universe, and everything is: ${sum}`); // Log the result
  } catch (error) {
      console.error('An error occurred:', error); // Handle any errors
  }
};

// Call the async function
runAsync();
 /*  .catch(function (err){
    console.error(err.mesaage)
  }) */


// your async/await code here

