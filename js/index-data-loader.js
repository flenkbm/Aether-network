// var init
var userdata;
var userlogdata;
var appdata;

function gotoLogin() {
    if (window.location.href.endsWith("index.html")) {
      window.location.href = window.location.href.replace("index", "login");
    } else {
      window.location.href += "login.html";
    }
}

function loadUserData() {
  var raw_userlogdata = localStorage.getItem("Aether-user");
  console.log(raw_userlogdata);
  if (!raw_userlogdata) {
    gotoLogin();
    return;
  }
  userlogdata = JSON.parse(raw_userlogdata);
  console.log(userlogdata);
  const now = Date.now();
  console.log(`Now: ${now}`);
  const timeout = 12 * 60 * 60 * 1000; // 12hrs timeout (times minutes, seconds, milliseconds)
  //const timeout = 60 * 1000; // 1min test timeout
  if (now - userlogdata["timestamp"] >= timeout) {
    localStorage.removeItem("Aether-user");
    gotoLogin();
    return;
  }
  //Data loading from server part
  // (this is a "demo" version of data loading which may change, but probably won't)
  window.fetch(`http://88.210.12.42/API/openfiles/${userlogdata["UUID"]}.json`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      userdata = json;
      console.log(userdata);//test thing
    });
}

function loadAppData() {
  window.fetch(`http://88.210.12.42/API/openfiles/appdata.json`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      appdata = json;
      console.log(appdata);//test thing
    });
}

document.addEventListener('DOMContentLoaded', () => {loadAppData();loadUserData();console.log(userdata);});