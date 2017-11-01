// check string dengan regular expression
test('tidak ada kata saya dalam tim', () => {
	expect('team').not.toMatch(/I/);
});

test('ada kata jaka', () => {
	expect('jaka').toMatch(/aka/);
})