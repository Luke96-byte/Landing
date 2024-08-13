  
$(function(){
   
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    console.log(e)
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
    })

gsap.ticker.lagSmoothing(0)
   //헤더 시계
   function updateClock() {
    const clockElement = document.querySelector('.clock');
    
    const timezoneOffset = parseInt(clockElement.getAttribute('timezone'), 10);
    
    const now = new Date();
    
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000); //
    const localTime = new Date(utc + (3600000 * timezoneOffset));
    
    const hours = localTime.getHours().toString().padStart(2, '0');
    const minutes = localTime.getMinutes().toString().padStart(2, '0');
    const seconds = localTime.getSeconds().toString().padStart(2, '0');
    
    clockElement.innerHTML = `${hours}<span>:</span>${minutes}<span>:</span>${seconds}`;
}

setInterval(updateClock, 1000);

updateClock();

//스크롤 트리거
const IntroWord = new SplitType('.sc-intro .word', { types: 'words, chars', });

const EtcWord = new SplitType('.sc-etc .word', { types: 'words, chars', });



//인트로
Intro = gsap.timeline({
    duration:0.5

})
Intro.from(".sc-intro .char",{yPercent:150,stagger:0.01},'a')
Intro.from(".sc-intro .right",{opacity:0 },'a')

//프로젝트
$('.sc-projects .pro-item').each(function() {
    projects = gsap.timeline({
        scrollTrigger: {
            trigger: $(this), // 기준지점
            start: "0% 100%", // [트리거시작점] [윈도우 시작 지점]
            end: "100% 0%",   // [트리거끝지점] [윈도우 끝 지점]
            // markers: true,
            scrub: 1,
        }
    });
    projects.to($(this).find('img'), { y: -100,ease:"none" });
});

//ETC
etc = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-etc",//기준지점
        start:"0% 60%", //[트리거시작점 ][윈도우 시작 지점]
        end:"0% 10%",//[트리거끝지점 ][윈도우 끝 지점]
        // markers:true,
        duration:2,
        scrub:1
    }
})

etc.from(".sc-etc .right .word .char",{
    yPercent:150
})
etc.from(".sc-etc .left",{
    opacity:0,
})

//프로젝트


//마우스 커서
$(document).mousemove(function(e){
    xVal = e.clientX
    yVal = e.clientY

    gsap.to('.cursor',{
        x:xVal,
        y:yVal,
        duration: 0.1,
        ease: "power2.out"
    })
})

//

// gsap.to('.cursor span', {
//     x: -100,
//     duration: 5,
//     ease: 'linear',
//     repeat: -1
// });




})
