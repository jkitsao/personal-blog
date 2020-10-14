import React from "react";

function Rightbar() {
  return (
    <div className="max-w-lg rounded">
      <div className="flex justify-center">
        <div className=" my-3">
          <button className=" block rounded-md bg-white p-2 focus:outline-none">
            <svg
              className="h-5 w-5 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>

          <div
            className="  mt-2 bg-white rounded-md shadow-lg  w-full "
            // style={{ width: "20rem" }}
          >
            <div className="py-2">
              <a
                href="#"
                className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
              >
                <img
                  className="h-8 w-8 rounded-full object-cover mx-1"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt="avatar"
                />
                <p className="text-gray-600 text-sm mx-2">
                  <span className="font-bold">Sara Salah</span> replied on the{" "}
                  <span className="font-bold text-blue-500">Upload Image</span>{" "}
                  artical . 2m
                </p>
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
              >
                <img
                  className="h-8 w-8 rounded-full object-cover mx-1"
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  alt="avatar"
                />
                <p className="text-gray-600 text-sm mx-2">
                  <span className="font-bold">Slick Net</span> start following
                  you . 45m
                </p>
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
              >
                <img
                  className="h-8 w-8 rounded-full object-cover mx-1"
                  src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt="avatar"
                />
                <p className="text-gray-600 text-sm mx-2">
                  <span className="font-bold" href="#">
                    Jane Doe
                  </span>{" "}
                  Like Your reply on{" "}
                  <span className="font-bold text-blue-500" href="#">
                    Test with TDD
                  </span>{" "}
                  artical . 1h
                </p>
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-3 hover:bg-gray-100 -mx-2"
              >
                <img
                  className="h-8 w-8 rounded-full object-cover mx-1"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                  alt="avatar"
                />
                <p className="text-gray-600 text-sm mx-2">
                  <span className="font-bold" href="#">
                    Abigail Bennett
                  </span>{" "}
                  start following you . 3h
                </p>
              </a>
            </div>
            <a
              href="#"
              className="block bg-gray-800 text-white text-center font-bold py-2"
            >
              See all notifications
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
