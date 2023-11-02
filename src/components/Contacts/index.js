import {useState , useEffect} from 'react'
import "./style.css";
import List  from './List'
import Form from './Form'

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname:"Ubeydullah",
            phone_number:"5415453752"
        },
        {
            fullname:"Büşra",
            phone_number:"5050229432"
        },
        {
            fullname:"Güney",
            phone_number:"5318574617"
        }
    ])

    useEffect(() => {
        console.log(contacts);

    }, [contacts])

  return (
    <div id='container'>
        <h1>Contacts</h1>

      <List contacts={contacts}  />
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
