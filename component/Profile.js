export default function Profile({nome,immagine}) {
    /*var sectionStyle = {
        backgroundImage: 'url("' + {immagine} + '")'
      };
      */
    return (
        <div className="flex flex-col justify-center h-48 bg-gray-400 bg-opacity-50 bg-clip-padding w-full rounded-3xl shadow-2xl" style={{backdropFilter: 'blur(20px)'}}>
            <div className="h-20 w-20 rounded-full bg-center bg-cover mt-2 mx-auto" style={{backgroundImage: 'url("'+immagine+'")'}} />
            <div>
              <p className="text-2xl font-bold text-center mt-3">Ciao {nome}</p>
            </div>
          </div>
    )
}
