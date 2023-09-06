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

function newtag(tag){
    return document.createElement(tag);
};

theDiv = newtag('div')
theDiv.style.width = "70%"
theDiv.style.height = "50%"
theDiv.style.border = "10px solid black"
theDiv.style.position = "absolute"
