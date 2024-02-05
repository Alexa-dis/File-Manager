import { cwd } from "process";
import { homedir } from "os";
import targetDirectory from "./operations/navigation/target-directory.js";
import currentDirectory from "./operations/navigation/current-directory.js";
import upperDirectory from "./operations/navigation/upper-directory.js";
import pathToCurrentDirectory from "./helpers/path-to-current-directory.js"
import read from "./operations/basic-operations-with-files/read-file.js";
import create from "./operations/basic-operations-with-files/create-file.js";
import renameFile from "./operations/basic-operations-with-files/rename-file.js";
import copy from "./operations/basic-operations-with-files/copy-file.js";
import move from "./operations/basic-operations-with-files/move-file.js";
import remove from "./operations/basic-operations-with-files/delete-file.js";
import calculateHash from "./operations/hash/hash.js";
import compress from "./operations/compress-decompress/compress.js";
import decompress from "./operations/compress-decompress/decompress.js";
import operationSystemInfo from "./operations/os/operation-system-info.js";


const cliArguments = process.argv.slice(2);
const username = cliArguments
  .find((arg) => arg.startsWith("--username"))
  .slice(11);

const homeDirectory = homedir();
await targetDirectory(homeDirectory);

const greeting = (username) => {
  console.log(`Welcome to the File Manager, ${username}!`);
};

const goodbye = (username) => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
};

greeting(username);
pathToCurrentDirectory();

process.stdin.setEncoding("utf8");
process.stdin.on("data", async (data) => {
  const [operationName, ...params] = data.trim().split(" ");

  const operations = [
    //Navigation
    { name: "up", method: upperDirectory },
    { name: "cd", method: targetDirectory },
    { name: "ls", method: currentDirectory },

    //Basic operations
    { name: "cat", method: read },
    { name: "add", method: create },
    { name: "rn", method: renameFile },
    { name: "cp", method: copy },
    { name: "mv", method: move },
    { name: "rm", method: remove },

    //Operating system info
    { name: 'os', method: operationSystemInfo },

    //Hash calculation
    { name: 'hash', method: calculateHash },

    //Compress and decompress
    { name: 'compress', method: compress },
    { name: 'decompress', method: decompress },

    { name: '.exit', method: process.exit },
  ];

  const currentOperation = operations.find(
    (oper) => oper.name === operationName
  );

  try {
    if (currentOperation) {
      await currentOperation.method(...params);
    } else {
      throw new Error("Invalid input");
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    pathToCurrentDirectory();
  }
});

process.on("SIGINT", () => {
  process.exit();
});

process.on("exit", () => goodbye(username));
