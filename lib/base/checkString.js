// Kiểm tra xem chuỗi có rỗng không
function isEmptyString(str) {
  return str.trim() === "";
}

// Kiểm tra xem chuỗi có chứa ký tự chữ cái không
function hasAlphabeticCharacters(str) {
  return /[a-zA-Z]/.test(str);
}

// Kiểm tra xem chuỗi có chỉ chứa ký tự số không
function isNumericString(str) {
  return /^[0-9]+$/.test(str);
}

// Kiểm tra xem chuỗi có chỉ chứa ký tự chữ cái không
function isAlphabeticString(str) {
  return /^[a-zA-Z]+$/.test(str);
}

// Kiểm tra xem chuỗi có chứa ký tự đặc biệt không
function hasSpecialCharacters(str) {
  return /[!@#$%^&*(),.?":{}|<>]/.test(str);
}

// Kiểm tra xem chuỗi có đủ dài không (ít nhất một số ký tự)
function isMinimumLength(str, minLength) {
  return str.length >= minLength;
}

// Kiểm tra xem chuỗi có đủ dài không (tối thiểu minLength và tối đa maxLength ký tự)
function isWithinLengthRange(str, minLength, maxLength) {
  const length = str.length;
  return length >= minLength && length <= maxLength;
}

module.exports = {
  isEmptyString,
  hasAlphabeticCharacters,
  isNumericString,
  isAlphabeticString,
  hasSpecialCharacters,
  isMinimumLength,
  isWithinLengthRange,
};
