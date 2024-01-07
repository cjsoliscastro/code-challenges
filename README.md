# code-challenges
Code challenges I have done for practice

### Project structure
```
code-challenges/
  ├── utils.js
  ├── package.json
  ├── README.md
  └── problems/
      ├── problem-name/
      │   ├── solution.js
      │   ├── input.txt
      │   ├── expected-result.txt
      │   └── README.md
      └── ...
 
```
### Input file strucutre
Comma separated file where the first element is the input and the second element is the expected result. Each line will be a test case.

### Usage
```
$ npm run problem --name=<problem-file-name>
```