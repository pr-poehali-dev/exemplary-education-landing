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
      <nav className="fixed top-0 w-full bg-white z-50 border-b border-border/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-medium text-foreground">Образцовое образование</h2>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="text-sm font-light hover:text-foreground transition-colors text-muted-foreground">О форуме</button>
              <button onClick={() => scrollToSection('program')} className="text-sm font-light hover:text-foreground transition-colors text-muted-foreground">Программа</button>
              <button onClick={() => scrollToSection('speakers')} className="text-sm font-light hover:text-foreground transition-colors text-muted-foreground">Спикеры</button>
              <button onClick={() => scrollToSection('tickets')} className="text-sm font-light hover:text-foreground transition-colors text-muted-foreground">Билеты</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-light hover:text-foreground transition-colors text-muted-foreground">Контакты</button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-foreground"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-background">
          <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight text-balance">
            Образцовое образование
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-light">
            Всероссийский форум о будущем обучения
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 text-base font-light">
            <span>15–16 марта 2026</span>
            <span className="hidden md:block">·</span>
            <span>МВЦ «Крокус Экспо», Москва</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-foreground hover:bg-white/90 text-base font-light px-10 h-12 rounded-none" onClick={() => scrollToSection('tickets')}>
              Купить билет
            </Button>
            <Button size="lg" variant="ghost" className="border border-white/30 text-white hover:bg-white/10 text-base font-light px-10 h-12 rounded-none" onClick={() => scrollToSection('program')}>
              Программа
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 md:py-40">
        <div className="container mx-auto px-6">
          <h2 className="text-sm font-light uppercase tracking-widest text-center mb-20 text-muted-foreground">О форуме</h2>
          <div className="max-w-3xl mx-auto space-y-8 text-lg font-light leading-relaxed text-foreground/80 mb-24">
            <p>
              «Образцовое образование» — это ключевое событие года для всех, кто создаёт будущее российского образования. 
              Два дня интенсивного обмена опытом, новейшими методиками и технологиями, которые меняют подход к обучению.
            </p>
            <p>
              Форум объединяет лучших экспертов отрасли, руководителей образовательных учреждений и EdTech-компаний, 
              чтобы вместе найти ответы на главные вызовы современного образования.
            </p>
            <p className="text-foreground pt-4">
              Для кого: педагоги, методисты, руководители образовательных организаций, представители EdTech-индустрии
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="text-5xl font-light mb-3 text-foreground">20+</h3>
              <p className="text-sm font-light text-muted-foreground">ведущих экспертов</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-light mb-3 text-foreground">300+</h3>
              <p className="text-sm font-light text-muted-foreground">участников</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-light mb-3 text-foreground">15+</h3>
              <p className="text-sm font-light text-muted-foreground">практических секций</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-light mb-3 text-foreground">100%</h3>
              <p className="text-sm font-light text-muted-foreground">актуальных трендов</p>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-32 md:py-40 bg-secondary/20">
        <div className="container mx-auto px-6">
          <h2 className="text-sm font-light uppercase tracking-widest text-center mb-20 text-muted-foreground">Программа</h2>
          
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="border-t border-border pt-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-24 flex-shrink-0">
                  <span className="text-sm font-light text-muted-foreground">10:00</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-light mb-3">Открытие форума и пленарная сессия</h3>
                  <p className="text-muted-foreground font-light mb-4 leading-relaxed">
                    Образование 2026: вызовы, возможности и стратегии развития. Обсуждение ключевых трендов с ведущими экспертами отрасли.
                  </p>
                  <p className="text-sm font-light text-foreground">Министр образования РФ, ректоры ведущих вузов</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-24 flex-shrink-0">
                  <span className="text-sm font-light text-muted-foreground">12:00</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-light mb-3">EdTech: технологии будущего уже сегодня</h3>
                  <p className="text-muted-foreground font-light mb-4 leading-relaxed">
                    Практические кейсы внедрения ИИ, адаптивного обучения и VR/AR в образовательный процесс. Демонстрация работающих решений.
                  </p>
                  <p className="text-sm font-light text-foreground">Иван Петров, CEO EdTech Platform</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-24 flex-shrink-0">
                  <span className="text-sm font-light text-muted-foreground">14:30</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-light mb-3">Методология современного образования</h3>
                  <p className="text-muted-foreground font-light mb-4 leading-relaxed">
                    Как создавать образовательные программы, которые готовят к реальным вызовам. Практики ведущих школ и университетов.
                  </p>
                  <p className="text-sm font-light text-foreground">Елена Смирнова, эксперт по методологии</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-24 flex-shrink-0">
                  <span className="text-sm font-light text-muted-foreground">16:00</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-light mb-3">Нетворкинг и практические мастер-классы</h3>
                  <p className="text-muted-foreground font-light mb-4 leading-relaxed">
                    Живое общение с коллегами, обмен опытом и практические сессии по внедрению новых подходов в вашей организации.
                  </p>
                  <p className="text-sm font-light text-foreground">Модераторы площадок</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="speakers" className="py-32 md:py-40">
        <div className="container mx-auto px-6">
          <h2 className="text-sm font-light uppercase tracking-widest text-center mb-20 text-muted-foreground">Наши спикеры</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="border-t border-border pt-6">
              <div className="mb-6">
                <h3 className="text-xl font-light mb-1">Алексей Иванов</h3>
                <p className="text-sm font-light text-muted-foreground">Министр образования РФ</p>
              </div>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                Более 20 лет в образовательной сфере. Автор реформ современной школьной системы, эксперт в области государственной политики в образовании.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <div className="mb-6">
                <h3 className="text-xl font-light mb-1">Елена Смирнова</h3>
                <p className="text-sm font-light text-muted-foreground">Эксперт по методологии, PhD</p>
              </div>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                Руководитель центра инновационных методик. Разработчик программ для ведущих университетов России. Международный консультант UNESCO.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <div className="mb-6">
                <h3 className="text-xl font-light mb-1">Иван Петров</h3>
                <p className="text-sm font-light text-muted-foreground">CEO EdTech Platform</p>
              </div>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                Основатель крупнейшей российской EdTech-платформы с 5 млн пользователей. Эксперт по цифровой трансформации образования и ИИ в обучении.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <div className="mb-6">
                <h3 className="text-xl font-light mb-1">Мария Козлова</h3>
                <p className="text-sm font-light text-muted-foreground">Ректор Московского педагогического университета</p>
              </div>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                Трансформация высшего педагогического образования. Лауреат премии «Учитель года России». Автор 50+ научных публикаций.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <div className="mb-6">
                <h3 className="text-xl font-light mb-1">Дмитрий Соколов</h3>
                <p className="text-sm font-light text-muted-foreground">Директор по инновациям в образовании</p>
              </div>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                15 лет опыта внедрения инноваций в крупнейших школах страны. Создатель методики проектного обучения, применяемой в 200+ учебных заведениях.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <div className="mb-6">
                <h3 className="text-xl font-light mb-1">Анна Волкова</h3>
                <p className="text-sm font-light text-muted-foreground">Психолог-методист, автор бестселлеров</p>
              </div>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                Специалист по развитию эмоционального интеллекта и soft skills. Автор 3 книг по современной педагогике с тиражом более 100 000 экземпляров.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="tickets" className="py-32 md:py-40 bg-secondary/20">
        <div className="container mx-auto px-6">
          <h2 className="text-sm font-light uppercase tracking-widest text-center mb-20 text-muted-foreground">Выберите билет</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 max-w-6xl mx-auto">
            <div className="bg-white p-12 border border-border">
              <div className="mb-8">
                <h3 className="text-xl font-light mb-2">Ранняя птица</h3>
                <p className="text-sm font-light text-muted-foreground">До 1 февраля 2026</p>
              </div>
              <div className="mb-8">
                <div className="text-4xl font-light mb-1">7 900 ₽</div>
                <div className="text-sm font-light text-muted-foreground line-through">12 900 ₽</div>
              </div>
              <ul className="space-y-3 mb-12">
                <li className="text-sm font-light">Доступ ко всем секциям форума</li>
                <li className="text-sm font-light">Материалы выступлений</li>
                <li className="text-sm font-light">Кофе-брейки и обеды</li>
                <li className="text-sm font-light">Сертификат участника</li>
              </ul>
              <Button className="w-full rounded-none h-12 font-light">Купить билет</Button>
            </div>

            <div className="bg-foreground text-background p-12 border border-foreground">
              <div className="mb-8">
                <h3 className="text-xl font-light mb-2">Стандарт</h3>
                <p className="text-sm font-light opacity-70">Базовый пакет участия</p>
              </div>
              <div className="mb-8">
                <div className="text-4xl font-light">12 900 ₽</div>
              </div>
              <ul className="space-y-3 mb-12">
                <li className="text-sm font-light">Всё из пакета «Ранняя птица»</li>
                <li className="text-sm font-light">Запись всех выступлений</li>
                <li className="text-sm font-light">Доступ к нетворкинг-зоне</li>
                <li className="text-sm font-light">Методические пособия</li>
              </ul>
              <Button className="w-full bg-white text-foreground hover:bg-white/90 rounded-none h-12 font-light">Купить билет</Button>
            </div>

            <div className="bg-white p-12 border border-border">
              <div className="mb-8">
                <h3 className="text-xl font-light mb-2">VIP</h3>
                <p className="text-sm font-light text-muted-foreground">Максимум возможностей</p>
              </div>
              <div className="mb-8">
                <div className="text-4xl font-light">24 900 ₽</div>
              </div>
              <ul className="space-y-3 mb-12">
                <li className="text-sm font-light">Всё из пакета «Стандарт»</li>
                <li className="text-sm font-light">Личная встреча со спикерами</li>
                <li className="text-sm font-light">VIP-лаунж с закрытыми дискуссиями</li>
                <li className="text-sm font-light">Индивидуальная консультация</li>
                <li className="text-sm font-light">Приоритетные места в зале</li>
              </ul>
              <Button className="w-full rounded-none h-12 font-light">Купить билет</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-32 md:py-40">
        <div className="container mx-auto px-6">
          <h2 className="text-sm font-light uppercase tracking-widest text-center mb-20 text-muted-foreground">Контакты</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="border-t border-border pt-6">
                <p className="text-sm font-light text-muted-foreground mb-2">Email</p>
                <a href="mailto:info@obraztsovoe.ru" className="text-lg font-light hover:opacity-70 transition-opacity">info@obraztsovoe.ru</a>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm font-light text-muted-foreground mb-2">Телефон</p>
                <a href="tel:+74951234567" className="text-lg font-light hover:opacity-70 transition-opacity">+7 (495) 123-45-67</a>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm font-light text-muted-foreground mb-2">Адрес</p>
                <p className="text-lg font-light">МВЦ «Крокус Экспо», 65-66 км МКАД, Москва</p>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm font-light text-muted-foreground mb-4">Мы в соцсетях</p>
                <div className="flex gap-4">
                  <a href="#" className="text-sm font-light hover:opacity-70 transition-opacity">ВКонтакте</a>
                  <a href="#" className="text-sm font-light hover:opacity-70 transition-opacity">Telegram</a>
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
          <p className="text-sm font-light">© 2026 Образцовое образование. Всероссийский форум о будущем обучения.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
