/**
 * Are rotations
 *
 * Time: θ(n), Aux space: θ(n)
 */
function areRotations(str1, str2) {
  if (str1.length !== str2.length) return false;

  return (str1 + str1).indexOf(str2) !== -1 ? true : false;
}
console.log(areRotations("ABCDE", "CDEAB"));
console.log(areRotations("ABCDE", "EDCBA"));
