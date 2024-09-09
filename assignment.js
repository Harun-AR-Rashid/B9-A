// Problem -01
function calculateMoney(ticketSale) {
    const totalSale = ticketSale * 120;
    const daroan = 500;
    const lunch = 50;
    const dailycost = daroan + (lunch * 8);
    const cashin = totalSale - dailycost;
    if (ticketSale <= 0) {
        const subtotal = 'invalid number';
        return subtotal;
    }
    else {
        return cashin;
    }
}
const output = calculateMoney(100);
console.log(output);

// Problem-02
function checkName(input) {
    if (typeof input !== 'string') {
        const ride = 'Invalid'
        return ride;
    }
    const name = input.toLowerCase();
    let bangoName = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    for (const char of bangoName) {
        if (name.endsWith(char)) {
            const goodName = 'Bad Name';
            return goodName;
        }
        else {
            const badName = 'Good Name';
            return badName;
        }
    }

}
const prob2Output = checkName(true);
console.log(prob2Output);

// another solution
