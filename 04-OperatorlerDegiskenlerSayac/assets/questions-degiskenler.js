window.QUIZ_TITLE = "Değişken İsimlendirme";
window.QUIZ_QUESTIONS = [
  {
    "id": "v1",
    "type": "single",
    "q": "Aşağıdakilerden hangisi bu ders standardına göre geçerli bir değişken adıdır?",
    "options": [
      "ogrenci_sayisi",
      "2ogrenci",
      "ogrenci sayisi",
      "ogrenci-sayisi"
    ],
    "answer": 0,
    "explanation": "ogrenci_sayisi harfle başlar ve yalnızca harf ile alt çizgi içerir."
  },
  {
    "id": "v2",
    "type": "single",
    "q": "Aşağıdakilerden hangisi rakamla başladığı için geçersizdir?",
    "options": [
      "2sayi",
      "sayi2",
      "sayi_2",
      "ikinci_sayi"
    ],
    "answer": 0,
    "explanation": "Rakam değişken adının ilk karakteri olamaz."
  },
  {
    "id": "v3",
    "type": "single",
    "q": "Aşağıdakilerden hangisi Python anahtar sözcüğü olduğu için değişken adı olarak kullanılamaz?",
    "options": [
      "class",
      "puan",
      "toplam",
      "sayac"
    ],
    "answer": 0,
    "explanation": "class Python anahtar sözcüklerinden biridir."
  },
  {
    "id": "v4",
    "type": "single",
    "q": "Python'da puan ve Puan aynı değişken adı mıdır?",
    "options": [
      "Hayır",
      "Evet"
    ],
    "answer": 0,
    "explanation": "Python'da büyük/küçük harf anlamlıdır; puan ve Puan farklı isimlerdir."
  },
  {
    "id": "v5",
    "type": "single",
    "q": "Aşağıdakilerden hangisi snake_case biçimine uygundur?",
    "options": [
      "toplam_puan",
      "ToplamPuan",
      "toplamPuan",
      "TOPLAMPUAN"
    ],
    "answer": 0,
    "explanation": "snake_case küçük harf ve kelimeler arasında alt çizgi kullanır."
  },
  {
    "id": "v6",
    "type": "single",
    "q": "Uzun bir programda öğrenci sayısını tutmak için hangisi daha açıklayıcıdır?",
    "options": [
      "ogrenci_sayisi",
      "x",
      "s",
      "a"
    ],
    "answer": 0,
    "explanation": "Anlamlı değişken adı programın okunabilirliğini artırır."
  },
  {
    "id": "v7",
    "type": "multi",
    "q": "Bu ders standardına göre değişken adında hangileri kullanılabilir? Birden fazla seç.",
    "options": [
      "ASCII harfler",
      "Rakamlar ilk karakterden sonra",
      "Alt çizgi",
      "Boşluk"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Bu derste ASCII harf, rakam ve alt çizgi kullanıyoruz; boşluk kullanılmaz."
  },
  {
    "id": "v8",
    "type": "single",
    "q": "Python teknik olarak Unicode değişken adlarına izin verir mi?",
    "options": [
      "Evet",
      "Hayır"
    ],
    "answer": 0,
    "explanation": "Python Unicode tabanlı tanımlayıcılara izin verir; ancak bu derste tutarlılık için ASCII tabanlı adlandırma kullanıyoruz."
  },
  {
    "id": "v9",
    "type": "single",
    "q": "Aşağıdakilerden hangisi geçerli olsa bile başlangıç seviyesinde anlamı zayıf bir isimdir?",
    "options": [
      "x",
      "toplam_puan",
      "ogrenci_sayisi",
      "not_ortalamasi"
    ],
    "answer": 0,
    "explanation": "x geçerli bir isimdir ancak bağlam yoksa görevi hakkında az bilgi verir."
  },
  {
    "id": "v10",
    "type": "single",
    "q": "Aşağıdakilerden hangisi boşluk içerdiği için geçersizdir?",
    "options": [
      "not ortalamasi",
      "not_ortalamasi",
      "notOrtalamasi",
      "ortalama"
    ],
    "answer": 0,
    "explanation": "Değişken adında boşluk bulunamaz."
  },
  {
    "id": "v11",
    "type": "multi",
    "q": "İyi değişken ismi için hangileri yararlıdır? Birden fazla seç.",
    "options": [
      "Görevi anlatması",
      "Tutarlı bir stil kullanması",
      "Gerektiğinde kelimeleri alt çizgiyle ayırması",
      "Her değişkeni tek harf yapmak"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Anlamlı ve tutarlı isimler okunabilirliği artırır."
  },
  {
    "id": "v12",
    "type": "single",
    "q": "toplam_puan = 75 ifadesinde toplam_puan nedir?",
    "options": [
      "Değişken adı",
      "Aritmetik operatör",
      "Karşılaştırma operatörü",
      "Mantıksal operatör"
    ],
    "answer": 0,
    "explanation": "toplam_puan bir isimdir; = operatörü 75 değerini bu ada bağlar."
  }
];
