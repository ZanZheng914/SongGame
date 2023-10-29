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
        //加入滾動字幕啟動
        // q1song.addEventListener('playing',function(){
        //     startLyricsScroll;
        // });
    },3000);

}

$(document).ready(function(){
    $("#selectable >div").click(function(){
        $("#selectable>div").removeClass("selected");
        $(this).addClass("selected");
    });
});

//字幕動畫scroll 設定範圍
// function scrollLyrics(){
//     var lyricsbox = document.getElementById("lrc1");
//     var fadeline = document.querySelector('.fadeOutTopRight');
//     if (fadeline.offsetTop > lyricsbox.clientHeight * 2 /5){
//         lyricsbox.scrollTop = fadeline.offsetTop - lyricsbox.clientHeight * 2 / 5;
//     }
// }
// function startLyricsScroll(){
//     var lyricsItems = document.querySelectorAll('#lrc1 > li');
//     var currentLyricsIndex = 0 ;
//     var scrollInterval = setInterval(function(){
//         lyricsItems[currentLyricsIndex].classList.add('fadeOutTopRight');
//         scrollLyrics();
//         currentLyricsIndex++;
//         if(currentLyricsIndex >= lyricsItems.length){
//             clearInterval(scrollInterval);
//         }
//     },2500);
// }

function showq1btn(){
    var q1btn = document.getElementById('q1btn');
    q1btn.style.display= 'flex';
}