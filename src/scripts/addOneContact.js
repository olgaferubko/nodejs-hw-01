import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js"; 
import { writeContacts } from "../utils/writeContacts.js";


export const addOneContact = async () => {
    try {
        const savedContactsMassif = await readContacts();
        const newMassif = [...savedContactsMassif, createFakeContact()];
        await writeContacts(newMassif);
    } catch (err) {
        console.log(err.message);
    }
};

addOneContact();
