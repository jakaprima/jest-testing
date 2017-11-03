// test('testing jest', () => {
// 	try {
// 		function1() // try call function
// 	} catch (e){
// 		if(e instanceof EvalError){
// 			expect(e.message).toMatch(/n/);
// 		} else if(e instanceof RangeError){
// 			expect(e.message).toMatch(/n/);
// 		}
// 	}

// })

test('the fetch fails with an error', () => {
	let test = Promise.reject(new Error('fail')).then(function(error) {
	  // not called
	}, function(error) {
	  return error
	});

	expect(test).rejects.toMatch(/fail/);
});
