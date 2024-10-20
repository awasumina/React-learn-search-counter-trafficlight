import React from 'react'

export default function BlogList(props) {
    const {blogList} = props;
    if(blogList.length===0){
        return <h1>Add a Blog</h1>
    }
  return (
    <div>
             {blogList.map((blog,index)=>{
            return(
            <div  key={index}> 
            <h1>{blog.title}</h1>
            <h1>{blog.description}</h1>
            </div>)
})}
    </div>
  )
}



