// kebenaran/truthiness
// kadang butuh membedakan/distinguish antara undefined, null, & false
// tapi kadang tidak ingin membedakannya
// jest mengandung helper untuk menjelaskan/explicitnya
test('null', () => {
	const n = null;
	expect(n).toBeNull(); // cocok hanya jika null
	expect(n).toBeDefined(); // kebalikan dari toBeUndefined
	expect(n).not.toBeUndefined(); // kebalikan dari toBeDefined
	expect(n).not.toBeTruthy(); // cocok dengan apapun yang jika pernyataan dianggap benar
	expect(n).toBeFalsy(); // cocok dengan apapun yang jika pernyataan dianggap salah
});


test('nol', () => {
	const x = 0;
	expect(x).not.toBeNull();
	expect(x).toBeDefined();
	expect(x).not.toBeUndefined();
	expect(x).not.toBeTruthy();
	expect(x).toBeFalsy();
});

