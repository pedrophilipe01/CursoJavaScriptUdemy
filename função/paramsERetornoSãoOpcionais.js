function area(largura, Altura) {
    const area = largura * Altura
    if (area > 20) {
        console.log(`valor acima do permitido: ${area}m2. `)
    } else {
        return area
    }
}

console.log(area(2,2 ))