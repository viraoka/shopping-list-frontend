import axios from 'axios';

const getAllLists = (setList) => {
    axios.get("https://shopping-list-vkwg.onrender.com")
    .then(({data}) => {console.log(data)
    setList(data)
    })
}

const addList = (title, setTitle, setList) => {
    axios.post("https://shopping-list-vkwg.onrender.com/saveLists", { title })
    .then((data) => {
        console.log(data);
        setTitle("");
        getAllLists(setList)
    })
}

const editList = (listId, title, setTitle, setList, setEditing) => {
    axios.post("https://shopping-list-vkwg.onrender.com/editList", { _id: listId, title })
    .then((data) => {
        console.log(data);
        setTitle("");
        setEditing(false);
        getAllLists(setList)
    })
}
const deleteMyList = (_id, setList) => {
    axios.post("https://shopping-list-vkwg.onrender.com/deleteList", { _id })
    .then((data) => {
        console.log(data);
        getAllLists(setList)
    })
}

export {getAllLists, addList, editList, deleteMyList};