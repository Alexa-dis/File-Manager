import { cwd, chdir } from 'process';
import { join } from 'path';

const  upperDirectory = () => {
    const currentDirectory = cwd();
    const pathToUpperDir = join(currentDirectory, '../')
    chdir(pathToUpperDir);
}

export default upperDirectory;