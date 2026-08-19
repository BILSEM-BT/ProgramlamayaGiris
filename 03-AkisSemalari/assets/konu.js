document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("traceBtn");
  const input = document.getElementById("traceN");
  const output = document.getElementById("traceOutput");
  if (!btn || !input || !output) return;

  btn.addEventListener("click", () => {
    const n = Number(input.value);
    if (!Number.isInteger(n) || n < 1 || n > 20) {
      output.textContent = "1 ile 20 arasında bir tamsayı gir.";
      return;
    }

    let sayac = 1;
    const lines = ["A1 Başla", `A2 N = ${n}`, "A3 sayac = 1"];
    while (true) {
      lines.push(`A4 sayac > N ?  ${sayac} > ${n} → ${sayac > n ? "Evet" : "Hayır"}`);
      if (sayac > n) {
        lines.push("A7 Bitir");
        break;
      }
      lines.push(`A5 ekrana yaz: ${sayac}`);
      sayac += 1;
      lines.push(`A6 sayac = ${sayac}; A4'e dön`);
    }
    output.textContent = lines.join("\n");
  });
});
