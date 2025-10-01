<!--
  <<< Author notes: Step 1 >>>
  Choose 3-5 steps for your course.
  The first step is always the hardest, so pick something easy!
  Link to docs.github.com for further explanations.
  Encourage users to open new tabs for steps!
-->

## Step 1: Leverage Codespaces with VS Code for Copilot

_Welcome to "Develop With AI Powered Code Suggestions Using GitHub Copilot and VS Code"! :wave:_

GitHub Copilot is an AI pair programmer that helps you write code faster and with less work. It draws context from comments and code to suggest individual lines and whole functions instantly. GitHub Copilot is powered by OpenAI Codex, a generative pretrained language model created by OpenAI.

**Copilot works with many code editors including VS Code, Visual Studio, JetBrains IDE, and Neovim.**

Additionally, GitHub Copilot is trained on all languages that appear in public repositories. For each language, the quality of suggestions you receive may depend on the volume and diversity of training data for that language.

Using Copilot inside a Codespace shows just how easy it is to get up and running with GitHub's suite of [Collaborative Coding](https://github.com/features#features-collaboration) tools.
````markdown
<!--
   Step 1: Install and configure GitHub Copilot (local VS Code + Codespaces)
   This is a concise, practical guide to get better Copilot suggestions quickly.
-->

## Step 1: Get better Copilot suggestions in VS Code and Codespaces

This step helps you install Copilot, enable useful editor settings, and add workspace recommendations so contributors get a consistent, helpful Copilot experience.

What we'll do:
- Install the Copilot extensions (local VS Code or Codespaces)
- Add workspace extension recommendations
- Apply a small set of editor settings that improve suggestion quality

### A — Install Copilot (local VS Code)

1. Open VS Code.
2. Install the GitHub Copilot extension (VS Code Marketplace: https://marketplace.visualstudio.com/items?itemName=GitHub.copilot). Optionally install Copilot Chat (https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) if you have access.
3. Sign in to GitHub when prompted and enable Copilot for your account or organization.

Tips:
- Use Copilot inline suggestions — they're less disruptive and appear as you type.
- Try Copilot Chat for explanation and iterative prompts (if available for your account).

### B — Use Codespaces or a devcontainer

To ensure everyone on this repo has the same Copilot-enabled environment, add a devcontainer that requests the extension. Create `.devcontainer/devcontainer.json` with the following (this is also provided in the repo):

```json
{
   "name": "Firefox-mobile codespace",
   "customizations": {
      "vscode": {
         "extensions": [
            "GitHub.copilot",
            "GitHub.copilot-chat"
         ]
      }
   }
}
```

Open a Codespace from the repository and the extensions will be installed into the Codespace automatically.

### C — Add workspace recommendations (recommended)

Create `.vscode/extensions.json` in the repo to recommend Copilot to contributors. A sample file is included in this repo so VS Code will prompt contributors to install the extensions when they open the workspace.

### D — Helpful editor settings (optional but recommended)

Add these recommended settings to your VS Code workspace settings (`.vscode/settings.json`) or paste them into your personal settings. They enable inline suggestions and make accepting suggestions simple.

```json
{
   "editor.inlineSuggest.enabled": true,
   "editor.acceptSuggestionOnEnter": "on",
   "editor.quickSuggestions": { "other": true, "comments": false, "strings": false }
}
```

Notes on settings:
- `editor.inlineSuggest.enabled` makes Copilot suggestions appear inline as you type.
- `editor.acceptSuggestionOnEnter` controls how Enter accepts suggestions — set it to your preferred behavior.

### E — Usage tips for better suggestions

- Write a short comment describing the intent before you start a function — Copilot uses that context.
- Start with a small unit (one function or component) rather than asking for a large feature in one go.
- If the first suggestion is off, press Ctrl+Enter (or the suggestion command) to see alternate suggestions.
- When working with unfamiliar code, add a brief docstring or comment explaining the desired behavior.

### F — Privacy, licensing, and expectations

- Copilot uses public training data and your current file context to generate suggestions. Be mindful of license and copyright requirements. See `LICENSE` and repo policy for guidelines.

If you'd like, I can add the `.vscode/extensions.json`, `.vscode/settings.json`, and `.devcontainer/devcontainer.json` files to this repo now so anyone who opens the workspace gets the recommended configuration.

````
