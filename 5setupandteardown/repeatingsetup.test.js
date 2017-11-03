/*
setup yang akan terjadi sebelum tests berjalan = beforeEach()
setup yang akan dijalankan setelah test berjalan = afterEach()
*/

beforeEach(() => {
	function f1(){
		console.log('start before every test')
	};
	return f1();
});

afterEach(() => {
	function f2(){
		console.log('start after every test')
	};
	return f2();
});


let array = ['gatau', 'www.primasaja.com'];
function f3(x){
	if(x == 'www.primasaja.com'){
		return true
	}else{
		return false
	}
}

test('testing 1', () => {
	expect(f3(array[0])).toBeTruthy();
});

test('testing 2', () => {
	expect(f3(array[1])).toBeTruthy();
})


