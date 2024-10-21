import React, {useState} from "react";
import BlogList from "../components/blog-list";

export default function Blog(){
    const [blogList,setBlogList] = useState([]);
    const [form,setForm] = useState({
        title: "",
        description:"",
});

    const {title,description} = form;

    const onInputChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
};

const handleAdd = ()=>{
    setBlogList([...blogList,form])
    setForm({
        title:"",
        description:""
    });
};
return(
    <div className="w-[400px] border shadow-sm rounded-lg p-6 mx-auto" >
        <div className="mb-4">
            <label htmlFor="title" className = "block mb-2">Title</label>
            <input type="text" id="title" name="title" value = {title} onChange={onInputChange} placeholder="Enter blog title"/>
        </div>

        <div className ="border p-2 rounded-md w-full focus:border-blue-50" >
            <label htmlFor="description" className = "block mb-2">Description</label>
            <textarea name="description" id="description" value={description} onChange={onInputChange} rows={4} placeholder="Enter blog description"></textarea>
        </div>

        <button onClick={handleAdd} className="bg-blue-500 test-white rounded-full w-full px-4 py-2 mt-4">Add</button>
        <BlogList blogList={blogList}/>

        {/* {blogList.map((blog,index)=>{
            return(
            <div  key={index}> 
            <h1>{blog.title}</h1>
            <h1>{blog.description}</h1>
            </div>)
})} */}

   
    </div>
)

    // return(
    //     <div>
    //         <input type="text" />
    //         <input type="text" />
    //         <button>Edit</button>
    //         <button>Delete</button>

    //     </div>
    // );

}

// export {Blog};