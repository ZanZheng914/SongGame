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
    },3000);
}

$(document).ready(function(){
    $("#selectable >div").click(function(){
        $("#selectable>div").removeClass("selected");
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
    title: '點擊上方貓貓播放背景音樂',
    customClass:{
        popup:'mypopup',
        title:'mypopuptitle'
    },
    position: 'top-end',
    showConfirmButton: false,
    timer: 4500
  })