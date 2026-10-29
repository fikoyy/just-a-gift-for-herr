/* =========================================================
   script.js — Digital Gift

   CARA EDIT:
   Semua teks, nama, tanggal, foto, dan musik diatur di objek
   CONFIG di bawah ini. Anda TIDAK perlu mengubah kode lain.
   Ganti setiap teks yang berada di dalam tanda [ ... ].
   Gunakan \n untuk baris baru (di puisi, setiap baris = \n).
   ========================================================= */
'use strict';

/* =========================================================
   1. KONFIGURASI  (EDIT DI SINI)
   ========================================================= */
const CONFIG = {

  /* --- Data umum --- */
  pageTitle: 'gift',
  recipientName: 'Zhahira Aliyah Putri',
  senderName: 'Fikoy',
  date: '29/10/26',

  /* --- Label antarmuka (bukan isi hadiah) --- */
  labels: {
    to: 'Untuk',
    from: 'Dari',
    date: 'Tanggal',
    typing: 'Efek mengetik',
    openLetter: 'Ketuk untuk membuka',
    openGift: 'Ketuk kotak hadiah',
    photo: 'Foto'
  },

  /* --- Nama menu navigasi --- */
  nav: {
    home: 'Home',
    ucapan: 'Ucapan',
    puisi: 'Puisi',
    ungkapan: 'Ungkapan',
    galeri: 'Galeri',
    penutup: 'Penutup'
  },

  /* --- Musik ---
     1. Taruh file audio di folder  assets/musik/
     2. Ubah nama file di bawah ini sesuai file Anda
     Musik baru berbunyi setelah tombol "Buka Hadiah" ditekan. */
  music: {
    src: 'assets/musik/lagu.mp3',
    volume: 0.6,
    autoPlayAfterOpen: true
  },

  /* --- Efek mengetik (bisa dinyalakan/dimatikan pengunjung) --- */
  typing: {
    enabled: true,   // kondisi awal saklar
    speed: 38        // milidetik per huruf (makin kecil makin cepat)
  },

  /* --- Halaman pembuka --- */
  intro: {
    title: 'little gift for you',
    subtitle: 'hope you like it',
    buttonLabel: 'Buka Hadiah'
  },

  /* --- Home --- */
  home: {
    eyebrow: 'little',
    title: 'Gift',
    subtitle: 'just for you'
  },

  /* --- Ucapan (kartu surat digital) --- */
  ucapan: {
    title: 'something i want to tell',
    greeting: 'halo cilaa',
    body: 'apa kabar? semoga baik baik saja,i hope you like this little gift.maaf kalau aku sering menyusahkan mu,sering menggangu mu,sering menjadikan mu tempat cerita tanpa izin(btw i make this while crying:).hope you like it:)',
    signature: ''
  },

  /* --- Puisi: tambah/kurangi kartu dengan menyalin satu blok { ... } --- */
  puisi: {
    title: 'Poetry ',
    cards: [
      { title: 'MISS YOU', body: 'biarkan lah aku tenggelam dalam kerinduan ini\nkarena aku tau\norang yang aku rindukan itu kamu', author: 'FKY' },
      { title: 'WAITING', body: 'aku selalu...\nselalu menunggu kabar darimu\ntapi aku tau\nyang aku tunggu tidak akan benar-benar\nterjadi', author: 'FKY' },
      { title: 'LOOK AT ME', body: 'kenapa?\nkenapa kamu begitu sulit hanya untuk\nmelihat ke arahku?', author: 'FKY' },
      { title: 'RED STRING', body: 'bahkan sang tali merah pun tidak mengizinkan aku untuk memilikimu\nbahkan hanya untuk memilikimu satu kali saja\natau bahkan kesempatan satu kali', author: 'FKY' },
      { title: 'HOW I WANT TO LOVE YOU', body: 'aku ingin\nmencintaimu\ndengan doa\nyang paling ramai\ndengan cara yang\npaling sunyi\ndengan kata yang\npaling puisi', author: 'FKY' },
    ]
  },

  /* --- Ungkapan (surat dalam amplop) --- */
  ungkapan: {
    title: 'something i want to tell u but i cant',
    letterTitle: 'THIS IS MY MASSAGE FOR YOU',
    body: 'honestly,aku benar-benar cape tapi aku tetap berusaha bertahan dengan tetap denial dan berpikir positif.\nTapi setelah mendengar bahwwa kamu benar-benar tidak akan pernah melihat ke arahku,air mataku mulai jatuh.\npadahal aku sangat mencintaimu lebih dari yang kamu tau.\naku hanya bisa melihatmu dari jauh dan berdoa semoga kamu mendapatkan yang benar-benar mencintaimu bahkan lebih dari aku atau siapapun\n\nkarena mau seberapa lama pun aku menunggu\naku hanya akan kehilangan diriku sendiri\ntenggelam dalam pikiran dan rasa cemas ku sendiri\ntenggelam dalam rasa bersalah kepadamu\ndan disitulah aku harus sadar dan move on\nbahwa gadis 100/10 itu tidak akan pernah melihat kearahku sedikitpun\nbahkan aku mendengar bahwa kamu dekat dengan laki-laki lain sedangkan disini\naku berusaha meyakinkan mu bahwa aku sangat mencintai mu lebih dari yang kamu tau\nthats all\nthank you for being my fav person for these 3 years\ni hope you find someone better than me\nsomeone who enough for you\nsomeone who always be side you\nsomeone who makes you feels save\nsomone who love you more than anyone else ever could',
    signature: ''
  },

  /* --- Galeri polaroid ---
     src    : lokasi foto, mis. 'assets/foto/foto1.jpg'
              (kosongkan '' untuk memakai kotak placeholder)
     caption: tulisan di bawah foto
     Tambah slot dengan menyalin satu baris { ... }. */
  galeri: {
    title: '',
    photos: []
  },

  /* --- Penutup (kotak hadiah) --- */
  penutup: {
    title: 'Makasih sudah membaca dan membuka link ini :)',
    message: 'SEMOGA HIDUPMU SELALU DIBERKATI SAMA TUHAN,BAHAGIA SELALU,DAN MASIH SUKA TERTAWA SEPERTI ZHAHIRA YANG KUKENAL,MAAF KALAU AKU MEMBUATMU MERASA TERGANGGU DENGAN PERASAAN KU SENDIRI.SETELAH INI SUDAH TIDAK AKAN ADA LAGI YANG AKAN MENGGANGGU MU.\n\nmungkin memang saat nya mi untuk berhentika kejar ko dan saatnya mi untuk terima kalau sesuatu hal tidak bisa dipaksakan\n mulai sekarang bakalan fokus ka kehidup ku sendiri dulu,kalo soal percintaan nda ku tau mi bakalan ada yang baru atau hidup sendirian\n\nku tau ji bilang tidak bakalan secepat ituka bisa lupakan ko karena i love you since 2023\ntapi yang namanya hidup harus tetap dijalani walaupun ada hal-hal berat yang harus dilewati\n\npada akhirnya harus ka terbiasa untuk relakan ko sm laki-laki lain demi kebahagiaanmu dan kebahagiaan ku juga\npada akhirnya harus ka mulai paham bahwa ada hal-hal di dunia ini yang tidak bisa dipaksakan dan harus direlakan walaupun itu menyakitkan\n\n semoga ketemu ko laki-laki yang lebih baik dariku,yang bisa tau apa mau mu,yang bisa membuatko merasa dicintai tanpa bilang i love you,yang tidak patriarki,yang peka terhadap dirimu,yang bisa handle ego mu.\n\nI HOPE YOU CAN SMILE EVERYDAY AND HAVE A REASON TO KEEP YOUR SMILE EVEN ON YOUR DARKEST DAY.\n\nat the end i ended up to choosing you to become my bestfriends :))',
    signature: '',
    date: '29/10/26'
  }
};

