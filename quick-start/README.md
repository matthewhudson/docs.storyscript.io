---
prev: false
next: /storyscript/writing/
---

# Quick Start

## Introduction

The story of Storyscript started with questions any curious engineer should be asking: *Why is there so much complexity in development?* *What is the future of programming?* *How can we lower the bar of development to bring more (many more) developers to our beloved community?* We saw a trend in the industry and agreed the time was perfect for, what we believe, the future of programming. Our mission is simple: be the future of programming and bring the power of coding to a billion people by making application development over 10x easier.

🙋‍Storyscript is **open source** under Apache 2.0 license in [GitHub](https://github.com/storyscript).<br>

**Applications are stories of data.** A story of how data moves between services defines your unique product. It should be intuitive to write, simple to read and focused on what matters most: business-logic. *Everything else is just noise.*

✨Storyscript is the top-level, polyglot programming language that seamlessly moves data between microservices and functions in a serverless way with zero-devops deployments.✨

## Getting started

The goal of the quick start is to get a Storyscript application deployed to Kubernetes in **under 5 minutes**. Start the clock! ⏰

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
<!--
<td style="text-align:center" width="50%" valign="top">
<details :open="$page.os === 'unix' || $page.os === 'linux'">
<summary><h4><img src="../assets/ubuntu-logo.svg" width="15"> Ubuntu 16+</h4></summary>



<a href="https://snapcraft.io/story">
  <img alt="Get it from the Snap Store" src="https://snapcraft.io/static/images/badges/en/snap-store-white.svg" />
</a>

<small style="display:block; width: 100%"><a href="https://snapcraft.io/">Snap is available on other Linux OS.</a></small>

</details>
</td>
-->
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


## Write your first Story

Let's create your first application. First, create a new folder for your application.

```bash
mkdir first_app && cd first_app
```
```bash
story apps create
```

> This generated the `story.yml` file which is used to identify your application and provide metadata to configure version and secrets variables.

We have created a few examples that can help you bootstrap your project. Let's start you off with a simple hello-world serverless http endpoint:

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
> It's just a simple http server but a great starting point to just get *something* working. We have many other simple and complex examples [here](https://github.com/storyscript/examples).

## Deploy to Storyscript Cloud

The Storyscript Cloud is a microservice and function platform that uses Kubernetes and other cloud-native tooling as a fully managed microservice orchestration runtime. Simple put, **Storyscript make it easy to deploy and use microservices on Kubernetes.** 💪

Let's deploy your story:

```bash
story deploy
```

🎉 Congratulations! You have just deployed your first Story!

::: tip What just happened?

The output from your deployment will share some details about what happened, because it's quite amazing!
1. Your story was compiled and checked for issues before deploying.
1. The services you require were pulled and deployed to Kubernetes pods.
1. Functions were packaged in containers and deployed as services like above.
1. All services were started, events subscribed and ingress routes assigned.

The above would have all been manual work, typically in the form of Kubernetes configuration files which are automatically generated during deployment in the Storyscript Cloud.
:::

## Putting it all together

A quick introduction to how the Storyscript platform works.

The **Stroyscript language** is a new language designed for business-logic which describes the flow of data between services. It **does not replace any other language**; is unites all other languages in a polyglot development platform being the most inclusive programming language. The language was inspired by many other languages giving it a natural and intuitive familiarity. It's **strongly-typed** and compiled into the Storyscript cloud-native runtime. We call this **top-level coding with a cloud-native programming language**.

The **Storyscript runtime** is a cloud-native orchestrator that **uses Kubernetes under-the-hood** as the container scheduler framework. The runtime will transform your stories into a cached model of instructions that simply moves data between the services. Think `IF this THAN that`, `WHEN this DO that`, `WAIT for this THEN do that`, `WHILE this DO that` and all the `this thats` are services.

**Services** are independent components of highly-reusable software: a Docker container, OpenAPI spec, AsyncAPI specs, a single high-level language function, or another Storyscript. Developer are empowered to build polyglot applications by choosing any programming language to do the heavy lifting while Storyscript describes the interactions between these services. Services use the [Open Microservice Guide](https://microservice.guide/) to be free to make their own choices on language, protocol, serialization while providing consistent well-documented and domain-specific events and actions of the service. 

**Storyscript Platform** is the combination of the language, runtime, tooling and library of services. A fully-distributed, cloud-native monolith for rapid application development with zero-devops deployments into Kubernetes.

Our documentation provides more details on the philosophy and components that, together, we call Storyscript. We invite you to look around and discover our product.

🙋‍Storyscript is **open source** under Apache 2.0 license in [GitHub](https://github.com/storyscript). Your contributions are welcome and greatly respected as we are building this product for the greater good with passion and inclusiveness, **together**.<br>

🇳🇱[Join our team in Amsterdam](https://angel.co/storyscript/jobs) to experience our loving culture and beautiful country of Netherlands.
