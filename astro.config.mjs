// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

const SITE = process.env.SITE ?? 'http://bmw-f52-guide.pro';
const BASE = process.env.BASE ?? '';

export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',

  integrations: [
    starlight({
      title: 'BMW F52',
      description: 'База знаний по BMW 1 Series F52 Sedan.',
      favicon: '/favicon-32x32.png',
      components: {
        Banner: './src/components/Banner.astro',
      },
      head: [
        {
          tag: 'script',
          attrs: { type: 'text/javascript' },
          content: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=109450199','ym');ym(109450199,'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",accurateTrackBounce:true,trackLinks:true});`,
        },
        {
          tag: 'noscript',
          content: '<div><img src="https://mc.yandex.ru/watch/109450199" style="position:absolute; left:-9999px;" alt="" /></div>',
        },
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/u4aew/bmw-f52-guide-ru' },
      ],
      customCss: ['./src/styles/global.css'],
      sidebar: [
        {
          label: '🚗 Начало',
          items: [
            { label: 'Главная', slug: '' },
          ],
        },
        {
          label: '📐 Характеристики',
          items: [
            { label: 'Технические данные', slug: 'specs' },
          ],
        },
        {
          label: '⚙️ Двигатели',
          items: [
            { label: 'Обзор линейки', slug: 'engines' },
          ],
        },
        {
          label: '🔧 Обслуживание',
          items: [
            { label: 'Регламент ТО', slug: 'maintenance' },
          ],
        },
        {
          label: '❓ Вопросы',
          items: [
            { label: 'Популярные вопросы', slug: 'questions' },
          ],
        },
        {
          label: '🛒 Покупка',
          items: [
            { label: 'Как выбрать б/у', slug: 'buying' },
          ],
        },
        {
          label: '🎛 Тюнинг',
          items: [
            { label: 'Доработки', slug: 'tuning' },
          ],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
