---
prev: /quick-start/
next: /storyscript/writing/
---

# Introduction

## Meet Storyscript

✨Storyscript is the cloud-native, polyglot programming language that seamlessly moves data between microservices and functions with zero-devops deployments into Kubernetes. Stay focused on what matters most: business-logic. *Everything else is noise.* ✨

Let's start with the code. The snippet below shows the key features of Storyscript.

```coffeescript
when service action eventName as event        # An event-driven microservice
  result = aPythonFunction(foo:event["name"]) # Call a function in any language
  res = result.upper().split(by:" ")          # Do data transformation
  service action bar:res                      # Call a microservice action
```

👏 That's it. The story above uses two microservices, a function and two data transformation. Deployed with just `story deploy` into Kubernetes with no extra setup.

::: tip Storyscript key features:
- Polyglot development (it **does not** replace high-level languages it connects them)
- Strong-typed and static-typed.
- Turing-complete.
- Adaptive microservice orchestrator.
- A distributed monolith. *One source of truth.*
- Glue code between microservices and functions, both deployed in a serverless way.
- Cloud-native compiled with zero-devops deployments into Kubernetes.
:::

**Our philosophy: applications are stories of data**. A story of how data moves between services (databases, SaaS, algorithms, etc.) is what makes your application unique. Storyscript is designed to empower developers to write applications as pure business-logic in Stories that make reading and understanding complex business processes in a simple, intuitive way with no boilerplate code.

## Why Storyscript?

Software development is a 90 year story of abstraction. Once physical punch cards were used to automate procedures turned into code enabling millions of people to call themselves developers. Modern development is built upon the foundation of well-abstracted stacks of software, a trend that is not gong to stop. Abstraction, to developers, means staying focused on what matters most. How one manages memory or threads is not business-logic. It's the story of moving data that defines the product and therefore the business.

### The next abstraction: Top-level Programming

**Low-level languages** empowered people to create extraordinary processes in a form that was significantly more readable than machine-code, yet left us with managing memory.

**High-level languages** elevated our engineering by abstracting memory management and enabling package management for better sharing and code reusability, however, it left us with plenty of complexities that obfuscate business-logic. After all, most high-level languages were built before the cloud-era, most are designed to run on one computer.

**Top-level languages** will abstract away most (if not all) the complexities that high-level languages have bringing development as-close-to pure business-logic as possible. Development will be focused on seamlessly moving data between polyglot domain-specific components of software. These services will do the heavy lifting while the top-level language will act as the data orchestrator.

### Reduce complexities; focus on what matters most.

There three types of complexities in software development.
1. **Necessary Complexity** - required to accomplish your application, the business-logic. Moving data has complexity, there is no denying it. The way you move data, your story, is what makes your application unique.
2. **Unnecessary Complexity** - things developers must do that is not business-logic, such as logging, metrics, configuration, dependency management, testing, deployments and scaling.
3. **Accidental Complexity** - things that are accidents during development that cause bugs, downtime and lose of productivity.

Ideally, development would be focused exclusively on necessary complexity but the industry is far from that. Today, one could argue that most our time is spend in unnecessary and accidental complexities. Storyscript aims to significantly reduce development complexities resulting in a steep improvement in productivity.

### Staying Super-DRY

Development is soaking wet in technical debt 🌊. Yes, that's catchy, but very true. As an industry we need to ask ourselves: *Why do we create libraries in every language?* *Why are we responsible for soo much unnecessary complexity?* *When is the promise of Lego-style development coming true?*

We believe the future of cloud-native development is domain-specialized microservices that are complete with their logging, metrics, scaling, health-checks while having standardized documentation. Docker took us only so far as it describes only how to *build* the container but nothing of what is inside of it and how it works. This is where the [Open Microservice Guide](https://microservice.guide/) (aka OMG) kicks in. This guide is not only a resource for helping build microservices, but a contract of communication. The OMG empowers engineers to build microservices in any language and any protocol in a declarative way that auto-generates documentation. Finally, standardization for microservices.

Now, with the OMG-compatible services, we can connect service-to-service without the typical headaches that plagues development. We believe this will make development Super-DRY.


## Benefits

1. **Transparency**.
  It looks like a monolith but is a full microservice/function serverless architecure.
1. **Readability**.
  The truth is in the code. Not only is Storyscript easy to read it's also easy to refactor, add features and traceback errors. Developers read code 10x more often than they write code.
1. **Inclusiveness** through polyglot development.
  Storyscript connects all existing languages together into one single cohesive story of data. This enables you to choose the right language for the job.
1. **Zero-DevOps Deployments**.
  When using Storyscript, Kubernetes configuration is an afterthought: port bindings, ingress controllers, central message queues, container couplings, infrastructure configuration, AB testing, and custom scaling.

![stackup](./stackup.png)

## Use Cases

All backend-oriented services can be easily spawned from Storyscript— often with a single line of code and deployed without any Kubernetes configuration.

Here are a few examples of Storyscript use-cases:

|                               	|                       	|                             	|
|-------------------------------	|------------------------	|-----------------------------	|
| HTTP Requests and APIs        	| Websockets             	| Task Automation             	|
| Fully-Asyncronous Programming 	| Cron Jobs              	| Business Logic              	|
| Machine Learning              	| Image/Video Processing 	| CI/CD Pipelines             	|
| Microservices Orchestration   	| Functional Computing   	| Object Storage Interactions 	|

To see a list of services that are available today, check out the [Storyscript Hub](https://hub.storyscript.io/)!
