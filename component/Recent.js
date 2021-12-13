export default function Recent() {
    return (
        <div className="flex h-full bg-gray-400 bg-opacity-50 bg-clip-padding rounded-3xl shadow-2xl w-full " style={{backdropFilter: 'blur(20px)'}}>
            <div className="flex flex-col mt-5 ml-5 mr-6 h-full w-full">
              <div className="flex">
                <p className="text-xl font-bold mb-2">Brani Recenti</p>
              </div>
              <div className="flex flex-col w-full">
                <div className="overflow-y-scroll h-[13.5rem] test:h-[25.5rem]">
                  <div className="flex mt-2">
                    <a href="fini" className="flex">
                      <img src="https://images.genius.com/0b1ea0f42688c71f247b677f78d22589.1000x1000x1.jpg" className="w-16 rounded" />
                      <p className="text-lg ml-3 font-semibold truncate w-60">Mr Fini <br /><span className="text-sm text-gray-700">Gue </span></p>
                    </a>
                  </div>
                  <div className="flex mt-2">
                    <a href="santeria" className="flex">
                      <img src="https://i.scdn.co/image/ab67616d00001e02fcdb056319eddf6f6f4b20da" className="w-16 rounded" />
                      <p className="text-lg ml-3 font-semibold truncate w-60">Santeria <br /><span className="text-sm text-gray-700">Gue, Marracash</span></p>
                    </a>
                  </div>
                  <div className="flex mt-2">
                    <img src="https://i.scdn.co/image/ab67616d00001e02be49b47845a3d26b09d564da" className="w-16 rounded" />
                    <p className="text-lg ml-3 font-semibold truncate w-60">Vero <br /><span className="text-sm text-gray-700">Gue</span></p>
                  </div>
                  <div className="flex mt-2">
                    <img src="https://i.scdn.co/image/ab67616d00001e02cb1d4deb6d96ba3f8eb20f4f" className="w-16 rounded" />
                    <p className="text-lg ml-3 font-semibold truncate w-60">Siamo Qui <br /><span className="text-sm text-gray-700">Bolsi</span></p>
                  </div>
                  <div className="flex mt-2">
                    <img src="https://images.genius.com/0b1ea0f42688c71f247b677f78d22589.1000x1000x1.jpg" className="w-16 rounded" />
                    <p className="text-lg ml-3 font-semibold truncate w-60">Mr Fini <br /><span className="text-sm text-gray-700">Gue</span></p>
                  </div>
                  <div className="flex mt-2">
                    <img src="https://i.scdn.co/image/ab67616d00001e02fcdb056319eddf6f6f4b20da" className="w-16 rounded" />
                    <p className="text-lg ml-3 font-semibold truncate w-60">Santeria <br /><span className="text-sm text-gray-700">Gue, Marracash</span></p>
                  </div>
                  <div className="flex mt-2">
                    <img src="https://i.scdn.co/image/ab67616d00001e02fcdb056319eddf6f6f4b20da" className="w-16 rounded" />
                    <p className="text-lg ml-3 font-semibold truncate w-60">Santeria <br /><span className="text-sm text-gray-700">Gue, Marracash</span></p>
                  </div>
                  
                </div>
              </div>
              <div className="flex justify-center text-center mt-6 w-full">
                <a href="#" className="py-2 px-4 flex justify-center items-center bg-[#8b5cf6] hover:bg-purple-600  text-white w-full transition ease-in duration-200 text-center text-lg font-semibold shadow-xl rounded-xl ">
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-heart-fill mr-2" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                  </svg>
                  Brani Preferiti
                </a>
              </div>
              <div className="flex justify-center text-center mt-2 w-full">
                <a className="text-lg font-semibold rounded-xl bg-gray-200 w-full p-2 shadow-xl hover:bg-gray-300" href="#">Logout</a>
              </div>
            </div>
          </div>
    )
}
