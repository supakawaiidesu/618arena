import type { Augment } from './types'

// Generated once from scraped Arena augment wiki data. This checked-in file is the app data source.
export const silverAugments = [
  {
    "id": "404-augment-not-found",
    "name": "404 Augment Not Found",
    "tier": "Silver",
    "description": {
      "raw": "Gain 3 {{ii|Cappa Juice|hats}} per round.<br><br>''{{sbc|Error:}} This augment is granted when an effect attempts to grant an invalid or duplicate augment.''",
      "text": "Gain 3 hats per round.\n\nError: This augment is granted when an effect attempts to grant an invalid or duplicate augment."
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
    "tags": []
  },
  {
    "id": "adamant",
    "name": "Adamant",
    "tier": "Silver",
    "description": {
      "raw": "{{tip|immobilize|Immobilizing}} or {{tip|ground|grounding}} an enemy champion grants {{pp|2 to 10}} {{sti|{{as|'''bonus''' armor}}}} and {{sti|{{as|'''bonus''' magic resistance}}}} for 10 seconds, stacking up to 10 times for a total of {{pp|20 to 100}} '''bonus''' resistances, and refreshing on subsequent triggers ({{sti|5 seconds cooldown}} per {{tip|cast instance}}).",
      "text": "Immobilizing or grounding an enemy champion grants 2 to 10 bonus armor and bonus magic resistance for 10 seconds, stacking up to 10 times for a total of 20 to 100 bonus resistances, and refreshing on subsequent triggers (5 seconds cooldown per cast instance)."
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
    "id": "adapt",
    "name": "ADAPt",
    "tier": "Silver",
    "description": {
      "raw": "Convert '''all''' of your {{sti|{{as|'''bonus''' attack damage}}}} into {{sti|{{as|ability power}}}}. Additionally, increase your {{as|ability power by a percentage}}.",
      "text": "Convert all of your bonus attack damage into ability power. Additionally, increase your ability power by a percentage."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>Conversion rate: {{sti|{{as|{{fd|1.67}} ability power|ap}}}} per {{sti|{{as|1 '''bonus''' attack damage|ad}}}}.</li><li>Increase {{sti|{{as|ability power}}}} by 10%.</li></ul>",
        "text": "- Conversion rate: 1.67 ability power per 1 bonus attack damage.\n- Increase ability power by 10%."
      },
      {
        "level": 2,
        "raw": "<ul><li>Conversion rate: {{sti|{{as|{{fd|2.22}} ability power|ap}}}} per {{sti|{{as|1 '''bonus''' attack damage|ad}}}}.</li><li>Increase {{sti|{{as|ability power}}}} by 20%.</li></ul>",
        "text": "- Conversion rate: 2.22 ability power per 1 bonus attack damage.\n- Increase ability power by 20%."
      }
    ],
    "notes": {
      "raw": "* {{ci|Ryze}} cannot receive this augment.\n",
      "text": "* Ryze cannot receive this augment."
    },
    "references": {
      "augments": [],
      "champions": [
        "Ryze"
      ],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "augmented-power",
    "name": "Augmented Power",
    "tier": "Silver",
    "description": {
      "raw": "Your augments and [[items]] deal '''increased''' damage.",
      "text": "Your augments and items deal increased damage."
    },
    "levels": [
      {
        "level": 1,
        "raw": "20% {{as|(+ 1% per 100 AD)}} {{as|(+ 1% per 100 AP)}} increased damage.",
        "text": "20% (+ 1% per 100 AD) (+ 1% per 100 AP) increased damage."
      },
      {
        "level": 2,
        "raw": "40% {{as|(+ 1% per 100 AD)}} {{as|(+ 1% per 100 AP)}} increased damage.<br><br>{{sbc|Max-level effect:}} {{sti|Heal}} for 50% damage done by [[File:Augment.png|20px|icononly=true]] augments and items.",
        "text": "40% (+ 1% per 100 AD) (+ 1% per 100 AP) increased damage.\n\nMax-level effect: Heal for 50% damage done by augments and items."
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
      "item"
    ]
  },
  {
    "id": "blunt-force",
    "name": "Blunt Force",
    "tier": "Silver",
    "description": {
      "raw": "Increases {{sti|{{as|'''total''' attack damage}}}} by a percentage.",
      "text": "Increases total attack damage by a percentage."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|10% '''total''' attack damage}}}}",
        "text": "10% total attack damage"
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|25% '''total''' attack damage}}}}",
        "text": "25% total attack damage"
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
    "id": "bravest-of-the-brave",
    "name": "Bravest of the Brave",
    "tier": "Silver",
    "description": {
      "raw": "The tier of all future augment offerings is increased. If the offered augment is already prismatic, then you gain a certain amount of {{g|gold}} instead.",
      "text": "The tier of all future augment offerings is increased. If the offered augment is already prismatic, then you gain a certain amount of gold instead."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>Tier increases by 1.</li><li>Gain {{g|750}}.</li></ul>",
        "text": "- Tier increases by 1.\n- Gain 750."
      },
      {
        "level": 2,
        "raw": "<ul><li>Tier increases by 2.</li><li>Gain {{g|1500}}.</li></ul>",
        "text": "- Tier increases by 2.\n- Gain 1500."
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
    "id": "buff-buddies",
    "name": "Buff Buddies",
    "tier": "Silver",
    "description": {
      "raw": "Grants {{bi|Crest of Cinders}} and {{bi|Crest of Insight}} permanently.<br><br>This counts as a {{as|Burn}} source.",
      "text": "Grants Crest of Cinders and Crest of Insight permanently.\n\nThis counts as a Burn source."
    },
    "levels": [
      {
        "level": 2,
        "raw": "{{sbc|Max-level effect:}} Grants to your allies as well.",
        "text": "Max-level effect: Grants to your allies as well."
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
      "burn"
    ]
  },
  {
    "id": "calculated-risk",
    "name": "Calculated Risk",
    "tier": "Silver",
    "description": {
      "raw": "Your rerolls are consumed by this effect and you can no longer gain any rerolls for the remainder of the game.<br><ul><li>If you have more than 2 augments, selecting this augment immediately offers a Gold-tier augment selection screen.</li><li>If you have at most 2 augments, selecting this augment immediately offers a Prismatic-tier augment selection screen.</li></ul>",
      "text": "Your rerolls are consumed by this effect and you can no longer gain any rerolls for the remainder of the game.\n\n- If you have more than 2 augments, selecting this augment immediately offers a Gold-tier augment selection screen.\n- If you have at most 2 augments, selecting this augment immediately offers a Prismatic-tier augment selection screen."
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
    "id": "cannon-fodder",
    "name": "Cannon Fodder",
    "tier": "Silver",
    "description": {
      "raw": "At the start of the combat phase in each round, launch yourself from a [[catapult]].<br><br>The catapult lasts for up to 20 seconds before expiring.",
      "text": "At the start of the combat phase in each round, launch yourself from a catapult.\n\nThe catapult lasts for up to 20 seconds before expiring."
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
    "id": "castle",
    "name": "Castle",
    "tier": "Silver",
    "description": {
      "raw": "Replaces {{si|Flee}} with ''{{si|Castle}}''.<br><br>[[File:Castle augment spell.png|20px|link=]] {{sbc|Castle:}} {{#invoke:SpellData|geteffect|Castle}}",
      "text": "Replaces Flee with Castle.\n\nCastle: geteffect"
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|40% '''bonus''' movement speed}}}}.",
        "text": "40% bonus movement speed."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|80% '''bonus''' movement speed}}}}.<br><br>{{sbc|Max-level effect:}} Passing through an enemy champion refreshes the duration of the {{tip|shield}} and doubles it.",
        "text": "80% bonus movement speed.\n\nMax-level effect: Passing through an enemy champion refreshes the duration of the shield and doubles it."
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
      "shield"
    ]
  },
  {
    "id": "clothesline",
    "name": "Clothesline",
    "tier": "Silver",
    "description": {
      "raw": "Form a {{tip|tether}} between you and your ally that continuously {{as|Burns}} enemies it touches, dealing {{as|magic damage}} every {{fd|0.25}} seconds. The tether has a width of {{tip|er|icononly=true}} 100 units. ''Attributes the damage to the player who has equipped Clothesline.''",
      "text": "Form a tether between you and your ally that continuously Burns enemies it touches, dealing magic damage every 0.25 seconds. The tether has a width of 100 units. Attributes the damage to the player who has equipped Clothesline."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{pp|5 to 200|color=magic damage}} {{as|(+ 28% '''bonus''' AD)}} {{as|(+ 16% AP)}} {{as|(+ 2% '''maximum''' health)}} {{as|magic damage}}.",
        "text": "5 to 200 (+ 28% bonus AD) (+ 16% AP) (+ 2% maximum health) magic damage."
      },
      {
        "level": 2,
        "raw": "{{pp|5 to 200|color=magic damage}} {{as|(+ 36% '''bonus''' AD)}} {{as|(+ 28% AP)}} {{as|(+ 3% '''maximum''' health)}} {{as|magic damage}}.",
        "text": "5 to 200 (+ 36% bonus AD) (+ 28% AP) (+ 3% maximum health) magic damage."
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
    "id": "contract-killer",
    "name": "Contract Killer",
    "tier": "Silver",
    "description": {
      "raw": "At the start of the combat phase in each round, mark a champion on the enemy team. The mark causes them to take increased damage from your team and dispense an '''additional''' kill bounty of {{g|150}} when slain. This bounty is granted to both you and your ally when the marked target is slain.<br><br>Each enemy champion can only have one mark per round.",
      "text": "At the start of the combat phase in each round, mark a champion on the enemy team. The mark causes them to take increased damage from your team and dispense an additional kill bounty of 150 when slain. This bounty is granted to both you and your ally when the marked target is slain.\n\nEach enemy champion can only have one mark per round."
    },
    "levels": [
      {
        "level": 1,
        "raw": "20% increased damage.",
        "text": "20% increased damage."
      },
      {
        "level": 2,
        "raw": "30% increased damage.",
        "text": "30% increased damage."
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
    "id": "crack-open-that-egg",
    "name": "Crack Open That Egg",
    "tier": "Silver",
    "description": {
      "raw": "Your {{tip|shield|shields}} detonate upon expiration, creating an explosion that deals {{as|magic damage}} equal to a multiple of the shield to nearby enemies.",
      "text": "Your shields detonate upon expiration, creating an explosion that deals magic damage equal to a multiple of the shield to nearby enemies."
    },
    "levels": [
      {
        "level": 1,
        "raw": "100% shield converted to damage.",
        "text": "100% shield converted to damage."
      },
      {
        "level": 2,
        "raw": "200% shield converted to damage.",
        "text": "200% shield converted to damage."
      },
      {
        "level": 3,
        "raw": "300% shield converted to damage.",
        "text": "300% shield converted to damage."
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
    "id": "deft",
    "name": "Deft",
    "tier": "Silver",
    "description": {
      "raw": "Grants {{sti|{{as|'''bonus''' attack speed}}}}.",
      "text": "Grants bonus attack speed."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|40% '''bonus''' attack speed}}}}.",
        "text": "40% bonus attack speed."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|75% '''bonus''' attack speed}}}}.",
        "text": "75% bonus attack speed."
      },
      {
        "level": 3,
        "raw": "{{sti|{{as|120% '''bonus''' attack speed}}}}.<br><br>{{sbc|Max-level effect:}} {{as|Attack speed cap|as}} increases to {{as|10|as}}.",
        "text": "120% bonus attack speed.\n\nMax-level effect: Attack speed cap increases to 10."
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
    "id": "dematerialize",
    "name": "Dematerialize",
    "tier": "Silver",
    "description": {
      "raw": "Scoring a champion {{tip|takedown}} grants permanent {{as|adaptive force}}. This effect can be triggered only once per champion per round.<br><br>If this is your second augment, also gain {{adaptive|30}}.",
      "text": "Scoring a champion takedown grants permanent adaptive force. This effect can be triggered only once per champion per round.\n\nIf this is your second augment, also gain 30."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{adaptive|10}}.",
        "text": "10."
      },
      {
        "level": 2,
        "raw": "{{adaptive|20}}.",
        "text": "20."
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
      "adaptive"
    ]
  },
  {
    "id": "desecrator",
    "name": "Desecrator",
    "tier": "Silver",
    "description": {
      "raw": "{{tip|immobilize|Immobilizing}} an enemy champion generates {{as|10 Cursed Power}}. You can generate up to {{as|30|Curse}} (+ {{as|20|Curse}}{{times}}number of Curse augments equipped by you and your teammate) {{as|Cursed Power}} per round. Permanently gain {{sti|{{as|'''bonus''' armor}}}} and {{sti|{{as|'''bonus''' magic resistance}}}} equal to {{as|a percentage of your Cursed Power}}.",
      "text": "Immobilizing an enemy champion generates 10 Cursed Power. You can generate up to 30 Curse (+ 20 Cursexnumber of Curse augments equipped by you and your teammate) Cursed Power per round. Permanently gain bonus armor and bonus magic resistance equal to a percentage of your Cursed Power."
    },
    "levels": [
      {
        "level": 1,
        "raw": "20% convert rate.",
        "text": "20% convert rate."
      },
      {
        "level": 2,
        "raw": "30% convert rate.",
        "text": "30% convert rate."
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
    "id": "despoil",
    "name": "Despoil",
    "tier": "Silver",
    "description": {
      "raw": "{{tip|Dash|Dashing}} or {{tip|blink|blinking}} near an enemy champion generates {{as|2 Cursed Power}}. You can generate up to {{as|30|Curse}} (+ {{as|20|Curse}}{{times}}number of Curse augments equipped by you and your teammate) {{as|Cursed Power}} per round. Permanently gain {{sti|{{as|'''bonus''' movement speed}}}} equal to {{as|10% of your Cursed Power}}.",
      "text": "Dashing or blinking near an enemy champion generates 2 Cursed Power. You can generate up to 30 Curse (+ 20 Cursexnumber of Curse augments equipped by you and your teammate) Cursed Power per round. Permanently gain bonus movement speed equal to 10% of your Cursed Power."
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
      "curse",
      "mobility"
    ]
  },
  {
    "id": "dive-bomber",
    "name": "Dive Bomber",
    "tier": "Silver",
    "description": {
      "raw": "Your team's first death each round creates an explosion at the location of the champion that died, dealing {{as|true damage}} equal to {{sti|{{as|a percentage of the target's '''maximum''' health}}}} to enemies within 500 units. ''This effect cannot award victory to the user if they are the last one standing on their team.''",
      "text": "Your team's first death each round creates an explosion at the location of the champion that died, dealing true damage equal to a percentage of the target's maximum health to enemies within 500 units. This effect cannot award victory to the user if they are the last one standing on their team."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|15% of the target's '''maximum''' health}}}}.",
        "text": "15% of the target's maximum health."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|30% of the target's '''maximum''' health}}}}.",
        "text": "30% of the target's maximum health."
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
    "id": "dont-blink",
    "name": "Don't Blink",
    "tier": "Silver",
    "description": {
      "raw": "Deal increased damage based on {{sti|{{as|movement speed}}}} you have more than the target.",
      "text": "Deal increased damage based on movement speed you have more than the target."
    },
    "levels": [
      {
        "level": 1,
        "raw": "1% increased damage per {{sti|{{as|10 movement speed}}}} difference.",
        "text": "1% increased damage per 10 movement speed difference."
      },
      {
        "level": 2,
        "raw": "2% increased damage per {{sti|{{as|10 movement speed}}}} difference.",
        "text": "2% increased damage per 10 movement speed difference."
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
    "id": "dont-chase",
    "name": "Don't Chase",
    "tier": "Silver",
    "description": {
      "raw": "Gain and activate {{cai|Poison Trail|Singed}}.<br><br>{{sbc|Poison Trail:}} Gain {{tip|ghosting}} and continually create a toxic cloud behind you that lingers for {{fd|3.25}} seconds. The cloud inflicts {{tip|poison}} to enemies within every {{fd|0.5}} seconds, which deals {{as|{{pp|15/4 to 125/4}}|magic damage}} {{as|(+ {{ap|20/4}}% '''bonus''' AD)}} {{as|(+ {{ap|10/4}}% AP)}} {{as|magic damage}} every {{fd|0.25}} seconds over 2 seconds.",
      "text": "Gain and activate Poison Trail.\n\nPoison Trail: Gain ghosting and continually create a toxic cloud behind you that lingers for 3.25 seconds. The cloud inflicts poison to enemies within every 0.5 seconds, which deals 15/4 to 125/4 magic damage (+ 20/4% bonus AD) (+ 10/4% AP) magic damage every 0.25 seconds over 2 seconds."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Singed"
      ],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "energetic",
    "name": "Energetic",
    "tier": "Silver",
    "description": {
      "raw": "Gain increased {{tip|Energized}} stack generation. Upon triggering an {{tip|Energized}} effect, fire a bolt that deals {{as|true damage}} equal to {{as|{{fd|0.3}}% of the target's '''maximum''' health}}.",
      "text": "Gain increased Energized stack generation. Upon triggering an Energized effect, fire a bolt that deals true damage equal to 0.3% of the target's maximum health."
    },
    "levels": [
      {
        "level": 1,
        "raw": "200% stack generation.",
        "text": "200% stack generation."
      },
      {
        "level": 2,
        "raw": "300% stack generation.",
        "text": "300% stack generation."
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
    "id": "erosion",
    "name": "Erosion",
    "tier": "Silver",
    "description": {
      "raw": "Each instance of damage dealt to an enemy reduces their {{sti|{{as|armor}}}} and {{sti|{{as|magic resistance}}}} for 4 seconds, stacking up to 20 times.",
      "text": "Each instance of damage dealt to an enemy reduces their armor and magic resistance for 4 seconds, stacking up to 20 times."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>Reduce {{sti|{{as|armor}}}} and {{sti|{{as|magic resistance}}}} by 1% per stack.</li><li>Max {{sti|{{as|armor}}}} and {{sti|{{as|magic resistance}}}} reduction: 20%</li>.</ul>",
        "text": "- Reduce armor and magic resistance by 1% per stack.\n- Max armor and magic resistance reduction: 20%\n."
      },
      {
        "level": 2,
        "raw": "<ul><li>Reduce {{sti|{{as|armor}}}} and {{sti|{{as|magic resistance}}}} by 2% per stack.</li><li>Max {{sti|{{as|armor}}}} and {{sti|{{as|magic resistance}}}} reduction: 40%</li>.</ul><br>{{sbc|Max-level effect:}} At 20 stacks, the target is {{tip|slow|slowed}} by 30%.",
        "text": "- Reduce armor and magic resistance by 2% per stack.\n- Max armor and magic resistance reduction: 40%\n.\n\nMax-level effect: At 20 stacks, the target is slowed by 30%."
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
    "id": "escapade",
    "name": "EscAPADe",
    "tier": "Silver",
    "description": {
      "raw": "Convert '''all''' of your {{sti|{{as|ability power}}}} into {{sti|{{as|'''bonus''' attack damage}}}}. Additionally, increase your {{sti|{{as|'''total''' attack damage}}}}.",
      "text": "Convert all of your ability power into bonus attack damage. Additionally, increase your total attack damage."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{sti|{{as|{{fd|0.6}} '''bonus''' attack damage|ad}}}} per {{sti|{{as|1 ability power}}}}.</li><li>{{sti|{{as|10% '''total''' attack damage}}}}.</li></ul>",
        "text": "- 0.6 bonus attack damage per 1 ability power.\n- 10% total attack damage."
      },
      {
        "level": 2,
        "raw": "<ul><li>{{sti|{{as|{{fd|0.8}} '''bonus''' attack damage|ad}}}} per {{sti|{{as|1 ability power}}}}.</li><li>{{sti|{{as|20% '''total''' attack damage}}}}.</li></ul>",
        "text": "- 0.8 bonus attack damage per 1 ability power.\n- 20% total attack damage."
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
    "id": "escape-plan",
    "name": "Escape Plan",
    "tier": "Silver",
    "description": {
      "raw": "Upon dropping below {{sti|{{as|35% health}}}}, gain a {{tip|shield}} for {{as|65% of your '''maximum''' health}}, {{sti|{{as|150% '''bonus''' movement speed}}}}, and {{sti|reduced size}} ({{sti|75 seconds cooldown}}). These effects all decay over 5 seconds.",
      "text": "Upon dropping below 35% health, gain a shield for 65% of your maximum health, 150% bonus movement speed, and reduced size (75 seconds cooldown). These effects all decay over 5 seconds."
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
      "healing",
      "shield"
    ]
  },
  {
    "id": "executioner",
    "name": "Executioner",
    "tier": "Silver",
    "description": {
      "raw": "Deal increased damage to enemies below {{as|a certain health threshold}}. Scoring a champion {{tip|takedown}} resets the cooldown of all your basic abilities.",
      "text": "Deal increased damage to enemies below a certain health threshold. Scoring a champion takedown resets the cooldown of all your basic abilities."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>10% increased damage.</li><li>{{sti|{{as|below 40% health}}}}.</li></ul>",
        "text": "- 10% increased damage.\n- below 40% health."
      },
      {
        "level": 2,
        "raw": "<ul><li>20% increased damage.</li><li>{{sti|{{as|below 50% health}}}}.</li></ul>",
        "text": "- 20% increased damage.\n- below 50% health."
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
    "id": "fallen-aegis",
    "name": "Fallen Aegis",
    "tier": "Silver",
    "description": {
      "raw": "At the start of the combat phase in each round, gain {{cai|Black Shield|Morgana}}, granting you a {{tip|shield}} that absorbs {{as|magic damage}} and grants {{tip|cc-immune|crowd control immunity}} while it holds.<br><br>''The shield's duration is refreshed once the initial delay for the combat phase is over.''",
      "text": "At the start of the combat phase in each round, gain Black Shield, granting you a shield that absorbs magic damage and grants crowd control immunity while it holds.\n\nThe shield's duration is refreshed once the initial delay for the combat phase is over."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>8 seconds duration.</li><li>{{tip|shield|icononly=true}} {{pp|150 to 300}} shield.</li></ul>",
        "text": "- 8 seconds duration.\n- 150 to 300 shield."
      },
      {
        "level": 2,
        "raw": "<ul><li>10 seconds duration.</li><li>{{tip|shield|icononly=true}} {{pp|250 to 400}} shield.</li></ul><br>{{sbc|Max-level effect:}} Regain this shield when revived by the ''revive circle'' or when exiting {{tip|stasis}} status.",
        "text": "- 10 seconds duration.\n- 250 to 400 shield.\n\nMax-level effect: Regain this shield when revived by the revive circle or when exiting stasis status."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Morgana"
      ],
      "items": [],
      "runes": []
    },
    "tags": [
      "shield"
    ]
  },
  {
    "id": "fire-sale",
    "name": "Fire Sale",
    "tier": "Silver",
    "description": {
      "raw": "Upon selecting this augment, all of your current items are sold to the shop at a higher {{g|gold}} value ''({{sbc|Starter Items & Boots:}} {{g|500}}, {{sbc|Legendary Item:}} {{g|2500}}, {{sbc|Prismatic Item:}} {{g|4000}}).''<br><br>Quest items ({{ii|Needlessly Large Rod}}, {{ii|The Golden Spatula}}, {{ii|Wooglet's Witchcap}}, as well as {{ii|Heartsteel}} if you have the [[File:Quest Steel Your Heart ar augment.png|20px|link=]] ''Quest: Steel Your Heart'' augment) and consumables will not be sold from this effect.<br><br>When this augment is removed or replaced, gain {{g|gold}} equal to 30% of {{g|gold}} gained from this augment.",
      "text": "Upon selecting this augment, all of your current items are sold to the shop at a higher gold value (Starter Items & Boots: 500, Legendary Item: 2500, Prismatic Item: 4000).\n\nQuest items (Needlessly Large Rod, The Golden Spatula, Wooglet's Witchcap, as well as Heartsteel if you have the Quest: Steel Your Heart augment) and consumables will not be sold from this effect.\n\nWhen this augment is removed or replaced, gain gold equal to 30% of gold gained from this augment."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [
        "Quest Steel Your Heart"
      ],
      "champions": [],
      "items": [
        "Heartsteel",
        "Needlessly Large Rod",
        "The Golden Spatula",
        "Wooglet's Witchcap"
      ],
      "runes": []
    },
    "tags": [
      "item",
      "quest"
    ]
  },
  {
    "id": "firefox",
    "name": "Firefox",
    "tier": "Silver",
    "description": {
      "raw": "{{as|Automatically}} cast {{cai|Fox-Fire|Ahri}}, gaining {{sti|{{as|50% '''bonus''' movement speed}}}} that decays over 2 seconds and conjuring 3 flames that orbit you clockwise for up to {{fd|2.5}} seconds at a radius of {{tip|cr|icononly=true}} 150 units. The flames will {{tt|fly toward|On a 0.25-second delay after acquisition}} the nearest {{tip|sight|visible}} enemy champion within {{tip|cr|icononly=true}} 550 units, dealing {{pp|35 to 160}} {{as|(+ 25% '''bonus''' AD}} {{as|(+ 25% AP)}} {{tip|magic damage}}, reduced to {{ft|{{pp|35*0.3 to 160*0.3}} {{as|(+ {{ap|25*0.3}}% '''bonus''' AD}} {{as|(+ {{ap|25*0.3}}% AP)}}|30% of the original damage}} for enemies hit by subsequent flames from the same cast ({{sti|7 seconds cooldown}}).",
      "text": "Automatically cast Fox-Fire, gaining 50% bonus movement speed that decays over 2 seconds and conjuring 3 flames that orbit you clockwise for up to 2.5 seconds at a radius of 150 units. The flames will fly toward the nearest visible enemy champion within 550 units, dealing 35 to 160 (+ 25% bonus AD (+ 25% AP) magic damage, reduced to 35*0.3 to 160*0.3 (+ 25*0.3% bonus AD (+ 25*0.3% AP) for enemies hit by subsequent flames from the same cast (7 seconds cooldown)."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Ahri"
      ],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "first-aid-kit",
    "name": "First-Aid Kit",
    "tier": "Silver",
    "description": {
      "raw": "Grants {{stil|{{as|heal and shield power}}}}.",
      "text": "Grants heal and shield power."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{stil|{{as|20% heal and shield power}}}}.",
        "text": "20% heal and shield power."
      },
      {
        "level": 2,
        "raw": "{{stil|{{as|35% heal and shield power}}}}.",
        "text": "35% heal and shield power."
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
    "id": "flashbang",
    "name": "Flashbang",
    "tier": "Silver",
    "description": {
      "raw": "Using {{si|Flash}} creates an explosion around the blink location that deals {{as|{{pp|70 to 240}}|magic damage}} {{as|(+ 70% AD)}} {{as|(+ 60% AP)}} {{as|magic damage}} to nearby enemies and {{tip|slow|slows}} them by 35% for {{fd|1.25}} seconds. Additionally, the cooldown of your {{si|Flash}} resets every round.<br><br>''Removed since [[V26.09]].''",
      "text": "Using Flash creates an explosion around the blink location that deals 70 to 240 magic damage (+ 70% AD) (+ 60% AP) magic damage to nearby enemies and slows them by 35% for 1.25 seconds. Additionally, the cooldown of your Flash resets every round.\n\nRemoved since V26.09."
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
      "removed"
    ]
  },
  {
    "id": "frost-wraith",
    "name": "Frost Wraith",
    "tier": "Silver",
    "description": {
      "raw": "{{as|Automatically}} cast {{cai|Ring of Frost|Lissandra}}, creating a cold pulse around you in {{tip|cr|icononly=true}} 450 radius that {{tip|root|roots}} nearby enemies for {{fd|1.25}} seconds ({{sti|{{fd|6.5}} seconds cooldown}}).",
      "text": "Automatically cast Ring of Frost, creating a cold pulse around you in 450 radius that roots nearby enemies for 1.25 seconds (6.5 seconds cooldown)."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Lissandra"
      ],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "frozen-foundations",
    "name": "Frozen Foundations",
    "tier": "Silver",
    "description": {
      "raw": "Replaces {{si|Flee}} with ''{{si|Frozen Foundations}}''.<br><br>[[File:Crystallized Will augment spell.png|20px|link=]] {{sbc|Frozen Foundations:}} {{#invoke:SpellData|geteffect|Frozen Foundations}}",
      "text": "Replaces Flee with Frozen Foundations.\n\nFrozen Foundations: geteffect"
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
    "id": "fruits-of-your-labor",
    "name": "Fruits of Your Labor",
    "tier": "Silver",
    "description": {
      "raw": "Increase the effects of [[File:Power FlowerSquare.png|20px|link=Arena#Power Flowers|An icon representing the Power Flower plant]] ''[[Arena#Power Flowers|Power Flowers]]''. When you hit a ''Power Flower'', your teammate gains its effects as well regardless of range and you both gain {{sti|{{as|40% '''bonus''' movement speed}}}} for 2 seconds.",
      "text": "Increase the effects of Power Flowers. When you hit a Power Flower, your teammate gains its effects as well regardless of range and you both gain 40% bonus movement speed for 2 seconds."
    },
    "levels": [
      {
        "level": 1,
        "raw": "20% extra effectiveness on yourself.",
        "text": "20% extra effectiveness on yourself."
      },
      {
        "level": 2,
        "raw": "40% extra effectiveness on yourself.",
        "text": "40% extra effectiveness on yourself."
      }
    ],
    "notes": {
      "raw": "    * When you share a ''Power Flower'' with your teammate, they will neither benefit from your nor their increased ''Power Flower'' effect.\n* The increased ''Power Flower'' effect {{tip|stacks additively}} with {{tt|{{iis|Guardian's Dirk}}|Starter items gone}} {{nie|Agricultural Reaper}} for a total of {{pp|type=augment level|40%;60%}} increased ''Power Flower'' effectiveness.\n  ",
      "text": "* When you share a Power Flower with your teammate, they will neither benefit from your nor their increased Power Flower effect.\n* The increased Power Flower effect stacks additively with Guardian's Dirk Agricultural Reaper for a total of 40%;60% increased Power Flower effectiveness."
    },
    "references": {
      "augments": [],
      "champions": [],
      "items": [
        "Guardian's Dirk"
      ],
      "runes": []
    },
    "tags": [
      "item"
    ]
  },
  {
    "id": "goredrink",
    "name": "Goredrink",
    "tier": "Silver",
    "description": {
      "raw": "Gain {{sti|{{as|omnivamp}}}}.",
      "text": "Gain omnivamp."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|15% omnivamp}}}}.",
        "text": "15% omnivamp."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|25% omnivamp}}}}.",
        "text": "25% omnivamp."
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
    "id": "grevious-venom",
    "name": "Grevious Venom",
    "tier": "Silver",
    "description": {
      "raw": "Dealing damage to an enemy champion reduces any upcoming {{tip|shield|shields}} and applies {{tip|Grievous Wounds}}.<br><br>If the target {{tip|heal|heals}} for a total amount that is over {{sti|{{as|60% of their '''maximum''' health}}}} while continuously afflicted with {{tip|Grievous Wounds}}, the strength of the healing reduction is increased to 80%.<br><br>This augment only reduces general and {{as|physical damage}} shields, but not purely {{as|magic damage blocking}} shields.",
      "text": "Dealing damage to an enemy champion reduces any upcoming shields and applies Grievous Wounds.\n\nIf the target heals for a total amount that is over 60% of their maximum health while continuously afflicted with Grievous Wounds, the strength of the healing reduction is increased to 80%.\n\nThis augment only reduces general and physical damage shields, but not purely magic damage blocking shields."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>50% shield reduction.</li><li>3 seconds duration.</li></ul>",
        "text": "- 50% shield reduction.\n- 3 seconds duration."
      },
      {
        "level": 2,
        "raw": "<ul><li>75% shield reduction.</li><li>4 seconds duration.</li></ul>",
        "text": "- 75% shield reduction.\n- 4 seconds duration."
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
    "id": "guilty-pleasure",
    "name": "Guilty Pleasure",
    "tier": "Silver",
    "description": {
      "raw": "{{tip|Immobilize|Immobilizing}} or {{tip|ground|grounding}} an enemy champion {{tip|heal|heals}} you ({{sti|5 seconds cooldown}} per {{tip|cast instance}}).",
      "text": "Immobilizing or grounding an enemy champion heals you (5 seconds cooldown per cast instance)."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{tip|Heal}} for {{pp|10 to 150}} {{as|(+ 1% '''maximum''' health)}}.",
        "text": "Heal for 10 to 150 (+ 1% maximum health)."
      },
      {
        "level": 2,
        "raw": "{{tip|Heal}} for {{pp|10 to 150}} {{as|(+ 2% '''maximum''' health)}}.",
        "text": "Heal for 10 to 150 (+ 2% maximum health)."
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
    "id": "heavy-hitter",
    "name": "Heavy Hitter",
    "tier": "Silver",
    "description": {
      "raw": "Basic attacks deal {{as|'''bonus''' physical damage}} equal to {{sti|{{as|a percentage of your '''maximum''' health}}}}.",
      "text": "Basic attacks deal bonus physical damage equal to a percentage of your maximum health."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|{{fd|3.5}}% of your '''maximum''' health}}}} converted to {{as|'''bonus''' physical damage}}.",
        "text": "3.5% of your maximum health converted to bonus physical damage."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|5% of your '''maximum''' health}}}} converted to {{as|'''bonus''' physical damage}}.<br><br>{{sbc|Max-level effect:}} Your basic attacks deal addition {{as|physical damage}} equal to {{sti|size|50% of your additional size}}.",
        "text": "5% of your maximum health converted to bonus physical damage.\n\nMax-level effect: Your basic attacks deal addition physical damage equal to 50% of your additional size."
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
    "id": "hextech-soul",
    "name": "Hextech Soul",
    "tier": "Silver",
    "description": {
      "raw": "Grants the {{bi|Hextech Dragon Soul}}, or a different {{bi|Dragon Soul}} if you already have it.",
      "text": "Grants the Hextech Dragon Soul, or a different Dragon Soul if you already have it."
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
    "id": "hold-very-still",
    "name": "Hold Very Still",
    "tier": "Silver",
    "description": {
      "raw": "Gain an improved version of {{cai|Guerrilla Warfare|Teemo}}.<br><br>{{sbc|Guerrilla Warfare:}} Gain {{tip|invisibility}} after {{fd|0.75}} seconds without moving, being {{tip|immobilize|immobilized}}, taking damage, performing actions that {{tip|break stealth}}, {{tip|channel|channeling}}, or being in {{tip|stasis (buff)|stasis}}. Upon exiting stealth, gain {{sti|{{as|{{pp|key=%|20 to 80 for 4|1;5;10;15}} '''bonus''' attack speed}}}} for 5 seconds and {{sti|{{as|100% '''bonus''' movement speed}}}} decaying over the same duration. Your next attack after exiting stealth deals {{pp|60 to 200|color=magic damage}} {{as|(+ 60% '''bonus''' AD)}} {{as|(+ 40% AP)}} {{as|'''bonus''' magic damage}}.<br><br>''Invisibility is granted immediately at the start of the combat phase.''",
      "text": "Gain an improved version of Guerrilla Warfare.\n\nGuerrilla Warfare: Gain invisibility after 0.75 seconds without moving, being immobilized, taking damage, performing actions that break stealth, channeling, or being in stasis. Upon exiting stealth, gain 20 to 80 for 4 bonus attack speed for 5 seconds and 100% bonus movement speed decaying over the same duration. Your next attack after exiting stealth deals 60 to 200 (+ 60% bonus AD) (+ 40% AP) bonus magic damage.\n\nInvisibility is granted immediately at the start of the combat phase."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Teemo"
      ],
      "items": [],
      "runes": []
    },
    "tags": [
      "attack-speed"
    ]
  },
  {
    "id": "homeguard",
    "name": "Homeguard",
    "tier": "Silver",
    "description": {
      "raw": "Gain {{sti|{{as|'''bonus''' movement speed}}}}. This bonus is lost for 3 seconds after dealing damage to or taking damage from champions.",
      "text": "Gain bonus movement speed. This bonus is lost for 3 seconds after dealing damage to or taking damage from champions."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|70% '''bonus''' movement speed}}}}.",
        "text": "70% bonus movement speed."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|140% '''bonus''' movement speed}}}}.",
        "text": "140% bonus movement speed."
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
    "id": "ice-cold",
    "name": "Ice Cold",
    "tier": "Silver",
    "description": {
      "raw": "Your {{tip|slow|slowing}} effects reduce the {{sti|{{as|movement speed}}}} of targets by an additional amount.",
      "text": "Your slowing effects reduce the movement speed of targets by an additional amount."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{tip|slow|icononly=true}} {{as|-75 movement speed}}.",
        "text": "-75 movement speed."
      },
      {
        "level": 2,
        "raw": "{{tip|slow|icononly=true}} {{as|-150 movement speed}}.",
        "text": "-150 movement speed."
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
    "id": "infernal-soul",
    "name": "Infernal Soul",
    "tier": "Silver",
    "description": {
      "raw": "Grants the {{bi|Infernal Dragon Soul}}, or a different {{bi|Dragon Soul}} if one is already obtained.",
      "text": "Grants the Infernal Dragon Soul, or a different Dragon Soul if one is already obtained."
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
    "id": "juice-box",
    "name": "Juice Box",
    "tier": "Silver",
    "description": {
      "raw": "Each round, you and your ally gain several ''Juices'' ({{ii|Cappa Juice|icononly=true}} {{ii|Juice of Haste|icononly=true}} {{ii|Juice of Power|icononly=true}} {{ii|Juice of Vitality|icononly=true}}) for free that is automatically consumed at the start of the combat phase.",
      "text": "Each round, you and your ally gain several Juices (Cappa Juice Juice of Haste Juice of Power Juice of Vitality) for free that is automatically consumed at the start of the combat phase."
    },
    "levels": [
      {
        "level": 1,
        "raw": "1 juice.",
        "text": "1 juice."
      },
      {
        "level": 2,
        "raw": "3 juices.",
        "text": "3 juices."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [
        "Cappa Juice",
        "Juice of Haste",
        "Juice of Power",
        "Juice of Vitality"
      ],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "juice-press",
    "name": "Juice Press",
    "tier": "Silver",
    "description": {
      "raw": "The price of {{ii|Juice of Haste}}, {{ii|Juice of Power}} and {{ii|Juice of Vitality}} in your and your teammate's shop is reduced by 50% ({{g|{{ap|500*0.5}}}}). Juices that you and your teammate consume grant additional effects.<ul><li>{{ii|Cappa Juice}}: 1 additional {{ii|Cappa Juice|hat}}.</li><li>{{ii|Juice of Haste}}: {{sti|{{as|20% '''bonus''' movement speed}}}}.</li><li>{{ii|Juice of Power}}: {{sti|{{as|15% armor penetration}}}} and {{sti|{{as|15% magic penetration}}}}.</li><li>{{ii|Juice of Vitality}}: {{sti|{{as|25% heal and shield power}}}}.</li></ul><br><br>''Removed since [[V26.09]].''",
      "text": "The price of Juice of Haste, Juice of Power and Juice of Vitality in your and your teammate's shop is reduced by 50% (500*0.5). Juices that you and your teammate consume grant additional effects.\n- Cappa Juice: 1 additional hat.\n- Juice of Haste: 20% bonus movement speed.\n- Juice of Power: 15% armor penetration and 15% magic penetration.\n- Juice of Vitality: 25% heal and shield power.\n\nRemoved since V26.09."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [
        "Cappa Juice",
        "Juice of Haste",
        "Juice of Power",
        "Juice of Vitality"
      ],
      "runes": []
    },
    "tags": [
      "healing",
      "removed",
      "shield"
    ]
  },
  {
    "id": "juiced",
    "name": "Juiced",
    "tier": "Silver",
    "description": {
      "raw": "Basic attacks {{tip|on-hit}} against enemy champions consume {{sti|{{as|{{fd|2.5}}% of your '''maximum''' mana}}}} to deal {{as|'''bonus''' magic damage}} based on {{sti|{{as|your '''maximum''' mana}}}}. This damage can {{tip|critically strike}} for {{critical damage|100}} '''bonus''' damage.",
      "text": "Basic attacks on-hit against enemy champions consume 2.5% of your maximum mana to deal bonus magic damage based on your maximum mana. This damage can critically strike for 100 bonus damage."
    },
    "levels": [
      {
        "level": 1,
        "raw": "Base damage: {{as|{{fd|4.5}}% of your '''maximum''' mana}}",
        "text": "Base damage: 4.5% of your maximum mana"
      },
      {
        "level": 2,
        "raw": "Base damage: {{as|9% of your '''maximum''' mana}}<br><br>{{sbc|Max-level effect:}} Increase the damage of this effect by 10% each time you spend {{sti|{{as|400 mana}}}}.",
        "text": "Base damage: 9% of your maximum mana\n\nMax-level effect: Increase the damage of this effect by 10% each time you spend 400 mana."
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
    "id": "kill-secured",
    "name": "Kill Secured",
    "tier": "Silver",
    "description": {
      "raw": "Gain {{sti|{{as|60% '''bonus''' movement speed}}}} towards enemy champions below {{sti|{{as|40% of their '''maximum''' health}}}}.",
      "text": "Gain 60% bonus movement speed towards enemy champions below 40% of their maximum health."
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
      "healing"
    ]
  },
  {
    "id": "leg-day",
    "name": "Leg Day",
    "tier": "Silver",
    "description": {
      "raw": "Gain {{sti|{{as|'''bonus''' movement speed}}}} and {{tip|slow resist}}.",
      "text": "Gain bonus movement speed and slow resist."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{sti|{{as|40 '''bonus''' movement speed}}}}.</li><li>{{sti|{{as|35% slow resist}}}}.</li></ul>",
        "text": "- 40 bonus movement speed.\n- 35% slow resist."
      },
      {
        "level": 2,
        "raw": "<ul><li>{{sti|{{as|70 '''bonus''' movement speed}}}}.</li><li>{{sti|{{as|55% slow resist}}}}.</li></ul>",
        "text": "- 70 bonus movement speed.\n- 55% slow resist."
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
    "id": "light-em-up",
    "name": "Light 'em Up!",
    "tier": "Silver",
    "description": {
      "raw": "Basic attacks {{tip|on-hit}} generate a stack, up to 4. The fourth stack consumes them all to quickly launch 4 fireworks at the target that deal {{as|{{pp|11 to 80}}|magic damage}} {{tip|on-hit}}.",
      "text": "Basic attacks on-hit generate a stack, up to 4. The fourth stack consumes them all to quickly launch 4 fireworks at the target that deal 11 to 80 magic damage on-hit."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{as|{{pp|11 to 80}}|magic damage}} {{as|(+ 35% '''bonus''' AD)}} {{as|(+ 19% AP)}} {{as|'''bonus''' magic damage}} {{times}} '''90% damage modifier''' per firework, for a total of {{as|{{pp|11*4*0.9 to 80*4*0.9}}|magic damage}} {{as|(+ {{ap|35*4*0.9}}% '''bonus''' AD)}} {{as|(+ {{ap|19*4*0.9}}% AP)}}.",
        "text": "11 to 80 magic damage (+ 35% bonus AD) (+ 19% AP) bonus magic damage x 90% damage modifier per firework, for a total of 11*4*0.9 to 80*4*0.9 magic damage (+ 35*4*0.9% bonus AD) (+ 19*4*0.9% AP)."
      },
      {
        "level": 2,
        "raw": "Damage modifier increases to 100%, for a total of {{as|{{pp|11*4 to 80*4}}|magic damage}} {{as|(+ {{ap|35*4}}% '''bonus''' AD)}} {{as|(+ {{ap|19*4}}% AP)}}.",
        "text": "Damage modifier increases to 100%, for a total of 11*4 to 80*4 magic damage (+ 35*4% bonus AD) (+ 19*4% AP)."
      },
      {
        "level": 3,
        "raw": "Damage modifier increases to 110%, for a total of {{as|{{pp|11*4*1.1 to 80*4*1.1}}|magic damage}} {{as|(+ {{ap|35*4*1.1}}% '''bonus''' AD)}} {{as|(+ {{ap|19*4*1.1}}% AP)}}.",
        "text": "Damage modifier increases to 110%, for a total of 11*4*1.1 to 80*4*1.1 magic damage (+ 35*4*1.1% bonus AD) (+ 19*4*1.1% AP)."
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
    "id": "mind-to-matter",
    "name": "Mind to Matter",
    "tier": "Silver",
    "description": {
      "raw": "Grants {{sti|{{as|'''bonus''' health}}}} equal to a percentage of {{sti|{{as|your '''maximum''' mana}}}}.",
      "text": "Grants bonus health equal to a percentage of your maximum mana."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{as|35% of your '''maximum''' mana}} converted to {{sti|{{as|'''bonus''' health}}}}.",
        "text": "35% of your maximum mana converted to bonus health."
      },
      {
        "level": 2,
        "raw": "{{as|70% of your '''maximum''' mana}} converted to {{sti|{{as|'''bonus''' health}}}}.",
        "text": "70% of your maximum mana converted to bonus health."
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
    "id": "mirror-image",
    "name": "Mirror Image",
    "tier": "Silver",
    "description": {
      "raw": "Gain an improved version of {{cai|Mirror Image|LeBlanc}}.<br><br>{{sbc|Mirror Image:}} Upon being damaged to {{sti|{{as|30% '''maximum''' health}}}}, create 4 {{tip|clone|clones}} of yourself, after which you and your clones instantly become {{tip|invisible}} for {{fd|1.25}} seconds ({{sti|30 seconds cooldown}}). Your clones can mimic your [[basic attack]] animation, though cannot deal damage and last for 8 seconds. One clone may move in front of you, the others will move toward random directions. ''Clones have a {{g|25}} bounty.''",
      "text": "Gain an improved version of Mirror Image.\n\nMirror Image: Upon being damaged to 30% maximum health, create 4 clones of yourself, after which you and your clones instantly become invisible for 1.25 seconds (30 seconds cooldown). Your clones can mimic your basic attack animation, though cannot deal damage and last for 8 seconds. One clone may move in front of you, the others will move toward random directions. Clones have a 25 bounty."
    },
    "levels": [
      {
        "level": 2,
        "raw": "{{sbc|Max-level effect:}} Your clones gain your [[File:Augment.png|20px|icononly=true]] augments and their basic attacks deal 20% damage.",
        "text": "Max-level effect: Your clones gain your augments and their basic attacks deal 20% damage."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "LeBlanc"
      ],
      "items": [],
      "runes": []
    },
    "tags": [
      "healing"
    ]
  },
  {
    "id": "mountain-soul",
    "name": "Mountain Soul",
    "tier": "Silver",
    "description": {
      "raw": "Grants the {{bi|Mountain Dragon Soul}}, or a different {{bi|Dragon Soul}} if one is already obtained.",
      "text": "Grants the Mountain Dragon Soul, or a different Dragon Soul if one is already obtained."
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
    "id": "now-you-see-me",
    "name": "Now You See Me",
    "tier": "Silver",
    "description": {
      "raw": "Replaces {{si|Flee}} with ''{{si|Now You See Me}}''.<br><br>[[File:Now You See Me augment spell.png|20px|link=]] {{sbc|Now You See Me:}}<br><br>{{#invoke:SpellData|geteffect|Now You See Me}}<br><br>{{#invoke:SpellData|geteffect2|Now You See Me}}",
      "text": "Replaces Flee with Now You See Me.\n\nNow You See Me:\n\ngeteffect\n\ngeteffect2"
    },
    "levels": [
      {
        "level": 2,
        "raw": "{{sbc|Max-level effect:}} Increase the number of portals you can have at a time to 5.",
        "text": "Max-level effect: Increase the number of portals you can have at a time to 5."
      }
    ],
    "notes": {
      "raw": "* You can decide which portal to teleport to by moving your mouse cursor to that portal.\n",
      "text": "* You can decide which portal to teleport to by moving your mouse cursor to that portal."
    },
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
    "id": "numb-to-pain",
    "name": "Numb to Pain",
    "tier": "Silver",
    "description": {
      "raw": "Gain {{iis|Death's Dance}} {{nie|Ignore Pain}}.<br><br>{{sbc|Ignore Pain:}} Reduce some {{tt|post-mitigation damage|Damage calculated after modifiers}} received and instead store it to successively take it as {{sti|{{as|true damage}}}} over 6 seconds, dealing a sixth of the stored damage each second.",
      "text": "Gain Death's Dance Ignore Pain.\n\nIgnore Pain: Reduce some post-mitigation damage received and instead store it to successively take it as true damage over 6 seconds, dealing a sixth of the stored damage each second."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{rd|25%|10%}} damage reduction.",
        "text": "25% damage reduction."
      },
      {
        "level": 2,
        "raw": "{{rd|40%|25%}} damage reduction.<br><br>{{sbc|Max-level effect:}} Gain {{iis|Death's Dance}} {{nie|Defy}}: Upon a champion takedown, cleanse the over-time damage.",
        "text": "40% damage reduction.\n\nMax-level effect: Gain Death's Dance Defy: Upon a champion takedown, cleanse the over-time damage."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [
        "Death's Dance"
      ],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "ocean-soul",
    "name": "Ocean Soul",
    "tier": "Silver",
    "description": {
      "raw": "Grants the {{bi|Ocean Dragon Soul}}, which has a modified base {{tip|heal}} value of 100, or a different {{bi|Dragon Soul}} if one is already obtained.",
      "text": "Grants the Ocean Dragon Soul, which has a modified base heal value of 100, or a different Dragon Soul if one is already obtained."
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
      "healing"
    ]
  },
  {
    "id": "panic-room",
    "name": "Panic Room",
    "tier": "Silver",
    "description": {
      "raw": "Upon taking fatal damage for the first time, you become {{tip|untargetable}}, transforming into a wisp, and are restored to {{sti|{{as|a portion of your '''maximum''' health}}}}. After 1 second, {{tip|dash}} to a random location on the map 1500–3000 units away at 3500 unit/s speed and become targetable again upon arrival. The target location is always inside the Ring of Fire and up to 1500 units away from its edge.",
      "text": "Upon taking fatal damage for the first time, you become untargetable, transforming into a wisp, and are restored to a portion of your maximum health. After 1 second, dash to a random location on the map 1500–3000 units away at 3500 unit/s speed and become targetable again upon arrival. The target location is always inside the Ring of Fire and up to 1500 units away from its edge."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|15% '''maximum''' health}}}}.",
        "text": "15% maximum health."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|35% '''maximum''' health}}}}.",
        "text": "35% maximum health."
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
      "mobility"
    ]
  },
  {
    "id": "parasitic-mutation",
    "name": "Parasitic Mutation",
    "tier": "Silver",
    "description": {
      "raw": "Copy a random [[File:Augment.png|20px|icononly=true]] augment from either champion on the enemy team when the ''Combat Phase'' starts, with the copied augment changing every round.",
      "text": "Copy a random augment from either champion on the enemy team when the Combat Phase starts, with the copied augment changing every round."
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
    "id": "purist-caster",
    "name": "Purist - Caster",
    "tier": "Silver",
    "description": {
      "raw": "Convert '''all''' of your {{sti|{{as|'''bonus''' attack speed}}}} into {{sti|{{as|ability haste}}}} at a rate of {{sti|{{as|{{fd|0.65}} ability haste}}}} per {{sti|{{as|1% '''bonus''' attack speed}}}}. Additionally, your abilities' '''total''' cooldowns are reduced by {{sti|cooldown reduction|10%}}.",
      "text": "Convert all of your bonus attack speed into ability haste at a rate of 0.65 ability haste per 1% bonus attack speed. Additionally, your abilities' total cooldowns are reduced by 10%."
    },
    "levels": [],
    "notes": {
      "raw": "* {{sti|Maximum cooldown reduction}}: 500 ÷ (500 + 100) + 10% ≈ {{fd|93.3}}%.\n",
      "text": "* Maximum cooldown reduction: 500 ÷ (500 + 100) + 10% ≈ 93.3%."
    },
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "ability-haste",
      "attack-speed"
    ]
  },
  {
    "id": "rags-to-riches",
    "name": "Rags to Riches",
    "tier": "Silver",
    "description": {
      "raw": "Gain {{g|2500}} once this [[File:Augment.png|20px|icononly=true]] augment is removed or replaced.",
      "text": "Gain 2500 once this augment is removed or replaced."
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
    "id": "repulsor",
    "name": "Repulsor",
    "tier": "Silver",
    "description": {
      "raw": "Upon dropping below {{sti|health|{{as|60%|health}}}} or {{as|30% of your '''maximum''' health}}, each for the first time in a round, {{tip|airborne|knock back}} all enemies within a {{tip|cr|icononly=true}} 500 radius by 750 units.",
      "text": "Upon dropping below 60% health or 30% of your maximum health, each for the first time in a round, knock back all enemies within a 500 radius by 750 units."
    },
    "levels": [],
    "notes": {
      "raw": "* The {{tip|airborne}} status effect from the knock back does not interrupt {{tip|channel|channels}} nor disable {{tip|ability|abilities}}.{{bug}}\n** It will still seal the target's movement-based summoner spells.\n",
      "text": "* The airborne status effect from the knock back does not interrupt channels nor disable abilities.\n** It will still seal the target's movement-based summoner spells."
    },
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
    "id": "scoped-weapons",
    "name": "Scoped Weapons",
    "tier": "Silver",
    "description": {
      "raw": "Gain {{sti|attack range|{{rd|75|50}} '''bonus''' attack range}}.<br><br>''Removed since [[V26.09]].''",
      "text": "Gain 75 bonus attack range.\n\nRemoved since V26.09."
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
    "id": "self-destruct",
    "name": "Self Destruct",
    "tier": "Silver",
    "description": {
      "raw": "{{as|Automatically}} get a bomb attached to you that detonates after {{sti|cooldown|15 seconds}}, creating an explosion that deals {{as|true damage}} based on {{as|the target's '''maximum''' health}} to enemies within 350 units and {{tip|airborne|knocks them up}} for {{fd|0.75}} seconds ({{sti|15 seconds cooldown}}).<br><br>The bomb's duration is not refreshed when the initial delay for the combat phase elapses.",
      "text": "Automatically get a bomb attached to you that detonates after 15 seconds, creating an explosion that deals true damage based on the target's maximum health to enemies within 350 units and knocks them up for 0.75 seconds (15 seconds cooldown).\n\nThe bomb's duration is not refreshed when the initial delay for the combat phase elapses."
    },
    "levels": [
      {
        "level": 1,
        "raw": "Explosion damage: {{as|15% of the target's '''maximum''' health}}.",
        "text": "Explosion damage: 15% of the target's maximum health."
      },
      {
        "level": 2,
        "raw": "Explosion damage: {{as|25% of the target's '''maximum''' health}}.",
        "text": "Explosion damage: 25% of the target's maximum health."
      }
    ],
    "notes": {
      "raw": "* The {{tip|airborne}} status effect from the knock up does not interrupt {{tip|channel|channels}} nor disable {{tip|ability|abilities}}, and is not resisted by {{tip|cc-immune|immunity}} nor {{tip|spell shield}}.{{bug}}\n",
      "text": "* The airborne status effect from the knock up does not interrupt channels nor disable abilities, and is not resisted by immunity nor spell shield."
    },
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
    "id": "serve-beyond-death",
    "name": "Serve Beyond Death",
    "tier": "Silver",
    "description": {
      "raw": "Upon taking fatal damage for the first time, you are restored to {{as|100% '''maximum''' health}} but suffer {{as|true damage}} over time until you die from reaching 0 health. Scoring a champion {{tip|takedown}} ends this effect's damage immediately and sets your {{sti|{{as|'''current''' health}}}} to {{as|a percentage of '''maximum''' health}}.",
      "text": "Upon taking fatal damage for the first time, you are restored to 100% maximum health but suffer true damage over time until you die from reaching 0 health. Scoring a champion takedown ends this effect's damage immediately and sets your current health to a percentage of maximum health."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>Suffer {{as|{{fd|8.33}}% of your '''maximum''' health}} {{as|true damage}} every {{rutngt|0.25}} over 3 seconds.</li><li>Set to {{sti|{{as|20% '''maximum''' health}}}} on takedown.</li></ul>",
        "text": "- Suffer 8.33% of your maximum health true damage every 0.25 over 3 seconds.\n- Set to 20% maximum health on takedown."
      },
      {
        "level": 2,
        "raw": "<ul><li>Suffer {{as|{{fd|4.67}}% of your '''maximum''' health}} {{as|true damage}} every {{rutngt|0.25}} over 6 seconds.</li><li>Set to {{sti|{{as|30% '''maximum''' health}}}} on takedown.</li></ul>",
        "text": "- Suffer 4.67% of your maximum health true damage every 0.25 over 6 seconds.\n- Set to 30% maximum health on takedown."
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
    "id": "shadow-runner",
    "name": "Shadow Runner",
    "tier": "Silver",
    "description": {
      "raw": "After {{tip|dash|dashing}}, {{tip|blink|blinking}}, or exiting {{tip|stealth}}, gain {{sti|{{as|'''bonus''' movement speed}}}} for a period of time.",
      "text": "After dashing, blinking, or exiting stealth, gain bonus movement speed for a period of time."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{sti|{{as|200 '''bonus''' movement speed}}}}.</li><li>2 seconds duration.</li></ul>",
        "text": "- 200 bonus movement speed.\n- 2 seconds duration."
      },
      {
        "level": 2,
        "raw": "<ul><li>{{sti|{{as|400 '''bonus''' movement speed}}}}.</li><li>3 seconds duration.</li></ul>",
        "text": "- 400 bonus movement speed.\n- 3 seconds duration."
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
    "id": "silver-spoon",
    "name": "Silver Spoon",
    "tier": "Silver",
    "description": {
      "raw": "For each [[File:Augment.png|20px|icononly=true]] '''Silver''' augment you have, gain increased damage.",
      "text": "For each Silver augment you have, gain increased damage."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{fd|7.5}}% increased damage per Silver augment.",
        "text": "7.5% increased damage per Silver augment."
      },
      {
        "level": 2,
        "raw": "10% increased damage per Silver augment.",
        "text": "10% increased damage per Silver augment."
      },
      {
        "level": 3,
        "raw": "15% increased damage per Silver augment.",
        "text": "15% increased damage per Silver augment."
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
    "id": "slap-around",
    "name": "Slap Around",
    "tier": "Silver",
    "description": {
      "raw": "{{tip|Immobilize|Immobilizing}} or {{tip|ground|grounding}} an enemy champion grants you {{tip|adaptive force}}, stacking infinitely ({{sti|5 seconds cooldown}} per {{tip|cast instance}}). This effect lasts until the end of the current round phase.",
      "text": "Immobilizing or grounding an enemy champion grants you adaptive force, stacking infinitely (5 seconds cooldown per cast instance). This effect lasts until the end of the current round phase."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{adaptive|15}}.",
        "text": "15."
      },
      {
        "level": 2,
        "raw": "{{adaptive|25}}.",
        "text": "25."
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
      "adaptive"
    ]
  },
  {
    "id": "slime-time",
    "name": "Slime Time",
    "tier": "Silver",
    "description": {
      "raw": "{{as|Automatically}} cast {{cai|Unstable Matter|Zac}}, releasing a burst of slime in a {{tip|cr|icononly=true}} 450 radius around you and dealing {{as|{{pp|40 to 80}}|magic damage}} {{as|(+ {{pp|3 to 7|key=%}} {{as|(+ {{fd|1.5}}% per 100 '''bonus''' AD)}} {{as|(+ {{fd|1.5}}% per 100 AP)}} of target's '''maximum''' health)}} {{as|magic damage}} to enemies hit ({{sti|7 seconds cooldown}}). Additionally, hitting a champion secretes a slime blob toward a nearby location. Both you and enemy champions can interact with the blob by moving over it; you may consume it to {{tip|heal}} yourself for {{as|{{pp|3 to 6|key=%}} of your '''maximum''' health}}, while an enemy may destroy it to deny the effect.",
      "text": "Automatically cast Unstable Matter, releasing a burst of slime in a 450 radius around you and dealing 40 to 80 magic damage (+ 3 to 7 (+ 1.5% per 100 bonus AD) (+ 1.5% per 100 AP) of target's maximum health) magic damage to enemies hit (7 seconds cooldown). Additionally, hitting a champion secretes a slime blob toward a nearby location. Both you and enemy champions can interact with the blob by moving over it; you may consume it to heal yourself for 3 to 6 of your maximum health, while an enemy may destroy it to deny the effect."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Zac"
      ],
      "items": [],
      "runes": []
    },
    "tags": [
      "healing"
    ]
  },
  {
    "id": "snowball-fight",
    "name": "Snowball Fight!",
    "tier": "Silver",
    "description": {
      "raw": "Replaces {{si|Flee}} with ''{{si|Mark}}'' / ''{{si|Dash}}''.<br><br>{{sbc|Mark:}} Throws a snowball in the target direction that deals {{as|{{pp|15 to 100}} true damage}} to the first enemy hit and marks them for 3 seconds ({{sti|6 seconds cooldown}}). While the target is marked, you are granted the ability to cast {{si|Dash}}.<br><br>{{sbc|Dash:}} You {{tip|dash}} to the marked target while being {{tip|untargetable}}, dealing the same damage again upon arrival.",
      "text": "Replaces Flee with Mark / Dash.\n\nMark: Throws a snowball in the target direction that deals 15 to 100 true damage to the first enemy hit and marks them for 3 seconds (6 seconds cooldown). While the target is marked, you are granted the ability to cast Dash.\n\nDash: You dash to the marked target while being untargetable, dealing the same damage again upon arrival."
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
      "flee-replacement",
      "mobility"
    ]
  },
  {
    "id": "sonic-boom",
    "name": "Sonic Boom",
    "tier": "Silver",
    "description": {
      "raw": "Granting a [[buff]], {{tip|heal}}, or {{tip|shield}} to your ally deals {{as|{{pp|30 to 150}} true damage}} to enemies within 450 units of them and {{tip|slow|slows}} targets by 30% ({{sti|2 seconds cooldown}}).",
      "text": "Granting a buff, heal, or shield to your ally deals 30 to 150 true damage to enemies within 450 units of them and slows targets by 30% (2 seconds cooldown)."
    },
    "levels": [
      {
        "level": 1,
        "raw": "2 seconds {{tip|slow}} duration.",
        "text": "2 seconds slow duration."
      },
      {
        "level": 2,
        "raw": "3 seconds {{tip|slow}} duration.",
        "text": "3 seconds slow duration."
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
    "id": "speed-demon",
    "name": "Speed Demon",
    "tier": "Silver",
    "description": {
      "raw": "Whenever you damage an enemy champion with an ability, gain {{sti|{{as|'''bonus''' movement speed}}}} decaying over {{fd|0.75}} seconds.",
      "text": "Whenever you damage an enemy champion with an ability, gain bonus movement speed decaying over 0.75 seconds."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|150 '''bonus''' movement speed}}}}.",
        "text": "150 bonus movement speed."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|300 '''bonus''' movement speed}}}}.",
        "text": "300 bonus movement speed."
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
    "id": "spin-me-right-round",
    "name": "Spin Me Right Round",
    "tier": "Silver",
    "description": {
      "raw": "Replaces {{si|Flee}} with ''{{cai|Heroic Swing|Akshan}}''.<br><br>{{sbc|Heroic Swing - Active:}} You can activate ''Heroic Swing'' three times before the ability goes on cooldown, and you can use the third cast only after {{fd|0.5}} seconds of the second cast. An attack or movement command may be input to use the second and third casts.<br><br>[[File:Heroic Swing.png|20px|link=]] {{sbc|First Cast:}} Fire a hook in the target direction that embeds in the first [[terrain]] hit for 2 seconds. ''Heroic Swing's'' second cast can be used while the hook is attached. If the hook fails to attach or you become {{tip|immobilize|immobilized}}, {{tip|ground|grounded}}, or {{tip|polymorph|polymorphed}} within the duration, ''Heroic Swing'' is cancelled and placed on full cooldown.<br><br>[[File:Heroic Swing 2.png|20px|link=]] {{sbc|Second Cast:}} {{tip|dash|Swing}} around the terrain in either a clockwise or counterclockwise direction based on the position of the cursor {{tt|relative to your facing direction|Dash will move clockwise if the player's cursor is anywhere to the left of their champion from their facing direction (or perspective), and counterclockwise if the cursor is anywhere to their champion's right.}}, stopping upon colliding with an enemy champion or terrain. While swinging, fire at the nearest {{tip|sight|visible}} enemy within {{tip|cr|icononly=true}} 500 units every {{rutngt|0.2}} to deal them {{as|{{pp|15 to 75}}|physical damage}} {{as|(+ 15% AD)}} {{times}} {{as|(1 + {{fd|0.3}} per 100% '''bonus''' attack speed)}} {{as|physical damage}} and apply {{tip|on-hit}} effects for each shot, with on-hit damage reduced to 25% effectiveness. The dash will be {{tip|knockdown|interrupted}} if you are affected by any {{tip|immobilize|immobilizing}} or {{tip|polymorph|polymorphing}} crowd control during the dash.<br><br>{{sbc|Third Cast:}} End the swing by {{tip|dash|jumping}} to the target location and fire one last shot at a nearby {{tip|sight|visible}} enemy.<br><br>Scoring an enemy champion {{tip|takedown}} reduces ''Heroic Swing's'' {{sti|'''current''' cooldown}} to {{fd|0.5}} seconds.",
      "text": "Replaces Flee with Heroic Swing.\n\nHeroic Swing - Active: You can activate Heroic Swing three times before the ability goes on cooldown, and you can use the third cast only after 0.5 seconds of the second cast. An attack or movement command may be input to use the second and third casts.\n\nFirst Cast: Fire a hook in the target direction that embeds in the first terrain hit for 2 seconds. Heroic Swing's second cast can be used while the hook is attached. If the hook fails to attach or you become immobilized, grounded, or polymorphed within the duration, Heroic Swing is cancelled and placed on full cooldown.\n\nSecond Cast: Swing around the terrain in either a clockwise or counterclockwise direction based on the position of the cursor relative to your facing direction, stopping upon colliding with an enemy champion or terrain. While swinging, fire at the nearest visible enemy within 500 units every 0.2 to deal them 15 to 75 physical damage (+ 15% AD) x (1 + 0.3 per 100% bonus attack speed) physical damage and apply on-hit effects for each shot, with on-hit damage reduced to 25% effectiveness. The dash will be interrupted if you are affected by any immobilizing or polymorphing crowd control during the dash.\n\nThird Cast: End the swing by jumping to the target location and fire one last shot at a nearby visible enemy.\n\nScoring an enemy champion takedown reduces Heroic Swing's current cooldown to 0.5 seconds."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Akshan"
      ],
      "items": [],
      "runes": []
    },
    "tags": [
      "attack-speed",
      "flee-replacement",
      "mobility"
    ]
  },
  {
    "id": "spin-to-win",
    "name": "Spin To Win",
    "tier": "Silver",
    "description": {
      "raw": "Your {{tt|spinning abilities|Any ability with 'spinning' properties}} deal increased damage and benefit from {{sti|{{as|ability haste}}}}.",
      "text": "Your spinning abilities deal increased damage and benefit from ability haste."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>25% increased damage.</li><li>{{sti|{{as|25 ability haste}}}}.</li></ul>",
        "text": "- 25% increased damage.\n- 25 ability haste."
      },
      {
        "level": 2,
        "raw": "<ul><li>35% increased damage.</li><li>{{sti|{{as|35 ability haste}}}}.</li></ul>",
        "text": "- 35% increased damage.\n- 35 ability haste."
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
    "id": "spirit-infusion",
    "name": "Spirit Infusion",
    "tier": "Silver",
    "description": {
      "raw": "Gain {{sti|hsp|{{as|10% heal and shield power}}}}. After casting your ultimate ability, increase your {{sti|hsp|{{as|heal and shield power|hsp}}}} by 50% for 10 seconds ({{sti|10 seconds cooldown}}).<br><br>''Removed since [[V26.09]].''",
      "text": "Gain 10% heal and shield power. After casting your ultimate ability, increase your heal and shield power hsp by 50% for 10 seconds (10 seconds cooldown).\n\nRemoved since V26.09."
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
      "healing",
      "removed",
      "shield"
    ]
  },
  {
    "id": "stackosaurus-rex",
    "name": "Stackosaurus Rex",
    "tier": "Silver",
    "description": {
      "raw": "Increase the number of permanent stacks you gain from abilities by 75%.",
      "text": "Increase the number of permanent stacks you gain from abilities by 75%."
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
    "id": "stats",
    "name": "Stats!",
    "tier": "Silver",
    "description": {
      "raw": "Upon selecting this augment, gain {{ii|Stat Bonus|Stat Bonus Anvils}} for free.",
      "text": "Upon selecting this augment, gain Stat Bonus Anvils for free."
    },
    "levels": [
      {
        "level": 1,
        "raw": "2 {{ii|Stat Bonus|Stat Bonus Anvils}}.",
        "text": "2 Stat Bonus Anvils."
      },
      {
        "level": 2,
        "raw": "Gain another {{ii|Stat Bonus|Stat Bonus Anvils}}, for a total of 3.",
        "text": "Gain another Stat Bonus Anvils, for a total of 3."
      },
      {
        "level": 3,
        "raw": "Gain another {{ii|Stat Bonus|Stat Bonus Anvils}}, for a total of 4.<br><br>{{sbc|Max-level effect:}} Gain a {{ii|Stat Bonus|Prismatic Stat Anvil}}. Increase stats from {{ii|Stat Bonus|Stat Bonus Anvils}} by 20%.",
        "text": "Gain another Stat Bonus Anvils, for a total of 4.\n\nMax-level effect: Gain a Prismatic Stat Anvil. Increase stats from Stat Bonus Anvils by 20%."
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
    "id": "tank-it-or-leave-it",
    "name": "Tank It Or Leave It",
    "tier": "Silver",
    "description": {
      "raw": "Gain ''Critical Defend Chance'' equal to {{sti|{{as|100% of your critical strike chance}}}}, up to {{sti|50%|critical strike chance}}. Additionally, gain {{sti|{{as|25% critical strike chance}}}}.<br><br>{{sbc|Critical Defend Chance:}} Grants you a chance to reduce an instance of damage taken.",
      "text": "Gain Critical Defend Chance equal to 100% of your critical strike chance, up to critical strike chance. Additionally, gain 25% critical strike chance.\n\nCritical Defend Chance: Grants you a chance to reduce an instance of damage taken."
    },
    "levels": [
      {
        "level": 1,
        "raw": "15% + {{sti|{{as|25% of critical strike damage}}}} damage reduction.",
        "text": "15% + 25% of critical strike damage damage reduction."
      },
      {
        "level": 2,
        "raw": "25% + {{sti|{{as|25% of critical strike damage}}}} damage reduction.",
        "text": "25% + 25% of critical strike damage damage reduction."
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
    "id": "the-brutalizer",
    "name": "The Brutalizer",
    "tier": "Silver",
    "description": {
      "raw": "Grants {{sti|{{as|'''bonus''' attack damage}}}}, {{sti|{{as|ability haste}}}}, and {{sti|{{as|lethality}}}}.",
      "text": "Grants bonus attack damage, ability haste, and lethality."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{sti|{{as|20 '''bonus''' attack damage}}}}.</li><li>{{sti|{{as|15 ability haste}}}}.</li><li>{{sti|{{as|15 lethality}}}}.</li></ul>",
        "text": "- 20 bonus attack damage.\n- 15 ability haste.\n- 15 lethality."
      },
      {
        "level": 2,
        "raw": "<ul><li>{{sti|{{as|50 '''bonus''' attack damage}}}}.</li><li>{{sti|{{as|35 ability haste}}}}.</li><li>{{sti|{{as|30 lethality}}}}.</li></ul>",
        "text": "- 50 bonus attack damage.\n- 35 ability haste.\n- 30 lethality."
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
    "id": "tormentor",
    "name": "Tormentor",
    "tier": "Silver",
    "description": {
      "raw": "{{tip|Immobilize|Immobilizing}} or {{tip|ground|grounding}} an enemy champion inflicts them with a {{as|Burn}} for 5 seconds, dealing {{as|magic damage}} based on {{sti|{{as|the target's '''maximum''' health}}}} ({{sti|5 seconds cooldown}} per {{tip|cast instance}}). This {{as|Burn}} stacks infinitely and refreshes with each application.<br><br>This counts as a {{as|Burn}} source.",
      "text": "Immobilizing or grounding an enemy champion inflicts them with a Burn for 5 seconds, dealing magic damage based on the target's maximum health (5 seconds cooldown per cast instance). This Burn stacks infinitely and refreshes with each application.\n\nThis counts as a Burn source."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{ft|{{as|{{ap|3/5}}% of the target's '''maximum''' health}} per second|{{as|3% of the target's '''maximum''' health}} over the duration}} {{as|magic damage}}.",
        "text": "3/5% of the target's maximum health per second magic damage."
      },
      {
        "level": 2,
        "raw": "{{ft|{{as|{{ap|4/5}}% of the target's '''maximum''' health}} per second|{{as|4% of the target's '''maximum''' health}} over the duration}} {{as|magic damage}}.",
        "text": "4/5% of the target's maximum health per second magic damage."
      },
      {
        "level": 3,
        "raw": "{{ft|{{as|{{ap|6/5}}% of the target's '''maximum''' health}} per second|{{as|6% of the target's '''maximum''' health}} over the duration}} {{as|magic damage}}.",
        "text": "6/5% of the target's maximum health per second magic damage."
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
    "id": "trailblazer",
    "name": "Trailblazer",
    "tier": "Silver",
    "description": {
      "raw": "{{tip|Dash|Dashing}} or {{tip|blink|blinking}} causes you to inflict the nearest enemy champion within {{tip|cr|icononly=true}} 650 units with a {{as|Burn}} for 5 seconds, dealing {{as|magic damage}} based on {{sti|{{as|the target's '''maximum''' health}}}} ({{sti|{{fd|1.5}} seconds cooldown}} per {{tip|cast instance}}). This {{as|Burn}} stacks infinitely and refreshes with each application.<br><br>This counts as a {{as|Burn}} source.",
      "text": "Dashing or blinking causes you to inflict the nearest enemy champion within 650 units with a Burn for 5 seconds, dealing magic damage based on the target's maximum health (1.5 seconds cooldown per cast instance). This Burn stacks infinitely and refreshes with each application.\n\nThis counts as a Burn source."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{ft|{{as|{{ap|3.5/5}}% of the target's '''maximum''' health}} per second.|{{as|3.5% of the target's '''maximum''' health}} over the duration.}}",
        "text": "3.5/5% of the target's maximum health per second."
      },
      {
        "level": 2,
        "raw": "{{ft|{{as|{{ap|5/5}}% of the target's '''maximum''' health}} per second.|{{as|5% of the target's '''maximum''' health}} over the duration.}}",
        "text": "5/5% of the target's maximum health per second."
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
      "mobility"
    ]
  },
  {
    "id": "transmute-gold",
    "name": "Transmute: Gold",
    "tier": "Silver",
    "description": {
      "raw": "Gain one random [[File:Augment.png|20px|icononly=true]] Gold augment, excluding the other two offerings in your current assortment.",
      "text": "Gain one random Gold augment, excluding the other two offerings in your current assortment."
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
    "id": "trash-to-treasure",
    "name": "Trash To Treasure",
    "tier": "Silver",
    "description": {
      "raw": "Gain a [[File:Augment.png|20px|icononly=true]] prismatic augment selection when this augment is removed or replaced.",
      "text": "Gain a prismatic augment selection when this augment is removed or replaced."
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
    "id": "twin-fire",
    "name": "Twin Fire",
    "tier": "Silver",
    "description": {
      "raw": "Damaging abilities against enemy champions launch {{as|Firecrackers|fury}} at the target that each deal {{as|{{pp|10 to 30}}|magic damage}} {{as|(+ 7% '''bonus''' AD)}} {{as|(+ 7% AP)}} {{as|magic damage}} ({{sti|5 seconds cooldown}}). Additionally, gain {{sti|{{as|25% critical strike chance}}}}.",
      "text": "Damaging abilities against enemy champions launch Firecrackers fury at the target that each deal 10 to 30 magic damage (+ 7% bonus AD) (+ 7% AP) magic damage (5 seconds cooldown). Additionally, gain 25% critical strike chance."
    },
    "levels": [
      {
        "level": 1,
        "raw": "1 {{as|(+ 1 per 50% critical strike chance)}} {{as|Firecrackers|fury}}.",
        "text": "1 (+ 1 per 50% critical strike chance) Firecrackers fury."
      },
      {
        "level": 2,
        "raw": "1 {{as|(+ 1 per {{fd|33.3}}% critical strike chance)}} {{as|Firecrackers|fury}}.",
        "text": "1 (+ 1 per 33.3% critical strike chance) Firecrackers fury."
      },
      {
        "level": 3,
        "raw": "1 {{as|(+ 1 per 25% critical strike chance)}} {{as|Firecrackers|fury}}.",
        "text": "1 (+ 1 per 25% critical strike chance) Firecrackers fury."
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
    "id": "typhoon",
    "name": "Typhoon",
    "tier": "Silver",
    "description": {
      "raw": "Basic attacks fire a bolt at an additional target that deals {{as|physical damage}} and applies on-hit effects at 100% effectiveness.",
      "text": "Basic attacks fire a bolt at an additional target that deals physical damage and applies on-hit effects at 100% effectiveness."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{as|20% AD}} {{as|physical damage}}.",
        "text": "20% AD physical damage."
      },
      {
        "level": 2,
        "raw": "{{as|50% AD}} {{as|physical damage}}.",
        "text": "50% AD physical damage."
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
    "id": "ultimate-unstoppable",
    "name": "Ultimate Unstoppable",
    "tier": "Silver",
    "description": {
      "raw": "Casting your ultimate ability grants you {{tip|cc-immune|crowd control immunity}} ({{sti|8 seconds cooldown}}).",
      "text": "Casting your ultimate ability grants you crowd control immunity (8 seconds cooldown)."
    },
    "levels": [
      {
        "level": 1,
        "raw": "2 seconds duration.",
        "text": "2 seconds duration."
      },
      {
        "level": 2,
        "raw": "5 seconds duration.",
        "text": "5 seconds duration."
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
    "id": "upgrade-collector",
    "name": "Upgrade Collector",
    "tier": "Silver",
    "description": {
      "raw": "Gain {{g|250}} on taking this augment. Upgrades {{ii|The Collector}}, empowering {{nie|Death}} to have its execution threshold increased by 1% each time you kill an enemy champion, capped at a threshold of {{sti|{{as|15% of the target's '''maximum''' health}}}}, and {{nie|Taxes}} to generate higher gold from kills.",
      "text": "Gain 250 on taking this augment. Upgrades The Collector, empowering Death to have its execution threshold increased by 1% each time you kill an enemy champion, capped at a threshold of 15% of the target's maximum health, and Taxes to generate higher gold from kills."
    },
    "levels": [
      {
        "level": 1,
        "raw": "Additional {{g|200}} from kills.",
        "text": "Additional 200 from kills."
      },
      {
        "level": 2,
        "raw": "Additional {{g|500}} from kills.",
        "text": "Additional 500 from kills."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [
        "The Collector"
      ],
      "runes": []
    },
    "tags": [
      "healing"
    ]
  },
  {
    "id": "veil-of-warding",
    "name": "Veil of Warding",
    "tier": "Silver",
    "description": {
      "raw": "Grants a {{tip|spell shield}} that blocks the next hostile ability {{sti|cooldown|every several seconds}} (cooldown timer does '''not''' restart from champion damage taken).",
      "text": "Grants a spell shield that blocks the next hostile ability every several seconds (cooldown timer does not restart from champion damage taken)."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|20 seconds cooldown}}.",
        "text": "20 seconds cooldown."
      },
      {
        "level": 2,
        "raw": "{{sti|10 seconds cooldown}}.",
        "text": "10 seconds cooldown."
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
    "id": "warmup-routine",
    "name": "Warmup Routine",
    "tier": "Silver",
    "description": {
      "raw": "Replaces {{si|Flee}} with ''{{si|Warmup Routine}}''.<br><br>[[File:Warmup Routine augment spell.png|20px|link=]] {{sbc|Warmup Routine:}} {{#invoke:SpellData|geteffect|Warmup Routine}}",
      "text": "Replaces Flee with Warmup Routine.\n\nWarmup Routine: geteffect"
    },
    "levels": [
      {
        "level": 1,
        "raw": "20% maximum extra damage.",
        "text": "20% maximum extra damage."
      },
      {
        "level": 2,
        "raw": "40% maximum extra damage.<br><br>{{sbc|Max-level effect:}} Gain permanently increased damage when you reach maximum stacks in a round. Now your partner can join the dance to gain stacks faster.",
        "text": "40% maximum extra damage.\n\nMax-level effect: Gain permanently increased damage when you reach maximum stacks in a round. Now your partner can join the dance to gain stacks faster."
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
    "id": "weighted-popoffs",
    "name": "Weighted Popoffs",
    "tier": "Silver",
    "description": {
      "raw": "Hitting an enemy champion with an ability generates a stack of {{as|Popoff|buzzword6}} for 6 seconds, stacking up to 6 times. For each stack, your basic abilities' {{sti|cooldowns}} progress faster. At maximum {{as|Popoff|buzzword6}} stacks, this value is doubled.",
      "text": "Hitting an enemy champion with an ability generates a stack of Popoff buzzword6 for 6 seconds, stacking up to 6 times. For each stack, your basic abilities' cooldowns progress faster. At maximum Popoff buzzword6 stacks, this value is doubled."
    },
    "levels": [
      {
        "level": 1,
        "raw": "Progress {{fd|2.5}}% faster, for a total of 30% at maximum stacks.",
        "text": "Progress 2.5% faster, for a total of 30% at maximum stacks."
      },
      {
        "level": 2,
        "raw": "Progress 5% faster, for a total of 60% at maximum stacks.",
        "text": "Progress 5% faster, for a total of 60% at maximum stacks."
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
    "id": "wind-beneath-blade",
    "name": "Wind Beneath Blade",
    "tier": "Silver",
    "description": {
      "raw": "Gain {{sti|{{as|{{fd|1.5}} '''bonus''' movement speed}}}} per 1 {{sti|{{as|Lethality}}}} or {{sti|{{as|flat magic penetration}}}}, and {{sti|{{as|5 '''bonus''' movement speed}}}} per 5% {{sti|{{as|armor penetration}}}} or {{sti|{{as|magic penetration}}}}.",
      "text": "Gain 1.5 bonus movement speed per 1 Lethality or flat magic penetration, and 5 bonus movement speed per 5% armor penetration or magic penetration."
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
    "id": "witchful-thinking",
    "name": "Witchful Thinking",
    "tier": "Silver",
    "description": {
      "raw": "Grants {{sti|{{as|ability power}}}}.",
      "text": "Grants ability power."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|60 ability power}}}}.",
        "text": "60 ability power."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|120 ability power}}}}.",
        "text": "120 ability power."
      },
      {
        "level": 3,
        "raw": "{{sti|{{as|180 ability power}}}}.",
        "text": "180 ability power."
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
    "id": "zealot",
    "name": "Zealot",
    "tier": "Silver",
    "description": {
      "raw": "Gain {{sti|attack speed|{{as|35%|as}}}} {{as|(+ 5% per 100 AP)}} {{as|'''bonus''' attack speed}} and {{sti|critical strike chance|{{as|25%|critical strike chance}}}} {{as|(+ 5% per 100 AP)}} {{as|critical strike chance}} based on your {{sti|{{as|ability power}}}}.",
      "text": "Gain 35% (+ 5% per 100 AP) bonus attack speed and 25% critical strike chance (+ 5% per 100 AP) critical strike chance based on your ability power."
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
      "crit"
    ]
  }
] satisfies Augment[]
