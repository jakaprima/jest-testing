// check array berisi/contain data tertentu
const daftarList = [
	'jaka',
	'prima',
	'maulana',
	'www.primasaja.com'
];

test('didalam situ ada nama web saya', () => {
	expect(daftarList).toContain('www.primasaja.com');
});