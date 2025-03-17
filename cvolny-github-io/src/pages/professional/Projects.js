import Col from 'react-bootstrap/Col';
import { ExternalLink, LightboxImage } from '../../Util';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

const Projects = () => {
    return (
      <div className="container pt-4">
        <header>
            <h1>Projects</h1>
        </header>

        <Container id="thevolny-net-ghpages" className="my-3 project-section" fluid>
          <h2 className="project-title">
            www.thevolny.net{' '}
            <small>(React on GitHub Pages)</small>
          </h2>
          <Row>
            <Col xs="12" md="8" className="project-description">
              <p>
                This is my living portfolio site to showcase some of my professional, musical, and social
                work from the last few years. I don't / can't use this to talk about all of the work I've
                done over the course of my career (some of it is strictly NDAed), but I get to talk about
                some cool technical highlights/accomplishments while also writing some cool interactive
                views and tutorials.
              </p>
              <p>
                This is a functional-React SPA, using React Router BrowserRouter (<ExternalLink
                href="https://github.com/rafgraph/spa-github-pages">with some redirect hacks</ExternalLink>
                to make it function on GitHub Pages), and React-Bootstrap (bootstrap 5.3) for styling.
                Publishing updates is managed by <ExternalLink href="https://www.npmjs.com/package/gh-pages">
                npm ghpages module</ExternalLink> to make things extra easy.
              </p>
            </Col>
            <Col xs="12" md="4">
              <LightboxImage
                srcThumb="/pages/professional/projects/thevolny-net-ghpages-small.png"
                srcFullsize="/pages/professional/projects/thevolny-net-ghpages.png"
                altText=""
              ></LightboxImage>
              <p className="project-github-repo-link m-3">
                <ExternalLink href="https://github.com/cvolny/cvolny.github.io">
                  cvolny.github.io on GitHub
                </ExternalLink>
              </p>
            </Col>
          </Row>
        </Container>


        <Container id="django-restauthn" className="my-3 project-section" fluid>
          <h2 className="project-title">
            Django RestAuthn{' '}
            <small>(Django RestFramework + WebAuthn)</small>
          </h2>
          <Row>
            <Col xs="12" md="8" className="project-description">
              <p>
                This Django module was a proof-of-concept of implementing the FIDO2 Web Authentication (WebAuthn) schema from
                specification into the Django Python Web Framework as part of my term project in a graduate-level Cyber-Security
                course. I chose to follow the spec explicitly and used CBOR encoding for transport, but also provided base64
                encoders and renderers to make using the RestFramework API View easier to use.
              </p>
              <p>
                This project added two authentication models: An authenticator (representes your yubikey/etc) and a LoginToken
                (think a password reset code). The LoginToken solved the first-authentication/user-registration flow problem
                while the authenticator model stored the necessary details and authentication counter (for token duplication
                detection) for the server to generate a challenge and authenticate the response to authenticate the FIDO2
                token on the client-end.
              </p>
              <p>
                This could be used in a fully-passwordless or as part of a multi-factor authentication scheme and which to use
                is discussed further in my Ohio LinuxFest talk under Design Considerations.
              </p>
            </Col>
            <Col xs="12" md="4">
              <LightboxImage
                srcThumb="/pages/professional/projects/django-restauthn-api-view-small.png"
                srcFullsize="/pages/professional/projects/django-restauthn-api-view.png"
                altText="A screenshot showing the base64 encoded pre-login challenge returned in the Django RestFramework API View."
              >A WebAuthn "pre-login" challenge rendered in the RestFramework API View.</LightboxImage>
              <p className="project-github-repo-link m-3">
                <ExternalLink href="https://github.com/cvolny/django-restauthn">
                  django-restauthn on GitHub
                </ExternalLink>
              </p>
            </Col>
          </Row>
        </Container>

        <Container id="npm-webauthn-client" className="my-3 project-section" fluid>
          <h2 className="project-title">
            NPM WebAuthn Client{' '}
            <small>(with CBOR Transport Encoding)</small>
          </h2>
          <Row>
            <Col xs="12" md="8" className="project-description">
              <p>
                This is the frontend-half of my Cyber-Security term project to connect a React SPA (REST client)
                to the backend-half, Django RestAuthn. This is written as vanilla Javascript that uses CBOR
                transport encoding via Axios encoding interceptors (any requests with application/cbor will
                automatically use the registered encoder/decoder; very clean!).
              </p>
              <p>
                Django also uses CSRF middleware with cookies/POSTed form data, which Axios handled very nicely
                as part of this module (but does make the client code tighter coupled to Django than I'd like).
                The client sends an abstract "payload" of JSON data, that can either just contain a "username"
                field or can include additional factors (password, OTP, etc) for the backend to authenticate as
                part of a MFA scheme (you choose how secure you want your app to be).
              </p>
            </Col>
            <Col xs="12" md="4">
              <LightboxImage
                srcThumb="/pages/professional/projects/npm-webauthn-client-code-small.png"
                srcFullsize="/pages/professional/projects/npm-webauthn-client-code.png"
                altText="A snippet of code from npm-webauthn-client."
              >The Login calls (GET and POST) for WebAuthn are abstracted cleanly to simplify the client API.</LightboxImage>
              <p className="project-github-repo-link m-3">
                <ExternalLink href="https://github.com/cvolny/npm-webauthn-client">
                npm-webauthn-client on GitHub
                </ExternalLink>
              </p>
            </Col>
          </Row>
        </Container>

        <Container id="infonet-politics" className="my-3 project-section" fluid>
          <h2 className="project-title">
            InfoNet Politics{' '}
            <small>(recommendations to counteract "filter bubbles")</small>
          </h2>
          <Row>
            <Col xs="12" md="8" className="project-description">
              <p>
                This is the initial research work that was later refined into my first journal publication:
                <ExternalLink href="https://link.springer.com/chapter/10.1007/978-3-031-17114-7_15">
                "Counteracting Filter Bubbles with Homophily-Aware Link Recommendations"</ExternalLink>. I was
                able to study a large dataset of social networks with political affiliation annotated to each
                node so I could measure the amount of modularity and study different link recommendation strategies
                to reduce network modularity (in this dataset, political homoiphily).
              </p>
              <p>
                With the help of my advisor and another graduate student, the raw ideas of my term paper were
                improved to make the work publication ready and we were published in SBP-BRiMS 2022. I was
                recognized for my work by being listed as a firt-author on the publication, which I was thrilled
                about as this has (so far) been my only academic journal publication.
              </p>
              <p>
                Social and Information networks, graph theory, as a graduate course was exteremely difficult for
                me. As an undergrad, I didn't commit a lot of linear algebra to long-term memory, but I absolutely
                needed to re-learn those concepts to succeed in this course. Thankfully, I grew up a lot since my
                time in undergrad and had an amazing instructor re-teaching these concepts so I was able to do well
                in the course and generated some work that could be refined into a publication!
              </p>
            </Col>
            <Col xs="12" md="4">
              <LightboxImage
                srcThumb="/pages/professional/projects/infonet-politics-graphs-small.png"
                srcFullsize="/pages/professional/projects/infonet-politics-graphs.png"
                altText="NetworkX graphs of Retweet and Mention networks with political category colorized."
              >Graphs of the Retweet and Mention networks in the dataset after political categories were applied.</LightboxImage>
              <p className="project-github-repo-link m-3">
                <ExternalLink href="https://github.com/cvolny/infonet-politics">
                infonet-politics on GitHub
                </ExternalLink>
              </p>
            </Col>
          </Row>
        </Container>

        <Container id="projects-others">
          <h2 className="project-title">
            And a few more...
          </h2>
          <p>I have a few other projects and samples listed on my GitHub that aren't exciting enough to
            talk about here, but they can be found <ExternalLink
            href="https://github.com/cvolny?tab=repositories">on GitHub</ExternalLink>!
          </p>
        </Container>
      </div>
    );
  };

  export default Projects;
