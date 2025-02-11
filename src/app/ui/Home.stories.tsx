import type { Meta, StoryObj } from '@storybook/react';

import Home from '@/app/page';

const meta: Meta<typeof Home> = {
  title: 'Pages/Home', // Название группы и компонента в Storybook
  component: Home,
  tags: ['autodocs'], // Включаем автоматическую документацию
  parameters: {
    layout: 'fullscreen', // Компонент будет занимать весь экран
  },
};

export default meta;

// Тип для сторисов
type Story = StoryObj<typeof Home>;

// Базовый сторис
export const Default: Story = {
  args: {}, // Пропсы по умолчанию
};

// Сторис с изменённым текстом
export const WithCustomText: Story = {
  args: {},
  render: () => (
    <div>
      <Home />
      <p style={{ textAlign: 'center', marginTop: '20px' }}>This is a custom text added below the Home component.</p>
    </div>
  ),
};

// Сторис с изменёнными ссылками
export const WithCustomLinks: Story = {
  args: {},
  render: () => (
    <div>
      <Home />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a
          href="https://github.com/vercel/next.js"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'blue', textDecoration: 'underline' }}
        >
          Visit Next.js GitHub
        </a>
      </div>
    </div>
  ),
};
