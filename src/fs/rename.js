import fs from 'fs/promises';
import { join } from 'path';

const dir = join('src', 'fs', 'files');
const NO_FILE_ERROR = 'FS operation failed';

export const rename = async () => {
    try {
        await fs.rename(join(dir, 'wrongFilename.txt'), join(dir, 'properFilename.md'));
    } catch {
        throw new Error(NO_FILE_ERROR);
    }
};

rename();