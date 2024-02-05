import { cwd } from "process";
import { join } from "path";
import { access, appendFile } from "fs/promises";

const create = async (filename) => {
  const curDirectory = cwd();
  const filePath = join(curDirectory, filename);
  try {
    await access(filePath);
    throw new Error("Operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        await appendFile(filePath, "");
      } catch {
        throw new Error("Operation failed");
      }
    } else {
      throw error;
    }
  }
};

export default create;
