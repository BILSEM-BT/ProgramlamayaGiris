(function(){
  const questions = window.QUIZ_QUESTIONS || [];
  const quizTitle = window.QUIZ_TITLE || "Uygulama";
  const root = document.getElementById("quizContainer");
  const state = { answered:{}, score:0, wrong:0 };

  function render(){
    root.innerHTML = "";
    questions.forEach((q,i)=>{
      const card=document.createElement("section");
      card.className="question-card";card.dataset.questionId=q.id;
      const no=document.createElement("span");no.className="question-number";no.textContent=`Soru ${String(i+1).padStart(2,"0")} / ${questions.length}`;
      const h=document.createElement("h3");h.textContent=q.q;
      card.append(no,h);
      if(q.code){
        const pre=document.createElement("div");pre.className="pseudo";pre.textContent=q.code;card.appendChild(pre);
      }
      if(q.type==="single") single(q,card);
      if(q.type==="multi") multi(q,card);
      if(q.type==="order") order(q,card);
      const fb=document.createElement("div");fb.id=`feedback-${q.id}`;fb.className="feedback-box";card.appendChild(fb);
      root.appendChild(card);
    });
    update();
  }

  function action(card,label,fn){
    const a=document.createElement("div");a.className="question-actions";
    const b=document.createElement("button");b.type="button";b.className="primary-button";b.textContent=label;b.addEventListener("click",fn);
    a.appendChild(b);card.appendChild(a);
  }

  function single(q,card){
    const list=document.createElement("div");list.className="option-list";
    q.options.forEach((o,idx)=>{
      const b=document.createElement("button");b.type="button";b.className="option-button";b.dataset.index=idx;b.textContent=o;
      b.addEventListener("click",()=>{
        if(state.answered[q.id]!==undefined)return;
        list.querySelectorAll(".option-button").forEach(x=>x.classList.remove("selected"));
        b.classList.add("selected");
      });list.appendChild(b);
    });
    card.appendChild(list);
    action(card,"Cevabı Kontrol Et",()=>{
      const s=list.querySelector(".selected");
      if(!s)return temp(q.id,"Önce bir seçenek seç.");
      finish(q,Number(s.dataset.index)===q.answer);
    });
  }

  function multi(q,card){
    const list=document.createElement("div");list.className="option-list";
    q.options.forEach((o,idx)=>{
      const b=document.createElement("button");b.type="button";b.className="multi-option";b.dataset.index=idx;b.textContent=o;
      b.addEventListener("click",()=>{if(state.answered[q.id]===undefined)b.classList.toggle("selected")});
      list.appendChild(b);
    });
    card.appendChild(list);
    action(card,"Seçimleri Kontrol Et",()=>{
      const got=[...list.querySelectorAll(".selected")].map(x=>Number(x.dataset.index)).sort((a,b)=>a-b);
      if(!got.length)return temp(q.id,"En az bir seçenek seç.");
      const exp=[...q.answers].sort((a,b)=>a-b);
      finish(q,got.length===exp.length&&got.every((v,i)=>v===exp[i]));
    });
  }

  function order(q,card){
    const list=document.createElement("div");list.className="order-list";
    q.items.forEach(item=>{
      const row=document.createElement("div");row.className="order-item";row.dataset.itemId=item.id;
      const s=document.createElement("span");s.textContent=item.text;
      const aa=document.createElement("div");aa.className="order-actions";
      const up=document.createElement("button");up.type="button";up.textContent="Yukarı";
      const down=document.createElement("button");down.type="button";down.textContent="Aşağı";
      up.addEventListener("click",()=>{if(state.answered[q.id]!==undefined)return;const p=row.previousElementSibling;if(p)list.insertBefore(row,p)});
      down.addEventListener("click",()=>{if(state.answered[q.id]!==undefined)return;const n=row.nextElementSibling;if(n)list.insertBefore(n,row)});
      aa.append(up,down);row.append(s,aa);list.appendChild(row);
    });
    card.appendChild(list);
    action(card,"Sırayı Kontrol Et",()=>{
      const got=[...list.querySelectorAll(".order-item")].map(x=>x.dataset.itemId);
      finish(q,got.length===q.correct.length&&got.every((v,i)=>v===q.correct[i]));
    });
  }

  function finish(q,ok){
    if(state.answered[q.id]!==undefined)return;
    state.answered[q.id]=ok;if(ok)state.score++;else state.wrong++;
    const fb=document.getElementById(`feedback-${q.id}`);
    fb.className=`feedback-box show ${ok?"correct":"wrong"}`;
    fb.textContent=`${ok?"Doğru. ":"Yanlış. "}${q.explanation}`;
    document.querySelector(`[data-question-id="${q.id}"]`).querySelectorAll("button").forEach(x=>x.disabled=true);
    update();
  }

  function temp(id,msg){
    const fb=document.getElementById(`feedback-${id}`);fb.className="feedback-box show wrong";fb.textContent=msg;
    setTimeout(()=>{if(state.answered[id]===undefined){fb.className="feedback-box";fb.textContent=""}},1400);
  }

  function update(){
    const done=Object.keys(state.answered).length,total=questions.length;
    document.getElementById("progressText").textContent=`${done} / ${total} soru cevaplandı`;
    document.getElementById("scoreText").textContent=state.score;
    document.getElementById("wrongText").textContent=state.wrong;
    document.getElementById("progressBar").style.width=`${total?done/total*100:0}%`;
    if(done===total){
      const ratio=state.score/total;
      document.getElementById("finalMessage").textContent=
        ratio>=.85?`${quizTitle}: ${state.score}/${total} doğru. Konuyu güçlü biçimde kavradın.`:
        ratio>=.65?`${quizTitle}: ${state.score}/${total} doğru. Yanlışların açıklamalarını yeniden incele.`:
        `${quizTitle}: ${state.score}/${total} doğru. Konu anlatımındaki örnekleri tekrar incele.`;
    }
  }

  document.getElementById("resetAllBtn").addEventListener("click",()=>{
    if(!confirm("Bu sayfadaki cevapları sıfırlamak istiyor musun?"))return;
    state.answered={};state.score=0;state.wrong=0;
    document.getElementById("finalMessage").textContent="Bütün soruları tamamladığında genel değerlendirme burada görünecek.";
    render();window.scrollTo({top:0,behavior:"smooth"});
  });

  render();
})();
