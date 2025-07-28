        // Função para limpar a tela
        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        // Função para adicionar um caractere ao display
        function appendToDisplay(value) {
            const display = document.getElementById('display');
            display.value += value;
        }

        // Função para avaliar a expressão e calcular a raiz quadrada com 5 casas decimais
        function evaluateExpression() {
            const display = document.getElementById('display');
            const value = display.value;

            // Verifica se a entrada contém o símbolo de raiz quadrada
            if (value.includes('√')) {
                const number = parseFloat(value.replace('√', ''));
                if (!isNaN(number)) {
                    const result = Math.sqrt(number);

                    // Verifica se o resultado é um número inteiro
                    if (Number.isInteger(result)) {
                        display.value = result.toFixed(0); // Exibe como número inteiro
                    } else {
                        display.value = result.toFixed(5); // Exibe com 5 casas decimais
                    }
                } else {
                    display.value = "Erro";
                }
            } else {
                try {
                    display.value = eval(value); // Avalia a expressão normalmente
                } catch (e) {
                    display.value = "Erro"; // Mensagem de erro
                }
            }
        }

        // Captura o evento de tecla pressionada
        document.addEventListener('keydown', function(event) {
            const display = document.getElementById('display');
            const key = event.key;

            // Ignora teclas que não são números nem operadores
            if ('0123456789'.includes(key)) {
                appendToDisplay(key); // Adiciona números
            } else if ('+-*/.'.includes(key)) {
                appendToDisplay(key); // Adiciona operadores
            } else if (key === 'Backspace') {
                clearDisplay(); // Limpa a tela
            } else if (key === 'Enter' || key === '=') {
                evaluateExpression(); // Avalia a expressão
            } else if (key === 'Escape') {
                clearDisplay(); // Limpa a tela
            }
        });
    
