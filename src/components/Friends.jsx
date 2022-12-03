import React from "react";
import { Link } from "react-router-dom";

const TableRow = (props) => {
    return (
        <tr>
            <th scope="row">{props.index + 1}</th>
            <td>
                <Link to={"/profile/" + props.id}>
                    {props.name} {props.lastname}
                </Link>
            </td>
        </tr>
    );
};

class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userRow: new Date() };
    }
    componentDidMount() {
        let users = this.props.function();
        let usersCount = Object.keys(users).length;
        let userRow = [];
        for (let i = 0; i < usersCount; i++) {
            userRow.push(
                <TableRow
                    id={users[i].id}
                    key={i}
                    index={i}
                    name={users[i].name}
                    lastname={users[i].lastname}
                />
            );
        }
    }

    render() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Фамилия и Имя</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        );
    }
}
export default Friends;
