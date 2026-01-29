import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-primary">Образцовое образование</h2>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О форуме</button>
              <button onClick={() => scrollToSection('program')} className="text-sm font-medium hover:text-primary transition-colors">Программа</button>
              <button onClick={() => scrollToSection('speakers')} className="text-sm font-medium hover:text-primary transition-colors">Спикеры</button>
              <button onClick={() => scrollToSection('tickets')} className="text-sm font-medium hover:text-primary transition-colors">Билеты</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-900"></div>
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/projects/87511264-7d3e-4938-aff9-272a7577d019/files/8e43a4d5-d127-4c38-8e86-10af0c85068a.jpg" 
            alt="Event background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-balance">
            Образцовое образование: 2026
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Всероссийский форум о будущем обучения
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 text-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={20} />
              <span>15-16 марта 2026</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-white/60"></div>
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={20} />
              <span>МВЦ «Крокус Экспо», Москва</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 h-14" onClick={() => scrollToSection('tickets')}>
              Купить билет
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-8 h-14" onClick={() => scrollToSection('program')}>
              Программа
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">О форуме</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-16">
            <p>
              «Образцовое образование» — это ключевое событие года для всех, кто создаёт будущее российского образования. 
              Два дня интенсивного обмена опытом, новейшими методиками и технологиями, которые меняют подход к обучению.
            </p>
            <p>
              Форум объединяет лучших экспертов отрасли, руководителей образовательных учреждений и EdTech-компаний, 
              чтобы вместе найти ответы на главные вызовы современного образования.
            </p>
            <p className="font-semibold text-foreground">
              Для кого: педагоги, методисты, руководители образовательных организаций, представители EdTech-индустрии
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-primary">20+</h3>
                <p className="text-muted-foreground">ведущих экспертов</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Handshake" size={32} className="text-accent" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-accent">300+</h3>
                <p className="text-muted-foreground">участников</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Lightbulb" size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-primary">15+</h3>
                <p className="text-muted-foreground">практических секций</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="TrendingUp" size={32} className="text-accent" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-accent">100%</h3>
                <p className="text-muted-foreground">актуальных трендов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Программа</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-32 flex-shrink-0">
                  <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded">10:00</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">Открытие форума и пленарная сессия</h3>
                  <p className="text-muted-foreground mb-3">
                    Образование 2026: вызовы, возможности и стратегии развития. Обсуждение ключевых трендов с ведущими экспертами отрасли.
                  </p>
                  <p className="text-sm text-primary font-medium">Министр образования РФ, ректоры ведущих вузов</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-accent">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-32 flex-shrink-0">
                  <div className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded">12:00</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">EdTech: технологии будущего уже сегодня</h3>
                  <p className="text-muted-foreground mb-3">
                    Практические кейсы внедрения ИИ, адаптивного обучения и VR/AR в образовательный процесс. Демонстрация работающих решений.
                  </p>
                  <p className="text-sm text-accent font-medium">Иван Петров, CEO EdTech Platform</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-32 flex-shrink-0">
                  <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded">14:30</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">Методология современного образования</h3>
                  <p className="text-muted-foreground mb-3">
                    Как создавать образовательные программы, которые готовят к реальным вызовам. Практики ведущих школ и университетов.
                  </p>
                  <p className="text-sm text-primary font-medium">Елена Смирнова, эксперт по методологии</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-accent">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-32 flex-shrink-0">
                  <div className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded">16:00</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">Нетворкинг и практические мастер-классы</h3>
                  <p className="text-muted-foreground mb-3">
                    Живое общение с коллегами, обмен опытом и практические сессии по внедрению новых подходов в вашей организации.
                  </p>
                  <p className="text-sm text-accent font-medium">Модераторы площадок</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="speakers" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Наши спикеры</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Icon name="User" size={80} className="text-primary/40" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Алексей Иванов</CardTitle>
                <CardDescription className="text-sm">Министр образования РФ</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Более 20 лет в образовательной сфере. Автор реформ современной школьной системы, эксперт в области государственной политики в образовании.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <Icon name="User" size={80} className="text-accent/40" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Елена Смирнова</CardTitle>
                <CardDescription className="text-sm">Эксперт по методологии, PhD</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Руководитель центра инновационных методик. Разработчик программ для ведущих университетов России. Международный консультант UNESCO.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Icon name="User" size={80} className="text-primary/40" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Иван Петров</CardTitle>
                <CardDescription className="text-sm">CEO EdTech Platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Основатель крупнейшей российской EdTech-платформы с 5 млн пользователей. Эксперт по цифровой трансформации образования и ИИ в обучении.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <Icon name="User" size={80} className="text-accent/40" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Мария Козлова</CardTitle>
                <CardDescription className="text-sm">Ректор Московского педагогического университета</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Трансформация высшего педагогического образования. Лауреат премии «Учитель года России». Автор 50+ научных публикаций.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Icon name="User" size={80} className="text-primary/40" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Дмитрий Соколов</CardTitle>
                <CardDescription className="text-sm">Директор по инновациям в образовании</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  15 лет опыта внедрения инноваций в крупнейших школах страны. Создатель методики проектного обучения, применяемой в 200+ учебных заведениях.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <Icon name="User" size={80} className="text-accent/40" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Анна Волкова</CardTitle>
                <CardDescription className="text-sm">Психолог-методист, автор бестселлеров</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Специалист по развитию эмоционального интеллекта и soft skills. Автор 3 книг по современной педагогике с тиражом более 100 000 экземпляров.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="tickets" className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Выберите билет</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="relative hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-2xl">Ранняя птица</CardTitle>
                <CardDescription>До 1 февраля 2026</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">7 900 ₽</div>
                  <div className="text-sm text-muted-foreground line-through">12 900 ₽</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Доступ ко всем секциям форума</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Материалы выступлений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Кофе-брейки и обеды</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Сертификат участника</span>
                  </li>
                </ul>
                <Button className="w-full" size="lg">Купить билет</Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-all hover:-translate-y-1 border-primary border-2">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                Популярный
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Стандарт</CardTitle>
                <CardDescription>Базовый пакет участия</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">12 900 ₽</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Всё из пакета «Ранняя птица»</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Запись всех выступлений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Доступ к нетворкинг-зоне</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Методические пособия</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary" size="lg">Купить билет</Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-all hover:-translate-y-1 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-2xl">VIP</CardTitle>
                <CardDescription>Максимум возможностей</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-accent mb-1">24 900 ₽</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Всё из пакета «Стандарт»</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Личная встреча со спикерами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">VIP-лаунж с закрытыми дискуссиями</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Индивидуальная консультация</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Приоритетные места в зале</span>
                  </li>
                </ul>
                <Button className="w-full bg-accent hover:bg-accent/90" size="lg">Купить билет</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Контакты</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:info@obraztsovoe.ru" className="font-medium hover:text-primary transition-colors">info@obraztsovoe.ru</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Телефон</p>
                      <a href="tel:+74951234567" className="font-medium hover:text-primary transition-colors">+7 (495) 123-45-67</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Адрес</p>
                      <p className="font-medium">МВЦ «Крокус Экспо», 65-66 км МКАД, Москва</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Мы в соцсетях</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all">
                    <Icon name="MessageCircle" size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all">
                    <Icon name="Send" size={24} />
                  </a>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>Оставьте заявку, и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">Имя</label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea id="message" placeholder="Ваше сообщение..." rows={4} />
                  </div>
                  <Button className="w-full" size="lg">Отправить</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">© 2026 Образцовое образование. Всероссийский форум о будущем обучения.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
