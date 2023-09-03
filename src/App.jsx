import React, { useEffect, useState } from "react";

const App = () => {
  const [url, setUrl] = useState([]);
  const [link, setLink] = useState("");
  const [websiteName, setWebsiteName] = useState("");

  const AddUrl=()=>{
    if (link.trim().length === 0 || websiteName.trim().length === 0){ alert("Flieds cannot be empty! ")}
    else {
      setUrl([...url,{name:websiteName,url:link}]) 
      setLink('')
      setWebsiteName('')
    }
  }

  return (
    <div className=" flex justify-center items-center mt-4 text-center absolute  w-full ">


      <div className="shadow-lg md:w-1/2 w-full  rounded-md py-4">


        <div className="flex justify-end px-4">
          <button>❌</button>
        </div>

        <p className="font-bold">Stack url</p>

        <div className="flex items-center w-full justify-center">
          <img src="icon.png" alt="" width={'200px'} />
        </div>

        <div className=" flex flex-col items-center space-y-4">
          <div className="w-full">
            <input
              type="text"
              placeholder="Website Name"
              value={websiteName}
              className="border-b-2 w-[70%] outline-0 placeholder:text-sm placeholder:text-gray-300 px-2"
              onChange={(e) => setWebsiteName(e.target.value)}
              required
            />
          </div>

          <div className="w-full ">
            <input
              type="text"
              placeholder="Url link"
              value={link}
              className="border-b-2 w-[70%] outline-0 placeholder:text-sm placeholder:text-gray-300 px-2"
              onChange={(e) => setLink(e.target.value)}
              required
            />
           
          </div>

          <button
              className="bg-lime-600 px-4 rounded-sm text-white  font-bold w-[50%] py-1"
              onClick={AddUrl}
            >
              Save
            </button>
        </div>

        <div className="mt-4   ">
          <p>{url.length === 0 ? "No save url yet!" : "Urls "}</p>

          <div className="text-left px-4">
            {url?.map((link, index) => {
              return (
                <div className=" my-2 px-2 flex justify-between shadow-md bg-[#e7e9ea]" key={`${name}${index}`}>
                  <p className="py-1">{link.name}</p> <button className="text-blue-400 underline font-extralight italic"><a href={link.url} target="_blank"  >visit 🔗</a></button> <button>❌</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
