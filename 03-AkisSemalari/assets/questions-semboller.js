window.QUIZ_TITLE = "Semboller ve Kurallar";
window.QUIZ_QUESTIONS = [
  {
    "id": "s1",
    "type": "single",
    "q": "Aşağıdaki şekil hangi amaçla kullanılır?",
    "visual": "<svg viewBox=\"0 0 260 110\" role=\"img\" aria-label=\"Başla Bitir sembolü\">\n  <rect x=\"35\" y=\"28\" width=\"190\" height=\"54\" rx=\"27\" fill=\"#eaf1ff\" stroke=\"#285dcc\" stroke-width=\"3\"/>\n  <text x=\"130\" y=\"61\" text-anchor=\"middle\" font-size=\"17\" font-family=\"Arial\">Başla / Bitir</text>\n</svg>",
    "options": [
      "Başlangıç / bitiş",
      "İşlem",
      "Giriş",
      "Çıktı"
    ],
    "answer": 0,
    "explanation": "Oval/terminal sembolü akışın Başla ve Bitir noktaları için kullanılır."
  },
  {
    "id": "s2",
    "type": "single",
    "q": "Aşağıdaki şekil hangi tür ifadeler için kullanılır?",
    "visual": "<svg viewBox=\"0 0 260 110\" role=\"img\" aria-label=\"İşlem sembolü\">\n  <rect x=\"35\" y=\"25\" width=\"190\" height=\"60\" rx=\"4\" fill=\"#f8fbff\" stroke=\"#285dcc\" stroke-width=\"3\"/>\n  <text x=\"130\" y=\"62\" text-anchor=\"middle\" font-size=\"17\" font-family=\"Arial\">x = x + 1</text>\n</svg>",
    "options": [
      "Matematiksel işlem ve atama",
      "Girdi alma",
      "Sonuç verme",
      "Koşul değerlendirme"
    ],
    "answer": 0,
    "explanation": "Dikdörtgen; x = x + 1, toplam = a + b gibi işlem ve atamalar için kullanılır."
  },
  {
    "id": "s3",
    "type": "single",
    "q": "Bu derste kullandığımız gösterim standardına göre aşağıdaki şekil neyi gösterir?",
    "visual": "<svg viewBox=\"0 0 260 110\" role=\"img\" aria-label=\"Giriş sembolü\">\n  <polygon points=\"62,25 230,25 198,85 30,85\" fill=\"#eef8f3\" stroke=\"#147a4b\" stroke-width=\"3\"/>\n  <text x=\"130\" y=\"62\" text-anchor=\"middle\" font-size=\"18\" font-family=\"Arial\">N</text>\n</svg>",
    "options": [
      "Giriş",
      "Çıktı",
      "Karar",
      "Başlangıç"
    ],
    "answer": 0,
    "explanation": "Bu ders standardında paralelkenar yalnızca giriş için kullanılır; içine yalnızca N gibi değişken adı yazılır."
  },
  {
    "id": "s4",
    "type": "single",
    "q": "Bu derste kullandığımız gösterim standardına göre aşağıdaki şekil neyi gösterir?",
    "visual": "<svg viewBox=\"0 0 260 110\" role=\"img\" aria-label=\"Çıktı sembolü\">\n  <path d=\"M35,22 H225 V76 C175,66 112,98 35,80 Z\" fill=\"#dff1fb\" stroke=\"#2b7ca7\" stroke-width=\"3\"/>\n  <text x=\"130\" y=\"61\" text-anchor=\"middle\" font-size=\"18\" font-family=\"Arial\">toplam</text>\n</svg>",
    "options": [
      "Çıktı",
      "Giriş",
      "İşlem",
      "Karar"
    ],
    "answer": 0,
    "explanation": "Dalgalı alt kenarlı sembol çıktı için kullanılır; içine toplam, ortalama gibi sonuç yazılır."
  },
  {
    "id": "s5",
    "type": "single",
    "q": "Aşağıdaki sembolde hangi tür ifade bulunur?",
    "visual": "<svg viewBox=\"0 0 260 130\" role=\"img\" aria-label=\"Karar sembolü\">\n  <polygon points=\"130,12 232,65 130,118 28,65\" fill=\"#fff7df\" stroke=\"#b17a10\" stroke-width=\"3\"/>\n  <text x=\"130\" y=\"70\" text-anchor=\"middle\" font-size=\"17\" font-family=\"Arial\">sayac &gt; N</text>\n</svg>",
    "options": [
      "Koşul",
      "Atama",
      "Girdi değişkeni",
      "Sonuç değişkeni"
    ],
    "answer": 0,
    "explanation": "Karar sembolünde yalnızca sayac > N, mod = 0 gibi koşul bulunur; sonuna soru işareti eklenmez."
  },
  {
    "id": "s6",
    "type": "single",
    "q": "Aşağıdaki ok neyi gösterir?",
    "visual": "<svg viewBox=\"0 0 260 110\" role=\"img\" aria-label=\"Akış oku\">\n  <defs><marker id=\"quizArrow\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"3\" orient=\"auto\">\n    <path d=\"M0,0 L0,6 L9,3 z\" fill=\"#42546f\"/>\n  </marker></defs>\n  <path d=\"M40,55 L215,55\" stroke=\"#42546f\" stroke-width=\"4\" fill=\"none\" marker-end=\"url(#quizArrow)\"/>\n</svg>",
    "options": [
      "Akış yönünü",
      "Girdi değerini",
      "Karar sonucunu tek başına",
      "Çıktı değerini"
    ],
    "answer": 0,
    "explanation": "Akış oku, bir sembolden sonra hangi sembolün izleneceğini gösterir."
  },
  {
    "id": "s7",
    "type": "single",
    "q": "Aşağıdaki karar sembolü bağlantısı bu dersin ok yerleşim kuralına uygun mudur?",
    "visual": "<svg viewBox=\"0 0 320 190\" role=\"img\" aria-label=\"Karar sembolüne üstten giriş, sağ ve alttan çıkış\">\n  <defs><marker id=\"cornerArrow\" markerWidth=\"9\" markerHeight=\"9\" refX=\"8\" refY=\"3\" orient=\"auto\">\n    <path d=\"M0,0 L0,6 L9,3 z\" fill=\"#42546f\"/>\n  </marker></defs>\n  <polygon points=\"160,55 245,105 160,155 75,105\" fill=\"#fff7df\" stroke=\"#b17a10\" stroke-width=\"3\"/>\n  <text x=\"160\" y=\"110\" text-anchor=\"middle\" font-size=\"16\" font-family=\"Arial\">x &gt; 0</text>\n  <path d=\"M160,10 L160,55\" stroke=\"#42546f\" stroke-width=\"3\" marker-end=\"url(#cornerArrow)\"/>\n  <path d=\"M245,105 L300,105\" stroke=\"#42546f\" stroke-width=\"3\" marker-end=\"url(#cornerArrow)\"/>\n  <path d=\"M160,155 L160,185\" stroke=\"#42546f\" stroke-width=\"3\" marker-end=\"url(#cornerArrow)\"/>\n  <text x=\"270\" y=\"94\" text-anchor=\"middle\" font-size=\"13\" font-family=\"Arial\">Evet</text>\n  <text x=\"181\" y=\"180\" font-size=\"13\" font-family=\"Arial\">Hayır</text>\n</svg>",
    "options": [
      "Evet",
      "Hayır"
    ],
    "answer": 0,
    "explanation": "Üst köşeden giriş yapılmış, sağ ve alt köşelerden ayrı çıkışlar verilmiştir; aynı köşe hem giriş hem çıkış için kullanılmamıştır."
  },
  {
    "id": "s8",
    "type": "multi",
    "q": "Bu ders standardına göre karar sembolü için hangileri doğrudur? Birden fazla seç.",
    "options": [
      "Koşulun sonuna soru işareti eklenmez",
      "Aynı köşe hem giriş hem çıkış için kullanılmaz",
      "Dallanma Evet/Hayır etiketli oklarla gösterilebilir",
      "Karar sembolünün içine 'A5'e dön' yazılır"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Karar sembolünde yalnızca koşul bulunur; yönlendirmeler oklarla gösterilir."
  },
  {
    "id": "s9",
    "type": "single",
    "q": "Giriş paralelkenarının içinde hangisi bulunmalıdır?",
    "options": [
      "N",
      "N sayısını gir",
      "N değerini klavyeden oku",
      "A2: N"
    ],
    "answer": 0,
    "explanation": "Şeklin içinde yalnızca giriş değişkeni yazılır."
  },
  {
    "id": "s10",
    "type": "single",
    "q": "İşlem dikdörtgeninde hangisi doğru yazımdır?",
    "options": [
      "toplam = toplam + sayac",
      "toplam değişkenine sayacı ekle",
      "toplam = toplam + sayac işlemini yap",
      "toplam = toplam + sayac ve karar sembolüne dön"
    ],
    "answer": 0,
    "explanation": "Dikdörtgende yalnızca matematiksel işlem veya atama ifadesi bulunur."
  },
  {
    "id": "s11",
    "type": "single",
    "q": "Çıktı sembolünde hangisi doğru yazımdır?",
    "options": [
      "ortalama",
      "ortalama değerini ekrana yaz",
      "çıktı = ortalama yaz",
      "A6: ortalama"
    ],
    "answer": 0,
    "explanation": "Çıktı sembolünde yalnızca sonuç değişkeni veya kısa sonuç değeri bulunur."
  },
  {
    "id": "s12",
    "type": "order",
    "q": "Koşul içermeyen basit bir sayısal akışın genel sırasını oluştur.",
    "items": [
      {
        "id": "d",
        "text": "Çıktı"
      },
      {
        "id": "a",
        "text": "Başla"
      },
      {
        "id": "e",
        "text": "Bitir"
      },
      {
        "id": "c",
        "text": "İşlem"
      },
      {
        "id": "b",
        "text": "Giriş"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "explanation": "Sıralı bir sayısal akış genel olarak Başla → Giriş → İşlem → Çıktı → Bitir biçiminde ilerler."
  }
];
