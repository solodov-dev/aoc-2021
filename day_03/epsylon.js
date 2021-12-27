module.exports = (gamma) => gamma.split('').map(dig => dig === '1' ? '0' : '1').join('');
