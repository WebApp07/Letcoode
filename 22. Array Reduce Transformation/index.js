var reduce = function (nums, fn, init) {
  let value = init;

  for (const num of nums) {
    value = fn(value, num);
  }

  return value;
};