/* =========================================================
   2. UTILITAS
   ========================================================= */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const rand = (a, b) => a + Math.random() * (b - a);
const TAU = Math.PI * 2;
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Ambil nilai CONFIG dari path teks, mis. 'ucapan.title' */
const getPath = (obj, path) =>
  path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);

/** Buat elemen dengan class dan teks (aman: memakai textContent) */
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

const VIEWS = ['home', 'ucapan', 'puisi', 'ungkapan', 'galeri', 'penutup'];

/** Tema latar tiap halaman: light | pink | dark */
const THEME = {
  home: 'light', ucapan: 'pink', puisi: 'light',
  ungkapan: 'dark', galeri: 'pink', penutup: 'dark'
};

const ICONS = {
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/></svg>',
  ucapan: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v12H3z M3 7l9 6 9-6"/></svg>',
  puisi: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6c-2-1.500-5-2-8-2v14c3 0 6 .5 8 2 2-1.500 5-2 8-2V4c-3 0-6 .5-8 2z M12 6v14"/></svg>',
  ungkapan: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9 M16.500 3.500a2.100 2.100 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
  galeri: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3z M3 16l5-5 4 4 3-3 6 6 M9 9.500h.01"/></svg>',
  penutup: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12v9H4v-9 M2 7h20v5H2z M12 22V7 M12 7H7.500a2.500 2.500 0 0 1 0-5C11 2 12 7 12 7z M12 7h4.500a2.500 2.500 0 0 0 0-5C13 2 12 7 12 7z"/></svg>'
};
const PHOTO_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3z M3 16l5-5 4 4 3-3 6 6 M9 9.500h.01"/></svg>';

