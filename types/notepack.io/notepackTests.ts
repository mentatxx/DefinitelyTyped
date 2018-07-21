import notepack = require('notepack.io');

let buffer: Buffer = notepack.encode('Azaza');
buffer = notepack.encode(100500);
buffer = notepack.encode({aaa: 1});
buffer = notepack.encode(null);
buffer = notepack.encode(undefined);

const result = notepack.decode(buffer);
