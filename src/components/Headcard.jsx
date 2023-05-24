import React from "react";

export default function Headcard({title,content=["Cutting-Edge Technologies","Seamless User Experience","Responsive and Mobile-First Design", "easily configurable"]}){

    return(
        
       <div className=" py-8 w-56 rounded-3xl m-6  pl-4 border-solid border-2 border-sky-500" >

        <h3>{title}</h3>
        <ul className="text-start ">
  {content.map((item) => {
    return <li className=" py-2">{item}</li>;
  })}
</ul>

       </div>
    )
}