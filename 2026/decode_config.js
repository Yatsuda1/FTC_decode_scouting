var config_data = `
{
  "dataFormat": "tsv",
  "title": "Decode Scouting 2025",
  "page_title": "DECODE",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1",
        "r2": "Red-2",
        "b2": "Blue-2"
    },
    {
      { "name": "Team #",
        "code": "t",
        "type": "team",
        "min": 1,
        "max": 999999
      }
      "required":"true"
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2026/field_image.png",
      "clickRestriction": "one",
      "allowableResponses": "13 14 15 25 26 27 28 29 30 35 36 37 38 39 40 41 42 47 48 49 50 51",
      "shape": "circle 5 black red true"
      "required":"true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
    { "name": "Purple Artifacts Scored",
      "code": "ac4",
      "type": "counter"
    },
    { "name": "Green Artifacts Scored",
      "code": "ac3",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Purple Artifacts Scored",
      "code": "ac4",
      "type": "counter"
    },
    { "name": "Green Artifacts Scored",
      "code": "ac3",
      "type": "counter"
    },
    { "name": "Defence Timer",
      "code": "eb",
      "type": "timer"
    }
  ],
  "endgame": [
    { "name": "Endgame Timer",
      "code": "eb",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "np": "No Park<br>",
        "xp": "Solo Park<br>",
        "sf": "Solo Fail<br>",
        "dp": "Double Park<br>",
        "bf": "Double Fail<br>",
        "NA": "Not Attempted<br>"
      },
      "defaultValue": "NA"
    }
  ],
  "postmatch": [
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 150
    }
  ]
}`;
