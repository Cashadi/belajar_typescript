const balance: number = 500;
const amount: number = 450;
const fee: number = 60;

const totalCost: number = amount + fee;

if (balance >= totalCost) {
    console.log("Transaction approved");
} else {
    console.log("Transaction rejected");
}