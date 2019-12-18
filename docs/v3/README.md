# Version 3.0

The first version was made with a decorator first approach (at least I tried). This approach is elegant but hard to understand
what is going on.

The second approach is "decoratorless" the logic is simpler but we loose the declarative style of decorator.
This approach gives us better way to pass service container trough controller.

## Goals

In this approach I will try to abstract the express application, this way it will be simpler to use decorators.
I will also try to add the swagger ui.
 
## Examples

### Service

```typescript
// Service id provided by string, symbol or enum.
// The service decorator declare a service
@Service('service.user-service')
class UserService extends BaseService {
    constructor() {
        super()
        this.container // gives use the container
    }
}
```

### Controller
```typescript
// Base url is provided by a string
// The service decorator declare a service
@Log('UserController')
@Controller('/posts')
class UserController extends BaseController {
    constructor() {
        super()
        this.container // gives use the container, same as 
    }

    // Routes a declare this way
    // The Get annotation will also create the swagger
    // The secured annotation will apply the AuthGuard middleware to this route
    @Secured('ROLE_USER')
    @Get('/:id')
    findUser(req: Request, res: Response, next: NextFunction) {
    
    }   
}
```

### Middleware

```typescript
// Service id provided by string, symbol or enum.
// The service decorator declare a service
@Middleware()
class LogMiddleware extends BaseMiddleware implements MiddlewareInterface {
    constructor() {
        super()
        this.container // gives use the container
    }
    
    invoke (req: Request, res: Response, next: NextFunction) {
        // ... something with req
        next()
        // ... something with res
    }
}
```

### Application

```typescript
class Application {
    // app instance will be injected for tests purpose
    constructor (app: e.Application) {}
    
    // init hook called when app is fully mounted (controllers, middleware, services, all done)
    // param app itself
    init () {}
    
    // listen for request (wrap e.Application.listen()
    listen (port) {}
}
```

## Results

### Done

- Global middlewares (registered with decorators)
- Controller (registered with decorators)
- Services (registered with decorators)
- Injection using BaseComponent class which hold a ServiceContainer static instance

### Not done

- Route and controller level middleware
- Injection with decorators

### Notes

This architecture, in order to work, need to evaluate controllers, services and middlewares, which can be 
a work for ts parser. I think you can't add treeshaking because link between app.ts and controllers/services/middlewares
are not explicit.
