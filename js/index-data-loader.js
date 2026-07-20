function gotoLogin() {
    if (window.location.href.endsWith("index.html")) {
      window.location.href = window.location.href.replace("index", "login");
    } else {
      window.location.href += "login.html";
    }
}

document.addEventListener('DOMContentLoaded', () => {
  var raw_usr = localStorage.getItem("Aether-user");
  console.log(raw_usr);
  if (!raw_usr) {
    gotoLogin();
    return;
  }
  const user = JSON.parse(raw_usr);
  console.log(user);
  const now = Date.now();
  console.log(`Now: ${now}`);
  const timeout = 12 * 60 * 60 * 1000; // 12hrs timeout (times minutes, seconds, milliseconds)
  //const timeout = 60 * 1000; // 1min test timeout
  if (now - user["timestamp"] >= timeout) {
    localStorage.removeItem("Aether-user");
    gotoLogin();
    return;
  }
  //Data loading from server part
  // (this is a "demo" version of data loading which may change, but probably won't)
  window.fetch(`/API/${user["UUID"]}.json`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);//test thing
    });
});