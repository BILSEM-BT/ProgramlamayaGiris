window.QUIZ_TITLE = "Sayaç Mantığı";
window.QUIZ_QUESTIONS = [
  {
    "id": "c1",
    "type": "single",
    "q": "Sayaç değişkeninin temel görevi nedir?",
    "options": [
      "Tekrar sayısını veya sıradaki değeri izlemek",
      "Yalnızca sonuç yazdırmak",
      "Sadece metin saklamak",
      "Koşulları ortadan kaldırmak"
    ],
    "answer": 0,
    "explanation": "Sayaç tekrar sayısını veya işlem sırasındaki değeri takip eder."
  },
  {
    "id": "c2",
    "type": "single",
    "q": "sayac = 0 iken sayac += 1 işleminden sonra sayac kaç olur?",
    "options": [
      "1",
      "0",
      "2",
      "-1"
    ],
    "answer": 0,
    "explanation": "Sayaç 1 artırılır."
  },
  {
    "id": "c3",
    "type": "single",
    "q": "sayac = 1 ile başlayıp her turda sayac += 2 yapılırsa ilk dört değer hangileridir?",
    "options": [
      "1, 3, 5, 7",
      "1, 2, 3, 4",
      "0, 2, 4, 6",
      "2, 4, 6, 8"
    ],
    "answer": 0,
    "explanation": "1'den başlayıp 2'şer artış tek sayıları üretir."
  },
  {
    "id": "c4",
    "type": "single",
    "q": "sayac = 0 ile başlayıp her turda sayac += 2 yapılırsa ilk dört değer hangileridir?",
    "options": [
      "0, 2, 4, 6",
      "1, 3, 5, 7",
      "0, 1, 2, 3",
      "2, 3, 4, 5"
    ],
    "answer": 0,
    "explanation": "0'dan 2'şer artış çift değerleri üretir."
  },
  {
    "id": "c5",
    "type": "single",
    "q": "N'den 1'e geriye saymak için hangi güncelleme uygundur?",
    "options": [
      "sayac -= 1",
      "sayac += 1",
      "sayac *= 2",
      "sayac %= 2"
    ],
    "answer": 0,
    "explanation": "Geriye saymak için sayaç azaltılır."
  },
  {
    "id": "c6",
    "type": "single",
    "q": "toplam = toplam + sayac ifadesinde toplam değişkeninin görevi nedir?",
    "options": [
      "Biriktirici",
      "Sayaç",
      "Koşul",
      "Giriş"
    ],
    "answer": 0,
    "explanation": "toplam her turdaki değeri biriktirir."
  },
  {
    "id": "c7",
    "type": "single",
    "q": "1'den N'e kadar sayıları N dahil işlemek için hangisi uygundur?",
    "options": [
      "sayac <= N",
      "sayac < N",
      "sayac > N",
      "sayac == 0"
    ],
    "answer": 0,
    "explanation": "<= kullanıldığında sayaç N değerindeyken işlem devam eder."
  },
  {
    "id": "c8",
    "type": "single",
    "q": "1'den N'e kadar sayıları N hariç işlemek için hangisi uygundur?",
    "options": [
      "sayac < N",
      "sayac <= N",
      "sayac > N",
      "sayac != 0"
    ],
    "answer": 0,
    "explanation": "< kullanıldığında sayaç N olduğunda koşul yanlış olur."
  },
  {
    "id": "c9",
    "type": "multi",
    "q": "Bir sayaç tasarlarken hangi dört nokta belirlenmelidir? Birden fazla seç.",
    "options": [
      "Başlangıç değeri",
      "Bitiş/koşul",
      "Artış veya azalış miktarı",
      "Sayaç değerinin nerede kullanılacağı"
    ],
    "answers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Sayaç mantığının tamamı başlangıç, sınır, değişim ve kullanım üzerinden kurulabilir."
  },
  {
    "id": "c10",
    "type": "single",
    "q": "Döngü koşulu sayac <= 10 iken sayac hiç değiştirilmezse temel risk nedir?",
    "options": [
      "Döngünün sonlanmaması",
      "Sayaç otomatik artar",
      "Koşul kendiliğinden False olur",
      "Toplam sıfırlanır"
    ],
    "answer": 0,
    "explanation": "Koşulu değiştiren bir güncelleme yoksa döngü sonsuza kadar sürebilir."
  },
  {
    "id": "c11",
    "type": "single",
    "q": "sayac = sayac + 1 ile sayac += 1 başlangıç düzeyindeki sayısal sayaç örneklerinde nasıl ilişkilidir?",
    "options": [
      "Aynı sayaç artışını ifade ederler",
      "Birincisi karşılaştırmadır",
      "İkincisi mantıksal operatördür",
      "İkisi de geçersizdir"
    ],
    "answer": 0,
    "explanation": "Basit sayısal sayaçta her iki yazım da sayacı 1 artırır."
  },
  {
    "id": "c12",
    "type": "order",
    "q": "Temel sayaç mantığını doğru sıraya getir.",
    "items": [
      {
        "id": "d",
        "text": "Sayacı güncelle"
      },
      {
        "id": "b",
        "text": "Koşulu kontrol et"
      },
      {
        "id": "a",
        "text": "Sayacı başlangıç değerine getir"
      },
      {
        "id": "c",
        "text": "Gerekli işlemi yap"
      },
      {
        "id": "e",
        "text": "Koşula geri dön veya bitir"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "explanation": "Sayaç hazırlanır, koşul kontrol edilir, işlem yapılır, sayaç güncellenir ve koşul yeniden değerlendirilir."
  }
];
