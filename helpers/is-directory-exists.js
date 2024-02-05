import { access, constants } from "fs/promises";

const isDirectoryExists = async (path) => {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

export default isDirectoryExists;
