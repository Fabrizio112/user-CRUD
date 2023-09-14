import { useDispatch } from "react-redux";
import { removeUser } from "../redux/store/usersSlice";
import { ButtonAction, TableData } from "../assets/StyledComponents/Components";
import { editForm } from "../redux/store/formSlice";

function IndividualUser({ user }) {
    const dispatch = useDispatch()
    const handleDelete = (user) => {
        dispatch(removeUser(user.id))
    }
    const handleEdit = (user) => {
        dispatch(editForm(user))
    }

    return (
        <tbody>
            <tr key={user.id}>
                <TableData>{user.id}</TableData>
                <TableData>{user.name}</TableData>
                <TableData>{user.username}</TableData>
                <TableData>{user.email}</TableData>
                <TableData><ButtonAction onClick={() => handleEdit(user)}>Edit</ButtonAction><ButtonAction onClick={() => handleDelete(user)}>Delete</ButtonAction></TableData>
            </tr>
        </tbody>);
}

export default IndividualUser;