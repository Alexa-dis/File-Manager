import { join, dirname } from "path";
import { rename } from "fs/promises";
import isDirectoryExists from "../../helpers/is-directory-exists.js";

const renameFile = async (pathToFile, newFileName) => {
  const newFilePath = join(dirname(pathToFile), newFileName);
  const isFileExist = await isDirectoryExists(pathToFile);
  const isNewFileExist = await isDirectoryExists(newFilePath);
  try {
    if (isFileExist && !isNewFileExist) {
      await rename(pathToFile, newFilePath);
    } else {
      throw new Error("Operation failed");
    }
  } catch {
    throw new Error("Invalid input");
  }
};

export default renameFile;
