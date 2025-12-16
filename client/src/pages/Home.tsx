import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLink, MessageCircle, Play, Users, Video, Mic, Link as LinkIcon, Smartphone, ArrowRight, LayoutDashboard } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4AF37]/30">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container max-w-md mx-auto px-4 py-8 pb-24 space-y-8">
        
        {/* Header Logo */}
        <div className="flex justify-center mb-4 relative">
          <img src="/lr_lifestyle_logo_freigestellt_small(1).png" alt="LR Lifestyle Team" className="h-24 w-auto drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
          {isAuthenticated && (
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="absolute right-0 top-1/2 -translate-y-1/2 text-[#D4AF37] hover:text-[#D4AF37]/80 hover:bg-[#D4AF37]/10">
                <LayoutDashboard className="h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>

        {/* Hero Section */}
        <section className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="space-y-2">
            <h1 className="text-4xl font-heading font-bold tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              Willkommen im Team
            </h1>
            <p className="text-lg text-muted-foreground">Dein Start in ein neues Leben beginnt hier.</p>
          </div>

          {/* Profile Card */}
          <Card className="border-[#D4AF37]/20 bg-white/5 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden group hover:border-[#D4AF37]/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-6 flex flex-col items-center gap-4 relative">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                  <img src="/pasted_file_9CpZcv_image.png" alt="Mathias Vinzing" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#D4AF37] text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                  LEADER
                </div>
              </div>
              <div className="text-center space-y-1">
                <h2 className="text-xl font-bold text-white">Mathias Vinzing</h2>
                <p className="text-sm text-[#D4AF37] font-medium tracking-wide uppercase">LR Lifestyle Team</p>
              </div>
              
              <div className="grid grid-cols-1 gap-3 w-full mt-2">
                <Button className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all hover:scale-[1.02]" asChild>
                  <a href="https://wa.me/4917622066606" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Kontakt aufnehmen
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Startplan Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            <span className="text-[#D4AF37]">Dein</span> Startplan
          </h2>
          <Card className="border-white/10 bg-white/5 backdrop-blur-md">
            <CardContent className="p-6">
              <div className="grid gap-4">
                <div className="flex flex-col gap-2 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#D4AF37]/30 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-bold border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">1</div>
                    <span className="text-white font-medium">Lina (KI) aktivieren</span>
                  </div>
                  <p className="text-sm text-muted-foreground ml-11">Dein 24/7 Coach für alle Fragen.</p>
                </div>
                <div className="flex flex-col gap-2 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#D4AF37]/30 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-bold border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">2</div>
                    <span className="text-white font-medium">LR Neo & MyOffice</span>
                  </div>
                  <p className="text-sm text-muted-foreground ml-11">Apps downloaden & einloggen.</p>
                </div>
                <div className="flex flex-col gap-2 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#D4AF37]/30 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-bold border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">3</div>
                    <span className="text-white font-medium">Gruppen beitreten</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-muted-foreground ml-11 space-y-1">
                    <li>WhatsApp Info & Austausch</li>
                    <li>Telegram Gruppen</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#D4AF37]/30 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-bold border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">5</div>
                    <span className="text-white font-medium">Namensliste erstellen</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-muted-foreground ml-11 space-y-1">
                    <li>Kontakte aufschreiben</li>
                    <li>Lina um Hilfe bitten</li>
                    <li>Gespräche vorbereiten</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-center text-muted-foreground mt-4">Wenn du alles erledigt hast, setze bitte ein 👍 auf die WhatsApp-Nachricht – so wissen wir, dass du ready bist.</p>
            </CardContent>
          </Card>
        </section>

        {/* Lina Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <div className="flex items-center gap-3 mb-2">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <img src="/293a3d8f-5826-4146-ae0e-f3571b1538a6.png" alt="Lina AI" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
              <span className="text-[#D4AF37]">1)</span> Lina (KI) – dein 24/7 Coach
            </h2>
          </div>
          
          <Card className="border-white/10 bg-white/5 backdrop-blur-md mb-4">
            <CardContent className="p-4 text-muted-foreground space-y-2">
              <p className="font-medium text-white">Hallo und herzlich willkommen im LR Lifestyle Team.</p>
              <p>Ich bin Lina – deine digitale Partnerin auf deinem Weg im LR Business.</p>
              <p>Ich begleite dich Schritt für Schritt:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>beim Onboarding</li>
                <li>bei der Einrichtung deines Online-Shops</li>
                <li>bei Produktfragen</li>
                <li>beim Teamaufbau</li>
                <li>bei Social Media</li>
                <li>und sogar per Live-Telefonat</li>
              </ul>
              <p>Du bist nicht allein. Ich bin 24/7 für dich da und helfe dir, deinen Start einfach, klar und strukturiert zu machen.</p>
            </CardContent>
          </Card>

          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem value="item-1" className="border border-white/10 bg-white/5 rounded-xl px-4 data-[state=open]:bg-white/10 transition-all duration-300">
              <AccordionTrigger className="text-white hover:text-[#D4AF37] hover:no-underline font-medium py-4">
                Lina aktivieren
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 space-y-2">
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>WhatsApp öffnen: <a href="https://wa.me/4915207962638" className="text-[#D4AF37] hover:underline">Hier klicken</a></li>
                  <li>„Hallo“ schreiben</li>
                  <li>Menü → Onboarding Hilfe</li>
                  <li>Partnernummer eingeben (nur für LR Partner)</li>
                  <li>Daten eintragen</li>
                  <li>Freischaltung erhalten → unbegrenzter Zugang</li>
                </ul>
                <Button className="w-full mt-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold" asChild>
                  <a href="https://wa.me/4915207962638" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Lina auf WhatsApp öffnen
                  </a>
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-white/10 bg-white/5 rounded-xl px-4 data-[state=open]:bg-white/10 transition-all duration-300">
              <AccordionTrigger className="text-white hover:text-[#D4AF37] hover:no-underline font-medium py-4">
                Was Lina konkret kann
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Onboarding: Shop, System & Tools</li>
                  <li>WhatsApp Vorlagen: Einladungen, Follow-ups, Antworten</li>
                  <li>Social Media: Texte, Ideen, Hooks, Skripte</li>
                  <li>Produktinfos & Anwendungen (ohne Heilaussagen)</li>
                  <li>Teamaufbau & Namensliste</li>
                  <li>Lernpfade + Quiz zur Wissensprüfung</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-white/10 bg-white/5 rounded-xl px-4 data-[state=open]:bg-white/10 transition-all duration-300">
              <AccordionTrigger className="text-white hover:text-[#D4AF37] hover:no-underline font-medium py-4">
                Mit Lina telefonieren
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Menü → „Mit Lina telefonieren“</li>
                  <li>Link per WhatsApp erhalten</li>
                  <li>Link öffnen</li>
                  <li>Ziele besprechen</li>
                  <li>Termine & Geschäftsvorstellungen üben</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-xl px-4 data-[state=open]:bg-[#D4AF37]/10 transition-all duration-300">
              <AccordionTrigger className="text-[#D4AF37] hover:text-[#D4AF37]/80 hover:no-underline font-bold py-4">
                Wichtig: Fragen stellen!
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <p>Stell Lina unbedingt Fragen unten im Chat. Sie macht dir Vorschläge, zeigt dir nächste Schritte und hilft dir genau da, wo du gerade stehst.</p>
                <Button className="w-full mt-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold" asChild>
                  <a href="https://wa.me/4915207962638" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Lina eine Frage stellen
                  </a>
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* LR Neo Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            <span className="text-[#D4AF37]">2)</span> LR Neo & MyOffice
          </h2>
          <Card className="border-white/10 bg-white/5 backdrop-blur-md">
            <CardContent className="p-6 space-y-4">
              
              {/* App Download Links */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <a href="https://apps.apple.com/de/app/lr-connect/id1510357433" target="_blank" rel="noopener noreferrer" className="block transition-transform hover:scale-105">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="w-full h-auto" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.lr.dpf&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="block transition-transform hover:scale-105">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="w-full h-auto" />
                </a>
              </div>
              <p className="text-muted-foreground">
                LR Neo und MyOffice sind deine zentralen Seiten für deinen Erfolg. Hier siehst du:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground ml-2 space-y-1">
                <li>Umsätze</li>
                <li>Bestellungen</li>
                <li>neue Partner</li>
                <li>Teamstruktur</li>
                <li>deine Qualifikation</li>
              </ul>
              <p className="text-muted-foreground text-sm mt-2">Hier kannst du auch neue Partner direkt online in dein Team registrieren.</p>
              <div className="grid gap-3 mt-4">
                <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300" asChild>
                  <a href="https://myoffice.lrworld.com/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    MyOffice öffnen
                  </a>
                </Button>
                <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300" asChild>
                  <a href="https://sso.lrworld.com/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    LR Neo Login
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Gruppen Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            <span className="text-[#D4AF37]">3)</span> Gruppen
          </h2>
          <div className="grid gap-4">
            <Card className="border-white/10 bg-white/5 backdrop-blur-md">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-[#D4AF37]" />
                  WhatsApp Gruppen
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Gruppe 1:</strong> Wichtige Infos von Mathias (News, Angebote, Webinare)</p>
                  <p><strong>Gruppe 2:</strong> Austausch & Support</p>
                </div>
                <div className="grid gap-2">
                  <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300" asChild>
                    <a href="https://chat.whatsapp.com/EA0k6OTVONGLMc1b7e0AsV" target="_blank" rel="noopener noreferrer">
                      Info-Gruppe beitreten
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300" asChild>
                    <a href="https://chat.whatsapp.com/DyERWKHRx7SBc9QT4hV5qP" target="_blank" rel="noopener noreferrer">
                      Austausch-Gruppe beitreten
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 backdrop-blur-md">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-[#D4AF37]" />
                  Telegram Kanäle
                </h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground ml-2 space-y-1">
                  <li>Mehr Infos als WhatsApp</li>
                  <li>Austausch</li>
                  <li>Content & Materialien</li>
                </ul>
                <div className="grid gap-2">
                  <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300" asChild>
                    <a href="https://t.me/+TxckV-xlENozYmEy" target="_blank" rel="noopener noreferrer">
                      Club 1000
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300" asChild>
                    <a href="https://t.me/+DtNs0IQR1D4yZWVi" target="_blank" rel="noopener noreferrer">
                      Produktgruppe
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300" asChild>
                    <a href="https://t.me/+M8BgIFrDPGc2M2Ri" target="_blank" rel="noopener noreferrer">
                      Produkt-Chat
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300" asChild>
                    <a href="https://t.me/+VQB7RcwnZzs5ZmY6" target="_blank" rel="noopener noreferrer">
                      Erfahrungsberichte (erst Regeln lesen)
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Webinar Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            <span className="text-[#D4AF37]">4)</span> Starterwebinar & Meeting
          </h2>
          <Card className="border-white/10 bg-white/5 backdrop-blur-md overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#D4AF37] font-semibold">
                  <Video className="h-5 w-5" />
                  <span>Starterwebinar</span>
                </div>
                <p className="text-white font-medium">Jeden DIENSTAG um 20:00 Uhr – live.</p>
                <p className="text-muted-foreground text-sm">
                  Hier kannst du alles verstehen, Fragen stellen und auch jederzeit deine Interessenten einladen. Die Links kommen rechtzeitig in die Gruppen.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#D4AF37] font-semibold">
                  <Users className="h-5 w-5" />
                  <span>Teammeeting</span>
                </div>
                <p className="text-white font-medium">Mindestens alle 2 Wochen.</p>
                <p className="text-muted-foreground text-sm">
                  Austausch, Tipps, Motivation & gemeinsame Weiterentwicklung.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Business Presentation Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            <span className="text-[#D4AF37]">5)</span> Geschäftsvorstellung
          </h2>
          <Card className="border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
            <div className="relative aspect-video bg-black/50 group cursor-pointer">
              <img src="/images/presentation-thumb.jpg" alt="Geschäftsvorstellung" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/90 flex items-center justify-center shadow-lg shadow-[#D4AF37]/20 group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-6 w-6 text-black fill-black ml-1" />
                </div>
              </div>
            </div>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-white">Das LR Geschäftsmodell</h3>
              <p className="text-muted-foreground text-sm">
                Nutze dieses Video oder die Präsentation, um Interessenten das Geschäft zu erklären.
              </p>
              <div className="grid gap-2">
                <Button className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-semibold" asChild>
                  <a href="https://youtu.be/N-soKAiyjsA?si=pyPZf8iJxaFje7h1" target="_blank" rel="noopener noreferrer">
                    Video ansehen
                  </a>
                </Button>
                <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300" asChild>
                  <a href="https://dein-lr-business.de/" target="_blank" rel="noopener noreferrer">
                    Präsentation öffnen
                  </a>
                </Button>
                <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300" asChild>
                  <a href="https://dein-lr-business.de/personalize.html" target="_blank" rel="noopener noreferrer">
                    Link personalisieren
                  </a>
                </Button>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="why-presentation" className="border-white/10">
                  <AccordionTrigger className="text-sm text-muted-foreground hover:text-white">
                    Warum diese Präsentation?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm space-y-2">
                    <ul className="list-disc list-inside ml-2">
                      <li>5 Stichpunkte pro Folie</li>
                      <li>einfach ablesen & in eigenen Worten erklären</li>
                      <li>roter Faden für jede Geschäftsvorstellung</li>
                      <li>für Handy & PC optimiert</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* KI Voice Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            <span className="text-[#D4AF37]">6)</span> Unternehmer-Tool: KI-Voice
          </h2>
          <Card className="border-white/10 bg-white/5 backdrop-blur-md overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/20">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <Mic className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">KI-Voice Tool</h3>
                  <p className="text-sm text-purple-200">Wenn du Unternehmer kennst, nutze dieses Tool.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative pl-4 border-l-2 border-purple-500/30 space-y-4">
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                    <p className="text-sm text-white font-medium">1. Partnernummer bereithalten</p>
                    <p className="text-xs text-muted-foreground">Format: DE/AT/ES + Zahlen</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-purple-500/50" />
                    <p className="text-sm text-white font-medium">2. Link erstellen</p>
                    <p className="text-xs text-muted-foreground">Auf der KI-Voice Seite generieren</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-purple-500/30" />
                    <p className="text-sm text-white font-medium">3. Link kopieren & nutzen</p>
                    <p className="text-xs text-muted-foreground">Instagram Bio, WhatsApp Status, Story Link, DMs, QR Code</p>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 shadow-lg shadow-purple-500/20" asChild>
                    <a href="https://ki-voice.net/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      KI-Voice öffnen
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-white" asChild>
                    <a href="https://ki-voice.net/team-link" target="_blank" rel="noopener noreferrer">
                      <LinkIcon className="mr-2 h-4 w-4" />
                      Team-Link erstellen
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Fast Track & Auto Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            Dein möglicher Fast-Track Start*
          </h2>
          <Card className="border-white/10 bg-white/5 backdrop-blur-md">
            <CardContent className="p-6 space-y-4 text-muted-foreground">
              <p>LR bietet strukturierte Programme für neue Partner.</p>
              <div className="space-y-2">
                <p className="font-medium text-white">Mögliche Bonus-Stufen*:</p>
                <ul className="list-disc list-inside ml-2">
                  <li>300 €</li>
                  <li>1.100 €</li>
                  <li>2.000 €</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-white">Möglicher erster Karriereschritt:</p>
                <ul className="list-disc list-inside ml-2">
                  <li>Junior Manager*</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-white">Auto-Konzept:</p>
                <p>Ab bestimmtem Umsatz & Teamleistung möglich.*</p>
              </div>
              <p className="text-xs text-muted-foreground/60 mt-4">*Keine Garantie. Abhängig von Land, LR-Bedingungen und persönlicher Aktivität. Details in LR Neo/MyOffice.</p>
            </CardContent>
          </Card>
        </section>

        {/* Important Links Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            Wichtige Infos & Seiten
          </h2>
          <Card className="border-white/10 bg-white/5 backdrop-blur-md">
            <CardContent className="p-6">
              <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300" asChild>
                <a href="https://lrlifestyle.pro/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Info-Seite für Interessenten
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center space-y-4 border-t border-white/5">
          <div className="flex justify-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Impressum</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Datenschutz</a>
          </div>
          <div className="space-y-2 text-xs text-muted-foreground/50 max-w-xs mx-auto">
            <p>Dies ist eine unabhängige Partnerseite. LR Health & Beauty Systems ist eine eingetragene Marke.</p>
            <p>Keine Einkommens- oder Ergebnisgarantie.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
