import React, { useEffect, useState } from "react";

const App = () => {
  const [urlList, setUrlList] = useState([]);
  const [websiteName, setWebsiteName] = useState("");
  const [close, setClose] = useState(true);
  const [storage, setStorage] = ([])


  useEffect(() => {
    let newList = [];
    const getItems = JSON.parse(localStorage.getItem("urlList"));
    if (getItems) {
     if(urlList.length === 0 ){}
     else{
      newList.push(...getItems);
      newList.unshift(urlList[urlList.length - 1]);
      localStorage.setItem("urlList", JSON.stringify(newList));
      console.log("newlist", newList);
     }

    } else {
      if(urlList.length === 0 ) {}
      else localStorage.setItem("urlList", JSON.stringify(urlList));
    }
  }, [urlList]);


  const AddUrl = () => {
    if (websiteName.trim().length === 0) {
      alert("Flieds cannot be empty! ");
    } else {
      setUrlList([
        ...urlList,
        { name: websiteName, url: window.location.href },
      ]);
      setWebsiteName("");
    }
  };




  return (
    <>
      <div
        className={`absolute z-10 top-4 right-4 flex justify-center  items-center text-center ${close ? "" : "hidden"
          }`}
      >
        <button
          className=" rounded-xl border px-2  shadow-xl py-2 bg-lime-600 text-white text-sm font-bold"
          onClick={() => setClose(false)}
        >
          Stack 🔗
        </button>
      </div>

      <div
        className={`flex z-50 justify-center items-center mt-4 text-center bg-white absolute top-4  w-full ${close ? "hidden" : ""
          }`}
      >
        <div className="shadow-lg md:w-1/2 w-full  rounded-md py-4">
          {/* close button */}
          <div className="flex justify-end px-4">
            <button className="" onClick={() => setClose(true)}>
              ❌
            </button>
          </div>

          {/* website title */}
          <p className="font-bold">Stack url</p>

          {/* image */}
          <div className="flex items-center w-full justify-center">
            <img src="icon.png" alt="logo" width={"200px"} />
          </div>

          {/* website name */}
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

            {/*url */}
            {/* <div className="w-full ">
              <input
                type="text"
                placeholder="Url link"
                value={link}
                className="border-b-2 w-[70%] outline-0 placeholder:text-sm placeholder:text-gray-300 px-2"
                onChange={(e) => setLink(e.target.value)}
                required
              />
            </div> */}

            <button
              className="bg-lime-600 px-4 rounded-sm text-white  font-bold w-[50%] py-1"
              onClick={AddUrl}
            >
              Save
            </button>
          </div>

          <div className="mt-4   ">
            <p>{urlList.length === 0 ? "No save url yet!" : "Urls "}</p>

            <div className="text-left px-4">
              {urlList?.map((website, index) => {
                return (
                  <div
                    className=" my-2 px-2 flex justify-between shadow-md bg-[#e7e9ea]"
                    key={`${name}${index}`}
                  >
                    <p className="py-1">{website.name}</p>{" "}
                    <button className="text-blue-400 underline font-extralight italic">
                      <a href={website.url} target="_blank">
                        visit 🔗
                      </a>
                    </button>{" "}
                    <button>❌</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
