function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txano').value;
    var res = document.getElementById('res');
    
    if (fano.length == 0 || fano > ano) {
        window.alert('Dados inválidos, tente novamente');
    } else {
       var radsex = document.getElementsByName('sex');
       var idade = ano - fano;
       var genero = '';
       var img = document.createElement('img');
       img.setAttribute('id', 'foto');

       if (radsex[0].checked){
        genero = 'Homem';

        if (idade >= 1 && idade < 2){
            img.setAttribute('src', 'imagem/Bebe.png');
        } else if ( idade < 13){
            img.setAttribute('src', 'imagem/meninocrianca.png');
        } else if (idade < 25){
            img.setAttribute('src', 'imagem/homemjovem.png');
        } else if (idade < 40){
            img.setAttribute('src', 'imagem/homemadulto.png');
        } else {
            img.setAttribute('src', 'imagem/homemvelho.png');
        }


       } else if (radsex[1].checked){
            genero = 'Mulher';

            if ( idade >= 1 && idade < 2){
                img.setAttribute('src', 'imagem/Bebe.png');
            } else if (idade < 13){
                img.setAttribute('src', 'imagem/meninacrianca.png');
            } else if (idade < 25){
                img.setAttribute('src', 'imagem/mulherjovem.png');
            } else if ( idade < 40){
                img.setAttribute('src', 'imagem/mulheradulta.png');
            } else {
                img.setAttribute('src', 'imagem/mulhervelha.png');
            }
       } 
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            
            res.appendChild(img);
    }
}
