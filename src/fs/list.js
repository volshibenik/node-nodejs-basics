import { readdir } from 'fs/promises';
import { join } from 'path';

const NO_FILE_ERROR = 'FS operation failed';
const dir = join('src', 'fs', 'files');

export const list = async () => {
    try {
        const files = await readdir(dir);
        console.log(files);
    } catch {
        throw new Error(NO_FILE_ERROR);
    }
};

list();