const createState = ({
  key,
  showStatus = false,
  messages,
  options = [],
  requiresInput = false,
  inputType = null,
  next = null,
  autoNext = false,
  actionRedirect = false,
  action = null,
  optionsClass = null,
}) => ({
  key,
  showStatus,
  messages,
  options,
  requiresInput,
  inputType,
  next,
  autoNext,
  actionRedirect,
  action,
  optionsClass,
});

const createOption = (label, value, next) => ({
  label,
  value,
  next,
});

const chatScenario = (() => {
  const states = {};

  const addState = (stateConfig) => {
    const state = createState(stateConfig);
    states[state.key] = state;
  };

  addState({
    key: "start",
    messages: [
      {
        type: 'text',
        value: "Привет! Меня зовут Амина и я виртуальный консультант франшизы «Discovery» 🙂 С радостью отвечу на ваши вопросы!",
      },
      {
        type: 'text',
        value: '«Discovery» – это стильное функциональное коворкинг-пространство с продуманным зонированием и инфраструктурой. <br><br> Вы легко можете запустить его в любом городе всего за 1,5 месяца, используя нашу проверенную бизнес-модель, маркетинговую стратегию и действуя при нашей постоянной поддержке! <br><br> Выберите, что вас интересует?',
      },
    ],
    options: [
      createOption("Насколько актуально запускать бизнес в этой нише?", "about", "about"),
      createOption("Какие инвестиции потребуются для старта?", "investment", "investment"),
      createOption("Как будет формироваться моя прибыль?", "profit", "profit"),
      createOption("Как вы поможете мне на старте бизнеса?", "support", "support"),
      createOption("Из каких этапов будет состоять открытие коворкинга?", "stages", "stages"),
      createOption("Хочу посмотреть, как выглядит коворкинг", "catalog", "catalog"),
      createOption("Хочу задать свой вопрос", "question", "question"),
    ],
    optionsClass: 'response-options--main'
  });

  addState({
    key: "about",
    messages: [
      {
        type: 'text',
        value: 'Ниша коворкингов в Казахстане непрерывно растет — предприниматели и фрилансеры всё чаще выбирают их вместо офисов. <br><br> Только за 2023–2024 годы их количество выросло на 40%, а в крупных городах (Алматы, Астана, Шымкент) открылось более 70 новых пространств. По данным экспертов, ежегодный рост спроса на такие помещения составляет около 25%, а в столице заполняемость топовых коворкингов достигает 80–90% даже в будни.',
      },
      {
        type: 'text',
        value: 'Мы можем направить вам анализ рынка вашего города, чтобы вы были уверены в том, что это будет реально востребовано. Хотите?',
      },
    ],
    options: [
      createOption("Да", "yes", "city"),
      createOption("Нет", "no", "questionFranchise"),
    ],
  });

  addState({
    key: "investment",
    messages: [
      {
        type: 'text',
        value: "Для запуска бизнеса вам потребуется 22,6 млн тенге, в которые уже входит паушальный взнос — 5 млн тенге. <br><br> В эту сумму уже посчитаны все необходимые затраты: от аренды помещения и ремонтных работ до приобретения оборудования и запуска маркетинга.",
      },
      {
        type: 'text',
        value: "Хотите получить подробную финансовую модель франшизы? Там подробно расписаны все инвестиционные затраты",
      },
    ],
    options: [
      createOption("Да", "yes", "contactOptions2"),
      createOption("Нет", "no", "responseChoice"),
    ],
  });

  addState({
    key: "profit",
    messages: [
      {
        type: 'text',
        value: `
          У вас будет четыре варианта оказания услуг и заработка:
          <br class="d-i-block"><br class="d-i-block">
          <span class="message-container">
          <span>-</span>
          <span>аренда рабочих мест.</span>
          </span>
          <span class="message-container">
          <span>-</span>
          <span>предоставление юр.адресов</span>
          </span>
          <span class="message-container">
          <span>-</span>
          <span>аренда конференц-залов и переговорных комнат</span>
          </span>
          <span class="message-container">
          <span>-</span>
          <span>проведение мероприятий и сотрудничество</span>
          </span>
          <br class="d-i-block">
          Ежемесячно вы будете зарабатывать от 900 000 тенге.
        `,
      },
      {
        type: 'text',
        value: "Хотите узнать сколько продаж вы будете делать ежемесячно и каким будет средний чек на каждую услугу?",
      },
    ],
    options: [
      createOption("Да", "yes", "contactOptions4"),
      createOption("Нет", "no", "questionFranchise3"),
    ],
  });

  addState({
    key: "support",
    messages: [
      {
        type: 'text',
        value: `
          Мы окажем вам всестороннюю поддержку на этапе запуска бизнеса и будем с вами на связи после открытия:
          <br class="d-i-block"><br class="d-i-block">
          <span class="message-container">
          <span>-</span>
          <span>Поможем найти лучшую локацию и помещение в вашем городе</span>
          </span>
          <span class="message-container">
          <span>-</span>
          <span>Дадим рекомендации по формированию сильной команды</span>
          </span>
          <span class="message-container">
          <span>-</span>
          <span>Предоставим информацию по правильному оборудованию и оформлению коворкинга</span>
          </span>
          <span class="message-container">
          <span>-</span>
          <span>Поделимся списком проверенных поставщиков по закупке оргтехники и необходимых расходников и принадлежностей</span>
          </span>
          <span class="message-container">
          <span>-</span>
          <span>Организуем настройку и ведение таргетированной рекламы</span>
          </span>
          <span class="message-container">
          <span>-</span>
          <span>Поделимся эффективными маркетинговыми инструментами</span>
          </span>
          <span class="message-container">
          <span>-</span>
          <span>Проведем обучение для вас и вашего руководящего блока</span>
          </span>
          <br class="d-i-block">
          На запуск всех процессов потребуется всего 1,5 месяца 🤝
        `,
      },
      {
        type: 'text',
        value: "Хотите получить подробный план запуска бизнеса?",
      },
    ],
    options: [
      createOption("Да", "yes", "contactOptions5"),
      createOption("Нет", "no", "responseChoice2"),
    ],
  });

  addState({
    key: "stages",
    messages: [
      {
        type: 'text',
        value: `
          Все очень просто! 🙃Запуск состоит из 5-ти простых этапов:
          <br class="d-i-block"><br class="d-i-block">
          <span class="message-container">
          <span>-</span>
          <span>Регистрация бизнеса</span>
          </span>
          <span class="message-container">
          <span>-</span>
          <span>Поиск и ремонт помещения</span>
          </span>
          <span class="message-container">
          <span>-</span>
          <span>Подбор и обучение персонала</span>
          </span>
          <span class="message-container">
          <span>-</span>
          <span>Запуск рекламы</span>
          </span>
          <span class="message-container">
          <span>-</span>
          <span>Открытие 🎉</span>
          </span>
          <br class="d-i-block">
          Кстати, мы обязательно приедем на ваше открытие!
        `,
      },
      {
        type: 'text',
        value: "Хотите подробно узнать о каждом этапе запуска?",
      },
    ],
    options: [
      createOption("Да", "yes", "contactOptions7"),
      createOption("Нет", "no", "questionFranchise5"),
    ],
  });

  addState({
    key: "catalog",
    messages: [
      {
        type: 'text',
        value: 'Вот так выглядит наш «Discovery»:'
      },
      {
        type: 'swiper',
        value: [
          { src: "images/gallery-img-1.jpg" },
          { src: "images/gallery-img-2.jpg" },
          { src: "images/gallery-img-3.jpg" },
          { src: "images/gallery-img-4.jpg" },
          { src: "images/gallery-img-5.jpg" },
          { src: "images/gallery-img-6.jpg" },

        ],
      },
      {
        type: 'text',
        value: 'Мы поможем вам оформить в стиле франшизы и вашу точку ☺️'
      },
      {
        type: 'text',
        value: 'Хотите получить подробную презентацию франшизы? Там вы можете более детально ознакомиться с нашей концепцией'
      },
    ],
    options: [
      createOption("Да", "yes", "contactOptions8"),
      createOption("Нет", "no", "questionFranchise6"),
    ],
    optionsClass: 'response-options--1'
  });

  addState({
    key: "question",
    messages: [
      {
        type: 'text',
        value: "Что вас интересует?",
      },
    ],
    requiresInput: true,
    next: "contactOptions9",
  });

  addState({
    key: "contactOptions",
    messages: [
      {
        type: 'text',
        value: "Где мы можем с вами связаться?",
      },
    ],
    options: [
      createOption("Telegram", "telegram", "phone"),
      createOption("WhatsApp", "whatsapp", "phone"),
    ],
    optionsClass: 'response-options--2'
  });

  addState({
    key: "contactOptions2",
    messages: [
      {
        type: 'text',
        value: "Где нам лучше связаться с вами?",
      },
    ],
    options: [
      createOption("Telegram", "telegram", "phone2"),
      createOption("WhatsApp", "whatsapp", "phone2"),
    ],
    optionsClass: 'response-options--2'
  });

  addState({
    key: "contactOptions3",
    messages: [
      {
        type: 'text',
        value: "Куда вам направить план?",
      },
    ],
    options: [
      createOption("Telegram", "telegram", "phone3"),
      createOption("WhatsApp", "whatsapp", "phone3"),
    ],
    optionsClass: 'response-options--2'
  });

  addState({
    key: "contactOptions4",
    messages: [
      {
        type: 'text',
        value: "Куда вам направить фин.модель?",
      },
    ],
    options: [
      createOption("Telegram", "telegram", "phone4"),
      createOption("WhatsApp", "whatsapp", "phone4"),
    ],
    optionsClass: 'response-options--2'
  });

  addState({
    key: "contactOptions5",
    messages: [
      {
        type: 'text',
        value: "Где мы можем связаться с вами?",
      },
    ],
    options: [
      createOption("Telegram", "telegram", "phone5"),
      createOption("WhatsApp", "whatsapp", "phone5"),
    ],
    optionsClass: 'response-options--2'
  });

  addState({
    key: "contactOptions6",
    messages: [
      {
        type: 'text',
        value: "Где мы можем связаться с вами?",
      },
    ],
    options: [
      createOption("Telegram", "telegram", "phone6"),
      createOption("WhatsApp", "whatsapp", "phone6"),
    ],
    optionsClass: 'response-options--2'
  });

  addState({
    key: "contactOptions7",
    messages: [
      {
        type: 'text',
        value: "Где мы можем связаться с вами? Чтобы направить информацию",
      },
    ],
    options: [
      createOption("Telegram", "telegram", "phone7"),
      createOption("WhatsApp", "whatsapp", "phone7"),
    ],
    optionsClass: 'response-options--2'
  });

  addState({
    key: "contactOptions8",
    messages: [
      {
        type: 'text',
        value: "Где мы можем связаться с вами? Чтобы направить информацию",
      },
    ],
    options: [
      createOption("Telegram", "telegram", "phone8"),
      createOption("WhatsApp", "whatsapp", "phone8"),
    ],
    optionsClass: 'response-options--2'
  });

  addState({
    key: "contactOptions9",
    messages: [
      {
        type: 'text',
        value: "Мы передали ваш вопрос менеджеру и он уже готов связаться с вами, чтобы ответить на него лично. Где вам удобнее связаться?",
      },
    ],
    options: [
      createOption("Telegram", "telegram", "phone9"),
      createOption("WhatsApp", "whatsapp", "phone9"),
    ],
    optionsClass: 'response-options--2'
  });

  addState({
    key: "phone",
    messages: [
      {
        type: 'text',
        value: "Оставьте, пожалуйста, ваш номер телефона",
      },
    ],
    requiresInput: true,
    inputType: "phone",
    next: "name",
  });

  addState({
    key: "phone2",
    messages: [
      {
        type: 'text',
        value: "Оставьте, пожалуйста, ваш номер телефона",
      },
    ],
    requiresInput: true,
    inputType: "phone",
    next: "name2",
  });

  addState({
    key: "phone3",
    messages: [
      {
        type: 'text',
        value: "Оставьте, пожалуйста, ваш номер телефона",
      },
    ],
    requiresInput: true,
    inputType: "phone",
    next: "name3",
  });

  addState({
    key: "phone4",
    messages: [
      {
        type: 'text',
        value: "Оставьте, пожалуйста, ваш номер телефона",
      },
    ],
    requiresInput: true,
    inputType: "phone",
    next: "name4",
  });

  addState({
    key: "phone5",
    messages: [
      {
        type: 'text',
        value: "Оставьте, пожалуйста, ваш номер телефона",
      },
    ],
    requiresInput: true,
    inputType: "phone",
    next: "name5",
  });

  addState({
    key: "phone6",
    messages: [
      {
        type: 'text',
        value: "Оставьте, пожалуйста, ваш номер телефона",
      },
    ],
    requiresInput: true,
    inputType: "phone",
    next: "name6",
  });

  addState({
    key: "phone7",
    messages: [
      {
        type: 'text',
        value: "Оставьте, пожалуйста, ваш номер телефона",
      },
    ],
    requiresInput: true,
    inputType: "phone",
    next: "name7",
  });

  addState({
    key: "phone8",
    messages: [
      {
        type: 'text',
        value: "Оставьте, пожалуйста, ваш номер телефона",
      },
    ],
    requiresInput: true,
    inputType: "phone",
    next: "name8",
  });

  addState({
    key: "phone9",
    messages: [
      {
        type: 'text',
        value: "Оставьте ваш номер телефона😉",
      },
    ],
    requiresInput: true,
    inputType: "phone",
    next: "responseChoice3",
  });

  addState({
    key: "name",
    messages: [
      {
        type: 'text',
        value: "Как мы можем к вам обращаться?",
      },
    ],
    requiresInput: true,
    inputType: "name",
    next: "end",
  });

  addState({
    key: "name2",
    messages: [
      {
        type: 'text',
        value: "Как мы можем к вам обращаться?",
      },
    ],
    requiresInput: true,
    inputType: "name",
    next: "end2",
  });

  addState({
    key: "name3",
    messages: [
      {
        type: 'text',
        value: "Как мы можем к вам обращаться?",
      },
    ],
    requiresInput: true,
    inputType: "name",
    next: "end3",
  });

  addState({
    key: "name4",
    messages: [
      {
        type: 'text',
        value: "Как мы можем к вам обращаться?",
      },
    ],
    requiresInput: true,
    inputType: "name",
    next: "end4",
  });

  addState({
    key: "name5",
    messages: [
      {
        type: 'text',
        value: "Как мы можем к вам обращаться?",
      },
    ],
    requiresInput: true,
    inputType: "name",
    next: "end5",
  });

  addState({
    key: "name6",
    messages: [
      {
        type: 'text',
        value: "Как мы можем к вам обращаться?",
      },
    ],
    requiresInput: true,
    inputType: "name",
    next: "end6",
  });

  addState({
    key: "name7",
    messages: [
      {
        type: 'text',
        value: "Как мы можем к вам обращаться?",
      },
    ],
    requiresInput: true,
    inputType: "name",
    next: "end7",
  });

  addState({
    key: "name8",
    messages: [
      {
        type: 'text',
        value: "Как мы можем к вам обращаться?",
      },
    ],
    requiresInput: true,
    inputType: "name",
    next: "end8",
  });

  addState({
    key: "name9",
    messages: [
      {
        type: 'text',
        value: "Как мы можем к вам обращаться?",
      },
    ],
    requiresInput: true,
    inputType: "name",
    next: "end9",
  });

  addState({
    key: "city",
    messages: [
      {
        type: 'text',
        value: "В каком городе вы проживаете?",
      },
    ],
    requiresInput: true,
    inputType: "city",
    next: "contactOptions",
  });

  addState({
    key: "end",
    showStatus: true,
    messages: [
      {
        type: 'text',
        value: "Спасибо! Наш менеджер скоро свяжется с вами!",
      },
    ],
    actionRedirect: true,
  });

  addState({
    key: "end2",
    showStatus: true,
    messages: [
      {
        type: 'text',
        value: "Спасибо! Наш менеджер скоро свяжется с вами!",
      },
    ],
    actionRedirect: true,
  });

  addState({
    key: "end3",
    showStatus: true,
    messages: [
      {
        type: 'text',
        value: "Спасибо! Наш менеджер скоро свяжется с вами!",
      },
    ],
    actionRedirect: true,
  });

  addState({
    key: "end4",
    showStatus: true,
    messages: [
      {
        type: 'text',
        value: "Спасибо! Наш менеджер скоро свяжется с вами!",
      },
    ],
    actionRedirect: true,
  });

  addState({
    key: "end5",
    showStatus: true,
    messages: [
      {
        type: 'text',
        value: "Спасибо! Наш менеджер скоро свяжется с вами!",
      },
    ],
    actionRedirect: true,
  });

  addState({
    key: "end6",
    showStatus: true,
    messages: [
      {
        type: 'text',
        value: "Спасибо! Наш менеджер скоро свяжется с вами!",
      },
    ],
    actionRedirect: true,
  });

  addState({
    key: "end7",
    showStatus: true,
    messages: [
      {
        type: 'text',
        value: "Спасибо! Наш менеджер скоро свяжется с вами!",
      },
    ],
    actionRedirect: true,
  });

  addState({
    key: "end8",
    showStatus: true,
    messages: [
      {
        type: 'text',
        value: "Спасибо! Наш менеджер скоро свяжется с вами!",
      },
    ],
    actionRedirect: true,
  });

  addState({
    key: "end9",
    showStatus: true,
    messages: [
      {
        type: 'text',
        value: "Спасибо! Скоро мы свяжемся с вами😉",
      },
    ],
    actionRedirect: true,
  });

  addState({
    key: "responseChoice",
    messages: [
      {
        type: 'text',
        value: "Может вы хотите получить подробный план запуска бизнеса?",
      },
    ],
    options: [
      createOption("Да", "yes", "contactOptions3"),
      createOption("Нет", "no", "questionFranchise2"),
    ],
    optionsClass: 'response-options--1'
  });

  addState({
    key: "responseChoice2",
    messages: [
      {
        type: 'text',
        value: "Может вы хотите получить подробную презентацию нашего бизнеса?",
      },
    ],
    options: [
      createOption("Да", "yes", "contactOptions6"),
      createOption("Нет", "no", "questionFranchise4"),
    ],
    optionsClass: 'response-options--1'
  });

  addState({
    key: "responseChoice3",
    messages: [
      {
        type: 'text',
        value: "Вам лучше позвонить или написать?",
      },
    ],
    options: [
      createOption("Позвонить", "call", "name9"),
      createOption("Написать", "write", "name9"),
    ],
    optionsClass: 'response-options--1'
  });

  addState({
    key: "questionFranchise",
    messages: [
      {
        type: 'text',
        value: "Может вас заинтересуют другие вопросы о работе франшизы?",
      },
    ],
    options: [
      createOption("Какие инвестиции потребуются для старта?", "investment", "investment"),
      createOption("Как будет формироваться моя прибыль?", "profit", "profit"),
      createOption("Как вы поможете мне на старте бизнеса?", "support", "support"),
      createOption("Из каких этапов будет состоять открытие коворкинга?", "stages", "stages"),
      createOption("Хочу посмотреть, как выглядит коворкинг", "catalog", "catalog"),
      createOption("Хочу задать свой вопрос", "question", "question"),
    ],
    optionsClass: 'response-options--main'
  });

  addState({
    key: "questionFranchise2",
    messages: [
      {
        type: 'text',
        value: "Может вас заинтересуют другие вопросы о работе франшизы?",
      },
    ],
    options: [
      createOption("Насколько актуально запускать бизнес в этой нише?", "about", "about"),
      createOption("Как будет формироваться моя прибыль?", "profit", "profit"),
      createOption("Как вы поможете мне на старте бизнеса?", "support", "support"),
      createOption("Из каких этапов будет состоять открытие коворкинга?", "stages", "stages"),
      createOption("Хочу посмотреть, как выглядит коворкинг", "catalog", "catalog"),
      createOption("Хочу задать свой вопрос", "question", "question"),
    ],
    optionsClass: 'response-options--main'
  });

  addState({
    key: "questionFranchise3",
    messages: [
      {
        type: 'text',
        value: "Может вас заинтересуют другие вопросы о работе франшизы?",
      },
    ],
    options: [
      createOption("Насколько актуально запускать бизнес в этой нише?", "about", "about"),
      createOption("Какие инвестиции потребуются для старта?", "investment", "investment"),
      createOption("Как вы поможете мне на старте бизнеса?", "support", "support"),
      createOption("Из каких этапов будет состоять открытие коворкинга?", "stages", "stages"),
      createOption("Хочу посмотреть, как выглядит коворкинг", "catalog", "catalog"),
      createOption("Хочу задать свой вопрос", "question", "question"),
    ],
    optionsClass: 'response-options--main'
  });

  addState({
    key: "questionFranchise4",
    messages: [
      {
        type: 'text',
        value: "Может вас заинтересуют другие вопросы о работе франшизы?",
      },
    ],
    options: [
      createOption("Насколько актуально запускать бизнес в этой нише?", "about", "about"),
      createOption("Какие инвестиции потребуются для старта?", "investment", "investment"),
      createOption("Как будет формироваться моя прибыль?", "profit", "profit"),
      createOption("Из каких этапов будет состоять открытие коворкинга?", "stages", "stages"),
      createOption("Хочу посмотреть, как выглядит коворкинг", "catalog", "catalog"),
      createOption("Хочу задать свой вопрос", "question", "question"),
    ],
    optionsClass: 'response-options--main'
  });

  addState({
    key: "questionFranchise5",
    messages: [
      {
        type: 'text',
        value: "Может вас заинтересуют другие вопросы о работе франшизы?",
      },
    ],
    options: [
      createOption("Насколько актуально запускать бизнес в этой нише?", "about", "about"),
      createOption("Какие инвестиции потребуются для старта?", "investment", "investment"),
      createOption("Как будет формироваться моя прибыль?", "profit", "profit"),
      createOption("Как вы поможете мне на старте бизнеса?", "support", "support"),
      createOption("Хочу посмотреть, как выглядит коворкинг", "catalog", "catalog"),
      createOption("Хочу задать свой вопрос", "question", "question"),
    ],
    optionsClass: 'response-options--main'
  });

  addState({
    key: "questionFranchise6",
    messages: [
      {
        type: 'text',
        value: "Может вас заинтересуют другие вопросы о работе франшизы?",
      },
    ],
    options: [
      createOption("Насколько актуально запускать бизнес в этой нише?", "about", "about"),
      createOption("Какие инвестиции потребуются для старта?", "investment", "investment"),
      createOption("Как будет формироваться моя прибыль?", "profit", "profit"),
      createOption("Как вы поможете мне на старте бизнеса?", "support", "support"),
      createOption("Из каких этапов будет состоять открытие коворкинга?", "stages", "stages"),
      createOption("Хочу задать свой вопрос", "question", "question"),
    ],
    optionsClass: 'response-options--main'
  });

  return states;
})();
