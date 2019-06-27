---
prev: /storyscript/intro/
next: /storyscript/syntax/
---

# Writing a Story

✨Storyscript is the top-level, polyglot programming language that seamlessly moves data between microservices and functions in a serverless way with zero-devops deployments.✨

## Basics: HTTP Responses
Let's start with an HTTP server that responds with `Hello, world!` to an incoming request:

```coffee
http server as client
    when client listen method:'get' path:'/' as r
        r write content:'Hello, world!'
```

If you run `$ story deploy`, this application will be served on the public internet. Let's take a deeper look at the components that are being used here:

```coffee
http server as client
    …
```

This line instructs Storyscript to use the [`http` microservice](https://hub.storyscript.io/service/http) (which happens to be written in Python) — spawning a server instance, with a built–in client.

```coffee
…
    when client listen method:'get' path:'/' as r
        …
```

We will then use this client to instruct the server how to handle specific events — in this instance, we instruct the server to listen for HTTP `GET` requests sent to the '/' path. We then name the resulting event object (in this instance, a request/response object) `r`.

```coffee
…
    …
        r write content:'Hello world!'
```
This part of the code is the Storyscript logic of what to do during the request. In this instance, we're simply writing `Hello world!` to the response object.

Pretty simple! We just harnessed an [OMG-compliant](https://microservice.guide/) microservice, written in another language & powered by Docker, to script a production-ready HTTP server, ready to deploy to Kubernetes.

## Next: Inter–Service Communication

[The OMG Standard](https://microservice.guide/) allows for any microservice to be annotated, providing definitions of endpoints and the parameters that they take. You can build your own microservices, or annotate existing ones.

In order for a microservice to be referencable via Storyscript, it needs to be submitted to the [Storyscript Hub](https://hub.storyscript.io).

-------------

Let's utilize another existing service in our HTTP response.

We're using microservices, so, again, these services could be written in any language — this detail simply doesn't matter to us, anymore. It's all immediately reusable code in a Storyscript world.

Here's an updated version of our story:

```coffee
http server as client
    when client listen method:'get' path:'/' as r
        content = awesome id
        r write content:content
```

Now, instead of responding with `Hello, world!`, we're going to respond with the output of `awesome id`, which takes no parameters. It simply returns a modern uuid-esque string, which you can see in Storyscript Cloud as the app identifiers.

```bash
curl https://….storyscriptapps.com/
```
```
awesome-sauce-4242
```

Pretty nifty, eh?

[`awesome`](https://hub.storyscript.io/service/awesome) is another microservice that we're talking to, written in… it doesn't matter! It's an [OMG Standard](https://microservice.guide/) microservice, on the [Storyscript Hub](https://hub.storyscript.io/), so we're able to simply use it as native code within Storyscript.

When you deploy this story, both the [`http`](https://hub.storyscript.io/service/http) and [`awesome`](https://hub.storyscript.io/service/awesome) microservices will be spawned into the Kubernetes cluster for your application.
