let conta = Number(prompt('Digite o valor da conta R$:'))
let nclien = Number(prompt('Quantas pessoas vão pagar a conta?'))
let cdiv = conta / nclien
alert(`Valor por cliente R$:${cdiv.toFixed(2)}`)