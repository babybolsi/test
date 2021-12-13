export default function Main() {
    return (
        <div className="flex w-4/5">
        <div className="flex w-full h-full py-4 px-4">
          <div className="w-full h-full rounded-3xl bg-gray-400 bg-opacity-50 bg-clip-padding shadow-2xl " style={{backdropFilter: 'blur(20px)'}}>
            <div className="flex flex-col gap-y-2 justify-center mx-8">
              <div className="flex w-full justify-between">
                <div className="order-1 mt-5 w-24">
                </div>
                <p className="text-4xl font-bold mt-5 order-2">Music Hub CC</p>
                <div className="order-last">
                  <form className="flex">
                    <input type="text" className="mt-5 py-2 px-3 rounded-full bg-white bg-opacity-60 placeholder-gray-800  border-0  focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent" placeholder="Cerca..." />
                  </form>
                </div>
              </div>
              <div className="flex">
                <p className="text-xl font-semibold mt-2">Esplora</p>
              </div>
              <div className="flex h-44 test:h-52 gap-3 overflow-x-scroll overflow-y-hidden scrollbar-hide">
                <div className="flex flex-col flex-shrink-0">
                  <img className="h-4/6 test:h-4/6 rounded" src="https://images.genius.com/0b1ea0f42688c71f247b677f78d22589.1000x1000x1.jpg" /> 
                  <p className="text-md font-semibold mt-1">Mr Fini <br /><span className="text-sm text-gray-700">Gue</span></p>
                </div>
                <div className="flex flex-col flex-shrink-0">
                  <img className="h-4/6 test:h-4/6 rounded" src="https://i.scdn.co/image/ab67616d00001e02fcdb056319eddf6f6f4b20da" /> 
                  <p className="text-md font-semibold mt-1">Santeria <br /><span className="text-sm text-gray-700">Gue, Marracash</span></p>
                </div>
                <div className="flex flex-col flex-shrink-0">
                  <img className="h-4/6 test:h-4/6 rounded" src="https://i.scdn.co/image/ab67616d00001e02be49b47845a3d26b09d564da" /> 
                  <p className="text-md font-semibold mt-1">Vero <br /><span className="text-sm text-gray-700">Gue</span></p>
                </div>
                <div className="flex flex-col flex-shrink-0">
                  <img className="h-4/6 test:h-4/6 rounded" src="https://i.scdn.co/image/ab67616d00001e02cb1d4deb6d96ba3f8eb20f4f" /> 
                  <p className="text-md font-semibold mt-1">Siamo Qui <br /><span className="text-sm text-gray-700">Bolsi</span></p>
                </div>
                <div className="flex flex-col flex-shrink-0">
                  <img className="h-4/6 test:h-4/6 rounded" src="https://i.scdn.co/image/ab67616d00001e02fcdb056319eddf6f6f4b20da" /> 
                  <p className="text-md font-semibold mt-1">Santeria <br /><span className="text-sm text-gray-700">Gue, Marracash</span></p>
                </div>
                <div className="flex flex-col flex-shrink-0">
                  <img className="h-4/6 test:h-4/6 rounded" src="https://images.genius.com/0b1ea0f42688c71f247b677f78d22589.1000x1000x1.jpg" /> 
                  <p className="text-md font-semibold mt-1">Titoletto <br /><span className="text-sm text-gray-700">Gue</span></p>
                </div>
                <div className="flex flex-col flex-shrink-0">
                  <img className="h-4/6 test:h-4/6 rounded" src="https://i.scdn.co/image/ab67616d00001e02be49b47845a3d26b09d564da" /> 
                  <p className="text-md font-semibold mt-1">Vero <br /><span className="text-sm text-gray-700">Gue</span></p>
                </div>
                <div className="flex flex-col flex-shrink-0">
                  <img className="h-4/6 test:h-4/6 rounded" src="https://i.scdn.co/image/ab67616d00001e02cb1d4deb6d96ba3f8eb20f4f" /> 
                  <p className="text-md font-semibold mt-1">Siamo Qui <br /><span className="text-sm text-gray-700">Bolsi</span></p>
                </div>
                <div className="flex flex-col flex-shrink-0">
                  <img className="h-4/6 test:h-4/6 rounded" src="https://images.genius.com/0b1ea0f42688c71f247b677f78d22589.1000x1000x1.jpg" /> 
                  <p className="text-md font-semibold mt-1">Titoletto <br /><span className="text-sm text-gray-700">Gue</span></p>
                </div>
                <div className="flex flex-col flex-shrink-0">
                  <img className="h-4/6 test:h-4/6 rounded" src="https://images.genius.com/0b1ea0f42688c71f247b677f78d22589.1000x1000x1.jpg" /> 
                  <p className="text-md font-semibold mt-1">Titoletto <br /><span className="text-sm text-gray-700">Gue</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
