alert('Bem-Vindo ao Mercado Preso!')

let buyList = confirm('Já conhece nossa lista de compras?')

const itenList = '\n\nItens disponiveis em nossa loja: \n\n1- Placa de Vídeo ASUS Cerberus - GeForce GTX 1050 Ti, 4GB GDDR5, OC Edition \n\n2- SSD A400, Kingston, SA400S37/240G, Cinza \n\n3- Cadeira Gamer Fury XT, Braço Ajust, Reclin. 180° - Cinza \n\n 4- Mouse Pad Professional Gaming, Havit, HV-MP830, 30x90 cm'

let videoBoard = 50.30
let SSD = 9983.03
let gamignChair = 872.30
let mousePad = 8761.20

let videoDescript = 'Placa de Vídeo ASUS Cerberus'
let ssdDescript = 'SSD A400 Kingston'
let chairDescript = 'Cadeira Gamer Fury XT'
let padText = 'Mouse Pad Professional Gaming, Havit'

if (buyList === true) {
    alert('Ok, vamos as compras!')
} else {
    alert(`Conheça nossa lista então. ${itenList}`)
}

let itensConfirm = confirm('Gostaria de saber o valor de algum item?')

if (itensConfirm === true) {
    let itensValue = prompt('Qual item você deseja consultar?')
    if (itensValue === '1') {
        alert(`O valor da placa de vídeo é: ${videoBoard} R$`)
    } else if (itensValue === '2') {
        alert(`O valor da placa de vídeo é: ${SSD} R$`)
    } else if (itensValue === '3') {
        alert(`O valor da placa de vídeo é: ${gamignChair} R$`)
    } else if (itensValue === '4') {
        alert(`O valor da placa de vídeo é: ${mousePad} R$`)
    }
} else {
    alert('Tá bom!')
}

let buyChoosen = prompt('Qual item gostaria de levar?')

if (buyChoosen === null) {
    alert('Volte sempre, verme.')
}


if (buyChoosen != null) {
    if (buyChoosen === '1') {
        alert(`Você está comprando uma ${videoDescript} com o valor total de ${videoBoard} R$`)
    } else if (buyChoosen === '2') {
        alert(`Você está comprando uma ${ssdDescript} com o valor total de ${SSD} R$`)
    } else if (buyChoosen === '3') {
        alert(`Você está comprando uma ${chairDescript} com o valor total de ${gamignChair} R$`)
    } else if (buyChoosen === '4') {
        alert(`Você está comprando uma ${padText} com o valor total de ${mousePad} R$`)
    }
}

if (buyChoosen != null) {
    if (buyChoosen === '1') {
        alert(`Você acabou de comprar ${videoDescript} por ${videoBoard} R$ Volte sempre!`)
    } else if (buyChoosen === '2') {
        alert(`Você acabou de comprar ${ssdDescript} por ${SSD} R$ Volte sempre!`)
    } else if (buyChoosen === '3') {
        alert(`Você acabou de comprar ${chairDescript} por ${gamignChair} R$ Volte sempre!`)
    } else if (buyChoosen === '4') {
        alert(`Você acabou de comprar ${padText} por ${mousePad} R$ Volte sempre!`)
    }
}











