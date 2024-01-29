// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

// Definindo uma estrutura para representar uma votação
struct Voting {
    string option1; 
    uint votes1;    
    string option2; 
    uint vote2;
    uint maxDate;
}

contract Webbb3 {
    address owner;      
    uint public currentVoting = 0; 
    Voting [] public votings;

    constructor() {
        owner = msg.sender;
    }
    function getCurrentVoting () public view returns (Voting memory){
        return votings[currentVoting];
    }
    function addVoting(string memory option1, string memory option2, uint timeToVote) public {
       require(msg.sender == owner, "invalid Sender");

       if(currentVoting != 0) currentVoting++;

        Voting memory newVoting;
        newVoting.option1 = option1;
        newVoting.option2 = option2;
        newVoting.maxDate = timeToVote + block.timestamp;
        votings.push(newVoting);
    }
}
