const base64Encode = (str: string): string => Buffer.from(str, 'utf8').toString('base64')
const base64Decode = (str: string): string => Buffer.from(str, 'base64').toString('utf8')
