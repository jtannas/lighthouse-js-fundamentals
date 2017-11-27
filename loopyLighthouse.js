function loopyLogger(num) {
  var buffer = [];
  if (num % 3 === 0) {
    buffer.push('Loopy');
  }
  if (num % 4 === 0) {
    buffer.push('Lighthouse');
  }

  if (buffer.length === 0) {
    console.log(num);
  } else {
    console.log(buffer.join(''));
  }
}

for (var i = 100; i <= 200; i++) {
  loopyLogger(i);
}
