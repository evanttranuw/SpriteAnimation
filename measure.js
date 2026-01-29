const fs = require('fs');

// Read the PNG file
const data = fs.readFileSync('sonic.png');

// PNG dimensions are stored at bytes 16-23
// Width: bytes 16-19 (big-endian)
// Height: bytes 20-23 (big-endian)
const width = data.readUInt32BE(16);
const height = data.readUInt32BE(20);

console.log('=== SONIC SPRITE SHEET MEASUREMENTS ===');
console.log(`Total image size: ${width} x ${height} pixels`);
console.log('');
console.log('If you have 12 frames:');
console.log(`  Width per frame: ${width / 12} pixels`);
console.log('');
console.log('If you have 8 frames:');
console.log(`  Width per frame: ${width / 8} pixels`);
console.log('');
console.log('RECOMMENDED SETTINGS for Animator:');
console.log(`  xstart: 0  (NOT 2.5!)`);
console.log(`  yStart: 0`);
console.log(`  width: ${width / 12}  (if 12 frames)`);
console.log(`  height: ${height}`);
console.log(`  frameCount: 12  (count your actual frames)`);
