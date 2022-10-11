import React, { Component } from "react";
import image from "../../../public/images/image-interactive.jpg";
import deepEarth from "../../../public/images/image-deep-earth.jpg";
import curiosity from "../../../public/images/image-curiosity.jpg";
import fisheye from "../../../public/images/image-fisheye.jpg";
import fromAbove from "../../../public/images/image-from-above.jpg";
import grid from "../../../public/images/image-grid.jpg";
import nightArcade from "../../../public/images/image-night-arcade.jpg";
import pocketBorealis from "../../../public/images/image-pocket-borealis.jpg";
import soccerTeam from "../../../public/images/image-soccer-team.jpg";


class Main extends Component {

  cardsList = [{
    photo:[{curiosity},{deepEarth},{fisheye},{fromAbove}, {grid}, {nightArcade}, {pocketBorealis}, {soccerTeam}],
    },
    { 
    text:[" THE CURIOSITY", "DEEP EARTH", "FISHE EYE", "FROM ABOVE", "GRID", "NIGTH ARCADE", "POCKET BOREALIS", "SOCCER TEAM"],
    }];
                

  render() {
    return (
      <main className="main">
        <div className="main__container container">
          <img src={image} className="main__image" alt="image" />
          <div className="main__content">
            <h2>THE LEADER IN INTERACTIVE VR</h2>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
       
        <section className="cards container">
          <div className="cards-header">
            <h2 className="cards-title">OUR CREATIONS</h2>
            <button className="button">SEE ALL</button>            
          </div>
          <div className="cards-grid">
            <div className="cards__grid deep-earth"><h3 className="cards__grid-title">DEEP EARTH</h3><img src={deepEarth} className="main__image"></img>
              
            </div>
            <div className="cards__grid night-arcade"><h3 className="cards__grid-title">NIGHT ARCADE</h3><img src={nightArcade} className="main__image"></img>
              
            </div>
            <div className="cards__grid soccer-team-vr"><h3 className="cards__grid-title">SOCCER TEAM VR</h3><img src={soccerTeam} className="main__image"></img>
              
            </div>
            <div className="cards__grid the-grid"><h3 className="cards__grid-title">THE GRID</h3><img src={grid} className="main__image"></img>
              
            </div>
            <div className="cards__grid from-up-above-vr"><h3 className="cards__grid-title">FROM UP ABOVE VR</h3><img src={fromAbove} className="main__image"></img>
              
            </div>
            <div className="cards__grid pocket-borealis"><h3 className="cards__grid-title">POCKET BOREALIS</h3><img src={pocketBorealis} className="main__image"></img>
              
            </div>
            <div className="cards__grid the-curiosity"><h3 className="cards__grid-title">THE CURIOSITY</h3><img src={curiosity} className="main__image"></img>
              
            </div>
            <div className="cards__grid make-it-fisheye"><h3 className="cards__grid-title">MAKE IT FISHEYE</h3><img src={fisheye} className="main__image"></img>
              
            </div>
          </div>
        </section>     

      </main>
    );
  }
}

export default Main;
