
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert ('[ERROR] Verifique os dados e tente novamente!')
    }else{
       var fsex= document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        genero = 'Mulher'
        document.body.style.background = '#DB7093'
        if (idade >=0 && idade < 10){
            //menininha
            img.setAttribute('src', 'menininha.jpg')
        }else if (idade < 21){
            //girl
            img.setAttribute('src', 'girl.jpg')
        }else if (idade < 50){
            //mulher
            img.setAttribute('src', 'mulher.jpg')
        }
        else {
            //idosa
            img.setAttribute('src', 'senhora.jpg')
        }
        }else if (fsex[1].checked){
       
            genero = 'Homem'
            document.body.style.background = '#808080'
            if (idade >=0 && idade < 10){
                //menininho
                img.setAttribute('src', 'menininho01.jpg')
            }else if (idade < 21){
                //boy
                img.setAttribute('src', 'boy.jpg')
            }else if (idade < 50){
                //homem
                img.setAttribute('src', 'homem.jpg')
            }
            else {
                //idoso
                img.setAttribute('src', 'senhor.jpg')
            }
            
       }
         else if (fsex[2].checked){
       
        genero = 'Ume Elu'
        document.body.style.background = '#FF4500'
        if (idade >=0 && idade < 10){
            //menininho
            img.setAttribute('src', 'amorzinho.jpeg')
        }else if (idade < 21){
            //boy
            img.setAttribute('src', 'amorzinho.jpeg')
        }else if (idade < 50){
            //homem
            img.setAttribute('src', 'amorzinho.jpeg')
        }
        else {
            //idoso
            img.setAttribute('src', 'amorzinho.jpeg')
        }
    }
       
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
       res.appendChild(img)
    }
}