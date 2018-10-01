import EMAILS from './emails.db';

class Dataservice {
    constructor() {
        this.highestId = Object.values(EMAILS).reduce((highest, item) => {
            if (item.id > highest) {
                return item.id
            }
            return highest;
        }, 0);
    }

    getAllEmails() {
        return EMAILS;
    }
    
    getEmailById(id) {
        if (EMAILS[ id ]) {
            return EMAILS[ id ];
        }

        console.error(`No email found with id ${id}`);
    }

    deleteEmail(id) {
        if (EMAILS[ id ]) {
            delete EMAILS[ id ];
            return;
        }

        console.error(`No email found with id ${id}`);
    }

    addEmail(to, from, subject, date, body) {
        let newId = this.highestId + 1;

        EMAILS[ newId ] = {
            id: newId,
            to: to,
            from: from,
            subject: subject,
            date: date,
            body: body
        };

        this.highestId = newId;
    }
}

export default Dataservice;