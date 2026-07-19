function gotoLogin() {
    window.location.href = window.location.href.replace("index.html", "login.html");
}

document.addEventListener('DOMContentLoaded', () => {
  var raw_usr = localStorage.getItem("Aether-user");
  console.log(raw_usr);
  if (!raw_usr) {
    gotoLogin();
  }
  const user = JSON.parse(raw_usr);
  const now = Date.now();
  console.log(`Now: ${now}`);
  const timeout = 12 * 60 * 60 * 1000; // 12hrs timeout (times minutes, seconds, milliseconds)
  //const timeout = 60 * 1000; // 1min test timeout
  if (now - user["timestamp"] >= timeout) {
    gotoLogin();
  }
  //Data loading from server part
});