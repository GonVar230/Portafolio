import "./CertificateModal.css";

export default function CertificateModal({ img, onClose }) {
  return (
    <div className="certmodal__backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="certmodal__box">
        <button className="certmodal__close" onClick={onClose}>✕</button>
        <img src={img} alt="Certificado" className="certmodal__img" />
      </div>
    </div>
  );
}
