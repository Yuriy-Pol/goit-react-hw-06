import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

export default function ContactList() {
  const selectContacts = useSelector(state => state.contacts.items);
  const selectNameFilter = useSelector(state => state.filters.name);

  const filtered =
    selectNameFilter.trim() !== ''
      ? selectContacts.filter(value =>
          value.name
            .toLowerCase()
            .includes(selectNameFilter.toLowerCase().trim())
        )
      : selectContacts;

  return (
    <>
      <div className={css.list}>
        <ul>
          {filtered.map(contact => {
            return (
              <li key={contact.id} className="item">
                <Contact
                  name={contact.name}
                  phone={contact.number}
                  id={contact.id}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

// export default function ContactList({ contacts, onDelete }) {
//   return (
//     <>
//       <div className={css.list}>
//         <ul>
//           {contacts.map(contact => {
//             return (
//               <li key={contact.id}>
//                 <Contact
//                   name={contact.name}
//                   phone={contact.number}
//                   id={contact.id}
//                   onDelete={onDelete}
//                 />
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </>
//   );
// }
