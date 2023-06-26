/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const stack = [];

    for (const char of s) {
        if (["(", "[", "{"].includes(char)) {
            stack.push(char);
            continue;
        }
        
        if (char === ")" && stack.pop() !== "(") return false;
        if (char === "]" && stack.pop() !== "[") return false;
        if (char === "}" && stack.pop() !== "{") return false;
    }
    
    return !stack.length;
};