/* Status aplikasi */
const state = {
  current: 'home',
  opened: false,
  typing: !!CONFIG.typing.enabled,
  typedOnce: { ucapan: false, ungkapan: false },
  lightboxIndex: -1
};

/* =========================================================
   3. ISI TEKS DARI CONFIG
   ========================================================= */
function bindTexts() {
  document.title = CONFIG.pageTitle;
  $$('[data-text]').forEach((node) => {
    const value = getPath(CONFIG, node.dataset.text);
    if (typeof value === 'string') node.textContent = value;
  });
  $('#ucapanBody').textContent = CONFIG.ucapan.body;
  $('#ungkapanBody').textContent = CONFIG.ungkapan.body;
  $('#closingBody').textContent = CONFIG.penutup.message;
}

/* =========================================================
   4. EFEK MENGETIK
   Teks "bayangan" (ghost) menjaga tinggi kotak tetap stabil
   sehingga tampilan tidak melompat saat mengetik.
   ========================================================= */
const typers = new WeakMap();

function cancelTyping(node) {
  const t = typers.get(node);
  if (t) { clearTimeout(t); typers.delete(node); }
}

function renderText(node, text, animate) {
  cancelTyping(node);
  node.textContent = '';
  if (!animate || prefersReduced || !text) {
    node.textContent = text;
    return;
  }
  const typed = el('span', 'typed is-typing');
  const ghost = el('span', 'ghost', text);
  ghost.setAttribute('aria-hidden', 'true');
  node.append(typed, ghost);

  let i = 0;
  const speed = Math.max(8, CONFIG.typing.speed);
  const tick = () => {
    i += 1;
    typed.textContent = text.slice(0, i);
    ghost.textContent = text.slice(i);
    if (i < text.length) {
      const pause = /[.,!?\n]/.test(text[i - 1]) ? speed * 4 : speed;
      typers.set(node, setTimeout(tick, pause));
    } else {
      typers.delete(node);
      node.textContent = text; // selesai: rapikan kembali jadi teks biasa
    }
  };
  typers.set(node, setTimeout(tick, speed));
}

function setupTypingToggles() {
  const toggles = $$('.js-typing-toggle');
  toggles.forEach((t) => {
    t.checked = state.typing;
    t.addEventListener('change', () => {
      state.typing = t.checked;
      toggles.forEach((o) => { o.checked = state.typing; });
      // Ulangi tampilan teks pada halaman yang sedang dibuka
      if (state.current === 'ucapan') {
        state.typedOnce.ucapan = true;
        renderText($('#ucapanBody'), CONFIG.ucapan.body, state.typing);
      }
      if (state.current === 'ungkapan' && $('#letterBox').classList.contains('is-open')) {
        state.typedOnce.ungkapan = true;
        renderText($('#ungkapanBody'), CONFIG.ungkapan.body, state.typing);
      }
    });
  });
}

/* =========================================================
   5. NAVIGASI
   ========================================================= */
function renderNav() {
  const nav = $('#nav');
  VIEWS.forEach((name) => {
    const btn = el('button', 'nav__btn');
    btn.type = 'button';
    btn.dataset.goto = name;
    btn.innerHTML = ICONS[name];
    btn.append(el('span', null, CONFIG.nav[name] || name));
    nav.append(btn);
  });
}

