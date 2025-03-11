import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

const ExternalLink = ({href, children}) => {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            {children}
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-up-right-square mx-1 mb-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"/>
            </svg>
        </a>
    );
}

const TalksAndProjects = () => {
    return (
      <div className="container pt-4">
        <header className="h1">
            Talks, Publications, and Projects
        </header>

        <div id="brief" className="my-3">
          <p>I love designing and tackling projects and presenting my findings to peers. I've grown into my quirky, queer self, I've especially recognized the imporantance of people like me (transgender, gay, and on the spectrum) being visible in leadership and speaking roles. If I saw more people like me giving talks and leading teams earlier in my career, I think I would have felt more comfortable being myself and bringing my all to my craft.</p>

          <h2>Talks and Publications</h2>
          <ListGroup className="list-group-bulleted list-group-flush">
            <ListGroup.Item>
                <ExternalLink href="https://duo.com/blog/building-inclusive-culture-empowered-lgbtq-plus-future">
                    Pride and Processes: Building an Inclusive Culture and an Empowered LGBTQ+ Future
                </ExternalLink>; Duo Blog, June 2023
            </ListGroup.Item>
            <ListGroup.Item>
                <ExternalLink href="https://penguicon2023.sched.com/event/1KZdW">
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
                <ExternalLink href="https://link.springer.com/chapter/10.1007/978-3-031-17114-7_15">
                    Counteracting Filter Bubbles with Homophily-aware Link Recommendations
                </ExternalLink>; SBP-BRiMS 2022
            </ListGroup.Item>
            <ListGroup.Item>
                <ExternalLink href="https://www.youtube.com/watch?v=oJd6lhF0JbI">
                    Advance Python Typing: TypeVars, Generics, and Protocols
                </ExternalLink>; PyOhio, 2022-07
            </ListGroup.Item>
            <ListGroup.Item>
                <ExternalLink href="https://drive.google.com/drive/folders/1_py70JhoBGNM9lqgcx8QIvU-NmyExYkd?usp=sharing">
                    OIDC, OAuth, SAML, and SSO: Decoding the Identity and Access Alphabet Soup
                </ExternalLink>; Penguicon, 2022-04
            </ListGroup.Item>
            <ListGroup.Item>
                <Accordion flush className="accordion-nostyle">
                    <Accordion.Header>
                        Passwords are Dead (password history, fido2, webauthn, custom Django/React modules); Multiple
                    </Accordion.Header>
                    <Accordion.Body>
                        <ListGroup className="list-group-flush small" horizontal>
                            <ListGroup.Item>
                                <ExternalLink href="https://www.brighttalk.com/webcast/10415/524569">
                                    Cloud Security Alliance, 2022-01
                                </ExternalLink>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <ExternalLink href="https://www.youtube.com/watch?v=JAO6CniUtaU">
                                    Ohio LinuxFest, 2021-12
                                </ExternalLink>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <ExternalLink href="https://drive.google.com/drive/folders/15stGS__gzKqwpjIN5ublibmS3Wkh_pnw?usp=sharing">
                                    Penguicon, 2021-04
                                </ExternalLink>
                            </ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                    </Accordion>
            </ListGroup.Item>
          </ListGroup>

          <h2 className="mt-2">Projects</h2>
          <p>More coming soon! For now visit <ExternalLink href="https://github.com/cvolny?tab=repositories">my github repositories</ExternalLink>.</p>
        </div>
      </div>
    );
  };

  export default TalksAndProjects;
