import fs from "fs";
import crypto from "crypto";

const calculateHash = async (fullPath) => {
  const hash = crypto.createHash("sha256");
  const fileStream = fs.createReadStream(fullPath);

  fileStream.on("data", (data) => {
    hash.update(data);
  });

  fileStream.on("end", () => {
    const fileHash = hash.digest("hex");
    console.log(fileHash);
  });
};

export default calculateHash;
