const ALPHABET: string[] = [...'abcdefghijklmnopqrstuvwxyz'];
const ALPHABET_RE = /[abcdefghijklmnopqrstuvwxyz]/;
const NUMBERS_RE = /[1234567890]/
const ENCODING_MAP: Map<string, string> = new Map();

  ALPHABET.forEach((elem, index) => {
    ENCODING_MAP.set(elem, ALPHABET[ALPHABET.length - 1 - index]);
  });

export function encode(plainText: string): string {
  let result: string = '';
  const normalizedInput = plainText.toLowerCase();
  for (let i = 0; i < normalizedInput.length; i++) {
    if (ALPHABET_RE.test(normalizedInput.charAt(i))) result += ENCODING_MAP.get(normalizedInput.charAt(i));
    if (NUMBERS_RE.test(normalizedInput.charAt(i))) result += normalizedInput.charAt(i);
  }

  if (result.length < 6) return result;

  const splitInFiveChars = result.match(/.{1,5}/g);

  if (typeof splitInFiveChars?.join(' ') === 'string') return splitInFiveChars.join(' ');
  else throw new Error('error');

}

export function decode(cipherText: string): string {
  const normalizedInput = cipherText.split(' ').join().toLowerCase();
  let result = '';
  for (let i = 0; i < normalizedInput.length; i++) {
    if (ALPHABET_RE.test(normalizedInput.charAt(i))) result += ENCODING_MAP.get(normalizedInput.charAt(i));
    if (NUMBERS_RE.test(normalizedInput.charAt(i))) result += normalizedInput.charAt(i);
  }

  return result;
}
