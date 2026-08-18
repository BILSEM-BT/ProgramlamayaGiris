const questions = [
  {
    "id": 1,
    "type": "single",
    "q": "Bir programlama problemini çözmeye başlamadan önce yapılması gereken ilk iş hangisidir?",
    "options": [
      "Hemen kod yazmak",
      "Problemi açık biçimde yazmak ve ne istendiğini anlamak",
      "Rastgele veri üretmek",
      "Programlama dilini değiştirmek"
    ],
    "answer": 1,
    "explanation": "Problem açık biçimde yazılmalı ve ne istendiği anlaşılmalıdır."
  },
  {
    "id": 2,
    "type": "single",
    "q": "Problemi kendi cümlelerinle yeniden anlatmanın temel amacı nedir?",
    "options": [
      "Problemi daha uzun yapmak",
      "Gerçekten anlayıp anlamadığını kontrol etmek",
      "Kod satırı sayısını artırmak",
      "Girdileri gizlemek"
    ],
    "answer": 1,
    "explanation": "Problemi kendi cümlelerinle ifade edebilmek, problemi anlayıp anlamadığını gösterir."
  },
  {
    "id": 3,
    "type": "multi",
    "q": "Bir problem yazılırken hangi üç soru mutlaka cevaplanmalıdır? Birden fazla seç.",
    "options": [
      "Ne veriliyor?",
      "Ne isteniyor?",
      "Hangi kurallar var?",
      "Ekranın rengi ne olacak?"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Verilenler, istenenler ve kurallar problem tanımının temel parçalarıdır."
  },
  {
    "id": 4,
    "type": "single",
    "q": "Bir öğrencinin üç sınav notunun ortalamasını hesaplama probleminde girdiler hangileridir?",
    "options": [
      "Üç sınav notu",
      "Ortalama",
      "Geçti/Kaldı sonucu",
      "Sonuç mesajı"
    ],
    "answer": 0,
    "explanation": "Girdi, programa dışarıdan verilen üç sınav notudur."
  },
  {
    "id": 5,
    "type": "single",
    "q": "Girdi → İşlem → Çıktı yapısında '(70 + 80 + 90) / 3' hangi bölümdür?",
    "options": [
      "Girdi",
      "İşlem",
      "Çıktı",
      "Problem başlığı"
    ],
    "answer": 1,
    "explanation": "Bu ifade girdiler üzerinde yapılan hesaplamadır."
  },
  {
    "id": 6,
    "type": "single",
    "q": "Problem çözme sürecinde seçilen çözüm yolunun açık ve sıralı adımlar halinde yazılmasıyla ne oluşturulur?",
    "options": [
      "Algoritma",
      "Sadece çıktı",
      "Gereksiz bilgi",
      "Dosya adı"
    ],
    "answer": 0,
    "explanation": "Seçilen çözüm yolunun uygulanacak sıralı adımlara dönüştürülmesiyle algoritma oluşturulur."
  },
  {
    "id": 7,
    "type": "single",
    "q": "Problem parçalamanın temel amacı nedir?",
    "options": [
      "Problemi daha karmaşık hale getirmek",
      "Büyük problemi küçük ve yönetilebilir görevlere ayırmak",
      "Girdileri azaltmak",
      "Her probleme aynı çözümü uygulamak"
    ],
    "answer": 1,
    "explanation": "Parçalama, karmaşık problemi daha kolay çözülebilen alt problemlere böler."
  },
  {
    "id": 8,
    "type": "single",
    "q": "Tümevarımsal akıl yürütmenin en doğru açıklaması hangisidir?",
    "options": [
      "Gözlem ve kanıtların sonucu desteklemesi veya olası hale getirmesi",
      "Öncüller doğruysa sonucun mutlaka doğru olması",
      "Her zaman yalnızca özelden genele cümle kurmak",
      "Bir sonucu test etmeden kesin kabul etmek"
    ],
    "answer": 0,
    "explanation": "Tümevarımda gözlem ve kanıtlar sonucu destekler; sonuç mantıksal olarak garanti edilmez."
  },
  {
    "id": 9,
    "type": "single",
    "q": "Geçerli bir tümdengelimsel çıkarım için hangisi doğrudur?",
    "options": [
      "Öncüller doğruysa sonuç yine de tamamen rastgele olabilir",
      "Öncüller doğruysa sonuç zorunlu olarak doğrudur",
      "Sonuç yalnızca olasıdır",
      "Yeni gözlem gelince mantıksal sonuç kendiliğinden değişir"
    ],
    "answer": 1,
    "explanation": "Geçerli tümdengelimde öncüller doğruysa sonuç yanlış olamaz."
  },
  {
    "id": 10,
    "type": "order",
    "q": "Tümevarımsal düşünme sürecini doğru sıraya getir.",
    "items": [
      {
        "id": "c",
        "text": "Gözlemler arasındaki örüntüyü belirle"
      },
      {
        "id": "a",
        "text": "Birden fazla gözlem veya örnek topla"
      },
      {
        "id": "d",
        "text": "Olası bir genelleme veya tahmin oluştur"
      },
      {
        "id": "b",
        "text": "Örnekleri karşılaştır"
      },
      {
        "id": "e",
        "text": "Yeni örneklerle sonucu yeniden test et"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "explanation": "Tümevarım gözlem ve örneklerden olası bir genelleme veya tahmine gider ve yeni kanıtlarla yeniden sınanır."
  },
  {
    "id": 11,
    "type": "order",
    "q": "Tümdengelimsel düşünme sürecini doğru sıraya getir.",
    "items": [
      {
        "id": "c",
        "text": "Özel durumun öncülleri sağlayıp sağlamadığını belirle"
      },
      {
        "id": "a",
        "text": "Kural ve öncülleri açıkça yaz"
      },
      {
        "id": "d",
        "text": "Öncüllerden zorunlu olarak çıkan sonucu belirle"
      },
      {
        "id": "b",
        "text": "Verilen özel durumu incele"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "explanation": "Tümdengelimde kural ve öncüllerden hareket edilerek zorunlu mantıksal sonuç çıkarılır."
  },
  {
    "id": 12,
    "type": "single",
    "q": "Servis son sekiz okul gününde yaklaşık aynı saatte geldi. 'Yarın da yaklaşık aynı saatte gelecektir.' sonucu hangi tür akıl yürütmedir?",
    "options": [
      "Tümevarım",
      "Geçerli tümdengelim",
      "Kesin matematiksel ispat",
      "Sadece çıktı"
    ],
    "answer": 0,
    "explanation": "Geçmiş gözlemler yarın için bir tahmini destekler; fakat sonucu garanti etmez."
  },
  {
    "id": 13,
    "type": "single",
    "q": "'500 TL veya üzerindeki siparişlerde kargo ücretsizdir. Sipariş 650 TL'dir. O halde kargo ücretsizdir.' çıkarımı hangi türdür?",
    "options": [
      "Tümevarım",
      "Tümdengelim",
      "Rastgele tahmin",
      "Gereksiz bilgi ayırma"
    ],
    "answer": 1,
    "explanation": "Verilen genel koşul belirli siparişe uygulanmış ve zorunlu sonuç çıkarılmıştır."
  },
  {
    "id": 14,
    "type": "single",
    "q": "Aynı problemi çözen iki farklı çözüm yolu varsa hangisini seçmek daha uygundur?",
    "options": [
      "İlk akla geleni, başka ölçüt düşünmeden",
      "Doğru, açık, uygulanabilir ve problem koşullarına uygun olanı",
      "En fazla adım içereni",
      "En karmaşık görüneni"
    ],
    "answer": 1,
    "explanation": "Uygun çözüm; doğruluk, açıklık, uygulanabilirlik, sadelik ve problem koşullarına uygunluk açısından değerlendirilir."
  },
  {
    "id": 15,
    "type": "multi",
    "q": "Bir problemi anladığını kontrol etmek için hangilerini yapabilirsin? Birden fazla seç.",
    "options": [
      "Problemi kendi cümlelerinle yeniden yazmak",
      "İstenen sonucu açıklamak",
      "Gerekli bilgileri ayırmak",
      "Problemi okumadan kodlamak"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "İlk üç yöntem problemi anlama sürecini güçlendirir."
  },
  {
    "id": 16,
    "type": "single",
    "q": "'Ortalama 50 veya üzerindeyse Geçti, değilse Kaldı' probleminde 50 nedir?",
    "options": [
      "Gereksiz bilgi",
      "Sınır değer",
      "Çıktı",
      "Program adı"
    ],
    "answer": 1,
    "explanation": "50, kararın değiştiği sınır değeridir."
  },
  {
    "id": 17,
    "type": "multi",
    "q": "50 sınır değerli bir problemde hangi değerleri özellikle test etmek yararlıdır? Birden fazla seç.",
    "options": [
      "49",
      "50",
      "51",
      "Sadece 80"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Sınırın hemen altı, sınırın kendisi ve hemen üstü özellikle test edilmelidir."
  },
  {
    "id": 18,
    "type": "order",
    "q": "Problem çözmeden programlamaya uzanan sıralamayı doğru hale getir.",
    "items": [
      {
        "id": "d",
        "text": "Programlama diliyle kodla"
      },
      {
        "id": "b",
        "text": "Çözüm yolunu sıralı adımlarla algoritmaya dönüştür"
      },
      {
        "id": "a",
        "text": "Problemi anla ve uygun çözüm yolunu seç"
      },
      {
        "id": "c",
        "text": "Algoritmayı akış şemasıyla görselleştir"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "explanation": "Ders dizimizin mantığı Problem Çözme → Algoritma → Akış Şeması → Kod şeklindedir."
  },
  {
    "id": 19,
    "type": "single",
    "q": "Akış şemasının algoritmayla ilişkisini en doğru açıklayan seçenek hangisidir?",
    "options": [
      "Akış şeması algoritmadan tamamen bağımsızdır",
      "Akış şeması algoritmanın işlem ve karar akışını görsel sembollerle gösterme yollarından biridir",
      "Akış şeması yalnızca resim çizmek içindir",
      "Algoritma yalnızca akış şeması çizildikten sonra düşünülebilir"
    ],
    "answer": 1,
    "explanation": "Akış şeması, algoritmanın adımlarını ve karar akışını görsel olarak temsil etmenin bir yoludur."
  },
  {
    "id": 20,
    "type": "multi",
    "q": "Tümevarım ve tümdengelim problem çözmede nasıl birlikte kullanılabilir? Birden fazla seç.",
    "options": [
      "Gözlemlerden bir hipotez veya örüntü geliştirilebilir",
      "Bulunan kural yeni bir özel duruma uygulanabilir",
      "Tümevarımsal sonuç her zaman kesin gerçek kabul edilmelidir",
      "Yeni gözlemler tümevarımsal hipotezi güçlendirebilir veya değiştirebilir"
    ],
    "answers": [
      0,
      1,
      3
    ],
    "explanation": "Tümevarım örüntü ve hipotez geliştirmeye, tümdengelim ise açık kurallardan belirli sonuçlar çıkarmaya yardımcı olur."
  },
  {
    "id": 21,
    "type": "single",
    "q": "Bir problemi çözerken önce çözüm yolunu seçip sonra adımları sıraya koymamızın nedeni nedir?",
    "options": [
      "Algoritmanın çözüm fikrini uygulanabilir bir sıraya dönüştürmesi",
      "Problemi daha belirsiz yapmak",
      "Girdileri yok etmek",
      "Akış şemasını gereksiz hale getirmek"
    ],
    "answer": 0,
    "explanation": "Algoritma, seçilen çözüm yolunu bir başkasının veya bilgisayarın izleyebileceği açık adımlara dönüştürür."
  },
  {
    "id": 22,
    "type": "multi",
    "q": "Aşağıdakilerden hangileri problem çözmede hata kaynağı olabilir? Birden fazla seç.",
    "options": [
      "Problemi yanlış anlamak",
      "Gereksiz bilgileri çözümde kullanmak",
      "Yanlış genel kural uygulamak",
      "Çözümü farklı örneklerle doğrulamak"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "İlk üçü hata kaynağıdır; doğrulama ise hataları bulmaya yardımcı olur."
  },
  {
    "id": 23,
    "type": "single",
    "q": "Bir problemi 'verilenler, istenenler ve kurallar' şeklinde ayırmak en çok hangi aşamaya yardımcı olur?",
    "options": [
      "Problemi yazma ve anlama",
      "Ekran tasarımı",
      "Dosya adı verme",
      "Renk seçme"
    ],
    "answer": 0,
    "explanation": "Bu ayırım problem tanımını ve problem anlayışını açık hale getirir."
  },
  {
    "id": 24,
    "type": "multi",
    "q": "Bu dersin sonunda aşağıdaki bağlantılardan hangilerini açıklayabiliyor olmalısın? Birden fazla seç.",
    "options": [
      "Problem çözme süreci uygun çözüm yolunu belirlemeye yardım eder",
      "Algoritma seçilen çözüm yolunu sıralı adımlara dönüştürür",
      "Akış şeması algoritmanın görsel gösterimlerinden biridir",
      "Programlama dili algoritmayı bilgisayarda uygulanabilir hale getirir"
    ],
    "answers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Dördü de Programlamaya Giriş ders dizisinin birbirine bağlı aşamalarıdır."
  }
];

const state = {
  answered: {},
  score: 0,
  wrong: 0
};

const container = document.getElementById("quizContainer");

function renderQuestions() {
  container.innerHTML = "";

  for (const q of questions) {
    const card = document.createElement("section");
    card.className = "question-card";
    card.dataset.questionId = q.id;

    const head = document.createElement("div");
    head.className = "question-head";

    const headLeft = document.createElement("div");

    const number = document.createElement("span");
    number.className = "question-number";
    number.textContent = `Soru ${String(q.id).padStart(2, "0")} / 24`;

    const title = document.createElement("h3");
    title.textContent = q.q;

    headLeft.append(number, title);
    head.appendChild(headLeft);
    card.appendChild(head);

    if (q.type === "single") {
      renderSingle(q, card);
    } else if (q.type === "multi") {
      renderMulti(q, card);
    } else if (q.type === "order") {
      renderOrder(q, card);
    }

    const feedback = document.createElement("div");
    feedback.className = "feedback-box";
    feedback.id = `feedback-${q.id}`;
    card.appendChild(feedback);

    container.appendChild(card);
  }
}

function renderSingle(q, card) {
  const list = document.createElement("div");
  list.className = "option-list";

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.textContent = option;
    button.dataset.index = index;

    button.addEventListener("click", () => {
      if (state.answered[q.id] !== undefined) return;

      list.querySelectorAll(".option-button").forEach(
        el => el.classList.remove("selected")
      );

      button.classList.add("selected");
    });

    list.appendChild(button);
  });

  card.appendChild(list);

  const actions = document.createElement("div");
  actions.className = "question-actions";

  const check = document.createElement("button");
  check.className = "primary-button";
  check.type = "button";
  check.textContent = "Cevabı Kontrol Et";
  check.addEventListener("click", () => checkSingle(q, list));

  actions.appendChild(check);
  card.appendChild(actions);
}

function renderMulti(q, card) {
  const list = document.createElement("div");
  list.className = "option-list";

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "multi-option";
    button.textContent = option;
    button.dataset.index = index;

    button.addEventListener("click", () => {
      if (state.answered[q.id] !== undefined) return;
      button.classList.toggle("selected");
    });

    list.appendChild(button);
  });

  card.appendChild(list);

  const actions = document.createElement("div");
  actions.className = "question-actions";

  const check = document.createElement("button");
  check.className = "primary-button";
  check.type = "button";
  check.textContent = "Seçimleri Kontrol Et";
  check.addEventListener("click", () => checkMulti(q, list));

  actions.appendChild(check);
  card.appendChild(actions);
}

function renderOrder(q, card) {
  const list = document.createElement("div");
  list.className = "order-list";

  q.items.forEach(item => {
    const row = document.createElement("div");
    row.className = "order-item";
    row.dataset.itemId = item.id;

    const text = document.createElement("span");
    text.textContent = item.text;

    const actions = document.createElement("div");
    actions.className = "order-actions";

    const up = document.createElement("button");
    up.type = "button";
    up.textContent = "Yukarı";

    const down = document.createElement("button");
    down.type = "button";
    down.textContent = "Aşağı";

    up.addEventListener("click", () => {
      if (state.answered[q.id] !== undefined) return;
      const previous = row.previousElementSibling;
      if (previous) list.insertBefore(row, previous);
    });

    down.addEventListener("click", () => {
      if (state.answered[q.id] !== undefined) return;
      const next = row.nextElementSibling;
      if (next) list.insertBefore(next, row);
    });

    actions.append(up, down);
    row.append(text, actions);
    list.appendChild(row);
  });

  card.appendChild(list);

  const actions = document.createElement("div");
  actions.className = "question-actions";

  const check = document.createElement("button");
  check.className = "primary-button";
  check.type = "button";
  check.textContent = "Sırayı Kontrol Et";
  check.addEventListener("click", () => checkOrder(q, list));

  actions.appendChild(check);
  card.appendChild(actions);
}

function checkSingle(q, list) {
  if (state.answered[q.id] !== undefined) return;

  const selected = list.querySelector(".option-button.selected");

  if (!selected) {
    showTemporaryMessage(q.id, "Önce bir seçenek seçmelisin.");
    return;
  }

  const selectedIndex = Number(selected.dataset.index);
  finishQuestion(q, selectedIndex === q.answer);
}

function checkMulti(q, list) {
  if (state.answered[q.id] !== undefined) return;

  const selected = [...list.querySelectorAll(".multi-option.selected")]
    .map(el => Number(el.dataset.index))
    .sort((a,b) => a-b);

  if (selected.length === 0) {
    showTemporaryMessage(q.id, "En az bir seçenek seçmelisin.");
    return;
  }

  const expected = [...q.answers].sort((a,b) => a-b);

  const correct =
    selected.length === expected.length &&
    selected.every((value, index) => value === expected[index]);

  finishQuestion(q, correct);
}

function checkOrder(q, list) {
  if (state.answered[q.id] !== undefined) return;

  const current = [...list.querySelectorAll(".order-item")]
    .map(el => el.dataset.itemId);

  const correct =
    current.length === q.correct.length &&
    current.every((value, index) => value === q.correct[index]);

  finishQuestion(q, correct);
}

function finishQuestion(q, correct) {
  state.answered[q.id] = correct;

  if (correct) {
    state.score += 1;
  } else {
    state.wrong += 1;
  }

  const feedback = document.getElementById(`feedback-${q.id}`);
  feedback.className = `feedback-box show ${correct ? "correct" : "wrong"}`;
  feedback.textContent =
    `${correct ? "Doğru. " : "Yanlış. "}${q.explanation}`;

  const card = document.querySelector(`[data-question-id="${q.id}"]`);

  card.querySelectorAll("button").forEach(button => {
    button.disabled = true;
  });

  updateSummary();
}

function showTemporaryMessage(id, message) {
  const feedback = document.getElementById(`feedback-${id}`);
  feedback.className = "feedback-box show wrong";
  feedback.textContent = message;

  window.setTimeout(() => {
    if (state.answered[id] === undefined) {
      feedback.className = "feedback-box";
      feedback.textContent = "";
    }
  }, 1800);
}

function updateSummary() {
  const answeredCount = Object.keys(state.answered).length;
  const percent = (answeredCount / questions.length) * 100;

  document.getElementById("progressText").textContent =
    `${answeredCount} / ${questions.length} soru cevaplandı`;

  document.getElementById("scoreText").textContent = state.score;
  document.getElementById("wrongText").textContent = state.wrong;
  document.getElementById("progressBar").style.width = `${percent}%`;

  if (answeredCount === questions.length) {
    const ratio = state.score / questions.length;
    let message;

    if (ratio >= 0.85) {
      message =
        `Tebrikler. ${state.score} / ${questions.length} doğru. ` +
        "Problem yazma, anlama, parçalama, tümevarım, tümdengelim ve doğrulama konularını güçlü biçimde kavradın.";
    } else if (ratio >= 0.65) {
      message =
        `${state.score} / ${questions.length} doğru. ` +
        "Temel kavramların iyi durumda. Yanlış soruların açıklamalarını tekrar incele.";
    } else {
      message =
        `${state.score} / ${questions.length} doğru. ` +
        "Konu anlatımına dönerek özellikle problemi anlama, tümevarım, tümdengelim ve sınır değer konularını tekrar et.";
    }

    document.getElementById("finalMessage").textContent = message;
  }
}

document.getElementById("resetAllBtn").addEventListener("click", () => {
  if (!window.confirm("Bütün cevapları ve puanı sıfırlamak istiyor musun?")) {
    return;
  }

  state.answered = {};
  state.score = 0;
  state.wrong = 0;

  renderQuestions();
  updateSummary();

  document.getElementById("finalMessage").textContent =
    "Bütün soruları tamamladığında burada genel değerlendirme görünecek.";

  window.scrollTo({top: 0, behavior: "smooth"});
});

renderQuestions();
updateSummary();
