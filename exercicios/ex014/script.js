
function carregar(){
    var msg = document.getElementById('msg')

    var img = document.getElementById('imagem')

    var data = new  Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12){
        
        img.src = 'imagens/Manha.png'

        document.body.style.background = '#f3c192'

    }else if (hora >= 12 && hora < 18){
        img.src = 'imagens/Tarde.png'

        document.body.style.background = '#e98a65'
    }else {

        img.src = 'imagens/noite.png'

        document.body.style.background = '#323346'
    }
        
    

}
