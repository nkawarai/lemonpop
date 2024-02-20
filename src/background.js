chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "lap-analysis",
    title: "ラップ解析レポートを表示",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "lap-analysis") {
    const selectedText = info.selectionText;
    chrome.tabs.create({
      url: "lapReport.html?lap=" + encodeURIComponent(selectedText)
    });
  }
});