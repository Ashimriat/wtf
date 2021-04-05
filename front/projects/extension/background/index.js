/*
chrome.alarms.create('alarmName', {
  periodInMinutes: 10, //  будет запускать раз в указанный период времени после стартового запуска
  // запустит аларм через указанный промежуток времени
  delayInMinutes: 1, // либо минут
  // when: 1251290 // либо миллисекунд
});

chrome.runtime.onInstalled.addListener(async () => {
  // await chromeApi.storage.sync.set({ color: '#3aa757' });
  console.log('The color is green');
  // await chromeApi.declarativeContent.onPageChanged.removeRules(undefined);
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
}); */

console.log('1');