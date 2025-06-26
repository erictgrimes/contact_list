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
  }, []);
  return <div> </div>;
}

export default SelectedContact;
