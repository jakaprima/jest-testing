// .resolves mencocokan expect statement
// jest akan tunggu promise itu sampai resolve


test('check promise if promise to resolve or reject', () => {
	let p1 = Promise.resolve(4);
	let p2 = 1003;
	let p3 = new Promise((resolve, reject) => {
		setTimeout(resolve, 100, 'test')
	})

	
	Promise.all([p1, p2, p3]).then((values) => {
		expect.assertions(1);
		return expect(values).resolves.toBe([4, 1003, 'test'])
	});
});

