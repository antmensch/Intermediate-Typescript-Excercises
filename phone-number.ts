export function clean(phone: string): string {
  let result = phone.replaceAll(/[)(\s\+-\.\/]/g, "");
  if (result.length < 10) throw new Error("Incorrect number of digits");
  if (result.length > 11) throw new Error("More than 11 digits");
  if (result.length === 11) {
    if (result[0] !== "1") throw new Error("11 digits must start with 1");
    result = result.slice(1);
  }

  const hasLettersRE = /[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
  const hasPunctuationsRE = /[,\/><!@#$%^&*()]/;

  if (hasLettersRE.test(result)) throw new Error("Letters not permitted");
  if (hasPunctuationsRE.test(result))
    throw new Error("Punctuations not permitted");
  if (result[0] === "0") throw new Error("Area code cannot start with zero");
  if (result[0] === "1") throw new Error("Area code cannot start with one");
  if (result[3] === "0")
    throw new Error("Exchange code cannot start with zero");
  if (result[3] === "1") throw new Error("Exchange code cannot start with one");

  return result;
}
