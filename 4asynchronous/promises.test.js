// promises : object represent resolve atau reject operasi async & nilai yang dihasilkan

test('test promises done', () => {
	let fetchData = new Promise((resolve, reject) => { //executor func
		setTimeout(function(){
			resolve('berhasil'); // resolve untuk handle jika asynch berhasil
		}, 250);
	})

	expect.assertions(1);

	return fetchData.then((data) => { // harus pake return
		expect(data).toBe('berhasil');
	});

	return fetchData.catch((e) => {
		expect(e).toMatch('error')
	});
});

test('test promises reject', () => {
	let fetchData = new Promise((resolve, reject) => {
		setTimeout(() => {
			reject('erroraja');
		}, 250)
	});

	return fetchData.catch((e) => {
		expect(e).toMatch('error');
	})
});
