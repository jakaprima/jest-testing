// kebalikan dari match pake not
test('menambahkan nomor positif itu bukan 0', () => {
	for (let a = 1; a < 10; a++){
		for (let b = 1; b < 20; b++){
			expect(a + b).not.toBe(0);
		}
	}
})