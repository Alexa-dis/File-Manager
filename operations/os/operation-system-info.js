import { EOL, homedir, userInfo, arch, cpus } from "os";

const operationSystemInfo = (param) => {
  switch (param) {
    case "--EOL":
      console.log(JSON.stringify(EOL));
      break;
    case "--cpus":
      const data = cpus();
      console.log("Total CPUs count: ", data.length);
      data.forEach((cpu, index) =>
        console.log(`CPU №${index + 1}: model: ${cpu.model}`)
      );
      break;
    case "--homedir":
      console.log(homedir());
      break;
    case "--username":
      console.log(userInfo().username);
      break;
    case "--architecture":
      console.log(arch());
      break;
    default:
      throw new Error("Invalid input");
  }
};

export default operationSystemInfo;
