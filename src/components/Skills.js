import meter1 from "../assets/img/react.svg";
import meter2 from "../assets/img/csharp.svg";
import meter3 from "../assets/img/javascript.svg";
import meter4 from "../assets/img/java.svg";
import meter5 from "../assets/img/dot-net.svg";
import meter6 from "../assets/img/nodejs.svg";
import meter7 from "../assets/img/git-logo.svg";
import meter9 from "../assets/img/sql.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>
                          I am really passionate about writing code, Java and C# have really caught my heart, 
                          something about their strong OOP principles and similar syntax has made them my favorites. 
                          However I also enjoy using javascript because it's really dynamic and allows you to be very
                          creative, especially when used hand in hand with it's frameworks. React is my ultimate wizardly
                          tool, the first time I built a React App I felt like a magician and NodeJS has been my undercover
                          assistant helping my wire the backend while keeping the showing going in the frontend. I am now looking into
                          learning Angular and growing more skills. 
                        </p>

                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">                           
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>C Sharp</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>.NET Framework</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Git version control</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>Microsoft SQL Server</h5>
                            </div>
                            
                        </Carousel>

                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
