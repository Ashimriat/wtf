import chromeApi from "../chromeHolder";

chrome.runtime.onInstalled.addListener(async () => {
	await chromeApi.storage.sync.set({ color: '#3aa757' });
	console.log('The color is green');
	await chromeApi.declarativeContent.onPageChanged.removeRules(undefined);
  chrome.declarativeContent.onPageChanged.addRules([
    {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'developer.chrome.com' },
        })
      ],
      actions: [
        new chrome.declarativeContent.ShowPageAction()
      ]
    }
  ]);
});