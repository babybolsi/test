import "bootstrap-icons/font/bootstrap-icons.css";
import BottomBar from "../components/BottomBar";
import Profile from "../components/profile";
import Recent from "../components/Recent";
import Main from "../components/Main";

export default function Home() {
  /*<Profile nome="Carmine" immagine="https://player.sharetubeaziende.com/carmine.jpg" />*/
  return (
     
    <div className="flex flex-col h-screen">
        <div className="flex h-full">
            <div className="flex w-1/5">
                <div className="flex flex-col h-full pl-4 py-4 w-full gap-y-4 ">
                    <Profile nome="Carmine" immagine="https://cdn.pixabay.com/photo/2020/06/19/10/16/white-floral-background-5316764__340.jpg" />
                    <Recent/>
                </div>
            </div>
            <Main />
        </div>
        <BottomBar />
    </div>


  )
}
