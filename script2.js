const fs = require('fs');

function qns1() {
  fs.readFile('./santa.txt', (err, data) => {
    console.time('santa-time');
    const direction = data.toString();
    const directionArr = direction.split('');
    const ans = directionArr.reduce((acc, currentValue) => {
      if (currentValue === '(') {
        return acc += 1;
      } else if (currentValue === ')') {
        return acc -= 1;
      }
    }, 0);
    console.timeEnd('santa-time');
    console.log('floor:', ans);
  })
}

qns1();


function qns2() {
  fs.readFile('./santa.txt', (err, data) => {
    console.time('santa-time');
    const direction = data.toString();
    const directionArr = direction.split('');
    let acc = 0;
    let count = 0;
    const ans = directionArr.some((currentValue) => {
      if (currentValue === '(') {
        acc += 1;
      } else if (currentValue === ')') {
        acc -= 1;
      }
      count++;
      return acc < 0;
    });
    console.timeEnd('santa-time');
    console.log('Basement:', count);
  })
}

qns2();


