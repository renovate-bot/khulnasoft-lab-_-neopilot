<!-- <p align="center">
  <img width="100" src="/readme-assets/logo-circle.png" alt="neopilot logo">
</p> -->

![NEOPILOT SDK Preview](/readme-assets/neopilot-sdk-light.png#gh-light-mode-only)
![NEOPILOT SDK Preview](/readme-assets/neopilot-sdk-dark.png#gh-dark-mode-only)

<h4 align="center">
  <a href="https://pypi.org/project/neopilot/">
    <img alt="Last 1 month downloads for the Python SDK" loading="lazy" width="200" height="20" decoding="async" data-nimg="1"
    style="color:transparent;width:auto;height:100%" src="https://img.shields.io/pypi/dm/neopilot?label=PyPI%20Downloads">
  </a>
  <a href="https://www.npmjs.com/package/neopilot">
    <img alt="Last 1 month downloads for the JavaScript SDK" loading="lazy" width="200" height="20" decoding="async" data-nimg="1"
    style="color:transparent;width:auto;height:100%" src="https://img.shields.io/npm/dm/neopilot?label=NPM%20Downloads">
  </a>
</h4>

<!---
<img width="100%" src="/readme-assets/preview.png" alt="Cover image">
--->
## What is NEOPILOT?
[NEOPILOT](https://www.neopilot.dev/) is an open-source infrastructure that allows you to run AI-generated code in secure isolated sandboxes in the cloud. To start and control sandboxes, use our [JavaScript SDK](https://www.npmjs.com/package/@neopilot/code-interpreter) or [Python SDK](https://pypi.org/project/neopilot_code_interpreter).

> [!NOTE]
> This repository contains the core NEOPILOT SDK that's used in our main [NEOPILOT Code Interpreter SDK](https://github.com/khulnasoft-lab/code-interpreter).

## Run your first Sandbox

### 1. Install SDK

JavaScript / TypeScript
```
npm i @neopilot/code-interpreter
```

Python
```
pip install neopilot-code-interpreter
```

### 2. Get your NEOPILOT API key
1. Sign up to NEOPILOT [here](https://neopilot.dev).
2. Get your API key [here](https://neopilot.dev/dashboard?tab=keys).
3. Set environment variable with your API key
```
NEOPILOT_API_KEY=neopilot_***
```     

### 3. Execute code with code interpreter inside Sandbox

JavaScript / TypeScript
```ts
import { Sandbox } from '@neopilot/code-interpreter'

const sandbox = await Sandbox.create()
await sandbox.runCode('x = 1')

const execution = await sandbox.runCode('x+=1; x')
console.log(execution.text)  // outputs 2
```

Python
```py
from neopilot_code_interpreter import Sandbox

with Sandbox() as sandbox:
    sandbox.run_code("x = 1")
    execution = sandbox.run_code("x+=1; x")
    print(execution.text)  # outputs 2
```

### 4. Check docs
Visit [NEOPILOT documentation](https://neopilot.dev/docs).

### 5. NEOPILOT cookbook
Visit our [Cookbook](https://github.com/khulnasoft-lab/neopilot-cookbook/tree/main) to get inspired by examples with different LLMs and AI frameworks.

## Self-hosting

Read the [self-hosting guide](https://github.com/khulnasoft-lab/infra/blob/main/self-host.md) to learn how to set up the [NEOPILOT infrastructure](https://github.com/khulnasoft-lab/infra) on your own. The infrastructure is deployed using Terraform. 

Supported cloud providers:
- 🟢 GCP
- 🚧 AWS
- [ ] Azure
- [ ] General linux machine
