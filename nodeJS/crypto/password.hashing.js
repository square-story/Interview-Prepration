import crypto from 'crypto'

function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString("hex")
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString('hex');
    return `${salt}:${hash}`
}


function verifyPassword(password, storedHash) {
    const [salt, orginalHash] = storedHash.split(':')
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString('hex');
    return orginalHash === hash
}

const PASSWORD = "123123"
const hashed = hashPassword(PASSWORD)

console.log('Hashed', hashed)
console.log('verify orginal', verifyPassword("123123", hashed))
console.log("verify fake", verifyPassword("234123", hashed))