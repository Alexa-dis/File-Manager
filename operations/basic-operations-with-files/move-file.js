import isDirectoryExists from "../../helpers/is-directory-exists.js";
import { unlink } from "fs/promises";
import { createReadStream, createWriteStream } from "fs";
import { join, basename } from "path";

const move = async (pathToFile, pathToNewDirectory) => {
  const isFileExist = await isDirectoryExists(pathToFile);
  const isNewDirectoryExist = await isDirectoryExists(pathToNewDirectory);

  try {
    if (isFileExist && isNewDirectoryExist) {
      const inputStream = createReadStream(pathToFile, "utf-8");
      const pathToCopy = join(pathToNewDirectory, basename(pathToFile));
      const outputStream = createWriteStream(pathToCopy);

      inputStream.pipe(outputStream).on("finish", async () => {
        await unlink(pathToFile);
      });
    } else {
      throw new Error("Operation failed");
    }
  } catch {
    throw new Error("Invalid input");
  }
};

export default move;
