module.exports = function check(str, bracketsConfig) {
  // your solution
  var stack = [];
  for (var str_i = 0; str_i < str.length; str_i++) {
    for (var bc_j = 0; bc_j < bracketsConfig.length; bc_j++) {
      if (bracketsConfig[bc_j][0] === bracketsConfig[bc_j][1]) {
        if (bracketsConfig[bc_j][0] === str [str_i]) {
          if (stack.length === 0 || stack[stack.length - 1] !== bc_j) {
            stack.push(bc_j);
            break;
          } else {
            stack.length = stack.length - 1; //stack.pop();
            break;
          }
        }
      } else {
        if (bracketsConfig[bc_j][0] === str[str_i]) {
          stack.push(bc_j);
          break;
        }
        if (bracketsConfig[bc_j][1] === str[str_i]) {
          if (stack[stack.length - 1] === bc_j) {
            stack.length = stack.length - 1; //stack.pop();
            break;
          }
          else {
            stack.push(bc_j);
            break;
          }
        }
      }
    }
  }

  return !stack.length;
}
