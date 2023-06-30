const calcular = document.getElementById('calcular');

function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;;
    const resultado = document.getElementById('resultado');

    if (nome.value !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(2);
        
        resultado.textContent = valorIMC;

        let classificacao = '';
        
                if (valorIMC < 18.5) {
                    classificacao = 'você está abaixo do peso!';
                    } else if (valorIMC < 25) {
                          classificacao = 'você está com o peso ideal!';
                            } else if (valorIMC < 30) {
                                classificacao = 'você está levemente acima do peso !';
                                } else if (valorIMC < 35){
                                    classificacao = 'você está com obesidade grau I!';
                                } else if (valorIMC < 40){
                                  classificacao = 'você está com obesidade grau II, cuidado!';
                                }else { 
                                classificacao = 'com obesidade grau III, cuidado!';
                            }
                            
                            resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
               
    } else {
                     resultado.textContent = 'Preencha todos os campos!!!'; 
    }
}

calcular.addEventListener('click', imc);




