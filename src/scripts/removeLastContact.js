import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';


export const removeLastContact = async () => {
    try {
        const currentMassif = await readContacts();
        if (currentMassif.length > 0) {
            currentMassif.length = currentMassif.length - 1;
            await writeContacts(currentMassif);
        } else {
            throw new Error('There are no contacts left');
        }
    } catch (err) {
        console.log(err.message);
    }
};

removeLastContact();
