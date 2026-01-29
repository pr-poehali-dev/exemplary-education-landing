-- Таблица для регистраций на форум
CREATE TABLE IF NOT EXISTS registrations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    age INTEGER NOT NULL,
    tickets INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица для редактируемого контента сайта
CREATE TABLE IF NOT EXISTS site_content (
    id SERIAL PRIMARY KEY,
    section VARCHAR(100) NOT NULL UNIQUE,
    content JSONB NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Вставка начальных данных контента
INSERT INTO site_content (section, content) VALUES
('hero', '{"title": "Образцовое образование", "subtitle": "Всероссийский форум о будущем обучения", "date": "15–16 марта 2026", "location": "МВЦ «Крокус Экспо», Москва"}'),
('about', '{"title": "О форуме", "paragraphs": ["«Образцовое образование» — это ключевое событие года для всех, кто создаёт будущее российского образования. Два дня интенсивного обмена опытом, новейшими методиками и технологиями, которые меняют подход к обучению.", "Форум объединяет лучших экспертов отрасли, руководителей образовательных учреждений и EdTech-компаний, чтобы вместе найти ответы на главные вызовы современного образования.", "Для кого: педагоги, методисты, руководители образовательных организаций, представители EdTech-индустрии"]}')
ON CONFLICT (section) DO NOTHING;

-- Индекс для быстрого поиска по email
CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON registrations(created_at DESC);