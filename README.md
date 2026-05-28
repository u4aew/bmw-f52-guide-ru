# BMW F52 — База знаний

Открытая база знаний по BMW 1 Series F52 (седан). Характеристики, двигатели, регламент обслуживания, популярные вопросы, советы по покупке.

🌐 **[bmw-f52-guide.pro](http://bmw-f52-guide.pro)**

---

## Сообщество

| | |
|---|---|
| 💬 Telegram чат | [@bmwf52chat](https://t.me/bmwf52chat) |
| 🚗 Drive2 | [Бортовые журналы F52](https://www.drive2.ru/cars/bmw/1_series/g689165093270727703//) |
| ⭐ GitHub | [u4aew/bmw-f52-guide-ru](https://github.com/u4aew/bmw-f52-guide-ru) |

---

## Разделы

- **Характеристики** — размеры, масса, динамика, трансмиссия
- **Двигатели** — B38 (1.5T) / B48 (2.0T), ресурс, масло, проблемы
- **Обслуживание** — полный регламент ТО от 5 000 до 300 000 км
- **Вопросы** — ответы на частые вопросы владельцев
- **Покупка** — на что смотреть при выборе б/у F52
- **Тюнинг** — доработки, прошивки, улучшения

---

## Стек

- [Astro](https://astro.build) + [Starlight](https://starlight.astro.build)
- [Tailwind CSS v4](https://tailwindcss.com)
- Деплой: rsync → VPS (nginx, Ubuntu 24.04)

## Локальный запуск

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # сборка в ./dist/
npm run deploy    # сборка + деплой на сервер (нужен .env)
```

`.env` для деплоя:

```
VPS_HOST=...
VPS_USER=...
VPS_PASSWORD=...
```

---

## Участие

Нашёл ошибку или хочешь дополнить? Открывай [issue](https://github.com/u4aew/bmw-f52-guide-ru/issues) или присылай PR. Все правки приветствуются.

---

> Проект не аффилирован с BMW AG. Информация носит справочный характер.
