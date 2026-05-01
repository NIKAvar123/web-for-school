import "./App.css";
import img1 from "./assets/gulua.png";


const slides = [
  { id: 1, src: img1, alt: "Title Slide", file: "./public/ppts/Presentation 5.pdf" },

];

function App() {
  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="slides-container">
      {slides.map((slide) => (
        <div key={slide.id} className="slide">
          <img
            src={slide.src}
            alt={slide.alt}
            className="slide-img"
            onClick={() => handleDownload(slide.file)}
            style={{ cursor: "pointer" }}
          />
        </div>
      ))}
    </div>
  );
}

export default App;