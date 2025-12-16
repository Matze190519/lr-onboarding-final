import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, MessageCircle, Users, ExternalLink, Smartphone, Video, Play, Mic, Link as LinkIcon, QrCode, Mail, Phone, CheckCircle2, Star, Car, TrendingUp, Globe } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[#BF953F]/30">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-[#BF953F]/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-[#AA771C]/5 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 container max-w-md mx-auto py-8 px-4 flex flex-col gap-8">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="space-y-2">
            <div className="flex justify-center mb-6">
              <img src="/images/logo.png" alt="LR Lifestyle Team Logo" className="h-32 w-auto drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-white drop-shadow-sm leading-tight">
              Herzlich willkommen im <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#AA771C] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">LR Lifestyle Team</span>
            </h1>
            <p className="text-lg text-muted-foreground font-light">
              Dein Start in 30–60 Minuten – Schritt für Schritt
            </p>
          </div>

          {/* Profile Card */}
          <Card className="w-full border-white/5 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden group hover:border-[#BF953F]/30 transition-all duration-500">
            <CardContent className="p-6 flex flex-col items-center gap-4">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#AA771C] rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-all duration-500 animate-pulse" />
                <div className="absolute -inset-3 bg-gradient-to-br from-[#BF953F]/40 via-[#FCF6BA]/40 to-[#AA771C]/40 rounded-full blur-lg" />
                <Avatar className="w-32 h-32 border-4 border-[#BF953F] relative ring-4 ring-[#FCF6BA]/30 ring-offset-4 ring-offset-black shadow-2xl shadow-[#BF953F]/50">
                  <AvatarImage src="/images/profile-new.png" alt="Mathias Vinzing" className="object-cover" />
                  <AvatarFallback className="bg-muted text-muted-foreground">MV</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="text-center space-y-1">
                <h3 className="text-xl font-heading font-semibold text-white">Mathias Vinzing</h3>
                <p className="text-sm text-[#BF953F] font-medium tracking-wide uppercase text-xs">Platin Orgaleiter</p>
              </div>

              {/* Kontaktdaten */}
              <div className="w-full space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-[#BF953F]" />
                  <a href="https://wa.me/491715060008" className="hover:text-[#BF953F] transition-colors">WhatsApp: +49 171 506 0008</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-[#BF953F]" />
                  <a href="mailto:info@lr-lifestyle.info" className="hover:text-[#BF953F] transition-colors">info@lr-lifestyle.info</a>
                </div>
              </div>

              <div className="w-full grid gap-3 mt-2">
                <Button className="w-full bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#AA771C] hover:brightness-110 text-black font-bold shadow-lg shadow-[#BF953F]/20 transition-all duration-300 hover:scale-[1.02] border-0" size="lg" asChild>
                  <a href="https://api.whatsapp.com/send?phone=4915170605019" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Lina starten (WhatsApp)
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-[#FCF6BA] hover:border-[#BF953F]/50 transition-all duration-300" size="lg" asChild>
                  <a href="https://myoffice.lrworld.com/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    LR Neo / MyOffice öffnen
                  </a>
                </Button>

                <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-[#FCF6BA] hover:border-[#BF953F]/50 transition-all duration-300" size="lg" asChild>
                  <a href="#gruppen">
                    <Users className="mr-2 h-4 w-4" />
                    Gruppen beitreten
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
        {/* Lina Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <div className="flex items-center gap-3 mb-2">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <img src="/images/lina.png" alt="Lina AI" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#AA771C]">1)</span> Lina (KI) – dein 24/7 Coach
            </h2>
          </div>

          {/* Lina Intro Text */}
          <Card className="border-[#BF953F]/20 bg-[#BF953F]/5 backdrop-blur-md">
            <CardContent className="p-6 space-y-4 text-muted-foreground">
              <p className="text-white font-medium">Hallo und herzlich willkommen im LR Lifestyle Team.</p>
              <p>Ich bin <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] font-bold">Lina</span> – deine digitale Partnerin auf deinem Weg im LR Business.</p>
              
              <p>Ich begleite dich Schritt für Schritt:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Beim Onboarding</li>
                <li>Bei der Einrichtung deines Online-Shops</li>
                <li>Bei Produktfragen</li>
                <li>Beim Teamaufbau</li>
                <li>Bei Social Media</li>
                <li>Und sogar per Live-Telefonat</li>
              </ul>

              <p className="text-white font-medium">Du bist nicht allein. Ich bin 24/7 für dich da und helfe dir, deinen Start einfach, klar und strukturiert zu machen.</p>
            </CardContent>
          </Card>
          
          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem value="item-1" className="border border-white/10 bg-white/5 rounded-xl px-4 data-[state=open]:bg-white/10 transition-all duration-300">
              <AccordionTrigger className="text-white hover:text-[#BF953F] hover:no-underline font-medium py-4">
                Lina starten
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 space-y-2">
                <p>Öffne Lina auf WhatsApp.</p>
                <p>Schreibe „Hallo".</p>
                <p>Lina antwortet dir.</p>
                <p>Tippe unten auf Choose und wähle Onboarding Hilfe.</p>
                <p>Falls Lina nach deiner Partnernummer fragt, gib sie ein und trage deine Daten ein.</p>
                <p>Danach bist du freigeschaltet.</p>
                <Button className="w-full mt-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold" asChild>
                  <a href="https://api.whatsapp.com/send?phone=4915170605019" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Lina auf WhatsApp öffnen
                  </a>
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-white/10 bg-white/5 rounded-xl px-4 data-[state=open]:bg-white/10 transition-all duration-300">
              <AccordionTrigger className="text-white hover:text-[#BF953F] hover:no-underline font-medium py-4">
                LR-Onboarding (OnlineShop & Webseite)
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 space-y-2">
                <p>Tippe unten auf Choose und wähle Onboarding.</p>
                <p>Starte mit OnlineShop einrichten und gehe alles Schritt für Schritt durch.</p>
                <p>Danach Webseite einrichten und ebenfalls komplett abschließen.</p>
                <p>Das ist dein technischer Start ins LR Business.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-white/10 bg-white/5 rounded-xl px-4 data-[state=open]:bg-white/10 transition-all duration-300">
              <AccordionTrigger className="text-white hover:text-[#BF953F] hover:no-underline font-medium py-4">
                Lina-Onboarding (Videos zur Bedienung)
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 space-y-2">
                <p>Das Lina-Onboarding ist ein separater Bereich.</p>
                <p>Hier erklärt dir Lina per Video, wie du Lina benutzt</p>
                <p>und wie die wichtigsten Funktionen aufgebaut sind.</p>
                <p>Zu jeder wichtigen Kategorie gibt es am Ende ein Quiz.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-white/10 bg-white/5 rounded-xl px-4 data-[state=open]:bg-white/10 transition-all duration-300">
              <AccordionTrigger className="text-white hover:text-[#BF953F] hover:no-underline font-medium py-4">
                Normale Lina-Menüs (alle LR-Themen)
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 space-y-2">
                <p>Über Choose erreichst du die normalen Lina-Menüs.</p>
                <p>Dort kannst du aus mehreren Menüpunkten zu verschiedenen LR-Themen wählen</p>
                <p>(z. B. Fast-Track, Auto-Konzept, Teamaufbau, Social Media usw.).</p>
                <p>Geh diese Menüs einmal durch, damit du sicher wirst</p>
                <p>und jederzeit weißt, wo du welches Thema findest.</p>
                <p>Auch hier gibt es zu jeder wichtigen Kategorie ein Quiz.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-[#BF953F]/30 bg-[#BF953F]/5 rounded-xl px-4 data-[state=open]:bg-[#BF953F]/10 transition-all duration-300">
              <AccordionTrigger className="text-[#BF953F] hover:text-[#BF953F]/80 hover:no-underline font-bold py-4">
                Wichtig – stell Lina Fragen
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 space-y-3">
                <p>Nutze Lina aktiv – entweder schriftlich per Chat oder live per Telefon.</p>
                <p className="text-white font-medium">Schreibe Lina Fragen, zum Beispiel:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>„Lina, was ist mein nächster Schritt?“</li>
                  <li>„Hilf mir bitte eine Namensliste zu erstellen.“</li>
                  <li>„Wie erkläre ich das LR Business richtig?“</li>
                </ul>
                <p className="text-white font-medium">Oder nutze „Telefoniere mit Lina“:</p>
                <p>Wähle im Choose-Menü „Telefoniere mit Lina“ und sprich live mit ihr – wie ein echtes Telefongespräch.</p>
                <p>Lina macht dir Vorschläge und hilft dir genau dort weiter, wo du gerade stehst.</p>
                <Button className="w-full bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#AA771C] hover:brightness-110 text-black font-semibold" asChild>
                  <a href="https://api.whatsapp.com/send?phone=4915170605019" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Lina eine Frage stellen
                  </a>
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* LR Connect App Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#AA771C]">2)</span> LR Connect App
          </h2>
          <Card className="border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden group hover:border-[#BF953F]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#BF953F]/20 hover:-translate-y-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#BF953F]/20 via-[#FCF6BA]/20 to-[#AA771C]/20 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            <CardContent className="p-6 space-y-4">
              <p className="text-muted-foreground">
                Die LR Connect App ist deine mobile Zentrale für unterwegs. Hier hast du Zugriff auf wichtige Funktionen, Produktinfos und dein Team.
              </p>
              
              <div className="grid gap-3">
                <Button variant="outline" className="w-full justify-between border-white/10 bg-white/5 hover:bg-white/10 hover:text-[#BF953F] hover:border-[#BF953F]/30 h-auto py-4" asChild>
                  <a href="https://apps.apple.com/de/app/lr-connect/id1510357433" target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center gap-2"><Smartphone className="h-4 w-4" /> App Store (iOS)</span>
                    <ArrowRight className="h-4 w-4 opacity-50" />
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-between border-white/10 bg-white/5 hover:bg-white/10 hover:text-[#BF953F] hover:border-[#BF953F]/30 h-auto py-4" asChild>
                  <a href="https://play.google.com/store/apps/details?id=com.lr.dpf&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center gap-2"><Smartphone className="h-4 w-4" /> Google Play (Android)</span>
                    <ArrowRight className="h-4 w-4 opacity-50" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* NEW SECTION: Dein Start */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <h2 className="text-2xl font-heading font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#AA771C]">Dein Start</span> – die ersten Tage im LR Business
          </h2>
          <Card className="border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden group hover:border-[#BF953F]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#BF953F]/20 hover:-translate-y-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#BF953F]/20 via-[#FCF6BA]/20 to-[#AA771C]/20 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            <CardContent className="p-6 space-y-4 text-muted-foreground">
              <p>Das hier ist der Anfang deines Geschäfts. Es geht nicht darum, sofort alles perfekt zu können, sondern darum, das Geschäft <strong className="text-white">Schritt für Schritt</strong> zu erlernen.</p>
              
              <p className="font-medium text-white">In den ersten Tagen geht es darum:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Erste Kunden kennenzulernen</li>
                <li>Erste Partner zu gewinnen</li>
                <li>Gespräche zu führen</li>
                <li>Deinen Weg zur Duplikation zu finden</li>
              </ul>

              <p>Network Marketing funktioniert nicht über wenige Gespräche mit Druck, sondern über <strong className="text-white">viele Gespräche mit Leichtigkeit</strong>.</p>

              <div className="bg-[#BF953F]/5 border border-[#BF953F]/20 rounded-lg p-4 space-y-2">
                <p className="text-white font-medium">Sprich mit Menschen. Zeig ihnen Produkte. Sprich über Möglichkeiten. Höre zu.</p>
                <p className="text-sm">Nicht jeder ist der Richtige – und genau das ist Teil dieses Geschäfts. Es geht nicht ums Rekrutieren um jeden Preis, sondern ums <strong className="text-white">Selektieren der richtigen Menschen</strong>.</p>
              </div>

              <p className="font-medium text-white">Dein Fokus am Anfang:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>2–4 Partner</li>
                <li>Erste Kunden</li>
                <li>Produkte erleben und empfehlen</li>
                <li>Deinen Partnern helfen, genau das Gleiche zu tun</li>
              </ul>

              <p>So entsteht Schritt für Schritt ein stabiles Fundament – die Basis für deine ersten <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] font-bold">1.100 € im Monat*</span>.</p>

              <p className="text-xs text-muted-foreground/70 italic">*Kein Einkommensversprechen. Ergebnisse sind abhängig von persönlichem Einsatz und aktuellen LR-Bedingungen. Details in LR Neo / MyOffice.</p>
            </CardContent>
          </Card>
        </section>

        {/* Startplan Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#AA771C]">A)</span> Dein Startplan
          </h2>
          <Card className="border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden group hover:border-[#BF953F]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#BF953F]/20 hover:-translate-y-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#BF953F]/20 via-[#FCF6BA]/20 to-[#AA771C]/20 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="h-8 w-8 rounded-full bg-[#BF953F]/20 flex items-center justify-center text-[#BF953F] font-bold border border-[#BF953F]/30">1</div>
                  <span className="text-white font-medium flex-1">Lina (KI) aktivieren</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="h-8 w-8 rounded-full bg-[#BF953F]/20 flex items-center justify-center text-[#BF953F] font-bold border border-[#BF953F]/30">2</div>
                  <span className="text-white font-medium flex-1">LR-Start Onboarding in Lina (OnlineShop & Webseite einrichten)</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="h-8 w-8 rounded-full bg-[#BF953F]/20 flex items-center justify-center text-[#BF953F] font-bold border border-[#BF953F]/30">3</div>
                  <span className="text-white font-medium flex-1">Lina-Onboarding (Videos zur Bedienung von Lina)</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="h-8 w-8 rounded-full bg-[#BF953F]/20 flex items-center justify-center text-[#BF953F] font-bold border border-[#BF953F]/30">4</div>
                  <span className="text-white font-medium flex-1">Normale Lina-Menüs nutzen (alle Themen einmal durchgehen)</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="h-8 w-8 rounded-full bg-[#BF953F]/20 flex items-center justify-center text-[#BF953F] font-bold border border-[#BF953F]/30">5</div>
                  <span className="text-white font-medium flex-1">Gruppen beitreten</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#BF953F]/10 border border-[#BF953F]/30 rounded-lg">
                <p className="text-sm text-white text-center">
                  Wenn du alles erledigt hast, setze bitte ein <span className="text-2xl">👍</span> auf die WhatsApp-Nachricht – so wissen wir, dass du ready bist.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>


        {/* LR Neo Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#AA771C]">3)</span> LR Neo & MyOffice
          </h2>
          <Card className="border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden group hover:border-[#BF953F]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#BF953F]/20 hover:-translate-y-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#BF953F]/20 via-[#FCF6BA]/20 to-[#AA771C]/20 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            <CardContent className="p-6 space-y-4">
              <p className="text-muted-foreground">
                LR Neo und MyOffice sind deine zentralen Seiten für deinen Erfolg. Hier siehst du:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-muted-foreground">
                <li>Umsätze</li>
                <li>Bestellungen</li>
                <li>Neue Partner</li>
                <li>Teamstruktur</li>
                <li>Deine Qualifikation</li>
              </ul>
              <p className="text-white font-medium">Hier kannst du auch neue Partner direkt online in dein Team registrieren.</p>
              
              <div className="grid gap-3 mt-4">
                <Button variant="outline" className="w-full justify-between border-white/10 bg-white/5 hover:bg-white/10 hover:text-[#BF953F] hover:border-[#BF953F]/30 h-auto py-4" asChild>
                  <a href="https://myoffice.lrworld.com/" target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center gap-2"><ExternalLink className="h-4 w-4" /> MyOffice öffnen</span>
                    <ArrowRight className="h-4 w-4 opacity-50" />
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-between border-white/10 bg-white/5 hover:bg-white/10 hover:text-[#BF953F] hover:border-[#BF953F]/30 h-auto py-4" asChild>
                  <a href="https://sso.lrworld.com/" target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center gap-2"><Smartphone className="h-4 w-4" /> LR Neo Login</span>
                    <ArrowRight className="h-4 w-4 opacity-50" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Gruppen Section */}
        <section id="gruppen" className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#AA771C]">4)</span> Gruppen: WhatsApp & Telegram
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem value="group-1" className="border border-white/10 bg-white/5 rounded-xl px-4 data-[state=open]:bg-white/10 transition-all duration-300">
              <AccordionTrigger className="text-white hover:text-[#BF953F] hover:no-underline font-medium py-4">
                Warum 2x WhatsApp?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 space-y-3">
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li><strong className="text-white">Gruppe 1:</strong> Wichtige Infos von Mathias (News, Angebote, Webinare)</li>
                  <li><strong className="text-white">Gruppe 2:</strong> Austausch & Support</li>
                </ul>
                <div className="grid gap-2 mt-4">
                  <Button variant="secondary" className="w-full justify-start bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border border-[#25D366]/20" asChild>
                    <a href="https://chat.whatsapp.com/EA0k6OTVONGLMc1b7e0AsV" target="_blank" rel="noopener noreferrer">
                      <Users className="mr-2 h-4 w-4" /> Info-Kanal beitreten
                    </a>
                  </Button>
                  <Button variant="secondary" className="w-full justify-start bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border border-[#25D366]/20" asChild>
                    <a href="https://chat.whatsapp.com/DyERWKHRx7SBc9QT4hV5qP" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" /> Austausch-Gruppe beitreten
                    </a>
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="group-2" className="border border-white/10 bg-white/5 rounded-xl px-4 data-[state=open]:bg-white/10 transition-all duration-300">
              <AccordionTrigger className="text-white hover:text-[#BF953F] hover:no-underline font-medium py-4">
                Warum Telegram?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 space-y-3">
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Mehr Infos als WhatsApp</li>
                  <li>Austausch</li>
                  <li>Content & Materialien</li>
                </ul>
                <div className="grid gap-2 mt-4">
                  <Button variant="secondary" className="w-full justify-start bg-[#0088cc]/10 text-[#0088cc] hover:bg-[#0088cc]/20 border border-[#0088cc]/20" asChild>
                    <a href="https://t.me/+TxckV-xlENozYmEy" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Club 1000
                    </a>
                  </Button>
                  <Button variant="secondary" className="w-full justify-start bg-[#0088cc]/10 text-[#0088cc] hover:bg-[#0088cc]/20 border border-[#0088cc]/20" asChild>
                    <a href="https://t.me/+DtNs0IQR1D4yZWVi" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Produktgruppe
                    </a>
                  </Button>
                  <Button variant="secondary" className="w-full justify-start bg-[#0088cc]/10 text-[#0088cc] hover:bg-[#0088cc]/20 border border-[#0088cc]/20" asChild>
                    <a href="https://t.me/+M8BgIFrDPGc2M2Ri" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Produkt-Chat
                    </a>
                  </Button>
                  <Button variant="secondary" className="w-full justify-start bg-[#0088cc]/10 text-[#0088cc] hover:bg-[#0088cc]/20 border border-[#0088cc]/20" asChild>
                    <a href="https://t.me/+VQB7RcwnZzs5ZmY6" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Erfahrungsberichte (erst Regeln lesen)
                    </a>
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Webinar Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#AA771C]">5)</span> Starterwebinar & Teammeeting
          </h2>
          <Card className="border-[#BF953F]/20 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-md overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#BF953F]/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <CardContent className="p-6 space-y-6">
              
              {/* Starterwebinar - KORRIGIERT: DIENSTAG */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-full bg-[#BF953F]/20 flex items-center justify-center text-[#BF953F] shrink-0 border border-[#BF953F]/30">
                  <Video className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white">Starterwebinar</h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] font-medium">Jeden Dienstag um 20:00 Uhr – live</p>
                  <p className="text-sm text-muted-foreground">Hier kannst du alles verstehen, Fragen stellen und auch jederzeit deine Interessenten einladen. Die Links kommen rechtzeitig in die Gruppen.</p>
                </div>
              </div>

              <div className="h-px w-full bg-white/5" />

              {/* Teammeeting */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/10">
                  <Users className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white">Teammeeting</h3>
                  <p className="text-white/80 font-medium">Mindestens alle 2 Wochen</p>
                  <p className="text-sm text-muted-foreground">Austausch, Tipps, Motivation & gemeinsame Weiterentwicklung.</p>
                </div>
              </div>

            </CardContent>
          </Card>
        </section>

        {/* Geschäftsvorstellung Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-900">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#AA771C]">6)</span> Geschäftsvorstellung
          </h2>
          <Card className="border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden group hover:border-[#BF953F]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#BF953F]/20 hover:-translate-y-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#BF953F]/20 via-[#FCF6BA]/20 to-[#AA771C]/20 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            <CardContent className="p-6 space-y-6">
              <div className="aspect-video w-full rounded-lg overflow-hidden border border-white/10 bg-black relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors">
                  <div className="h-16 w-16 rounded-full bg-[#BF953F]/90 flex items-center justify-center pl-1 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-black fill-black" />
                  </div>
                </div>
                <img src="/images/hero-bg.jpg" alt="Video Thumbnail" className="w-full h-full object-cover opacity-50" />
                <a href="https://youtu.be/N-soKAiyjsA?si=pyPZf8iJxaFje7h1" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
                  <span className="sr-only">Video abspielen</span>
                </a>
              </div>

              <div className="space-y-4">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="text-white font-medium">Warum diese Präsentation?</p>
                  <p>Diese Präsentation ist dein wichtigstes Werkzeug, um Interessenten das LR Geschäft professionell vorzustellen – egal ob persönlich, per WhatsApp oder Video-Call.</p>
                  <p className="text-white font-medium">Warum den Link personalisieren?</p>
                  <p>Wenn du den Link personalisierst, erscheinen in der Präsentation dein Name, dein Bild und deine Kontaktdaten – nicht die von Mathias. Interessenten sehen dann direkt, an wen sie sich wenden müssen.</p>
                  <p>Wenn du die Präsentation per Zoom aufnimmst, sind ebenfalls deine Daten im Video – so bleibt alles professionell und persönlich.</p>
                </div>
                
                <div className="grid gap-3">
                  <Button variant="outline" className="w-full justify-between border-white/10 bg-white/5 hover:bg-white/10 hover:text-[#BF953F] hover:border-[#BF953F]/30 h-auto py-4" asChild>
                    <a href="https://youtu.be/N-soKAiyjsA?si=pyPZf8iJxaFje7h1" target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center gap-2"><Play className="h-4 w-4" /> Video abspielen</span>
                      <ArrowRight className="h-4 w-4 opacity-50" />
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-between border-white/10 bg-white/5 hover:bg-white/10 hover:text-[#BF953F] hover:border-[#BF953F]/30 h-auto py-4" asChild>
                    <a href="https://dein-lr-business.de/" target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center gap-2"><ExternalLink className="h-4 w-4" /> Präsentation öffnen</span>
                      <ArrowRight className="h-4 w-4 opacity-50" />
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-between border-white/10 bg-white/5 hover:bg-white/10 hover:text-[#BF953F] hover:border-[#BF953F]/30 h-auto py-4" asChild>
                    <a href="https://dein-lr-business.de/personalize.html" target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center gap-2"><LinkIcon className="h-4 w-4" /> Link personalisieren</span>
                      <ArrowRight className="h-4 w-4 opacity-50" />
                    </a>
                  </Button>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="why-presentation" className="border border-white/10 bg-white/5 rounded-xl px-4">
                  <AccordionTrigger className="text-white hover:text-[#BF953F] hover:no-underline font-medium py-4">
                    Warum diese Präsentation?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>5 Stichpunkte pro Folie</li>
                      <li>Einfach ablesen & in eigenen Worten erklären</li>
                      <li>Roter Faden für jede Geschäftsvorstellung</li>
                      <li>Für Handy & PC optimiert</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* KI-Voice Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#AA771C]">7)</span> Unternehmer-Tool: KI-Voice
          </h2>
          <Card className="border-[#BF953F]/20 bg-gradient-to-br from-black to-primary/5 backdrop-blur-md overflow-hidden">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#BF953F]/20 flex items-center justify-center text-[#BF953F] border border-[#BF953F]/30">
                  <Mic className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Dein persönlicher Team-Link</h3>
                  <p className="text-sm text-muted-foreground">Wenn du Unternehmer kennst, nutze dieses Tool.</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">Erstelle deinen personalisierten Team-Link mit deiner Partnernummer. Durch Cookies werden deine Interessenten automatisch dir zugeordnet, wenn sie sich registrieren.</p>

              <div className="space-y-4">
                <div className="relative pl-4 border-l-2 border-[#BF953F]/30 space-y-4">
                  <div className="relative">
                    <span className="absolute -left-[21px] top-0 h-3 w-3 rounded-full bg-[#BF953F] border-2 border-black"></span>
                    <p className="text-sm text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] font-bold">Schritt 1:</span> Partnernummer bereithalten (DE/AT/ES + Zahlen)</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[21px] top-0 h-3 w-3 rounded-full bg-[#BF953F]/50 border-2 border-black"></span>
                    <p className="text-sm text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] font-bold">Schritt 2:</span> Link erstellen</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[21px] top-0 h-3 w-3 rounded-full bg-[#BF953F]/50 border-2 border-black"></span>
                    <p className="text-sm text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] font-bold">Schritt 3:</span> Link kopieren</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[21px] top-0 h-3 w-3 rounded-full bg-[#BF953F]/30 border-2 border-black"></span>
                    <p className="text-sm text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] font-bold">Schritt 4:</span> Nur noch diesen Link nutzen!</p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#AA771C] hover:brightness-110 text-black font-semibold shadow-lg shadow-[#BF953F]/20" asChild>
                  <a href="https://ki-voice.net/team-link" target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Jetzt Team-Link erstellen
                  </a>
                </Button>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5">
                    <Smartphone className="h-5 w-5 text-[#BF953F] mx-auto mb-1" />
                    <span className="text-xs text-muted-foreground">Insta Bio</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5">
                    <MessageCircle className="h-5 w-5 text-[#BF953F] mx-auto mb-1" />
                    <span className="text-xs text-muted-foreground">WhatsApp Status</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5">
                    <LinkIcon className="h-5 w-5 text-[#BF953F] mx-auto mb-1" />
                    <span className="text-xs text-muted-foreground">Story Link / DMs</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5">
                    <QrCode className="h-5 w-5 text-[#BF953F] mx-auto mb-1" />
                    <span className="text-xs text-muted-foreground">QR Code</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Fast Track Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#AA771C]">8)</span> Dein möglicher Fast-Track Start*
          </h2>
          <Card className="border-[#BF953F]/20 bg-gradient-to-br from-[#BF953F]/5 to-transparent backdrop-blur-md overflow-hidden">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">Schnell Junior Manager werden und vom Fast-Track-Bonus profitieren:</p>
                
                <div className="bg-[#BF953F]/10 border border-[#BF953F]/30 rounded-lg p-4 space-y-2">
                  <p className="text-white font-medium">Qualifikation für Junior Manager & Fast-Track-Bonus:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                    <li>2 direkte Partner mit mindestens 500 PW</li>
                    <li>Gesamtumsatz von 4.000 PW</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-medium flex items-center gap-2 mb-3">
                    <Star className="h-5 w-5 text-[#BF953F]" /> Mögliche Bonus-Stufen*
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/5 rounded-lg p-3 text-center border border-[#BF953F]/20">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] font-bold text-lg">300 €</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center border border-[#BF953F]/20">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] font-bold text-lg">1.100 €</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center border border-[#BF953F]/20">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] font-bold text-lg">2.000 €</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <Car className="h-6 w-6 text-[#BF953F]" />
                  <div>
                    <p className="text-white font-medium">Auto-Konzept</p>
                    <p className="text-sm text-muted-foreground">Traumwagen bis zu 80% günstiger – ohne Anzahlung.*</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground/70 italic">*Keine Garantie. Abhängig von Land, LR-Bedingungen und persönlicher Aktivität. Details in LR Neo/MyOffice.</p>
            </CardContent>
          </Card>
        </section>

        {/* Wichtige Links Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#AA771C]">9)</span> Wichtige Infos & Seiten
          </h2>
          <Card className="border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden group hover:border-[#BF953F]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#BF953F]/20 hover:-translate-y-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#BF953F]/20 via-[#FCF6BA]/20 to-[#AA771C]/20 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            <CardContent className="p-6">
              <Button variant="outline" className="w-full justify-between border-white/10 bg-white/5 hover:bg-white/10 hover:text-[#BF953F] hover:border-[#BF953F]/30 h-auto py-4" asChild>
                <a href="https://lrlifestyle.pro/" target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-2"><Globe className="h-4 w-4" /> Info-Seite für Interessenten</span>
                  <ArrowRight className="h-4 w-4 opacity-50" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center space-y-6 pt-8 pb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000">
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="[IMPRINT_URL]" className="hover:text-[#BF953F] transition-colors">Impressum</a>
            <a href="[PRIVACY_URL]" className="hover:text-[#BF953F] transition-colors">Datenschutz</a>
          </div>
          
          <div className="text-xs text-muted-foreground/50 max-w-xs mx-auto space-y-2">
            <p>
              Bonus- & Auto-Programme sind abhängig von Land/aktuellen LR-Bedingungen und persönlicher Aktivität. Details in LR Neo/MyOffice.
            </p>
            <p>
              Keine Einkommens- oder Ergebnisgarantie.
            </p>
            <p>
              © {new Date().getFullYear()} LR Lifestyle Team. All rights reserved.
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
}
