import { createReadStream, createWriteStream } from "fs";
import isDirectoryExists from "../../helpers/is-directory-exists.js";

const copy = async (srcPath, destPath) => {
  const isSrcExist = await isDirectoryExists(srcPath);
  const isDestExist = await isDirectoryExists(destPath);
  try {
    if (isSrcExist && !isDestExist) {
      const inputStream = createReadStream(srcPath, "utf-8");
      const pathToCopy = join(destPath, basename(srcPath));
      const outputStream = createWriteStream(pathToCopy);

      inputStream.pipe(outputStream);
    } else {
      throw new Error("Operation failed");
    }
  } catch {
    throw new Error("Invalid input");
  }
};

export default copy;
