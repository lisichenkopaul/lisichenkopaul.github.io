/* ============================================================
   РЕДАКТИРУЙ ЗДЕСЬ — всё содержимое сайта.
   Не нужно трогать HTML/CSS — только этот файл.
   ============================================================

   Цвета тегов (color): gray, blue, green, orange, red, purple, pink, yellow, brown

   Обложка карточки (thumb) и обложка внутри (cover):
     - Можно указать image: "images/moe-foto.jpg" (положи файл в папку images/)
     - Или оставить gradient: "..." — красивый цветной фон-заглушка.

   Видео (blocks -> type: "video"):
     - youtube:  id — это код из ссылки youtube.com/watch?v=XXXXXXXXX  ->  id: "XXXXXXXXX"
     - Можно также provider: "vimeo" (id — число) или "file" (src: "video/clip.mp4").
============================================================ */

const SITE = {
  // —— Шапка ——
  name: "Motion Studio",
  tagline:
    "Занимаюсь всем понемногу: от моушн-дизайна и 3D-анимации до монтажа и всего, что связано с видео.",
  contactEmail: "hello@example.com",

  // —— Соцсети (убери ненужные строки) ——
  socials: [
    { type: "youtube",   label: "YouTube",   handle: "Motion Studio",       url: "https://youtube.com/@your_channel" },
    { type: "twitter",   label: "Twitter",   handle: "@yourhandle",         url: "https://x.com/yourhandle" },
    { type: "instagram", label: "Instagram", handle: "@yourhandle",         url: "https://instagram.com/yourhandle" },
    { type: "telegram",  label: "Telegram",  handle: "@yourhandle",         url: "https://t.me/yourhandle" },
  ],

  // —— Кейсы (карточки) ——
  projects: [
    {
      id: "taktile",
      title: "Taktile",
      icon: "🔷",
      thumb: { gradient: "linear-gradient(135deg,#5b6ef5,#8a5bf5)" },
      cover: { gradient: "linear-gradient(120deg,#4557e0,#8a5bf5)" },
      tags: [
        { label: "Ad Campaign", color: "orange" },
        { label: "Creative Direction", color: "gray" },
        { label: "Colour Grading", color: "purple" },
        { label: "VFX", color: "blue" },
        { label: "Sound Design", color: "red" },
        { label: "Editing", color: "yellow" },
        { label: "Motion Graphics", color: "green" },
      ],
      props: {
        date: "Май 2025",
        link: { text: "taktile.com", url: "https://example.com" },
        projectType: [{ label: "Ad Campaign", color: "orange" }],
        responsibilities: [
          { label: "Creative Direction", color: "gray" },
          { label: "Motion Graphics", color: "green" },
          { label: "Editing", color: "yellow" },
        ],
      },
      callout: { icon: "💡", text: "Короткое описание кейса: что за проект, какая была задача и что ты сделал." },
      blocks: [
        { type: "heading", text: "Лучшие моменты" },
        { type: "text", text: "Здесь можно подробнее рассказать о работе над проектом и добавить несколько роликов." },
        { type: "sub", text: "Ролик 1 — Главный тизер" },
        { type: "video", provider: "youtube", id: "dQw4w9WgXcQ", caption: { text: "Полное видео:", linkText: "смотреть на YouTube", url: "https://youtube.com" } },
        { type: "sub", text: "Ролик 2 — Соцсети" },
        { type: "video", provider: "youtube", id: "9bZkp7q19f0", caption: { text: "Вертикальный рез для Reels / Shorts." } },
      ],
    },
    {
      id: "creator-camp",
      title: "Creator Camp",
      icon: "🏕️",
      thumb: { gradient: "linear-gradient(135deg,#1c1c1c,#3a5f2a)" },
      cover: { gradient: "linear-gradient(120deg,#20351a,#5f8a3a)" },
      tags: [
        { label: "Social Posts", color: "gray" },
        { label: "Motion Graphics", color: "green" },
        { label: "Creative Direction", color: "gray" },
        { label: "Editing", color: "yellow" },
        { label: "Sound Design", color: "red" },
        { label: "Graphic Design", color: "purple" },
      ],
      props: {
        date: "Апрель 2025",
        link: null,
        projectType: [{ label: "Social Posts", color: "gray" }],
        responsibilities: [
          { label: "Editing", color: "yellow" },
          { label: "Motion Graphics", color: "green" },
        ],
      },
      callout: { icon: "🎬", text: "Серия коротких роликов для соцсетей. Опиши свою роль и результат." },
      blocks: [
        { type: "heading", text: "Избранные ролики" },
        { type: "text", text: "Короткое описание серии и подхода к монтажу." },
        { type: "video", provider: "youtube", id: "M7lc1UVf-VE", caption: { text: "Пример из серии." } },
      ],
    },
    {
      id: "internet-enjoyers",
      title: "Internet Enjoyers",
      icon: "🙂",
      thumb: { gradient: "linear-gradient(135deg,#111,#222)" },
      cover: { gradient: "linear-gradient(120deg,#0e0e0e,#2a2a2a)" },
      tags: [
        { label: "Animation", color: "blue" },
        { label: "Motion Graphics", color: "green" },
      ],
      props: {
        date: "1 июля 2025 → 31 июля 2025",
        link: null,
        projectType: [{ label: "Animation", color: "blue" }],
        responsibilities: [{ label: "Motion Graphics", color: "green" }],
      },
      callout: { icon: "📝", text: "Помогал создавать анимации для длинных роликов шоу «State of Play»." },
      blocks: [
        { type: "heading", text: "Мои любимые анимации" },
        { type: "text", text: "За время работы с командой Internet Enjoyers я сделал анимации для нескольких видео. Ниже — мои любимые." },
        { type: "sub", text: "State of Play EP001" },
        { type: "video", provider: "youtube", id: "aqz-KE-bpKQ", caption: { text: "Полное видео:", linkText: "смотреть на YouTube", url: "https://youtube.com" } },
        { type: "sub", text: "State of Play EP002" },
        { type: "video", provider: "youtube", id: "ScMzIvxBSi4", caption: { text: "Второй эпизод." } },
      ],
    },
    {
      id: "youtube",
      title: "YouTube",
      icon: "▶️",
      thumb: { gradient: "linear-gradient(135deg,#2b2b2b,#3a3a3a)" },
      cover: { gradient: "linear-gradient(120deg,#232323,#3a3a3a)" },
      tags: [
        { label: "Personal", color: "red" },
        { label: "Everything", color: "gray" },
      ],
      props: {
        date: "2024 — н.в.",
        link: { text: "Мой канал", url: "https://youtube.com" },
        projectType: [{ label: "Personal", color: "red" }],
        responsibilities: [{ label: "Everything", color: "gray" }],
      },
      callout: { icon: "🎥", text: "Личный канал, где я делаю всё сам: от съёмки до монтажа." },
      blocks: [
        { type: "heading", text: "Последние видео" },
        { type: "video", provider: "youtube", id: "dQw4w9WgXcQ", caption: { text: "Пример ролика." } },
      ],
    },
    {
      id: "club-222",
      title: "CLUB 222",
      icon: "🎟️",
      thumb: { gradient: "linear-gradient(135deg,#e9e9e9,#cfcfcf)", dark: true },
      cover: { gradient: "linear-gradient(120deg,#f0f0f0,#d4d4d4)", dark: true },
      tags: [
        { label: "Branding", color: "orange" },
        { label: "Everything", color: "gray" },
      ],
      props: {
        date: "Март 2025",
        link: null,
        projectType: [{ label: "Branding", color: "orange" }],
        responsibilities: [{ label: "Everything", color: "gray" }],
      },
      callout: { icon: "🎨", text: "Брендинг и моушн-айдентика для клуба." },
      blocks: [
        { type: "heading", text: "Проект" },
        { type: "text", text: "Опиши задачу и результат проекта." },
        { type: "video", provider: "youtube", id: "9bZkp7q19f0", caption: { text: "Демо-ролик." } },
      ],
    },
    {
      id: "fork-fire",
      title: "Fork + Fire",
      icon: "🔥",
      thumb: { gradient: "linear-gradient(135deg,#111,#3a1414)" },
      cover: { gradient: "linear-gradient(120deg,#1a0e0e,#5f2020)" },
      tags: [
        { label: "Branding", color: "orange" },
        { label: "Creative Direction", color: "gray" },
        { label: "Graphic Design", color: "purple" },
        { label: "Motion Graphics", color: "green" },
        { label: "Sound Design", color: "red" },
      ],
      props: {
        date: "Февраль 2025",
        link: null,
        projectType: [{ label: "Branding", color: "orange" }],
        responsibilities: [
          { label: "Creative Direction", color: "gray" },
          { label: "Motion Graphics", color: "green" },
        ],
      },
      callout: { icon: "🔥", text: "Брендинг и анимация для ресторана." },
      blocks: [
        { type: "heading", text: "Ролики" },
        { type: "video", provider: "youtube", id: "M7lc1UVf-VE", caption: { text: "Промо-ролик." } },
      ],
    },
    {
      id: "misc-animations",
      title: "Misc. Animations",
      icon: "💻",
      thumb: { gradient: "linear-gradient(135deg,#eee,#dcdcdc)", dark: true },
      cover: { gradient: "linear-gradient(120deg,#f2f2f2,#dcdcdc)", dark: true },
      tags: [
        { label: "Animation", color: "blue" },
        { label: "Everything", color: "gray" },
      ],
      props: {
        date: "Разное",
        link: null,
        projectType: [{ label: "Animation", color: "blue" }],
        responsibilities: [{ label: "Everything", color: "gray" }],
      },
      callout: { icon: "✨", text: "Сборник разных анимаций и тестов." },
      blocks: [
        { type: "heading", text: "Нарезка" },
        { type: "video", provider: "youtube", id: "ScMzIvxBSi4", caption: { text: "Сборка лучших моментов." } },
      ],
    },
    {
      id: "misc-design",
      title: "Misc. Design",
      icon: "🖼️",
      thumb: { gradient: "linear-gradient(135deg,#efefef,#d8d8d8)", dark: true },
      cover: { gradient: "linear-gradient(120deg,#f4f4f4,#d8d8d8)", dark: true },
      tags: [
        { label: "Design", color: "purple" },
        { label: "Everything", color: "gray" },
      ],
      props: {
        date: "Разное",
        link: null,
        projectType: [{ label: "Design", color: "purple" }],
        responsibilities: [{ label: "Everything", color: "gray" }],
      },
      callout: { icon: "🖼️", text: "Графический дизайн и постеры." },
      blocks: [
        { type: "heading", text: "Работы" },
        { type: "text", text: "Добавь сюда изображения или видео своих дизайн-работ." },
      ],
    },
  ],
};
