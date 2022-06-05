import { readFile } from 'fs/promises';
import { join } from 'path';

const NO_FILE_ERROR = 'FS operation failed';
const file = join('src', 'fs', 'files', 'fileToRead.txt');


export const read = async () => {
    try {
        const contents = await readFile(file, 'utf-8');
        console.log(contents);
    } catch {
        throw new Error(NO_FILE_ERROR);
    }
};

read();