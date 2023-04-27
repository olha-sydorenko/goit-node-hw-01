const contacts = require("./contacts");

const invokeAction = async ({action, contactId, name, email, phone}) => {
    switch(action) {
        case "list":
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
        case "get":
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
invokeAction({action: "remove", contactId: "fL4OH8i1PEPCLNTFA6vPo"});