(function () {
  const questions = window.QUIZ_QUESTIONS || [];
  const pageTitle = window.QUIZ_TITLE || "Algoritma Uygulaması";
  const container = document.getElementById("quizContainer");

  const state = {
    answered: {},
    score: 0,
    wrong: 0
  };

  function render() {
    if (!container) return;
    container.innerHTML = "";

    questions.forEach((q, idx) => {
      const card = document.createElement("section");
      card.className = "question-card";
      card.dataset.questionId = q.id;

      const number = document.createElement("span");
      number.className = "question-number";
      number.textContent = `Soru ${String(idx + 1).padStart(2, "0")} / ${questions.length}`;

      const title = document.createElement("h3");
      title.textContent = q.q;

      card.append(number, title);

      if (q.type === "single") renderSingle(q, card);
      if (q.type === "multi") renderMulti(q, card);
      if (q.type === "order") renderOrder(q, card);
      if (q.type === "number") renderNumber(q, card);

      const feedback = document.createElement("div");
      feedback.className = "feedback-box";
      feedback.id = `feedback-${q.id}`;
      card.appendChild(feedback);

      container.appendChild(card);
    });

    updateSummary();
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
        list.querySelectorAll(".option-button").forEach(el => el.classList.remove("selected"));
        button.classList.add("selected");
      });

      list.appendChild(button);
    });

    card.appendChild(list);
    addCheckButton(card, "Cevabı Kontrol Et", () => {
      const selected = list.querySelector(".option-button.selected");
      if (!selected) return temporary(q.id, "Önce bir seçenek seç.");
      finish(q, Number(selected.dataset.index) === q.answer);
    });
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
    addCheckButton(card, "Seçimleri Kontrol Et", () => {
      const selected = [...list.querySelectorAll(".multi-option.selected")]
        .map(el => Number(el.dataset.index))
        .sort((a, b) => a - b);

      if (!selected.length) return temporary(q.id, "En az bir seçenek seç.");

      const expected = [...q.answers].sort((a, b) => a - b);
      const correct =
        selected.length === expected.length &&
        selected.every((value, index) => value === expected[index]);

      finish(q, correct);
    });
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
        const prev = row.previousElementSibling;
        if (prev) list.insertBefore(row, prev);
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
    addCheckButton(card, "Sırayı Kontrol Et", () => {
      const current = [...list.querySelectorAll(".order-item")].map(el => el.dataset.itemId);
      const correct =
        current.length === q.correct.length &&
        current.every((value, index) => value === q.correct[index]);

      finish(q, correct);
    });
  }

  function renderNumber(q, card) {
    const input = document.createElement("input");
    input.type = "number";
    input.className = "answer-input";
    input.placeholder = q.placeholder || "Cevabını yaz";
    card.appendChild(input);

    addCheckButton(card, "Cevabı Kontrol Et", () => {
      if (input.value.trim() === "") return temporary(q.id, "Önce bir cevap yaz.");
      const value = Number(input.value);
      const correct = Array.isArray(q.answers)
        ? q.answers.some(ans => Math.abs(value - ans) < 1e-9)
        : Math.abs(value - q.answer) < 1e-9;
      finish(q, correct);
    });
  }

  function addCheckButton(card, label, handler) {
    const actions = document.createElement("div");
    actions.className = "question-actions";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "primary-button";
    button.textContent = label;
    button.addEventListener("click", handler);

    actions.appendChild(button);
    card.appendChild(actions);
  }

  function finish(q, correct) {
    if (state.answered[q.id] !== undefined) return;

    state.answered[q.id] = correct;
    if (correct) state.score += 1;
    else state.wrong += 1;

    const feedback = document.getElementById(`feedback-${q.id}`);
    feedback.className = `feedback-box show ${correct ? "correct" : "wrong"}`;
    feedback.textContent = `${correct ? "Doğru. " : "Yanlış. "}${q.explanation}`;

    const card = document.querySelector(`[data-question-id="${q.id}"]`);
    card.querySelectorAll("button, input").forEach(el => el.disabled = true);

    updateSummary();
  }

  function temporary(id, message) {
    const feedback = document.getElementById(`feedback-${id}`);
    feedback.className = "feedback-box show wrong";
    feedback.textContent = message;

    setTimeout(() => {
      if (state.answered[id] === undefined) {
        feedback.className = "feedback-box";
        feedback.textContent = "";
      }
    }, 1600);
  }

  function updateSummary() {
    const answered = Object.keys(state.answered).length;
    const total = questions.length;
    const percent = total ? answered / total * 100 : 0;

    const progressText = document.getElementById("progressText");
    const scoreText = document.getElementById("scoreText");
    const wrongText = document.getElementById("wrongText");
    const progressBar = document.getElementById("progressBar");

    if (progressText) progressText.textContent = `${answered} / ${total} soru cevaplandı`;
    if (scoreText) scoreText.textContent = state.score;
    if (wrongText) wrongText.textContent = state.wrong;
    if (progressBar) progressBar.style.width = `${percent}%`;

    if (answered === total && total > 0) {
      const finalMessage = document.getElementById("finalMessage");
      const ratio = state.score / total;
      let message;

      if (ratio >= 0.85) {
        message = `${pageTitle}: ${state.score} / ${total} doğru. Konuyu güçlü biçimde kavradın.`;
      } else if (ratio >= 0.65) {
        message = `${pageTitle}: ${state.score} / ${total} doğru. Temel kavramlar iyi; yanlış soruların açıklamalarını tekrar incele.`;
      } else {
        message = `${pageTitle}: ${state.score} / ${total} doğru. Konu anlatımına dönerek örnekleri tekrar incelemen yararlı olur.`;
      }

      if (finalMessage) finalMessage.textContent = message;
    }
  }

  const reset = document.getElementById("resetAllBtn");
  if (reset) {
    reset.addEventListener("click", () => {
      if (!window.confirm("Bu sayfadaki bütün cevapları sıfırlamak istiyor musun?")) return;
      state.answered = {};
      state.score = 0;
      state.wrong = 0;
      render();
      const finalMessage = document.getElementById("finalMessage");
      if (finalMessage) finalMessage.textContent = "Bütün soruları tamamladığında genel değerlendirme burada görünecek.";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  render();
})();
