test('2 tambah 2', () => {
	const value = 2 + 2;
	// with greater than
	expect(value).toBeGreaterThan(3);
	expect(value).toBeGreaterThanOrEqual(3.5);
	// with less than
	expect(value).toBeLessThan(5);
	expect(value).toBeLessThanOrEqual(4.5);
	// with exactly
	expect(value).toBe(4);
	expect(value).toEqual(4);
});