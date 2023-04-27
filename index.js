const contacts = require("./contacts");

const invokeAction = async ({action, contactId, name, email, phone}) => {
    switch(action) {
        case "read":
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
        case "getById":
            const oneContact = await contacts.getContactById(contactId);
            return console.log(oneContact);   
        case "add":
            const newContact = await contacts.addContact({name, email, phone});
            return console.log(newContact);
        case "remove":
            const removedContact = await contacts.removeContact(contactId);
            return console.log(removedContact);

    }
}
//invokeAction({action: "add", name: "user", email: "user@gmail.com", phone: "9999999"});

//invokeAction({action: "read"});
//invokeAction({action: "getById", contactId: "5NwpneEOYDE6y9_1sVVad"});
invokeAction({action: "remove", contactId: "5NwpneEOYDE6y9_1sVVad"})