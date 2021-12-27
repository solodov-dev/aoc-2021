module.exports = (input) => {
    const arr = new Array(5).fill(0); 
    for (const line of input) {
	for (let i = 0; i < 5; i++) {
	    line[i] === '1' ? arr[i]++ : arr[i]--;
	}
    }
    return arr.map(num => num > 0 ? '1' : '0').join('');
}
