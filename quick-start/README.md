---
prev: false
next: /storyscript/writing/
---

# Storyscript Cloud

The story of Storyscript begins with you — the developer. We seek to amplify your ability to build and deploy applications, enabling you to doing so at lightning speed.

Your mission — if you choose to accept it — is to make your development lifecycle 10-100x easier. How? By significantly reducing the boilerplate neccessary when working with microservices in a Bash–esque paradim.

We remove the unnecessary complexity in order to allow you to focus on what matters most: the story of your data.

Let's get started.

## Get started

First, install our CLI:

<table width="100%">
<tr>
<td style="text-align:center" width="100%" valign="top" colspan="2">
<details :open="$page.os === 'macos'">
<summary><h4><img src="../assets/apple-logo.svg" width="15"> macOS</h4></summary>

```bash
brew install storyscript/brew/story
```

</details>
</td>
<!--
<td style="text-align:center" width="50%" valign="top">
<details :open="$page.os === 'windows'">
<summary><h4><img src="../assets/windows-logo.svg" width="15"> Windows</h4></summary>

Download the appropriate installer:

<div><a href="https://github.com/asyncy/cli/releases/download/0.0.6/asyncy-x64.exe" class="button">64-bit installer</a></div>
<div><a href="#" class="button">32-bit installer</a></div>

</details>
</td>
-->
</tr>
<tr>
<td style="text-align:center" width="50%" valign="top">
<details :open="$page.os === 'unix' || $page.os === 'linux'">
<summary><h4><img src="../assets/ubuntu-logo.svg" width="15"> Ubuntu 16+</h4></summary>

```bash
sudo snap install story
```

<a href="https://snapcraft.io/story">
  <img alt="Get it from the Snap Store" src="https://snapcraft.io/static/images/badges/en/snap-store-white.svg" />
</a>

<small style="display:block; width: 100%"><a href="https://snapcraft.io/">Snap is available on other Linux OS.</a></small>

</details>
</td>
<td style="text-align:center" width="50%" valign="top">
<details :open="$page.os === 'unknown'">
<summary><h4>Direct from Python</h4></summary>

```bash
pip install --user story
```

Python 3.6 or higher is required, thus on Debian/Ubuntu use `pip3`.
The other installation methods listed are recommended.

</details>
</td>
</tr>
</table>

Next, login with your GitHub account:

```bash
story login
```

All done! You're all set to create and deploy apps written in Storyscript.

If you're having trouble logging in via GitHub, please [reach out to us](http://asyncy.click/slack).

<!-- TODO Feedback and question on how your experience was doing this. -->


## Write your first Story

Let's create your first application, to be able to check out the samples which are bundled.
```bash
mkdir first_app && cd first_app
```
```bash
story apps create
```

> <small>Doing so will create `story.yml` in the current directory. This file contains metadata about your new app.</small>

We have created a few examples that can help you bootstrap your project: Let's start you off with a simple hello world serverless http endpoint:

```bash
story write http > http.story
```

Let's take a look:

```bash
cat http.story
```

```coffeescript
when http server listen method: 'get' path: '/' as request
    request write content: 'Hello world!'
```

Now, let's deploy your story:

```bash
story deploy
```
```text
Compiling Stories...
Deploying app competent-nash-82.storyscriptapp.com... |
√ Version 1 of your app has been queued for deployment

Waiting for deployment to complete... |
√ Deployed successfully!
If your story listens to HTTP requests, visit https://competent-nash-82.storyscriptapp.com
```

Congratulations! You have just deployed your first Story! :sparkles::cake::sparkles:

`story deploy` will deploy all the stories in your project, at once.

::: tip See it live!

Check the deployment output.
It will indicate where your story was deployed.

:::

> **Next** Checkout our extensive documentation about [Storyscript](/storyscript/intro/) to build powerful applications.

## Deploy changes

Ready to redeploy your application? Simply run the same `deploy` command again:
```bash
story deploy
```

Your application is now live!
:sparkles::cake::sparkles:
