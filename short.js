function strtodec(str) {
    let eq = [];
    for (let index = 0; index < str.length; index++) {
        eq.push(str.charCodeAt(index) - 96);
    }
    let res = eq[0] * 27 + eq[1];
    for (let i = 2; i < eq.length; i++) {
        res = res * 27 + eq[i];
    }
    return res;
}

function dectostr(num) {
    let res = [];
    while (num > 0) {
        res.push(num % 27 + 96);
        num = parseInt(num / 27);
    }
    res.reverse();
    let ans = '';
    res.forEach(element => {
        ans += String.fromCharCode(element);
    });
    return ans;
}

function encoder(num) {
    const possibilities = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    num = strtodec(num);
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
    return dectostr(res);
}

console.log(encoder('helloworld')); //hLbcYETu
console.log(decoder('hLbcYETu')); //helloworld

//length of helloworld is 10
//length of hLbcYETu is 8