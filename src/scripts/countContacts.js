import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    const currentMassif = await readContacts();
    return currentMassif.length;
};

console.log(await countContacts());
