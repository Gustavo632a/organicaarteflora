import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
export default function ImageLightbox({ images, index, onChange, onClose, label = 'Galeria de fotos das plantas' }) {
  const dialog = useRef(null);
  const previous = () => onChange((index + images.length - 1) % images.length);
  const next = () => onChange((index + 1) % images.length);
  useEffect(() => { const active = document.activeElement; const overflow = document.body.style.overflow; document.body.style.overflow = 'hidden'; dialog.current.showModal(); return () => { document.body.style.overflow = overflow; active?.focus(); }; }, []);
  return <dialog ref={dialog} className="lightbox" aria-label={label} onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) onClose(); }} onKeyDown={e => { if (e.key === 'ArrowLeft') previous(); if (e.key === 'ArrowRight') next(); }}><button className="lightbox-close" autoFocus onClick={onClose} aria-label="Fechar imagem"><X /></button><div className="lightbox-content"><img src={images[index].src} alt={images[index].alt} /><div className="lightbox-bar"><button onClick={previous} aria-label="Imagem anterior"><ChevronLeft /></button><p>{images[index].title && <>{images[index].title} · </>}{index + 1} / {images.length}</p><button onClick={next} aria-label="Próxima imagem"><ChevronRight /></button></div></div></dialog>;
}
