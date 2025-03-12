import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


const ExternalLink = ({href, children, className, id}) => {
    if (!id) {
      id = `ext-link-${Math.floor(Math.random() * 1000)}`;
    }
    return (
        <a id={id} href={href} className={className} target="_blank" rel="noreferrer">
            {children}
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-up-right-square mx-1 mb-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"/>
            </svg>
        </a>
    );
}

const LightboxImage = ({srcThumb, srcFullsize, altText, children}) => {
  const [modalShow, setModalShow] = useState(false);
  const onClose = () => setModalShow(false);
  return <>
    <Button
      onClick={() => setModalShow(true)}
      className="border-0"
      variant="link"
    >
      <Image
        thumbnail
        src={srcThumb}
        alt={altText}
      />
    </Button>
    <Modal
      show={modalShow}
      onHide={onClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="lightbox-modal"
      contentClassName="w-100"
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <Image
          src={srcFullsize}
          alt={altText}
          fluid
          style={{width: "100%"}}
        />
      </Modal.Body>
      <Modal.Footer>
        {children? (
          <div>
            {children}
          </div>
          ) : ''}
        <Button onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  </>;
};

export { ExternalLink, LightboxImage };
