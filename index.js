function startGame(){
    document.getElementById("playlogo").style.display='none';
    document.getElementById("questions").style.display = 'block';
    var backgorundMusic =document.getElementById("backgroundMP3");
    backgorundMusic.pause();
    var cat1a = new Audio("./audios/cat1a.mp3");
    cat1a.play();
    
    setTimeout(function(){
        var q1song = new Audio("./audios/烏梅子醬.MP3");
        q1song.play();
    },2000);
}

$(document).ready(function(){
    $(".selectable >div").click(function(){
        console.log("Click event fired for .selectable >div");
        $(".selectable>div").removeClass("selected");
        $(this).addClass("selected");
    });
});

function showq1btn(){
    var q1btn = document.getElementById('q1btn');
    q1btn.style.display= 'flex';
}
function backgroundMusic(){
    var backgroundMusic = document.getElementById("backgroundMP3");
    backgroundMusic.play();
}
Swal.fire({
    title: '點上方👆貓貓播放背景音樂',
    customClass:{
        popup:'mypopup',
        title:'mypopuptitle'
    },
    position: 'top-end',
    showConfirmButton: false,
    timer: 4500
  })

document.addEventListener('DOMContentLoaded',function(){
    var lrc1Elements = document.querySelectorAll('.lrc1section .lrc1 li');
    lrc1Elements.forEach(function(element){
        element.addEventListener('animationend',function(){
            var q1sections = document.querySelectorAll('.q1section');
            q1sections.forEach(function(q1section){
                q1section.style.display = 'flex';
            })        
        })
    });   
})

function q1answer(){
    var q1answer = new Audio("./audios/烏梅子醬2.MP3")
    q1answer.play();
    var lrc11section = document.getElementsByClassName('lrc11section')[0];
    lrc11section.style.display ="block";
    var lrc1section = document.getElementsByClassName('lrc1section')[0];
    lrc1section.style.display = "none" ;
    
    var selectedAnswer1 = document.querySelector('.q1section.selected').id;
    var correctAnswer1 = 'q1D';
    if (selectedAnswer1 === correctAnswer1){
        Swal.fire({
            icon: 'success',
            title:'正確答案！你真聰明',
            showConfirmButton: false,
            timer: 2500,
            position:top,
        })
    } else{
        Swal.fire({
            icon: 'error',
            title:'加油加油',
            showConfirmButton: false,
            timer: 2500,
            position:top,
        })
    };
    var q1btn = document.getElementsByClassName('q1btn')[0];
    q1btn.style.display="none";
}

document.addEventListener('DOMContentLoaded',function(){
    var lrc11Elements = document.querySelectorAll('.lrc11section .lrc11 li');
    lrc11Elements.forEach(function(element){
        element.addEventListener('animationend',function(){
            Swal.fire({
                showConfirmButton: true,
                confirmButtonText: '下一題',
            }).then((result)=>{
                if(result.isConfirmed){
                    var question2 = document.querySelector('.question2');
                    question2.style.display = 'block';
                    var question1 = document.getElementsByClassName('question1')[0];
                    question1.style.display= 'none';

                    setTimeout(function(){
                        var q2song = new Audio("./audios/光年之外1.MP3");
                        q2song.play();
                    },2000);
                }
            })
            })        
        })
    });
    // 第二題   
document.addEventListener('DOMContentLoaded',function(){
    var lrc2Elements = document.querySelectorAll('.lrc2section .lrc2 li');
    lrc2Elements.forEach(function(element){
        element.addEventListener('animationend',function(){
            var q2sections = document.querySelectorAll('.q2section');
            q2sections.forEach(function(q2section){
                q2section.style.display = 'flex';
            })        
        })
    });   
})

function showq2btn(){
    var q2btn = document.getElementById('q2btn');
    q2btn.style.display= 'flex';
}
function q2answer(){
    var q2answer = new Audio("./audios/光年之外2.MP3")
    q2answer.play();
    var lrc21section = document.getElementsByClassName('lrc21section')[0];
    lrc21section.style.display ="block";
    var lrc2section = document.getElementsByClassName('lrc2section')[0];
    lrc2section.style.display = "none" ;
    
    var selectedAnswer2 = document.querySelector('.q2section.selected').id;
    var correctAnswer2 = 'q2B';
    if (selectedAnswer2 === correctAnswer2){
        Swal.fire({
            icon: 'success',
            title:'正確答案！你真聰明',
            showConfirmButton: false,
            timer: 2500,
            position:top,
        })
    } else{
        Swal.fire({
            icon: 'error',
            title:'加油加油',
            showConfirmButton: false,
            timer: 2500,
            position:top,

        })
    };
    var q2btn = document.getElementsByClassName('q2btn')[0];
    q2btn.style.display="none";
}

document.addEventListener('DOMContentLoaded',function(){
    var lrc21Elements = document.querySelectorAll('.lrc21section .lrc21 li');
    lrc21Elements.forEach(function(element){
        element.addEventListener('animationend',function(){
            Swal.fire({
                showConfirmButton: true,
                confirmButtonText: '下一題',
            }).then((result)=>{
                if(result.isConfirmed){
                    var question3 = document.querySelector('.question3');
                    question3.style.display = 'flex';
                    var question2 = document.getElementsByClassName('question2')[0];
                    question2.style.display= 'none';

                    // setTimeout(function(){
                    //     var q2song = new Audio("./audios/光年之外1.MP3");
                    //     q2song.play();
                    // },2000);
                }
            })
            })        
        })
    });   
    $(document).ready(function(){
        $("#selectable2 >div").click(function(){
            $("#selectable2>div").removeClass("selected");
            $(this).addClass("selected");
            $(this).css("background-color", "#FFB86F")
        });
    });