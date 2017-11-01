// promises
test('test promises', () => {
	let fetchData = new Promise((resolve, reject) => {
		setTimeout(function(){
			resolve('berhasil'); // resolve untuk handle jika asynch berhasil
		}, 250);
	})

	expect.assertions(1);

	return fetchData.then((data) => {
		expect(data).toBe('berhasil');
	});
});