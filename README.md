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

Remove a number of characters from any of a track field.

#### Settings

#####  Direction

The direction to delete characters from. options:
 - "left-to-right" (default)
 - "right-to-left"

#####  Characters to remove

The number of characters to remove. 1 (default)

#### Supported fields
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

The target field is chosen via a prompt.

