const options = document.getElementById('options');


options.button.addEventListener('click', (e) => {
    if (options.url.value === '') {
        window.alert("URL을 입력해주세요!")
    }
    else if (options.url.value.startsWith('http')) {
        whale.storage.local.set({"url": options.url.value}, function() {
            window.alert(options.url.value + " 으로 저장됨!")
        });
    }
    else {
        const item = "https://" + options.url.value;
        whale.storage.local.set({"url": item}, function() {
            window.alert(options.url.value + " 으로 저장됨!")
        });
    }
});