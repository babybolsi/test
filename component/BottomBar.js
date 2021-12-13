export default function BottomBar() {
    return (
        <div className="flex h-28">
            <div className="flex pb-4 px-4 w-full h-full">
                <div className="flex rounded-3xl w-full h-full shadow-2xl bg-gray-400 bg-opacity-50 bg-clip-padding" style={{backdropFilter: 'blur(20px)'}}>
                <div className="flex w-full my-2 mx-5">
                    <div className="flex w-3/12">
                    <img className="rounded w-16 h-auto" src="https://images.genius.com/0b1ea0f42688c71f247b677f78d22589.1000x1000x1.jpg" />
                    <p className="ml-3 text-lg font-semibold">Mr Fini<br /><span className="text-sm text-gray-700">Gue</span></p>
                    </div>
                    <div className="flex w-7/12 mt-2">
                    <div className="flex flex-col w-full">
                        <div className="flex justify-center text-center w-full">
                        <a href="#" className="text-lg mt-1"><i className="bi bi-skip-start-circle text-3xl" /></a>
                        <a href="#" className="text-lg mx-2"><i className="bi bi-play-circle text-4xl" /></a>
                        <a href="#" className="text-lg mt-1"><i className="bi bi-skip-end-circle text-3xl" /></a>
                        </div>
                        <div className="flex w-10/12 mx-auto h-1 bg-black rounded-full mt-3">
                        </div>
                    </div>
                    </div>
                    <div className="flex w-2/12">
                    <div className="flex w-full ml-8 mt-1">
                        <div className="flex mt-4">
                        <a href="#"><i className="bi bi-volume-down-fill text-3xl" /></a>
                        </div>
                        <div className="flex mt-7 w-6/12 h-1 bg-black rounded-full">
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
