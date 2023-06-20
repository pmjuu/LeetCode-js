/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    for (const char of ransomNote) {
        if (magazine.includes(char)) {
            magazine = magazine.replace(char, "");
        } else {
            return false;
        }
    }

    return true;
};