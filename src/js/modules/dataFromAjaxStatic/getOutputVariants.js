import getOutputVariantQuery from "../ajax/getOutputVariantQuery";
const OutputVariants = [];

async function saveOutputVariantFromAJAX() {
  const response = await getOutputVariantQuery();
  OutputVariants.push(await response.json());
}

async function getOutputVariants() {
  if (OutputVariants.length === 0) {
    await saveOutputVariantFromAJAX();
  }
  return OutputVariants[0];
}

export default getOutputVariants;
