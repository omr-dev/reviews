import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuoteRight, faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import data from './data';
import {useState} from 'react';

function App() {
    const [person, setPerson] = useState({...data[0], index: 0});
    const loadPrePerson = () => {
        let newIndex ;
        if (person.index === 0) {
            newIndex = data.length - 1;
        } else {
            newIndex = person.index - 1;
        }
        setPerson({...data[newIndex], index: newIndex});
    };
    const loadNextPerson = () => {
        let newIndex ;
        if (person.index === data.length - 1) {
            newIndex = 0;
        } else {
            newIndex = person.index + 1;
        }
        setPerson({...data[newIndex], index: newIndex});
    };
    const loadRandomPerson=()=>{
        const lastIndex=person.index;
        let newIndex=lastIndex;
        while(newIndex===lastIndex) {
            newIndex = Math.floor(Math.random() * (data.length));
        }
        setPerson({...data[newIndex], index: newIndex});
    }

    return (
        <div className="App">
            <div className="container">
                <div className="title">
                    <h1>Our Reviews</h1>
                    <div className="underline"></div>
                </div>
                <div className="review-box">
                    <div className="person-image"><img src={person.image} alt={person.name}/>
                        <div className="blue-frame"></div>
                        <div className="icon-background"><FontAwesomeIcon icon={faQuoteRight}/></div>
                    </div>
                    <div className="person-name"><h4>{person.name}</h4></div>
                    <div className="person-title"><p>{person.job}</p></div>
                    <div className="person-comment"><p>{person.text}</p></div>
                    <div className="nav-arrows">
                        <FontAwesomeIcon icon={faChevronLeft} onClick={loadPrePerson} className="arrow left-arrow"/>
                        <FontAwesomeIcon icon={faChevronRight} onClick={loadNextPerson} className="arrow right-arrow"/>
                    </div>
                    <div className="surprise-btn">
                        <button onClick={loadRandomPerson}>Surprise Me</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
