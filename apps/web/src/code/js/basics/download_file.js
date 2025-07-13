import { Sandbox } from 'neopilot'
import fs from 'node:fs'

const sandbox = await Sandbox.create({ template: 'base' })

const buffer = await sandbox.downloadFile('path/to/remote/file/inside/sandbox', 'buffer') // $HighlightLine
// Save file to local filesystem
fs.writeFileSync('path/to/local/file', buffer)

await sandbox.close()
