/* eslint-disable regexp/no-useless-assertions */
/* eslint-disable regexp/no-useless-quantifier */
/* eslint-disable regexp/no-super-linear-backtracking */
/** 手机号码正则 */
export const REGEXP_PHONE
  = /^1((3\d)|(4[0,14-9])|(5[0-3,5-9])|(6[2,567])|(7[0-8])|(8\d)|(9[0-3,5-9]))\d{8}$/

/** 邮箱正则 */
export const REGEXP_EMAIL = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

/** 密码正则(密码为6-18位数字/字符/符号的组合) */
export const REGEXP_PWD
  = /^(?!\d+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^[^\n\r\u2028\u2029\u4E00-\u9FA5]*[\u4E00-\u9FA5].*$)([\s\S]){6,18}$/

/** 6位数字验证码正则 */
export const REGEXP_CODE_SIX = /^\d{6}$/

/** 4位数字验证码正则 */
export const REGEXP_CODE_FOUR = /^\d{4}$/

/** url链接正则 */
export const REGEXP_URL
  = /(((^https?:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-]*)?\??[-+=&;%@.\w]*(?:#\w*)?)?)$/
