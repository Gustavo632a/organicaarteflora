import { useState } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { paintings } from '../data/paintings';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { ExternalLink, Photo } from './Shared';
import ImageLightbox from './ImageLightbox';

export default function Paintings() {
  const [index, setIndex] = useState(null);
  return <section id="pinturas" className="paintings section reveal">
    <div className="container">
      <div className="section-heading"><div><p className="eyebrow">ARTE / UM NOVO OLHAR</p><h2>Pinturas que <em>inspiram espaços.</em></h2></div><p>Paisagens, cores e formas da natureza. Conheça as pinturas e fale com a gente para saber mais.</p></div>
      <div className="paintings-grid">{paintings.map((painting, i) => <article className="painting" key={painting.src}>
        <button className="painting-photo" aria-label={`Ampliar pintura ${painting.title}`} onClick={() => setIndex(i)}><Photo src={painting.src} alt={painting.alt} /><span className="zoom-icon"><Plus size={20} /></span></button>
        <div className="painting-caption"><h3>{painting.title}</h3><ExternalLink className="text-link" href={createWhatsAppUrl(`Olá! Conheci a Orgânica Art & Flora pelo site e gostaria de saber mais sobre a pintura "${painting.title}".`)}>Consultar obra <ArrowUpRight size={18} /></ExternalLink></div>
      </article>)}</div>
    </div>
    {index !== null && <ImageLightbox images={paintings} index={index} onChange={setIndex} onClose={() => setIndex(null)} label="Galeria de pinturas" />}
  </section>;
}
