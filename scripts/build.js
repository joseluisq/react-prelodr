const execSync = require('child_process').execSync
const inInstall = require('in-publish').inInstall

if (inInstall()) process.exit(0)

const exec = (command, env) =>
  execSync(command, { stdio: 'inherit', env })

const webpackEnv = Object.assign({}, process.env, {
  NODE_ENV: 'production'
})

exec('npm run build:lib')
