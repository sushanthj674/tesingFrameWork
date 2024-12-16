const add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const concatStrings = function (...strings) {
  return ''.concat(...strings);
};

const concatArrays = function (...arrays) {
  return [].concat(...arrays);
};

// frame work 

const isTestFailed = function (test) {
  const [expected, actual] = [test[2], test[3]];
  const isFailed = '' + expected !== '' + actual;

  return isFailed;
};

const execute = function (testCase) {
  const [functionName, parameters, expected] = testCase;
  const actual = functionName(...parameters);

  return Array(functionName, parameters, expected, actual);
};

const test = function (allTests) {
  const excutedTests = allTests.map(execute);

  return excutedTests.filter(isTestFailed);
};

const testAll = function (allTests) {
  const failedTests = test(allTests);
  const isAllTestsPassed = failedTests.length === 0;
  const testsPassed = allTests.length - failedTests.length;

  if (!isAllTestsPassed) {
    console.table(failedTests);
  }

  console.log(isAllTestsPassed ? 'all' : testsPassed, ' tests Passed!!');
};

const allTests = [
  [add, [1, 2], 3],
  [add, [1, 2], 4],
  [concatStrings, ['hello', 'world'], 'helloworld'],
  [concatStrings, ['hello', 'world'], 'helloworl'],
  [concatArrays, [['hello'], ['world']], ['hello', 'world']],
  [concatArrays, [['hello'], ['world']], ['hello', 'worl']],
  [concatArrays, [[1], [2]], [1, 2]],
  [concatArrays, [[1], [2]], [1, 1]]
];

testAll(allTests);
