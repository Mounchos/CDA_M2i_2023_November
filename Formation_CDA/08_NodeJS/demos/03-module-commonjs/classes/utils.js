function reverse(word) {
    return [...word].reverse().join('');
}

function pointiller(word) {
    return word.length > 15 ? word.slice(0, 12) + '...' : word;
}

module.exports = {
    reverse,
    pointiller
}