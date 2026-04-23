import './App.css';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img6 from './assets/img6.png';
import img7 from './assets/img7.png';
import img8 from './assets/img8.png';
import img9 from './assets/img9.png';
import img10 from './assets/img10.png';


const slides = [
  { id: 1, src: img1, alt: 'Title Slide' },
  { id: 2, src: img2, alt: 'Key Points' },
  { id: 3, src: img3, alt: 'Introduction' },
  { id: 4, src: img4, alt: 'Main Sources of Pollution' },
  { id: 5, src: img5, alt: 'Effect of Fertilizers' },
  { id: 6, src: img6, alt: 'Plastic Pollution' },
  { id: 7, src: img7, alt: 'Impact on Biodiversity' },
  { id: 8, src: img8, alt: 'Effects on Marine Life' },
  { id: 9, src: img9, alt: 'Aquatic Plants & Oxygen' },
  { id: 10, src: img10, alt: 'Conclusion' },
];

function App() { 
  return (
    <div className="slides-container">
      {slides.map(slide => (
        <div key={slide.id} className="slide">
          <img src={slide.src} alt={slide.alt} className="slide-img" />
        </div>
      ))}
    </div>
  );
}

export default App;
