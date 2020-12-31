## Bonus Bonus
## Caesar Cipher

Activity Creator: Thom Page for Angular 1.x<br>
Major updates: Karolin Rafalski for React<br>

Make a Caesar Cipher page that takes an input and encodes it with a Caesar Cipher and and displays the encoded input while the user is typing (no submit button).

Also make it so the user can decode an encoded message.


![page](https://i.imgur.com/tu3CHD6.png)


#### Additional Event Handlers

- You may want to use the `onClick` event handler or you can look at some others like
- `onKeyUp`
- `onChange`

[More](https://frontarm.com/toolbox/react-events-cheatsheet/)

### The Code

You can use the [Caesar Cipher code](https://en.wikipedia.org/wiki/Caesar_cipher) below or write your own



Start with a hard-coded shift amount. Once you get your message encrypting and decrypting, try adding the functionality to change it on button click/input amount

[Here is a video demo for inspiration](https://youtu.be/8MbehO9JwY0)

<details><summary>Caesar Cipher Code</summary>

```js
const caesarShift = (str, amount) => {
  // Wrap the amount, deals with negatives
  if (amount < 0) {
    return caesarShift(str, amount + 26)
  }
  // go over each character
  let output = str.split('').map(c => {
    // check if it is a letter
    if (c.match(/[a-z]/i)) {
      // convert to number code
      let code = c.charCodeAt(0)
      // shift by number code uppercase
      if ((code >= 65) && (code <= 90)) {
        return String.fromCharCode(((code - 65 + amount) % 26) + 65)
      // shift by number lowercase
      // could just be else, but more readable to write another if statement
      } else if ((code >= 97) && (code <= 122)) {
        return String.fromCharCode(((code - 97 + amount) % 26) + 97)
      }
    // other character? Don't shift it
    } else {
      return c
    }
  })
  return output.join('')
}
```


</details>

<br>


## Bonus Bonus Bonus

## Stop Watch

- Make a new `index.html` `app.js`
- Reuse whatever code you like from your clicker counter
- Change your clicker counter into a stopwatch that goes up by 1 second or 100 milliseconds (your choice)
- You will have to research [React Lifecycle Events](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class) to make this work correctly
- Have the watch stop, start, countdown and reset
- Have the watch measure milliseconds, seconds, minutes and hours properly
- Add a lap button that marks the time the button is pressed and adds it to a list below the stopwatch
- Add a clear laps button that clears the lap list
- Style it to look awesome
