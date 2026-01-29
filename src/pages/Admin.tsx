import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

interface Registration {
  id: number;
  name: string;
  email: string;
  age: number;
  tickets: number;
  created_at: string;
}

interface ContentSection {
  [key: string]: any;
}

const Admin = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [content, setContent] = useState<{ [key: string]: ContentSection }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'registrations' | 'content'>('registrations');
  const [editingSection, setEditingSection] = useState<string>('');
  const [editingContent, setEditingContent] = useState<string>('');
  const { toast } = useToast();

  const ADMIN_API = 'https://functions.poehali.dev/9415fc7f-1b50-4b21-b974-8752b2e70d6e';

  useEffect(() => {
    if (activeTab === 'registrations') {
      loadRegistrations();
    } else {
      loadContent();
    }
  }, [activeTab]);

  const loadRegistrations = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${ADMIN_API}?action=registrations`);
      const data = await response.json();
      setRegistrations(data.registrations || []);
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить заявки",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const loadContent = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${ADMIN_API}?action=content`);
      const data = await response.json();
      setContent(data.content || {});
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить контент",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditContent = (section: string) => {
    setEditingSection(section);
    setEditingContent(JSON.stringify(content[section] || {}, null, 2));
  };

  const handleSaveContent = async () => {
    if (!editingSection) return;
    
    setIsLoading(true);
    try {
      const parsedContent = JSON.parse(editingContent);
      
      const response = await fetch(`${ADMIN_API}?action=content`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          section: editingSection,
          content: parsedContent,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Успешно",
          description: "Контент обновлен",
        });
        setEditingSection('');
        setEditingContent('');
        loadContent();
      } else {
        toast({
          title: "Ошибка",
          description: result.error || "Не удалось обновить контент",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Неверный формат JSON",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-secondary/20">
      <nav className="bg-white border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-light">Админ-панель</h1>
            <a href="/" className="text-sm font-light text-muted-foreground hover:text-foreground">
              ← На сайт
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="flex gap-4 mb-8">
          <Button
            variant={activeTab === 'registrations' ? 'default' : 'outline'}
            onClick={() => setActiveTab('registrations')}
            className="rounded-none font-light"
          >
            <Icon name="Users" size={16} className="mr-2" />
            Заявки
          </Button>
          <Button
            variant={activeTab === 'content' ? 'default' : 'outline'}
            onClick={() => setActiveTab('content')}
            className="rounded-none font-light"
          >
            <Icon name="FileText" size={16} className="mr-2" />
            Контент
          </Button>
        </div>

        {activeTab === 'registrations' && (
          <Card className="rounded-none">
            <CardHeader>
              <CardTitle className="font-light">Регистрации на форум</CardTitle>
              <CardDescription className="font-light">
                Всего заявок: {registrations.length}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="text-center py-8 text-muted-foreground font-light">Загрузка...</div>
              ) : registrations.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground font-light">Пока нет заявок</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-light text-sm text-muted-foreground">ID</th>
                        <th className="text-left py-3 px-4 font-light text-sm text-muted-foreground">Имя</th>
                        <th className="text-left py-3 px-4 font-light text-sm text-muted-foreground">Email</th>
                        <th className="text-left py-3 px-4 font-light text-sm text-muted-foreground">Возраст</th>
                        <th className="text-left py-3 px-4 font-light text-sm text-muted-foreground">Билетов</th>
                        <th className="text-left py-3 px-4 font-light text-sm text-muted-foreground">Дата</th>
                      </tr>
                    </thead>
                    <tbody>
                      {registrations.map((reg) => (
                        <tr key={reg.id} className="border-b border-border hover:bg-secondary/50">
                          <td className="py-3 px-4 font-light text-sm">{reg.id}</td>
                          <td className="py-3 px-4 font-light">{reg.name}</td>
                          <td className="py-3 px-4 font-light text-sm">{reg.email}</td>
                          <td className="py-3 px-4 font-light text-sm">{reg.age}</td>
                          <td className="py-3 px-4 font-light text-sm">{reg.tickets}</td>
                          <td className="py-3 px-4 font-light text-sm text-muted-foreground">
                            {formatDate(reg.created_at)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {activeTab === 'content' && (
          <div className="space-y-6">
            {isLoading ? (
              <div className="text-center py-8 text-muted-foreground font-light">Загрузка...</div>
            ) : (
              <>
                {Object.keys(content).length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground font-light">Нет контента</div>
                ) : (
                  Object.entries(content).map(([section, data]) => (
                    <Card key={section} className="rounded-none">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="font-light capitalize">{section}</CardTitle>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEditContent(section)}
                            className="rounded-none font-light"
                          >
                            <Icon name="Pencil" size={14} className="mr-2" />
                            Редактировать
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <pre className="text-sm font-light bg-secondary/30 p-4 overflow-auto">
                          {JSON.stringify(data, null, 2)}
                        </pre>
                      </CardContent>
                    </Card>
                  ))
                )}
              </>
            )}

            {editingSection && (
              <Card className="rounded-none border-primary">
                <CardHeader>
                  <CardTitle className="font-light">
                    Редактирование: {editingSection}
                  </CardTitle>
                  <CardDescription className="font-light">
                    Формат JSON. Будьте внимательны с синтаксисом.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    value={editingContent}
                    onChange={(e) => setEditingContent(e.target.value)}
                    rows={15}
                    className="rounded-none font-mono text-sm"
                  />
                  <div className="flex gap-3">
                    <Button
                      onClick={handleSaveContent}
                      disabled={isLoading}
                      className="rounded-none font-light"
                    >
                      {isLoading ? 'Сохранение...' : 'Сохранить'}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setEditingSection('');
                        setEditingContent('');
                      }}
                      className="rounded-none font-light"
                    >
                      Отмена
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
