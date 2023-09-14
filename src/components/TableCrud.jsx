import { useSelector } from "react-redux";
import IndividualUser from "./IndividualUser";
import { Table, TableHead } from "../assets/StyledComponents/Components";

function TableCrud() {
    const users = useSelector(state => state.user.users)
    return (
        <Table>
            <thead>
                <tr>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Buttons</TableHead>
                </tr>
            </thead>
            {users && users.map(user => <IndividualUser key={user.id} user={user} />)}
        </Table>);
}

export default TableCrud;