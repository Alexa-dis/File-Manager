import { readdir } from 'fs/promises';
import { cwd } from 'process';

const currentDirectory = async () => {
    try {
        const curDirectory = cwd();
        const files = await readdir(curDirectory, { withFileTypes: true });
        const tableData = files
            .sort((fileA, fileB) => fileA.isFile() - fileB.isFile())
            .map((file) => ({
                Name: file.name,
                Type: file.isFile() ? 'file' : 'directory'
            }));
        console.table(tableData);
    } catch {
        throw new Error("Operation failed");
    }
}

export default currentDirectory;