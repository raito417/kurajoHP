function omikuji() {
    var result;
    var arr = [
        "最高",
        "少しいい",
        "少しいい",
        "少しいい",
        "少しいい",
        "まあまあ",
        "まあまあ",
        "まあまあ",
        "少し悪い",
        "最悪"
    ];
    var k = Math.floor(Math.random() * arr.length);
    if (k == 1) {
        var n = Math.floor(Math.random() * 100);
        if (n == 1) {
            result = "クラ女へようこそですわ。今日の運勢は「ここ数年で最高」ですわ。adminの加護があらんことを。";
            arr[k] = "ここ数年で最高"
        }
    } else {
        result = "クラ女へようこそですわ。今日の運勢は「" + arr[k] + "」ですわ。結果をmastodonで共有しますか？";
    };
    var pao = confirm(result);
    if (pao == true) {
        window.open("web+mastodon://share?text=クラ女おみくじの結果は+「" + arr[k] + "」でした。+https://raito417.github.io/kurajoHP/")
    } else {
        alert("共有してくれないの...？");
    };
}

function kinshi() {
    alert("右クリックは禁止ですわ");
    return false;
}

$(function movebtn() {
    var top = 40;
    var left = 40;
    var ugoki = 10;
    $('#welcomelink').mouseover(function() {
        $(this).animate({ 'top': top + ugoki + '%' }, 1000);
        $(this).animate({ 'top': top + ugoki + '%', 'left': left }, 1000);
        $(this).animate({ 'top': top + '%', 'left': left + ugoki + '%' }, 1000);
        $(this).animate({ 'top': top + '%', 'left': left + '%' }, 1000);
    });
});

function adblock() {
    //document.getElementById('side').innerHTML = ('<div id="side_l"><iframe frameborder="0" height="480" width="320" src="https://pussinboots.thebase.in/items/8343243/widget/large" ></iframe></div><div id="side_r"><iframe frameborder="0" height="480" width="320" src="https://pussinboots.thebase.in/items/8343243/widget/large" ></iframe></div>');

    if (ad == false) {
        document.getElementById('side').innerHTML = ('<div id=\"side_l\"><img src=\"picture/cloud.png\" alt=\".cloud_logo\"></div><div id=\"side_r\"><img src=\"picture/cloud.png\" alt=\".cloud_logo\"></div>');
        var ad = true;
    } else {
        document.getElementById('side').innerHTML = ('<div id=\"side_l\"><iframe frameborder=\"0\" height=\"480\" width=\"320\" src=\"https://pussinboots.thebase.in/items/8343243/widget/large\" ></iframe></div><div id=\"side_r\"><iframe frameborder=\"0\" height=\"480\" width=\"320\" src=\"https://pussinboots.thebase.in/items/8343243/widget/large\" ></iframe></div>');
        var ad = false;
    }
}