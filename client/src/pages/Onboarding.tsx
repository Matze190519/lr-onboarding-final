import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ExternalLink, MessageCircle, Play, Users, Video, Mic, Smartphone, CheckCircle } from "lucide-react";
import { useParams } from "wouter";
import { toast } from "sonner";

export default function Onboarding() {
  const params = useParams<{ token: string }>();
  const token = params.token || "";

  // Fetch onboarding data
  const { data, isLoading, refetch } = trpc.onboarding.getByToken.useQuery(
    { token },
    { enabled: !!token }
  );

  // Update progress mutation
  const updateProgress = trpc.onboarding.updateProgress.useMutation({
    onSuccess: () => {
      refetch();
      toast.success("Fortschritt gespeichert!");
    },
    onError: (error: { message: string }) => {
      toast.error("Fehler", { description: error.message });
    },
  });

  const handleStepToggle = (stepId: string, currentCompleted: boolean) => {
    updateProgress.mutate({
      token,
      stepId,
      completed: !currentCompleted,
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-2 border-[#D4AF37] border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
        <Card className="max-w-md w-full border-red-500/20 bg-white/5 backdrop-blur-xl text-center p-8">
          <h2 className="text-xl font-bold text-white mb-2">Link ungültig</h2>
          <p className="text-muted-foreground">
            Dieser Onboarding-Link existiert nicht oder ist abgelaufen.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4AF37]/30">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container max-w-md mx-auto px-4 py-8 pb-24 space-y-8">
        {/* Header */}
        <div className="flex justify-center mb-4">
          <img src="/lr_lifestyle_logo_freigestellt_small(1).png" alt="LR Lifestyle Team" className="h-24 w-auto drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
        </div>

        {/* Welcome Section */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#F5E6A3] to-[#D4AF37] bg-clip-text text-transparent">
            Willkommen, {data.partner.name}!
          </h1>
          <p className="text-muted-foreground">
            Dein persönliches Onboarding im LR Lifestyle Team
          </p>
        </section>

        {/* Progress Overview */}
        <Card className="border-[#D4AF37]/20 bg-white/5 backdrop-blur-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-medium">Dein Fortschritt</span>
              <span className="text-[#D4AF37] font-bold text-lg">
                {data.summary.percentage}%
              </span>
            </div>
            <Progress value={data.summary.percentage} className="h-3 bg-white/10" />
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {data.summary.completed} von {data.summary.total} Schritten erledigt
            </p>
          </CardContent>
        </Card>

        {/* Steps Checklist */}
        <Card className="border-[#D4AF37]/20 bg-white/5 backdrop-blur-xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#D4AF37]" />
              Deine Schritte
            </h2>
            
            <div className="space-y-3">
              {data.steps.map((step: { stepId: string; title: string; description?: string | null; completed: boolean; completedAt?: Date | null }, index: number) => (
                <div 
                  key={step.stepId}
                  className={`p-4 rounded-lg border transition-all cursor-pointer ${
                    step.completed 
                      ? 'bg-[#D4AF37]/10 border-[#D4AF37]/30' 
                      : 'bg-white/5 border-white/10 hover:border-[#D4AF37]/30'
                  }`}
                  onClick={() => handleStepToggle(step.stepId, step.completed)}
                >
                  <div className="flex items-start gap-3">
                    <Checkbox 
                      checked={step.completed}
                      className="mt-1 border-[#D4AF37] data-[state=checked]:bg-[#D4AF37] data-[state=checked]:text-black"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`font-medium ${step.completed ? 'text-[#D4AF37]' : 'text-white'}`}>
                          {index + 1}. {step.title}
                        </span>
                        {step.completed && (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        )}
                      </div>
                      {step.description && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card className="border-[#D4AF37]/20 bg-white/5 backdrop-blur-xl">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-white mb-4">Wichtige Links</h2>
            
            <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold" asChild>
              <a href="https://wa.me/4915207962638" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Lina auf WhatsApp starten
              </a>
            </Button>

            <Button className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-bold" asChild>
              <a href="https://wa.me/4917622066606" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Sponsor kontaktieren
              </a>
            </Button>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <Button variant="outline" className="border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10" asChild>
                <a href="https://apps.apple.com/de/app/lr-connect/id1510357433" target="_blank" rel="noopener noreferrer">
                  <Smartphone className="mr-2 h-4 w-4" />
                  iOS App
                </a>
              </Button>
              <Button variant="outline" className="border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10" asChild>
                <a href="https://play.google.com/store/apps/details?id=com.lr.dpf" target="_blank" rel="noopener noreferrer">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Android App
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Motivation */}
        <div className="text-center py-4">
          <p className="text-muted-foreground italic">
            "Der beste Zeitpunkt zu starten war gestern. Der zweitbeste ist jetzt."
          </p>
        </div>
      </div>
    </div>
  );
}
