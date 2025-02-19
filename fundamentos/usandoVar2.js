var numero = 1
{
    var numero = 2 //pode declarar duas vezes, mas os dois estao no mesmo esocopo, logo não vai mudar, entao se usa let
    console.log('dentro =', numero)
}
console.log('fora =', numero)