document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("runCompare");
  const output = document.getElementById("compareOutput");
  const inputA = document.getElementById("demoA");
  const inputB = document.getElementById("demoB");

  if (!button || !output || !inputA || !inputB) return;

  button.addEventListener("click", () => {
    const a = Number(inputA.value);
    const b = Number(inputB.value);

    if (Number.isNaN(a) || Number.isNaN(b)) {
      output.className = "demo-output bad";
      output.textContent = "Her iki alana da geçerli bir sayı gir.";
      return;
    }

    let steps = [
      `1. Birinci sayı alındı: ${a}`,
      `2. İkinci sayı alındı: ${b}`,
      "3. İki sayı karşılaştırıldı."
    ];

    if (a > b) {
      steps.push(`4. ${a} > ${b} olduğu için büyük sayı ${a}.`);
    } else if (b > a) {
      steps.push(`4. ${b} > ${a} olduğu için büyük sayı ${b}.`);
    } else {
      steps.push(`4. İki sayı eşit: ${a}.`);
    }

    output.className = "demo-output good";
    output.innerHTML = steps.join("<br>");
  });
});
