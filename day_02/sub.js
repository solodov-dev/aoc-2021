module.exports = {
    horizontal: 0,
    depth: 0,
    forward: function(unit) {
	this.horizontal += unit;
    },
    down: function(unit) {
	this.depth += unit;
    },
    up: function(unit) {
	this.depth -= unit;
    },
    split: function(str) {
	let [command, unit] = str.split(' ');
	unit = Number(unit);
	return [command, unit];
    },
    sail: function (input) {
	for (const line of input) {
	    const [command, unit] = this.split(line);
	    this[command](unit);
	}
	return this.horizontal * this.depth;
    }
}
