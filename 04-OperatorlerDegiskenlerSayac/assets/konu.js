document.addEventListener("DOMContentLoaded", () => {
  const arithBtn = document.getElementById("arithBtn");
  if (arithBtn) {
    arithBtn.addEventListener("click", () => {
      const a = Number(document.getElementById("arithA").value);
      const b = Number(document.getElementById("arithB").value);
      const op = document.getElementById("arithOp").value;
      const out = document.getElementById("arithResult");
      if (Number.isNaN(a) || Number.isNaN(b)) {
        out.textContent = "Geçerli sayılar gir.";
        return;
      }
      let result;
      if ((op === "/" || op === "//" || op === "%") && b === 0) {
        out.textContent = "0'a bölme tanımsızdır.";
        return;
      }
      switch(op) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = a / b; break;
        case "//": result = Math.floor(a / b); break;
        case "%": result = ((a % b) + b) % b; break;
        case "**": result = a ** b; break;
      }
      out.textContent = `${a} ${op} ${b} = ${result}`;
    });
  }

  const logicBtn = document.getElementById("logicBtn");
  if (logicBtn) {
    logicBtn.addEventListener("click", () => {
      const a = document.getElementById("logicA").value === "true";
      const b = document.getElementById("logicB").value === "true";
      const op = document.getElementById("logicOp").value;
      const result = op === "and" ? (a && b) : (a || b);
      document.getElementById("logicResult").textContent =
        `${a ? "True" : "False"} ${op} ${b ? "True" : "False"} = ${result ? "True" : "False"}`;
    });
  }

  const keywords = new Set([
    "False","None","True","and","as","assert","async","await","break","class","continue",
    "def","del","elif","else","except","finally","for","from","global","if","import","in",
    "is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"
  ]);

  const nameBtn = document.getElementById("nameBtn");
  if (nameBtn) {
    nameBtn.addEventListener("click", () => {
      const name = document.getElementById("nameInput").value;
      const result = document.getElementById("nameResult");
      result.innerHTML = "";
      const checks = [
        ["Boş değil", name.length > 0],
        ["İlk karakter rakam değil", !/^[0-9]/.test(name)],
        ["Ders standardına göre yalnızca ASCII harf, rakam ve _ içeriyor", /^[A-Za-z_][A-Za-z0-9_]*$/.test(name)],
        ["Python anahtar sözcüğü değil", !keywords.has(name)],
        ["snake_case için küçük harf tercihine uyuyor", name === name.toLowerCase()]
      ];
      checks.forEach(([label, ok]) => {
        const span = document.createElement("span");
        span.className = ok ? "ok" : "bad";
        span.textContent = `${ok ? "Uygun" : "Kontrol et"}: ${label}`;
        result.appendChild(span);
      });
    });
  }

  const countBtn = document.getElementById("countBtn");
  if (countBtn) {
    countBtn.addEventListener("click", () => {
      const start = Number(document.getElementById("countStart").value);
      const end = Number(document.getElementById("countEnd").value);
      const step = Number(document.getElementById("countStep").value);
      const inclusive = document.getElementById("countMode").value === "inclusive";
      const out = document.getElementById("countResult");
      if (![start,end,step].every(Number.isFinite) || step === 0) {
        out.textContent = "Başlangıç, bitiş ve sıfırdan farklı bir adım değeri gir.";
        return;
      }
      const values = [];
      let x = start;
      let guard = 0;
      const test = step > 0
        ? (v => inclusive ? v <= end : v < end)
        : (v => inclusive ? v >= end : v > end);
      while (test(x) && guard < 200) {
        values.push(x);
        x += step;
        guard++;
      }
      if (guard >= 200) {
        out.textContent = "Çok fazla adım üretildi. Daha küçük bir aralık dene.";
        return;
      }
      out.textContent = values.length ? values.join(", ") : "Bu başlangıç, bitiş ve adım değerleriyle sayaç hiç çalışmaz.";
    });
  }
});
