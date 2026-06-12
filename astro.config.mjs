// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import rehypeExternalLinks from 'rehype-external-links';

const SITE = process.env.SITE ?? 'https://bmw-f52-guide.pro';
const BASE = process.env.BASE ?? '';

export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',

  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    ],
  },

  integrations: [
    starlight({
      title: 'BMW F52',
      description: 'База знаний по BMW 1 Series F52 Sedan.',
      favicon: '/favicon.ico',
      components: {
        Banner: './src/components/Banner.astro',
      },
      head: [
        { tag: 'link', attrs: { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/site.webmanifest' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#1d4ed8' } },
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
            { label: 'Руководство (оригинал)', slug: 'manual' },
            { label: 'Руководство (русский) β', slug: 'manual-ru' },
          ],
        },
        {
          label: '📐 Характеристики',
          items: [
            { label: 'Технические данные', slug: 'specs' },
            { label: 'Комплектации', slug: 'trims' },
            { label: 'Сход-развал', slug: 'alignment' },
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
            { label: 'Сброс сервисного интервала', slug: 'service-reset' },
            { label: 'Совместимые запчасти', slug: 'parts-tips' },
            { label: 'Артикулы для ТО', slug: 'part-numbers' },
            { label: 'Сервисный режим дворников', slug: 'wipers-service' },
            { label: 'Замена аккумулятора', slug: 'battery' },
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
            { label: 'Расходы на ТО', slug: 'costs' },
          ],
        },
        {
          label: '🎛 Тюнинг',
          items: [
            { label: 'Доработки', slug: 'tuning' },
          ],
        },
        {
          label: '🌐 Прочее',
          items: [
            { label: 'Русификация', slug: 'russification' },
            { label: 'Смена языка (CN → EN)', slug: 'language-switch' },
            { label: 'Обогрев сидений', slug: 'heated-seats' },
            { label: 'Круиз-контроль', slug: 'cruise-control' },
            { label: 'Климат-контроль', slug: 'climate-control' },
            { label: 'CarPlay', slug: 'carplay' },
            { label: 'Механический ключ из брелка', slug: 'key-mecha' },
            { label: 'Фото владельцев', slug: 'owners-photos' },
          ],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
