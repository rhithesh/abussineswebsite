import React from "react";

export default function Headcard({title,content=["Cutting-Edge Technologies","Seamless User Experience","Responsive and Mobile-First Design", "easily configurable"]}){

    return(
        
       <div className=" pb-8 pt-4  h-90 rounded-3xl  w-80  pl-4 border-solid border-2 border-sky-500 "  >

        <h3 className="h-12 ">{title}</h3>
        <ul className="text-start h-64  ">
  {content.map((item) => {
    return <li className=" py-2">{item}</li>;
  })}
</ul>
<div className="flex  justify-center">

<button className=" button-secondary mr-5   button">Details</button>

</div>

       </div>
    )
}