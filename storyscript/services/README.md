# Services

## Summary

A service is a containerized microservice that is registered in the[Storyscript Hub](https://hub.storyscript.io). Discover hundreds of services in the Hub or build your own in any language, submit to the Storyscript Hub and call it in your Storyscript like this:

```coffeescript
# Call a service with a command and all arguments named
service cmd key:value foo:bar
team/service cmd key:value foo:bar

# Service output assigned to variable
foobar = service cmd key:value

# Arguments may by indented under the service
service cmd key:value
            foo:bar
```

### Syntax

In Storyscript, the syntax to run a service appears natural and arguments are named for transparency.

```coffeescript
twitter tweet status:"hello"
```

Service, actions and argument names are **static grammar** and **interpreted literally**.
However, argument values can be variables:

```coffeescript
text = "Hello world"
twitter tweet status:text
```

### Argument shorthands

As naming variables like their arguments is a frequent case (i.e. `data:data` or `name:name`), argument shorthands can be used to reduce repeating terms:

```coffeescript
status = "Hello world"
twitter tweet :status
```

In this example `status` must be the argument name and the variable name to use for the `status` argument. It is equivalent to `twitter tweet status:status`.

## Event-Based Services

Services may publish events which run a new block of logic.

```coffeescript
# All three patterns below are equivalent
when service action event key:value as output
    ...

service action as client
    when client event key:value as output
        ...
    # more events ...

service action
    when event key:value as output
        ...
    # more events ...
```

A good example of this is streaming Tweets by hashtag.

```coffeescript
when twitter stream tweets track:"programming" as tweet
    res = machinebox/textbox analyze input:tweet.message
    if res.sentiment == "positive"
        tweet reply message:"Thank you!"
        tweet retweet
        tweet like
```

Every new tweet will be passed into the block below in the variable `tweet`.
Then machine learning will determine if the tone of the tweet's message is good or bad. The streaming service will wait for new tweets until the story is ended.

If no output is defined, it will be implicitly default to the name of the command. Furthermore, if only a command name is used in `when` blocks, it will use the `output` of its parent as subscribing service.
This allows this to shorten the example from above:

## Service Environment Variables

Many services require environment variables, such as oauth tokens and client id/secret pairs.

Service variables are ALWAYS unique to that service and cannot be accessed by any other service or within Storyscript secrets.

Set secrets with the Storyscript CLI
```bash
story config set twitter.client_id=abc123
```

These variables ARE NOT accessible in Storyscript because they are for a service only.
```coffeescript
token = app.secrets.twitter.client_id  # Error. Accessing service environment variables is prohibited.
```

When the service `twitter` is started by Storyscript Cloud it will be assigned `client_id=abc123` according to it's `microservice.yml` as an environment variable.
