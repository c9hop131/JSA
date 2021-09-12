console.log('first line');
console.log('second line');
console.log('third line');
console.log('---------------------------');

console.log('first line');

setTimeout(function() {
    console.log('second line');
    
}, 200000000000);

setTimeout(function() {
    console.log('1 line');
}, 1000);

console.log('third line');
