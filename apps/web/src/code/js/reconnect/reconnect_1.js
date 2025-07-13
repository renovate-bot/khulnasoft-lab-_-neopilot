import { Sandbox } from 'neopilot'

async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const sandbox = await Sandbox.create({ template: 'base' })