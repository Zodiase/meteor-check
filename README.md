This package allows you to use custom error messages for checks by adding a third argument to `check`:

```JavaScript
check(value, pattern[, message]);
```

If `message` is not provided, `check` functions similarly to how it would without this package.

If `message` is provided, however, it will replace the original error message from the check. With this you can add meaningful error messages to checks instead of seeing something like: `'Match error: Expected string, got number'`.

**Note that** the `check` in this package throws `Match.Error` exactly as the original `check` in `meteor/check` and these errors **do not** get propagated to the client side like `Meteor.Error` does. If you'd like to send error messages to the client from Meteor methods, you could do something like the following:

```JavaScript
Meteor.methods({
  someMethod (popularity, domain) {
    // Expose errors in this section to client.
    try {
      check(popularity, Number, 'Invalid popularity. Expecting a number.');
      check(domain, RegEx_validDomain, 'Invalid domain.');

      // Any more checks to perform.
    } catch (err) {
      throw new Meteor.Error('Invalid Input', err.message);
    }

    // Do other stuff and throw errors that are hidden from client.
  }
});
```


Install
-------
```Bash
meteor add zodiase:check
```

```JavaScript
// For Meteor versions that support export/import, this package has to be imported to take effect.
import { check } from 'meteor/zodiase:check';
```
