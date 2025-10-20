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
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "",
      "required": "false"
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
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>"
      },
      "required":"false"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 999999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2026/field_image.png",
      "clickRestriction": "one",
      "allowableResponses": "13 14 15 25 26 27 28 29 30 35 36 37 38 39 40 41 42 47 48 49 50 51",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
    { "name": "L4 Coral Scores",
      "code": "ac4",
      "type": "counter"
    },
    { "name": "L3 Coral Scores",
      "code": "ac3",
      "type": "counter"
    },
    { "name": "L2 Coral Scores",
      "code": "ac2",
      "type": "counter"
    },
    { "name": "L1 Coral Scores",
      "code": "ac1",
      "type": "counter"
    },
     { "name": "Coral Drops",
      "code": "acd",
      "type": "counter"
    },
    { "name": "Processor Scores",
      "code": "aps",
      "type": "counter"
    },
    { "name": "Net Scores",
      "code": "ans",
      "type": "counter"
    },
    { "name": "Algae Drops",
      "code": "ad",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "L4 Coral Scores",
      "code": "tc4",
      "type": "counter"
    },
    { "name": "L3 Coral Scores",
      "code": "tc3",
      "type": "counter"
    },
    { "name": "L2 Coral Scores",
      "code": "tc2",
      "type": "counter"
    },
    { "name": "L1 Coral Scores",
      "code": "tc1",
      "type": "counter"
    },
        { "name": "Coral Drops",
      "code": "tcd",
      "type": "counter"
    },
    { "name": "Processor Scores",
      "code": "tps",
      "type": "counter"
    },
    { "name": "Net Scores",
      "code": "tns",
      "type": "counter"
    },
    { "name": "Algae Drops",
      "code": "tad",
      "type": "counter"
    }
  ],
  "endgame": [
    { "name": "Barge Timer",
      "code": "eb",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "bs": "Shallow Hang<br>",
        "bd": "Deep Hang<br>",
        "bp": "Parked<br>",
        "bf": "Failed Climb<br>",
        "bx": "Not attempted"
      },
      "defaultValue": "2"
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
