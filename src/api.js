import { ipcMain } from 'electron'
import { exec } from 'child_process'
export default function (render) {
  ipcMain.on('tasklist', () => {
    exec('tasklist', (error, stdout, stderr) => {
      if (error) {
        throw error
      } else {
        const arr = []
        stdout.split('\n').filter((line) => {
          const processMessage = line.trim().split(/\s+/)
          if (processMessage[0] && processMessage[1]) {
            arr.push({
              label: processMessage[0],
              pid: processMessage[1]
            })
          }
        })
        render.send('tasklist', arr)
      }
    })
  })
}
