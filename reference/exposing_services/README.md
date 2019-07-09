# Exposing a Service

Often, it is desirable to interact with your services, directly from the
outside world.

For example, if you're running a service which exposes its own web console (for configuration)
on a certain path. We refer to this as "forwards" — a path that is exposed directly to the internet, from the underlying container.

**Note:** For this to work, the service you are trying to expose, must have
declared an `expose` in its `microservice.yaml`. Read more about it [here](https://microservice.guide/schema/expose).

To expose a service's expose to the internet, add an `expose` entry to your
project's `story.yml` file:

```yaml{2,3,4,5,6}
app_name: your-app-name
forwards:
  - service: <the name of the service>
    name: <the name of the expose in that service>
    http:
      path: <the internet facing path for the service's expose>
```

## Example
Here's an example `story.yml` which exposes Hasura's endpoints:
```yaml
app_name: xxx-xxx-xxx
forwards:
  - service: hasura
    name: console
    http:
      path: /console
  - service: hasura
    name: graphql
    http:
      path: /v1alpha1
  - service: hasura
    name: v1_api
    http:
      path: /v1
```
In this example, the endpoints are now accessible directly via the following URLs:
```
https://xxx-xxx-xxx--hasura.storyscriptapp.com/console
https://xxx-xxx-xxx--hasura.storyscriptapp.com/v1alpha1
https://xxx-xxx-xxx--hasura.storyscriptapp.com/v1
```
### How do I find what these URLs are?
Everything about your app is exposed via `$ story logs`. On running `$ story logs`,
you should see something similar to the following:
```
Apr 09 14:25:19   INFO Exposing service hasura/console on /console
Apr 09 14:25:33   INFO Exposed service hasura as https://xxx-xxx-xxx--hasura.storyscriptapp.com/console
Apr 09 14:25:33   INFO Exposing service hasura/graphql on /v1alpha1
Apr 09 14:25:33   INFO Exposed service hasura as https://xxx-xxx-xxx--hasura.storyscriptapp.com/v1alpha1
Apr 09 14:25:33   INFO Exposing service hasura/v1_api on /v1
Apr 09 14:25:33   INFO Exposed service hasura as https://xxx-xxx-xxx--hasura.storyscriptapp.com/v1
```

## What happens under the hood?
When you run `$ story deploy`, your project's `story.yml` content is added alongside the
stories which are found in your project.

Then, the Storyscript runtime inspects the `story.yml`, fetches the services to be exposed, and matches the expose configuration with that of the
service's `microservice.yml`. Once this is found, a Kubernetes Ingress is created on your behalf.

This ensures that all requests are sent directly to the service you are using.
