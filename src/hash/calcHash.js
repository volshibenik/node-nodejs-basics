import crypto from 'crypto';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const calculateHash = async () => {
    const filePath = join('src', 'hash', 'files', 'fileToCalculateHashFor.txt');
    const buffer = await readFile(filePath);
    const hashSum = crypto.createHash('sha256');

    hashSum.update(buffer);

    const hex = hashSum.digest('hex');

    console.log(hex);

    return hex;
};

calculateHash();