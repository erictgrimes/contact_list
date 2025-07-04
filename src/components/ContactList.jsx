import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

//added an if statement to handle the loading to not flash this data everytime all contacts load
// const dummyContacts = [
//   { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
//   { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
//   { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
// ];

function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState(null);
  useEffect(() => {
    const fetchContacts = async () => {
      const res = await fetch(
        "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
      );
      const data = await res.json();
      setContacts(data);

      try {
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchContacts();
  }, []);
  if (!contacts) return <div>Loading...</div>;
  console.log("Contacts:", contacts);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="3"> Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {contacts.map((contact) => {
            return (
              <ContactRow
                key={contact.id}
                contact={contact}
                setSelectedContactId={setSelectedContactId}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default ContactList;
