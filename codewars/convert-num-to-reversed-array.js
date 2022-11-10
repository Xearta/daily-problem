// Title: Convert number to reversed array of digits

/** Description:
DESCRIPTION:
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
 */

// My Solution
function digitize(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((num) => Number(num));
}
