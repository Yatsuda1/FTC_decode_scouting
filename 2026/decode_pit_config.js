var config_data = `
{
    "dataFormat": "tsv",
    "title": "Reefscape Scouting 2025",
    "page_title": "Reefscape",
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
                "t": "Tank<br>",
                "m": "Mechanum<br>",
                "o": "Other"
            },
            "defaultValue": "s"
        },
        {
            "name": "Can Intake Algae From",
            "code": "IAF",
            "type": "radio",
            "choices": {
                "g": "Ground<br>",
                "r": "Reef<br>",
                "b": "Both<br>",
                "n": "None"
            },
            "defaultValue": "r"
        },
         {
            "name": "Can Process Algae?",
            "code": "ASP",
            "type": "bool"
        },
         {
            "name": "Can Score Algae In Net?",
            "code": "ASN",
            "type": "bool"
        },
        {
            "name": "Can Intake Coral From",
            "code": "ICF",
            "type": "radio",
            "choices": {
                "g": "Ground<br>",
                "f": "Coral Station<br>",
                "b": "Both<br>",
                "n": "None"
            },
            "defaultValue": "f"
        },
        {
            "name": "Can Score Coral L1?",
            "code": "Cl1",
            "type": "bool"
        },
        {
            "name": "Can Score Coral L2?",
            "code": "CL2",
            "type": "bool"
        },
        {
            "name": "Can Score Coral L3?",
            "code": "CL3",
            "type": "bool"
        },
        {
            "name": "Can Score Coral L4?",
            "code": "CL4",
            "type": "bool"
        },
        {
            "name": "Barge Hang",
            "code": "hng",
            "type": "radio",
            "choices": {
                "d": "Deep Hang<br>",
                "s": "Shallow Hang<br>",
                "b": "Both<br>",
                "n": "None"
            }
        },
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
