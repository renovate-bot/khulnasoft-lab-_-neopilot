import * as neopilot from 'neopilot'
import * as chalk from 'chalk'

import { asFormattedSandboxTemplate } from 'src/utils/format'

export async function getPromptTemplates(
  templates: neopilot.components['schemas']['Template'][],
  text: string,
) {
  const inquirer = await import('inquirer')
  const templatesAnwsers = await inquirer.default.prompt([
    {
      name: 'templates',
      message: chalk.default.underline(text),
      type: 'checkbox',
      pageSize: 50,
      choices: templates.map((e) => ({
        name: asFormattedSandboxTemplate(e),
        value: e,
      })),
    },
  ])

  return templatesAnwsers[
    'templates'
  ] as neopilot.components['schemas']['Template'][]
}
