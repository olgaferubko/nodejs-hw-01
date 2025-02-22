import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';


const generateContacts = async (number) => {
    if (number <= 0) return;

    try {
        const savedContactsMassif = await readContacts();
        const newMassif = [];
        for (let i = number; i > 0; i--) {
            newMassif.push(createFakeContact());
        }
        await writeContacts(savedContactsMassif.concat(newMassif));
    } catch (err) {
        console.log(err.message);
    }
};

generateContacts(5);