function showView(name) {
  if (!VIEWS.includes(name)) return;
  const prev = state.current;
  state.current = name;

  $$('.view').forEach((v) => v.classList.toggle('is-active', v.dataset.view === name));
  $$('.nav__btn').forEach((b) => {
    if (b.dataset.goto === name) b.setAttribute('aria-current', 'page');
    else b.removeAttribute('aria-current');
  });

  document.body.dataset.theme = THEME[name];
  sky.dark = THEME[name] === 'dark';
  window.scrollTo(0, 0);
  if (window.history && history.replaceState) history.replaceState(null, '', '#' + name);

  // Hentikan efek mengetik halaman yang ditinggalkan (tampilkan teks penuh)
  if (prev === 'ucapan' && name !== 'ucapan') renderText($('#ucapanBody'), CONFIG.ucapan.body, false);
  if (prev === 'ungkapan' && name !== 'ungkapan') renderText($('#ungkapanBody'), CONFIG.ungkapan.body, false);

  // Mulai efek mengetik saat pertama kali masuk halaman Ucapan
  if (name === 'ucapan' && !state.typedOnce.ucapan) {
    state.typedOnce.ucapan = true;
    renderText($('#ucapanBody'), CONFIG.ucapan.body, state.typing);
  }
}

/* =========================================================
   6. PUISI — kartu buku (satu kartu terbuka dalam satu waktu)
   ========================================================= */
function buildLines(container, text) {
  let idx = 0;
  String(text).split('\n').forEach((line) => {
    if (line.trim() === '') { container.append(el('span', 'poem__gap')); return; }
    const s = el('span', 'poem__line', line);
    s.style.setProperty('--i', idx++);
    container.append(s);
  });
}

function renderPoems() {
  const list = $('#poemList');
  CONFIG.puisi.cards.forEach((card, i) => {
    const art = el('article', 'poem');

    const head = el('button', 'poem__head');
    head.type = 'button';
    head.id = 'poem-head-' + i;
    head.setAttribute('aria-expanded', 'false');
    head.setAttribute('aria-controls', 'poem-panel-' + i);
    const chev = el('span', 'poem__chev');
    chev.setAttribute('aria-hidden', 'true');
    head.append(el('span', 'poem__num', String(i + 1).padStart(2, '0')), el('span', 'poem__title', card.title), chev);

    const panel = el('div', 'poem__panel');
    panel.id = 'poem-panel-' + i;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-labelledby', head.id);

    const page = el('div', 'poem__page');
    const sheet = el('div', 'poem__sheet');
    sheet.append(el('h4', 'poem__heading', card.title));
    const lines = el('div', 'poem__lines');
    buildLines(lines, card.body);
    sheet.append(lines);
    if (card.author) sheet.append(el('p', 'poem__author', card.author));

    page.append(sheet);
    panel.append(page);
    art.append(head, panel);
    list.append(art);

    head.addEventListener('click', () => togglePoem(art));
  });
}

