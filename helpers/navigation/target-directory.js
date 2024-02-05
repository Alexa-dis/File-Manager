import { chdir } from "process";

const targetDirectory = async (path) => {
  if (path) {
    try {
      chdir(path);
    } catch {
      throw new Error("Operation failed");
    }
  } else {
    throw new Error("Invalid input");
  }
};

export default targetDirectory;
