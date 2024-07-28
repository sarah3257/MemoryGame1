var cnt = 0;
var prev = "";
var cur = "";
var sum = 40;
var find = 0;
var j = 0;
var makom  = "";
var sc = "";
arr1 = new Array(1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10);

var len = 20;
function start() {
    for (var i = 0; i < 20; i++) {//צביעת 40 נקודות
        sc = document.createElement("div");
        sc.classList.add("s") ;
        document.getElementById("score").appendChild(sc);
    }
    while (len > 0) {
        makom = Math.ceil((Math.random() * (len - 1)));
        var x = document.createElement("div");
        x.classList = "cards";
        x.setAttribute("data-game", "set" + arr1[makom]);
        x.setAttribute("data-find", "f");
        document.getElementsByClassName("warpper")[0].appendChild(x);
        arr1[makom] = arr1[len - 1];
        len--;
    } 
}

        function check() {
            if (event.target == event.currentTarget)
                return;
            if (cnt == 2 || event.target.getAttribute("data-find") == "t")
                return;
            cur = event.target;
            if (cur == prev)
                return
            cur.classList.add(cur.getAttribute("data-game"))
            if (cnt == 0) {
                prev = cur;
                cnt = 1;
            }
            else {
                cnt = 2;
                setTimeout(close, 1000);
            }
        }
    function close() {
        if (prev.getAttribute("data-game") == cur.getAttribute("data-game")) {
            sum += 6;
            find += 1;
            for (var i = 0; i < 3; i++) {
                sc = document.createElement("div");
                sc.classList.add("s");
                document.getElementById("score").appendChild(sc);
            }
            if (sum > 10 && sum < 17) {
                for (var i = 0; i < sum / 2; i++) {
                    document.getElementById("score").children[i].style.backgroundColor = "lawngreen";
                }
            }
            prev.style.opacity = "0.5";
            cur.style.opacity = "0.5";
            document.getElementById("sumS").innerHTML = "הניקוד שלך: " + sum;
            cur.setAttribute("data-find", 't');
            prev.setAttribute("data-find", 't');
            if (find == 10) {
                document.getElementsByClassName("finish")[0].style.display = "grid";
                document.getElementById("status").innerText = "הניקוד שלך: " + sum;;
            }

        } else {
            sum -= 2;
            if (sum == 0) {
                document.getElementsByClassName("finish")[0].style.display = "grid";
                document.getElementById("end1").style.display = "grid";
                document.getElementById("end").style.display = "none";
                document.getElementById("status").innerText = "game over ";
            }
            document.getElementById("sumS").innerHTML = "הניקוד שלך: " + sum;
            sc = document.getElementsByClassName("s")[0];
            document.getElementById("score").removeChild(sc);
            prev.classList.remove(prev.getAttribute("data-game"))
            cur.classList.remove(cur.getAttribute("data-game"))
        }
        if (sum <= 10) {
            for (var i = 0; i < sum / 2; i++) {
                document.getElementById("score").children[i].style.backgroundColor = "red";
            }
        }
        cnt = 0;
        prev = cur = null;
    }
    function end() {
        document.getElementById("end1").style.display = "grid";
        document.getElementById("end").style.display = "none";

}

