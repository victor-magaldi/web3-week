import Web3 from "web3";
import ABI from "./ABI.json";

const CONTRACT_ADDRESS = "0xa0D73eEb96739c72A95704cD136A12bb1ADD4340";

export async function login() {
  if (!window.ethereum) throw new Error("No MetaMask Found");

  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.requestAccounts();

  if (!accounts || !accounts.length)
    throw new Error("Wallet not Found/allowed");

  localStorage.setItem("wallet", accounts[0]);
  return accounts[0];
}

function getContract() {
  const wallet = localStorage.getItem("wallet");
  if (!wallet) throw new Error("Unauthorized");

  const web3 = new Web3(window.ethereum);
  return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, {
    from: wallet,
  });
}
export async function getCurrentVoting() {
  const contract = getContract();
  return contract.methods.getCurrentVoting().call();
}

export async function addvote(choice: number) {
  const contract: any = getContract();
  return contract.addVote(choice).send();
}
