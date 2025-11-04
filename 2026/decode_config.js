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
    { "name": "Rear Field Score",
      "code": "afs",
      "type": "counter"
    },
    { "name": "Front Field Score",
      "code": "ars",
      "type": "counter"
    },
    { "name": "Missed Score",
      "code": "ams",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Rear Field Score",
      "code": "tfs",
      "type": "counter"
    },
    { "name": "Front Field Score",
      "code": "trs",
      "type": "counter"
    },
    { "name": "Missed Score",
      "code": "tms",
      "type": "counter"
    }
],
  "endgame": [
    { "name": "Base Timer",
      "code": "eb",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "es",
      "type":"radio",
      "choices": {
        "sp": "Solo Park<br>",
        "sf": "Failed Solo<br>",
        "dp": "Double Park<br>",
        "dp": "Failed Double<br>",
        "na": "Not attempted"
      },
      "defaultValue": "na"
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
