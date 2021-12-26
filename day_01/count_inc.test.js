const countInc = require('./count_inc.js');

test('7 increments in a test data', () => {
    expect(countInc([199, 200, 208, 210, 200, 207, 240, 269, 260, 263]))
	.toEqual(7);
})
