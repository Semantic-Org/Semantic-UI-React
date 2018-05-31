import { exec } from 'child_process'

const sh = (cmd, cb) => {
  const options = {
    cwd: process.cwd(),
    env: process.env,
    stdio: 'inherit',
  }

  exec(cmd, options, cb)
}

export default sh
