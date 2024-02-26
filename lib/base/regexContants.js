export const LIST_REGEX_INFO = {
  EMAIL: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
  USER_NAME: /^[a-zA-Z0-9_-]{3,16}$/,
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  NUMBER_PHONE: /^(0[1-9])+([0-9]{8,9})\b$/,
};

export const LIST_REGEX_MATCH = {
  IS_INTERGER: /^[1-9]\d*$/,
  IS_VOWEL: /^-?\d+$/,
  IS_DECIMAL: /^-?\d+(\.\d+)?$/,
  IS_FLOAT: /^-?\d+(\.\d+)?([eE][-+]?\d+)?$/,
};

export const LIST_REGEX_URL_FILE = {
  IS_URL_IMG: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.(jpg|jpeg|png|gif)$/,
  IS_URL_MP3: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.(mp3|wav|ogg)$/,
  IS_URL_VIDEO: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.(mp4|avi|mkv)$/,
};

export const LIST_REGEX_URI_FILE = {
  IS_URI_IMG:
    /^(file:\/\/\/[^\s/$.?#].[^\s]*\.(jpg|jpeg|png|gif))|(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.(jpg|jpeg|png|gif)$/,
  IS_URI_MP3:
    /^(file:\/\/\/[^\s/$.?#].[^\s]*\.(mp3|wav|ogg))|(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.(mp3|wav|ogg)$/,
  IS_URI_VIDEO:
    /^(file:\/\/\/[^\s/$.?#].[^\s]*\.(mp4|avi|mkv))|(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.(mp4|avi|mkv)$/,
  IS_URI_DOCUMEN:
    /^(file:\/\/\/[^\s/$.?#].[^\s]*\.(pdf|docx|txt|csv|xls))|(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.(pdf|docx|txt|csv|xls)$/,
};

export const LIST_REGEX_LOCAL_VIETNAMES = {
  IS_SOCIAL_INSURANCE: /^\d{8}$/,
  IS_TAX_CODE: /^\d{10}$/,
  IS_IDENTITY: /^\d{9}|\d{12}$/,
  IS_NUMBER_PHONE: /^(03|05|07|08|09)[0-9]{8}$/,
  IS_LANDLINE:
    /^(02[0246]|03[2-9]|04[2-9]|05[6-8]|06[2-9]|07[6-9]|08[1-9]|09[0-35-9])[0-9]{7}$/,
};