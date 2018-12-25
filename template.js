// can you find an example that won't update a?
//  find one, or prove why you can't

console.log('--- og code ---');
  function code(a, b){

    if (typeof a || b <= a) {
      a += b % a
    }

    return a;
  }

console.log('--- test cases ---')

  const test_cases = [
      {name: '3, 5', args: [3,5], expected: 5},
      {name: '9, 5', args: [9,5], expected: 14},
      {name: 'true, false', args: [true,false], expected: 1},
      {name: '"3", "5"', args: ['3','5'], expected: '32'},
      // {name: '0, 0', args: [0,0], expected: NaN},
    ]
  run_tests(code, test_cases)

console.log('--- expand as needed ---');
  // expand as much as needed to identify chunks
  // this may not be at all!
  function pand(a, b){ 

    let condition; { // = typeof a || b <= a
      const step_1 = typeof a;
      const step_2 = b <= a;
      const step_3 = step_1 || step_2;
      const step_4 = Boolean(step_3)
      condition = step_4;
    }
    if (condition) {
      let new_a; { // a += b % a
        const step_1 = b % a
        const step_2 = a + step_1
        new_a = step_2
      };
      a = new_a
    }

    return a;
  }
  run_tests(pand, test_cases)

console.log('--- chunk ---')
  function chunked(a, b){
    let update_a; {
      const step_1 = typeof a;
      const step_2 = b <= a;
      const step_3 = step_1 || step_2;
      const step_4 = Boolean(step_3)
      condition = step_4;
    update_a = condition };

    if (update_a) {
      let set_new_a; {
        a += b % a
      set_new_a = a}    
    }

    return a;
  } 
  run_tests(chunked, test_cases)

console.log('--- chunk-logged ---')
  function logged(a, b){                     const log = [];

    let update_a; {
      const step_1 = typeof a;
      const step_2 = b <= a;
      const step_3 = step_1 || step_2;
      const step_4 = Boolean(step_3)
      condition = step_4;
    update_a = condition };                  log.push({update_a})

    if (update_a) {
      let new_a; {
        a += b % a
      new_a = a}                             log.push({new_a})
    }

    return {a, log};
  } 
  log_reports(logged, test_cases)


// testing utils
function run_tests(_target, _cases) {
  for (let t_case of _cases) {
    let expected = t_case.expected;
    let actual = _target(... t_case.args, false);

    let pass;
    if (typeof expected === 'object') {
      const _actual = JSON.stringify(actual);
      const _expected = JSON.stringify(expected);
      pass = _actual === _expected;
    } else {
      pass = actual === expected;
    };

    if (!pass) {
      console.log(`${t_case.name}: \n` + 
          `   actual: {${typeof actual}, ${actual}} \n` +
          `   expected: {${typeof expected}, ${expected}}`);
    };
  };
};

function log_reports(_target, _cases) {
  const report = {}
  for (let t_case of _cases) {
     report[t_case.name] = _target(...t_case.args) 
  }
  console.log(report)
}
