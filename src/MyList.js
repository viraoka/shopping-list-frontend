import { RiDeleteBin2Fill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";

export const MyList = ({text, updatingInInput, deleteMyList}) => {
    return (
    <div>
        <p> {text} </p>
        <AiFillEdit onClick={updatingInInput}></AiFillEdit>
        <RiDeleteBin2Fill onClick={deleteMyList}></RiDeleteBin2Fill>
    </div>)
}
