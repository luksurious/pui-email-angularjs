import EMAILS from './emails.db';

const dataservice = function () {
    let highestId = Object.values(EMAILS).reduce((highest, item) => {
        if (item.id > highest) {
            return item.id
        }
        return highest;
    }, 0);

    return {
        getAllEmails: function () {
            return EMAILS;
        },
        getEmailById: function (id) {
            if (EMAILS[ id ]) {
                return EMAILS[ id ];
            }

            console.error(`No email found with id ${id}`);
        },
        deleteEmail: function (id) {
            if (EMAILS[ id ]) {
                delete EMAILS[ id ];
                return;
            }

            console.error(`No email found with id ${id}`);
        },
        addEmail: function (to, from, subject, date, body) {
            let newId = highestId + 1;

            EMAILS[ newId ] = {
                id: newId,
                to: to,
                from: from,
                subject: subject,
                date: date,
                body: body
            };

            highestId = newId;
        }
    };
};

export default dataservice;