const balance: number = 100;
const amount: number = 80;
const fee: number = 10;

const totalCost: number = amount + fee;

if (balance >= totalCost) {
    console.log("Transaction approved");
} else {
    console.log("Transaction rejected");
}