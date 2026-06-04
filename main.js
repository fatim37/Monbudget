const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 430,
    height: 900,
    minWidth: 400,
    minHeight: 600,
    title: 'MonBudget',
    webPreferences: {
      nodeIntegration: false
    }
  })
  win.loadFile('index.html')
  win.setMenuBarVisibility(false)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.quit()
})
