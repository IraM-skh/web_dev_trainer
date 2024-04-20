import getCategorysQuery from "../ajax/getCategorysQuery";
const categorys = [];

async function saveCategoryFromAJAX() {
  const response = await getCategorysQuery();
  categorys.push(await response.json());
}

async function getCategorys() {
  if (categorys.length === 0) {
    await saveCategoryFromAJAX();
  }
  return categorys[0];
}

export default getCategorys;
