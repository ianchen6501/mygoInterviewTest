//Input:
// let inputValue = {
//   hired: {
//     be: {
//       to: {
//         deserve: 'I'
//       }
//     }
//   }
// };

// Output:
// let outputValue = {
//   I: {
//     deserve: {
//       to: {
//          be: 'hired'
//       }
//     }
//   }
// };

//逐層檢查是否為 obj，並取出 key / value
function test(inputValue) {
  let keys = []
  let input = inputValue
  let key = null
  let isObject = inputValue instanceof Object
  while(isObject) {
    key = Object.keys(input)[0]
    keys.push(key)
    input = input[key]
    isObject = input instanceof Object
  }
  keys.push(input)
  
  //重組 obj
  let newObj = {}
  let toContinue = true
  newObj[keys[1]] = keys[0]
  let index = 2
  while(toContinue) {
    let obj = {}
    obj[keys[index]] = newObj
    newObj = Object.assign(obj)
    index ++
    toContinue = index !== keys.length
  }
  return newObj
}

module.exports = test
