"use strict";

// longFormの高さを自動調整
let textarea = document.getElementById('msg');
let clientHeight = textarea.clientHeight;

textarea.addEventListener('input', ()=>{
    textarea.style.height = clientHeight + 'px';
    let scrollHeight = textarea.scrollHeight;
    textarea.style.height = scrollHeight + 'px';
});


// 動画が終わったらフェードをかけて表示
const targets = document.getElementsByClassName('fade');
document.getElementById('logoAnimation').addEventListener('ended', function() {

for(let i = targets.length; i--;){
    let observer = new IntersectionObserver((entries, observer) => {
        for(let j = entries.length; j--;){
        if (entries[j].isIntersecting) {
    entries[j].target.classList.add('active');
    observer.unobserve(entries[j].target);
    }
    }
    });
    observer.observe(targets[i]);
}
});