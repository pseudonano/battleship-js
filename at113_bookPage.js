var balance = 20500;
var cameraOn = true;

function steal(balance, amount){
    cameraOn = false;
    if (amount < balance){
        balance -= amount;
    }
    // console.log(balance)
    return amount;
    cameraOn = true;
}

var amount = steal(balance,1250);
balance -= amount
console.log(amount);
console.log(balance);