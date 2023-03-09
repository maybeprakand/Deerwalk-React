const fs = require("./test1");
const util = require("util");
const readFile = util.prosmify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const unlinkAsync = util.promisify(fs.unlink);

const run = async () => {
  const data = await fs.readFileAsync("test4.txt");
  await fs.writeFileAsync("test3.txt", data);
  //   await fs.unlinkAsync("test1.txt");
  console.log("done ");
};
run();
