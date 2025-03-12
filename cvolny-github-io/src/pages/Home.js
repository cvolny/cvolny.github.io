import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { ReactTyped } from "react-typed";
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

const TimeoutTyped = ({typing, setTyping, timeoutDelay, cursorChar}) => {
  if (typing) {
    return <ReactTyped
      strings={["Hello World!"]}
      typeSpeed={125}
      cursorChar={cursorChar}
      showCursor={true}
      onComplete={() => setTimeout(() => setTyping(false), timeoutDelay)}
    />;
  } else {
    return <>
      Hello World!<span className="typed-cursor opacity-75" aria-hidden={true}>{cursorChar}</span>
    </>;
  }
};

const Home = () => {
  let [ typing, setTyping ] = useState(true);
  return (
    <Container className="pt-4">
      <Row>
        <Col xs="12" md="8">
          <header>
            <h1>Cupcake Christi Volny <small>(she/her)</small></h1>
          </header>
          <div className="alert alert-light m-5 border p-3">
            <kbd className="h3 text-white" id="hello-world-kbd">
              <TimeoutTyped
                typing={typing}
                setTyping={setTyping}
                timeoutDelay={10000}
                cursorChar="█"
              />
            </kbd>
            <button type="button" className="btn-close float-end" data-bs-dismiss="alert"></button>
            <blockquote className="mt-3 mb-1 font-monospace">
              And with the invocation of the sacred words,<br />
              the ancient spell written since time immomorial,<br />
              Cupcake spake a web homepage into existence.
            </blockquote>
          </div>

          <div id="about" className="my-3">
            <p>Cupcake is a life-long student (polymath) with a diverse history of student, community, and political
              involvement; an electronic musician / producer; a digital effects and photography artist; and finally a career
              security engineer with strong opinions on effective design and maintainable architecture.</p>
          </div>
        </Col>
        <Col xs="12" md="4">
          <Image
            thumbnail
            src="/pages/cvolny-avatar-pink.jpg"
            alt="A picture of Cupcake in pink."
            />
        </Col>
      </Row>
    </Container>
  );
};

  export default Home;
