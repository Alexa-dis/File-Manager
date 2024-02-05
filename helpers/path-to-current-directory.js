import { cwd } from 'process';

const pathToCurrentDirectory = () => {
    const pathToCurrentDir = cwd();
    console.log(`You are currently in ${pathToCurrentDir}`);
}

export default pathToCurrentDirectory;