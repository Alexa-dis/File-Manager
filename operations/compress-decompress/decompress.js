import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const decompress = async (pathToZip, pathToFile) => {
  const zip = createUnzip();
  const inputStream = createReadStream(pathToZip);
  const outputStream = createWriteStream(pathToFile);
  inputStream.pipe(zip).pipe(outputStream);
};

export default decompress;
