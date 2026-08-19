window.QUIZ_TITLE = "Operatörler";
window.QUIZ_QUESTIONS = [
  {
    "id": "o1",
    "type": "single",
    "q": "17 % 5 işleminin sonucu kaçtır?",
    "options": [
      "2",
      "3",
      "3.4",
      "5"
    ],
    "answer": 0,
    "explanation": "% operatörü bölümden kalanı verir; 17'nin 5'e bölümünden kalan 2'dir."
  },
  {
    "id": "o2",
    "type": "single",
    "q": "17 // 5 işleminin sonucu kaçtır?",
    "options": [
      "3",
      "2",
      "3.4",
      "4"
    ],
    "answer": 0,
    "explanation": "// taban bölme operatörüdür; pozitif sayılarda bölümün aşağı yuvarlanmış tamsayı sonucunu verir."
  },
  {
    "id": "o3",
    "type": "single",
    "q": "2 ** 5 işleminin sonucu kaçtır?",
    "options": [
      "32",
      "10",
      "25",
      "7"
    ],
    "answer": 0,
    "explanation": "** üs alma operatörüdür; 2 üzeri 5 = 32."
  },
  {
    "id": "o4",
    "type": "single",
    "q": "2 + 3 * 4 işleminin sonucu kaçtır?",
    "options": [
      "14",
      "20",
      "24",
      "11"
    ],
    "answer": 0,
    "explanation": "Çarpma toplamadan önce yapılır: 3*4=12, 2+12=14."
  },
  {
    "id": "o5",
    "type": "single",
    "q": "(2 + 3) * 4 işleminin sonucu kaçtır?",
    "options": [
      "20",
      "14",
      "24",
      "9"
    ],
    "answer": 0,
    "explanation": "Parantez önce değerlendirilir: 2+3=5, 5*4=20."
  },
  {
    "id": "o6",
    "type": "single",
    "q": "Aşağıdakilerden hangisi eşitlik karşılaştırmasıdır?",
    "options": [
      "==",
      "=",
      "+=",
      "!="
    ],
    "answer": 0,
    "explanation": "== iki değerin eşit olup olmadığını karşılaştırır; = atamadır."
  },
  {
    "id": "o7",
    "type": "single",
    "q": "5 != 3 ifadesinin sonucu nedir?",
    "options": [
      "True",
      "False",
      "5",
      "3"
    ],
    "answer": 0,
    "explanation": "5 ve 3 eşit olmadığı için != karşılaştırması True verir."
  },
  {
    "id": "o8",
    "type": "single",
    "q": "50 >= 50 ifadesinin sonucu nedir?",
    "options": [
      "True",
      "False",
      "50",
      "0"
    ],
    "answer": 0,
    "explanation": ">= büyük veya eşit anlamındadır; 50 kendisine eşittir."
  },
  {
    "id": "o9",
    "type": "single",
    "q": "True and False ifadesinin sonucu nedir?",
    "options": [
      "False",
      "True",
      "0",
      "Tanımsız"
    ],
    "answer": 0,
    "explanation": "and için iki koşulun da True olması gerekir."
  },
  {
    "id": "o10",
    "type": "single",
    "q": "False or True ifadesinin sonucu nedir?",
    "options": [
      "True",
      "False",
      "Tanımsız",
      "0"
    ],
    "answer": 0,
    "explanation": "or için koşullardan en az birinin True olması yeterlidir."
  },
  {
    "id": "o11",
    "type": "single",
    "q": "not True ifadesinin sonucu nedir?",
    "options": [
      "False",
      "True",
      "1",
      "None"
    ],
    "answer": 0,
    "explanation": "not doğruluk değerini tersine çevirir."
  },
  {
    "id": "o12",
    "type": "single",
    "q": "x = 7 iken x += 3 işleminden sonra x kaç olur?",
    "options": [
      "10",
      "7",
      "3",
      "21"
    ],
    "answer": 0,
    "explanation": "x += 3 başlangıç düzeyinde x = x + 3 gibi düşünülebilir."
  },
  {
    "id": "o13",
    "type": "multi",
    "q": "Aşağıdakilerden hangileri karşılaştırma operatörüdür? Birden fazla seç.",
    "options": [
      "==",
      "!=",
      "<=",
      ">",
      "+="
    ],
    "answers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "==, !=, <= ve > karşılaştırmadır; += artırılmış atamadır."
  },
  {
    "id": "o14",
    "type": "multi",
    "q": "Aşağıdakilerden hangileri aritmetik operatördür? Birden fazla seç.",
    "options": [
      "+",
      "%",
      "**",
      "//",
      "and"
    ],
    "answers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "+ , %, ** ve // aritmetik operatörlerdir; and mantıksal operatördür."
  },
  {
    "id": "o15",
    "type": "single",
    "q": "yas >= 10 and yas <= 15 ifadesi neyi ister?",
    "options": [
      "İki karşılaştırmanın da doğru olmasını",
      "En az bir karşılaştırmanın doğru olmasını",
      "Her iki karşılaştırmanın yanlış olmasını",
      "yas değerinin 15'ten büyük olmasını"
    ],
    "answer": 0,
    "explanation": "and ile birleştirilen iki koşulun da doğru olması gerekir."
  },
  {
    "id": "o16",
    "type": "single",
    "q": "mod3 == 0 and mod5 == 0 ifadesi hangi durumu kontrol eder?",
    "options": [
      "Bir sayının hem 3'e hem 5'e tam bölünmesini",
      "Yalnızca 3'e bölünmesini",
      "Yalnızca 5'e bölünmesini",
      "3 veya 5'ten büyük olmasını"
    ],
    "answer": 0,
    "explanation": "İki koşul and ile birleştirildiği için ikisi de sağlanmalıdır."
  }
];
