import "./App.css";

function App() {
   return (
      <div className="App">
         <h1 className="title">
            Görüntü İşleme Teknolojisi ile Bariyer Transfer Otomasyonu
         </h1>
         <iframe
            src="https://www.icloud.com/keynote/09dnjVGu_NYpv0qOZbq5S4k1Q?embed=true"
            width="1400"
            height="840"
            frameborder="0"
            allowfullscreen="true"
            referrer="no-referrer"
            className="sunum"
         ></iframe>
         <div className="mainContainer">
            <img
               src={require("./qr-code.png")}
               className="qr-code"
               alt="logo"
            />

            <iframe
               width="55%"
               height="595"
               src="https://www.youtube.com/embed/q0u8B6Z7SH0"
               title="video"
               className="video"
            ></iframe>
         </div>
      </div>
   );
}

export default App;
