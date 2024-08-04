# lexiconman.tracks

A set of LexiconDJ plugins covering different track-level workflows.

## Install

In OSX

Open the terminal and run the following command
```bash
git clone https://github.com/juanpprieto/lexiconman.tracks.git ~/Documents/Lexicon/Plugins/Lexiconman\ Tracks
```

## Plugins

### Delete field characters / tracks.delete.characters

Remove a `number` of `characters` from any supported track field. You can configure the plugin to remove from beginning or the end.

#### Settings

| Setting  | Options | Description |
| ------------- | ------------- | ------------- |
| Setting | options | Description |
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



