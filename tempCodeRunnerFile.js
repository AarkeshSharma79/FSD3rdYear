const container=document.getElementById('container')
const button=document.getElementById('btn')
console.log(button)
 async function fetchdata(){
    try{

        const serverData= await fetch('https://fakestoreapi.com/products')
        const jsonData=await serverData.json()
        // console.log(serverData)
        container.innerHTML=`${JSON.stringify(jsonData)}`
        console.log(jsonData)
    }catch(e){
        console.log(e)
    }
    finally{
        console.log("All right")
    }

}
button.addEventListener('click',fetchdata)