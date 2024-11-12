import React from 'react';
import '../style/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faStickyNote, faListCheck, faClock, faKey, faRuler, faCloud, faPercentage, faTags,faQrcode,faCalendar,faBirthdayCake,faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const cardsData = [
    { id: 1, icon: faWhatsapp, word: 'Whatsapp direct', link: '/Watt' },
    { id: 2, icon: faCalculator, word: 'BMI Calculator', link: '/Bmi' },
    { id: 3, icon: faStickyNote, word: 'Quick notes', link: '/Notes' },
    { id: 4, icon: faListCheck, word: 'To do list', link: '/Todolist' },
    { id: 5, icon: faClock, word: 'Stopwatch', link: '/Stopwatch' },
    { id: 6, icon: faKey, word: 'Password Generator', link: '/Password' },
    { id: 7, icon: faRuler, word: 'Unit Converter', link: '/Unit' },
    { id: 8, icon: faCloud, word: 'Weather', link: '/Weather' },
    { id: 9, icon: faPercentage, word: 'Percentage Calculator', link: '/Percentage' },
    { id: 10, icon: faTags, word: 'Discount Calculator', link: '/Discount' },
    { id: 11, icon: faQrcode, word: 'QRcode generator' ,link:'/Qrcode'},
    { id: 12, icon: faCalendar, word: 'Leapyear Calculator' ,link:'/Leapyear'},
    { id: 13, icon: faBirthdayCake, word: 'Age Calculator' ,link:'/Agecalculator'},
    { id: 14, icon: faCalculator, word: 'Calculator' ,link:'/Calculator'},
    { id: 15, icon: faHashtag, word: 'Text to Binary' ,link:'/Binary'},
  ];

  return (
      <div className="home_main">
      <div className="card-container">
        {cardsData.map(card => (
          <a key={card.id} href={card.link} className="card">
            <FontAwesomeIcon icon={card.icon} size="3x" />
            <p className='home-word'>{card.word}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
