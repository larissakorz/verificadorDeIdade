function verificar(){
  let data = new Date()
  let ano = data.getFullYear()
  let tano = document.getElementById('txano')
  let res = document.getElementById('res')

  if(tano.value.length == 0 || tano.value > ano){
    alert('[ERRO] Verifique os dados e tente novamente')
  }else{
    let radsex = document.getElementsByName('txradio')
    let idade = ano - Number(tano.value)
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(radsex[0].checked){
      genero = 'Homem'
      if(idade >= 0 && idade < 10){
        // Crianca
        img.setAttribute('src', 'foto-crianca1.jpg')
      }else if(idade < 21){
        // adolescente
        img.setAttribute('src', 'foto.jovem1.jpg')
      }else if(idade < 50){
        // adulto
        img.setAttribute('src', 'foto-adulto.jpg')
      }else{
        img.setAttribute('src', 'foto-idoso.jpg')
      }
    }else if(radsex[1].checked){
      genero = 'Mulher'
      if(idade >= 0 && idade < 10){
        img.setAttribute('src', 'foto-crianca.jpg')
      }else if(idade < 21){
        img.setAttribute('src', 'foto-jovem.jpg')
      }else if(idade < 50){
        img.setAttribute('src', 'foto-adulta.jpg')
      }else{
        img.setAttribute('src', 'foto-idosa.jpg')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos um ${genero} com ${idade} anos </br>`
    res.appendChild(img)
  }
}