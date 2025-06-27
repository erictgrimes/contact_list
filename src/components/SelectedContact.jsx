import { useState, useEffect } from "react";

function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    const fetchContact = async () => {
      const res = await fetch(
        `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
      );
      const data = await res.json();
      setContact(data);

      try {
        console.log(data);
      } catch {
        console.error(error);
      }
    };
    fetchContact();
  }, [selectedContactId]);
  //kept redering contact before contact had data
  if (!contact) return <div>Loading...</div>;

  const address = contact.address;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="3" className="name">
              {contact.name}
            </th>
          </tr>
        </thead>
        <tr>
          <td className="info">Email:</td>
          <td>{contact.email}</td>
        </tr>
        <tr>
          <td className="info">Phone:</td>
          <td>{contact.phone}</td>
        </tr>
        <tr>
          <td className="info" colSpan="2">
            Address
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            {address.suite} {address.street}
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            {address.city}, {address.zipcode}
          </td>
        </tr>
        <tbody></tbody>
      </table>
      <button onClick={() => setSelectedContactId(null)}>All Contacts</button>
    </div>
  );
}

export default SelectedContact;
