import { useState, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import confetti from 'canvas-confetti';

const TOTAL_STEPS = 5;

// Gold Konfetti Farben
const goldColors = ['#BF953F', '#FCF6BA', '#B38728', '#FBF5B7', '#AA771C'];

// Kleines Konfetti bei jedem Schritt
const triggerSmallConfetti = () => {
  confetti({
    particleCount: 30,
    spread: 60,
    origin: { y: 0.7 },
    colors: goldColors,
    scalar: 0.8,
    gravity: 1.2,
  });
};

// Großes Konfetti-Feuerwerk am Ende
const triggerBigConfetti = () => {
  const duration = 3000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: goldColors,
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: goldColors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };
  frame();

  // Zusätzlicher Burst in der Mitte
  setTimeout(() => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: goldColors,
      scalar: 1.2,
    });
  }, 500);
};

// Gold Divider Component - Variante: Breiter Balken mit Glow
const GoldDivider = () => (
  <div className="my-12 flex items-center justify-center px-4">
    <div 
      className="h-1 flex-1 rounded-full"
      style={{ 
        background: 'linear-gradient(90deg, transparent 0%, #BF953F 15%, #FCF6BA 50%, #BF953F 85%, transparent 100%)',
        boxShadow: '0 0 20px rgba(191,149,63,0.6), 0 0 40px rgba(191,149,63,0.3)'
      }}
    />
  </div>
);

// Phone Icon
const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

// Mail Icon
const MailIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

// Play Icon
const PlayIcon = () => (
  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

// External Link Icon
const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

// Gold Button Component
const GoldButton = ({ 
  href, 
  children, 
  onClick,
  checked = false,
  external = false,
  icon
}: { 
  href: string; 
  children: React.ReactNode;
  onClick?: () => void;
  checked?: boolean;
  external?: boolean;
  icon?: React.ReactNode;
}) => {
  const baseStyle = {
    background: checked 
      ? 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)'
      : 'transparent',
    border: '2px dashed rgba(191,149,63,0.6)',
    boxShadow: checked 
      ? '0 0 20px rgba(191,149,63,0.5), inset 0 1px 0 rgba(255,255,255,0.3)'
      : '0 0 15px rgba(191,149,63,0.1)',
  };
  
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
          if (href && href !== '#') {
            window.open(href, external ? '_blank' : '_self');
          }
        }
      }}
      className={`flex items-center justify-center gap-2 w-full text-center py-3 px-6 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:border-[rgba(191,149,63,0.9)] ${checked ? 'text-black' : 'text-white'}`}
      style={baseStyle}
    >
      {icon && <span style={{ color: checked ? '#000' : '#BF953F' }}>{icon}</span>}
      {children}
      {external && !checked && <ExternalIcon />}
    </a>
  );
};

// Section Card Component
const SectionCard = ({ 
  number, 
  title, 
  children 
}: { 
  number: number; 
  title: string; 
  children: React.ReactNode;
}) => (
  <div 
    className="rounded-2xl p-6 mb-6 relative"
    style={{ 
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: '0 0 60px rgba(255,255,255,0.08), 0 0 100px rgba(255,255,255,0.03)'
    }}
  >
    <div className="flex items-center gap-4 mb-4">
      <div 
        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
        style={{ 
          background: 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)',
          color: '#000',
          boxShadow: '0 0 20px rgba(191,149,63,0.4)'
        }}
      >
        {number}
      </div>
      <h2 className="text-xl font-bold text-white">{title}</h2>
    </div>
    {children}
  </div>
);

// Startplan Step Component
const StartplanStep = ({
  number,
  title,
  checked,
  onClick
}: {
  number: number;
  title: string;
  checked: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/5"
    style={{ 
      background: checked ? 'rgba(191,149,63,0.15)' : 'rgba(255,255,255,0.02)',
      border: checked ? '1px solid rgba(191,149,63,0.5)' : '1px solid rgba(255,255,255,0.05)'
    }}
  >
    <div 
      className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
      style={{ 
        background: checked 
          ? 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)'
          : 'rgba(255,255,255,0.1)',
        color: checked ? '#000' : '#fff',
        boxShadow: checked ? '0 0 15px rgba(191,149,63,0.4)' : 'none'
      }}
    >
      {checked ? '✓' : number}
    </div>
    <span className={`text-left ${checked ? 'text-white' : 'text-white/70'}`}>{title}</span>
  </button>
);

