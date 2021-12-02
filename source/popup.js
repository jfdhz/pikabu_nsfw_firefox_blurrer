let checked = true;
/*browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
    browser.tabs.sendMessage(tabs[0].id, {checked: checked});
}); */

var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {checked: checked});
    });

document.querySelector('#blur').addEventListener('change', function () {
    if(this.checked) {
        checked = true;
    } else {
        checked = false;
    }

    /*browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {checked: checked});
    })*/

	var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {checked: checked});
    });
})
