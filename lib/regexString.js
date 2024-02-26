import {
  LIST_REGEX_INFO,
  LIST_REGEX_LOCAL_VIETNAMES,
  LIST_REGEX_MATCH,
  LIST_REGEX_URI_FILE,
  LIST_REGEX_URL_FILE,
} from "./base/regexContants";

// Kiểm tra xem chuỗi có phù hợp với các mẫu regex cho email không
export const matchEmail = (value) => {
  return matchRegex(value, LIST_REGEX_INFO.EMAIL);
};

// Kiểm tra xem chuỗi có phù hợp với các mẫu regex cho tên người dùng không
export const matchUserName = (value) => {
  return matchRegex(value, LIST_REGEX_INFO.USER_NAME);
};

// Kiểm tra xem chuỗi có phù hợp với các mẫu regex cho mật khẩu không
export const matchPassword = (value) => {
  return matchRegex(value, LIST_REGEX_INFO.PASSWORD);
};

// Kiểm tra xem chuỗi có phù hợp với các mẫu regex cho số điện thoại không
export const matchNumberPhone = (value) => {
  return matchRegex(value, LIST_REGEX_INFO.NUMBER_PHONE);
};

// Kiểm tra xem chuỗi có phù hợp với các mẫu regex cho số nguyên không
export const matchInteger = (value) => {
  return matchRegex(value, LIST_REGEX_MATCH.IS_INTERGER);
};

// Kiểm tra xem chuỗi có phù hợp với các mẫu regex cho số nguyên âm không
export const matchNegativeInteger = (value) => {
  return matchRegex(value, LIST_REGEX_MATCH.IS_VOWEL);
};

// Kiểm tra xem chuỗi có phù hợp với các mẫu regex cho số thập phân không
export const matchDecimal = (value) => {
  return matchRegex(value, LIST_REGEX_MATCH.IS_DECIMAL);
};

// Kiểm tra xem chuỗi có phù hợp với các mẫu regex cho số thực không
export const matchFloat = (value) => {
  return matchRegex(value, LIST_REGEX_MATCH.IS_FLOAT);
};

// Kiểm tra xem chuỗi có phù hợp với các mẫu regex cho URL hình ảnh không
export const matchImageUrl = (value) => {
  return matchRegex(value, LIST_REGEX_URL_FILE.IS_URL_IMG);
};

// Kiểm tra xem chuỗi có phù hợp với các mẫu regex cho URL âm thanh không
export const matchMp3Url = (value) => {
  return matchRegex(value, LIST_REGEX_URL_FILE.IS_URL_MP3);
};

// Kiểm tra xem chuỗi có phù hợp với các mẫu regex cho URL video không
export const matchVideoUrl = (value) => {
  return matchRegex(value, LIST_REGEX_URL_FILE.IS_URL_VIDEO);
};

// Kiểm tra xem chuỗi có phù hợp với các mẫu regex cho URI hình ảnh không
export const matchImageUri = (value) => {
  return matchRegex(value, LIST_REGEX_URI_FILE.IS_URI_IMG);
};

// Kiểm tra xem chuỗi có phù hợp với các mẫu regex cho URI âm thanh không
export const matchMp3Uri = (value) => {
  return matchRegex(value, LIST_REGEX_URI_FILE.IS_URI_MP3);
};

// Kiểm tra xem chuỗi có phù hợp với các mẫu regex cho URI video không
export const matchVideoUri = (value) => {
  return matchRegex(value, LIST_REGEX_URI_FILE.IS_URI_VIDEO);
};

// Kiểm tra xem chuỗi có phù hợp với các mẫu regex cho URI tài liệu không
export const matchDocumentUri = (value) => {
  return matchRegex(value, LIST_REGEX_URI_FILE.IS_URI_DOCUMEN);
};

// Kiểm tra xem chuỗi có phù hợp với các mẫu regex cho mã bảo hiểm xã hội không
export const matchSocialInsurance = (value) => {
  return matchRegex(value, LIST_REGEX_LOCAL_VIETNAMES.IS_SOCIAL_INSURANCE);
};

// Kiểm tra xem chuỗi có phù hợp với các mẫu regex cho mã số thuế không
export const matchTaxCode = (value) => {
  return matchRegex(value, LIST_REGEX_LOCAL_VIETNAMES.IS_TAX_CODE);
};

// Kiểm tra xem chuỗi có phù hợp với các mẫu regex cho chứng minh nhân dân hoặc căn cước công dân không
export const matchIdentity = (value) => {
  return matchRegex(value, LIST_REGEX_LOCAL_VIETNAMES.IS_IDENTITY);
};

// Kiểm tra xem chuỗi có phù hợp với các mẫu regex cho số điện thoại
export const matchIsLandline = (value) => {
  return matchRegex(value, LIST_REGEX_LOCAL_VIETNAMES.IS_LANDLINE);
};

// Kiểm tra xem chuỗi có phù hợp với các mẫu regex cho số điện thoại
export const matchIsNumberPhone = (value) => {
    return matchRegex(value, LIST_REGEX_LOCAL_VIETNAMES.IS_NUMBER_PHONE);
  };
  
