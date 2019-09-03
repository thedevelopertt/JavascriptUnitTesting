const{generateNameAndAge} = require("./util");

test('Tests the Function Name and Age', () => {
    var generatedNameAndAge = generateNameAndAge("Tom",31);

    expect(generatedNameAndAge).toBe("My name is Tom and my age is 31");
})