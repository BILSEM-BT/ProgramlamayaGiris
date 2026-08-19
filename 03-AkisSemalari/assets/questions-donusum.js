window.QUIZ_TITLE = "Algoritmadan Akış Şemasına";
window.QUIZ_QUESTIONS = [
  {
    "id": "c1",
    "type": "single",
    "q": "'N sayısını gir' algoritma adımı, bu ders standardına göre giriş sembolünde nasıl gösterilir?",
    "options": [
      "N",
      "N sayısını gir",
      "N değerini oku",
      "A2: N"
    ],
    "answer": 0,
    "explanation": "Giriş paralelkenarında yalnızca değişken adı bulunur."
  },
  {
    "id": "c2",
    "type": "single",
    "q": "'toplam değişkenine 0 ata' algoritma adımı işlem dikdörtgeninde nasıl gösterilir?",
    "options": [
      "toplam = 0",
      "toplam değişkenine 0 ata",
      "toplamı sıfırla",
      "A3: toplam = 0"
    ],
    "answer": 0,
    "explanation": "İşlem kutusunda yalnızca atama ifadesi yazılır."
  },
  {
    "id": "c3",
    "type": "single",
    "q": "'sayac değerini 1 artır' algoritma adımı işlem dikdörtgeninde nasıl gösterilir?",
    "options": [
      "sayac = sayac + 1",
      "sayacı 1 artır",
      "sayac = sayac + 1 işlemini yap",
      "A6: sayac = sayac + 1"
    ],
    "answer": 0,
    "explanation": "Dikdörtgende yalnızca matematiksel işlem bulunur."
  },
  {
    "id": "c4",
    "type": "single",
    "q": "'toplam değişkenini ekrana yaz' algoritma adımı çıktı sembolünde nasıl gösterilir?",
    "options": [
      "toplam",
      "toplam değişkenini ekrana yaz",
      "çıktı = toplam",
      "A8: toplam"
    ],
    "answer": 0,
    "explanation": "Çıktı sembolünde yalnızca sonuç değişkeni bulunur."
  },
  {
    "id": "c5",
    "type": "single",
    "q": "'Eğer sayac > N ise...' algoritma adımı karar sembolünde nasıl gösterilir?",
    "options": [
      "sayac > N",
      "sayac > N ?",
      "Eğer sayac > N ise",
      "A5: sayac > N"
    ],
    "answer": 0,
    "explanation": "Bu ders standardında karar sembolünde yalnızca koşul yazılır ve sonuna soru işareti eklenmez."
  },
  {
    "id": "c6",
    "type": "single",
    "q": "'Eğer mod = 0 ise...' algoritma adımı karar sembolünde nasıl gösterilir?",
    "options": [
      "mod = 0",
      "mod = 0 ?",
      "Eğer mod = 0 ise",
      "mod değerini kontrol et"
    ],
    "answer": 0,
    "explanation": "Karar sembolünde yalnızca mod = 0 koşulu bulunur."
  },
  {
    "id": "c7",
    "type": "order",
    "q": "İki sayının ortalamasını hesaplayan akışın doğru sırasını oluştur.",
    "items": [
      {
        "id": "f",
        "text": "Bitir"
      },
      {
        "id": "c",
        "text": "toplam = a + b"
      },
      {
        "id": "a",
        "text": "Başla"
      },
      {
        "id": "e",
        "text": "ortalama çıktısı"
      },
      {
        "id": "b",
        "text": "a, b girişleri"
      },
      {
        "id": "d",
        "text": "ortalama = toplam / 2"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f"
    ],
    "explanation": "Akış Başla → giriş → toplama → ortalama hesabı → çıktı → Bitir sırasındadır."
  },
  {
    "id": "c8",
    "type": "multi",
    "q": "1'den N'e kadar tamsayıların toplamı akışında işlem dikdörtgenlerinde hangileri bulunur? Birden fazla seç.",
    "options": [
      "toplam = 0",
      "sayac = 0",
      "sayac = sayac + 1",
      "toplam = toplam + sayac"
    ],
    "answers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Dört ifadenin tamamı işlem veya atamadır ve dikdörtgenlerde yer alır."
  },
  {
    "id": "c9",
    "type": "single",
    "q": "Algoritmadaki 'geri dön' yönlendirmesi akış şemasında nasıl gösterilir?",
    "options": [
      "İlgili sembole geri yönelen okla",
      "İşlem dikdörtgeninin içine 'geri dön' yazarak",
      "Giriş sembolünün içine adım numarası yazarak",
      "Yeni bir çıktı sembolü ekleyerek"
    ],
    "answer": 0,
    "explanation": "Geri dönüş bir metin değil, akış yönünü gösteren ok bağlantısıdır."
  },
  {
    "id": "c10",
    "type": "single",
    "q": "Karar sembolünden çıkan Evet ve Hayır yolları nasıl gösterilmelidir?",
    "options": [
      "Ayrı oklarla ve uygun etiketlerle",
      "Aynı köşeden iki ok çıkararak",
      "Karar sembolünün içine hedef adım numaralarını yazarak",
      "Çıkış oku kullanmadan"
    ],
    "answer": 0,
    "explanation": "Dallar ayrı oklarla gösterilir; bu ders standardında aynı karar köşesine birden fazla bağlantı yapılmaz."
  },
  {
    "id": "c11",
    "type": "multi",
    "q": "Bu ders standardına göre şekillerin içinde hangileri bulunabilir? Birden fazla seç.",
    "options": [
      "Değişken adları",
      "Matematiksel işlemler",
      "Koşullar",
      "'A5'e git' gibi yönlendirme cümleleri"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Yönlendirmeler şekil içinde değil, oklarla gösterilir."
  },
  {
    "id": "c12",
    "type": "order",
    "q": "Bir algoritmayı akış şemasına dönüştürürken izlenecek mantıklı sırayı oluştur.",
    "items": [
      {
        "id": "f",
        "text": "Bütün yolların Bitir'e ulaştığını kontrol et"
      },
      {
        "id": "c",
        "text": "İşlem ve atamaları dikdörtgene yerleştir"
      },
      {
        "id": "a",
        "text": "Başla ve Bitir noktalarını belirle"
      },
      {
        "id": "e",
        "text": "Sıra, dallanma ve geri dönüş oklarını çiz"
      },
      {
        "id": "b",
        "text": "Girdi ve çıktıları ayır"
      },
      {
        "id": "d",
        "text": "Koşulları karar sembolüne yerleştir"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f"
    ],
    "explanation": "Önce sembol türleri belirlenir, sonra ok bağlantıları kurulur ve son olarak bütün akış yolları test edilir."
  }
];
