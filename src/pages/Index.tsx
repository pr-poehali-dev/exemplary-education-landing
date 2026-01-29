import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

interface HeroContent {
  title: string;
  subtitle: string;
  date: string;
  location: string;
}

interface AboutContent {
  title: string;
  paragraphs: string[];
}

interface StatItem {
  value: string;
  label: string;
}

interface ProgramItem {
  time: string;
  title: string;
  description: string;
  speaker: string;
}

interface SpeakerItem {
  name: string;
  position: string;
  bio: string;
}

interface RegistrationContent {
  title: string;
  price: string;
  subtitle: string;
  benefits: string[];
}

interface ContactsContent {
  title: string;
  email: string;
  phone: string;
  address: string;
  social: {
    vk: string;
    telegram: string;
  };
}

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [heroContent, setHeroContent] = useState<HeroContent>({ 
    title: 'Образцовое образование', 
    subtitle: 'Всероссийский форум о будущем обучения', 
    date: '15–16 марта 2026', 
    location: 'МВЦ «Крокус Экспо», Москва' 
  });
  const [aboutContent, setAboutContent] = useState<AboutContent>({ title: 'О форуме', paragraphs: [''] });
  const [statsContent, setStatsContent] = useState<StatItem[]>([]);
  const [programContent, setProgramContent] = useState<{ title: string; items: ProgramItem[] }>({ title: 'Программа', items: [] });
  const [speakersContent, setSpeakersContent] = useState<{ title: string; items: SpeakerItem[] }>({ title: 'Наши спикеры', items: [] });
  const [registrationContent, setRegistrationContent] = useState<RegistrationContent>({ title: 'Регистрация', price: 'Бесплатно', subtitle: 'Участие в форуме', benefits: [] });
  const [contactsContent, setContactsContent] = useState<ContactsContent>({ title: 'Контакты', email: '', phone: '', address: '', social: { vk: '#', telegram: '#' } });
  const { toast } = useToast();
  
  const ADMIN_API = 'https://functions.poehali.dev/9415fc7f-1b50-4b21-b974-8752b2e70d6e';
  
  useEffect(() => {
    loadContent();
  }, []);
  
  const loadContent = async () => {
    try {
      const response = await fetch(`${ADMIN_API}?action=content`);
      const data = await response.json();
      if (data.content?.hero) setHeroContent(data.content.hero);
      if (data.content?.about) setAboutContent(data.content.about);
      if (data.content?.stats) setStatsContent(data.content.stats.items || []);
      if (data.content?.program) setProgramContent(data.content.program);
      if (data.content?.speakers) setSpeakersContent(data.content.speakers);
      if (data.content?.registration) setRegistrationContent(data.content.registration);
      if (data.content?.contacts) setContactsContent(data.content.contacts);
    } catch (error) {
      console.error('Ошибка загрузки контента:', error);
    }
  };
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      age: parseInt(formData.get('age') as string),
      tickets: parseInt(formData.get('tickets') as string),
    };
    
    try {
      const response = await fetch('https://functions.poehali.dev/6119df71-515b-40d7-80f9-cc922a6928d3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        toast({
          title: "Регистрация успешна!",
          description: result.message || "Билет отправлен на ваш email",
        });
        setIsDialogOpen(false);
        (e.target as HTMLFormElement).reset();
      } else {
        toast({
          title: "Ошибка",
          description: result.error || "Не удалось зарегистрироваться",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить данные. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white z-50 border-b border-border/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-medium text-foreground">{heroContent.title}</h2>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="text-sm font-light hover:text-foreground transition-colors text-muted-foreground">О форуме</button>
              <button onClick={() => scrollToSection('program')} className="text-sm font-light hover:text-foreground transition-colors text-muted-foreground">Программа</button>
              <button onClick={() => scrollToSection('speakers')} className="text-sm font-light hover:text-foreground transition-colors text-muted-foreground">Спикеры</button>
              <button onClick={() => scrollToSection('registration')} className="text-sm font-light hover:text-foreground transition-colors text-muted-foreground">Регистрация</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-light hover:text-foreground transition-colors text-muted-foreground">Контакты</button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-foreground"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-background">
          <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight text-balance">
            {heroContent.title}
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-light">
            {heroContent.subtitle}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 text-base font-light">
            <span>{heroContent.date}</span>
            <span className="hidden md:block">·</span>
            <span>{heroContent.location}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-white text-foreground hover:bg-white/90 text-base font-light px-10 h-12 rounded-none">
                  Получить билет
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md rounded-none">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-light">Регистрация на форум</DialogTitle>
                  <DialogDescription className="font-light">
                    Заполните форму, и мы вышлем билет на ваш email
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleRegistration} className="space-y-6 mt-4">
                  <div>
                    <label htmlFor="reg-name" className="text-sm font-light mb-2 block text-muted-foreground">Имя</label>
                    <Input id="reg-name" name="name" placeholder="Иван Иванов" className="rounded-none" required />
                  </div>
                  <div>
                    <label htmlFor="reg-email" className="text-sm font-light mb-2 block text-muted-foreground">Почта (email)</label>
                    <Input id="reg-email" name="email" type="email" placeholder="ivan@example.com" className="rounded-none" required />
                  </div>
                  <div>
                    <label htmlFor="reg-age" className="text-sm font-light mb-2 block text-muted-foreground">Возраст</label>
                    <Input id="reg-age" name="age" type="number" min="1" max="120" placeholder="25" className="rounded-none" required />
                  </div>
                  <div>
                    <label htmlFor="reg-tickets" className="text-sm font-light mb-2 block text-muted-foreground">Количество билетов</label>
                    <Input id="reg-tickets" name="tickets" type="number" min="1" max="10" placeholder="1" defaultValue="1" className="rounded-none" required />
                  </div>
                  <Button type="submit" className="w-full rounded-none h-12 font-light" disabled={isLoading}>
                    {isLoading ? 'Отправка...' : 'Зарегистрироваться'}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button size="lg" variant="ghost" className="border border-white/30 text-white hover:bg-white/10 text-base font-light px-10 h-12 rounded-none" onClick={() => scrollToSection('program')}>
              Программа
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 md:py-40">
        <div className="container mx-auto px-6">
          <h2 className="text-sm font-light uppercase tracking-widest text-center mb-20 text-muted-foreground">{aboutContent.title}</h2>
          <div className="max-w-3xl mx-auto space-y-8 text-lg font-light leading-relaxed text-foreground/80 mb-24">
            {aboutContent.paragraphs.map((paragraph, idx) => (
              <p key={idx} className={idx === aboutContent.paragraphs.length - 1 ? 'text-foreground pt-4' : ''}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 max-w-5xl mx-auto">
            {statsContent.map((stat, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-5xl font-light mb-3 text-foreground">{stat.value}</h3>
                <p className="text-sm font-light text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="py-32 md:py-40 bg-secondary/20">
        <div className="container mx-auto px-6">
          <h2 className="text-sm font-light uppercase tracking-widest text-center mb-20 text-muted-foreground">{programContent.title}</h2>
          
          <div className="max-w-4xl mx-auto space-y-12">
            {programContent.items.map((item, idx) => (
              <div key={idx} className="border-t border-border pt-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-24 flex-shrink-0">
                    <span className="text-sm font-light text-muted-foreground">{item.time}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-light mb-3">{item.title}</h3>
                    <p className="text-muted-foreground font-light mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <p className="text-sm font-light text-foreground">{item.speaker}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="speakers" className="py-32 md:py-40">
        <div className="container mx-auto px-6">
          <h2 className="text-sm font-light uppercase tracking-widest text-center mb-20 text-muted-foreground">{speakersContent.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {speakersContent.items.map((speaker, idx) => (
              <div key={idx} className="border-t border-border pt-6">
                <div className="mb-6">
                  <h3 className="text-xl font-light mb-1">{speaker.name}</h3>
                  <p className="text-sm font-light text-muted-foreground">{speaker.position}</p>
                </div>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {speaker.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="registration" className="py-32 md:py-40 bg-secondary/20">
        <div className="container mx-auto px-6">
          <h2 className="text-sm font-light uppercase tracking-widest text-center mb-20 text-muted-foreground">{registrationContent.title}</h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-12 border border-border">
              <div className="text-center mb-12">
                <div className="text-6xl font-light mb-4">{registrationContent.price}</div>
                <p className="text-lg font-light text-muted-foreground">{registrationContent.subtitle}</p>
              </div>
              
              <ul className="space-y-4 mb-12">
                {registrationContent.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-base font-light flex items-start gap-3">
                    <span className="text-foreground mt-1">—</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full rounded-none h-14 font-light text-base">Зарегистрироваться на форум</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md rounded-none">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-light">Регистрация на форум</DialogTitle>
                    <DialogDescription className="font-light">
                      Заполните форму, и мы вышлем билет на ваш email
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleRegistration} className="space-y-6 mt-4">
                    <div>
                      <label htmlFor="reg-name-2" className="text-sm font-light mb-2 block text-muted-foreground">Имя</label>
                      <Input id="reg-name-2" name="name" placeholder="Иван Иванов" className="rounded-none" required />
                    </div>
                    <div>
                      <label htmlFor="reg-email-2" className="text-sm font-light mb-2 block text-muted-foreground">Почта (email)</label>
                      <Input id="reg-email-2" name="email" type="email" placeholder="ivan@example.com" className="rounded-none" required />
                    </div>
                    <div>
                      <label htmlFor="reg-age-2" className="text-sm font-light mb-2 block text-muted-foreground">Возраст</label>
                      <Input id="reg-age-2" name="age" type="number" min="1" max="120" placeholder="25" className="rounded-none" required />
                    </div>
                    <div>
                      <label htmlFor="reg-tickets-2" className="text-sm font-light mb-2 block text-muted-foreground">Количество билетов</label>
                      <Input id="reg-tickets-2" name="tickets" type="number" min="1" max="10" placeholder="1" defaultValue="1" className="rounded-none" required />
                    </div>
                    <Button type="submit" className="w-full rounded-none h-12 font-light" disabled={isLoading}>
                      {isLoading ? 'Отправка...' : 'Зарегистрироваться'}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-32 md:py-40">
        <div className="container mx-auto px-6">
          <h2 className="text-sm font-light uppercase tracking-widest text-center mb-20 text-muted-foreground">{contactsContent.title}</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="border-t border-border pt-6">
                <p className="text-sm font-light text-muted-foreground mb-2">Email</p>
                <a href={`mailto:${contactsContent.email}`} className="text-lg font-light hover:opacity-70 transition-opacity">{contactsContent.email}</a>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm font-light text-muted-foreground mb-2">Телефон</p>
                <a href={`tel:${contactsContent.phone}`} className="text-lg font-light hover:opacity-70 transition-opacity">{contactsContent.phone}</a>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm font-light text-muted-foreground mb-2">Адрес</p>
                <p className="text-lg font-light">{contactsContent.address}</p>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm font-light text-muted-foreground mb-4">Мы в соцсетях</p>
                <div className="flex gap-4">
                  <a href={contactsContent.social.vk} className="text-sm font-light hover:opacity-70 transition-opacity">ВКонтакте</a>
                  <a href={contactsContent.social.telegram} className="text-sm font-light hover:opacity-70 transition-opacity">Telegram</a>
                </div>
              </div>
            </div>

            <div className="border border-border p-8">
              <h3 className="text-lg font-light mb-6">Форма обратной связи</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-light mb-2 block text-muted-foreground">Имя</label>
                  <Input id="name" placeholder="Ваше имя" className="rounded-none" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-light mb-2 block text-muted-foreground">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" className="rounded-none" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-light mb-2 block text-muted-foreground">Сообщение</label>
                  <Textarea id="message" placeholder="Ваше сообщение..." rows={4} className="rounded-none" />
                </div>
                <Button className="w-full rounded-none h-12 font-light">Отправить</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-light">© 2026 {heroContent.title}. Всероссийский форум о будущем обучения.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
