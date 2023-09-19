import React, { useState } from 'react'
import {Toaster, toast} from 'react-hot-toast'


function Areg() {
    const [turfName, setTurfName] = useState("");
  const [turfType, setType] = useState("");
  const [opening, setOpeining] = useState("");
  const [closing, setClosing] = useState("");
  const [advance, setAdvance] = useState("");
  const [total, setTotal] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [phone, setPhone] = useState("");
  const [photos, setPhotos] = useState([]);

  const [currentSection, setCurrentSection] = useState(1);

  const uploadPhoto = (event) => {
    const files = event.target.files;
    console.log(files,'==');
    const results = [];
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
  
      if (isValidImage(file.name)) {
        const reader = new FileReader();
  
        reader.onload = () => {
          results.push(reader.result);
  
    
          if (results.length === files.length) {
            setPhotos(results);
          }
        };
  
        reader.onerror = (error) => {
          console.log(error);
        };
  
        reader.readAsDataURL(file);
      } else {
        toast.error("Add valid images");
      }
    }}
    const submitTurf =async (e)=>{

    }
  
  return (
    <>
    <div className="container-fluid flex justify-center items-center registration-wrapper">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex form-holder">
            
          <div className="flex h-auto flex-1 flex-col justify-center p-6 lg:px-8 bg-gray-300 border border-black form-item">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-800">
                TURF REGISTRATION
              </h2>
            </div>
            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm ">
              <form
                className="space-y-6 "
                action="#"
                method="POST"
                onSubmit={submitTurf}
              >
                <div></div>
                {currentSection === 1 ? (
                  <>
                    <div>
                      <label
                        htmlFor="turfname"
                        className="block text-sm font-medium leading-6 text-gray-800"
                      >
                        Turf name
                      </label>
                      <div className="mt-1">
                        <input
                          id="turfname"
                          name="turfname"
                          type="text"
                          autoComplete="turfname"
                          value={turfName}
                          onChange={(e) => {
                            setTurfName(e.target.value);
                          }}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="opening"
                            className="block text-sm font-medium leading-6 text-gray-800"
                          >
                            Opening time
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            id="opening"
                            name="opening"
                            type="time"
                            autoComplete="opening"
                            value={opening}
                            onChange={(e) => {
                              setOpeining(e.target.value);
                            }}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="closing"
                            className="block text-sm font-medium leading-6 text-gray-800"
                          >
                            Closing time
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            id="closing"
                            name="closing"
                            type="time"
                            autoComplete="closing"
                            value={closing}
                            onChange={(e) => {
                              setClosing(e.target.value);
                            }}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="type"
                          className="block text-sm font-medium leading-6 text-gray-800"
                        >
                          Type
                        </label>
                      </div>
                      <div className="mt-1">
                        <input
                          id="type"
                          name="type"
                          type="text"
                          autoComplete="type"
                          value={turfType}
                          onChange={(e) => {
                            setType(e.target.value);
                          }}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium leading-6 text-gray-800"
                        >
                          Phone number
                        </label>
                      </div>
                      <div className="mt-1">
                        <input
                          id="phone"
                          name="phone"
                          type="number"
                          autoComplete="phone"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </>
                ) : currentSection === 2 ? (
                  <>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="street"
                          className="block text-sm font-medium leading-6 text-gray-800"
                        >
                          Street name
                        </label>
                      </div>
                      <div className="mt-1">
                        <input
                          id="street"
                          name="street"
                          type="text"
                          autoComplete="street"
                          value={street}
                          onChange={(e) => {
                            setStreet(e.target.value);
                          }}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium leading-6 text-gray-800"
                        >
                          City
                        </label>
                      </div>
                      <div className="mt-1">
                        <input
                          id="city"
                          name="city"
                          type="text"
                          autoComplete="city"
                          value={city}
                          onChange={(e) => {
                            setCity(e.target.value);
                          }}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="state"
                          className="block text-sm font-medium leading-6 text-gray-800"
                        >
                          State
                        </label>
                      </div>
                      <div className="mt-1">
                        <input
                          id="state"
                          name="state"
                          type="text"
                          autoComplete="state"
                          value={state}
                          onChange={(e) => {
                            setState(e.target.value);
                          }}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="pin"
                          className="block text-sm font-medium leading-6 text-gray-800"
                        >
                          PIN Code
                        </label>
                      </div>
                      <div className="mt-1">
                        <input
                          id="pin"
                          name="pin"
                          type="number"
                          autoComplete="pin"
                          value={pin}
                          onChange={(e) => {
                            setPin(e.target.value);
                          }}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="total"
                            className="block text-sm font-medium leading-6 text-gray-800"
                          >
                            Total amount
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            id="total"
                            name="total"
                            type="number"
                            value={total}
                            onChange={(e) => {
                              setTotal(e.target.value);
                            }}
                            autoComplete="total"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="advance"
                            className="block text-sm font-medium leading-6 text-gray-800"
                          >
                            Advance amount
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            id="advance"
                            name="advance"
                            type="number"
                            autoComplete="advance"
                            value={advance}
                            onChange={(e) => {
                              setAdvance(e.target.value);
                            }}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="file"
                        className="block text-sm font-medium leading-6 text-gray-800"
                      >
                        Upload images
                      </label>
                      <div className="mt-1">
                        <input
                          id="file"
                          name="files"
                          type="file"
                          multiple
                          onChange={uploadPhoto}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <p className="mt-1 text-sm text-gray-200">
                        Maximum file size: 5MB
                      </p>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        REGISTER
                      </button>
                    </div>
                  </>
                )}
              </form>
              <div className="form-footer flex justify-between relative mt-3">
                {currentSection > 1 && (
                  <button
                    className="form-ctl back absolute bottom-0 left-0 hover:bg-gray-500"
                    onClick={() =>
                      setCurrentSection((prevSection) => prevSection - 1)
                    }
                  >
                    Back
                  </button>
                )}
                {currentSection < 3 && (
                  <button
                    className="form-ctl next absolute bottom-0 right-0 hover:bg-gray-800"
                    onClick={() =>
                      setCurrentSection((prevSection) => prevSection + 1)
                    }
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Areg