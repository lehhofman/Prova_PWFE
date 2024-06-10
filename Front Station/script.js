function loginWithGitHun() {
    window.location.href = 'http://github.com/login/oauth/authorize?client_id=Ov23likKwPcqERFMIChX&scope=user';
}

const urlParams = new URLSearchParams(window.location.search);
const error = urlParams.get('error');
if (error === 'access_denied') {
    window.location.href = './src/html/home.html';
}