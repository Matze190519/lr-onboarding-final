import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { Copy, Plus, Trash2, Users, CheckCircle, Clock, ExternalLink, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Link } from "wouter";

export default function Dashboard() {
  const { user, loading: authLoading, isAuthenticated } = useAuth();
  const getLoginUrl = () => `/api/auth/login?redirect=${encodeURIComponent(window.location.pathname)}`;
  const [newPartnerName, setNewPartnerName] = useState("");
  const [newPartnerPhone, setNewPartnerPhone] = useState("");
  const [newPartnerEmail, setNewPartnerEmail] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Fetch partners
  const { data: partners, isLoading: partnersLoading, refetch } = trpc.partner.list.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  // Create partner mutation
  const createPartner = trpc.partner.create.useMutation({
    onSuccess: (data: { id: number; token: string }) => {
      toast.success("Partner erstellt!", {
        description: "Der Onboarding-Link wurde generiert.",
      });
      setNewPartnerName("");
      setNewPartnerPhone("");
      setNewPartnerEmail("");
      setIsDialogOpen(false);
      refetch();
    },
    onError: (error: { message: string }) => {
      toast.error("Fehler", { description: error.message });
    },
  });

  // Delete partner mutation
  const deletePartner = trpc.partner.delete.useMutation({
    onSuccess: () => {
      toast.success("Partner gelöscht");
      refetch();
    },
    onError: (error: { message: string }) => {
      toast.error("Fehler", { description: error.message });
    },
  });

  // Initialize steps mutation
  const initSteps = trpc.admin.initSteps.useMutation({
    onSuccess: () => {
      toast.success("Schritte initialisiert");
    },
  });

  const handleCreatePartner = () => {
    if (!newPartnerName.trim()) {
      toast.error("Bitte gib einen Namen ein");
      return;
    }
    createPartner.mutate({
      name: newPartnerName,
      phone: newPartnerPhone || undefined,
      email: newPartnerEmail || undefined,
    });
  };

  const copyLink = (token: string) => {
    const link = `${window.location.origin}/onboarding/${token}`;
    navigator.clipboard.writeText(link);
    toast.success("Link kopiert!", {
      description: "Der Onboarding-Link wurde in die Zwischenablage kopiert.",
    });
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-2 border-[#D4AF37] border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
        <Card className="max-w-md w-full border-[#D4AF37]/20 bg-white/5 backdrop-blur-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Sponsor Dashboard</CardTitle>
            <p className="text-muted-foreground mt-2">
              Melde dich an, um deine Partner zu verwalten und ihren Fortschritt zu sehen.
            </p>
          </CardHeader>
          <CardContent>
            <Button 
              className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-bold"
              onClick={() => window.location.href = getLoginUrl()}
            >
              Anmelden
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" className="text-white hover:text-[#D4AF37]">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#F5E6A3] to-[#D4AF37] bg-clip-text text-transparent">
                Sponsor Dashboard
              </h1>
              <p className="text-muted-foreground">Willkommen, {user?.name || "Sponsor"}</p>
            </div>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-bold">
                <Plus className="mr-2 h-4 w-4" />
                Neuer Partner
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#0a0a0a] border-[#D4AF37]/20">
              <DialogHeader>
                <DialogTitle className="text-white">Neuen Partner hinzufügen</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Name *</Label>
                  <Input
                    id="name"
                    value={newPartnerName}
                    onChange={(e) => setNewPartnerName(e.target.value)}
                    placeholder="Max Mustermann"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Telefon (optional)</Label>
                  <Input
                    id="phone"
                    value={newPartnerPhone}
                    onChange={(e) => setNewPartnerPhone(e.target.value)}
                    placeholder="+49 123 456789"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">E-Mail (optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newPartnerEmail}
                    onChange={(e) => setNewPartnerEmail(e.target.value)}
                    placeholder="max@example.com"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="ghost" className="text-white">Abbrechen</Button>
                </DialogClose>
                <Button 
                  onClick={handleCreatePartner}
                  disabled={createPartner.isPending}
                  className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-bold"
                >
                  {createPartner.isPending ? "Erstelle..." : "Partner erstellen"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-[#D4AF37]/20 bg-white/5 backdrop-blur-md">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                <Users className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{partners?.length || 0}</p>
                <p className="text-sm text-muted-foreground">Partner gesamt</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-[#D4AF37]/20 bg-white/5 backdrop-blur-md">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {partners?.filter((p: { progress: { percentage: number } }) => p.progress.percentage === 100).length || 0}
                </p>
                <p className="text-sm text-muted-foreground">Fertig ongeboardet</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-[#D4AF37]/20 bg-white/5 backdrop-blur-md">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Clock className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {partners?.filter((p: { progress: { percentage: number } }) => p.progress.percentage > 0 && p.progress.percentage < 100).length || 0}
                </p>
                <p className="text-sm text-muted-foreground">In Bearbeitung</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Partner List */}
        <Card className="border-[#D4AF37]/20 bg-white/5 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Users className="h-5 w-5 text-[#D4AF37]" />
              Deine Partner
            </CardTitle>
          </CardHeader>
          <CardContent>
            {partnersLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin h-8 w-8 border-2 border-[#D4AF37] border-t-transparent rounded-full" />
              </div>
            ) : partners?.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Noch keine Partner hinzugefügt.</p>
                <p className="text-sm mt-2">Klicke auf "Neuer Partner", um zu starten.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {partners?.map((partner: { id: number; name: string; phone?: string | null; email?: string | null; token: string; progress: { completed: number; total: number; percentage: number } }) => (
                  <div 
                    key={partner.id} 
                    className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-white">{partner.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {partner.phone || partner.email || "Keine Kontaktdaten"}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => copyLink(partner.token)}
                          className="text-[#D4AF37] hover:text-[#D4AF37]/80"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => window.open(`/onboarding/${partner.token}`, '_blank')}
                          className="text-white hover:text-[#D4AF37]"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            if (confirm(`Partner "${partner.name}" wirklich löschen?`)) {
                              deletePartner.mutate({ partnerId: partner.id });
                            }
                          }}
                          className="text-red-500 hover:text-red-400"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Fortschritt</span>
                        <span className="text-[#D4AF37] font-medium">
                          {partner.progress.completed}/{partner.progress.total} Schritte ({partner.progress.percentage}%)
                        </span>
                      </div>
                      <Progress 
                        value={partner.progress.percentage} 
                        className="h-2 bg-white/10"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Admin Section (hidden by default, for setup) */}
        {user?.role === 'admin' && (
          <Card className="mt-8 border-orange-500/20 bg-white/5 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-orange-500">Admin-Bereich</CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => initSteps.mutate()}
                disabled={initSteps.isPending}
                variant="outline"
                className="border-orange-500/50 text-orange-500 hover:bg-orange-500/10"
              >
                {initSteps.isPending ? "Initialisiere..." : "Standard-Schritte initialisieren"}
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
