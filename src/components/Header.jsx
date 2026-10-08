import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '../data/business';
import { Brand, WhatsAppButton } from './Shared';
export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const header = useRef(null);
  useEffect(() => {
    const close = (event) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    const outside = (event) => { if (!header.current?.contains(event.target)) setOpen(false); };
    const resize = () => { if (window.innerWidth >= 1100) setOpen(false); };
    document.addEventListener('keydown', close); document.addEventListener('pointerdown', outside); window.addEventListener('resize', resize);
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', outside); window.removeEventListener('resize', resize); };
  }, []);
  return <header ref={header} className="header"><div className="container header-inner"><Brand /><nav id="navigation" aria-label="Menu principal" className={open ? 'navigation open' : 'navigation'}>{navigation.map(([label, href]) => <a href={href} key={label} onClick={() => setOpen(false)}>{label}</a>)}<WhatsAppButton className="mobile-contact" /></nav><WhatsAppButton className="header-contact" /><button ref={toggle} className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header>;
}
