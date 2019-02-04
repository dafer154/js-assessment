stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   *
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   *
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    let i = 0;
    while (i < str.length) {
      const currentChart = str.charAt(i);
      const maxLengString = currentChart.repeat(amount);
      str = str.replace(new RegExp(`[${currentChart}]{${amount + 1},}`, 'g'), maxLengString);
      i += 1;
    }

    return str;
  },

  /**
   * Reverses a string of text
   *
   * Example: reverseString('abc') should be 'cba'
   *
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i -= 1) {
      result += str[i];
    }
    return result;
  },
};
