window.addEventListener("keydown", (e) => {
    document.getElementById(
      "result"
    ).innerHTML = `You pressed <span>${e.key}</span><span>Key Code: ${e.keyCode}</span>`;
  });
  