import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ClientAuthentication/AuthProvider";
import { Table } from "ka-table";
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';

const FeaturedBlogs = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const [users, setUsers] = useState([]);
    const url = `http://localhost:5000/users?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    const dataArray = users.map((userData, index) => ({
        column1: `${index + 1}`,
        column2: userData.email,
        column3: userData.title,
        column4: userData.comment,
        id: index,
    }));

    return (
        <div className="px-10">
            <h2>your comments: {users.length}</h2>
            <Table
                columns={[
                    { key: 'column1', title: 'Serial Number', dataType: DataType.String },
                    { key: 'column2', title: 'Blog Title', dataType: DataType.String },
                    { key: 'column3', title: 'Blog Owner', dataType: DataType.String },
                    { key: 'column4', title: 'Blog owner Profile Picture', dataType: DataType.String },
                ]}
                data={dataArray}
                editingMode={EditingMode.Cell}
                rowKeyField={'id'}
                sortingMode={SortingMode.Single}
            />
        </div>
    );
};

export default FeaturedBlogs;