'use strict'

/**
 * @param {string}
 */

function ChecPalindrome(Palindrome) {

    for (var i = 0; i< Palindrome.length/2; i++) {
        if (Palindrome[i] !== Palindrome[Palindrome.length - 1 - i]){
            return false;
        }
    }

    return true;

 }

 var str = "Tenet";
alert('Is' + str + 'a Palindrome ? : ' + ChecPalindrome(str));