/*
one time setup
kalo setup async pake ini
beforeAll
afterAll
*/

beforeAll(() => {
	function f1(){
		console.log('run once before test')
	};
	return f1();
});

afterAll(() => {
	function f2(){
		console.log('run once after test')
	};
	return f2();
});

	function f3(x){
		if(x == 'www.primasaja.com'){
			return true
		}else{
			return false
		}
	}

	let array = ['gatau', 'www.primasaja.com'];


test('testing 1', () => {
	expect(f3(array[0])).toBeTruthy();
});

test('testing 2', () => {
	expect(f3(array[1])).toBeTruthy();
})
