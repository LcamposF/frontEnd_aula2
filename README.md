# 🎲 Exercício 2 – React com useState (Mega-Sena e Quina)


📚 Questão A) Crie um componente chamado “HookMegaSena”. Nele, inicialize um useState que armazena um número sorteado, que tem o estado inicial vazio. Crie outro useState com o estado inicial de um array vazio para armazenar os números sorteados. Seu componente terá uma função chamada 'sortearNumero'.

<h1>Solução: </h1> 

Este componente simula o sorteio de números da Mega-Sena. Ele utiliza dois estados:

- `sorteado`: armazena o número atual sorteado
- `numerosSorteados`: um array com todos os números sorteados

A função `sortearNumero` é responsável por:

- Gerar um número aleatório entre 1 e 60
- Adicionar esse número ao array de sorteados, desde que o total não passe de **6 números**
- Exibir um alerta quando o limite for atingido

   🛠️ Código do Componente
  
  ![image](https://github.com/user-attachments/assets/84fec972-20bc-42ec-9b5a-c9cb1a31993c)

  💻 Resultado no navegador:

  ![image](https://github.com/user-attachments/assets/c585d052-fb79-4ca2-815d-f99dd98b3472)

📚 Questão B) Crie um componente chamado “HookQuina”. Nele, inicialize um useState que armazena um número sorteado, que tem o estado inicial vazio. Crie outro useState com o estado inicial de um array vazio para armazenar os números sorteados. Seu componente terá uma função chamada 'sortearNumero'.

<h1>Solução: </h1>

Este componente simula o sorteio da Quina e segue uma lógica semelhante ao da Mega-Sena. Também usa dois estados:

- `sorteado`: número atual sorteado
- `numerosSorteados`: array de números sorteados

A função `sortearNumero`:

- Gera um número aleatório entre 1 e 80
- Adiciona ao array, limitado a **5 números**
- Exibe um alerta ao atingir o limite

  🛠️ Código do Componente

  ![image](https://github.com/user-attachments/assets/4c00ad84-5893-4e51-82fd-c1dbeeae50a1)
![image](https://github.com/user-attachments/assets/12aa9b05-0433-4e7f-ae7a-1d0ed4ed82d2)


 💻 Resultado no navegador:

![image](https://github.com/user-attachments/assets/91210eab-89a0-455e-a545-dfbbec936a95)




 
