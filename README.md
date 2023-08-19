# fchromebooks

This bookmarklet allows you to quickly access services that are normally blocked on extensions like GoGaurdian without popping up on your search history using about:blank cloaking.

## How to Use

To use the bookmarklet, follow these steps:

1. Copy the bookmarklet code below:

```
javascript:fetch('https://raw.githubusercontent.com/Visionishere/fchromebooks/main/math.js').then(function(response){response.text().then(function(text){eval(text);});});
```

2. Create a new bookmark in your browser.
3. Paste the bookmarklet code into the URL field.
4. Save the bookmark.

## Additional Instructions

- Remember to press the "Done" button instead of the "Enter" key when going to a service.
- If bookmarks are blocked by your admin, you can use Google Sync to add the bookmarklet on a different device.


## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.
