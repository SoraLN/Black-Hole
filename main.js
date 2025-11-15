import {app, BrowserWindow} from 'electron/main';


//função para criar a janela e o browser
function createWindow () {
    try{

        const win = new BrowserWindow()

        win.loadFile('index.html')

        win.maximize();

    }catch (error){
        console.log(`Falha Detectada`)
        console.log(error.message)
    }
}

//comando para quando o programa execultar
app.whenReady().then(() => {

  createWindow()

//comando para quando o programa abrir
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})


//comando para quando o programa fechar
app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {

    app.quit()

    console.log('--------------------')
    console.log('PROGRAMA ENCERRADO')
    console.log('--------------------')

  }
})