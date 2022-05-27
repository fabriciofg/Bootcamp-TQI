let butonAdicionar = document.getElementById('adicionar')
let inpultItem = document.getElementById('item')
let listaItens = document.getElementById('listaItens')

function adicionar(){     
    console.log (inpultItem.value)
    listaItens.innerHTML += `<li type="none"><input type="checkbox" name="checkboxItem" id="${inpultItem.value}">${inpultItem.value} </li>`
    listaItens.addEventListener

}