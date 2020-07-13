//This is the GREEN phase of the RED, GREEN clean TDD procedure


//1. More features being added
//Regression setting in
const adder = (a, b, c) => {
    return a + (b || 0) + (c || 0); 
}

module.exports = adder;