import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ClientAuthentication/AuthProvider";
import { Table } from "ka-table";
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';

const FeaturedBlogs = () => {
    const { user } = useContext(AuthContext);    
    const [users, setUsers] = useState([]);
    console.log(users);

    const url = `http://localhost:5000/users?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                data.sort((a,b) => a.blogLongDescription?.split(' ').length - b.blogLongDescription?.split(' ').length)
                const topPosts = data.slice(0, 50);
                setUsers(topPosts)})
    }, []); 
       

    const dataArray = users.map((userData, index) => ({        
        column1: `${index + 1}`,
        column2: userData?.blogTitle,
        column3: userData?.blogName,
        column4: <img src={userData?.blogImage} alt="Blog Image" />,
        id: index,
        
    }));
    // const dataArray = users.map((userData, index) => {
    //     const blogImageSrc = userData?.blogImage;
    //      // Assuming 'url' is the property containing the image URL in the object
    //      console.log(userData)
    //     return {
    //         column1: `${index + 1}`,
    //         column2: userData?.blogTitle,
    //         column3: userData?.blogName,
    //         column4: <img src={blogImageSrc} alt="Blog Image" width="100" height="100" />,
    //         id: index,
    //     };
    // });

    return (
        <div className="px-10 gap-20">
            
            
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