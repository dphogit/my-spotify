/**
 * Capitalizes a single word - does not take spaces into account.
 * To capitalize a phrase, use the {@link capitalizePhrase} function
 * @param word a word to capitalize
 *
 * @example
 * capitalizeWord('hello'); // 'Hello'
 * capitalizeWord('hello world'); // 'Hello world'
 */
export const capitalizeWord = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

/**
 * Capitalizes a phrase - takes spaces into account.
 * To capitalize a phrase, use the {@link capitalizePhrase} function
 * @param phrase a phrase to capitalize
 *
 * @example
 * capitalizePhrase('hello'); // 'Hello'
 * capitalizePhrase('hello world'); // 'Hello World'
 */
export const capitalizePhrase = (phrase: string) => {
  return phrase
    .split(' ')
    .map((word) => capitalizeWord(word))
    .join(' ');
};
