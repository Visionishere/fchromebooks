javascript:(function() {
  var services = {
    "Youtube": "https://piped.drgns.space/trending",
    "Minecraft": "https://eaglercraft-105.vercel.app/",
    "Music": "https://freefy.app",
    "Tiktok": "https://cringe.whatever.social/",
    "ChatGPT": "https://chat-gpt-next-web-jade-nine-74.vercel.app/#/chat",
    "General Media": "https://archive.org/",
    "Games": "https://shsgames.github.io/"
  };

  var service = prompt("Enter the service name:\n\n" + Object.keys(services).join("\n") + "\n\nNOTE: MAKE SURE POPUPS ARE ALLOWED AND YOU PRESS DONE!");
  var url = services[service];
  
  if (url) {
    var iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    var newWindow = window.open("about:blank");
    newWindow.document.body.appendChild(iframe);
  }
})();
