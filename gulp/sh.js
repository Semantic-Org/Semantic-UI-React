import { spawn } from 'child_process'

const sh = (command, cb, pipeOutputToResult = false) => {
  const [cmd, ...args] = command.split(' ')

  const options = {
    cwd: process.cwd(),
    env: process.env,
    stdio: pipeOutputToResult ? 'pipe' : [0, 1, 2],
    shell: true,
  }

  const child = spawn(cmd, args, options)

  let stdoutData = ''

  if (child.stdout) {
    child.stdout.on('data', (data) => {
      stdoutData += data
    })
  }

  child.on('close', (code) => {
    if (code === 0) {
      cb(stdoutData)
    }

    cb(new Error(`child process exited with code ${code}`))
  })
}

export default sh
