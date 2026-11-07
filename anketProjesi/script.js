const evetCevaplar = ['E', 'E', 'E', 'E'];
const form = document.querySelector('.form-radio');
const yuzde = document.querySelector('.sonucDiv');
const yuzdeSpan = document.querySelector('.yuzdeSpan');
const buton =document.querySelector('.buton');


form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userCevaplar = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userCevaplar.forEach((cevap, index) => {
        if (cevap === evetCevaplar[index]) {
            score += 25;
        }
    })
    // console.log(score);
    yuzde.style.display = 'block';
    // yuzdeSpan.textContent= `%${score}`;
    buton.value ='Gönderildi';
    
    let puan=0;
    const bastir = setInterval(()=>{
        yuzdeSpan.textContent= `%${puan}`;
        if(puan == score){
            clearInterval(bastir);
        }
        else{
            puan++;
        }
    }, 10);
});


