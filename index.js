const min = 65;
const max = 90;

let cessar;
let abc = new Map();
let simpleReplace;

window.onload = () => {
    init();
}

function setCessarInput(letter) {
    let input = letter.charCodeAt() + cessar
    let result = input;

    while(result < min || result > max) {
        if(input > max) {
            input = input - max;
            result = input + min;
        }
    }

    return String.fromCharCode(result);
}

function setCessar(number) {
    if(isNaN(number)) {
        console.log('Need number');
    }
    if(number < 0 ) {
        console.log('Number cant be below 0');
    }
    cessar = number;
} 

function setSentence(sent,type) {
    if(isSentenceInvalid(sent)) {
        console.log('invalid number or please setCessar before sentence');
    }

    switch(type) {
        case 'cessar' : 
            return cessarHandle(sent.toUpperCase());
        case 'simple' : 
            return simpleHandle(sent.toUpperCase());
        default: console.log('Type can be only: cessar and simple');
    }
}

function isSentenceInvalid(sent) {
    return !(typeof sent === 'string' || sent instanceof String);
}


function init() {
    for(let i = 'A'.charCodeAt(); i <= 'Z'.charCodeAt();i++) {
        abc.set(i,String.fromCharCode(i));
    }
}

function setSimpleReplace(sent) {
    if(isSentenceInvalid(sent)) {
        console.log('Sentence is invalid');
    }
    simpleReplace = sent;

    i = min;
    sent.split('').forEach(letter => {
        console.log();
        if(!(i > max)) {
            abc.set(i,letter)
            i++;
        }
    })
}

function cessarHandle(sent) {
    if(!cessar) {
        console.log('Cessar is empty or invalid');
        return;
    }
    return sent.split('')
    .map(letter => {
        const letterCode = letter.charCodeAt();
        return (letterCode < min || letter > max) ? letter : setCessarInput(letter)
    })
    .join('');
}

function simpleHandle(sent) {
    if(!simpleReplace) {
        console.log('Simple Replace is empty or invalid');
        return;
    }
    return sent.split('').map(letter => {
        const letterCode = letter.charCodeAt();
        return (letterCode < min || letter > max) ? letter : abc.get(letterCode)
    }).join('');
}