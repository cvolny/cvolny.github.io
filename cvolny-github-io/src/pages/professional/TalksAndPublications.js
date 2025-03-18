import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { ExternalLink, LightboxImage } from '../../Util';


const TalksAndPublications = () => {
    return (
      <Container className="pt-4">
        <header>
            <h1>Talks and Publications</h1>
        </header>

        <div id="brief" className="my-3">
          <p>I love designing and tackling projects and presenting my findings to peers. I've grown into my quirky, queer self, I've especially recognized the imporantance of people like me (transgender, gay, and on the spectrum) being visible in leadership and speaking roles. If I saw more people like me giving talks and leading teams earlier in my career, I think I would have felt more comfortable being myself and bringing my all to my craft.</p>
        </div>

        <Container id="publications" className="my-3">
          <h2>Publications</h2>
          <Row>
            <Col xs={12} md={8}>
              <ListGroup className="list-group-bulleted list-group-flush item-ml-1">
                <ListGroup.Item>
                  <ExternalLink href="https://duo.com/blog/building-inclusive-culture-empowered-lgbtq-plus-future">
                    Pride and Processes: Building an Inclusive Culture and an Empowered LGBTQ+ Future
                  </ExternalLink>; Duo Blog, June 2023
                </ListGroup.Item>
                <ListGroup.Item>
                  <ExternalLink href="https://link.springer.com/chapter/10.1007/978-3-031-17114-7_15">
                    Counteracting Filter Bubbles with Homophily-aware Link Recommendations
                  </ExternalLink>; SBP-BRiMS 2022
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={12} md={4} className="container my-2">
              <Row>
                <Col xs="1">
                  <svg
                    className="d-block-inline"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 56 62"
                    style={{width: "1.5rem", height: "1.5rem"}}
                  >
                    <path fill="#fff" d="M0 0h55.8v62H0z"></path>
                    <path fill="#56ae3b" d="M0 0v30.5L28 47V0H0z"></path>
                    <path fill="#5dc339" d="M56 0v30.3L28 46.9V0h28z"></path>
                    <path fill="#498040" d="M0 30.3V62l28-15.1L0 30.3z"></path>
                    <path fill="#8ed176" d="M56 30.3V62L28 46.9l28-16.6z"></path>
                    <path fill="#1f2b3a" d="M0 62h28V46.9L0 62z"></path>
                  </svg>
                </Col>
                <Col xs="11">
                  <blockquote className="duo-quote container">
                    "Our systems, processes and technologies wield significant influence over our day-to-day lives.
                    They can codify and perpetuate existing biases and cultures of oppression,
                    or they can be retooled to empower and include previously excluded experiences."
                  </blockquote>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container id="talks" className="my-3">
          <h2>Talks</h2>
          <Row>
            <Col xs={12} md="9">
              <ListGroup className="list-group-bulleted list-group-flush item-ml-1">
              <ListGroup.Item>
                <ExternalLink
                  href="https://penguicon2023.sched.com/event/1KZdW"
                  id="python-at-enterprise-scale"
                >
                  Python Software Development at Enterprise Scale
                </ExternalLink>; Penguicon, April 2023
              </ListGroup.Item>
              <ListGroup.Item>
                <ExternalLink href="https://penguicon2023.sched.com/event/1KZdH">
                  Python with Typing: Disambiguate the Chaos
                </ExternalLink>; Penguicon, April 2023
              </ListGroup.Item>
              <ListGroup.Item>
                <ExternalLink href="https://penguicon2023.sched.com/event/1KZdS">
                  Modernizing Cloud Security - OIDC, Cryptographic Passkeys, and the Future of CloudSec
                </ExternalLink>; Penguicon, April 2023
              </ListGroup.Item>
              <ListGroup.Item>
                <ExternalLink href="https://www.youtube.com/watch?v=oJd6lhF0JbI">
                  Advance Python Typing: TypeVars, Generics, and Protocols
                </ExternalLink>; PyOhio, 2022-07
              </ListGroup.Item>
              <ListGroup.Item>
                <ExternalLink
                  href="https://drive.google.com/drive/folders/1_py70JhoBGNM9lqgcx8QIvU-NmyExYkd?usp=sharing"
                >
                  OIDC, OAuth, SAML, and SSO: Decoding the Identity and Access Alphabet Soup
                </ExternalLink>; Penguicon, 2022-04
              </ListGroup.Item>
              <ListGroup.Item>
                Passwords are Dead (password history, fido2, webauthn, custom Django/React modules); Multiple
                <ListGroup className="list-group-flush small" horizontal>
                  <ListGroup.Item>
                    <ExternalLink href="https://www.brighttalk.com/webcast/10415/524569">
                      Cloud Security Alliance, 2022-01
                    </ExternalLink>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <ExternalLink
                      href="https://www.youtube.com/watch?v=JAO6CniUtaU"
                      id="passwords-dead-olf21"
                    >
                      Ohio LinuxFest, 2021-12
                    </ExternalLink>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <ExternalLink
                      href="https://drive.google.com/drive/folders/15stGS__gzKqwpjIN5ublibmS3Wkh_pnw?usp=sharing"
                    >
                      Penguicon, 2021-04
                    </ExternalLink>
                  </ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={12} md={3}>
              <LightboxImage
                srcThumb="/pages/professional/talks_and_publications/python-at-enterprise-scale-slide-small.png"
                srcFullsize="/pages/professional/talks_and_publications/python-at-enterprise-scale-slide.png"
                altText="A slide from my Python at Enterprise Scale talk at Penguicon 2023 discussing Common Coupling vs Cohesion in software Architecture."
              >
                Slide from my Python Software Development at Enterprise Scale talk at Penguicon 2023.
              </LightboxImage>
              <LightboxImage
                srcThumb="/pages/professional/talks_and_publications/passwords-are-dead-olf21-capture-small.png"
                srcFullsize="/pages/professional/talks_and_publications/passwords-are-dead-olf21-capture.png"
                altText="A capture from the vidcast of my Ohio LinuxFest 2021 talk Passwords are Dead."
              >
                Telecast screenshot from my Passwords are Dead / WebAuthn talk at Ohio LinuxFest 2021.
              </LightboxImage>
            </Col>
          </Row>

        </Container>

        <div id="see_also">
          <p>
            Many of these talks reference or discuss some of my larger projects.
            If you're interested in seeing the source code or technical descriptions of those work,
            check those out on the <a href="#/professional/projects">Projects</a> page!
          </p>
        </div>
      </Container>
    );
  };

  export default TalksAndPublications;
