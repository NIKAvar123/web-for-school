import "./App.css";
import img1 from "./assets/gulua.png";
import img2 from "./assets/imglemonjava.png";
import img3 from "./assets/bendeliani.png";
import img4 from "./assets/chkadua.png";
import img5 from "./assets/deforrestation.png";
import img6 from "./assets/image.png";

const slides = [
  { id: 1, src: img1, alt: "Title Slide", file: "./public/ppts/Presentation 5.pdf" },
  { id: 2, src: img2, alt: "Key Points", file: "./public/ppts/წყლის დაბინძურება 2.pdf" },
  { id: 3, src: img3, alt: "Introduction", file: "./public/ppts/ნავთობი ენერგო რესურსები 2.pdf" },
  { id: 4, src: img4, alt: "Main Sources of Pollution", file: "/ppts/ექსტრემალური კლიმატი 2.pdf" },
  { id: 5, src: img5, alt: "Effect of Fertilizers", file: "/ppts/Deforrestation 2.pdf" },
  { id: 6, src: img6, alt: "Effect of Fertilizers", file: "/ppts/Presentation1.pdf" },
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