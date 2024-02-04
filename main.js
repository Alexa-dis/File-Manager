import process from "process";

const cliArguments = process.argv.slice(2);
const username = cliArguments
  .find((arg) => arg.startsWith("--username"))
  .slice(11);

const greeting = (username) => {
  console.log(`Welcome to the File Manager, ${username}!`);
};

const goodbye = (username) => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
};

greeting(username);
process.on("exit", () => goodbye(username));
