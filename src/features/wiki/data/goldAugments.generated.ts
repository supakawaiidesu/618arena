import type { Augment } from './types'

// Generated once from scraped Arena augment wiki data. This checked-in file is the app data source.
export const goldAugments = [
  {
    "id": "aim-for-the-head",
    "name": "Aim for the Head",
    "tier": "Gold",
    "description": {
      "raw": "Gain {{sti|{{as|25% critical strike chance}}}} and {{sti|{{as|25% '''bonus''' critical damage}}}}. Your {{sti|{{as|critical strike chance}}}} is capped at 50%. Convert a portion of excess {{sti|{{as|critical strike chance}}}} into {{sti|{{as|'''bonus''' critical damage}}}}.",
      "text": "Gain 25% critical strike chance and 25% bonus critical damage. Your critical strike chance is capped at 50%. Convert a portion of excess critical strike chance into bonus critical damage."
    },
    "levels": [
      {
        "level": 1,
        "raw": "50% convert ratio.",
        "text": "50% convert ratio."
      },
      {
        "level": 2,
        "raw": "60% convert ratio.",
        "text": "60% convert ratio."
      }
    ],
    "notes": {
      "raw": "* Aim for the Head nullifies the global, excess {{sti|{{as|critical strike chance}}}} to {{sti|{{as|adaptive force}}}} conversion.{{bug|2}}\n* Aim for the Head locks your {{sti|{{as|critical strike chance}}}} at 50%, preventing you from gaining more than {{sti|{{as|25% '''bonus''' critical damage}}}} from {{iis|Sword of the Divine}} {{nie|Excoriate}}.\n",
      "text": "* Aim for the Head nullifies the global, excess critical strike chance to adaptive force conversion.\n* Aim for the Head locks your critical strike chance at 50%, preventing you from gaining more than 25% bonus critical damage from Sword of the Divine Excoriate."
    },
    "references": {
      "augments": [],
      "champions": [],
      "items": [
        "Sword of the Divine"
      ],
      "runes": []
    },
    "tags": [
      "adaptive",
      "crit"
    ]
  },
  {
    "id": "all-for-you",
    "name": "All For You",
    "tier": "Gold",
    "description": {
      "raw": "The effectiveness of your {{tip|heals}} and {{tip|shields}} is increased on allied champions.",
      "text": "The effectiveness of your heals and shields is increased on allied champions."
    },
    "levels": [
      {
        "level": 1,
        "raw": "Increased by 25%.",
        "text": "Increased by 25%."
      },
      {
        "level": 2,
        "raw": "Increased by 40%.",
        "text": "Increased by 40%."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "healing",
      "shield"
    ]
  },
  {
    "id": "and-my-axe",
    "name": "And My Axe!",
    "tier": "Gold",
    "description": {
      "raw": "{{as|Automatically}} cast {{cai|Undertow|Olaf}}, throwing an axe at the nearest {{tip|sight|visible}} enemy champion within 950 units. Enemies hit are dealt {{as|physical damage}}, {{tip|slow|slowed}} for {{fd|1.5}} seconds and have 20% reduced {{sti|{{as|armor}}}} and {{sti|{{as|magic resistance}}}} for 4 seconds ({{sti|12 seconds cooldown}}). The caster can pick up the axe by walking within 250 units of its landing location, reducing the effect's {{sti|'''current''' cooldown}} to {{fd|1.5}} seconds or immediately resetting it if that has already elapsed. The axe has a width of {{tip|er|icononly=true}} 180 units and can additionally hit targets in a {{tip|cr|icononly=true}} 100-unit radius upon landing.",
      "text": "Automatically cast Undertow, throwing an axe at the nearest visible enemy champion within 950 units. Enemies hit are dealt physical damage, slowed for 1.5 seconds and have 20% reduced armor and magic resistance for 4 seconds (12 seconds cooldown). The caster can pick up the axe by walking within 250 units of its landing location, reducing the effect's current cooldown to 1.5 seconds or immediately resetting it if that has already elapsed. The axe has a width of 180 units and can additionally hit targets in a 100-unit radius upon landing."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{pp|60 + 5*x}} {{as|(+ 80% '''bonus''' AD)}} {{as|(+ 45% AP)}} {{as|physical damage}}.</li><li>{{tip|slow|Slowed}} by 25%.</li></ul>",
        "text": "- 60 + 5*x (+ 80% bonus AD) (+ 45% AP) physical damage.\n- Slowed by 25%."
      },
      {
        "level": 2,
        "raw": "<ul><li>{{pp|180 + 5*x}} {{as|(+ 80% '''bonus''' AD)}} {{as|(+ 45% AP)}} {{as|physical damage}}.</li><li>{{tip|slow|Slowed}} by 45%.</li></ul>",
        "text": "- 180 + 5*x (+ 80% bonus AD) (+ 45% AP) physical damage.\n- Slowed by 45%."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Olaf"
      ],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "apex-inventor",
    "name": "Apex Inventor",
    "tier": "Gold",
    "description": {
      "raw": "Grants {{sti|ability haste|{{as|item haste|ability haste}}}}.",
      "text": "Grants item haste ability haste."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|ability haste|{{as|100 item haste|ability haste}}}}, which is equivalent to {{sti|50% cooldown reduction}} for items.",
        "text": "100 item haste ability haste, which is equivalent to 50% cooldown reduction for items."
      },
      {
        "level": 2,
        "raw": "{{sti|ability haste|{{as|300 item haste|ability haste}}}}, which is equivalent to {{sti|75% cooldown reduction}} for items.",
        "text": "300 item haste ability haste, which is equivalent to 75% cooldown reduction for items."
      }
    ],
    "notes": {
      "raw": "{| class=\"article-table article-table-selected\" style=\"width: 750px;\n! rowspan=\"1\" colspan=\"11\" style=\"width:150px; text-align:center;\" | Item Cooldowns\n|-{{#vardefine:AIHaste|300}}\n! style=\"text-align:center;\" |Items\n! style=\"text-align:center;\" |Base Cooldown\n! style=\"text-align:center;\" |Reduced Cooldown with [[File:Apex Inventor ar augment.png|35px|link=|An icon for the Arena augment Apex Inventor]] Apex Inventor\n|-\n! style=\"text-align:center;\" | {{ii|Diadem of Songs|icononly=yes}}\n| style=\"text-align:center;\" |{{fd|1}} \n| style=\"text-align:center;\" |{{fd|{{#expr:(1-1*(1-1/(1+({{#var:AIHaste}})/100))) round 2}}}}\n|-\n! style=\"text-align:center;\" | {{ii|Sheen|icononly=yes}}{{ii|Iceborn Gauntlet|icononly=yes}}{{ii|Lich Bane|icononly=yes}}{{ii|Trinity Force|icononly=yes}}{{ii|Dusk and Dawn|icononly=yes}}\n| style=\"text-align:center;\" |{{fd|1.5}} \n| style=\"text-align:center;\" |{{fd|{{#expr:(1.5-1.5*(1-1/(1+({{#var:AIHaste}})/100))) round 2}}}}\n|-\n! style=\"text-align:center;\" | {{ii|Malignance|icononly=yes}}\n| style=\"text-align:center;\" |3\n| style=\"text-align:center;\" |{{fd|{{#expr:(3-3*(1-1/(1+({{#var:AIHaste}})/100))) round 2}}}}\n|-\n! style=\"text-align:center;\" | {{ii|Unending Despair|icononly=yes}}\n| style=\"text-align:center;\" |4\n| style=\"text-align:center;\" |{{#expr:(4-4*(1-1/(1+({{#var:AIHaste}})/100))) round 2}}\n|-\n! style=\"text-align:center;\" | {{ii|Eclipse|icononly=yes}}\n| style=\"text-align:center;\" |6\n| style=\"text-align:center;\" |{{#expr:(6-6*(1-1/(1+({{#var:AIHaste}})/100))) round 2}}\n|-\n! style=\"text-align:center;\" | {{ii|Tear of the Goddess|icononly=true}}{{ii|Archangel's Staff|icononly=yes}}{{ii|Fimbulwinter|icononly=yes}}{{ii|Manamune|icononly=yes}}{{ii|Winter's Approach|icononly=yes}}{{ii|Whispering Circlet|icononly=yes}}\n| style=\"text-align:center;\" |8\n| style=\"text-align:center;\" |{{#expr:(8-8*(1-1/(1+({{#var:AIHaste}})/100))) round 2}}\n|-\n! style=\"text-align:center;\" | {{ii|Imperial Mandate|icononly=yes}}\n| style=\"text-align:center;\" |9 \n| style=\"text-align:center;\" |{{fd|{{#expr:(9-9*(1-1/(1+({{#var:AIHaste}})/100))) round 2}}}}\n|-\n! style=\"text-align:center;\" | {{ii|Tiamat|icononly=yes}}{{ii|Profane Hydra|icononly=yes}}{{ii|Ravenous Hydra|icononly=yes}}{{ii|Titanic Hydra|icononly=yes}}{{ii|Sundered Sky|icononly=yes}}\n| style=\"text-align:center;\" |10 \n| style=\"text-align:center;\" |{{#expr:(10-10*(1-1/(1+({{#var:AIHaste}})/100))) round 2}}\n|-\n! style=\"text-align:center;\" | {{ii|Luden's Echo|icononly=yes}}\n| style=\"text-align:center;\" |12\n| style=\"text-align:center;\" |{{#expr:(12-12*(1-1/(1+({{#var:AIHaste}})/100))) round 2}}\n|-\n! style=\"text-align:center;\" | {{ii|Blade of the Ruined King|icononly=yes}}{{ii|Stridebreaker|icononly=yes}}\n| style=\"text-align:center;\" |15 \n| style=\"text-align:center;\" |{{fd|{{#expr:(15-15*(1-1/(1+({{#var:AIHaste}})/100))) round 2}}}}\n|-\n! style=\"text-align:center;\" |{{ii|Statikk Shiv|icononly=yes}}\n| style=\"text-align:center;\" |{{pp|25 to 10 for 6|1;8 to 12}}\n| style=\"text-align:center;\" |{{pp|12.5 to 5 for 6|1;8 to 12}}\n|-\n! style=\"text-align:center;\" | {{ii|Banshee's Veil|icononly=yes}}{{ii|Experimental Hexplate|icononly=yes}}{{ii|Heartsteel|icononly=yes}}{{ii|Horizon Focus|icononly=yes}}{{ii|Stormsurge|icononly=yes}}{{ii|Yun Tal Wildarrows|icononly=yes}}\n| style=\"text-align:center;\" |30 \n| style=\"text-align:center;\" |{{#expr:(30-30*(1-1/(1+({{#var:AIHaste}})/100))) round 2}}\n|-\n! style=\"text-align:center;\" | {{ii|Hextech Alternator|icononly=yes}}{{ii|Scout's Slingshot|icononly=yes}}{{ii|Edge of Night|icononly=yes}}{{ii|Hextech Rocketbelt|icononly=yes}}\n| style=\"text-align:center;\" |40 \n| style=\"text-align:center;\" |{{#expr:(40-40*(1-1/(1+({{#var:AIHaste}})/100))) round 2}}\n|-\n! style=\"text-align:center;\" | {{ii|Youmuu's Ghostblade|icononly=yes}}{{ii|Zeke's Convergence|icononly=yes}}{{ii|Fiendhunter Bolts|icononly=yes}}{{ii|Lifeline|icononly=yes}}{{ii|Spectral Cutlass|icononly=yes}}\n| style=\"text-align:center;\" |45 \n| style=\"text-align:center;\" |{{fd|{{#expr:(45-45*(1-1/(1+({{#var:AIHaste}})/100))) round 2}}}}\n|-\n! style=\"text-align:center;\" | {{ii|Verdant Barrier|icononly=yes}}{{ii|Cryptbloom|icononly=yes}}{{ii|Knight's Vow|icononly=yes}}{{ii|Hextech Gunblade|icononly=yes}}{{ii|Actualizer|icononly=yes}}\n| style=\"text-align:center;\" |60 \n| style=\"text-align:center;\" |{{#expr:(60-60*(1-1/(1+({{#var:AIHaste}})/100))) round 2}}\n|-\n! style=\"text-align:center;\" | {{ii|Shurelya's Battlesong|icononly=yes}} {{ii|Hexdrinker|icononly=yes}}{{ii|Immortal Shieldbow|icononly=yes}}{{ii|Maw of Malmortius|icononly=yes}}{{ii|Seraph's Embrace|icononly=yes}}{{ii|Sterak's Gage|icononly=yes}}\n| style=\"text-align:center;\" |75 \n| style=\"text-align:center;\" |{{fd|{{#expr:(75-75*(1-1/(1+({{#var:AIHaste}})/100))) round 2}}}}\n|-\n! style=\"text-align:center;\" |{{ii|Quicksilver Sash|icononly=yes}}{{ii|Locket of the Iron Solari|icononly=yes}}{{ii|Mercurial Scimitar|icononly=yes}}{{ii|Randuin's Omen|icononly=yes}}{{ii|Redemption|icononly=yes}}{{ii|Protoplasm Harness|icononly=yes}}\n{{ii|Umbral Glaive|icononly=yes}}\n| style=\"text-align:center;\" |90\n| style=\"text-align:center;\" |{{#expr:(90-90*(1-1/(1+({{#var:AIHaste}})/100))) round 2}}\n|-\n! style=\"text-align:center;\" | {{ii|Mikael's Blessing|icononly=true}}{{ii|Zhonya's Hourglass|icononly=true}}\n| style=\"text-align:center;\" |120\n| style=\"text-align:center;\" |{{#expr:(120-120*(1-1/(1+({{#var:AIHaste}})/100))) round 2}}\n        ",
      "text": "{| class=\"article-table article-table-selected\" style=\"width: 750px;\n! rowspan=\"1\" colspan=\"11\" style=\"width:150px; text-align:center;\" | Item Cooldowns\n|-300\n! style=\"text-align:center;\" |Items\n! style=\"text-align:center;\" |Base Cooldown\n! style=\"text-align:center;\" |Reduced Cooldown with Apex Inventor\n|-\n! style=\"text-align:center;\" | Diadem of Songs\n| style=\"text-align:center;\" |1\n| style=\"text-align:center;\" |\n|-\n! style=\"text-align:center;\" | SheenIceborn GauntletLich BaneTrinity ForceDusk and Dawn\n| style=\"text-align:center;\" |1.5\n| style=\"text-align:center;\" |\n|-\n! style=\"text-align:center;\" | Malignance\n| style=\"text-align:center;\" |3\n| style=\"text-align:center;\" |\n|-\n! style=\"text-align:center;\" | Unending Despair\n| style=\"text-align:center;\" |4\n| style=\"text-align:center;\" |\n|-\n! style=\"text-align:center;\" | Eclipse\n| style=\"text-align:center;\" |6\n| style=\"text-align:center;\" |\n|-\n! style=\"text-align:center;\" | Tear of the GoddessArchangel's StaffFimbulwinterManamuneWinter's ApproachWhispering Circlet\n| style=\"text-align:center;\" |8\n| style=\"text-align:center;\" |\n|-\n! style=\"text-align:center;\" | Imperial Mandate\n| style=\"text-align:center;\" |9\n| style=\"text-align:center;\" |\n|-\n! style=\"text-align:center;\" | TiamatProfane HydraRavenous HydraTitanic HydraSundered Sky\n| style=\"text-align:center;\" |10\n| style=\"text-align:center;\" |\n|-\n! style=\"text-align:center;\" | Luden's Echo\n| style=\"text-align:center;\" |12\n| style=\"text-align:center;\" |\n|-\n! style=\"text-align:center;\" | Blade of the Ruined KingStridebreaker\n| style=\"text-align:center;\" |15\n| style=\"text-align:center;\" |\n|-\n! style=\"text-align:center;\" |Statikk Shiv\n| style=\"text-align:center;\" |25 to 10 for 6\n| style=\"text-align:center;\" |12.5 to 5 for 6\n|-\n! style=\"text-align:center;\" | Banshee's VeilExperimental HexplateHeartsteelHorizon FocusStormsurgeYun Tal Wildarrows\n| style=\"text-align:center;\" |30\n| style=\"text-align:center;\" |\n|-\n! style=\"text-align:center;\" | Hextech AlternatorScout's SlingshotEdge of NightHextech Rocketbelt\n| style=\"text-align:center;\" |40\n| style=\"text-align:center;\" |\n|-\n! style=\"text-align:center;\" | Youmuu's GhostbladeZeke's ConvergenceFiendhunter BoltsLifelineSpectral Cutlass\n| style=\"text-align:center;\" |45\n| style=\"text-align:center;\" |\n|-\n! style=\"text-align:center;\" | Verdant BarrierCryptbloomKnight's VowHextech GunbladeActualizer\n| style=\"text-align:center;\" |60\n| style=\"text-align:center;\" |\n|-\n! style=\"text-align:center;\" | Shurelya's Battlesong HexdrinkerImmortal ShieldbowMaw of MalmortiusSeraph's EmbraceSterak's Gage\n| style=\"text-align:center;\" |75\n| style=\"text-align:center;\" |\n|-\n! style=\"text-align:center;\" |Quicksilver SashLocket of the Iron SolariMercurial ScimitarRanduin's OmenRedemptionProtoplasm Harness\nUmbral Glaive\n| style=\"text-align:center;\" |90\n| style=\"text-align:center;\" |\n|-\n! style=\"text-align:center;\" | Mikael's BlessingZhonya's Hourglass\n| style=\"text-align:center;\" |120\n| style=\"text-align:center;\" |"
    },
    "references": {
      "augments": [
        "Apex Inventor"
      ],
      "champions": [],
      "items": [
        "Actualizer",
        "Archangel's Staff",
        "Banshee's Veil",
        "Blade of the Ruined King",
        "Cryptbloom",
        "Diadem of Songs",
        "Dusk and Dawn",
        "Eclipse",
        "Edge of Night",
        "Experimental Hexplate",
        "Fiendhunter Bolts",
        "Fimbulwinter",
        "Heartsteel",
        "Hexdrinker",
        "Hextech Alternator",
        "Hextech Gunblade",
        "Hextech Rocketbelt",
        "Horizon Focus",
        "Iceborn Gauntlet",
        "Immortal Shieldbow",
        "Imperial Mandate",
        "Knight's Vow",
        "Lich Bane",
        "Lifeline",
        "Locket of the Iron Solari",
        "Luden's Echo",
        "Malignance",
        "Manamune",
        "Maw of Malmortius",
        "Mercurial Scimitar",
        "Mikael's Blessing",
        "Profane Hydra",
        "Protoplasm Harness",
        "Quicksilver Sash",
        "Randuin's Omen",
        "Ravenous Hydra",
        "Redemption",
        "Scout's Slingshot",
        "Seraph's Embrace",
        "Sheen",
        "Shurelya's Battlesong",
        "Spectral Cutlass",
        "Statikk Shiv",
        "Sterak's Gage",
        "Stormsurge",
        "Stridebreaker",
        "Sundered Sky",
        "Tear of the Goddess",
        "Tiamat",
        "Titanic Hydra",
        "Trinity Force",
        "Umbral Glaive",
        "Unending Despair",
        "Verdant Barrier",
        "Whispering Circlet",
        "Winter's Approach",
        "Youmuu's Ghostblade",
        "Yun Tal Wildarrows",
        "Zeke's Convergence",
        "Zhonya's Hourglass"
      ],
      "runes": []
    },
    "tags": [
      "ability-haste",
      "item",
      "shield"
    ]
  },
  {
    "id": "banner-of-command",
    "name": "Banner of Command",
    "tier": "Gold",
    "description": {
      "raw": "Replaces {{si|Flee}} with ''{{si|Banner of Command}}''.<br><br>[[File:Banner of Command augment spell.png|20px|link=]] {{sbc|Banner of Command:}} {{#invoke:SpellData|geteffect|Banner of Command}}",
      "text": "Replaces Flee with Banner of Command.\n\nBanner of Command: geteffect"
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>15% '''bonus''' {{sti|size}}, {{sti|{{as|health}}}}, {{sti|{{as|attack damage}}}}, {{sti|{{as|ability power}}}} and {{sti|{{as|attack speed}}}}.</li><li>10 seconds duration.</li></ul>",
        "text": "- 15% bonus size, health, attack damage, ability power and attack speed.\n- 10 seconds duration."
      },
      {
        "level": 2,
        "raw": "<ul><li>25% '''bonus''' {{sti|size}}, {{sti|{{as|health}}}}, {{sti|{{as|attack damage}}}}, {{sti|{{as|ability power}}}} and {{sti|{{as|attack speed}}}}.</li><li>15 seconds duration.</li></ul>",
        "text": "- 25% bonus size, health, attack damage, ability power and attack speed.\n- 15 seconds duration."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "attack-speed",
      "flee-replacement",
      "healing"
    ]
  },
  {
    "id": "big-brain",
    "name": "Big Brain",
    "tier": "Gold",
    "description": {
      "raw": "At the start of the combat phase in each round, gain a {{tip|shield}} that absorbs damage equal to a multiple of your {{sti|{{as|AP}}}} and lasts until destroyed.",
      "text": "At the start of the combat phase in each round, gain a shield that absorbs damage equal to a multiple of your AP and lasts until destroyed."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|300% AP}}}} shield.",
        "text": "300% AP shield."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|400% AP}}}} shield.<br><br>{{sbc|Max-level effect:}} Refresh the shield after 3 seconds out of combat.",
        "text": "400% AP shield.\n\nMax-level effect: Refresh the shield after 3 seconds out of combat."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "shield"
    ]
  },
  {
    "id": "big-dragon-energy",
    "name": "Big Dragon Energy",
    "tier": "Gold",
    "description": {
      "raw": "Start combat with full {{tip|Fury|{{as|Dragon Fury}}}} and it no longer decays while in {{ai|Dragon's Descent|Shyvana|Dragon Form}}.<br><br>While in {{ai|Dragon's Descent|Shyvana|Dragon Form}} {{ai|Emberstrike|Shyvana}}'s final strike does 200% {{tip|true damage}}.<br><br>''This augment is only available for {{ci|Shyvana}}.''",
      "text": "Start combat with full Dragon Fury and it no longer decays while in Dragon Form.\n\nWhile in Dragon Form Emberstrike's final strike does 200% true damage.\n\nThis augment is only available for Shyvana."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Shyvana"
      ],
      "items": [],
      "runes": []
    },
    "tags": [
      "champion-specific"
    ]
  },
  {
    "id": "blood-brother",
    "name": "Blood Brother",
    "tier": "Gold",
    "description": {
      "raw": "Gain {{cai|Hemorrhage|Darius}}.<br><br>{{sbc|Passive:}} Damaging basic attacks and abilities apply a stack of ''Hemorrhage'' to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 5 times.<br><br>{{sbc|Hemorrhage:}} For each stack, the target is dealt {{ft|{{as|{{pp|15 to 45}}|physical damage}} {{as|(+ 40% AD)}} {{as|'''total''' physical damage}}|{{as|{{pp|15/4 to 45/4}}|physical damage}} {{as|(+ {{ap|40/4}}% AD)}} {{as|physical damage}} every {{fd|1.25}} seconds}} over the duration, up to a maximum of{{ft|{{as|{{pp|15*5 to 45*5}}|physical damage}} {{as|(+ {{ap|40*5}}% AD)}} {{as|'''total''' physical damage}} over the duration.|{{as|{{pp|(15/4)*5 to (45/4)*5}}|physical damage}} {{as|(+ {{ap|(40/4)*5}}% AD)}} {{as|physical damage}} with each tick.}}<br><br>{{sbc|Noxian Might:}} When you apply 5 stacks of ''Hemorrhage'' to an enemy champion, become empowered with ''Noxian Might'' for 5 seconds, granting you {{pp|30 to 75 for 10;90 to 120 for 3;150 to 270 for 5|formula=30 + 5 per level until level 10, then + 15 per level until level 13, then + 30 per level|color=AD}} {{sti|{{as|'''bonus''' attack damage}}}}.<br><br>''This augment is only available for {{ci|Draven}}.''",
      "text": "Gain Hemorrhage.\n\nPassive: Damaging basic attacks and abilities apply a stack of Hemorrhage to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 5 times.\n\nHemorrhage: For each stack, the target is dealt 15 to 45 physical damage (+ 40% AD) total physical damage over the duration, up to a maximum of15*5 to 45*5 physical damage (+ 40*5% AD) total physical damage over the duration.\n\nNoxian Might: When you apply 5 stacks of Hemorrhage to an enemy champion, become empowered with Noxian Might for 5 seconds, granting you 30 to 75 for 10;90 to 120 for 3;150 to 270 for 5 bonus attack damage.\n\nThis augment is only available for Draven."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Darius",
        "Draven"
      ],
      "items": [],
      "runes": []
    },
    "tags": [
      "champion-specific"
    ]
  },
  {
    "id": "bodyguard",
    "name": "Bodyguard",
    "tier": "Gold",
    "description": {
      "raw": "{{tip|dash|Dashing}} or {{tip|blink|blinking}} grants a {{pp|35 to 250}} {{tip|shield|base shield}}, increased by {{pp|125-35 to 500-250|10 to 80 by 10|label1=Seconds|type=the source spell's '''base''' cooldown|formula=Linear interpolation between [ 125{{minus}}(35 base) ] minimum shield at 10 second base cooldown (before haste) of the dash or blink used, and [ 500{{minus}}(250 base) ] maximum shield at 80 seconds.}} for {{fd|2.5}} seconds ({{sti|{{fd|0.1}} seconds cooldown}} per {{tip|cast instance}}; {{sti|3 seconds cooldown}} per source). Any allies you pass through are also granted the same shield you have generated ({{tip|cr|icononly=true}} 200 radius of collision). Up to 5 shields generated can stack on a given champion, refreshing with each generation.",
      "text": "Dashing or blinking grants a 35 to 250 base shield, increased by 125-35 to 500-250 for 2.5 seconds (0.1 seconds cooldown per cast instance; 3 seconds cooldown per source). Any allies you pass through are also granted the same shield you have generated ( 200 radius of collision). Up to 5 shields generated can stack on a given champion, refreshing with each generation."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "mobility",
      "shield"
    ]
  },
  {
    "id": "bread-and-butter",
    "name": "Bread And Butter",
    "tier": "Gold",
    "description": {
      "raw": "Your champion's first basic ability ''(Q)'' gains {{sti|{{as|ability haste}}}}.",
      "text": "Your champion's first basic ability (Q) gains ability haste."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|100 ability haste}}}}.",
        "text": "100 ability haste."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|200 ability haste}}}}.<br><br>{{sbc|Max-level effect:}} Casting your first basic ability grants you {{sti|{{as|40% '''bonus''' movement speed}}}} for 2 seconds.",
        "text": "200 ability haste.\n\nMax-level effect: Casting your first basic ability grants you 40% bonus movement speed for 2 seconds."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "ability-haste"
    ]
  },
  {
    "id": "bread-and-cheese",
    "name": "Bread And Cheese",
    "tier": "Gold",
    "description": {
      "raw": "Your champion's third basic ability ''(E)'' gains {{sti|{{as|ability haste}}}}.",
      "text": "Your champion's third basic ability (E) gains ability haste."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|100 ability haste}}}}.",
        "text": "100 ability haste."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|200 ability haste}}}}.<br><br>{{sbc|Max-level effect:}} Casting your third basic ability grants you {{sti|{{as|40% '''bonus''' movement speed}}}} for 2 seconds.",
        "text": "200 ability haste.\n\nMax-level effect: Casting your third basic ability grants you 40% bonus movement speed for 2 seconds."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "ability-haste"
    ]
  },
  {
    "id": "bread-and-jam",
    "name": "Bread And Jam",
    "tier": "Gold",
    "description": {
      "raw": "Your champion's second basic ability ''(W)'' gains {{sti|{{as|ability haste}}}}.",
      "text": "Your champion's second basic ability (W) gains ability haste."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|100 ability haste}}}}.",
        "text": "100 ability haste."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|200 ability haste}}}}.<br><br>{{sbc|Max-level effect:}} Casting your second basic ability grants you {{sti|{{as|40% '''bonus''' movement speed}}}} for 2 seconds.",
        "text": "200 ability haste.\n\nMax-level effect: Casting your second basic ability grants you 40% bonus movement speed for 2 seconds."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "ability-haste"
    ]
  },
  {
    "id": "celestial-body",
    "name": "Celestial Body",
    "tier": "Gold",
    "description": {
      "raw": "Gain {{sti|{{as|'''bonus''' health}}}}, but reduce your damage output.",
      "text": "Gain bonus health, but reduce your damage output."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{sti|{{as|1000 '''bonus''' health}}}}.</li><li>Damage reduced by 10%.</li></ul>",
        "text": "- 1000 bonus health.\n- Damage reduced by 10%."
      },
      {
        "level": 2,
        "raw": "<ul><li>{{sti|{{as|2000 '''bonus''' health}}}}.</li><li>Damage reduced by 5%.</li></ul>",
        "text": "- 2000 bonus health.\n- Damage reduced by 5%."
      },
      {
        "level": 3,
        "raw": "<ul><li>{{sti|{{as|3000 '''bonus''' health}}}}.</li><li>Damage reduction is removed.</li></ul>",
        "text": "- 3000 bonus health.\n- Damage reduction is removed."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "healing"
    ]
  },
  {
    "id": "combo-master",
    "name": "Combo Master",
    "tier": "Gold",
    "description": {
      "raw": "Gain the {{ri|Electrocute}} and {{ri|Phase Rush}} keystone runes.<br><br>''See [[Arena#Runes]] for Arena-specific overrides on these runes.''",
      "text": "Gain the Electrocute and Phase Rush keystone runes.\n\nSee Arena#Runes for Arena-specific overrides on these runes."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": [
        "Electrocute",
        "Phase Rush"
      ]
    },
    "tags": []
  },
  {
    "id": "critical-healing",
    "name": "Critical Healing",
    "tier": "Gold",
    "description": {
      "raw": "Your {{tip|heals}} and {{tip|shields}} now have a chance equal to your {{sti|{{as|critical strike chance}}}} to increase. The effectiveness benefits from your {{sti|critical strike damage|{{as|crit damage}}}}. Additionally, gain {{sti|{{as|25% critical strike chance}}}}.",
      "text": "Your heals and shields now have a chance equal to your critical strike chance to increase. The effectiveness benefits from your crit damage. Additionally, gain 25% critical strike chance."
    },
    "levels": [
      {
        "level": 1,
        "raw": "Increase by 35% + {{sti|{{as|crit damage}}}}.",
        "text": "Increase by 35% + crit damage."
      },
      {
        "level": 2,
        "raw": "Increase by 55% + {{sti|{{as|crit damage}}}}.",
        "text": "Increase by 55% + crit damage."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "crit",
      "healing",
      "shield"
    ]
  },
  {
    "id": "critical-rhythm",
    "name": "Critical Rhythm",
    "tier": "Gold",
    "description": {
      "raw": "Your {{tip|critical strikes}} grant you {{sti|{{as|6% '''bonus''' attack speed}}}} for 6 seconds, stacking up to several times. Additionally, gain {{sti|{{as|25% critical strike chance}}}}.",
      "text": "Your critical strikes grant you 6% bonus attack speed for 6 seconds, stacking up to several times. Additionally, gain 25% critical strike chance."
    },
    "levels": [
      {
        "level": 1,
        "raw": "Stacks up to 10 times, for a total of {{sti|{{as|60% attack speed}}}}.",
        "text": "Stacks up to 10 times, for a total of 60% attack speed."
      },
      {
        "level": 2,
        "raw": "Stacks up to 20 times, for a total of {{sti|{{as|120% attack speed}}}}.",
        "text": "Stacks up to 20 times, for a total of 120% attack speed."
      },
      {
        "level": 3,
        "raw": "Stacks up to 30 times, for a total of {{sti|{{as|180% attack speed}}}}.<br><br>{{sbc|Max-level effect:}} {{as|Attack speed cap|as}} increases to {{as|10|as}}.",
        "text": "Stacks up to 30 times, for a total of 180% attack speed.\n\nMax-level effect: Attack speed cap increases to 10."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "attack-speed",
      "crit"
    ]
  },
  {
    "id": "dark-blessing",
    "name": "Dark Blessing",
    "tier": "Gold",
    "description": {
      "raw": "The next instance of {{tip|healing}} or {{tip|shielding}} you grant to an ally generates {{as|5 Cursed Power}} ({{sti|{{fd|1.5}} seconds cooldown}}). You can generate up to {{as|30|Curse}} (+ {{as|20|Curse}}{{times}}number of Curse augments equipped by you and your teammate) {{as|Cursed Power}} per round. Permanently gain {{sti|{{as|ability haste}}}}\tequal to {{as|a percentage of your Cursed Power}}.",
      "text": "The next instance of healing or shielding you grant to an ally generates 5 Cursed Power (1.5 seconds cooldown). You can generate up to 30 Curse (+ 20 Cursexnumber of Curse augments equipped by you and your teammate) Cursed Power per round. Permanently gain ability haste equal to a percentage of your Cursed Power."
    },
    "levels": [
      {
        "level": 1,
        "raw": "30% convert rate.",
        "text": "30% convert rate."
      },
      {
        "level": 2,
        "raw": "55% convert rate.",
        "text": "55% convert rate."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "ability-haste",
      "curse",
      "healing",
      "shield"
    ]
  },
  {
    "id": "dawnbringers-resolve",
    "name": "Dawnbringer's Resolve",
    "tier": "Gold",
    "description": {
      "raw": "Upon dropping below {{sti|{{as|60% '''maximum''' health}}}} for the first time, you are {{tip|heal|healed}} for {{sti|{{as|a certain amount of '''maximum''' health}}}} over 3 seconds.",
      "text": "Upon dropping below 60% maximum health for the first time, you are healed for a certain amount of maximum health over 3 seconds."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|Heal}} for {{sti|{{as|25% '''maximum''' health}}}}.",
        "text": "Heal for 25% maximum health."
      },
      {
        "level": 2,
        "raw": "{{sti|Heal}} for {{sti|{{as|30% '''maximum''' health}}}}.<br><br>{{sbc|Max-level effect:}} Dropping below {{sti|{{as|30% '''maximum''' health}}}} will trigger this effect again.",
        "text": "Heal for 30% maximum health.\n\nMax-level effect: Dropping below 30% maximum health will trigger this effect again."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "healing"
    ]
  },
  {
    "id": "deathtouch",
    "name": "Deathtouch",
    "tier": "Gold",
    "description": {
      "raw": "Basic attacks against {{tip|champions}} {{tip|on-hit}} generate {{as|2 Cursed Power}}. You can generate up to {{as|30|Curse}} (+ {{as|20|Curse}}{{times}}number of Curse augments equipped by you and your teammate) {{as|Cursed Power}} per round. Permanently gain {{as|'''bonus''' magic damage}} {{tip|on-hit}} equal to {{as|a percentage of your Cursed Power}}.",
      "text": "Basic attacks against champions on-hit generate 2 Cursed Power. You can generate up to 30 Curse (+ 20 Cursexnumber of Curse augments equipped by you and your teammate) Cursed Power per round. Permanently gain bonus magic damage on-hit equal to a percentage of your Cursed Power."
    },
    "levels": [
      {
        "level": 1,
        "raw": "20% convert rate.",
        "text": "20% convert rate."
      },
      {
        "level": 2,
        "raw": "35% convert rate.",
        "text": "35% convert rate."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "curse"
    ]
  },
  {
    "id": "defensive-maneuvers",
    "name": "Defensive Maneuvers",
    "tier": "Gold",
    "description": {
      "raw": "Replaces {{si|Flee}} with ''{{si|Defensive Maneuvers}}''.<br><br>[[File:Defensive Maneuvers augment spell.png|20px|link=]] {{sbc|Defensive Maneuvers:}} {{#invoke:SpellData|geteffect|Defensive Maneuvers}}<br><br>{{#invoke:SpellData|geteffect2|Defensive Maneuvers}}<br><br>{{#invoke:SpellData|geteffect3|Defensive Maneuvers}}",
      "text": "Replaces Flee with Defensive Maneuvers.\n\nDefensive Maneuvers: geteffect\n\ngeteffect2\n\ngeteffect3"
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|30% '''bonus''' movement speed}}}}.",
        "text": "30% bonus movement speed."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|50% '''bonus''' movement speed}}}}.<br><br>{{sbc|Max-level effect:}} This casts a second time 2.5 seconds after you cast it.",
        "text": "50% bonus movement speed.\n\nMax-level effect: This casts a second time 2.5 seconds after you cast it."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "flee-replacement"
    ]
  },
  {
    "id": "demons-dance",
    "name": "Demon's Dance",
    "tier": "Gold",
    "description": {
      "raw": "Gain the {{ri|Fleet Footwork}} and {{ri|Grasp of the Undying}} keystone runes.<br><br>''See [[Arena#Runes]] for Arena-specific overrides on these runes.''",
      "text": "Gain the Fleet Footwork and Grasp of the Undying keystone runes.\n\nSee Arena#Runes for Arena-specific overrides on these runes."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": [
        "Fleet Footwork",
        "Grasp of the Undying"
      ]
    },
    "tags": []
  },
  {
    "id": "demonic-clasp",
    "name": "Demonic Clasp",
    "tier": "Gold",
    "description": {
      "raw": "Replaces {{si|Flee}} with ''{{si|Demonic Clasp}}''.<br><br>[[File:Demonic Clasp augment spell.png|20px|link=]] {{sbc|Demonic Clasp:}} {{#invoke:SpellData|geteffect|Demonic Clasp}}",
      "text": "Replaces Flee with Demonic Clasp.\n\nDemonic Clasp: geteffect"
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>1 claw.</li><li>{{as|100|magic damage}} {{as|(+ 40% AP)}} {{as|magic damage}}.</li></ul>",
        "text": "- 1 claw.\n- 100 magic damage (+ 40% AP) magic damage."
      },
      {
        "level": 2,
        "raw": "<ul><li>3 claws.</li><li>{{as|200|magic damage}} {{as|(+ 40% AP)}} {{as|magic damage}}.</li></ul>",
        "text": "- 3 claws.\n- 200 magic damage (+ 40% AP) magic damage."
      },
      {
        "level": 3,
        "raw": "<ul><li>5 claws.</li><li>{{as|250|magic damage}} {{as|(+ 40% AP)}} {{as|magic damage}}.</li></ul><br>{{sbc|Max-level effect:}} Each claw swipes for 3 times.",
        "text": "- 5 claws.\n- 250 magic damage (+ 40% AP) magic damage.\n\nMax-level effect: Each claw swipes for 3 times."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "flee-replacement"
    ]
  },
  {
    "id": "die-another-day",
    "name": "Die Another Day",
    "tier": "Gold",
    "description": {
      "raw": "Replaces {{si|Flee}} with ''{{si|Die Another Day}}''.<br><br>[[File:Lamb's Respite.png|20px|link=]] {{sbc|Die Another Day:}} {{#invoke:SpellData|geteffect|Die Another Day}}",
      "text": "Replaces Flee with Die Another Day.\n\nDie Another Day: geteffect"
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "flee-replacement"
    ]
  },
  {
    "id": "divine-intervention",
    "name": "Divine Intervention",
    "tier": "Gold",
    "description": {
      "raw": "{{as|Automatically}} cast {{cai|Cosmic Radiance|Taric}}, calling down a protective star upon you that descends over {{fd|2.5}} seconds. Afterwards, you and your teammate within {{tip|cr|icononly=true}} 400 units become {{tip|invulnerable}} for {{fd|2.5}} seconds. This effect activates {{tt|{{ap|12-2.5}} seconds after|Unaffected by ability haste.}} the start of the ''Combat Phase''.",
      "text": "Automatically cast Cosmic Radiance, calling down a protective star upon you that descends over 2.5 seconds. Afterwards, you and your teammate within 400 units become invulnerable for 2.5 seconds. This effect activates 12-2.5 seconds after the start of the Combat Phase."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|25 seconds cooldown}}.",
        "text": "25 seconds cooldown."
      },
      {
        "level": 2,
        "raw": "{{sti|15 seconds cooldown}}.<br><br>{{sbc|Max-level effect:}} This effect will cast for the first time you drop below {{sti|{{as|50% '''maximum''' health}}}} in each combat.",
        "text": "15 seconds cooldown.\n\nMax-level effect: This effect will cast for the first time you drop below 50% maximum health in each combat."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Taric"
      ],
      "items": [],
      "runes": []
    },
    "tags": [
      "ability-haste",
      "healing"
    ]
  },
  {
    "id": "donation",
    "name": "Donation",
    "tier": "Gold",
    "description": {
      "raw": "Gain {{g|1750}} upon acquiring this augment.",
      "text": "Gain 1750 upon acquiring this augment."
    },
    "levels": [],
    "notes": {
      "raw": "* This effect will repeat when you acquire this augment repeatedly through '''Symbiotic Mutation'''\n",
      "text": "* This effect will repeat when you acquire this augment repeatedly through Symbiotic Mutation"
    },
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "double-tap",
    "name": "Double Tap",
    "tier": "Gold",
    "description": {
      "raw": "Basic attacks that {{tip|critical strike|critically strike}} apply {{tip|on-hit}} effects an additional time. Additionally, gain {{sti|{{as|25% critical strike chance}}}}.",
      "text": "Basic attacks that critically strike apply on-hit effects an additional time. Additionally, gain 25% critical strike chance."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "crit"
    ]
  },
  {
    "id": "ethereal-weapon",
    "name": "Ethereal Weapon",
    "tier": "Gold",
    "description": {
      "raw": "Your abilities apply {{tip|on-hit}} effects at 100% effectiveness a number of times ({{sti|1 second cooldown}} per target).",
      "text": "Your abilities apply on-hit effects at 100% effectiveness a number of times (1 second cooldown per target)."
    },
    "levels": [
      {
        "level": 1,
        "raw": "1 time.",
        "text": "1 time."
      },
      {
        "level": 2,
        "raw": "2 times.",
        "text": "2 times."
      },
      {
        "level": 3,
        "raw": "3 times.",
        "text": "3 times."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "extendo-arm",
    "name": "Extendo-Arm",
    "tier": "Gold",
    "description": {
      "raw": "{{as|Automatically}} cast {{cai|Rocket Grab|Blitzcrank}} at a nearby enemy champion, {{tip|airborne|pulling}} the first target hit towards you and {{tip|stun|stunning}} them for 1 second ({{sti|12 seconds cooldown}}).",
      "text": "Automatically cast Rocket Grab at a nearby enemy champion, pulling the first target hit towards you and stunning them for 1 second (12 seconds cooldown)."
    },
    "levels": [
      {
        "level": 2,
        "raw": "{{sbc|Max-level effect:}} Fire a second hook as soon as the first one is fired.",
        "text": "Max-level effect: Fire a second hook as soon as the first one is fired."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Blitzcrank"
      ],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "firebrand",
    "name": "Firebrand",
    "tier": "Gold",
    "description": {
      "raw": "Basic attacks {{tip|on-hit}} apply a {{as|Burn}} for 5 seconds that deals {{as|'''bonus''' magic damage}} based on {{as|the target's '''maximum''' health}}. This {{as|Burn}} stacks infinitely and refreshes with each application.<br><br>This counts as a {{as|Burn}} source.",
      "text": "Basic attacks on-hit apply a Burn for 5 seconds that deals bonus magic damage based on the target's maximum health. This Burn stacks infinitely and refreshes with each application.\n\nThis counts as a Burn source."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{ft|{{as|{{ap|3/5}}% of the target's '''maximum''' health}} {{as|magic damage}} per second.|{{as|3% of the target's '''maximum''' health}} {{as|magic damage}} over the duration.}}",
        "text": "3/5% of the target's maximum health magic damage per second."
      },
      {
        "level": 2,
        "raw": "{{ft|{{as|{{ap|4/5}}% of the target's '''maximum''' health}} {{as|magic damage}} per second.|{{as|4% of the target's '''maximum''' health}} {{as|magic damage}} over the duration.}}<br><br>{{sbc|Max-level effect:}} {{sti|Heal}} for 50% of the damage dealt by this effect.",
        "text": "4/5% of the target's maximum health magic damage per second.\n\nMax-level effect: Heal for 50% of the damage dealt by this effect."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "burn",
      "healing"
    ]
  },
  {
    "id": "flashy",
    "name": "Flashy",
    "tier": "Gold",
    "description": {
      "raw": "Your {{si|Flash}} now has multiple charges with a {{sti|2-second cooldown}} between casts, gaining maximum charges at the start of each phase in a round. Additionally, the cooldown of your {{si|Flash}} resets every round.",
      "text": "Your Flash now has multiple charges with a 2-second cooldown between casts, gaining maximum charges at the start of each phase in a round. Additionally, the cooldown of your Flash resets every round."
    },
    "levels": [
      {
        "level": 1,
        "raw": "2 charges.",
        "text": "2 charges."
      },
      {
        "level": 2,
        "raw": "3 charges.<br><br>{{sbc|Max-level effect:}} {{si|Flash}} creates an explosion at a {{tip|cr|icononly=true}} 500 radius around you, dealing {{as|{{pp|30+5*x}}|magic damage}} {{as|(+ 35% '''bonus''' AD)}} {{as|(+ 30% AP)}} {{as|magic damage}} to enemies within and {{tip|slow|slowing}} them by 35% for {{fd|1.25}} seconds.",
        "text": "3 charges.\n\nMax-level effect: Flash creates an explosion at a 500 radius around you, dealing 30+5*x magic damage (+ 35% bonus AD) (+ 30% AP) magic damage to enemies within and slowing them by 35% for 1.25 seconds."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "from-beginning-to-end",
    "name": "From Beginning to End",
    "tier": "Gold",
    "description": {
      "raw": "Gain the {{ri|Dark Harvest}} and {{ri|First Strike}} keystone runes. Additionally, for each augment equipped before selecting this one, gain 8 {{as|Souls}} of {{ri|Dark Harvest}} for free.<br><br>''See [[Arena#Runes]] for Arena-specific overrides on these keystones.''",
      "text": "Gain the Dark Harvest and First Strike keystone runes. Additionally, for each augment equipped before selecting this one, gain 8 Souls of Dark Harvest for free.\n\nSee Arena#Runes for Arena-specific overrides on these keystones."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": [
        "Dark Harvest",
        "First Strike"
      ]
    },
    "tags": []
  },
  {
    "id": "get-excited",
    "name": "Get Excited!",
    "tier": "Gold",
    "description": {
      "raw": "Scoring a champion {{tip|takedown}} grants you {{sti|{{as|'''bonus''' movement speed}}}} and {{sti|{{as|15% '''bonus''' attack speed}}}} for 6 seconds.",
      "text": "Scoring a champion takedown grants you bonus movement speed and 15% bonus attack speed for 6 seconds."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|100% '''bonus''' movement speed}}}}.",
        "text": "100% bonus movement speed."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|200% '''bonus''' movement speed}}}}.<br><br>{{sbc|Max-level effect:}} {{as|Attack speed cap|as}} increases to {{as|10|as}}.",
        "text": "200% bonus movement speed.\n\nMax-level effect: Attack speed cap increases to 10."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "attack-speed"
    ]
  },
  {
    "id": "growth-spurt",
    "name": "Growth Spurt",
    "tier": "Gold",
    "description": {
      "raw": "Replaces {{si|Flee}} with ''{{si|Growth Spurt}}''.<br><br>[[File:Growth Spurt.png|20px|link=]] {{sbc|Growth Spurt:}} {{#invoke:SpellData|geteffect|Growth Spurt}}",
      "text": "Replaces Flee with Growth Spurt.\n\nGrowth Spurt: geteffect"
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>6 seconds duration.</li><li>{{sti|{{as|250 (+ 20% '''maximum''' health) '''bonus''' health}}}}.</li></ul>",
        "text": "- 6 seconds duration.\n- 250 (+ 20% maximum health) bonus health."
      },
      {
        "level": 2,
        "raw": "<ul><li>10 seconds duration.</li><li>{{sti|{{as|450 (+ 20% '''maximum''' health) '''bonus''' health}}}}.</li></ul>",
        "text": "- 10 seconds duration.\n- 450 (+ 20% maximum health) bonus health."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "flee-replacement",
      "healing"
    ]
  },
  {
    "id": "hat-trick",
    "name": "Hat Trick",
    "tier": "Gold",
    "description": {
      "raw": "Gain 3 {{ii|Cappa Juice|hats}} upon selecting this augment and permanently reduce the cost of {{ii|Cappa Juice}} in your shop by {{g|350}}. Upon dropping below {{sti|{{as|30% of your '''maximum''' health}}}}, gain {{sti|{{as|35% '''total''' movement speed}}}} and a {{pp|300 to 500}} {{as|(+ 75% '''bonus''' movement speed)}} {{tip|shield}} for 3 seconds, but lose one hat every time this effect activates ({{sti|3 seconds cooldown}}).",
      "text": "Gain 3 hats upon selecting this augment and permanently reduce the cost of Cappa Juice in your shop by 350. Upon dropping below 30% of your maximum health, gain 35% total movement speed and a 300 to 500 (+ 75% bonus movement speed) shield for 3 seconds, but lose one hat every time this effect activates (3 seconds cooldown)."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [
        "Cappa Juice"
      ],
      "runes": []
    },
    "tags": [
      "healing",
      "shield"
    ]
  },
  {
    "id": "holy-fire",
    "name": "Holy Fire",
    "tier": "Gold",
    "description": {
      "raw": "Your {{tip|heals}} and {{tip|shields}} cause you to fire a missile to the nearest enemy champion within {{tip|cr|icononly=true}} 650 units over {{fd|0.32}} seconds, applying a {{as|Burn}} upon arrival that deals {{as|magic damage}} based on {{sti|{{as|the target's '''maximum''' health}}}} over time.<br><br>The {{as|Burn's}} per-tick damage increases based on the relative value of the triggering {{tip|heal}} or {{tip|shield}} against the {{sti|{{as|'''maximum''' health}}}} of the ally recipient.<br><br>This counts as a {{as|Burn}} source.",
      "text": "Your heals and shields cause you to fire a missile to the nearest enemy champion within 650 units over 0.32 seconds, applying a Burn upon arrival that deals magic damage based on the target's maximum health over time.\n\nThe Burn's per-tick damage increases based on the relative value of the triggering heal or shield against the maximum health of the ally recipient.\n\nThis counts as a Burn source."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>Minimum damage: {{as|{{fd|0.16}}% of the target's '''maximum''' health}} every second over 5 seconds, for a total of {{as|0.8%|hp}}.</li><li>Maximum damage: {{as|{{fd|0.6}}% of the target's '''maximum''' health}} every second over 5 seconds, for a total of {{as|3%|hp}}.</li></ul>",
        "text": "- Minimum damage: 0.16% of the target's maximum health every second over 5 seconds, for a total of 0.8%.\n- Maximum damage: 0.6% of the target's maximum health every second over 5 seconds, for a total of 3%."
      },
      {
        "level": 2,
        "raw": "<ul><li>Minimum damage: {{as|{{fd|0.32}}% of the target's '''maximum''' health}} every second over 5 seconds, for a total of {{as|1.6%|hp}}.</li><li>Maximum damage: {{as|{{fd|1.2}}% of the target's '''maximum''' health}} every second over 5 seconds, for a total of {{as|6%|hp}}.</li></ul>",
        "text": "- Minimum damage: 0.32% of the target's maximum health every second over 5 seconds, for a total of 1.6%.\n- Maximum damage: 1.2% of the target's maximum health every second over 5 seconds, for a total of 6%."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "burn",
      "healing",
      "shield"
    ]
  },
  {
    "id": "hybrid",
    "name": "Hybrid",
    "tier": "Gold",
    "description": {
      "raw": "Damaging {{tip|basic attacks|attacks}} {{tip|on-hit}} grant you increased damage on your next damaging {{tip|champion ability}}. Damaging {{tip|champion ability|champion abilities|nolink=true}} grant you increased damage on your next {{tip|basic attack|attack|nolink=true}} {{tip|on-hit}}. This effect does not stack.",
      "text": "Damaging attacks on-hit grant you increased damage on your next damaging champion ability. Damaging champion abilities grant you increased damage on your next attack on-hit. This effect does not stack."
    },
    "levels": [
      {
        "level": 1,
        "raw": "20% increased attack and ability damage.",
        "text": "20% increased attack and ability damage."
      },
      {
        "level": 2,
        "raw": "30% increased attack and ability damage.",
        "text": "30% increased attack and ability damage."
      },
      {
        "level": 3,
        "raw": "40% increased attack and ability damage.",
        "text": "40% increased attack and ability damage."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "impassable",
    "name": "Impassable",
    "tier": "Gold",
    "description": {
      "raw": "Gain the {{ri|Aftershock}} and {{ri|Glacial Augment}} keystone runes.",
      "text": "Gain the Aftershock and Glacial Augment keystone runes."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": [
        "Aftershock",
        "Glacial Augment"
      ]
    },
    "tags": []
  },
  {
    "id": "its-critical",
    "name": "It's Critical",
    "tier": "Gold",
    "description": {
      "raw": "Grants {{sti|{{as|critical strike chance}}}}.",
      "text": "Grants critical strike chance."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|50% critical strike chance}}}}.",
        "text": "50% critical strike chance."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|75% critical strike chance}}}}.<br><br>{{sbc|Max-level effect:}} Gain {{sti|{{as|25% critical strike damage}}}}.",
        "text": "75% critical strike chance.\n\nMax-level effect: Gain 25% critical strike damage."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "crit"
    ]
  },
  {
    "id": "its-killing-time",
    "name": "It's Killing Time",
    "tier": "Gold",
    "description": {
      "raw": "Upon casting your ultimate ability, you apply {{cai|Death Mark|Zed}} to all enemy champions ({{sti|8 seconds cooldown}}). The mark stores a percentage of all {{tt|post-mitigation|Damage calculated before modifiers}} damage dealt to the affected target, detonating after 5 seconds to deal {{sti|{{as|true damage}}}} equal to the damage stored against them.<br><br>If this augment's cooldown elapses during the channel of {{cai|Crowstorm|Fiddlesticks}}, {{cai|Hero's Entrance|Galio}} or {{cai|Grand Starfall|Pantheon}}, this effect activates right before their first respective damaging effect activates.",
      "text": "Upon casting your ultimate ability, you apply Death Mark to all enemy champions (8 seconds cooldown). The mark stores a percentage of all post-mitigation damage dealt to the affected target, detonating after 5 seconds to deal true damage equal to the damage stored against them.\n\nIf this augment's cooldown elapses during the channel of Crowstorm, Hero's Entrance or Grand Starfall, this effect activates right before their first respective damaging effect activates."
    },
    "levels": [
      {
        "level": 1,
        "raw": "35% damage stored.",
        "text": "35% damage stored."
      },
      {
        "level": 2,
        "raw": "40% damage stored.",
        "text": "40% damage stored."
      },
      {
        "level": 3,
        "raw": "50% damage stored.<br><br>{{sbc|Max-level effect:}} {{tip|Heal}} for 100% of the damage done by this effect.",
        "text": "50% damage stored.\n\nMax-level effect: Heal for 100% of the damage done by this effect."
      }
    ],
    "notes": {
      "raw": "* The damage from '''It's Killing Time''' benefits from ultimate damage modifiers.\n",
      "text": "* The damage from It's Killing Time benefits from ultimate damage modifiers."
    },
    "references": {
      "augments": [],
      "champions": [
        "Fiddlesticks",
        "Galio",
        "Pantheon",
        "Zed"
      ],
      "items": [],
      "runes": []
    },
    "tags": [
      "healing"
    ]
  },
  {
    "id": "keystone-conjurer",
    "name": "Keystone Conjurer",
    "tier": "Gold",
    "description": {
      "raw": "Gain the {{ri|Arcane Comet}} and {{ri|Summon Aery}} keystone runes.<br><br>''See [[Arena#Runes]] for Arena-specific overrides on {{ri|Summon Aery}}.''",
      "text": "Gain the Arcane Comet and Summon Aery keystone runes.\n\nSee Arena#Runes for Arena-specific overrides on Summon Aery."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": [
        "Arcane Comet",
        "Summon Aery"
      ]
    },
    "tags": []
  },
  {
    "id": "light-warden",
    "name": "Light Warden",
    "tier": "Gold",
    "description": {
      "raw": "{{as|Automatically}} cast {{cai|Prismatic Barrier|Lux}}, throwing a warding light towards your ally which grants a {{tip|shield}} for {{pp|25+3*x}} {{as|(+ {{fd|7.5}}% '''bonus''' AD)}} {{as|(+ 20% AP)}} to you and your ally for {{fd|2.5}} seconds upon coming into contact with it. After reaching maximum range, the light then homes back to you to grant the same shield again when it passes through you and your ally, stacking with the previous shield and refreshing its duration ({{sti|8 seconds cooldown}}).",
      "text": "Automatically cast Prismatic Barrier, throwing a warding light towards your ally which grants a shield for 25+3*x (+ 7.5% bonus AD) (+ 20% AP) to you and your ally for 2.5 seconds upon coming into contact with it. After reaching maximum range, the light then homes back to you to grant the same shield again when it passes through you and your ally, stacking with the previous shield and refreshing its duration (8 seconds cooldown)."
    },
    "levels": [
      {
        "level": 2,
        "raw": "{{sbc|Max-level effect:}} Fire an additional light that grants the same shield for each enemy champion hit.",
        "text": "Max-level effect: Fire an additional light that grants the same shield for each enemy champion hit."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Lux"
      ],
      "items": [],
      "runes": []
    },
    "tags": [
      "shield"
    ]
  },
  {
    "id": "lightning-strikes",
    "name": "Lightning Strikes",
    "tier": "Gold",
    "description": {
      "raw": "Increase your {{sti|{{as|'''bonus''' attack speed}}}} gained from all sources. While at {{sti|as|{{as|{{fd|3.0}}|as}}}} attack speed or higher, your basic attacks deal {{as|40 '''bonus''' magic damage}} {{tip|on-hit}}.",
      "text": "Increase your bonus attack speed gained from all sources. While at 3.0 attack speed or higher, your basic attacks deal 40 bonus magic damage on-hit."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|15% '''total''' attack speed}}}}.",
        "text": "15% total attack speed."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|25% '''total''' attack speed}}}}.<br><br>{{sbc|Max-level effect:}} {{as|Attack speed cap|as}} increases to {{as|10|as}}.",
        "text": "25% total attack speed.\n\nMax-level effect: Attack speed cap increases to 10."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "attack-speed"
    ]
  },
  {
    "id": "magic-missile",
    "name": "Magic Missile",
    "tier": "Gold",
    "description": {
      "raw": "Dealing damage to an enemy with an ability within {{tip|cr|icononly=true}} 1000 units fires several missiles at them that each deal {{as|true damage}} equal to {{as|{{fd|0.3{{recurring|3}}}}% of the target's '''maximum''' health}}, increased to up to {{as|1%|health}} based on distance travelled. This effect can only trigger once every 6 seconds from the same cast.",
      "text": "Dealing damage to an enemy with an ability within 1000 units fires several missiles at them that each deal true damage equal to 0.33% of the target's maximum health, increased to up to 1% health based on distance travelled. This effect can only trigger once every 6 seconds from the same cast."
    },
    "levels": [
      {
        "level": 1,
        "raw": "3 missiles.",
        "text": "3 missiles."
      },
      {
        "level": 2,
        "raw": "5 missiles.<br><br>{{sbc|Max-level effect:}} Every 3 times this effect triggers, increase the number of missiles by 1 for the rest of the round.",
        "text": "5 missiles.\n\nMax-level effect: Every 3 times this effect triggers, increase the number of missiles by 1 for the rest of the round."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "healing"
    ]
  },
  {
    "id": "marksmage",
    "name": "Marksmage",
    "tier": "Gold",
    "description": {
      "raw": "Basic attacks deal {{as|'''bonus''' physical damage}} based on your {{sti|{{as|ability power}}}}.",
      "text": "Basic attacks deal bonus physical damage based on your ability power."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|75% AP}}}} converted to {{as|'''bonus''' physical damage}}.",
        "text": "75% AP converted to bonus physical damage."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|115% AP}}}} converted to {{as|'''bonus''' physical damage}}.",
        "text": "115% AP converted to bonus physical damage."
      }
    ],
    "notes": {
      "raw": "* '''Marksmage''' is not and does not interact with {{tip|on-hit}} effects.\n* '''Marksmage''' deals {{tip|proc damage}}.\n",
      "text": "* Marksmage is not and does not interact with on-hit effects.\n* Marksmage deals proc damage."
    },
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "mercy",
    "name": "Mercy",
    "tier": "Gold",
    "description": {
      "raw": "When your team triggers [[Arena#Combo_Breaker|Combo Breaker]] by {{tip|immobilize|immobilizing}} an enemy champion for 4 seconds out of the last 7 seconds, you become '''enraged''' and your next {{tip|immobilize|immobilizing}} effects deal {{as|magic damage}} based on {{sti|{{as|your '''maximum''' health}}}} to the target. This effect resets every round.",
      "text": "When your team triggers Combo Breaker by immobilizing an enemy champion for 4 seconds out of the last 7 seconds, you become enraged and your next immobilizing effects deal magic damage based on your maximum health to the target. This effect resets every round."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{as|30% of your '''maximum''' health}} {{as|magic damage}}.",
        "text": "30% of your maximum health magic damage."
      },
      {
        "level": 2,
        "raw": "{{as|45% of your '''maximum''' health}} {{as|magic damage}}.",
        "text": "45% of your maximum health magic damage."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "healing"
    ]
  },
  {
    "id": "minionmancer",
    "name": "Minionmancer",
    "tier": "Gold",
    "description": {
      "raw": "Your {{tip|pet|pets}} deal increased damage as well as gain {{sti|{{as|'''bonus''' health}}}} and {{sti|size}}.",
      "text": "Your pets deal increased damage as well as gain bonus health and size."
    },
    "levels": [
      {
        "level": 1,
        "raw": "40% increased damage, {{as|'''bonus''' health}} and {{sti|size}}.",
        "text": "40% increased damage, bonus health and size."
      },
      {
        "level": 2,
        "raw": "55% increased damage, {{as|'''bonus''' health}} and {{sti|size}}.",
        "text": "55% increased damage, bonus health and size."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "healing"
    ]
  },
  {
    "id": "multitool",
    "name": "Multitool",
    "tier": "Gold",
    "description": {
      "raw": "Gain the {{ii|Multitool}} in your inventory. At each Shopping Phase, you can choose 1 out of 5 random items on the top of your inventory for {{ii|Multitool}} to transform into. {{ii|Multitool}} can provide prismatic items after the 4th round.<br><br>''Removed since [[V26.09]].''",
      "text": "Gain the Multitool in your inventory. At each Shopping Phase, you can choose 1 out of 5 random items on the top of your inventory for Multitool to transform into. Multitool can provide prismatic items after the 4th round.\n\nRemoved since V26.09."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [
        "Multitool"
      ],
      "runes": []
    },
    "tags": [
      "item",
      "removed"
    ]
  },
  {
    "id": "oathsworn",
    "name": "Oathsworn",
    "tier": "Gold",
    "description": {
      "raw": "Replaces {{si|Flee}} with ''{{cai|Fate's Call|Kalista}}''.<br><br>{{sbc|Fate's Call:}} Retrieve your ally and hold them for 4 seconds, {{tip|dash|pulling}} them to yourself over 1 second and {{tip|cleanse|cleansing}} them from all {{tip|crowd control}}, as well as rendering them {{tip|invulnerable}} and {{tip|untargetable}} for the duration ({{sti|60 seconds cooldown}}).<br><br>While being held, your ally is {{tip|vanish|vanished}} and can {{tip|dash}} with {{tip|displacement immunity}} to end ''Fate's Call's'' effects and reappear at the target location; after the duration, they will automatically do so at maximum range from your facing direction. The ally's dash stops upon colliding with an enemy {{tip|champion}}, {{tip|airborne|knocking}} up all nearby enemies briefly and landing to their {{sti|attack range|{{as|'''base''' attack range}}}} from the target collided with.",
      "text": "Replaces Flee with Fate's Call.\n\nFate's Call: Retrieve your ally and hold them for 4 seconds, pulling them to yourself over 1 second and cleansing them from all crowd control, as well as rendering them invulnerable and untargetable for the duration (60 seconds cooldown).\n\nWhile being held, your ally is vanished and can dash with displacement immunity to end Fate's Call's effects and reappear at the target location; after the duration, they will automatically do so at maximum range from your facing direction. The ally's dash stops upon colliding with an enemy champion, knocking up all nearby enemies briefly and landing to their base attack range from the target collided with."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Kalista"
      ],
      "items": [],
      "runes": []
    },
    "tags": [
      "flee-replacement",
      "mobility"
    ]
  },
  {
    "id": "ok-boomerang",
    "name": "OK Boomerang",
    "tier": "Gold",
    "description": {
      "raw": "{{as|Automatically}} cast {{cai|Boomerang Blade|Sivir}} at a nearby enemy, dealing {{as|physical damage}} to enemies hit ({{sti|7 seconds cooldown}}).",
      "text": "Automatically cast Boomerang Blade at a nearby enemy, dealing physical damage to enemies hit (7 seconds cooldown)."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{pp|30+9.5*x}} {{as|(+ 22% '''bonus''' AD)}} {{as|(+ 15% AP)}} {{as|physical damage}}.",
        "text": "30+9.5*x (+ 22% bonus AD) (+ 15% AP) physical damage."
      },
      {
        "level": 2,
        "raw": "{{pp|100+9.5*x}} {{as|(+ 22% '''bonus''' AD)}} {{as|(+ 15% AP)}} {{as|physical damage}}.",
        "text": "100+9.5*x (+ 22% bonus AD) (+ 15% AP) physical damage."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Sivir"
      ],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "outlaws-grit",
    "name": "Outlaw's Grit",
    "tier": "Gold",
    "description": {
      "raw": "{{tip|Dash|Dashing}} or {{tip|blink|blinking}} grants {{sti|{{as|'''bonus''' armor}}}} and {{sti|{{as|'''bonus''' magic resistance}}}}, stacking up to 5 times. This effect lasts until the end of the current round phase.",
      "text": "Dashing or blinking grants bonus armor and bonus magic resistance, stacking up to 5 times. This effect lasts until the end of the current round phase."
    },
    "levels": [
      {
        "level": 1,
        "raw": "10 '''bonus''' resistances, stacking up to 5 times for a total of 50 '''bonus''' resistances.",
        "text": "10 bonus resistances, stacking up to 5 times for a total of 50 bonus resistances."
      },
      {
        "level": 2,
        "raw": "15 '''bonus''' resistances, stacking up to 5 times for a total of 75 '''bonus''' resistances.<br><br>{{sbc|Max-level effect:}} Gaining the stack doubles the '''bonus'''resistances for 2 seconds.",
        "text": "15 bonus resistances, stacking up to 5 times for a total of 75 bonus resistances.\n\nMax-level effect: Gaining the stack doubles the bonusresistances for 2 seconds."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "mobility"
    ]
  },
  {
    "id": "overflow",
    "name": "Overflow",
    "tier": "Gold",
    "description": {
      "raw": "Your abilities' {{sti|{{as|mana}}}} costs are doubled, but you also gain increased damage as well as self and outgoing {{tip|heal|healing}} and {{tip|shield|shielding}}, based on {{sti|{{as|your '''maximum''' mana}}}}.",
      "text": "Your abilities' mana costs are doubled, but you also gain increased damage as well as self and outgoing healing and shielding, based on your maximum mana."
    },
    "levels": [
      {
        "level": 1,
        "raw": "7% {{as|(+ {{fd|0.5}}% per 100 '''maximum''' mana)|mana}} increased damage, {{tip|heal|healing}} and {{tip|shield|shielding}}.",
        "text": "7% (+ 0.5% per 100 maximum mana) increased damage, healing and shielding."
      },
      {
        "level": 2,
        "raw": "15% {{as|(+ {{fd|0.5}}% per 100 '''maximum''' mana)|mana}} increased damage, {{tip|heal|healing}} and {{tip|shield|shielding}}.<br><br>{{sbc|Max-level effect:}} Reduce the current cooldown of one of your basic abilities by {{sti|cooldown|5 seconds}} each time you spend {{sti|{{as|400 mana}}}}.",
        "text": "15% (+ 0.5% per 100 maximum mana) increased damage, healing and shielding.\n\nMax-level effect: Reduce the current cooldown of one of your basic abilities by 5 seconds each time you spend 400 mana."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "healing",
      "shield"
    ]
  },
  {
    "id": "parasitic-relationship",
    "name": "Parasitic Relationship",
    "tier": "Gold",
    "description": {
      "raw": "You {{tip|heal}} for a part of the damage dealt by your ally.",
      "text": "You heal for a part of the damage dealt by your ally."
    },
    "levels": [
      {
        "level": 1,
        "raw": "Ally damage to heal ratio: <ul><li>15% (in teams of 2).</li><li>10% (in teams of 3).</li></ul>",
        "text": "Ally damage to heal ratio:\n- 15% (in teams of 2).\n- 10% (in teams of 3)."
      },
      {
        "level": 2,
        "raw": "Ally damage to heal ratio: <ul><li>22.5% (in teams of 2).</li><li>15% (in teams of 3)}}.</li></ul><br>{{sbc|Max-level effect:}} Excess {{sti|heal|healing}} from this augment is converted into a {{tip|shield}}.",
        "text": "Ally damage to heal ratio:\n- 22.5% (in teams of 2).\n- 15% (in teams of 3)}}.\n\nMax-level effect: Excess healing from this augment is converted into a shield."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "healing",
      "shield"
    ]
  },
  {
    "id": "perseverance",
    "name": "Perseverance",
    "tier": "Gold",
    "description": {
      "raw": "Grants a great amount of {{sti|health regeneration|{{as|'''base''' health regeneration}}}}, increased while below {{sti|{{as|a certain health threshold}}}}.",
      "text": "Grants a great amount of base health regeneration, increased while below a certain health threshold."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{sti|health regeneration|{{as|600% '''base''' health regeneration}}}}.</li><li>{{sti|health regeneration|{{as|1200% '''enhanced''' health regeneration|health}}}}.</li><li>{{sti|{{as|Below 25% '''maximum''' health}}}}.</li></ul>",
        "text": "- 600% base health regeneration.\n- 1200% enhanced health regeneration.\n- Below 25% maximum health."
      },
      {
        "level": 2,
        "raw": "<ul><li>{{sti|health regeneration|{{as|1200% '''base''' health regeneration}}}}.</li><li>{{sti|health regeneration|{{as|2400% '''enhanced''' health regeneration|health}}}}.</li><li>{{sti|{{as|Below 50% '''maximum''' health}}}}.</li></ul>",
        "text": "- 1200% base health regeneration.\n- 2400% enhanced health regeneration.\n- Below 50% maximum health."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "healing"
    ]
  },
  {
    "id": "phenomenal-evil",
    "name": "Phenomenal Evil",
    "tier": "Gold",
    "description": {
      "raw": "Gain {{cai|Phenomenal Evil Power|Veigar}}.<br><br>{{sbc|Phenomenal Evil Power:}} Generate a permanent stack of ''Phenomenal Evil'' each time you damage an enemy champion with {{tip|ability damage}}. This effect cannot trigger more than once every second globally and once every 5 seconds from the same {{tip|cast instance}}. For each stack, gain {{sti|{{as|ability power}}}}.<br><br>If this is your second augment, start with 40 ''Phenomenal Evil'' stacks, granting you {{sti|{{as|40 ability power}}}}.",
      "text": "Gain Phenomenal Evil Power.\n\nPhenomenal Evil Power: Generate a permanent stack of Phenomenal Evil each time you damage an enemy champion with ability damage. This effect cannot trigger more than once every second globally and once every 5 seconds from the same cast instance. For each stack, gain ability power.\n\nIf this is your second augment, start with 40 Phenomenal Evil stacks, granting you 40 ability power."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|1 ability power}}}} per stack.",
        "text": "1 ability power per stack."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|2 ability power}}}} per stack.",
        "text": "2 ability power per stack."
      },
      {
        "level": 3,
        "raw": "{{sbc|Max-level effect:}} Gain {{sti|{{as|10% ability power}}}}.",
        "text": "Max-level effect: Gain 10% ability power."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Veigar"
      ],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "pinball",
    "name": "Pinball",
    "tier": "Gold",
    "description": {
      "raw": "Replaces {{si|Flee}} with {{si|Mark}}. Your {{si|Mark}} is empowered to instead throw a pinball, which deals {{as|{{pp|100 to 500}} '''bonus''' true damage}} and ricochets off of terrain that it collides with. Each time the pinball ricochets, its remaining travel distance is reset, it increases in {{sti|size|radius}} by 25%, deals 20% increased damage, and reduces {{sis|Mark}} remaining cooldown by {{sti|cooldown|30% of its '''total'''}}. The pinball can ricochet up to 4 times, for a maximum radius increase of 100% and a damage increase of 80%. Additionally, your {{si|Mark}} gains {{sti|{{as|50 ability haste}}}}.",
      "text": "Replaces Flee with Mark. Your Mark is empowered to instead throw a pinball, which deals 100 to 500 bonus true damage and ricochets off of terrain that it collides with. Each time the pinball ricochets, its remaining travel distance is reset, it increases in radius by 25%, deals 20% increased damage, and reduces Mark remaining cooldown by 30% of its total. The pinball can ricochet up to 4 times, for a maximum radius increase of 100% and a damage increase of 80%. Additionally, your Mark gains 50 ability haste."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "ability-haste",
      "flee-replacement"
    ]
  },
  {
    "id": "quest-angel-of-retribution",
    "name": "Quest: Angel of Retribution",
    "tier": "Gold",
    "description": {
      "raw": "{{sbc|Quest:}} {{tip|Heal}} allied champions for 2500 in total, or mitigate 2500 damage for them.<br><br>{{sbc|Reward:}} Upon completing your {{sbc|Quest}}, gain {{sti|{{as|100% '''bonus''' attack speed}}}} and empower your basic attacks to deal {{as|'''bonus''' magic damage}} equal to {{sti|{{as|350% of your heal and shield power}}}}.",
      "text": "Quest: Heal allied champions for 2500 in total, or mitigate 2500 damage for them.\n\nReward: Upon completing your Quest, gain 100% bonus attack speed and empower your basic attacks to deal bonus magic damage equal to 350% of your heal and shield power."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "attack-speed",
      "healing",
      "quest",
      "shield"
    ]
  },
  {
    "id": "quest-mad-hatter",
    "name": "Quest: Mad Hatter",
    "tier": "Gold",
    "description": {
      "raw": "{{sbc|Quest:}} Wear 10 {{ii|Cappa Juice|hats}} simultaneously.<br><br>{{sbc|Reward:}} For each hat currently worn, gain {{adaptive|12}}, {{sti|{{as|8 '''bonus''' armor}}}}, {{sti|{{as|8 '''bonus''' magic resistance}}}}, {{sti|{{as|3% tenacity}}}} and {{sti|{{as|4 '''bonus''' movement speed}}}}. However, you now lose half your hats upon losing a round.<br><br>''If the requirements are fulfilled at any point during a Combat Phase, only grants the rewards '''after the end''' of the current round. Rewards cannot be earned mid-combat.''",
      "text": "Quest: Wear 10 hats simultaneously.\n\nReward: For each hat currently worn, gain 12, 8 bonus armor, 8 bonus magic resistance, 3% tenacity and 4 bonus movement speed. However, you now lose half your hats upon losing a round.\n\nIf the requirements are fulfilled at any point during a Combat Phase, only grants the rewards after the end of the current round. Rewards cannot be earned mid-combat."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [
        "Cappa Juice"
      ],
      "runes": []
    },
    "tags": [
      "quest"
    ]
  },
  {
    "id": "quest-steel-your-heart",
    "name": "Quest: Steel Your Heart",
    "tier": "Gold",
    "description": {
      "raw": "{{sbc|Quest:}} Obtain {{ii|Heartsteel}} and accumulate over {{as|400 '''bonus''' health}} from ''Colossal Consumption''.<br><br>{{sbc|Reward:}} Upon completing your {{sbc|Quest}}, increase the {{as|'''bonus''' health}} previously and future gained from {{iis|Heartsteel}} ''Colossal Consumption'' by 300%, and gain {{sti|{{as|'''bonus''' health regeneration}}}} equal to {{as|{{fd|12.5}}% of the '''bonus''' health}} gained from ''Colossal Consumption''.",
      "text": "Quest: Obtain Heartsteel and accumulate over 400 bonus health from Colossal Consumption.\n\nReward: Upon completing your Quest, increase the bonus health previously and future gained from Heartsteel Colossal Consumption by 300%, and gain bonus health regeneration equal to 12.5% of the bonus health gained from Colossal Consumption."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [
        "Heartsteel"
      ],
      "runes": []
    },
    "tags": [
      "healing",
      "quest"
    ]
  },
  {
    "id": "quest-three-sacred-treasures",
    "name": "Quest: Three Sacred Treasures",
    "tier": "Gold",
    "description": {
      "raw": "{{sbc|Quest:}} Possess {{ii|Hextech Gunblade}}, {{ii|Infinity Edge}} and {{ii|Perplexity}}.<br><br>{{sbc|Reward:}} Attacks now fire in a narrow straight line, damaging all enemies within for {{as|60% AP}} {{as|physical damage}} and {{as|75% AD}} {{as|magic damage}} and applying {{tip|on-hit}} effects twice.<br><br>''This augment is only available for {{ci|Yunara}} and can only be offered during the first {{tt|two|This needs further verification in the new version}} rounds where [[Arena#Shop_Phase|Augment selection is available]].''",
      "text": "Quest: Possess Hextech Gunblade, Infinity Edge and Perplexity.\n\nReward: Attacks now fire in a narrow straight line, damaging all enemies within for 60% AP physical damage and 75% AD magic damage and applying on-hit effects twice.\n\nThis augment is only available for Yunara and can only be offered during the first two rounds where Augment selection is available."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Yunara"
      ],
      "items": [
        "Hextech Gunblade",
        "Infinity Edge",
        "Perplexity"
      ],
      "runes": []
    },
    "tags": [
      "champion-specific",
      "quest"
    ]
  },
  {
    "id": "quest-urfs-champion",
    "name": "Quest: Urf's Champion",
    "tier": "Gold",
    "description": {
      "raw": "{{sbc|Quest:}} Score 8 champion {{tip|takedown|takedowns}}, up to one for each enemy per round.<br><br>{{sbc|Reward:}} Upon completing your {{sbc|Quest}}, you receive {{ii|The Golden Spatula}}.<br><br>{{ii|The Golden Spatula}} counts as a {{as|Burn}} source.",
      "text": "Quest: Score 8 champion takedowns, up to one for each enemy per round.\n\nReward: Upon completing your Quest, you receive The Golden Spatula.\n\nThe Golden Spatula counts as a Burn source."
    },
    "levels": [
      {
        "level": 2,
        "raw": "{{sbc|Max-level effect:}} Increase this item's stats by 20%.",
        "text": "Max-level effect: Increase this item's stats by 20%."
      }
    ],
    "notes": {
      "raw": "* Getting takedowns by hitting tomatoes from Kled GOH count towards the takedown goal. \n",
      "text": "* Getting takedowns by hitting tomatoes from Kled GOH count towards the takedown goal."
    },
    "references": {
      "augments": [],
      "champions": [],
      "items": [
        "The Golden Spatula"
      ],
      "runes": []
    },
    "tags": [
      "burn",
      "item",
      "quest"
    ]
  },
  {
    "id": "rabble-rousing",
    "name": "Rabble Rousing",
    "tier": "Gold",
    "description": {
      "raw": "Casting an ability {{tip|heal|heals}} you, based on your {{sti|{{as|'''maximum''' health}}}}.",
      "text": "Casting an ability heals you, based on your maximum health."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|Heal}}}} for {{pp|5 to 60}} {{as|(+ 1% '''maximum''' health)}}",
        "text": "Heal for 5 to 60 (+ 1% maximum health)"
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|Heal}}}} for {{pp|5 to 60}} {{as|(+ 2% '''maximum''' health)}}<br><br>{{sbc|Max-level effect:}} {{tip|heal|Healing}} from ultimate abilities is doubled.",
        "text": "Heal for 5 to 60 (+ 2% maximum health)\n\nMax-level effect: Healing from ultimate abilities is doubled."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "healing"
    ]
  },
  {
    "id": "recursion",
    "name": "Recursion",
    "tier": "Gold",
    "description": {
      "raw": "Grants {{sti|{{as|ability haste}}}}.",
      "text": "Grants ability haste."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|40 ability haste}}}}.",
        "text": "40 ability haste."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|60 ability haste}}}}.",
        "text": "60 ability haste."
      },
      {
        "level": 3,
        "raw": "{{sti|{{as|80 ability haste}}}}.",
        "text": "80 ability haste."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "ability-haste"
    ]
  },
  {
    "id": "restart",
    "name": "Restart",
    "tier": "Gold",
    "description": {
      "raw": "{{as|Automatically}} refresh your basic abilities' cooldowns {{sti|cooldown|every several seconds}}.",
      "text": "Automatically refresh your basic abilities' cooldowns every several seconds."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|12 seconds cooldown}}.",
        "text": "12 seconds cooldown."
      },
      {
        "level": 2,
        "raw": "{{sti|8 seconds cooldown}}.",
        "text": "8 seconds cooldown."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "restless-restoration",
    "name": "Restless Restoration",
    "tier": "Gold",
    "description": {
      "raw": "You constantly {{tip|heal}} while moving.",
      "text": "You constantly heal while moving."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{tip|Heal}} for {{pp|20/100 to 120/100}} {{as|(+ {{ap|1.6/100}}% '''maximum''' health)}} per 10 units travelled.",
        "text": "Heal for 20/100 to 120/100 (+ 1.6/100% maximum health) per 10 units travelled."
      },
      {
        "level": 2,
        "raw": "{{tip|Heal}} for {{pp|20/100 to 120/100}} {{as|(+ {{ap|3/100}}% '''maximum''' health)}} per 10 units travelled.",
        "text": "Heal for 20/100 to 120/100 (+ 3/100% maximum health) per 10 units travelled."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "healing"
    ]
  },
  {
    "id": "rice-and-chicken",
    "name": "Rice And Chicken",
    "tier": "Gold",
    "description": {
      "raw": "Your champion's first basic ability ''(Q)'' gains increased damage and increased {{tip|heal|Healing}} and {{tip|shield|Shielding}}, but loses {{sti|{{as|50 ability haste}}}}.",
      "text": "Your champion's first basic ability (Q) gains increased damage and increased Healing and Shielding, but loses 50 ability haste."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>50% increased damage.</li><li>30% increased {{tip|heal|Healing}} and {{tip|shield|Shielding}}.</li></ul>",
        "text": "- 50% increased damage.\n- 30% increased Healing and Shielding."
      },
      {
        "level": 2,
        "raw": "<ul><li>75% increased damage.</li><li>50% increased {{tip|heal|Healing}} and {{tip|shield|Shielding}}.</li></ul><br>{{sbc|Max-level effect:}} Casting your first basic ability grants you {{sti|{{as|40% '''bonus''' movement speed}}}} for 2 seconds.",
        "text": "- 75% increased damage.\n- 50% increased Healing and Shielding.\n\nMax-level effect: Casting your first basic ability grants you 40% bonus movement speed for 2 seconds."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "ability-haste",
      "healing",
      "shield"
    ]
  },
  {
    "id": "rice-and-fish",
    "name": "Rice And Fish",
    "tier": "Gold",
    "description": {
      "raw": "Your champion's second basic ability ''(W)'' gains increased damage and increased {{tip|heal|Healing}} and {{tip|shield|Shielding}}, but loses {{sti|{{as|50 ability haste}}}}.",
      "text": "Your champion's second basic ability (W) gains increased damage and increased Healing and Shielding, but loses 50 ability haste."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>50% increased damage.</li><li>30% increased {{tip|heal|Healing}} and {{tip|shield|Shielding}}.</li></ul>",
        "text": "- 50% increased damage.\n- 30% increased Healing and Shielding."
      },
      {
        "level": 2,
        "raw": "<ul><li>75% increased damage.</li><li>50% increased {{tip|heal|Healing}} and {{tip|shield|Shielding}}.</li></ul><br>{{sbc|Max-level effect:}} Casting your second basic ability grants you {{sti|{{as|40% '''bonus''' movement speed}}}} for 2 seconds.",
        "text": "- 75% increased damage.\n- 50% increased Healing and Shielding.\n\nMax-level effect: Casting your second basic ability grants you 40% bonus movement speed for 2 seconds."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "ability-haste",
      "healing",
      "shield"
    ]
  },
  {
    "id": "rice-and-pork",
    "name": "Rice And Pork",
    "tier": "Gold",
    "description": {
      "raw": "Your champion's third basic ability ''(E)'' gains increased damage and increased {{tip|heal|Healing}} and {{tip|shield|Shielding}}, but loses {{sti|{{as|50 ability haste}}}}.",
      "text": "Your champion's third basic ability (E) gains increased damage and increased Healing and Shielding, but loses 50 ability haste."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>50% increased damage.</li><li>30% increased {{tip|heal|Healing}} and {{tip|shield|Shielding}}.</li></ul>",
        "text": "- 50% increased damage.\n- 30% increased Healing and Shielding."
      },
      {
        "level": 2,
        "raw": "<ul><li>75% increased damage.</li><li>50% increased {{tip|heal|Healing}} and {{tip|shield|Shielding}}.</li></ul><br>{{sbc|Max-level effect:}} Casting your third basic ability grants you {{sti|{{as|40% '''bonus''' movement speed}}}} for 2 seconds.",
        "text": "- 75% increased damage.\n- 50% increased Healing and Shielding.\n\nMax-level effect: Casting your third basic ability grants you 40% bonus movement speed for 2 seconds."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "ability-haste",
      "healing",
      "shield"
    ]
  },
  {
    "id": "scavenger",
    "name": "Scavenger",
    "tier": "Gold",
    "description": {
      "raw": "Increase your augment count to 6. When you defeat a team, a selection screen of their augments will open in the shopping phase of the next round. From now, ''Augment Selections'' only provide '''Augment Level Ups'''.<br>If none of their augments are applicable to you, you'll gain {{g|500}} instead.",
      "text": "Increase your augment count to 6. When you defeat a team, a selection screen of their augments will open in the shopping phase of the next round. From now, Augment Selections only provide Augment Level Ups.\nIf none of their augments are applicable to you, you'll gain 500 instead."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "scopier-weapons",
    "name": "Scopier Weapons",
    "tier": "Gold",
    "description": {
      "raw": "Gain {{sti|attack range|{{rd|200|100}} '''bonus''' attack range}}.<br><br>''Removed since [[V26.09]].''",
      "text": "Gain 200 bonus attack range.\n\nRemoved since V26.09."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "removed"
    ]
  },
  {
    "id": "searing-dawn",
    "name": "Searing Dawn",
    "tier": "Gold",
    "description": {
      "raw": "Gain {{cai|Sunlight|Leona}}.<br><br>{{sbc|Sunlight:}} Your abilities mark enemies, causing them to take {{as|'''bonus''' magic damage}} based on {{sti|{{as|their '''maximum''' health}}}} from your ally's next basic attack or ability hit against them ({{sti|{{fd|0.75}}-second cooldown}} per target).",
      "text": "Gain Sunlight.\n\nSunlight: Your abilities mark enemies, causing them to take bonus magic damage based on their maximum health from your ally's next basic attack or ability hit against them (0.75-second cooldown per target)."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{as|{{pp|40 to 200}}|magic damage}} {{as|(+ {{fd|2.5}}% of target's '''maximum''' health)}} {{as|'''bonus''' magic damage}}.",
        "text": "40 to 200 magic damage (+ 2.5% of target's maximum health) bonus magic damage."
      },
      {
        "level": 2,
        "raw": "{{as|{{pp|40 to 200}}|magic damage}} {{as|(+ {{fd|4.5}}% of target's '''maximum''' health)}} {{as|'''bonus''' magic damage}}.",
        "text": "40 to 200 magic damage (+ 4.5% of target's maximum health) bonus magic damage."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Leona"
      ],
      "items": [],
      "runes": []
    },
    "tags": [
      "healing"
    ]
  },
  {
    "id": "shrink-engine",
    "name": "Shrink Engine",
    "tier": "Gold",
    "description": {
      "raw": "Scoring a champion {{tip|takedown}} generates a stack, stacking infinitely. For each stack, gain {{sti|{{as|8 ability haste}}}} and {{sti|{{as|1% '''bonus''' movement speed}}}}, and reduce your {{sti|size}} by 4%. Lose 50% of stacks on death.<br><br>''Size reduction is capped at 80% (20 stacks).''",
      "text": "Scoring a champion takedown generates a stack, stacking infinitely. For each stack, gain 8 ability haste and 1% bonus movement speed, and reduce your size by 4%. Lose 50% of stacks on death.\n\nSize reduction is capped at 80% (20 stacks)."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "ability-haste"
    ]
  },
  {
    "id": "shrink-ray",
    "name": "Shrink Ray",
    "tier": "Gold",
    "description": {
      "raw": "Basic attacks reduce the target's damage dealt for 3 seconds, refreshing with each hit. Their {{sti|size}} is also reduced significantly for the duration.",
      "text": "Basic attacks reduce the target's damage dealt for 3 seconds, refreshing with each hit. Their size is also reduced significantly for the duration."
    },
    "levels": [
      {
        "level": 1,
        "raw": "15% damage and size reduction.",
        "text": "15% damage and size reduction."
      },
      {
        "level": 2,
        "raw": "20% damage and size reduction.<br><br>{{sbc|Max-level effect:}} Do {{pp|key=%|type=target's size|5;10;15;20|Large;Medium;Small;Extra Small}} '''bonus''' damage to small targets.",
        "text": "20% damage and size reduction.\n\nMax-level effect: Do 5;10;15;20 bonus damage to small targets."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "skilled-sniper",
    "name": "Skilled Sniper",
    "tier": "Gold",
    "description": {
      "raw": "Hitting an enemy with a basic ability while located at least {{tip|er|icononly=true}} 700 units away from them at the time of the hit {{sti|cooldown|reduces the '''current''' cooldown}} of that ability to {{fd|0.5}} seconds. If the ability hit is from a damage over time effect, the cooldown of the ability is instead reduced to 3 seconds if it is not already below that.",
      "text": "Hitting an enemy with a basic ability while located at least 700 units away from them at the time of the hit reduces the current cooldown of that ability to 0.5 seconds. If the ability hit is from a damage over time effect, the cooldown of the ability is instead reduced to 3 seconds if it is not already below that."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "slow-and-steady",
    "name": "Slow and Steady",
    "tier": "Gold",
    "description": {
      "raw": "Your {{sti|{{as|'''base''' attack speed}}}} is set to a static amount of {{as|{{fd|0.65}}|as}} and your attack rate no longer benefits from any source of attack speed bonuses. In return, you convert all {{sti|{{as|'''bonus''' attack speed}}}} into {{sti|{{as|'''bonus''' attack damage}}}}.",
      "text": "Your base attack speed is set to a static amount of 0.65 and your attack rate no longer benefits from any source of attack speed bonuses. In return, you convert all bonus attack speed into bonus attack damage."
    },
    "levels": [
      {
        "level": 1,
        "raw": "Convert ratio: {{sti|{{as|{{fd|0.75}} '''bonus''' attack damage}}}} from every {{sti|{{as|1% '''bonus''' attack speed}}}}.",
        "text": "Convert ratio: 0.75 bonus attack damage from every 1% bonus attack speed."
      },
      {
        "level": 2,
        "raw": "Convert ratio: {{sti|{{as|1 '''bonus''' attack damage}}}} from every {{sti|{{as|1% '''bonus''' attack speed}}}}.<br><br>{{sbc|Max-level effect:}} Gain {{sti|{{as|30% life steal}}}}.",
        "text": "Convert ratio: 1 bonus attack damage from every 1% bonus attack speed.\n\nMax-level effect: Gain 30% life steal."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "attack-speed"
    ]
  },
  {
    "id": "soul-siphon",
    "name": "Soul Siphon",
    "tier": "Gold",
    "description": {
      "raw": "Your {{tip|critical strike|critical strikes}} {{tip|heal}} you for a part of damage dealt. Additionally, gain {{as|25% critical strike chance}}.",
      "text": "Your critical strikes heal you for a part of damage dealt. Additionally, gain 25% critical strike chance."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{tip|Heal}} for 10% damage done by critical strikes.",
        "text": "Heal for 10% damage done by critical strikes."
      },
      {
        "level": 2,
        "raw": "{{tip|Heal}} for 20% damage done by critical strikes.",
        "text": "Heal for 20% damage done by critical strikes."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "crit",
      "healing"
    ]
  },
  {
    "id": "stats-on-stats",
    "name": "Stats on Stats!",
    "tier": "Gold",
    "description": {
      "raw": "Upon selecting this augment, gain {{ii|Stat Bonus|Stat Bonus Anvils}} for free.",
      "text": "Upon selecting this augment, gain Stat Bonus Anvils for free."
    },
    "levels": [
      {
        "level": 1,
        "raw": "3 {{ii|Stat Bonus|Stat Bonus Anvils}}.",
        "text": "3 Stat Bonus Anvils."
      },
      {
        "level": 2,
        "raw": "Gain another {{ii|Stat Bonus|Stat Bonus Anvils}}, for a total of 4.",
        "text": "Gain another Stat Bonus Anvils, for a total of 4."
      },
      {
        "level": 3,
        "raw": "Gain another {{ii|Stat Bonus|Stat Bonus Anvils}}, for a total of 5.<br><br>{{sbc|Max-level effect:}} Gain a {{ii|Stat Bonus|Prismatic Stat Anvil}}. Increase stats from {{ii|Stat Bonus|Stat Bonus Anvils}} by 20%.",
        "text": "Gain another Stat Bonus Anvils, for a total of 5.\n\nMax-level effect: Gain a Prismatic Stat Anvil. Increase stats from Stat Bonus Anvils by 20%."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [
        "Stat Bonus"
      ],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "summoner-revolution",
    "name": "Summoner Revolution",
    "tier": "Gold",
    "description": {
      "raw": "The first several times you use each unique summoner spell in the current phase of the round, set its cooldown to {{sti|cooldown|3 seconds}} instead of its default. Additionally, the {{sti|cooldown}} of your {{si|Flash}} resets every round.",
      "text": "The first several times you use each unique summoner spell in the current phase of the round, set its cooldown to 3 seconds instead of its default. Additionally, the cooldown of your Flash resets every round."
    },
    "levels": [
      {
        "level": 1,
        "raw": "First 1 time.",
        "text": "First 1 time."
      },
      {
        "level": 2,
        "raw": "First 2 times.",
        "text": "First 2 times."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "symbiotic-mutation",
    "name": "Symbiotic Mutation",
    "tier": "Gold",
    "description": {
      "raw": "Copy a random [[File:Augment.png|20px|icononly=true]] augment from your teammate upon selecting this augment and upon entering a new round's ''Shop Phase'', with the copied augment changing every round.<br><br>''This effect cannot grant you an augment that is not applicable to your champion.''",
      "text": "Copy a random augment from your teammate upon selecting this augment and upon entering a new round's Shop Phase, with the copied augment changing every round.\n\nThis effect cannot grant you an augment that is not applicable to your champion."
    },
    "levels": [],
    "notes": {
      "raw": "* You cannot get the same augment twice in a row.\n** If there is only one augment you can get and you ''Symbiotic Mutation'' already copied it last round, you will gain ''Augment 405'' instead.\n* You gain the {{ii|Stat Bonus|Stat Bonus Anvils}} from ''Stats!'', ''Stats on Stats'' and ''Stats on Stats on Stats!'' every time ''Symbiotic Mutation'' copies one of those augments.\n* The first time ''Symbiotic Mutation'' copies ''Gamba Anvil'' you get {{g|1000}}, after that you only gain the cost reduction.\n",
      "text": "* You cannot get the same augment twice in a row.\n** If there is only one augment you can get and you Symbiotic Mutation already copied it last round, you will gain Augment 405 instead.\n* You gain the Stat Bonus Anvils from Stats!, Stats on Stats and Stats on Stats on Stats! every time Symbiotic Mutation copies one of those augments.\n* The first time Symbiotic Mutation copies Gamba Anvil you get 1000, after that you only gain the cost reduction."
    },
    "references": {
      "augments": [],
      "champions": [],
      "items": [
        "Stat Bonus"
      ],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "tank-engine",
    "name": "Tank Engine",
    "tier": "Gold",
    "description": {
      "raw": "Scoring a champion {{tip|takedown}} permanently grants {{sti|{{as|'''bonus maximum''' health}}}} and {{sti|size}}. This effect can be triggered only once per champion per round.",
      "text": "Scoring a champion takedown permanently grants bonus maximum health and size. This effect can be triggered only once per champion per round."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{sti|{{as|2% '''bonus maximum''' health}}}}.</li><li>{{sti|10% size}}.</li></ul>",
        "text": "- 2% bonus maximum health.\n- 10% size."
      },
      {
        "level": 2,
        "raw": "<ul><li>{{sti|{{as|5% '''bonus maximum''' health}}}}.</li><li>{{sti|15% size}}.</li></ul>",
        "text": "- 5% bonus maximum health.\n- 15% size."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "healing"
    ]
  },
  {
    "id": "thread-the-needle",
    "name": "Thread the Needle",
    "tier": "Gold",
    "description": {
      "raw": "Grants {{sti|{{as|armor penetration}}}} and {{sti|{{as|magic penetration}}}}.",
      "text": "Grants armor penetration and magic penetration."
    },
    "levels": [
      {
        "level": 1,
        "raw": "15% {{sti|{{as|armor penetration}}}} and {{sti|{{as|magic penetration}}}}.",
        "text": "15% armor penetration and magic penetration."
      },
      {
        "level": 2,
        "raw": "20% {{sti|{{as|armor penetration}}}} and {{sti|{{as|magic penetration}}}}.",
        "text": "20% armor penetration and magic penetration."
      },
      {
        "level": 3,
        "raw": "35% {{sti|{{as|armor penetration}}}} and {{sti|{{as|magic penetration}}}}.",
        "text": "35% armor penetration and magic penetration."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "transmute-prismatic",
    "name": "Transmute: Prismatic",
    "tier": "Gold",
    "description": {
      "raw": "Gain one random [[File:Augment.png|20px|icononly=true]] Prismatic augment, excluding the other two offerings in your current assortment.",
      "text": "Gain one random Prismatic augment, excluding the other two offerings in your current assortment."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "trickster-demon",
    "name": "Trickster Demon",
    "tier": "Gold",
    "description": {
      "raw": "Upon exiting {{tip|stealth}}, unleash an explosion in a {{tip|cr|icononly=true}} 300 radius around you, dealing {{as|magic damage}} to nearby enemies. Upon your {{tip|clone|clones}} and traps being destroyed or expiring, they will also trigger this effect around them.",
      "text": "Upon exiting stealth, unleash an explosion in a 300 radius around you, dealing magic damage to nearby enemies. Upon your clones and traps being destroyed or expiring, they will also trigger this effect around them."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{as|{{pp|200 to 400}}|magic damage}} {{as|(+ 30% '''bonus''' AD)}} {{as|(+ 40% AP)}} {{as|magic damage}}.",
        "text": "200 to 400 magic damage (+ 30% bonus AD) (+ 40% AP) magic damage."
      },
      {
        "level": 2,
        "raw": "{{as|{{pp|400 to 600}}|magic damage}} {{as|(+ 40% '''bonus''' AD)}} {{as|(+ 60% AP)}} {{as|magic damage}}.",
        "text": "400 to 600 magic damage (+ 40% bonus AD) (+ 60% AP) magic damage."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "twice-thrice",
    "name": "Twice Thrice",
    "tier": "Gold",
    "description": {
      "raw": "Basic attacks generate a stack. At maximum stack, your next basic attack consumes all stacks to apply {{tip|on-hit}} effects again at 100% effectiveness.",
      "text": "Basic attacks generate a stack. At maximum stack, your next basic attack consumes all stacks to apply on-hit effects again at 100% effectiveness."
    },
    "levels": [
      {
        "level": 1,
        "raw": "Maximum stack: 2.",
        "text": "Maximum stack: 2."
      },
      {
        "level": 2,
        "raw": "Maximum stack: 1.",
        "text": "Maximum stack: 1."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "undying-guard",
    "name": "Undying Guard",
    "tier": "Gold",
    "description": {
      "raw": "Upon activating {{ais|Cultivation of War|Zaahen}} revive, deal {{as|75|physical damage}} {{as|(+ 100% AD)}} {{as|(+ 110% AP)}} {{as|(+ 15% of target's '''current''' health)}} {{as|physical damage}} to nearby enemies and {{tip|airborne|knock back}} all targets hit up to {{tip|cr|icononly=true}} 700 units over {{fd|0.75}} seconds, as well as {{tip|stun|stunning}} them for the same duration.<br><br>For the next 4 seconds, gain {{sti|{{as|30% '''bonus''' movement speed}}}} and become {{tip|invulnerable}} against enemy {{tip|champions}} farther than {{tip|cr|icononly=true}} 450 units from yourself.<br><br>''This augment is only available for {{ci|Zaahen}}.''",
      "text": "Upon activating Cultivation of War revive, deal 75 physical damage (+ 100% AD) (+ 110% AP) (+ 15% of target's current health) physical damage to nearby enemies and knock back all targets hit up to 700 units over 0.75 seconds, as well as stunning them for the same duration.\n\nFor the next 4 seconds, gain 30% bonus movement speed and become invulnerable against enemy champions farther than 450 units from yourself.\n\nThis augment is only available for Zaahen."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Zaahen"
      ],
      "items": [],
      "runes": []
    },
    "tags": [
      "champion-specific",
      "healing"
    ]
  },
  {
    "id": "unshackled",
    "name": "Unshackled",
    "tier": "Gold",
    "description": {
      "raw": "You can now cast {{cai|Hijack|Sylas}} on your ally to steal their {{tip|ability|ultimate ability}}. When you score a takedown, the '''total''' lockout duration on a single target and the '''total''' cooldown of your ultimate are reduced by {{sti|cooldown|20%}}. Gain {{sti|ability haste|{{as|60 '''Ultimate''' Haste|ability haste}}}}.<br><br>''This augment is only available for {{ci|Sylas}}.''",
      "text": "You can now cast Hijack on your ally to steal their ultimate ability. When you score a takedown, the total lockout duration on a single target and the total cooldown of your ultimate are reduced by 20%. Gain 60 Ultimate Haste ability haste.\n\nThis augment is only available for Sylas."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Sylas"
      ],
      "items": [],
      "runes": []
    },
    "tags": [
      "ability-haste",
      "champion-specific"
    ]
  },
  {
    "id": "unstable-transmutation",
    "name": "Unstable Transmutation",
    "tier": "Gold",
    "description": {
      "raw": "At the start of each round, this augment transforms into a random [[File:Augment.png|20px|icononly=true]] augment, either without levels or at its max level.",
      "text": "At the start of each round, this augment transforms into a random augment, either without levels or at its max level."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "upgrade-hubris",
    "name": "Upgrade Hubris",
    "tier": "Gold",
    "description": {
      "raw": "Gain {{g|250}} on taking this augment. Upgrades {{ii|Hubris}}, empowering {{nie|Eminence}} to {{tip|heal}} you for {{as|5% '''maximum''' health}} + (1% per stack) {{as|'''missing''' health}} upon being triggered and grant you {{sti|ms|{{as|10|ms}}}} (+ 5 per stack) {{as|'''bonus''' movement speed}} for its duration.",
      "text": "Gain 250 on taking this augment. Upgrades Hubris, empowering Eminence to heal you for 5% maximum health + (1% per stack) missing health upon being triggered and grant you 10 (+ 5 per stack) bonus movement speed for its duration."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [
        "Hubris"
      ],
      "runes": []
    },
    "tags": [
      "healing"
    ]
  },
  {
    "id": "vanish",
    "name": "Vanish",
    "tier": "Gold",
    "description": {
      "raw": "Replaces {{si|Flee}} with ''{{si|Vanish}}''.<br><br>[[File:Vanish augment spell.png|20px|link=]] {{sbc|Vanish:}} {{#invoke:SpellData|geteffect|Vanish}}",
      "text": "Replaces Flee with Vanish.\n\nVanish: geteffect"
    },
    "levels": [
      {
        "level": 1,
        "raw": "3 second duration.",
        "text": "3 second duration."
      },
      {
        "level": 2,
        "raw": "6 second duration.<br><br>{{sbc|Max-level effect:}} Casting this spell grants you {{sti|{{as|25% '''bonus''' movement speed}}}}.",
        "text": "6 second duration.\n\nMax-level effect: Casting this spell grants you 25% bonus movement speed."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "flee-replacement"
    ]
  },
  {
    "id": "vengeance",
    "name": "Vengeance",
    "tier": "Gold",
    "description": {
      "raw": "After your ally dies once, gain increased damage and {{sti|{{as|omnivamp}}}} for the remainder of the round.",
      "text": "After your ally dies once, gain increased damage and omnivamp for the remainder of the round."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{ft|24% increased damage (teams of 2).|15% increased damage (teams of 3).}}<br>{{ft|{{sti|{{as|24% omnivamp}}}} (teams of 2).|{{sti|{{as|15% omnivamp}}}} (teams of 3).}}",
        "text": "24% increased damage (teams of 2).\n24% omnivamp (teams of 2)."
      },
      {
        "level": 2,
        "raw": "{{ft|28% increased damage (teams of 2).|20% increased damage (teams of 3).}}<br>{{ft|{{sti|{{as|28% omnivamp}}}} (teams of 2).|{{sti|{{as|20% omnivamp}}}} (teams of 3).}}",
        "text": "28% increased damage (teams of 2).\n28% omnivamp (teams of 2)."
      },
      {
        "level": 3,
        "raw": "{{ft|32% increased damage (teams of 2).|25% increased damage (teams of 3).}}<br>{{ft|{{sti|{{as|32% omnivamp}}}} (teams of 2).|{{sti|{{as|25% omnivamp}}}} (teams of 3).}}",
        "text": "32% increased damage (teams of 2).\n32% omnivamp (teams of 2)."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "vulnerability",
    "name": "Vulnerability",
    "tier": "Gold",
    "description": {
      "raw": "Damage dealt by items and damage over time effects can now {{tip|critical strike|critically strike}} for extra damage. Additionally, gain {{sti|{{as|25% critical strike chance}}}}.<br><br>If both ''Vulnerability'' and [[File:Jeweled Gauntlet ar augment.png|20px|link=|An icon for the Arena augment Jeweled Gauntlet]] ''Jeweled Gauntlet'' are equipped, only rolls the critical strike chance of the augment that has the higher critical damage (or either if equal).",
      "text": "Damage dealt by items and damage over time effects can now critically strike for extra damage. Additionally, gain 25% critical strike chance.\n\nIf both Vulnerability and Jeweled Gauntlet are equipped, only rolls the critical strike chance of the augment that has the higher critical damage (or either if equal)."
    },
    "levels": [
      {
        "level": 1,
        "raw": "140% + {{as|'''bonus''' critical damage}} extra damage.",
        "text": "140% + bonus critical damage extra damage."
      },
      {
        "level": 2,
        "raw": "170% + {{as|'''bonus''' critical damage}} extra damage.",
        "text": "170% + bonus critical damage extra damage."
      }
    ],
    "notes": {
      "raw": "-- https://youtu.be/SnWIhAqkuWo\n   * Certain non-damage-over-time abilities will benefit from this augment.{{bug}}\n   * ''Vulnerability'' now stacks multiplicatively with ''Jeweled Gauntlet'' on those non-damage-over-time abilities.{{bug}} On damage-over-time abilities, only one of ''Vulnerability'' and ''Jeweled Gauntlet'' will take effect.\n   ",
      "text": "-- https://youtu.be/SnWIhAqkuWo\n* Certain non-damage-over-time abilities will benefit from this augment.\n* Vulnerability now stacks multiplicatively with Jeweled Gauntlet on those non-damage-over-time abilities. On damage-over-time abilities, only one of Vulnerability and Jeweled Gauntlet will take effect."
    },
    "references": {
      "augments": [
        "Jeweled Gauntlet"
      ],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "crit",
      "item"
    ]
  },
  {
    "id": "well-be-right-back",
    "name": "We'll Be Right Back",
    "tier": "Gold",
    "description": {
      "raw": "Replaces {{si|Flee}} with ''{{si|Time Stop}}''.<br><br>[[File:Time Stop augment spell.png|20px|link=]] {{sbc|Time Stop:}} {{#invoke:SpellData|geteffect|Time Stop}}",
      "text": "Replaces Flee with Time Stop.\n\nTime Stop: geteffect"
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{tip|Heal}} for {{as|25% of your '''missing''' health}}.",
        "text": "Heal for 25% of your missing health."
      },
      {
        "level": 2,
        "raw": "{{tip|Heal}} for {{as|50% of your '''missing''' health}}.<br><br>{{sbc|Max-level effect:}} You can now move when in {{tip|stasis}}.",
        "text": "Heal for 50% of your missing health.\n\nMax-level effect: You can now move when in stasis."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "flee-replacement",
      "healing"
    ]
  },
  {
    "id": "willing-sacrifice",
    "name": "Willing Sacrifice",
    "tier": "Gold",
    "description": {
      "raw": "When your ally drops below {{sti|{{as|30% of their '''maximum''' health}}}}, reduce your {{sti|{{as|'''current''' health}}}} by {{as|25%|health}} to grant them a {{tip|shield}} equal to {{sti|{{as|a percentage of your '''current''' health}}}} for 10 seconds.",
      "text": "When your ally drops below 30% of their maximum health, reduce your current health by 25% health to grant them a shield equal to a percentage of your current health for 10 seconds."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{as|25% of your '''current''' health}} {{tip|shield}}.",
        "text": "25% of your current health shield."
      },
      {
        "level": 2,
        "raw": "{{as|35% of your '''current''' health}} {{tip|shield}}.<br><br>{{sbc|Max-level effect:}} When this effect triggers, your teammate will be {{tip|cleanse|cleansed}} as well.",
        "text": "35% of your current health shield.\n\nMax-level effect: When this effect triggers, your teammate will be cleansed as well."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "healing",
      "shield"
    ]
  },
  {
    "id": "with-haste",
    "name": "With Haste",
    "tier": "Gold",
    "description": {
      "raw": "Grants {{sti|{{as|'''bonus''' movement speed}}}} based on your {{sti|{{as|ability haste}}}}.",
      "text": "Grants bonus movement speed based on your ability haste."
    },
    "levels": [
      {
        "level": 1,
        "raw": "120% of your {{sti|{{as|ability haste}}}} converted to {{sti|{{as|movement speed}}}}.",
        "text": "120% of your ability haste converted to movement speed."
      },
      {
        "level": 2,
        "raw": "225% of your {{sti|{{as|ability haste}}}} converted to {{sti|{{as|movement speed}}}}.",
        "text": "225% of your ability haste converted to movement speed."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "ability-haste"
    ]
  }
] satisfies Augment[]
