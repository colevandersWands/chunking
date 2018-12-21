// need better examples than this, not much to show here
// but the steps are in place

console.log('--- og code ---');
{
  let a = 3;
  const b = true;

  if (typeof a || b <= a) {
    a += b % a
  }

  console.log(a, b)
}

console.log('--- fully expanded ---');
{
  let a = 3;
  const b = true;

  // expand the code to one operation per line
  let condition; { // = typeof a || b <= a
    const step_1 = typeof a;
    const step_2 = b <= a;
    const step_3 = step_1 || step_2;
    condition = step_3;
  }
  if (condition) {
    let new_a; { // a += b % a
      const step_1 = b % a
      const step_2 = a + step_1
      new_a = step_2
    };
    a = new_a
  }

  console.log(a, b)
}

console.log('--- chunked ---');
{
  let a = 3;
  const b = true;

  // chunked code
  //  strategically meaningful code extracted to a block, if appropriate
  //  descriptive variables assigned at each step
  //  the code should read something like a text
  // ie.
  let condition; { // = typeof a || b <= a
    const step_1 = typeof a;
    const step_2 = b <= a;
    const step_3 = step_1 || step_2;
    condition = step_3;
  }
  if (condition) {
    let new_a; { // a += b % a
      const step_1 = b % a
      const step_2 = a + step_1
      new_a = step_2
    };
    a = new_a
  }

  console.log(a, b)
}  
  // not yet fully refactoring into functions



