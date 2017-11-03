/*
block 
*/

beforeEach(() => {
	function f1(){
		console.log('test on root @jalan setiap ada test')
	};
	return f1();
});

test('city database has Vienna', () => {
  expect(f3('3fdg')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(f3('3fdg')).toBeTruthy();
});

describe('describe to separate testing setup', () => {
	beforeEach(() => {
		function f1(){
			console.log('start before every test @jalan cuma 2x')
		};
		return f1();
	});

	function f3(x){
		if(x == 'www.primasaja.com'){
			return true
		}else{
			return false
		}
	}

	test('testing 1', () => {
		expect(f3('3fdg')).toBeTruthy();
	});

	test('testing 2', () => {
		expect(f3('www.primasaja.com')).toBeTruthy();
	})
});