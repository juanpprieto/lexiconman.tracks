/**
 * Delete x number of characters from a chosen field
 *
 * settings:
    "Direction": "left-to-right",
    "Characters to remove": "1"
  
  * version: 1.0
*/

await plugin()

async function plugin() {
  const settings = parseSettings();
  const field = await promptFieldChoice();
  trimTracksField(field, settings)
}

function parseSettings() {
  const settings = {}
  
  // get the chosen direction
  settings.direction = _settings['Direction'];
  if (settings.direction !== 'left-to-right' && settings.direction !== 'right-to-left') {
    throw new Error('Invalid direction. Please choose either "left-to-right" or "right-to-left"');
  }

  // get the chosen characters to remove
  let _chars = _settings['Characters to remove'];
  settings.chars = parseInt(_chars)
  if (typeof settings.chars !== 'number') {
    throw new Error('Please enter the number of characters to remove');
  }

  return settings;
}

async function promptFieldChoice() {
  // fields that can be edited
  const fields = [
    "albumTitle",
    "artist",
    "comment",
    "composer",
    "extra1",
    "extra2",
    "genre",
    "grouping",
    "key",
    "label",
    "lyricist",
    "mix",
    "producer",
    "remixer",
    "title",
  ] 

  // prompt to choose a field to update
  return await _ui.showInputDialog({
    options: fields,
    message: `Choose a field`,
    default: 'title',
    type: 'info',
    input: "select"
  })
}

function trimTracksField(field, settings) {
  for (const track of _vars.tracksSelected) {
    let value = track?.[field];
    if (value) {
      let trimmedValue = value;
      switch (settings.direction) {
        case "left-to-right": 
          trimmedValue = value.substring(settings.chars); 
          break;

        case "right-to-left":
          trimmedValue = value.substring(0, (value.length - settings.chars));
          break;

        default:
          break;
      }
      
      // update the chose track field
      track[field] = trimmedValue;
      _helpers.Log(`Trimming ${settings.chars} ${field} chars from ${value} -> ${trimmedValue}`)
    }
  }
}
