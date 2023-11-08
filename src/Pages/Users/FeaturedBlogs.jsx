
import { Table } from "ka-table";
import { DataType, EditingMode, SortingMode } from "ka-table/enums";
import { useLoaderData } from "react-router-dom";

const FeaturedBlogs = () => {
  const blogs = useLoaderData();
  console.log(blogs);

 
  const topBlogs = blogs.filter((blog) => blog?.longDescription).sort((a, b) => a.blog?.longDescription.split(" ").length - b.blog?.longDescription.split(" ").length).slice(0, 10);
    
  const dataArray = topBlogs.map((blog, index) => ({
    column1: `${index + 1}`,
    column2: blog.tittle,
    column3: blog.name,
    column4: <img src={blog.blogImage} alt="Blog Image" />,
    id: index,
  }));

  return (
    <div className="px-10 gap-20 border">
      <Table
        className="border"
        columns={[
          { key: "column1", title: "Serial Number", dataType: DataType.String },
          { key: "column2", title: "Blog Title", dataType: DataType.String },
          { key: "column3", title: "Blog Owner", dataType: DataType.String },
          {
            key: "column4",
            title: "Blog owner Profile Picture",
            dataType: DataType.String,
          },
        ]}
        data={dataArray}
        editingMode={EditingMode.Cell}
        rowKeyField={"id"}
        sortingMode={SortingMode.Single}
      />
    </div>
  );
};

export default FeaturedBlogs;
