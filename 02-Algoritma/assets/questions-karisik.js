window.QUIZ_TITLE = "Karışık Algoritma Değerlendirmesi";
window.QUIZ_QUESTIONS = [
  {
    "id": "m1",
    "type": "single",
    "q": "Algoritmada A1 ve son adımın sırasıyla ne olması beklenir?",
    "options": [
      "Başla ve Bitir",
      "Girdi ve çıktı",
      "Eğer ve değilse",
      "Topla ve böl"
    ],
    "answer": 0,
    "explanation": "Ders standardımızda ilk adım Başla, son adım Bitir'dir."
  },
  {
    "id": "m2",
    "type": "multi",
    "q": "Bir koşullu adımın akış şemasına kolay dönüştürülebilmesi için hangileri açık olmalıdır? Birden fazla seç.",
    "options": [
      "Koşul",
      "Doğru/evet yolu",
      "Yanlış/hayır yolu",
      "Gidilecek adımlar"
    ],
    "answers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Karar düğümünün iki yolu ve hedef adımlar açık olmalıdır."
  },
  {
    "id": "m3",
    "type": "single",
    "q": "'A6: Su kaynadı mı? Kaynamadıysa A5'e git. Kaynadıysa A7'ye git.' adımında geri ok hangi geçişi temsil eder?",
    "options": [
      "A6'dan A5'e",
      "A5'ten A7'ye",
      "A1'den A15'e",
      "A7'den A6'ya"
    ],
    "answer": 0,
    "explanation": "Koşul yanlışsa kontrol A6'dan A5'e geri döner."
  },
  {
    "id": "m4",
    "type": "single",
    "q": "Sayaçlı bir algoritmada sayac değeri hiç değiştirilmezse en önemli risk nedir?",
    "options": [
      "Koşul hiç değişmeyip algoritmanın Bitir'e ulaşamaması",
      "Çıktının otomatik düzelmesi",
      "Girdi sayısının azalması",
      "Algoritmanın daha kısa olması"
    ],
    "answer": 0,
    "explanation": "Sayaç değişmezse tekrar koşulu sürekli doğru kalabilir ve algoritma sonlanmayabilir."
  },
  {
    "id": "m5",
    "type": "single",
    "q": "Sözde kod ve numaralı algoritma adımları arasındaki ortak amaç nedir?",
    "options": [
      "Çözüm mantığını programlama dilinden önce açık biçimde ifade etmek",
      "Yalnızca görsel tasarım yapmak",
      "Kod derlemek",
      "Dosya kaydetmek"
    ],
    "answer": 0,
    "explanation": "Her ikisi de çözüm mantığını kodlama öncesinde anlaşılır hale getirir."
  },
  {
    "id": "m6",
    "type": "order",
    "q": "Dersler arası anlam sırasını oluştur.",
    "items": [
      {
        "id": "c",
        "text": "Akış şemasıyla görselleştir"
      },
      {
        "id": "a",
        "text": "Problemi çöz ve çözüm yolunu seç"
      },
      {
        "id": "d",
        "text": "Programlama diliyle kodla"
      },
      {
        "id": "b",
        "text": "Algoritmayı adım adım yaz"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "explanation": "Problem Çözme → Algoritma → Akış Şeması → Programlama."
  },
  {
    "id": "m7",
    "type": "single",
    "q": "Bir algoritmada 'A4'e geri dön' ifadesi neyi gösterir?",
    "options": [
      "Kontrol akışının önceki bir adıma yönlendirildiğini",
      "Algoritmanın mutlaka bittiğini",
      "Girdinin silindiğini",
      "Sadece yorum satırı olduğunu"
    ],
    "answer": 0,
    "explanation": "Bu ifade döngü veya tekrar oluşturabilecek bir geri geçiştir."
  },
  {
    "id": "m8",
    "type": "single",
    "q": "Bir algoritmanın bütün dallarının sonunda Bitir'e ulaşabilmesini kontrol etmek hangi özellikle en yakından ilgilidir?",
    "options": [
      "Sonluluk",
      "Renk",
      "Dosya adı",
      "Ekran çözünürlüğü"
    ],
    "answer": 0,
    "explanation": "Bütün yolların uygun koşullarda sona ulaşması sonlulukla ilgilidir."
  },
  {
    "id": "m9",
    "type": "single",
    "q": "Akış şemasında algoritmadaki 'Eğer ... ise' adımı hangi tür yapıya dönüşecektir?",
    "options": [
      "Karar/dallanma yapısına",
      "Sadece başlangıç sembolüne",
      "Sadece çıktı sembolüne",
      "Dosya sembolüne"
    ],
    "answer": 0,
    "explanation": "Koşullu adımlar akış şemasında karar noktası ve dallarla gösterilir."
  },
  {
    "id": "m10",
    "type": "multi",
    "q": "Akış Şemaları dersinde tekrar kullanmak üzere bu dersteki sayısal örneklerde hangi yapılar hazır durumda? Birden fazla seç.",
    "options": [
      "Başla/Bitir",
      "Girdi ve çıktı",
      "İşlem/atama",
      "Koşul ve geri dönüş"
    ],
    "answers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Sayısal örnekler akış şemasının temel yapılarını içerecek şekilde düzenlendi."
  }
];
