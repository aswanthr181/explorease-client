import React, { useState } from "react";

function Pagination({numbers,currenPage,firstIndex,lastIndex,setCurretPage}) {

  let [num, setNum] = useState(1)
  let [cur, setCur] = useState(1)
  console.log(numbers,'show in pagination');

  // const pages = [
  //   { page: num },
  //   { page: num + 1 },
  //   { page: num + 2 },
  //   { page: num + 3 },
  // ]
  // function Next() {
  //   setNum(++num)
  // }
  // function back() {
  //   num > 1 && setNum(--num)
  // }
const prevPage=()=>{
  if(currenPage!==firstIndex){
    setCurretPage(currenPage-1)
  }

}
const changePage=(id)=>{
  setCurretPage(id)
}
  const nextpage=()=>{
    if(currenPage!==lastIndex){
      setCurretPage(currenPage+1)
    }
  }
  return (
    <>

      <div className="flex bg-white rounded-lg font-[Poppins]">
        <ol className="flex justify-center gap-1 text-xs font-medium">
          <li>
            <a
            onClick={prevPage}
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          {numbers.map((n,i)=>{
             return(
             <li key={i}
             >
              
              <a
              onClick={()=>changePage(n)}
                href="#"
                className={`block h-8 w-8 rounded border border-gray-100 ${currenPage===n ? 'border-blue-600 bg-black text-white' :'bg-white'}  text-center leading-8 text-gray-900`}
                // "block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                {n}
              </a>
            </li>)
          })}
          




          

         

          

          <li>
            <a
            onClick={nextpage}
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ol>
      </div>
    </>
  );
}

export default Pagination;