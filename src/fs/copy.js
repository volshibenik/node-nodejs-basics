import { mkdir, readdir, copyFile } from 'fs/promises';
import { join } from 'path';

const dir = join('src', 'fs');
const NO_FILE_ERROR = 'FS operation failed';

export const copy = async () => {
    const pathOne = join(dir, 'files');
    const pathTwo = join(dir, 'files_copy');

    try {
        const files = await Promise.all([readdir(pathOne), mkdir(pathTwo)]);

        for (const file of files[0]) {
            await copyFile(join(pathOne, file), join(pathTwo, file));
        
        }
    } catch {
        throw new Error(NO_FILE_ERROR);
    }
};

copy();