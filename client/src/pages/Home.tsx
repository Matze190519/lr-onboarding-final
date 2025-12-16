import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, MessageCircle, Users, ExternalLink, Smartphone, Video, Calendar, Play, Mic, Link as LinkIcon, QrCode } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Left Blue Glow */}
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-600/10 rounded-full blur-[120px]" />
        {/* Bottom Right Green Glow */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-green-500/10 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 container max-w-md mx-auto py-8 px-4 flex flex-col gap-8">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300 mb-4 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
              AI POWERED BUSINESS
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-white drop-shadow-sm leading-tight">
              Herzlich willkommen im <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-[#0088cc]">LR Lifestyle Team</span>
            </h1>
            <p className="text-lg text-muted-foreground font-light">
              Dein Start in 30–60 Minuten – Schritt für Schritt
            </p>
          </div>

          {/* Profile Card */}
          <Card className="w-full border-white/5 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden group hover:border-white/10 transition-all duration-500">
            <CardContent className="p-6 flex flex-col items-center gap-4">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#25D366] to-[#0088cc] rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                <Avatar className="w-24 h-24 border-2 border-white/10 relative ring-2 ring-white/5 ring-offset-2 ring-offset-black/50">
                  <AvatarImage src="/images/profile-placeholder.jpg" alt="Mathias Vinzing" className="object-cover" />
                  <AvatarFallback className="bg-muted text-muted-foreground">MV</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="text-center space-y-1">
                <h3 className="text-xl font-heading font-semibold text-white">Mathias Vinzing</h3>
                <p className="text-sm text-primary font-medium tracking-wide uppercase text-xs">Platin Orgaleiter</p>
              </div>

              <div className="w-full grid gap-3 mt-2">
                <Button className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white font-semibold shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:scale-[1.02] border-0" size="lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Lina starten (WhatsApp)
                </Button>
                
                <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-[#0088cc] hover:border-[#0088cc]/30 transition-all duration-300" size="lg" asChild>
                  <a href="https://myoffice.lrworld.com/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    LR Neo / MyOffice öffnen
                  </a>
                </Button>

                <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-[#0088cc] hover:border-[#0088cc]/30 transition-all duration-300" size="lg">
                  <Users className="mr-2 h-4 w-4" />
                  Gruppen beitreten
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Startplan Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            <span className="text-primary">A)</span> Dein Startplan
          </h2>
          <Card className="border-white/10 bg-white/5 backdrop-blur-md">
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 transition-colors cursor-pointer group">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/30 group-hover:bg-primary group-hover:text-black transition-colors">1</div>
                  <span className="text-white font-medium">Lina (KI) aktivieren</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 transition-colors cursor-pointer group">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/30 group-hover:bg-primary group-hover:text-black transition-colors">2</div>
                  <span className="text-white font-medium">LR Neo & MyOffice</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 transition-colors cursor-pointer group">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/30 group-hover:bg-primary group-hover:text-black transition-colors">3</div>
                  <span className="text-white font-medium">Gruppen beitreten</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 transition-colors cursor-pointer group">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/30 group-hover:bg-primary group-hover:text-black transition-colors">4</div>
                  <span className="text-white font-medium">Starterwebinar & Meeting</span>
                </div>
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
              <span className="text-[#D4AF37]">1)</span> Lina (KI) – dein 24/7 Coach
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem value="item-1" className="border border-white/10 bg-white/5 rounded-xl px-4 data-[state=open]:bg-white/10 transition-all duration-300">
              <AccordionTrigger className="text-white hover:text-primary hover:no-underline font-medium py-4">
                Lina aktivieren
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 space-y-2">
                <p>So startest du Lina:</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Klicke auf den WhatsApp-Link unten</li>
                  <li>Schreibe "Hallo"</li>
                  <li>Wähle im Menü "Partner"</li>
                  <li>Gib deine Partnernummer ein</li>
                </ol>
                <Button className="w-full mt-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold" asChild>
                  <a href="[LINA_WHATSAPP_LINK]" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Lina auf WhatsApp öffnen
                  </a>
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-white/10 bg-white/5 rounded-xl px-4 data-[state=open]:bg-white/10 transition-all duration-300">
              <AccordionTrigger className="text-white hover:text-primary hover:no-underline font-medium py-4">
                Was Lina konkret kann
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Komplettes Onboarding</li>
                  <li>Social Media Strategien</li>
                  <li>WhatsApp-Vorlagen für Kontakte</li>
                  <li>Tipps zum Teamaufbau</li>
                  <li>Interaktiver Lernpfad & Quiz</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-white/10 bg-white/5 rounded-xl px-4 data-[state=open]:bg-white/10 transition-all duration-300">
              <AccordionTrigger className="text-white hover:text-primary hover:no-underline font-medium py-4">
                Mit Lina telefonieren
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <p>Du kannst Lina auch anrufen! Wähle dazu im Menü die Option für Anrufe oder nutze den Link, den sie dir schickt. Perfekt um Ziele zu besprechen oder Gesprächsleitfäden zu üben.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-primary/30 bg-primary/5 rounded-xl px-4 data-[state=open]:bg-primary/10 transition-all duration-300">
              <AccordionTrigger className="text-primary hover:text-primary/80 hover:no-underline font-bold py-4">
                Wichtig: Fragen stellen!
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <p>Lina lernt ständig dazu. Stelle ihr jede Frage, die du hast. Wenn sie etwas nicht weiß, leitet sie dich an deinen Orgaleiter weiter.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* LR Neo Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            <span className="text-primary">2)</span> LR Neo & MyOffice
          </h2>
          <Card className="border-white/10 bg-white/5 backdrop-blur-md">
            <CardContent className="p-6 space-y-4">
              <p className="text-muted-foreground">
                Deine zentralen Tools für den Erfolg. Hier findest du alles, was du für dein Business brauchst.
              </p>
              <div className="grid gap-3">
                <Button variant="outline" className="w-full justify-between border-white/10 bg-white/5 hover:bg-white/10 hover:text-primary hover:border-primary/30 h-auto py-4" asChild>
                  <a href="https://myoffice.lrworld.com/" target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center gap-2"><ExternalLink className="h-4 w-4" /> MyOffice öffnen</span>
                    <ArrowRight className="h-4 w-4 opacity-50" />
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-between border-white/10 bg-white/5 hover:bg-white/10 hover:text-primary hover:border-primary/30 h-auto py-4" asChild>
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
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            <span className="text-primary">3)</span> Gruppen: WhatsApp & Telegram
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem value="group-1" className="border border-white/10 bg-white/5 rounded-xl px-4 data-[state=open]:bg-white/10 transition-all duration-300">
              <AccordionTrigger className="text-white hover:text-primary hover:no-underline font-medium py-4">
                Warum 2x WhatsApp?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 space-y-3">
                <p>Wir trennen wichtige Infos vom täglichen Austausch, damit du nichts verpasst.</p>
                <div className="grid gap-2">
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
              <AccordionTrigger className="text-white hover:text-primary hover:no-underline font-medium py-4">
                Warum Telegram?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 space-y-3">
                <p>Telegram nutzen wir für Material, Dateien und langfristige Updates, da hier nichts verloren geht.</p>
                <div className="grid gap-2">
                  <Button variant="secondary" className="w-full justify-start bg-[#0088cc]/10 text-[#0088cc] hover:bg-[#0088cc]/20 border border-[#0088cc]/20" asChild>
                    <a href="https://t.me/+TxckV-xlENozYmEy" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Telegram Gruppe 1
                    </a>
                  </Button>
                  <Button variant="secondary" className="w-full justify-start bg-[#0088cc]/10 text-[#0088cc] hover:bg-[#0088cc]/20 border border-[#0088cc]/20" asChild>
                    <a href="https://t.me/+DtNs0IQR1D4yZWVi" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Telegram Gruppe 2
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
            <span className="text-primary">4)</span> Starterwebinar & Teammeeting
          </h2>
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-md overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <CardContent className="p-6 space-y-6">
              
              {/* Starterwebinar - KORRIGIERT: DIENSTAG */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 border border-primary/30">
                  <Video className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white">Starterwebinar</h3>
                  <p className="text-primary font-medium">Jeden Dienstag um 20:00 Uhr</p>
                  <p className="text-sm text-muted-foreground">Die Links kommen rechtzeitig in die Gruppen.</p>
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
                  <p className="text-sm text-muted-foreground">Austausch, News und Motivation für das ganze Team.</p>
                </div>
              </div>

            </CardContent>
          </Card>
        </section>

        {/* Geschäftsvorstellung Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-900">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            <span className="text-primary">5)</span> Geschäftsvorstellung
          </h2>
          <Card className="border-white/10 bg-white/5 backdrop-blur-md">
            <CardContent className="p-6 space-y-6">
              <div className="aspect-video w-full rounded-lg overflow-hidden border border-white/10 bg-black relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors">
                  <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center pl-1 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-black fill-black" />
                  </div>
                </div>
                <img src="/images/hero-bg.jpg" alt="Video Thumbnail" className="w-full h-full object-cover opacity-50" />
                <a href="https://youtu.be/N-soKAiyjsA?si=pyPZf8iJxaFje7h1" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
                  <span className="sr-only">Video abspielen</span>
                </a>
              </div>

              <div className="grid gap-3">
                <Button variant="outline" className="w-full justify-between border-white/10 bg-white/5 hover:bg-white/10 hover:text-primary hover:border-primary/30 h-auto py-4" asChild>
                  <a href="https://dein-lr-business.de/" target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center gap-2"><ExternalLink className="h-4 w-4" /> Präsentation öffnen</span>
                    <ArrowRight className="h-4 w-4 opacity-50" />
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-between border-white/10 bg-white/5 hover:bg-white/10 hover:text-primary hover:border-primary/30 h-auto py-4" asChild>
                  <a href="https://dein-lr-business.de/personalize.html" target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center gap-2"><LinkIcon className="h-4 w-4" /> Link personalisieren</span>
                    <ArrowRight className="h-4 w-4 opacity-50" />
                  </a>
                </Button>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                <h4 className="text-primary font-semibold mb-2 flex items-center gap-2">
                  <Smartphone className="h-4 w-4" /> How-To für dich:
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Max. 5 Stichpunkte pro Folie</li>
                  <li>Nicht ablesen, frei sprechen</li>
                  <li>In eigenen Worten erklären</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* KI-Voice Section */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            <span className="text-primary">6)</span> Unternehmer-Tool: KI-Voice
          </h2>
          <Card className="border-primary/20 bg-gradient-to-br from-black to-primary/5 backdrop-blur-md overflow-hidden">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                  <Mic className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Dein persönlicher Team-Link</h3>
                  <p className="text-sm text-muted-foreground">Nutze die Kraft der KI für dein Business.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative pl-4 border-l-2 border-primary/30 space-y-4">
                  <div className="relative">
                    <span className="absolute -left-[21px] top-0 h-3 w-3 rounded-full bg-primary border-2 border-black"></span>
                    <p className="text-sm text-white"><span className="text-primary font-bold">Schritt 1:</span> Partnernummer bereithalten</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[21px] top-0 h-3 w-3 rounded-full bg-primary/50 border-2 border-black"></span>
                    <p className="text-sm text-white"><span className="text-primary font-bold">Schritt 2:</span> Link erstellen</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[21px] top-0 h-3 w-3 rounded-full bg-primary/30 border-2 border-black"></span>
                    <p className="text-sm text-white"><span className="text-primary font-bold">Schritt 3:</span> Nur noch diesen Link nutzen!</p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90 text-black font-semibold shadow-lg shadow-primary/20" asChild>
                  <a href="https://ki-voice.net/team-link" target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Jetzt Team-Link erstellen
                  </a>
                </Button>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5">
                    <Smartphone className="h-5 w-5 text-primary mx-auto mb-1" />
                    <span className="text-xs text-muted-foreground">Insta Bio</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5">
                    <MessageCircle className="h-5 w-5 text-primary mx-auto mb-1" />
                    <span className="text-xs text-muted-foreground">WhatsApp Status</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5">
                    <LinkIcon className="h-5 w-5 text-primary mx-auto mb-1" />
                    <span className="text-xs text-muted-foreground">Story Link</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5">
                    <QrCode className="h-5 w-5 text-primary mx-auto mb-1" />
                    <span className="text-xs text-muted-foreground">QR Code</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center space-y-6 pt-8 pb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000">
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="[IMPRINT_URL]" className="hover:text-primary transition-colors">Impressum</a>
            <a href="[PRIVACY_URL]" className="hover:text-primary transition-colors">Datenschutz</a>
          </div>
          
          <div className="text-xs text-muted-foreground/50 max-w-xs mx-auto space-y-2">
            <p>
              Bonus- & Auto-Programme sind abhängig von Land/aktuellen LR-Bedingungen und persönlicher Aktivität. Details in LR Neo/MyOffice.
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
