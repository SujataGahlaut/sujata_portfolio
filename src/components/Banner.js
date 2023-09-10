import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Student","Web Developer", "C++ Coder" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta); 
    return () => { clearInterval(ticker) };
  }, [text])
  

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);
    
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Sujata Gahlaut`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Student","Web Developer", "C++ Coder" ]'><span className="wrap">{text}</span></span></h1>
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                  <p>Hello! , currently pursuing a Bachelor of Science in Computer Science (Honors). With a strong passion for computer science, I am driven by the ability to create innovative solutions and overcome challenges through programming. I have a solid foundation in languages like  C++ and Javascript , along with experience in database management ,Web development frameworks. Through practical projects, I have honed my skills in these domains . Thank you for visiting my portfolio, and I'm excited to explore potential collaborations and opportunities in computer science..</p>
                  {/* <p>Computer, Data Science, and Programming student, with a holistic knowledge of tech, coding, design, and development. Always working to make a significant contribution to the team and towards a better tomorrow. Dreaming to work positively towards societal development and for personal growth. Constantly longing for exciting & meaningful challenges. Highly ethical, dependable, and dedicated.</p> */}
                 <a href="#connect" style={{textDecoration:"none"}}> <button onClick={() => console.log('connect') }>Let’s Connect <ArrowRightCircle size={25} /></button></a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
            {/* <TrackVisibility>: This is a wrapper component that takes another 
            component as its child and provides a prop called isVisible
             to that child component. The child component can access this 
             isVisible prop to determine whether it is currently visible on the screen.

          ({ isVisible }) => ...: This is a function that receives the 
          isVisible prop as an argument using destructuring. 
          It's a render prop (a function passed as a child) that allows you to access the isVisible prop's value. */}
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className={"img1"} src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
