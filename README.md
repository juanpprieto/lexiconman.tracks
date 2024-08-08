# lexiconman.tracks

A set of LexiconDJ plugins covering different track-level workflows.

## Install

OSX

Open the terminal and run the following command
```bash
git clone https://github.com/juanpprieto/lexiconman.tracks.git ~/Documents/Lexicon/Plugins/Lexiconman\ Tracks
```

Windows (untested)

Open the terminal and run the following command
```bash
git clone https://github.com/juanpprieto/lexiconman.tracks.git /Documents/Lexicon/Plugins/Lexiconman\ Tracks
```

## Plugins

### Delete field characters

Remove a `number` of `characters` from any supported track field. You can configure the plugin to remove from beginning or the end.

#### Settings

| Setting  | Options | Description |
| ------------- | ------------- | ------------- |
| Direction | "left-to-right" (default) or "right-to-left" | The direction to delete characters from |
| Characters to remove | integer (1 default) | The number of characters to remove |

#### Target field

The target field is chosen via a prompt when running the plugin

##### Supported fields
 - "title",
 - "artist",
 - "albumTitle",
 - "label",
 - "remixer",
 - "mix",
 - "composer",
 - "producer",
 - "grouping",
 - "lyricist",
 - "comment",
 - "key",
 - "genre",
 - "extra1",
 - "extra2"


## Have an idea for a plugin?

This repo is exclusive for plugins aiming to solve `track` related workflows in LexiconDJ.

If you have an idea open an issue and I can look into it when time allows.

