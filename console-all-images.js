//metaaffinity.net

var imageUrls = [];
// Assuming the HAR log is stored in a variable called 'har'
har.log.entries.forEach(function (entry) {
  if (!entry.response.content || !entry.response.content.mimeType || entry.response.content.mimeType.indexOf("image/") !== 0) return;
  imageUrls.push(entry.request.url);
});
console.log(imageUrls.join('\n'));

