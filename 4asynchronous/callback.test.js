// callback
// pola paling umum asynchronous adalah callback
// test('the data is peanut butter', () => {
//   function callback(data) {
//     expect(data).toBe('peanut butter');
//   }
//   fetchData(callback);
// });

test('test callback', (done) => {
	function function2(data){
		expect(data).toBe('async data complete')
		done();// 3 jika done() tidak pernah terpanggil test akan gagal
	}

	function function1(callback){
		const data = 'async data complete';
		callback(data);// 2 exe callback function
	}

	function1(function2);// 1 exe anonymous function pass callback function as reference
})