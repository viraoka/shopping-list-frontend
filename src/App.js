import { useEffect, useState } from 'react';
import { MyList } from './MyList';
import { getAllLists, addList, editList, deleteMyList } from './FetchList';


function App() {

  const [myList, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [listId, setListId] = useState("");

  useEffect(() => {
    getAllLists(setList)
  }, [])

  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setListId(_id)
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <input
      type="text"
      placeholder="Add a purchase..."
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />

      <button
      disabled={!title}
      onClick=
      {editing ? () => editList(listId, title, setTitle, setList, setEditing) : () => addList(title, setTitle, setList)}>
      {editing ? "Edit" : "Add"}
      </button>

    {myList.map((list) => <MyList text={list.title} key={list._id}
    updatingInInput={() => updatingInInput(list._id, list.title)}
    deleteMyList={() => deleteMyList(list._id, setList)}
    />)}

    </div>
  );
}


export default App;
