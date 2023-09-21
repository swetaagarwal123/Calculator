let inputE = document.querySelector('input')
let btn = document.querySelectorAll('button')
for(let button of btn){
    button.addEventListener('click',(e)=>{
       let text= e.target.innerText
       if(text=='C'){
        inputE.value=''
       }
       else if(text==='='){
        try{
            inputE.value=eval(inputE.value)
        }
        catch(e){
            inputE.value='Invalid'
        }

        
        
       }
       else{
        inputE.value=inputE.value+text
       
       }
    

    })

}