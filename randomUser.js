 async function fetchRandomUserData(){
    try{
    const result =await fetch('https://randomuser.me/api/');
    if(result.ok){
        const data= await result.json()
        const userName= await data.results[0].name.title + data.results[0].name.first + data.results[0].name.last;
        const userEmail=  await data.results[0].email;
        
        return {
            name: userName,
            email: userEmail
        }
    }else{
        throw new Error("Result is not Valid")
    }

   
    }catch(error){
        console.error(error.message)
    }  
}
/* async function displayUserData() {
    try{
    const display =  await fetchRandomUserData()
    console.log(`Name1:${display.name}  
Email:${display.email}`);
} catch(err){
    console.error(err.message)
}
}
displayUserData()
  */
async function displayUserData(){
    const display=await fetchRandomUserData();
    console.log(`name20:${display.name}
            Email:${display.email}`
    );


}
displayUserData()