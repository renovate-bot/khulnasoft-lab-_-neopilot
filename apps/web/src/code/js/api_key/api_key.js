import { Sandbox } from 'neopilot'

const sandbox = await Sandbox.create({ apiKey: 'YOUR_API_KEY' })
await sandbox.close()
