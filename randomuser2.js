async function displayUserData(){
        const display=await fetchRandomUserData();
        console.log(`name:${display.name}
                Email:${display.email}`
        );


}
displayUserData()