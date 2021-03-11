# Scalable Discord

Make discord smaller than usual! Use discord like you're on your phone!

To use this you must make the following modification to your discord client's `settings.json`:

```json
{
  "BACKGROUND_COLOR": "#202225",
  "IS_MAXIMIZED": false,
  "IS_MINIMIZED": false,
  "MIN_WIDTH": 0,
  "MIN_HEIGHT": 0,
  "WINDOW_BOUNDS": {
    "x": 8,
    "y": 45,
    "width": 1904,
    "height": 1027
  }
}
```
Note that the only change is the addition of MIN_HEIGHT and MIN_WIDTH under IS_MINIMIZED. This modification removes the 
default discord minimum width and height, allowing this plugin to work.

If you cannot find your `settings.json`, look in:
 - Linux: `~/.config/discordcanary/settings.json`
 - Windows: `%appdata%/discordcanary/settings.json`
## Preview

![Preview](https://downloadmoredownloads.download/i/yz40vnzn.gif)

## Installation

```
git clone https://github.com/j0lol/Scalable-Discord
```

## TODO
- Animations like mobile discord
- Better scalability for other parts of Discord