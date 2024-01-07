import Utils from "../../utils.js";

const BASE_PATH = "problems/validate-json";
const utils = new Utils(
  `${BASE_PATH}/input.txt`,
  `${BASE_PATH}/expected-result.txt`
);

function validateJson(input) {
  let stack = [];
  const closingBracketMap = {
    "}": "{",
    "]": "[",
  };

  function validateKeyObj(keyObj) {
    const [key, obj] = keyObj.split(':')
    return null;
  }

  const commaList = input.split(",");
  for (let obj of commaList) {
    for (let c of obj) {
      if (c === "{" || c === "[") {
        stack.push(c);
      } else if (c === "}" || c === "]") {
        const stackPeek = stack[stack.length - 1];
        if (closingBracketMap[c] !== stackPeek) return false;
        stack.pop();
      }
    }
  }

  return true;
}

utils.validateSolution(validateJson);
