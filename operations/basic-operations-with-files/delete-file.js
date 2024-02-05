import { unlink } from 'fs/promises';

const remove = async (fullPath) => {
  try {
    await unlink(fullPath).catch((error) => {
      if (error) {
        throw new Error("Operation failed");
      }
    });
  } catch {
    throw new Error("Invalid input");
  }
};

export default remove;
