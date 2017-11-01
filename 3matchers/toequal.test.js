// check value object dengan toEqual
test('object assigment adalah', () => {
	const data = {satu: 1};
	data['dua'] = 2;
	expect(data).toEqual({satu: 1, dua: 2});
})
