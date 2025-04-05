import { app, BrowserWindow, screen } from "electron";
import "dotenv/config";

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  mainWindow = new BrowserWindow({
    width,
    height,
    maxWidth: 1920,
  });
  const FRONTEND_URL = process.env.VITE_FRONTEND_URL;
  if (FRONTEND_URL) {
    mainWindow.loadURL(FRONTEND_URL);
  } else {
    console.error("VITE_FRONTEND_URL is not defined in .env file");
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
