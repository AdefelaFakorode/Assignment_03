function reverseString(word){
    return word.split("").reverse().join("");
}

console.log(reverseString("Adefelas"));

function isPalindrome(word){
    return word === reverseString(word);
}