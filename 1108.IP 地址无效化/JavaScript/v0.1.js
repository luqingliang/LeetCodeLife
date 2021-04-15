/**
 * 利用js特性，一行代码
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    return address.split('').map(val => {return val === '.' ? '[.]' : val}).join('');
};