# Copy to Clipboard Utility

A simple JavaScript utility function to copy text from an HTML element (identified by ID or class) to the clipboard. It also optionally displays a notification and applies a background color to the copied text.

## Overview

This utility function is designed to make it easy to copy text content from an HTML element to the clipboard. It allows you to specify the element using either an ID or a class selector, and provides options for displaying a notification message and applying a background color to the copied text.

## Features

- **Flexible Selector:** Use either an ID or class to specify the element to copy.
- **Notification Support:** Display a customizable message when the text is copied.
- **Background Color:** Optionally change the background color of the copied text.
- **Graceful Error Handling:** Logs an error if the specified element is not found.

## Installation

Simply copy the `copyData` function into your JavaScript file or include it in your project.

## Usage

### Basic Usage

You can call the `copyData` function by passing the ID or class of the element whose text you want to copy. The function also accepts optional parameters to customize the notification and background color.

```javascript
copyData('copy_code');  // Use ID selector
copyData('.copy_class'); // Use class selector
```

## Parameters
- **selector** (String, required):
The ID or class of the element to copy text from. Use a # prefix for IDs and a . prefix for classes. If no prefix is provided, the function assumes it's an ID.

- **notiID** (String, optional):
The ID of the notification element. Default is "neutral_success".

- **msg** (String, optional):
The message to display in the notification. Default is "Copied successfully.".

- **time** (Number, optional):
The time (in milliseconds) to display the notification. Default is 3000.

- **bg_color** (String, optional):
The background color to apply to the copied text. Use "skip" to disable this feature. Default is "#d9f2f7".

## Error Handling
If the specified element is not found, the function logs an error to the console:
```javascript
console.error(`Element not found for selector: ${selector}`);
```
This is useful for debugging purposes during development. If you prefer not to log errors in a production environment, you can modify the function accordingly.
## Examples
### 1. Copying Text from an Element with an ID 
```html
// HTML
<div id="copy_code">This is the text to copy</div>
```
```javascript
// JavaScript
copyData('copy_code'); // Copies "This is the text to copy"
```
### 2. Copying Text from an Element with a Class
```html
// HTML
<div class="copy_class">This is another text to copy</div>
```
```javascript
// JavaScript
copyData('.copy_class'); // Copies "This is another text to copy"
```
### 3. Customizing the Notification
```html
// HTML
<div id="copy_code">Copy this text</div>
<div id="copyNotification" class="notification"></div>
```
```javascript
// JavaScript
copyData('copy_code', 'copyNotification', 'Text copied!', 5000, '#ffeb3b');
```
This example copies the text from the element with the **ID copy_code**, displays a notification with the message "**Text copied!**" in the element with the ID copyNotification, keeps the notification visible for 5 seconds, and changes the background color of the copied text to **#ffeb3b**.
## Development and Contribution
If you find a bug or have a feature request, please open an issue on this [issues](https://github.com/Kifle-Tesfay/copy-to-clipboard-js/issues) page.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
