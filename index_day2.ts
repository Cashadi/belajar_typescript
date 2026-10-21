
const name: string = "Cashadi";
const walletAddress: string = "0x123abc";
const isConnected: boolean = true;

let balance: number = 100;

console.log("=== Profil Web3 ===");
console.log(`Nama: ${name}`);
console.log(`Wallet: ${walletAddress}`);
console.log(`Terhubung: ${isConnected}`);
console.log(`Saldo awal: ${balance}`);

balance = 250;

console.log(`Saldo setelah update: ${balance}`);