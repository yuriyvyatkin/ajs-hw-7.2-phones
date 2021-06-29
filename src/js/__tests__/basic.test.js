import unifyPhoneNumber from '../basic';

test('unifyPhoneNumber function works correctly', () => {
  expect(unifyPhoneNumber('8 (927) 000-00-00')).toBe('+79270000000');
  expect(unifyPhoneNumber('+7 960 000 00 00')).toBe('+79600000000');
  expect(unifyPhoneNumber('+86 000 000 0000')).toBe('+860000000000');
});