function togglePoem(art) {
  const willOpen = !art.classList.contains('is-open');
  $$('.poem.is-open').forEach((p) => {
    p.classList.remove('is-open');
    $('.poem__head', p).setAttribute('aria-expanded', 'false');
  });
  if (willOpen) {
    art.classList.add('is-open');
    $('.poem__head', art).setAttribute('aria-expanded', 'true');
    setTimeout(() => art.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' }), 420);
  }
}

/* =========================================================
   7. UNGKAPAN — membuka amplop & surat
   ========================================================= */
function setupLetter() {
  const box = $('#letterBox');
  const env = $('#letterEnvelope');
  env.addEventListener('click', () => {
    const open = !box.classList.contains('is-open');
    box.classList.toggle('is-open', open);
    env.classList.toggle('is-open', open);
    env.setAttribute('aria-expanded', String(open));
    env.setAttribute('aria-label', open ? 'Tutup surat' : 'Buka surat');
    if (open) {
      const r = env.getBoundingClientRect();
      burst(r.left + r.width / 2, r.top + r.height / 2, 26);
      if (!state.typedOnce.ungkapan) {
        state.typedOnce.ungkapan = true;
        setTimeout(() => {
          if (box.classList.contains('is-open')) {
            renderText($('#ungkapanBody'), CONFIG.ungkapan.body, state.typing);
          }
        }, 900);
      }
    }
  });
}

/* =========================================================
   8. GALERI — polaroid + lightbox
   ========================================================= */
const TILTS = [-3, 2, -1.5, 3, -2.5, 1.5];

function makePhotoNode(photo, index) {
  if (photo.src) {
    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.caption || (CONFIG.labels.photo + ' ' + (index + 1));
    img.loading = 'lazy';
    img.addEventListener('error', () => img.replaceWith(makePlaceholder(index)));
    return img;
  }
  return makePlaceholder(index);
}

function makePlaceholder(index) {
  const ph = el('div', 'photo-ph');
  ph.innerHTML = PHOTO_ICON;
  ph.append(el('span', null, CONFIG.labels.photo + ' ' + (index + 1)));
  return ph;
}

function renderGallery() {
  const grid = $('#gallery');
  CONFIG.galeri.photos.forEach((photo, i) => {
    const fig = el('figure', 'polaroid');
    fig.style.setProperty('--rot', TILTS[i % TILTS.length] + 'deg');
    fig.tabIndex = 0;
    fig.setAttribute('role', 'button');
    fig.setAttribute('aria-label', 'Perbesar ' + CONFIG.labels.photo.toLowerCase() + ' ' + (i + 1));

    const frame = el('div', 'polaroid__photo');
    frame.append(makePhotoNode(photo, i));
    fig.append(frame, el('figcaption', 'polaroid__caption', photo.caption));
    fig.addEventListener('click', () => openLightbox(i));
    grid.append(fig);
  });
}

const lb = {
  root: $('#lightbox'), media: $('#lbMedia'), cap: $('#lbCaption'),
  close: $('#lbClose'), prev: $('#lbPrev'), next: $('#lbNext'), lastFocus: null
};

function renderLightbox() {
  const photo = CONFIG.galeri.photos[state.lightboxIndex];
  lb.media.replaceChildren(makePhotoNode(photo, state.lightboxIndex));
  lb.cap.textContent = photo.caption || '';
}
function openLightbox(i) {
  state.lightboxIndex = i;
  lb.lastFocus = document.activeElement;
  renderLightbox();
  lb.root.classList.add('is-open');
  lb.root.setAttribute('aria-hidden', 'false');
  document.body.classList.add('is-locked');
  lb.close.focus();
}
function closeLightbox() {
  lb.root.classList.remove('is-open');
  lb.root.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('is-locked');
  state.lightboxIndex = -1;
  if (lb.lastFocus && lb.lastFocus.focus) lb.lastFocus.focus();
}
function stepLightbox(dir) {
  const n = CONFIG.galeri.photos.length;
  state.lightboxIndex = (state.lightboxIndex + dir + n) % n;
  renderLightbox();
}
function setupLightbox() {
  lb.close.addEventListener('click', closeLightbox);
  lb.prev.addEventListener('click', () => stepLightbox(-1));
  lb.next.addEventListener('click', () => stepLightbox(1));
  lb.root.addEventListener('click', (e) => { if (e.target === lb.root) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (state.lightboxIndex < 0) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') stepLightbox(-1);
    else if (e.key === 'ArrowRight') stepLightbox(1);
    else if (e.key === 'Tab') { // jaga fokus tetap di dalam lightbox
      const f = [lb.close, lb.prev, lb.next];
      const idx = f.indexOf(document.activeElement);
      e.preventDefault();
      f[(idx + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });
}

/* =========================================================
   9. PENUTUP — kotak hadiah
   ========================================================= */
function setupGiftbox() {
  const gift = $('#giftbox');
  const panel = $('#closingPanel');
  gift.addEventListener('click', () => {
    const open = !gift.classList.contains('is-open');
    gift.classList.toggle('is-open', open);
    panel.classList.toggle('is-open', open);
    gift.setAttribute('aria-expanded', String(open));
    sky.sparkle = open;
    if (open) {
      const r = gift.getBoundingClientRect();
      burst(r.left + r.width / 2, r.top + r.height * 0.3, 70);
      setTimeout(() => burst(r.left + r.width / 2, r.top + r.height * 0.3, 40), 450);
      setTimeout(() => panel.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'center' }), 700);
    }
  });
}

/* =========================================================
   10. BINTANG & PARTIKEL (canvas) + KELOPAK BUNGA
   ========================================================= */
const sky = $('#sky');
sky.dark = false;      // true di halaman bertema gelap
sky.sparkle = false;   // hujan kilau di penutup
const ctx = sky.getContext('2d');
let W = 0, H = 0, stars = [], parts = [], lastT = 0;

function resizeSky() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = window.innerWidth; H = window.innerHeight;
  sky.width = Math.floor(W * dpr);
  sky.height = Math.floor(H * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const n = Math.round(Math.min(110, Math.max(36, (W * H) / 11000)));
  stars = Array.from({ length: n }, () => ({
    x: rand(0, W), y: rand(0, H), r: rand(0.5, 1.7),
    ph: rand(0, TAU), sp: rand(0.5, 1.4), dy: rand(2, 7)
  }));
  if (prefersReduced) drawFrame(0);
}

/** Bentuk kilau 4 sudut */
function sparkleShape(x, y, r) {
  ctx.beginPath();
  ctx.moveTo(x, y - r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.quadraticCurveTo(x, y, x, y + r);
  ctx.quadraticCurveTo(x, y, x - r, y);
  ctx.quadraticCurveTo(x, y, x, y - r);
  ctx.fill();
}

const BURST_COLORS = ['255,214,224', '246,175,190', '240,210,150', '255,255,255', '201,90,115'];

function burst(x, y, count) {
  if (prefersReduced) return;
  for (let i = 0; i < count && parts.length < 420; i++) {
    const a = rand(0, TAU), sp = rand(60, 260);
    parts.push({
      x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 80, g: 220,
      life: 0, max: rand(1.1, 2.2), size: rand(4, 10),
      col: BURST_COLORS[(Math.random() * BURST_COLORS.length) | 0]
    });
  }
}

function drawFrame(dt) {
  ctx.clearRect(0, 0, W, H);

  const base = sky.dark ? '255,235,225' : '214,140,158';
  const gold = sky.dark ? '240,210,150' : '201,163,106';
  stars.forEach((s, i) => {
    s.ph += dt * s.sp;
    s.y -= s.dy * dt * 0.6;
    if (s.y < -6) { s.y = H + 6; s.x = rand(0, W); }
    const a = 0.18 + 0.5 * (0.5 + 0.5 * Math.sin(s.ph));
    ctx.fillStyle = 'rgba(' + (i % 3 === 0 ? gold : base) + ',' + a.toFixed(3) + ')';
    if (s.r > 1.25) sparkleShape(s.x, s.y, s.r * 3.2);
    else { ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, TAU); ctx.fill(); }
  });

  // hujan kilau lembut di halaman penutup setelah kotak dibuka
  if (sky.sparkle && state.current === 'penutup' && !prefersReduced && Math.random() < 0.18 && parts.length < 300) {
    parts.push({
      x: rand(0, W), y: -10, vx: rand(-12, 12), vy: rand(40, 95), g: 0,
      life: 0, max: rand(3, 5), size: rand(3, 7),
      col: BURST_COLORS[(Math.random() * BURST_COLORS.length) | 0]
    });
  }

  for (let i = parts.length - 1; i >= 0; i--) {
    const p = parts[i];
    p.life += dt;
    if (p.life >= p.max) { parts.splice(i, 1); continue; }
    p.vx *= 1 - 1.2 * dt;
    p.vy += p.g * dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    const k = 1 - p.life / p.max;
    ctx.fillStyle = 'rgba(' + p.col + ',' + (k * 0.95).toFixed(3) + ')';
    sparkleShape(p.x, p.y, p.size * (0.4 + 0.6 * k));
  }
}

function loop(t) {
  const dt = Math.min(0.05, (t - lastT) / 1000 || 0.016);
  lastT = t;
  drawFrame(dt);
  requestAnimationFrame(loop);
}

function startSky() {
  resizeSky();
  window.addEventListener('resize', resizeSky);
  if (!prefersReduced) requestAnimationFrame(loop);
}

function makePetals() {
  if (prefersReduced) return;
  const box = $('#petals');
  const n = window.innerWidth < 600 ? 9 : 16;
  for (let i = 0; i < n; i++) {
    const p = el('span', 'petal');
    const size = rand(10, 18);
    p.style.cssText =
      'left:' + rand(0, 100).toFixed(1) + '%;' +
      'width:' + size.toFixed(1) + 'px;height:' + (size * 1.3).toFixed(1) + 'px;' +
      '--dx:' + rand(-90, 90).toFixed(0) + 'px;--rot:' + rand(180, 540).toFixed(0) + 'deg;' +
      '--o:' + rand(0.35, 0.65).toFixed(2) + ';' +
      'animation-duration:' + rand(14, 26).toFixed(1) + 's;' +
      'animation-delay:-' + rand(0, 26).toFixed(1) + 's;';
    box.append(p);
  }
}

/* =========================================================
   11. MUSIK — hanya berbunyi setelah interaksi pengguna
   ========================================================= */
const audio = $('#audio');
const playBtn = $('#playBtn');

function setPlaying(isPlaying) {
  playBtn.classList.toggle('is-playing', isPlaying);
  playBtn.setAttribute('aria-pressed', String(isPlaying));
  playBtn.setAttribute('aria-label', isPlaying ? 'Jeda musik' : 'Putar musik');
}

async function playMusic() {
  if (!CONFIG.music.src) return;
  try {
    await audio.play();
    setPlaying(true);
  } catch (err) {
    setPlaying(false);
    console.warn('Musik tidak dapat diputar. Periksa CONFIG.music.src dan file di assets/musik/.', err);
  }
}

function setupMusic() {
  if (CONFIG.music.src) audio.src = CONFIG.music.src;
  audio.volume = Math.min(1, Math.max(0, CONFIG.music.volume));
  audio.addEventListener('error', () => setPlaying(false));
  playBtn.addEventListener('click', () => {
    if (audio.paused) playMusic();
    else { audio.pause(); setPlaying(false); }
  });
}

/* =========================================================
   12. HALAMAN PEMBUKA — buka amplop lalu masuk ke halaman utama
   ========================================================= */
function openGift() {
  if (state.opened) return;
  state.opened = true;

  const intro = $('#intro');
  const env = $('#envelope');
  const app = $('#app');

  env.classList.add('is-open');
  $('#openGift').disabled = true;

  const r = env.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height / 2, 50);

  // dipanggil langsung dari klik pengguna, sehingga diizinkan browser
  if (CONFIG.music.autoPlayAfterOpen) playMusic();

  setTimeout(() => {
    const h = location.hash.replace('#', '');
    const start = VIEWS.includes(h) ? h : 'home';

    intro.classList.add('is-leaving');
    app.hidden = false;
    $('#player').hidden = false;
    document.body.classList.remove('is-locked');
    showView(start);
    requestAnimationFrame(() => requestAnimationFrame(() => app.classList.add('is-entering')));

    setTimeout(() => { intro.hidden = true; }, 1100);
  }, 1700);
}

function setupIntro() {
  $('#openGift').addEventListener('click', openGift);
  $('#envelope').addEventListener('click', openGift);
}

/* =========================================================
   13. INISIALISASI
   ========================================================= */
function setupGlobalEvents() {
  // Tombol navigasi / panah dengan atribut data-goto
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-goto]');
    if (t) showView(t.dataset.goto);
  });
  // Elemen role="button" (amplop, kotak hadiah, polaroid) bisa dipakai dengan keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const t = e.target;
    if (t && t.getAttribute && t.getAttribute('role') === 'button' && t.tagName !== 'BUTTON') {
      e.preventDefault();
      t.click();
    }
  });
}

function safe(fn) {
  try { fn(); } catch (err) { console.error('[Digital Gift] Error di ' + fn.name + ':', err); }
}

function init() {
  safe(setupIntro);
  safe(setupGlobalEvents);
  safe(bindTexts);
  safe(renderNav);
  safe(renderPoems);
  safe(renderGallery);
  safe(setupTypingToggles);
  safe(setupLetter);
  safe(setupLightbox);
  safe(setupGiftbox);
  safe(setupMusic);
  safe(startSky);
  safe(makePetals);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
