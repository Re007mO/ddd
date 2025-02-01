//Synchronously
function executeTasksSync(){
  function sleep(milliseconds){
    const start= new Date().getTime();
    while (new Date().getTime()-start<milliseconds){
  
    }
  }
  
  console.log("Task 1 Started")
  for(let i=0;i<1;i++){
    sleep(2000)
    console.log("Task 2 Started")
    sleep(1000)
    console.log("All tasks completed")

}  
}
executeTasksSync()

//Asynchronously

/* function executeTasksAsync(){
  console.log("Task 1 Started");
  setTimeout(function(){
    console.log("Task 2 started")
  },2000)
  setTimeout(function(){
    console.log("All tasks completed")
  },1000)
} 
  executeTasksSync()
 */