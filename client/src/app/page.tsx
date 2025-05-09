import { Metadata } from 'next';

// Опционально: экспорти метаданные страницы для SEO
export const metadata: Metadata = {
  title: 'Главная страница',
  description: 'Добро пожаловать на наш сайт! Это главная страница, отрендеренная с использованием App Router.',
};

export default function Home() {
  return (
    <h1>Hello Next!</h1>
  );
}
