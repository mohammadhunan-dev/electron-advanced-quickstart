const Realm = require("realm");

const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // to prevent the Sync Connection from ending prematurely, start reading from stdin so we don't exit
  process.stdin.resume();

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)