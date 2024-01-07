import { readFileSync } from 'fs';

export default class Utils {
  constructor(inputPath, expResultPath) {
    this.inputPath = inputPath
    this.expResultPath = expResultPath
  }

  validateSolution(solution) {
    const input = readFileSync(this.inputPath, 'utf8').split('\n')
    const expectedResults = readFileSync(this.expResultPath, 'utf8').split('\n')

    for(let i = 0; i < input.length; i++) {
      const res = solution(input[i])
      console.log(`Input: ${input[i]}`)
      console.log(`Result: ${res}`)
      console.log(`Expected: ${expectedResults[i]}\n`)
    }
  }
}