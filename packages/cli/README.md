<p align="center">
  <img width="100" src="https://raw.githubusercontent.com/khulnasoft-lab/NEOPILOT/refs/heads/main/readme-assets/logo-circle.png" alt="neopilot logo">
</p>

# NEOPILOT CLI

This CLI tool allows you to build manager your running NEOPILOT sandbox and sandbox templates. Learn more in [our documentation](https://neopilot.dev/docs).

### 1. Install the CLI

**Using Homebrew (on macOS)**

```bash
brew install neopilot
```

**Using NPM**

```bash
npm install -g @neopilot/cli
```

### 2. Authenticate

```bash
neopilot auth login
```

> [!NOTE]
> To authenticate without the ability to open the browser, provide
> `NEOPILOT_ACCESS_TOKEN` as an environment variable. Get your `NEOPILOT_ACCESS_TOKEN`
> from the Personal tab at [neopilot.dev/dashboard](https://neopilot.dev/dashboard). Then use the CLI like this:
> `NEOPILOT_ACCESS_TOKEN=sk_neopilot_... neopilot template build`.

> [!IMPORTANT]  
> Note the distinction between `NEOPILOT_ACCESS_TOKEN` and `NEOPILOT_API_KEY`.

### 3. Check out docs

Visit our [CLI documentation](https://neopilot.dev/docs) to learn more.
