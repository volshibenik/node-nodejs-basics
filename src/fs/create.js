import { access, writeFile } from 'fs/promises';

const NO_FILE_ERROR = 'FS operation failed';

export const create = async () => {
    try {
        await access('src/fs/files/fresh.txt');
        throw new Error(NO_FILE_ERROR);
    } catch(e) {
        if (e && e.message !== NO_FILE_ERROR) {
            await writeFile('src/fs/files/fresh.txt', 'I am fresh and young');
        }
    }
};

create();