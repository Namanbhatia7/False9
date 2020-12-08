import React, {useState, useEffect} from 'react';
import './competitionsStyles.css'
import {Carousel} from 'react-bootstrap'
import {fetchCompetitions} from '../../redux/index'
import {connect} from 'react-redux'
import plCover from '../../assets/SlideShow/plCover.png'
import laligaCover from '../../assets/SlideShow/laligaCover.png'
import fifaCover from '../../assets/SlideShow/fifaCover.png'
import uclCover from '../../assets/SlideShow/uclCover.png'
import bundesligaCover from '../../assets/SlideShow/bundesligaCover.png'
import liganosCover from '../../assets/SlideShow/liganosCover.png'
import eridiviseCover from '../../assets/SlideShow/eridiviseCover.png'
import serieaCover from '../../assets/SlideShow/serieaCover.png'
import manuCover from '../../assets/SlideShow/manuCover.png'


const Competitions = (props) => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },

    ];
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    //sideEffects

    useEffect(()=>{
        props.fetchCompetitions();
    },[])
    return (
        <div className = "competition-wrapper">
            <Carousel activeIndex={index} onSelect={handleSelect} style = {{marginTop:"72px"}}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={plCover}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Premier League 19/20</h5>
                        <p>Liverpool crowned champions of English Premier League 19/20.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={laligaCover}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h5>LaLiga</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={fifaCover}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h5>Fifa World Cup</h5>
                        <p>2018 Edition of Fifa World Cup held in Russia.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={uclCover}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h5>UEFA Champions League</h5>
                        <p>Best Teams Of Europe Compete</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bundesligaCover}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h5>Bundesliga</h5>
                        <p>The German League.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={liganosCover}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h5>Liga NOS</h5>
                        <p>Primeira Liga-Portugal</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={eridiviseCover}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h5>Eredivisie</h5>
                        <p>Netherland.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={serieaCover}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h5>Serie A</h5>
                        <p>Juventus Crowned Champions of SerieA 19/20.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={manuCover}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h5>Manchester United</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className = "comp-title-1">
                False9 currently cover 12 prestigious competiton around the Globe
                that includes All the top leagues of Europe, Brazil and FIFA World Cup.
            </div>
            <div className = "comp-cards">

            </div>
        </div>
);
};
const mapStateToProps = (state)=>{
    return {
        competitions: state.competitions
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        fetchCompetitions: () => dispatch(fetchCompetitions())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Competitions);
