
function contar(){
    let inicio = document.getElementById('cn')
    let fim = document.getElementById('cn2')
    let passo = document.getElementById('cn3')
    let res = document.getElementById('res')

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        alert('Faltam Dados')
    }else {
        res.innerHTML = 'Contando: '

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f){

            for(let c = i; c <= f ; c += p){
                res.innerHTML  += `${c}  \u{1F300}`
            }
        } else {

            for( let c = i; c >= f; c -= p){
                res.innerHTML += `${c}  \u{1F300}`

            }
                
        }
        
       
        res.innerHTML += ` \u{1F3F4}`
    }
}