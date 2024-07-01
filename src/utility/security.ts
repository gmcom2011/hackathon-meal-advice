import * as crypto from 'crypto'

const encryptKey = Buffer.from(process.env.ENCRYPT_KEY || "", 'hex')
const encryptIv = Buffer.from(process.env.ENCRYPT_IV || "", 'hex')

export default Object.freeze({
    encryption: {
        encrypt: (plaintext: string, algorithm: string) => {
            let instance = crypto.createCipheriv(algorithm, encryptKey, encryptIv)
            let output = instance.update(plaintext, 'utf8', 'hex')
            output += instance.final('hex')
            return output
        },
        decrypt: (plaintext: string, algorithm: string) => {
            let instance = crypto.createCipheriv(algorithm, encryptKey, encryptIv)
            let output = instance.update(plaintext, 'hex', 'utf8')
            output += instance.final('utf8')
            return output
        }
    }
})