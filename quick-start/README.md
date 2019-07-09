---
prev: false
next: /storyscript/intro/
---

<script>
import { Tweet } from 'vue-tweet-embed/dist'

export default {
    components: {Tweet}
}
</script>

# Quick Start

## Our Story

It started with questions any curious person should be asking: 
- *Why is there so much complexity in development?* 
- *How can we lower the bar of development?* 
- *What is the future of programming?* 

High-level languages enabled millions of people to call themselves developers while simultaneously making development exponentially easier. We believe it's time to think beyond high-level languages and look towards a new language built on the cloud, for the cloud, that transforms the industry like high-level languages once did.

✨Storyscript is the **polyglot, cloud-native programming language of the future**.<br>
🙋‍**Open Source** under Apache 2.0 license in [GitHub](https://github.com/storyscript).

<div align="center">
  <Tweet id="1145647520040869888"></Tweet>
</div>

## Getting started

The goal of the Quick Start is to get a Storyscript application deployed to Kubernetes in **under 5 minutes**. Start the clock! ⏰

### 1. Install our CLI.

<table width="100%">
<tr>
<td style="text-align:center" width="50%" valign="top" colspan="1">
<h2><img src="../assets/apple-logo.svg" width="15"> macOS</h2>

```bash
brew install storyscript/brew/story
```

</td>

<td style="text-align:center" width="100%" valign="top" colspan="2">
<h2><img src="../assets/ubuntu-logo.svg" width="15"> Ubuntu 16+</h2>

<a href="https://snapcraft.io/story">
  <img alt="Get it from the Snap Store" src="https://snapcraft.io/static/images/badges/en/snap-store-white.svg" />
</a>

<small style="display:block; width: 100%"><a href="https://snapcraft.io/">Snap is available on other Linux OS.</a></small>

</td>
</tr>

<tr>
<td style="text-align:center" width="100%" valign="top" colspan="2">
<h2><img src="../assets/windows-logo.svg" width="15"> Windows or Direct from Python</h2>

```bash
pip install --user story
```

<small>(Python 3.6 or higher is required, thus on Debian/Ubuntu use `pip3`.)</small>

<!--
<div><a href="https://github.com/asyncy/cli/releases/download/0.0.6/asyncy-x64.exe" class="button">64-bit installer</a></div>
<div><a href="#" class="button">32-bit installer</a></div>
-->

</td>
</tr>

</table>

### 2. Login with your GitHub account.

```bash
story login
```

All done! 💪 You're all set to create and deploy your apps. Amazing, isn't it?


## Write your first Story

Let's create your first application. 

### 1. Create a new folder for your application.

```bash
mkdir first_app && cd first_app
```

```bash
story apps create
```

> This command generates a `story.yml` file which is used to identify your application and provide metadata to configure version and secret variables.

### 2. The classic hello-world app to start you off!

```bash
story write http > http.story
```

Let's take a look:

```bash
cat http.story
```

```coffeescript
when http server listen method: "get" path: "/" as request
    request write content: "Hello world!"
```

> This http server is a great starting point to get *something* working. 

<!--
We have created a few examples that can help you bootstrap your project both Beginner-friendly and Advance. You can check them out [here](https://github.com/storyscript/examples)!
-->

## Deploy to Storyscript Cloud

The Storyscript Cloud is a Microservice and function platform that uses Kubernetes and other cloud-native tools as a fully managed Microservice Orchestration runtime. Simply put, **Storyscript makes deployment and usage of Microservices on Kubernetes possible in fewer steps.** 💪

Let's deploy your story:

```bash
story deploy
```

🎉 Congratulations! You have just deployed your first Story!

::: tip What just happened behind the scene?

The output from your deployment will share some details about what happened, because it's quite amazing!

1. Storyscript is **strongly-typed**. Therefore, your stories are verified and syntax is checked before deployment.
2. Services are pulled from the [Hub](https://hub.storyscript.io) and deployed to Kubernetes pods.
3. *Coming soon!* Functions are packaged in containers and deployed as services like above.
4. Services get started, events are subscribed and ingress routes are assigned.
5. The Storyscript Runtime caches your Story for fast execution, acting as a Microservice Orchestrator.

The above would have mostly been manual work, typically in the form of Kubernetes configuration files which are automatically generated during deployment in the Storyscript Cloud.
:::

## Putting it all together

A quick introduction to how the Storyscript platform works.

The **Stroyscript language** is a new language designed to focus on business-logic which describes the flow of data between services. It **does not replace any other language**; it unites all other languages in a polyglot development platform making it the most inclusive programming language. The language is inspired by several languages giving it a natural and intuitive familiarity. It's **strongly-typed** and compiled into the Storyscript Cloud-Native Runtime. We call this **top-level coding with a Cloud-Native programming language**.

The **Storyscript Runtime** is a Cloud-Native orchestrator that **uses Kubernetes under-the-hood** as a container scheduler framework. The Runtime transforms your Stories into a cached model of instructions that moves data between the services. Think of `IF this THAN that`, `WHEN this DO that`, `WAIT for this THEN that`, `WHILE this DO that` where all the `this that`s are services.

**Services** are independent components of highly-reusable software: a Docker container, OpenAPI specs, AsyncAPI specs, a single high-level language function, or another Storyscript. Developers are empowered to build polyglot applications by choosing any programming language to do the heavy lifting while Storyscript describes the interactions between these services. Services use the [Open Microservice Guide](https://microservice.guide/) to be free to make their own choices on language, protocol, and serialization while providing events and actions of the service that are consistently well-documented and domain-specific. 

**Storyscript Platform** is the combination of the language, runtime, tooling and library of services. It is a fully-distributed, Cloud-Native monolith for rapid application development with zero-devops deployments into Kubernetes.

Our documentation provides more details on the philosophy and components that, together, we call Storyscript. We invite you to look around and discover our product.

🙋‍Storyscript is **open source** under Apache 2.0 license in [GitHub](https://github.com/storyscript). Your contributions are welcome and greatly respected as we are building this product for the greater good with passion and inclusiveness, **together**.<br>

🇳🇱[Join our team in Amsterdam](https://jobs.lever.co/storyscript/) to experience our loving culture and beautiful country of Netherlands.
