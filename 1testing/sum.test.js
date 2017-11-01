const sum = require('./sum');

test('menambah 1 + 2 harus sama dengan 3', () => {
	expect(sum(1,2)).toBe(3);
});