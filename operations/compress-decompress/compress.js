import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const compress = async (pathToFile, pathToZip) => {
  const zip = createGzip();
  const inputStream = createReadStream(pathToFile);
  const outputStream = createWriteStream(pathToZip);
  inputStream.pipe(zip).pipe(outputStream);
};

export default compress;
