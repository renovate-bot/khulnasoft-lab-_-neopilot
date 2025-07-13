import { expect, inject, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { waitFor } from '@testing-library/react'
import React from 'react'
import { useEffect, useState } from 'react'

import { Sandbox } from '../../../src'
import { template } from '../../template'

function NEOPILOTTest() {
  const [text, setText] = useState<string>()

  useEffect(() => {
    const getText = async () => {
      const sandbox = await Sandbox.create(template, {
        apiKey: inject('NEOPILOT_API_KEY'),
        domain: inject('NEOPILOT_DOMAIN')
      })

      try {
        await sandbox.commands.run('echo "Hello World" > hello.txt')
        const content = await sandbox.files.read('hello.txt')
        setText(content)
      } finally {
        await sandbox.kill()
      }
    }

    getText()
  }, [])

  return <div>{text}</div>
}
test(
  'browser test',
  async () => {
    const { getByText } = render(<NEOPILOTTest />)
    await waitFor(
      () => expect.element(getByText('Hello World')).toBeInTheDocument(),
      {
        timeout: 30_000,
      }
    )
  }, 40_000)
