
let pageTimeoutToken = null;
/* Verificar se há um erro */
export function error(msg) {

	const error = document.querySelectorAll(".error");
    
    error.forEach(e =>{ e.innerText = msg })
        
    pageTimeoutToken = setTimeout(()=>{
        error.forEach(e =>{ e.innerText = ""})
    }, 5000);
}