function executeEaster() {
    document.getElementById("headingLine").innerHTML = "<h2>Thank You for clicking!</h2>";
}
const yt = document.getElementById("YouTube");
const gt = document.getElementById("GitHub");

function openHome() {
    window.location = "index.html";
}

function openDownloads() {
    window.location = "downloads.html";
}

function openYT() {
    const tab = window.open("https://www.youtube.com/channel/UCseSzBOgrBQY06RNX-Qr2Vg", "_blank");
};

function openGitHub() {
    const tab = window.open("https://github.com/TechPlayz", "_blank");
};

function openCalcWebsite() {
    const tab = window.open("https://github.com/TechPlayz/calculator-command-line/releases", "_blank");
}