// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

// Definindo uma estrutura para representar uma votação
struct Voting {
    string option1; // Opção 1 para votar
    uint votes1;    // Total de votos para a opção 1
    string option2; // Opção 2 para votar
    // Não há variável para armazenar os votos para a opção 2, o que pode ser um erro de implementação
}

contract Webbb3 {
    address owner;        // Endereço do proprietário do contrato
    uint public currentVoting = 0; // Contador para o número atual de votações

    // Função construtora do contrato
    constructor() {
        owner = msg.sender; // Define o endereço do proprietário como o remetente da transação que implanta o contrato
    }
}
