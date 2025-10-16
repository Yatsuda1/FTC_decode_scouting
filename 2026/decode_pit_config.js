var config_data = `
{
    "dataFormat": "tsv",
    "title": "Decode Scouting 2026",
    "page_title": "Decode",
    "pitConfig": "true",
    "prematch": [
        {
            "name": "Team Number",
            "code": "t",
            "type": "number"
        },
        {
            "name": "Dimensions",
            "code": "dmn",
            "type": "text"
        },
        {
            "name": "Weight",
            "code": "wei",
            "type": "number",
            "defaultValue": "0"
        },
        {
            "name": "Drivetrain",
            "code": "drv",
            "type": "radio",
            "choices": {
                "s": "Swerve<br>",
                "m": "Mechanum<br>",
                "t": "Tank<br>",
                "o": "Other"
            },
            "defaultValue": "s"
        },
        {
            "name": "Can Intake Artifacts From",
            "code": "IAF",
            "type": "radio",
            "choices": {
                "g": "Ground<br>",
                "h": "Human Player<br>",
                "b": "Both<br>",
                "n": "None"
            },
            "defaultValue": "n"
        },
         {
            "name": "Can Score Artifacts?",
            "code": "ASP",
            "type": "bool"
        },
         {
            "name": "Can Sort Artifacts?",
            "code": "ASN",
            "type": "bool"
        },
        {
            "name": "Endgame",
            "code": "prk",
            "type": "radio",
            "choices": {
                "n": "No Mechanism<br>",
                "s": "Stilts<br>",
                "e": "Everybot<br>",
                "o": "Other<br>"
        }
        {
            "name": "Best Auto",
            "code": "apc",
            "type": "text",
            "size": 20,
            "maxSize": 100
        },
        {
            "name": "Comments",
            "code": "co",
            "type": "text",
            "size": 20,
            "maxSize": 250
        },
        {
            "name": "Took a picture?",
            "code": "pic",
            "type": "bool"
        }
    ],
    "Auto": [],
    "teleop": [],
    "endgame": [],
    "postmatch": []
}`;
