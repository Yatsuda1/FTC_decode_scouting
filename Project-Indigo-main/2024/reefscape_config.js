var config_data = `
{
  "dataFormat": "tsv",
  "title": "Reefscape Scouting 2025",
  "page_title": "REEFSCAPE",
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
      "defaultValue": "2025micmp2",
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
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "clickRestriction": "one",
      "allowableResponses": "6 7 18 19 30 31 42 43 54 55 66 67",
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
