// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

// Definindo uma estrutura para representar uma votação
struct Voting {
    string option1; // Opção 1 para votar
    uint votes1;    // Total de votos para a opção 1
    string option2; // Opção 2 para votar
    uint votes2;    // Total de votos para a opção 2
    uint maxDate;   // Data máxima para votação
}

struct Vote {
    uint choice; // Escolha do votante (1 ou 2)
    uint date;   // Data do voto
}

contract Webbb3 {
    address owner;                  // Endereço do proprietário do contrato
    uint public currentVoting = 0;  // Contador para o número atual de votações
    Voting[] public votings;        // Lista de estruturas de votação
    mapping(uint => mapping(address => Vote)) public votes; // Mapeamento de votos para cada votação

    // Construtor do contrato
    constructor() {
        owner = msg.sender; // Define o endereço do proprietário como o remetente da transação que implanta o contrato
    }

    // Função para obter a votação atual
    function getCurrentVoting() public view returns (Voting memory) {
        return votings[currentVoting];
    }

    // Função para adicionar uma nova votação
    function addVoting(string memory option1, string memory option2, uint timeToVote) public {
        require(msg.sender == owner, "Invalid Sender"); // Apenas o proprietário pode adicionar uma votação

        if(currentVoting != 0) currentVoting++; // Incrementa o contador de votação, exceto para a primeira votação

        Voting memory newVoting;
        newVoting.option1 = option1; // Define a opção 1
        newVoting.option2 = option2; // Define a opção 2
        newVoting.maxDate = timeToVote + block.timestamp; // Define a data máxima para a votação
        votings.push(newVoting); // Adiciona a nova votação à lista
    }

    // Função para adicionar um voto
    function addVote(uint choice) public {
        require(choice == 1 || choice == 2, "Invalid Choice"); // Verifica se a escolha é válida (1 ou 2)
        require(getCurrentVoting().maxDate > block.timestamp, "No open Voting"); // Verifica se a votação está aberta
        require(votes[currentVoting][msg.sender].date == 0, "You already voted on this voting"); // Verifica se o endereço do votante já votou nesta votação

        votes[currentVoting][msg.sender].choice = choice; // Registra a escolha do votante
        votes[currentVoting][msg.sender].date = block.timestamp; // Registra a data do voto

        if(choice == 1) 
            votings[currentVoting].votes1++; // Incrementa o contador de votos para a opção 1
        else 
            votings[currentVoting].votes2++; // Incrementa o contador de votos para a opção 2
    }
}
