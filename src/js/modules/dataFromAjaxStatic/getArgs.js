import getArgsQuery from "../ajax/getArgsQuery";
const args = [];

async function saveArgsFromAJAX() {
  const response = await getArgsQuery();
  args.push(await response.json());
}

async function getArgs() {
  if (args.length === 0) {
    await saveArgsFromAJAX();
  }
  return args[0];
}

export default getArgs;
