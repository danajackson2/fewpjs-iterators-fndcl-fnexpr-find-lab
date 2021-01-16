const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let result = array.find(item => item["result"] === "W")
  return result? result.year : result
}