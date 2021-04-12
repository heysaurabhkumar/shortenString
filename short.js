function encoder(num) {
    const possibilities = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    num = parseInt(num, 36);
    let res = '';
    while (num > 0) {
        res += possibilities[num % 62];
        num = parseInt(num / 62);
    }
    return res.split("").reverse().join("");
}

function decoder(encoded) {
    const possibilities = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    q = encoded.split('');
    index = [];
    q.forEach(element => {
        index.push(possibilities.indexOf(element));
    });
    let res = index[0] * 62 + index[1];
    for (let i = 2; i < index.length; i++) {
        res = res * 62 + index[i];
    }
    return res.toString(36);
}

console.log(encoder('starwars')); //DKGc9xC
console.log(decoder('DKGc9xC')); //starwars

// length of starwars is 8
// length of DKGc9xC is 7