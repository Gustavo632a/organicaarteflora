import { useState } from 'react';
import imageDimensions from '../data/imageDimensions.json';
import { ArrowUpRight, MessageCircle, Sprout } from 'lucide-react';
import { CONTACT_MESSAGE, createWhatsAppUrl } from '../utils/whatsapp';
export function ExternalLink({ href, children, ...props }) { return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>; }
export function WhatsAppButton({ children = 'Falar no WhatsApp', message = CONTACT_MESSAGE, className = '' }) { return <ExternalLink href={createWhatsAppUrl(message)} className={`button primary ${className}`}><MessageCircle size={18} />{children}<ArrowUpRight size={17} /></ExternalLink>; }
export function Brand() {
  const [logoAvailable, setLogoAvailable] = useState(true);
  return <a className="brand" href="#inicio" aria-label="Orgânica Art & Flora — início">{logoAvailable ? <img className="brand-logo" src="/images/logo-organica.png" width="64" height="64" alt="" onError={() => setLogoAvailable(false)} /> : <Sprout aria-hidden="true" />}<span>orgânica<small>ART & FLORA</small></span></a>;
}
export function Photo({ src, alt, hero = false, ...props }) {
  const small = src.replace('.webp', '-small.webp');
  const original = imageDimensions[src] || { width: 1200, height: 1000 };
  const smallWidth = imageDimensions[small]?.width || 640;
  const srcSet = smallWidth === original.width ? undefined : `${small} ${smallWidth}w, ${src} ${original.width}w`;
  return <img src={src} srcSet={srcSet} sizes={hero ? '(min-width: 900px) 50vw, 100vw' : '(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw'} alt={alt} width={original.width} height={original.height} loading={hero ? 'eager' : 'lazy'} fetchPriority={hero ? 'high' : 'auto'} {...props} />;
}
