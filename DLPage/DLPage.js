function downloadFile(url, fileName){
  fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
    .then(res => res.blob())
    .then(res => {
      const aElement = document.createElement('a');
      aElement.setAttribute('download', fileName);
      const href = URL.createObjectURL(res);
      aElement.href = href;
      // aElement.setAttribute('href', href);
      aElement.setAttribute('target', '_blank');
      aElement.click();
      URL.revokeObjectURL(href);
    });
};
function injectdiv(url){
  fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
    .then(x => document.innerHTML += x;)
};
injectdiv("https://raw.githubusercontent.com/CyberCornVr/Bookmarklets/main/Assets/dwpg.html");
window.alert('hi');
