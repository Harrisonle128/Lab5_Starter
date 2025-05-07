// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid phone number: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('valid phone number: (555) 555-5555', () => {
  expect(isPhoneNumber('(555) 555-5555')).toBe(true);
});
test('invalid phone number: 123456', () => {
  expect(isPhoneNumber('123456')).toBe(false);
});
test('invalid phone number: abc-def-ghij', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail
test('valid email: example@email.com', () => {
  expect(isEmail('example@email.com')).toBe(true);
});
test('valid email: abc@xyz.com', () => {
  expect(isEmail('abc@xyz.com')).toBe(true);
});
test('invalid email: justtext', () => {
  expect(isEmail('justtext')).toBe(false);
});
test('invalid email: noatsign.com', () => {
  expect(isEmail('noatsign.com')).toBe(false);
});

// isStrongPassword
test('valid password: Abc1234', () => {
  expect(isStrongPassword('Abc1234')).toBe(true);
});
test('valid password: pass_word1', () => {
  expect(isStrongPassword('pass_word1')).toBe(true);
});
test('invalid password: 123', () => {
  expect(isStrongPassword('123')).toBe(false);
});
test('invalid password: @@@@', () => {
  expect(isStrongPassword('@@@@')).toBe(false);
});

// isDate
test('valid date: 01/01/2020', () => {
  expect(isDate('01/01/2020')).toBe(true);
});
test('valid date: 12/31/1999', () => {
  expect(isDate('12/31/1999')).toBe(true);
});
test('invalid date: 9999/12/31', () => {
  expect(isDate('9999/12/31')).toBe(false); 
});
test('invalid date: 2020-01-01', () => {
  expect(isDate('2020-01-01')).toBe(false);
});

// isHexColor
test('valid hex: #FFFFFF', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});
test('valid hex: #000', () => {
  expect(isHexColor('#000')).toBe(true);
});
test('invalid hex: 12345', () => {
  expect(isHexColor('12345')).toBe(false);
});
test('invalid hex: #ZZZZZZ', () => {
  expect(isHexColor('#ZZZZZZ')).toBe(false);
});
