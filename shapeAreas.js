function hasNegative(args) {
  for (let argument of args) {
    if (argument < 0) {
      return true;
    }
  }
  return false;
}

function calculateRectangleArea(length, width) {
  if (hasNegative(arguments)) {
    return undefined;
  }
  return length * width;
}

function calculateTriangleArea(base, height) {
  if (hasNegative(arguments)) {
    return undefined;
  }
  return base * height / 2;
}

function calculateCircleArea(radius) {
  if (hasNegative(arguments)) {
    return undefined;
  }
  return Math.PI * radius * radius;
}