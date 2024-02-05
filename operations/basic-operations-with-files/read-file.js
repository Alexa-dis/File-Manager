import isDirectoryExists from "../../helpers/is-directory-exists.js";
import { createReadStream } from "fs";

const read = async (fullPath) => {
  const isFileExist = await isDirectoryExists(fullPath);
  try {
    if (isFileExist) {
      createReadStream(fullPath).pipe(stdout);
    } else {
      throw new Error("Operation failed");
    }
  } catch {
    throw new Error("Invalid input");
  }
};

export default read;
