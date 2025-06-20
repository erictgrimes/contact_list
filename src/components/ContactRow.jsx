function ContactRow({ contact }) {
  return (
    <div>
      <tr>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    </div>
  );
}

export default ContactRow;
