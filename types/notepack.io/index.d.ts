// Type definitions for notepack.io 2.1
// Project: https://github.com/darrachequesne/notepack
// Definitions by: Alexey Petushkov <https://github.com/mentatxx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function encode(value: any): Buffer;
export function decode(buffer: Buffer): any;
