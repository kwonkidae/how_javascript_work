function number_de(number) {
  let sign = 1;
  let coefficient = number;
  let exponent = 0;

  if (coefficient < 0) {
    coefficient = -coefficient;
    sign = -1;
  }

  if (Number.isFinite(number) && number != 0) {
    exponent = -1128;
    let reduction = coefficient;
    while (reduction !== 0) {
      exponent += 1;
      reduction /= 2;
    }
    console.log(exponent, reduction);
    reduction = exponent;
    while (reduction > 0) {
      coefficient /= 2;
      reduction -= 1;
    }

    while (reduction < 0) {
      coefficient *= 2;
      reduction += 1;
    }
  }
  return {
    sign,
    coefficient,
    exponent,
    number,
  };
}

(() => {
  console.log(1 / 0 === 1 / -0);
  console.log(Object.is(0, -0));
})();

(() => {
  const good_example = Number('432');
  const bad_example = new Number('432');
  console.log(typeof good_example);
  console.log(typeof bad_example);

  console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);
  console.log(Number.MIN_VALUE < 0);

  console.log(number_de(100 / 3));
})();
