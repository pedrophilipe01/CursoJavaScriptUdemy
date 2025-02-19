function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTelevisão = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
   const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTelevisão, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))


