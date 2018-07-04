/**
 * 
 * 
 * 
 * 
 * 
 */

// Exemplo do while | do ... while

function executarNumeroDesc(numero: number) {
    do {
        console.log(numero);
        numero--;
    } while (numero > 0);
}

executarNumeroDesc(99);