import { useState } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { gallery, plantGroups } from '../data/gallery';
import { INSTAGRAM_URL } from '../data/business';
import { ExternalLink, Photo } from './Shared';
import ImageLightbox from './ImageLightbox';
export default function Place() {
  const [selectedGroup, setSelectedGroup] = useState(plantGroups[0].id);
  const [index, setIndex] = useState(null);
  const images = gallery.filter(image => image.group === selectedGroup);
  const name = plantGroups.find(group => group.id === selectedGroup).name;
  return <section id="espaco" className="section container reveal">
    <div className="section-heading"><div><p className="eyebrow">03 / ENTRE, SINTA-SE EM CASA</p><h2>Conheça <em>nosso espaço.</em></h2><p>Um ambiente cercado de verde, plantas e inspiração.</p></div><ExternalLink href={INSTAGRAM_URL} className="text-link">Ver mais no Instagram <ArrowUpRight size={18} /></ExternalLink></div>
    <p className="gallery-note">Explore as plantas por nome. Clique em uma foto para ampliar.</p>
    <div className="plant-filters" role="group" aria-label="Selecionar galeria de plantas">{plantGroups.map(group => <button key={group.id} aria-pressed={selectedGroup === group.id} aria-controls="plant-gallery" onClick={() => { setSelectedGroup(group.id); setIndex(null); }}>{group.name}</button>)}</div>
    <h3 className="plant-gallery-heading" aria-live="polite">{name}</h3>
    <div id="plant-gallery" className="plant-gallery" aria-label={`Fotos de ${name}`}>{images.map((item, i) => <button key={item.src} onClick={() => setIndex(i)} aria-label={`Ampliar ${item.title}: ${item.alt}`}><Photo src={item.src} alt={item.alt} /><span className="plant-photo-name">{item.title}</span><span className="zoom-icon"><Plus size={20} /></span></button>)}</div>
    {index !== null && <ImageLightbox images={images} index={index} onChange={setIndex} onClose={() => setIndex(null)} label={`Galeria de ${name}`} />}
  </section>;
}
