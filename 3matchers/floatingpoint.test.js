test('menambahkan floating point number', () => {
	const value = 0.1 + 0.2;
	// expect(value).toBe(0.3); tidak akan bekerja karena rounding error
	expect(value).toBeCloseTo(0.3);
})