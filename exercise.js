class Exercise {
  aboveBelow(arr, number) {
    let above = 0,
      below = 0;
    arr.forEach((val) => {
      if (val < number) {
        below++;
      } else if (val > number) {
        above++;
      }
    });
    return { above, below };
  }

  stringRotation(str, number) {
    const strArr = str.split("");
    for (let i = 0; i < number; i++) {
      strArr.unshift(strArr.pop());
    }
    return strArr.join("");
  }
}
