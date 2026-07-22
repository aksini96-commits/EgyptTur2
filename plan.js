const p=document.getElementById('plan');tripPlan.forEach(x=>{p.innerHTML+=`<h3>${x.date} ${x.title}</h3><p>${x.events.join('<br>')}</p>`})
