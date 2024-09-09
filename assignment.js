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
    else{
        return cashin;
    }
}
const output = calculateMoney(100);
console.log(output);

Problem-02