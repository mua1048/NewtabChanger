whale.storage.local.get("url", function(result) {
    var url = result.url;
    window.location.href = url;
});