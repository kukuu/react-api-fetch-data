//This is the GREEN phase of the RED, GREEN clean TDD procedure


//Using the spread operator
const adder = (...nums) => {
    return nums.reduce((total, num) => total + num, 0);
}

module.exports = adder;