export default function Home() {
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('lr-onboarding-progress');
    if (saved) {
      setCompletedSteps(JSON.parse(saved));
    }
  }, []);

  const toggleStep = (step: string) => {
    setCompletedSteps(prev => {
      const wasChecked = prev.includes(step);
      const newSteps = wasChecked 
        ? prev.filter(s => s !== step)
        : [...prev, step];
      localStorage.setItem('lr-onboarding-progress', JSON.stringify(newSteps));
      
      // Konfetti auslösen wenn Schritt neu erledigt wird
      if (!wasChecked) {
        if (newSteps.length === TOTAL_STEPS) {
          // Alle 5 Schritte erledigt - großes Feuerwerk!
          triggerBigConfetti();
        } else {
          // Einzelner Schritt erledigt - kleines Konfetti
          triggerSmallConfetti();
        }
      }
      
      return newSteps;
    });
  };

  const progress = Math.round((completedSteps.length / TOTAL_STEPS) * 100);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Progress Bar */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10 py-3 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/60 text-sm">{completedSteps.length} von {TOTAL_STEPS} Schritten erledigt</span>
            <span 
              className="font-bold"
              style={{ 
                background: 'linear-gradient(90deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >{progress}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-500"
              style={{ 
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)'
              }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div 
              className="absolute inset-0 rounded-full"
              style={{ boxShadow: '0 0 60px rgba(255,255,255,0.4), 0 0 100px rgba(255,255,255,0.2)' }}
            />
            <img 
              src="/images/logo.png" 
              alt="LR Lifestyle Team" 
              className="w-32 h-32 rounded-full relative z-10"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2">Willkommen im</h1>
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ 
              background: 'linear-gradient(90deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >LR Lifestyle Team</h2>
          <p className="text-white/60">Hier findest du alles, was du für deinen Start brauchst.</p>
        </div>

        {/* Profile Card */}
        <div 
          className="rounded-2xl p-6 mb-8 text-center relative"
          style={{ 
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 0 80px rgba(255,255,255,0.12), 0 0 120px rgba(255,255,255,0.05)'
          }}
        >
          <div className="relative w-28 h-28 mx-auto mb-4">
            <div 
              className="absolute inset-0 rounded-full"
              style={{ 
                boxShadow: '0 0 60px rgba(255,255,255,0.7), 0 0 100px rgba(255,255,255,0.5), 0 0 140px rgba(255,255,255,0.3)'
              }}
            />
            <img 
              src="/images/profile.png" 
              alt="Mathias Vinzing" 
              className="w-28 h-28 rounded-full object-cover relative z-10"
              style={{ 
                objectPosition: '50% 15%'
              }}
            />
          </div>
          <h3 className="text-xl font-bold">Mathias Vinzing</h3>
          <p 
            className="text-sm mb-3 font-semibold tracking-wide"
            style={{ 
              background: 'linear-gradient(90deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >PLATIN ORGALEITER</p>
          <div className="flex flex-col gap-2 text-sm mt-4">
            <a 
              href="https://api.whatsapp.com/send?phone=4917150600008" 
              className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span style={{ color: '#BF953F' }}><PhoneIcon /></span>
              <span 
                style={{ 
                  background: 'linear-gradient(90deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >WhatsApp: +49 171 506 0008</span>
            </a>
            <a 
              href="mailto:info@lr-lifestyle.info" 
              className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span style={{ color: '#BF953F' }}><MailIcon /></span>
              <span 
                style={{ 
                  background: 'linear-gradient(90deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >info@lr-lifestyle.info</span>
            </a>
          </div>
          
          {/* Hilfe-Text */}
          <div 
            className="mt-4 rounded-xl p-4"
            style={{ background: 'rgba(191,149,63,0.1)', border: '1px solid rgba(191,149,63,0.2)' }}
          >
            <p className="text-white/80 text-sm text-center">
              <strong style={{ 
                background: 'linear-gradient(90deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Hole dir unbedingt Hilfe!</strong>
            </p>
            <p className="text-white/60 text-sm text-center mt-2">
              Bei deinem Sponsor (Vermittler), in den Gruppen oder bei mir direkt.
            </p>
            <p className="text-white/70 text-sm text-center mt-1 font-medium">
              Wir sind ein Team und sind für dich da – wir lassen niemanden allein!
            </p>
          </div>
        </div>

        {/* ==================== DEIN START (EINLEITUNG) - GANZ OBEN ==================== */}
        <div className="mb-8">
          <h2 
            className="text-2xl font-bold mb-2"
            style={{ 
              background: 'linear-gradient(90deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >Dein Start</h2>
          <p className="text-white/60 text-lg mb-4">– die ersten Tage im LR Business</p>
          
          <div 
            className="rounded-2xl p-6"
            style={{ 
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 0 40px rgba(255,255,255,0.05)'
            }}
          >
            <p className="text-white/70 text-sm mb-4">
              Das hier ist der Anfang deines Geschäfts. Es geht nicht darum, sofort alles perfekt zu können, sondern darum, das Geschäft <strong className="text-white">Schritt für Schritt</strong> zu erlernen.
            </p>
            <p className="text-white/60 text-sm mb-3">In den ersten Tagen geht es darum:</p>
            <ul className="text-white/60 text-sm space-y-1 mb-4 ml-4">
              <li>• Ein Starterwebinar besuchen</li>
              <li>• Die ersten Kunden finden</li>
              <li>• Erste Partner gewinnen</li>
              <li>• Gespräche führen</li>
              <li>• Deinen eigenen Weg zur Duplikation finden</li>
            </ul>
            <p className="text-white/70 text-sm mb-4">
              Network Marketing funktioniert nicht über wenige Gespräche mit Druck, sondern über <strong className="text-white">viele Gespräche mit Leichtigkeit</strong>.
            </p>
            <div 
              className="rounded-xl p-4 mb-4"
              style={{ background: 'rgba(191,149,63,0.1)', border: '1px solid rgba(191,149,63,0.2)' }}
            >
              <p className="text-white/80 text-sm">
                Sprich mit Menschen. Zeig ihnen Produkte. Sprich über Möglichkeiten. Höre zu.
              </p>
            </div>
            <p className="text-white/70 text-sm mb-4">
              <strong className="text-white">Nicht jeder ist der Richtige</strong> – und genau das ist Teil dieses Geschäfts. Es geht nicht ums Rekrutieren um jeden Preis, sondern ums <strong className="text-white">Selektieren der richtigen Menschen</strong>.
            </p>
            <p className="text-white/60 text-sm mb-3">Dein Fokus am Anfang:</p>
            <ul className="text-white/60 text-sm space-y-1 mb-4 ml-4">
              <li>• 2–4 Partner</li>
              <li>• Erste Kunden</li>
              <li>• Produkte erleben und empfehlen</li>
              <li>• Deinen Partnern helfen, genau das Gleiche zu tun</li>
            </ul>
            <p className="text-white/70 text-sm">
              So entsteht Schritt für Schritt ein stabiles Fundament – die Basis für deine ersten <strong><span style={{ background: 'linear-gradient(90deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>250 € bis 1.250 € im Monat</span></strong>*.
            </p>
            <p className="text-white/40 text-xs mt-3 italic">
              *Kein Einkommensversprechen. Ergebnisse sind abhängig von persönlichem Einsatz und aktuellen LR-Bedingungen. Details in LR Neo / MyOffice.
            </p>
          </div>
        </div>

        {/* ==================== DEIN STARTPLAN ==================== */}
        <div 
          className="mb-8 rounded-2xl p-6"
          style={{ 
            background: 'linear-gradient(135deg, rgba(191,149,63,0.15) 0%, rgba(0,0,0,0) 100%)',
            border: '2px dashed rgba(191,149,63,0.5)',
            boxShadow: '0 0 30px rgba(191,149,63,0.1)'
          }}
        >
          <h3 
            className="text-xl font-bold mb-2"
            style={{ 
              background: 'linear-gradient(90deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >Dein Startplan</h3>
          <p className="text-white/60 text-sm mb-4">
            Erledige diese <strong className="text-white">5 Schritte heute</strong> – den Rest in den nächsten Tagen.
          </p>
          <div className="space-y-2">
            <StartplanStep
              number={1}
              title="Lina (KI) aktivieren inkl. Onboarding"
              checked={completedSteps.includes('step1')}
              onClick={() => toggleStep('step1')}
            />
            <StartplanStep
              number={2}
              title="WhatsApp & Telegram Gruppen beitreten"
              checked={completedSteps.includes('step2')}
              onClick={() => toggleStep('step2')}
            />
            <StartplanStep
              number={3}
              title="LR Connect App herunterladen"
              checked={completedSteps.includes('step3')}
              onClick={() => toggleStep('step3')}
            />
            <StartplanStep
              number={4}
              title="Deine wichtigsten Seiten kennenlernen (LR Neo & MyOffice)"
              checked={completedSteps.includes('step4')}
              onClick={() => toggleStep('step4')}
            />
            <StartplanStep
              number={5}
              title="Komm ins Handeln – 10 Nachrichten senden!"
              checked={completedSteps.includes('step5')}
              onClick={() => toggleStep('step5')}
            />
          </div>
          
          {/* Sponsor-Hinweis */}
          <div 
            className="mt-4 p-3 rounded-xl text-center"
            style={{ background: 'rgba(191,149,63,0.1)', border: '1px dashed rgba(191,149,63,0.3)' }}
          >
            <p className="text-white/70 text-sm">
              📩 <strong className="text-white">Fertig?</strong> Schick deinem Sponsor eine kurze Info!
            </p>
          </div>
        </div>

        <GoldDivider />

        {/* ==================== SECTION 1: LINA ==================== */}
        <SectionCard number={1} title="Lina (KI) – dein 24/7 Coach">
          <p className="text-white/70 text-sm mb-4">
            Lina ist deine KI-Assistentin auf WhatsApp.
          </p>
          <p className="text-white/60 text-sm mb-2">Sie hilft dir bei:</p>
          <ul className="text-white/60 text-sm space-y-1 mb-4 ml-4">
            <li>• OnlineShop & Webseite einrichten</li>
            <li>• Produktfragen (kennt alle Produkte & Preise)</li>
            <li>• Teamaufbau & Namensliste</li>
            <li>• Social Media Texte & Ideen</li>
            <li>• WhatsApp Vorlagen</li>
            <li>• Bilder & Videos erstellen</li>
          </ul>
          <p className="text-white/60 text-sm mb-4">
            Du kannst Lina auch <strong className="text-white">anrufen</strong> und live mit ihr sprechen.
          </p>

          <Accordion type="single" collapsible className="mb-4">
            <AccordionItem value="start" className="border-white/10">
              <AccordionTrigger className="text-white/80 text-sm hover:text-white">
                Lina starten
              </AccordionTrigger>
              <AccordionContent>
                <ol className="text-white/60 text-sm space-y-2 pt-2">
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#BF953F' }}>1.</span>
                    <span>Klicke auf "Lina starten" unten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#BF953F' }}>2.</span>
                    <span>Schreibe "Hallo" oder tippe auf das <strong className="text-white">Menü-Symbol</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#BF953F' }}>3.</span>
                    <span>Wähle <strong className="text-white">"Onboarding"</strong> im Hauptmenü</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#BF953F' }}>4.</span>
                    <span>Lina fragt nach deiner <strong className="text-white">Partnernummer</strong> und <strong className="text-white">Namen</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#BF953F' }}>5.</span>
                    <span>Schicke die Daten an Lina – <strong className="text-white">Mathias schaltet dich dann frei</strong></span>
                  </li>
                </ol>
                <div className="mt-4">
                  <GoldButton href="https://api.whatsapp.com/send?phone=4915170605019" external>
                    Lina auf WhatsApp öffnen
                  </GoldButton>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="lr-onboarding" className="border-white/10">
              <AccordionTrigger className="text-white/80 text-sm hover:text-white">
                LR-Onboarding (OnlineShop & Webseite)
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-white/60 text-sm pt-2 mb-3">
                  Tippe unten auf <strong className="text-white">Choose</strong> und wähle <strong className="text-white">Onboarding</strong>.
                </p>
                <p className="text-white/60 text-sm mb-3">
                  Gehe den <strong className="text-white">Onboarding Prozess</strong> Schritt für Schritt durch – OnlineShop und Webseite werden zusammen eingerichtet.
                </p>
                <div 
                  className="rounded-xl p-3 mb-3"
                  style={{ background: 'rgba(191,149,63,0.1)', border: '1px solid rgba(191,149,63,0.2)' }}
                >
                  <p className="text-white/70 text-xs mb-2">
                    <strong style={{ color: '#BF953F' }}>Wichtig:</strong> Danach zur Kontrolle an deinen <strong className="text-white">Sponsor schicken</strong>, ob alles richtig eingerichtet ist.
                  </p>
                </div>
                <p className="text-white/60 text-sm mb-2">Am Ende bekommst du <strong className="text-white">4 wichtige Links</strong>:</p>
                <ul className="text-white/60 text-sm space-y-1 ml-4 mb-3">
                  <li>• <strong className="text-white">Meine URL LR</strong> – Deine persönliche LR Webseite</li>
                  <li>• <strong className="text-white">Mein eShop</strong> – Dein OnlineShop für Kunden</li>
                  <li>• <strong className="text-white">Partner-Registrierung</strong> – Hier können sich neue Partner anmelden</li>
                  <li>• <strong className="text-white">Duftfinder</strong> – Hilft Kunden die richtige Fragrance zu finden</li>
                </ul>
                <p className="text-white/50 text-xs italic">
                  Diese Links findest du später in LR Neo unter "Profil" → "Öffentliche Informationen".
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="lina-onboarding" className="border-white/10">
              <AccordionTrigger className="text-white/80 text-sm hover:text-white">
                Lina-Onboarding (Videos zur Bedienung)
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-white/60 text-sm pt-2 mb-3">
                  Im Onboarding-Menü findest du auch <strong className="text-white">Videos zur Bedienung von Lina</strong>.
                </p>
                <p className="text-white/60 text-sm">
                  Diese zeigen dir Schritt für Schritt, wie du alle Funktionen nutzt.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="lina-menus" className="border-white/10">
              <AccordionTrigger className="text-white/80 text-sm hover:text-white">
                Normale Lina-Menüs (alle LR-Themen)
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-white/60 text-sm pt-2 mb-3">
                  <strong className="text-white">Geh diese Menüs einmal durch</strong>, damit du sicher wirst und jederzeit weißt, wo du welches Thema findest.
                </p>
                <ul className="text-white/60 text-sm space-y-1 ml-4 mb-3">
                  <li>• <strong className="text-white">Onboarding</strong></li>
                  <li>• <strong className="text-white">Social Media Hilfe</strong></li>
                  <li>• <strong className="text-white">Telefoniere mit Lina</strong></li>
                  <li>• <strong className="text-white">LR Allgemein</strong></li>
                  <li>• <strong className="text-white">Business & Karriere</strong></li>
                  <li>• <strong className="text-white">Produkte Infos</strong></li>
                  <li>• <strong className="text-white">Verkauf & Vertrieb</strong></li>
                  <li>• <strong className="text-white">Schnellzugriff</strong></li>
                </ul>
                <div 
                  className="rounded-xl p-3"
                  style={{ background: 'rgba(191,149,63,0.1)', border: '1px solid rgba(191,149,63,0.2)' }}
                >
                  <p className="text-white/70 text-xs">
                    <strong style={{ color: '#BF953F' }}>Tipp:</strong> Auch hier gibt es zu jeder wichtigen Kategorie ein <strong className="text-white">Quiz</strong>.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="wichtig" className="border-white/10">
              <AccordionTrigger 
                className="text-sm hover:text-white font-medium"
              >
                <span 
                  style={{ 
                    background: 'linear-gradient(90deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >Wichtig – stell Lina Fragen</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-white/60 text-sm pt-2 mb-3">
                  <strong className="text-white">Nutze Lina aktiv</strong> – entweder schriftlich per Chat oder live per Telefon.
                </p>
                <p className="text-white/60 text-sm mb-2">Schreibe Lina Fragen, zum Beispiel:</p>
                <ul className="text-white/60 text-sm space-y-1 ml-4 mb-3">
                  <li>• <em>"Lina, was ist mein nächster Schritt?"</em></li>
                  <li>• <em>"Hilf mir bitte eine Namensliste zu erstellen."</em></li>
                  <li>• <em>"Wie erkläre ich das LR Business richtig?"</em></li>
                </ul>
                <p className="text-white/60 text-sm mb-3">
                  Oder nutze <strong className="text-white">"Telefoniere mit Lina"</strong>: Wähle im Choose-Menü "Telefoniere mit Lina" und sprich live mit ihr – wie ein echtes Telefongespräch.
                </p>
                <div 
                  className="rounded-xl p-3 mb-4"
                  style={{ background: 'rgba(191,149,63,0.1)', border: '1px solid rgba(191,149,63,0.2)' }}
                >
                  <p className="text-white/70 text-xs">
                    Lina macht dir Vorschläge und hilft dir genau dort weiter, wo du gerade stehst.
                  </p>
                </div>
                <GoldButton href="https://api.whatsapp.com/send?phone=4915170605019" external>
                  Lina eine Frage stellen
                </GoldButton>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SectionCard>

        {/* ==================== SECTION 2: WHATSAPP GRUPPEN ==================== */}
        <GoldDivider />

        <div id="gruppen">
          <SectionCard number={2} title="Gruppen: WhatsApp & Telegram">
            <p className="text-white/70 text-sm mb-4">
              Tritt unseren Team-Gruppen bei und vernetze dich mit anderen Partnern.
            </p>

            <Accordion type="single" collapsible className="mb-4">
              <AccordionItem value="whatsapp" className="border-white/10">
                <AccordionTrigger className="text-white/80 text-sm hover:text-white">
                  Warum 2x WhatsApp?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-white/60 text-sm mb-3 pt-2">
                    <strong className="text-white">Info-Gruppe:</strong> Wichtige News & Updates vom Team<br/>
                    <strong className="text-white">Austausch-Gruppe:</strong> Fragen stellen, Hilfe bekommen, Erfahrungen teilen
                  </p>
                  <div className="space-y-2">
                    <GoldButton href="https://chat.whatsapp.com/EA0k6OTVONGLMc1b7e0AsV" external>
                      Info-Gruppe beitreten
                    </GoldButton>
                    <GoldButton href="https://chat.whatsapp.com/DyERWKHRx7SBc9QT4hV5qP" external>
                      Austausch-Gruppe beitreten
                    </GoldButton>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="telegram" className="border-white/10">
                <AccordionTrigger className="text-white/80 text-sm hover:text-white">
                  Warum Telegram?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-white/60 text-sm mb-3 pt-2">
                    Telegram bietet mehr Möglichkeiten für größere Gruppen und Medien.
                  </p>
                  <div className="space-y-2">
                    <GoldButton href="https://t.me/+TxckV-xlENozYmEy" external>
                      Club 1000
                    </GoldButton>
                    <GoldButton href="https://t.me/+DtNs0IQR1D4yZWVi" external>
                      Produktgruppe
                    </GoldButton>
                    <GoldButton href="https://t.me/+M8BgIFrDPGc2M2Ri" external>
                      Produkt-Chat
                    </GoldButton>
                    <GoldButton href="https://t.me/+VQB7RcwnZzs5ZmY6" external>
                      Erfahrungsberichte
                    </GoldButton>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SectionCard>
        </div>

        <GoldDivider />

        {/* ==================== SECTION 3: LR CONNECT APP ==================== */}
        <SectionCard number={3} title="LR Connect App">
          <p className="text-white/70 text-sm mb-4">
            Deine LR App für deinen Erfolg.
          </p>
          <p className="text-white/60 text-sm mb-4">
            Von hier aus hast du Zugriff auf LR Neo und MyOffice. Viele Infos auf einem Blick.
          </p>
          <p className="text-white/60 text-sm mb-4">
            Einloggen kannst du dich, sobald dein Shop steht.
          </p>
          <div className="space-y-3">
            <GoldButton href="https://apps.apple.com/de/app/lr-connect/id1510357433" external>
              App Store (iOS)
            </GoldButton>
            <GoldButton href="https://play.google.com/store/apps/details?id=com.lr.dpf" external>
              Google Play (Android)
            </GoldButton>
          </div>
        </SectionCard>

        <GoldDivider />

        {/* ==================== SECTION 4: DEINE WICHTIGSTEN SEITEN ==================== */}
        <SectionCard number={4} title="Deine wichtigsten Seiten">
          <p className="text-white/70 text-sm mb-3">Hier siehst du deine Zahlen:</p>
          <ul className="text-white/60 text-sm space-y-1 mb-4 ml-4">
            <li>• Umsätze & Bestellungen</li>
            <li>• Deine Partner & Teamstruktur</li>
            <li>• Deine Qualifikation</li>
          </ul>
          <p className="text-white/60 text-sm mb-4">
            Hier registrierst du auch neue Partner in dein Team.
          </p>
          <div className="space-y-3">
            <GoldButton href="https://myoffice.lrworld.com" external>
              MyOffice öffnen
            </GoldButton>
            <GoldButton href="https://neo.lrworld.com" external>
              LR Neo Login
            </GoldButton>
          </div>
        </SectionCard>

        <GoldDivider />

        {/* ==================== SECTION 5: 10 TEXTE AN NAMEN SCHICKEN ==================== */}
        <SectionCard number={5} title="Komm ins Handeln">
          <div 
            className="rounded-xl p-5 mb-6 border"
            style={{ 
              background: 'linear-gradient(135deg, rgba(191,149,63,0.1) 0%, rgba(0,0,0,0) 100%)',
              borderColor: 'rgba(191,149,63,0.3)'
            }}
          >
            <p className="text-white font-medium mb-2">
              Das ist der wichtigste Schritt in den ersten Tagen!
            </p>
            <p className="text-white/60 text-sm">
              Warte nicht, bis du alles weißt. Sende <strong className="text-white">mindestens 10 Nachrichten</strong> an 
              Freunde und Familie. Begeisterung ist ansteckend – nutze sie!
            </p>
          </div>

          <div 
            className="rounded-xl p-4 mb-4"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <p className="text-white font-medium mb-2">Erstelle eine Namensliste</p>
            <p className="text-white/60 text-sm mb-2">
              Wenn du erfolgreich starten willst, arbeite <strong className="text-white">von Anfang an mit System</strong>.
            </p>
            <ul className="text-white/60 text-sm space-y-1 ml-4">
              <li>• Schreibe alle Namen auf, die du kontaktierst</li>
              <li>• Mache dir Stichpunkte zu jedem Gespräch</li>
              <li>• Du wirst diese Liste später brauchen!</li>
            </ul>
          </div>

          <p className="text-white/50 text-sm mb-3">Einfaches Script:</p>
          <div className="bg-white/5 rounded-xl p-4 mb-6 text-white/70 text-sm italic">
            "Ich arbeite gerade an etwas Spannendem. Das ist vielleicht nichts für dich, vielleicht aber doch. 
            Wärst du offen, dir das mal anzuschauen?"
          </div>
          <p className="text-white/40 text-xs mb-4">
            "Enthusiasm on fire is better than knowledge on ice" – Begeisterung schlägt Wissen!
          </p>
          <GoldButton 
            href="#"
            onClick={() => toggleStep('step5')}
            checked={completedSteps.includes('step5')}
          >
            {completedSteps.includes('step5') ? '10+ Nachrichten gesendet!' : 'Ich habe 10+ Nachrichten gesendet'}
          </GoldButton>
        </SectionCard>

        <GoldDivider />

        {/* ==================== SECTION 6: FAST-TRACK BONUS ==================== */}
        <SectionCard number={6} title="Unser gemeinsames Ziel – die ersten 1-2 Wochen">
          <div 
            className="rounded-xl p-4 mb-4"
            style={{ background: 'rgba(191,149,63,0.1)', border: '1px solid rgba(191,149,63,0.3)' }}
          >
            <p className="text-white/80 text-sm font-medium mb-2">Junior Manager Qualifikation:</p>
            <ul className="text-white/60 text-sm space-y-1 ml-4">
              <li>• 2 direkte Partner mit je 500 PW</li>
              <li>• Gesamtumsatz 4.000 PW</li>
            </ul>
          </div>

          <p className="text-white font-bold text-lg mb-4 text-center">
            <span style={{ 
              background: 'linear-gradient(90deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Fast-Track-Boni:</span>
          </p>
          <div className="grid grid-cols-4 gap-2 md:gap-3 mb-6">
            <div 
              className="text-center py-4 md:py-6 px-1 md:px-2 rounded-xl relative"
              style={{ 
                background: 'transparent',
                boxShadow: '0 0 40px rgba(255,255,255,0.4), 0 0 80px rgba(255,255,255,0.2)'
              }}
            >
              <span 
                className="text-xl md:text-3xl font-black"
                style={{ 
                  background: 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 40%, #FFF 50%, #FCF6BA 60%, #BF953F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))'
                }}
              >250 €</span>
              <p className="text-white/50 text-xs mt-1">Jr. Manager</p>
            </div>
            <div 
              className="text-center py-4 md:py-6 px-1 md:px-2 rounded-xl relative"
              style={{ 
                background: 'transparent',
                boxShadow: '0 0 45px rgba(255,255,255,0.45), 0 0 90px rgba(255,255,255,0.25)'
              }}
            >
              <span 
                className="text-xl md:text-3xl font-black"
                style={{ 
                  background: 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 40%, #FFF 50%, #FCF6BA 60%, #BF953F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.6))'
                }}
              >500 €</span>
              <p className="text-white/50 text-xs mt-1">Manager</p>
            </div>
            <div 
              className="text-center py-4 md:py-6 px-1 md:px-2 rounded-xl relative"
              style={{ 
                background: 'transparent',
                boxShadow: '0 0 50px rgba(255,255,255,0.5), 0 0 100px rgba(255,255,255,0.3)'
              }}
            >
              <span 
                className="text-xl md:text-3xl font-black"
                style={{ 
                  background: 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 40%, #FFF 50%, #FCF6BA 60%, #BF953F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.7))'
                }}
              >1.000 €</span>
              <p className="text-white/50 text-xs mt-1">Jr. Teaml.</p>
            </div>
            <div 
              className="text-center py-4 md:py-6 px-1 md:px-2 rounded-xl relative"
              style={{ 
                background: 'transparent',
                boxShadow: '0 0 55px rgba(255,255,255,0.55), 0 0 110px rgba(255,255,255,0.35)'
              }}
            >
              <span 
                className="text-xl md:text-3xl font-black"
                style={{ 
                  background: 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 40%, #FFF 50%, #FCF6BA 60%, #BF953F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 18px rgba(255,255,255,0.8))'
                }}
              >1.250 €</span>
              <p className="text-white/50 text-xs mt-1">Teamleiter</p>
            </div>
          </div>

          <div 
            className="rounded-xl p-4 mb-4"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 order-2 md:order-1">
                <p className="text-white font-bold mb-2">
                  <span style={{ 
                    background: 'linear-gradient(90deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>Dein neuer Firmenwagen wartet!</span>
                </p>
                <p className="text-white/70 text-sm mb-2">
                  Wir machen deinen Erfolg sofort sichtbar.
                </p>
                <p className="text-white/60 text-sm mb-2">
                  Als Junior Manager bist du nicht nur für das Fast-Track-Bonus-Programm qualifiziert, 
                  sondern kannst dir auch direkt aus <strong className="text-white">ca. 20 Modellen</strong> dein Traumauto aussuchen.
                </p>
                <ul className="text-white/60 text-sm space-y-1 ml-4 mb-2">
                  <li>• Immer <strong className="text-white">ohne Anzahlung</strong></li>
                  <li>• <strong className="text-white">70-80% günstiger</strong> als woanders</li>
                  <li>• Du darfst das Auto auch <strong className="text-white">privat fahren</strong></li>
                </ul>
                <p className="text-white/50 text-xs">
                  Alle Infos findest du bei Lina oder im LR Neo.
                </p>
              </div>
              <div className="w-40 md:w-32 flex-shrink-0 order-1 md:order-2 mb-4 md:mb-0">
                <img 
                  src="/images/firmenwagen.png" 
                  alt="LR Firmenwagen" 
                  className="w-full h-auto object-contain"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.5)) drop-shadow(0 0 40px rgba(255,255,255,0.25))' }}
                />
              </div>
            </div>
          </div>

          <p className="text-white/40 text-xs italic">
            Details in LR Neo/MyOffice. Abhängig von Land und LR-Bedingungen.
          </p>
        </SectionCard>

        <GoldDivider />

        {/* ==================== SECTION 7: STARTERWEBINAR ==================== */}
        <SectionCard number={7} title="Starterwebinar & Teammeeting">
          <div className="mb-4">
            <h4 className="text-white font-medium mb-2">Starterwebinar</h4>
            <p className="text-white/70 text-sm mb-2">
              <strong><span style={{ background: 'linear-gradient(90deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Jeden Dienstag um 20:00 Uhr</span></strong> – live
            </p>
            <p className="text-white/60 text-sm mb-3">
              Lerne das Geschäft verstehen. Stell Fragen. <strong className="text-white">Lade deine Interessenten ein.</strong>
            </p>
            <p className="text-white/50 text-xs italic mb-4">
              Die Links kommen rechtzeitig in die Gruppen.
            </p>
          </div>

          <div 
            className="rounded-xl p-4 mb-4"
            style={{ background: 'rgba(191,149,63,0.1)', border: '1px solid rgba(191,149,63,0.3)' }}
          >
            <p className="text-white font-medium mb-2">Starterwebinare bei Lina finden:</p>
            <p className="text-white/60 text-sm mb-2">
              Schreib Lina <strong className="text-white">"Hallo"</strong> → Hauptmenü → Schnelleinstieg → Videos → <strong className="text-white">Geschäft und Karriere</strong>
            </p>
            <p className="text-white/60 text-sm">
              Du bekommst den Link zur YouTube-Playlist mit 20 Videos. <strong className="text-white">Schau das aktuellste an!</strong>
            </p>
          </div>

          <div className="mb-4">
            <h4 className="text-white font-medium mb-2">Teammeeting</h4>
            <p className="text-white/70 text-sm mb-1">
              <strong><span style={{ background: 'linear-gradient(90deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Mindestens alle 2 Wochen</span></strong>
            </p>
            <p className="text-white/60 text-sm">
              Austausch, Tipps, Motivation & gemeinsame Weiterentwicklung.
            </p>
          </div>
        </SectionCard>

        <GoldDivider />

        {/* ==================== SECTION 8: GESCHÄFTSVORSTELLUNG ==================== */}
        <SectionCard number={8} title="Geschäftsvorstellung">
          {/* Video Preview */}
          <a 
            href="https://youtu.be/N-soKAiyjsA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative rounded-xl overflow-hidden mb-4 group"
            style={{ 
              border: '2px dashed rgba(191,149,63,0.6)',
            }}
          >
            <img 
              src="/images/video_preview.webp" 
              alt="LR Lifestyle Team Präsentation" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
            <div className="absolute bottom-4 right-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ 
                  background: 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)',
                  boxShadow: '0 0 20px rgba(191,149,63,0.5)'
                }}
              >
                <PlayIcon />
              </div>
            </div>
          </a>

          <p className="text-white/70 text-sm mb-2">
            <strong className="text-white">So nutzt du die Präsentation:</strong>
          </p>
          <p className="text-white/60 text-sm mb-4">
            Schick den Link an Interessenten oder zeig sie live per Zoom. Nutze sie für deine Geschäftsvorstellungen.
          </p>
          
          <div 
            className="rounded-xl p-4 mb-4"
            style={{ background: 'rgba(191,149,63,0.1)', border: '1px solid rgba(191,149,63,0.3)' }}
          >
            <p className="text-white/80 text-sm font-medium mb-2">Link personalisieren:</p>
            <p className="text-white/60 text-sm">
              Wenn du den Link personalisierst, erscheinen <strong className="text-white">dein Name, dein Bild und deine Kontaktdaten</strong> in der Präsentation – nicht die von Mathias.
            </p>
          </div>

          <div className="space-y-3 mb-4">
            <GoldButton href="https://youtu.be/N-soKAiyjsA" external>
              Video abspielen
            </GoldButton>
            <GoldButton href="https://dein-lr-business.de/" external>
              Präsentation öffnen
            </GoldButton>
            <GoldButton href="https://dein-lr-business.de/personalize.html" external>
              Link personalisieren
            </GoldButton>
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="warum" className="border-white/10">
              <AccordionTrigger className="text-white/80 text-sm hover:text-white">
                Warum diese Präsentation?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-white/60 text-sm pt-2">
                  Die Präsentation erklärt das LR Geschäftsmodell professionell und überzeugend. 
                  Sie ist optimiert für Interessenten und nimmt dir die Arbeit ab, alles selbst erklären zu müssen.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SectionCard>

        <GoldDivider />

        {/* ==================== SECTION 9: KI-VOICE ==================== */}
        <SectionCard number={9} title="Unternehmer-Tool: KI-Voice">
          <h4 className="text-white font-medium mb-3">Dein persönlicher Team-Link</h4>
          <p className="text-white/70 text-sm mb-4">
            Wenn du Unternehmer kennst, nutze dieses Tool.
          </p>
          <p className="text-white/60 text-sm mb-4">
            Erstelle deinen personalisierten Team-Link mit deiner Partnernummer. 
            Durch Cookies werden deine Interessenten automatisch dir zugeordnet, wenn sie sich registrieren.
          </p>
          
          <div 
            className="rounded-xl p-4 mb-4"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ background: '#BF953F' }} />
                <p className="text-white/60 text-sm"><strong className="text-white">Schritt 1:</strong> Partnernummer bereithalten (DE/AT/ES + Zahlen)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ background: '#BF953F' }} />
                <p className="text-white/60 text-sm"><strong className="text-white">Schritt 2:</strong> Link erstellen</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ background: '#BF953F' }} />
                <p className="text-white/60 text-sm"><strong className="text-white">Schritt 3:</strong> Link kopieren</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ background: '#BF953F' }} />
                <p className="text-white/60 text-sm"><strong className="text-white">Schritt 4:</strong> Nur noch diesen Link nutzen!</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="text-center p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span className="text-white/50 text-xs">Insta Bio</span>
            </div>
            <div className="text-center p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span className="text-white/50 text-xs">WhatsApp Status</span>
            </div>
            <div className="text-center p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span className="text-white/50 text-xs">Story Link / DMs</span>
            </div>
            <div className="text-center p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span className="text-white/50 text-xs">QR Code</span>
            </div>
          </div>

          <div className="space-y-3">
            <GoldButton href="https://ki-voice.net/" external>
              KI-Voice Webseite ansehen
            </GoldButton>
            <GoldButton href="https://ki-voice.net/team-link" external>
              Jetzt Team-Link erstellen
            </GoldButton>
          </div>
        </SectionCard>

        <GoldDivider />

        {/* ==================== SECTION 10: WICHTIGE INFOS ==================== */}
        <SectionCard number={10} title="Wichtige Infos & Seiten">
          <p className="text-white/70 text-sm mb-4">
            Auf der Seite findest du ausführliche Infos + Lina Chat für allgemeine Fragen.
          </p>
          <div className="space-y-3 mb-6">
            <GoldButton href="https://lrlifestyle.pro/" external>
              Info-Seite für Interessenten
            </GoldButton>
          </div>
          
          {/* LR Job Seite - Eigene Partner-Registrierungsseite */}
          <div 
            className="rounded-xl p-4 mt-4"
            style={{ background: 'rgba(191,149,63,0.1)', border: '1px solid rgba(191,149,63,0.2)' }}
          >
            <h4 
              className="font-bold mb-2"
              style={{ 
                background: 'linear-gradient(90deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >Deine eigene Partner-Registrierungsseite</h4>
            <p className="text-white/70 text-sm mb-3">
              Du bekommst <strong className="text-white">deine eigene personalisierte Seite</strong> mit deinem Namen, Foto und Video!
            </p>
            <p className="text-white/60 text-sm mb-3">
              <strong className="text-white">So funktioniert's:</strong>
            </p>
            <ul className="text-white/60 text-sm space-y-1 ml-4 mb-3">
              <li>• Geh auf <strong className="text-white">lr-job.eu/team</strong></li>
              <li>• Trag deinen Namen, E-Mail und Wunsch-Kurznamen ein</li>
              <li>• Lade ein Foto von dir hoch und wähle ein Video</li>
              <li>• Klick auf "Kurzlink erstellen" – fertig!</li>
            </ul>
            <p className="text-white/60 text-sm mb-3">
              Du bekommst dann deinen persönlichen Kurzlink, z.B. <strong className="text-white">lr-job.eu/dein-name</strong>
            </p>
            <p className="text-white/70 text-sm mb-4">
              <strong className="text-white">Was bringt dir das?</strong> Wenn sich jemand über deine Seite einträgt, bekommst du automatisch eine E-Mail mit allen Daten – Name, Adresse, Kontakt, IBAN und gewähltes Startset. Damit kannst du den neuen Partner direkt bei LR eintragen!
            </p>
            <div className="space-y-3">
              <GoldButton href="https://lr-job.eu/team" external>
                Jetzt eigene Seite erstellen
              </GoldButton>
              <GoldButton href="https://lr-job.eu/" external>
                Beispiel-Seite ansehen
              </GoldButton>
            </div>
          </div>
        </SectionCard>

        <GoldDivider />

        {/* ==================== SECTION 11: SOCIAL MEDIA SYSTEM ==================== */}
        <SectionCard number={11} title="Social Media System – dein automatischer Kanal">
          <p className="text-white/70 text-sm mb-4">
            Dein persönlicher KI-Assistent postet automatisch auf bis zu 9 Social-Media-Kanälen gleichzeitig – komplett ohne Aufwand für dich.
          </p>

          {/* Was das System macht */}
          <div 
            className="rounded-xl p-4 mb-4"
            style={{ background: 'rgba(191,149,63,0.1)', border: '1px solid rgba(191,149,63,0.2)' }}
          >
            <h4 
              className="font-bold mb-3"
              style={{ 
                background: 'linear-gradient(90deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >Was das System für dich erledigt:</h4>
            <div className="space-y-2">
              {[
                '✅ KI erstellt täglich fertige Posts, Bilder & Videos',
                '✅ Automatisches Posting auf Instagram, Facebook, TikTok, LinkedIn, Threads, Twitter/X & mehr',
                '✅ Lina (KI) spricht in Videos – du musst nicht vor die Kamera',
                '✅ Inhalte werden von dir oder deinem Sponsor freigegeben',
                '✅ Interessenten kommen automatisch per WhatsApp auf dein Handy',
              ].map((item, i) => (
                <p key={i} className="text-white/70 text-sm">{item}</p>
              ))}
            </div>
          </div>

          {/* Schritt-für-Schritt Aktivierung */}
          <div 
            className="rounded-xl p-4 mb-4"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <h4 className="text-white font-medium mb-3">So aktivierst du das System:</h4>
            <div className="space-y-3">
              {[
                { step: 'Schritt 1', text: 'Schreibe "Hallo" an Lina auf WhatsApp oder Telegram – sie begrüßt dich und zeigt das Hauptmenü' },
                { step: 'Schritt 2', text: 'Tippe auf "Social Media Dashboard" im Menü unter "Neue Features" – Lina schickt dir deinen Magic-Link' },
                { step: 'Schritt 3', text: 'Klicke den Magic-Link – du bist sofort eingeloggt, kein Passwort nötig' },
                { step: 'Schritt 4', text: 'Verbinde deine Social-Media-Kanäle unter "Einstellungen" – einmalig, dauert 5 Minuten' },
                { step: 'Schritt 5', text: 'Das System erstellt und postet täglich Content für dich – du konzentrierst dich auf Gespräche & Abschlüsse' },
              ].map(({ step, text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: '#BF953F' }} />
                  <p className="text-white/60 text-sm"><strong className="text-white">{step}:</strong> {text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kanäle Grid */}
          <div className="mb-4">
            <p className="text-white/50 text-xs mb-2">Unterstützte Kanäle:</p>
            <div className="grid grid-cols-3 gap-2">
              {['Instagram', 'Facebook', 'TikTok', 'LinkedIn', 'Threads', 'Twitter/X', 'YouTube', 'Pinterest', 'Bluesky'].map(kanal => (
                <div key={kanal} className="text-center p-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span className="text-white/60 text-xs">{kanal}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <GoldButton href="https://api.whatsapp.com/send?phone=4915170605019" external>
              Bei Lina registrieren & Magic Link erhalten
            </GoldButton>
            <GoldButton href="https://sozialmedia.best" external>
              Social Media System öffnen
            </GoldButton>
          </div>
        </SectionCard>

        {/* Footer */}
        <div className="text-center text-white/40 text-xs py-8 border-t border-white/10">
          <p className="mb-2">
            Bonus- & Auto-Programme sind abhängig von Land/aktuellen LR-Bedingungen und persönlicher Aktivität.
          </p>
          <p className="mb-4">Keine Einkommens- oder Ergebnisgarantie.</p>
          <div className="flex justify-center gap-4 mb-4">
            <a href="/impressum" className="hover:text-white">Impressum</a>
            <a href="/datenschutz" className="hover:text-white">Datenschutz</a>
          </div>
          <p>© 2025 LR Lifestyle Team. All rights reserved.</p>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=4917150600008"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 py-3 px-5 rounded-full font-medium transition-all duration-300 hover:scale-105"
        style={{ 
          background: 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 50%, #BF953F 100%)',
          color: '#000',
          boxShadow: '0 0 30px rgba(255,255,255,0.3)'
        }}
      >
        <span>Direkter Draht zu Mathias</span>
      </a>
    </div>
  );
}
