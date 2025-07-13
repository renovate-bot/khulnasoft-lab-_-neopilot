import { Sandbox } from 'neopilot'

const sandbox = await Sandbox.create({ template: 'base' })

const url = sandbox.getHostname() // $HighlightLine
console.log('https://' + url)

await sandbox.close()
