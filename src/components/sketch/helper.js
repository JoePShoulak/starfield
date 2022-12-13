const display = p5 => ({
  newLine: (p1, p2) => p5.line(p1.x, p1.y, p2.x, p2.y),
});

module.exports = { display };
