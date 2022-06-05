import { rm } from 'fs/promises';
import { join } from 'path';

const dir = join('src', 'fs', 'files');
const NO_FILE_ERROR = 'FS operation failed';

export const remove = async () => {
    try {
        await rm(join(dir, 'fileToRemove.txt'));
    } catch {
        throw new Error(NO_FILE_ERROR);
    }
};

remove();