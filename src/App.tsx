import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuoteRight, faChevronRight,faChevronLeft} from '@fortawesome/free-solid-svg-icons';

function App() {

    return (
        <div className="App">
            <div className="container">
                <div className="title">
                    <h1>Our Reviews</h1>
                    <div className="underline"></div>
                </div>
                <div className="review-box">
                    <div className="person-image"><img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg" alt="Susan Smith"/><div className="blue-frame"></div><div className="icon-background"><FontAwesomeIcon icon={faQuoteRight}/></div></div>
                    <div className="person-name"><h4>peter jones</h4></div>
                    <div className="person-title"><p>intern</p></div>
                    <div className="person-comment"><p>Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing
                        swag.</p></div>
                    <div className="nav-arrows">
                        <FontAwesomeIcon icon={faChevronLeft} />
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </div>
                    <div className="surprise-btn">
                        <button>Surprise Me</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
