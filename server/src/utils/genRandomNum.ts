export const generateRandomString = (length: number) => {
    let alphabets = "abcdefghijklmnopqrstuvwxyz0123456789";
    const len = alphabets.length;
    let random = "";
    for (let i = 0; i < length; i++) {
        let idx = Math.floor(Math.random() * len)
        random += alphabets.charAt(idx);
    }
    return random;
}