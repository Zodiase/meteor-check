This package allows you to use custom error messages for checks by adding a third argument to `check`:

```JavaScript
check(value, pattern[, message]);
```

If `message` is not provided, `check` functions similarly to how it would without this package.

If `message` is provided, however, it will replace the original error message from the check. With this you can add meaningful error messages to checks instead of seeing something like: `'Match error: Expected string, got number'`.

Install
-------
```Bash
meteor add zodiase:check
```
