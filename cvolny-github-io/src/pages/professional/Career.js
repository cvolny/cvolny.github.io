import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { ExternalLink, LightboxImage } from '../../Util';

const Career = () => {
    return (
      <Container className="pt-4">
        <header>
            <h1>Professional Summary</h1>
        </header>

        <Container style={{maxWidth: "1100px"}}>
          <Container id="contact" className="mt-5">
            <Row className="justify-content-md-center">
              <Col md={10} xs={12}>
                <h2 className="text-center mb-4">Mrs. Cupcake Christi Volny</h2>
                <Container>
                  <Row>
                    <Col></Col>
                    <Col>
                      <ExternalLink
                        href="https://www.github.com/cvolny"
                        showIcon={false}
                      >github.com/cvolny</ExternalLink>
                    </Col>
                    <Col>Leipzig, Germany</Col>
                    <Col></Col>
                  </Row>
                </Container>
              </Col>
              <Col md={2} xs={12}>
                <LightboxImage
                  altText="A photograph of Cupcake Volny"
                  srcThumb="/pages/cvolny-avatar-pink.jpg"
                  srcFullsize="/pages/cvolny-avatar-pink.jpg"
                  style={{width: "125px"}}
                >A photograph of Cupcake Volny</LightboxImage>
              </Col>
            </Row>
          </Container>

          <Container id="brief" className="my-3">
            <Row>
              <Col className="h3 fw-bolder text-uppercase">Objective</Col>
            </Row>
            <Row>
              <Col className="ps-5">
                Cloud Solution Architect seeking position in full-stack security, development lifecycle,
                operations, and architecture; focusing on usability, security, and best practices to deliver safe,
                reliable, and inclusive cloud, embedded, and on-premises software systems.
              </Col>
            </Row>
          </Container>

          <Container id="employment" className="my-3">
            <Row className="mb-2">
              <Col className="h3 fw-bolder text-uppercase">Employment</Col>
            </Row>
            <Row>
              <Col md={2} className="pt-1">February 2021 -<br />February 2025</Col>
              <Col>
                <p className="fs-4">
                  <span className="fw-bold">Cisco Systems, Duo Security</span>
                  ; Ann Arbor, MI, USA
                </p>
                <p className="fs-5 fst-italic">
                  Software Engineering Technical Leader, CloudSSO Services
                </p>
              </Col>
            </Row>
            <Row>
            <Col md={2}></Col>
              <Col>
                <ListGroup className="list-group-bulleted list-group-flush item-border-none">
                  <ListGroup.Item>
                    Shepherd team and product efforts from feature inception, through iterative development,
                    documentation and validation, to launch and to adoption tracking.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Advise and evangelize Zero Trust security, SSO, OIDC, Webauthn/Passwordless, and
                    effective software design patterns publicly and across the Duo product catalog.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Mentoring and continuous education leader; career planning, interviewing, technical skills
                    building, and public speaking trainer.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Full DevOps and On-Call Responsibilities for our CloudSSO product via by Ansible
                    Tower/AWX, Ansible Infrastructure-as-Code, and Bash.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Director of Community Outreach and Allyship for Cisco SBG Pride Employee Resource Group.
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={2} className="pt-1">March 2017 -<br />January 2021</Col>
              <Col>
                <p className="fs-4">
                  <span className="fw-bold">VES, LLC (Secret Clearance)</span>
                  ; Aberdeen Proving Grounds, MD, USA
                </p>
                <p className="fs-5 fst-italic">
                  Senior Systems Engineer, MissionCommand OS and MBTS Programs
                </p>
              </Col>
            </Row>
            <Row>
            <Col md={2}></Col>
              <Col>
                <ListGroup className="list-group-bulleted list-group-flush item-border-none">
                  <ListGroup.Item>
                    Develop and integrate apps for Mission Command Hybrid OS (LXC/AOSP/X11).
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Architect and support an embedded, extensible cross-classification comms platform.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Support and integrate tactical applications and build systems for GDLS MBT platform.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Designed a customer-facing, distributed, modular, containerized CI/CD for GVOS.
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={2} className="pt-1">June 2014 -<br />March 2017</Col>
              <Col>
                <p className="fs-4">
                  <span className="fw-bold">General Motors, IT and OnStar</span>
                  ; Detroit, MI, USA
                </p>
                <p className="fs-5 fst-italic">
                  Java EE Software Developer; SAP Java EP Portal and OnStar VCS
                </p>
              </Col>
            </Row>
            <Row>
            <Col md={2}></Col>
              <Col>
                <ListGroup className="list-group-bulleted list-group-flush item-border-none">
                  <ListGroup.Item>
                    Define, implement, and validate new features for GM OnStar Connected Vehicle Platform.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Design, develop, and tested Java EE web applications for Enterprise SAP (BI/ERP).
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Served as technical and training lead for scrum team of 10 developers.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Drove modernization on design patterns, code quality, utilities, and frameworks.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Automated and trained team for WebSphere ETL migration and error report generation.
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={2} className="pt-1">May 2009 -<br />June 2014</Col>
              <Col className="fs-4">
                <p className="fs-4">
                  <span className="fw-bold">NORIS/CJCC</span>
                  ; Toledo, OH, USA
                </p>
                <p className="fs-5 fst-italic">
                  Senior Programming Analyst, Development Lead for RemoteConnect
                </p>
              </Col>
            </Row>
            <Row>
            <Col md={2}></Col>
              <Col>
                <ListGroup className="list-group-bulleted list-group-flush item-border-none">
                  <ListGroup.Item>
                    Designed MFA hardware authentication solution in compliance with Ohio LEADS requirements.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Create and maintain .NET services and applications for criminal justice clients including
                    navigable graph of dependencies and outage reporting dashboard.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Drove innovation on adoption of .NET LINQ, MVC5, and EntityFramework.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Conduct feasibility study on mobile ticket printing solution.
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={2} className="pt-1">January 2006 -<br />May 2009</Col>
              <Col>
                <p className="fs-4">
                  <span className="fw-bold">The University of Toledo, College of Engineering</span>
                  ; Toledo, OH, USA
                </p>
                <p className="fs-5 fst-italic">
                  Educational Lab Instructor, College Webmaster, and UNIX Developer
                </p>
              </Col>
            </Row>
            <Row>
            <Col md={2}></Col>
              <Col>
                <ListGroup className="list-group-bulleted list-group-flush item-border-none">
                  <ListGroup.Item>
                    Maintain documentation and generate lab machine images for >500 PC + Mac + RedHat
                    student lab environments including specialized software and licensing server management.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    TA/grader/lab instructor for Intro to EECS, Intro to Java OOP, and Intro to C++ courses.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    College of Engineering webmaster in charge of maintaining college, department, and
                    research group, and student organization websites using HTML, CSS, PHP, XML, and JS.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Develop and maintain custom Bourne Shell/AWK/Perl cgi-scripts for Solaris OS server
                    maintenance and services dashboard for lab staff.
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>

          <Container id="publications" className="my-3">
            <Row className="mb-2">
              <Col className="h3 fw-bolder text-uppercase">Publications</Col>
            </Row>
            <Row>
              <Col md={2}>June 2023</Col>
              <Col>
                Pride and Processes: Building an Inclusive Culture and an Empowered LGBTQ+ Future, Duo Blog<br />
                <ExternalLink
                  href="https://duo.com/blog/building-inclusive-culture-empowered-lgbtq-plus-future"
                >
                  https://duo.com/blog/building-inclusive-culture-empowered-lgbtq-plus-future
                </ExternalLink>
              </Col>
            </Row>
            <Row>
              <Col md={2}>January 2022</Col>
              <Col>
                Counteracting Filter Bubbles with Homophily-aware Link Recommendations, SBP-BRiMS<br />
                <ExternalLink
                  href="https://doi.org/10.1007/978-3-031-17114-7_15"
                >
                  https://doi.org/10.1007/978-3-031-17114-7_15
                </ExternalLink>
              </Col>
            </Row>
          </Container>

          <Container id="speaking" className="my-3">
            <Row className="mb-2">
              <Col className="h3 fw-bolder text-uppercase">Presentations</Col>
            </Row>
            <Row>
              <Col md={2}>June 2024</Col>
              <Col>
                Pydantic Logging and Redaction Framework, Presenter <span className="fst-italic">Cisco, Duo R&amp;D</span>
              </Col>
            </Row>
            <Row>
              <Col md={2}>June 2024</Col>
              <Col>
                Pride Celebration: Laugh &amp; Learn with Punkie Johnson, M.C. and Housekeeping, <span className="fst-italic">Cisco Pride</span>
              </Col>
            </Row>
            <Row>
              <Col md={2}>April 2024</Col>
              <Col>
                Craft Penguicon's Future, Panelist, <span className="fst-italic">Penguicon</span>
              </Col>
            </Row>
            <Row>
              <Col md={2}>April 2024</Col>
              <Col>
                Open-Source Relationships, Panelist, <span className="fst-italic">Penguicon</span>
              </Col>
            </Row>
            <Row>
              <Col md={2}>April 2023</Col>
              <Col>
                Python Software Development at Enterprise Scale, Presenter, <span className="fst-italic">Penguicon</span>
              </Col>
            </Row>
            <Row>
              <Col md={2}>April 2023</Col>
              <Col>
                Python with Typing: Disambiguate the Chaos, Presenter, <span className="fst-italic">Penguicon</span>
              </Col>
            </Row>
            <Row>
              <Col md={2}>April 2023</Col>
              <Col>
                Modernizing Cloud Security - OIDC, Passkeys, and the Future of CloudSec, Presenter, <span className="fst-italic">Penguicon</span>
              </Col>
            </Row>
            <Row>
              <Col md={2}>October 2022</Col>
              <Col>
                Dependency Injection, Inversion of Control, and lib-python-oidc, Presenter, <span className="fst-italic">Cisco, Duo R&amp;D</span>
              </Col>
            </Row>
            <Row>
              <Col md={2}>July 2022</Col>
              <Col>
                Advance Python Typing: TypeVars, Generics, and Protocols, Presenter, <span className="fst-italic">PyOhio</span>
              </Col>
            </Row>
            <Row>
              <Col md={2}>April 2022</Col>
              <Col>
                OIDC, OAuth, SAML, and SSO: Decoding the IdAM Alphabet Soup, Presenter, <span className="fst-italic">Penguicon</span>
              </Col>
            </Row>
            <Row>
              <Col md={2}>January 2022</Col>
              <Col>
                Passwords are Dead (passwords, webauthn, Django/React modules), Presenter, <span className="fst-italic">Cloud Security Alliance</span>
              </Col>
            </Row>
            <Row>
              <Col md={2}>December 2021</Col>
              <Col>
                Passwords are Dead (passwords, webauthn, Django/React modules), Presenter, <span className="fst-italic">Ohio LinuxFest</span>
              </Col>
            </Row>
          </Container>

          <Container id="education" className="my-3">
            <Row className="mb-2">
              <Col className="h3 fw-bolder text-uppercase">Education</Col>
            </Row>
            <Row>
              <Col md={2} className="pt-1">January 2013-<br />December 2020</Col>
              <Col>
                <p className="fs-4">
                  <span className="fw-bold">The University of Toledo</span>
                  ; Toledo, OH, USA
                </p>
                <p className="fs-5 fst-italic">
                  Master of Science in Engineering with a concentration in Computer Science
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={2} className="pt-1">August 2005-<br />December 2012</Col>
              <Col>
                <p className="fs-5 fst-italic">
                  Bachelor of Science, Computer Science and Engineering<br />
                  Minor in Mathematics
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    );
  };

  export default Career;
