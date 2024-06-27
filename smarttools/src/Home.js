import React from 'react';
import './home.css';
import image2 from './asserts/bmi.jpeg';
import image3 from './asserts/qrcode.jpeg';
import image4 from './asserts/calculator.jpeg';
import image5 from './asserts/age.jpeg';
import image6 from './asserts/leap.jpeg';
import image7 from './asserts/notes.jpeg';
import image8 from './asserts/todo.jpeg';
import image9 from './asserts/stop.jpeg';
import image10 from './asserts/pass.jpeg';
import image11 from './asserts/unit.jpeg';
import image12 from './asserts/binary.jpeg';
import image13 from './asserts/weather.jpeg';
import image14 from './asserts/percentage.jpeg';
import image15 from './asserts/dis.jpeg';



const Home = () => {
  const cardsData = [
    { id: 1, image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", word: 'Wattsapp direct' ,link:'/Watt'},
    { id: 2, image: image2, word: 'Bmi Calculator' ,link:'/Bmi'},
    { id: 3, image: image3, word: 'QRcode generator' ,link:'/Qrcode'},
    { id: 4, image: image4, word: 'Calculator' ,link:'/Calculator'},
    { id: 5, image: image5, word: 'Age Calculator' ,link:'/Agecalculator'},
    { id: 6, image: image6, word: 'Leapyear Calculator' ,link:'/Leapyear'},
    { id: 7, image: image7, word: 'Quick notes' ,link:'/Notes'},
    { id: 8, image: image8, word: 'To do list' ,link:'/Todolist'},
    { id: 9, image: image9, word: 'stopwatch' ,link:'/Stopwatch'},
    { id: 10, image: image10, word: 'password generator' ,link:'/Password'},
    { id: 11, image: image11, word: 'unit convertor' ,link:'/Unit'},
    { id: 12, image: image12, word: 'Text to Binary' ,link:'/Binary'},
    { id: 13, image: image13, word: 'weather' ,link:'/Weather'},
    { id: 14, image: image14, word: 'Percentage calculator' ,link:'/Percentage'},
    { id: 15, image: image15, word: 'Discount calculator' ,link:'/Discount'}
  ];

  return (
    <div className="home">
      <h1 className='home-head'><span className='home-smart'>smart</span>tools</h1>
      <div className="card-container">
        {cardsData.map(card => (
          <a key={card.id} href={card.link} className="card">
            <img src={card.image} alt={card.word} />
            <p className='home-word'>{card.word}</p>
          </a>
        ))}
      </div>
      <p className='home-footer'> <span>&copy;</span> skylight 2024</p>
    </div>
  );
};

export default Home;