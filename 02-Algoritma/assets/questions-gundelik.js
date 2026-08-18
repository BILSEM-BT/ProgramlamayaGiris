window.QUIZ_TITLE = "Gündelik Yaşam Algoritmaları";
window.QUIZ_QUESTIONS = [
  {
    "id": "d1",
    "type": "single",
    "q": "A6: 'Su kaynadı mı? Kaynamadıysa A5'e git. Kaynadıysa A7'ye git.' adımı hangi yapıyı gösterir?",
    "options": [
      "Koşul ve dallanma",
      "Sadece çıktı",
      "Sadece atama",
      "Algoritmanın bitişi"
    ],
    "answer": 0,
    "explanation": "A6 bir koşul sorar ve iki farklı adıma yönlendirme yapar."
  },
  {
    "id": "d2",
    "type": "single",
    "q": "Çay demleme algoritmasında su kaynamadıysa neden A5'e geri dönülür?",
    "options": [
      "Bekleme ve yeniden kontrol işlemini tekrarlamak için",
      "Algoritmayı bitirmek için",
      "Çayı servis etmek için",
      "Girdi almak için"
    ],
    "answer": 0,
    "explanation": "Koşul sağlanana kadar bekleme-kontrol çevrimi sürdürülür."
  },
  {
    "id": "d3",
    "type": "order",
    "q": "Bir algoritmanın temel dış sınırlarını doğru sıraya getir.",
    "items": [
      {
        "id": "c",
        "text": "Bitir"
      },
      {
        "id": "a",
        "text": "Başla"
      },
      {
        "id": "b",
        "text": "İşlem / koşul / tekrar adımlarını uygula"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "explanation": "Başlangıç düzeyinde algoritma Başla ile başlar ve Bitir ile sona ulaşır."
  },
  {
    "id": "d4",
    "type": "single",
    "q": "Yumurta pişirme algoritmasında 'Tercih rafadan mı? Evetse ... Hayırsa ...' adımı neden gereklidir?",
    "options": [
      "Farklı tercihlere farklı işlem yolları uygulamak için",
      "Sadece adım sayısını artırmak için",
      "Algoritmayı sonsuz yapmak için",
      "Çıktıyı silmek için"
    ],
    "answer": 0,
    "explanation": "Koşul, farklı tercihler için farklı dallar seçilmesini sağlar."
  },
  {
    "id": "d5",
    "type": "single",
    "q": "Telefon şarj algoritmasında pil %80'e ulaşmadıysa tekrar ölçüm adımına dönmek hangi yapıdır?",
    "options": [
      "Tekrar",
      "Sadece giriş",
      "Sadece çıkış",
      "Bitirme"
    ],
    "answer": 0,
    "explanation": "Koşul sağlanana kadar ölçüm tekrarlandığı için bir tekrar yapısı oluşur."
  },
  {
    "id": "d6",
    "type": "multi",
    "q": "Koşullu adımı aynı satırda yazarken hangilerinin açık olması gerekir? Birden fazla seç.",
    "options": [
      "Sorulan koşul",
      "Koşul doğruysa gidilecek adım",
      "Koşul yanlışsa gidilecek adım",
      "Rastgele bir adım numarası"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Koşul ve iki yönlendirme açık yazılırsa kontrol akışı takip edilebilir."
  },
  {
    "id": "d7",
    "type": "single",
    "q": "'Yükleme tamamlandı mı? Tamamlanmadıysa A5'e git. Tamamlandıysa A7'ye git.' ifadesinde A5'e dönüş neyi sağlar?",
    "options": [
      "İşlemin tamamlanana kadar tekrar edilmesini/izlenmesini",
      "Dosyanın silinmesini",
      "Algoritmanın hemen bitmesini",
      "Koşulun kaldırılmasını"
    ],
    "answer": 0,
    "explanation": "Tamamlanmayan işlem için önceki adıma dönülerek süreç sürdürülür."
  },
  {
    "id": "d8",
    "type": "single",
    "q": "Bir algoritmanın sonlu olması ne anlama gelir?",
    "options": [
      "Belirli koşullarda sonlu sayıda adımdan sonra Bitir durumuna ulaşması",
      "Her zaman sonsuza kadar çalışması",
      "Başla adımının olmaması",
      "Hiç koşul içermemesi"
    ],
    "answer": 0,
    "explanation": "Sonluluk, algoritmanın uygun koşullarda bir bitiş durumuna ulaşmasını ifade eder."
  },
  {
    "id": "d9",
    "type": "order",
    "q": "QR ödeme akışını mantıklı sıraya getir.",
    "items": [
      {
        "id": "d",
        "text": "İşlem sonucunu yaz ve Bitir"
      },
      {
        "id": "b",
        "text": "QR kodu okut"
      },
      {
        "id": "a",
        "text": "Başla ve uygulamayı aç"
      },
      {
        "id": "c",
        "text": "Bilgileri kontrol edip onay/iptal yolunu seç"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "explanation": "Önce işlem başlar, veri alınır, koşul değerlendirilir ve sonuçtan sonra bitişe gidilir."
  },
  {
    "id": "d10",
    "type": "single",
    "q": "'Adıma git' ifadesi bir sonraki Akış Şemaları dersinde en çok neye karşılık gelecektir?",
    "options": [
      "Akış yönünü gösteren ok bağlantısına",
      "Renk seçimine",
      "Başlık yazısına",
      "Sayfa kenar boşluğuna"
    ],
    "answer": 0,
    "explanation": "Adımlar arasındaki geçişler akış şemasında yön oklarıyla gösterilecektir."
  }
];
