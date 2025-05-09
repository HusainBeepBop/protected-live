firebase.auth().onAuthStateChanged((user) => {
  const path = window.location.pathname;
  if (user) {
    if (path.includes('index.html')) {
      window.location.replace("main.html");
    }
  } else {
    if (!path.includes('index.html')) {
      window.location.replace("index.html");
    }
  }
});

function loginUser(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

function logoutUser() {
  firebase.auth().signOut();
}
