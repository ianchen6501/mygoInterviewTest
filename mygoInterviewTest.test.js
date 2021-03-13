const testFunction = require("./mygoInterviewTest")
// Input:
let inputValue = {
  hired: {
    be: {
      to: {
        deserve: 'I'
      }
    }
  }
};

// Output:
let outputValue = {
  I: {
    deserve: {
      to: {
         be: 'hired'
      }
    }
  }
};

test("expect output to be object with opposite structure", () => {
  expect(testFunction(inputValue)).toEqual(outputValue)
})