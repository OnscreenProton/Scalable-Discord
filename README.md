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
 - macOS: `~/Library/Application Support/discordcanary`

This fix originates from [this reddit comment](https://www.reddit.com/r/discordapp/comments/6shs9n/comment/dld24oi), made by a discord developer. This workaround for ages but could be removed at any time.

Please report any bugs, incompatabilities with powercord plugins, etc within Issues

## Preview

![Preview](https://downloadmoredownloads.download/i/puwu4ur8.gif)

## Installation
Install this plugin into your Powercord plugins folder.
```
git clone https://github.com/j0lol/Scalable-Discord
```

## Wallpaper
people keep asking for it so [here you go](https://downloadmoredownloads.download/i/az3w1vpd.png), you can find [the uncropped version here, but it looks like you need to pay or something for wallpaper quality](https://www.artstation.com/artwork/QR6eB)
