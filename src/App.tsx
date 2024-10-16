import SwiperSlider from './Components/SwiperSlider';
import './App.css';
import slide_image_1 from './assets/images/img_1.png';
import slide_image_2 from './assets/images/img_2.jpg';
import slide_image_3 from './assets/images/img_3.jpg';
import slide_image_4 from './assets/images/img_4.jpg';
import slide_image_5 from './assets/images/img_5.jpg';
import slide_image_6 from './assets/images/img_6.png';
import slide_image_7 from './assets/images/img_7.jpg';

function App() {
  const swiperItems:any[] = [
    {
      imgSrc: slide_image_1,
      title: 'Mayan Techs',
      description: 'We provide professiona services',
    },
    {
      imgSrc: slide_image_2,
      title: 'Professional Growth',
      description: 'We have the best staff',
    },
    {
      imgSrc: slide_image_3,
      title: 'Choose Mayan',
      description: 'You will receive the bes service',
    },
    {
      imgSrc: slide_image_4,
      title: 'Social Entrepreneurship',
      description: 'Read our social blog',
    },
    {
      imgSrc: slide_image_5,
      title: 'Our Clients',
      description: 'Mayan Technologies clients are always priority',
    },
    {
      imgSrc: slide_image_6,
      title: 'Mayan Technologies',
      description: 'A top service company',
    },
    {
      imgSrc: slide_image_7,
      title: 'Join us',
      description: 'We are looking for your talent to be part of Mayan Technologies',
    }
  ];

  return (
    <div className="App">
        <SwiperSlider
        swiperItems={swiperItems}
        />
    </div>
  );
}

export default App;
