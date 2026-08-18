window.QUIZ_TITLE = "Sayısal Algoritmalar";
window.QUIZ_QUESTIONS = [
  {
    "id": "n1",
    "type": "order",
    "q": "İki sayının ortalamasını hesaplayan algoritmanın temel sırasını oluştur.",
    "items": [
      {
        "id": "e",
        "text": "Bitir"
      },
      {
        "id": "b",
        "text": "İki sayıyı gir"
      },
      {
        "id": "d",
        "text": "Ortalamayı ekrana yaz"
      },
      {
        "id": "a",
        "text": "Başla"
      },
      {
        "id": "c",
        "text": "Toplamı bul ve 2'ye böl"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "explanation": "Başla → girdi → işlem → çıktı → Bitir."
  },
  {
    "id": "n2",
    "type": "number",
    "q": "a=20 ve b=30 için ortalama algoritmasının çıktısı kaçtır?",
    "answer": 25,
    "explanation": "toplam=50, ortalama=50/2=25."
  },
  {
    "id": "n3",
    "type": "single",
    "q": "a=8 ve b=12 için 'küçük sayıyı bul' algoritması hangi mesajı üretmelidir?",
    "options": [
      "Birinci sayı daha küçüktür",
      "İkinci sayı daha küçüktür",
      "Sayılar eşittir",
      "Hiçbiri"
    ],
    "answer": 0,
    "explanation": "8 < 12 olduğu için birinci sayı daha küçüktür."
  },
  {
    "id": "n4",
    "type": "single",
    "q": "Pozitif/negatif algoritmasında sayi=0 girilirse ne yapılır?",
    "options": [
      "A2'ye dönüp yeniden sayı alınır",
      "Pozitif yazılır",
      "Negatif yazılır",
      "Doğrudan Bitir"
    ],
    "answer": 0,
    "explanation": "Örnekte 0 kabul edilmiyor; A3 koşulu A2'ye geri yönlendiriyor."
  },
  {
    "id": "n5",
    "type": "number",
    "q": "1'den 5'e kadar tamsayıların toplamını hesaplayan algoritmanın çıktısı kaçtır?",
    "answer": 15,
    "explanation": "1+2+3+4+5=15."
  },
  {
    "id": "n6",
    "type": "single",
    "q": "1'den N'e kadar tek sayıları toplamanın kısa çözümünde sayac neden 2'şer artırılır?",
    "answer": 0,
    "explanation": "Sayaç 1'den başlayıp 2'şer arttığında 1,3,5,7... değerlerini alır; tek/çift kontrolü ayrıca yapılmaz.",
    "options": [
      "Sayaç yalnızca tek değerler alsın ve mod kontrolüne gerek kalmasın diye",
      "Algoritma sonsuza kadar çalışsın diye",
      "N değeri kullanılmasın diye",
      "Toplam her adımda sıfırlansın diye"
    ]
  },
  {
    "id": "n7",
    "type": "single",
    "q": "1'den N'e kadar çift sayıları toplamanın kısa çözümünde sayac=0 ile başlanmasının sonucu nedir?",
    "answer": 0,
    "explanation": "0 toplamanın etkisiz elemanıdır. Sayaç daha sonra 2,4,6... şeklinde ilerler.",
    "options": [
      "0 ilk kez toplama eklenir fakat toplamı değiştirmez; sonra sayaç 2'şer artar",
      "Algoritma yanlış sonuç verir",
      "Sadece tek sayılar toplanır",
      "Sayaç hiç değişmez"
    ]
  },
  {
    "id": "n8",
    "type": "number",
    "q": "N=5 için faktöriyel algoritmasının çıktısı kaçtır?",
    "answer": 120,
    "explanation": "5!=1×2×3×4×5=120."
  },
  {
    "id": "n9",
    "type": "order",
    "q": "1'den N'e kadar sayıları ekrana yazdıran algoritmanın temel sırasını oluştur.",
    "options": [
      "Sayaç N değerine ulaştıktan sonra toplamı yazdırmaya geçmek için",
      "Sayacı hiç artırmamak için",
      "N değerini silmek için",
      "Algoritmayı sonsuz yapmak için"
    ],
    "answer": 0,
    "explanation": "Sayaç sınırı aşana kadar yazdırılır, artırılır ve koşul yeniden kontrol edilir.",
    "items": [
      {
        "id": "e",
        "text": "Bitir"
      },
      {
        "id": "c",
        "text": "sayac değerini ekrana yaz"
      },
      {
        "id": "a",
        "text": "Başla, N değerini al ve sayac=1 yap"
      },
      {
        "id": "d",
        "text": "sayac değerini 1 artırıp koşul adımına dön"
      },
      {
        "id": "b",
        "text": "sayac > N mi kontrol et"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  },
  {
    "id": "n10",
    "type": "multi",
    "q": "Tek/çift toplam problemlerinin uzun ve kısa çözümlerini karşılaştırdığımızda hangileri doğrudur? Birden fazla seç.",
    "options": [
      "Uzun çözüm mod işlemiyle her sayının tek/çift durumunu kontrol eder",
      "Kısa çözüm sayacı 2'şer artırarak yalnızca gerekli sayılara gider",
      "Aynı problem farklı algoritmalarla çözülebilir",
      "Kısa çözümde mutlaka mod işlemi yapılmalıdır"
    ],
    "answer": 0,
    "explanation": "Kısa çözüm gereksiz tek/çift kontrollerini kaldırır; bu da aynı probleme farklı algoritmik yaklaşımları gösterir.",
    "answers": [
      0,
      1,
      2
    ]
  }
];
