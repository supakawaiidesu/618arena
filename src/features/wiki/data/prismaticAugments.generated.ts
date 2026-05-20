import type { Augment } from './types'

// Generated once from scraped Arena augment wiki data. This checked-in file is the app data source.
export const prismaticAugments = [
  {
    "id": "augment",
    "name": "???",
    "tier": "Prismatic",
    "description": {
      "raw": "Your[[File:Enemy Missing ping.png|30px|link=]]''Enemy Missing'' pings will cause you to launch a missile at the pinged location, exploding upon arrival to deal {{as|{{pp|100 to 400}}|magic damage}} {{as|(+ 10% of target's '''missing''' health)}} {{as|magic damage}} to enemies struck, and {{tip|heal}} allied champions within for {{pp|50 to 200}} {{as|(+ 10% of target's '''missing''' health)}}.",
      "text": "Your Enemy Missing pings will cause you to launch a missile at the pinged location, exploding upon arrival to deal 100 to 400 magic damage (+ 10% of target's missing health) magic damage to enemies struck, and heal allied champions within for 50 to 200 (+ 10% of target's missing health)."
    },
    "levels": [],
    "notes": {
      "raw": "*  No more than {{pp|2;4;6;7;7|type=[[Honor]] level|label=Ping count}} pings can be used within a 5-second period. Doing so restricts further use of pings for 6/12/16/20/24 seconds, refreshing and increasing per ping cast after the lockout ensues, and attempting to use pings during this time sends a warning message in the chat. The warning reads: <code>You must wait before issuing more pings.</code>\n** However, [[File:Enemy Missing ping.png|30px|link=]]''Enemy Missing'' pings may only be used 3 times each within 6 seconds at most. This incurs a separate cooldown from the global one, sending an alert to the player that reads: <code>You must wait before issuing more pings of that type.</code> Otherwise, the global ping cooldown is incurred as normal.\n",
      "text": "* No more than 2;4;6;7;7 pings can be used within a 5-second period. Doing so restricts further use of pings for 6/12/16/20/24 seconds, refreshing and increasing per ping cast after the lockout ensues, and attempting to use pings during this time sends a warning message in the chat. The warning reads: `You must wait before issuing more pings.`\n** However, Enemy Missing pings may only be used 3 times each within 6 seconds at most. This incurs a separate cooldown from the global one, sending an alert to the player that reads: `You must wait before issuing more pings of that type.` Otherwise, the global ping cooldown is incurred as normal."
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
    "id": "accelerating-sorcery",
    "name": "Accelerating Sorcery",
    "tier": "Prismatic",
    "description": {
      "raw": "Casting an ability grants {{sti|{{as|ability haste}}}}. This effect stacks infinitely and lasts until the end of the current round phase.",
      "text": "Casting an ability grants ability haste. This effect stacks infinitely and lasts until the end of the current round phase."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|8 ability haste}}}}.",
        "text": "8 ability haste."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|12 ability haste}}}}.",
        "text": "12 ability haste."
      },
      {
        "level": 3,
        "raw": "{{sti|{{as|18 ability haste}}}}.",
        "text": "18 ability haste."
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
    "id": "augment-405",
    "name": "Augment 405",
    "tier": "Prismatic",
    "description": {
      "raw": "Gain 5% increased damage per {{ii|Cappa Juice|hat}}.<br><br>''{{sbc|Error:}} This augment is granted when Parasitic or Symbiotic Mutation attempts to grant a duplicate augment, including itself.''{{citation needed}}",
      "text": "Gain 5% increased damage per hat.\n\nError: This augment is granted when Parasitic or Symbiotic Mutation attempts to grant a duplicate augment, including itself."
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
    "id": "back-to-basics",
    "name": "Back to Basics",
    "tier": "Prismatic",
    "description": {
      "raw": "Your [[champion ability|champion abilities]] deal increased damage and you gain {{sti|{{as|ability haste}}}} and increased {{tip|heal|healing}} and {{tip|shield|shielding}} from all sources, but your ultimate ability is permanently {{tip|lockout|sealed}}.",
      "text": "Your champion abilities deal increased damage and you gain ability haste and increased healing and shielding from all sources, but your ultimate ability is permanently sealed."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>25% increased damage.</li><li>{{sti|{{as|45 ability haste}}}}.</li><li>25% increased {{tip|heal|healing}} and {{tip|shield|shielding}}.</li></ul>",
        "text": "- 25% increased damage.\n- 45 ability haste.\n- 25% increased healing and shielding."
      },
      {
        "level": 2,
        "raw": "<ul><li>30% increased damage.</li><li>{{sti|{{as|60 ability haste}}}}.</li><li>30% increased {{tip|heal|healing}} and {{tip|shield|shielding}}.</li></ul>",
        "text": "- 30% increased damage.\n- 60 ability haste.\n- 30% increased healing and shielding."
      },
      {
        "level": 3,
        "raw": "<ul><li>45% increased damage.</li><li>{{sti|{{as|90 ability haste}}}}.</li><li>45% increased {{tip|heal|healing}} and {{tip|shield|shielding}}.</li></ul><br>{{sbc|Max-level effect:}} Gain 5% increased damage and {{sti|{{as|10 ability haste}}}} for each level of your ultimate.",
        "text": "- 45% increased damage.\n- 90 ability haste.\n- 45% increased healing and shielding.\n\nMax-level effect: Gain 5% increased damage and 10 ability haste for each level of your ultimate."
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
    "id": "blade-waltz",
    "name": "Blade Waltz",
    "tier": "Prismatic",
    "description": {
      "raw": "Replaces {{si|Flee}} with ''{{si|Blade Waltz}}''.<br><br>[[File:Blade Waltz augment spell.png|20px|link=]] {{sbc|Blade Waltz:}} {{#invoke:SpellData|geteffect|Blade Waltz}}",
      "text": "Replaces Flee with Blade Waltz.\n\nBlade Waltz: geteffect"
    },
    "levels": [
      {
        "level": 1,
        "raw": "6 hits in total.",
        "text": "6 hits in total."
      },
      {
        "level": 2,
        "raw": "8 hits in total.",
        "text": "8 hits in total."
      },
      {
        "level": 3,
        "raw": "10 hits in total.<br><br>{{sbc|Max-level effect:}} After ''Blade Waltz'' finishes, generate a ''healing zone'' that {{tip|heal|heals}} you and your allies for {{as|100|health}} {{as|(+ 40% '''bonus''' AD)}} + {{as|(+ 40% AP)}} per second, for a total of {{as|{{ap|100*5}}|health}} {{as|(+ {{ap|40*5}}% '''bonus''' AD)}} + {{as|(+ {{ap|40*5}}% AP)}} over 5 seconds.",
        "text": "10 hits in total.\n\nMax-level effect: After Blade Waltz finishes, generate a healing zone that heals you and your allies for 100 health (+ 40% bonus AD) + (+ 40% AP) per second, for a total of 100*5 health (+ 40*5% bonus AD) + (+ 40*5% AP) over 5 seconds."
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
    "id": "bounce-of-the-poro-king",
    "name": "Bounce of the Poro King",
    "tier": "Prismatic",
    "description": {
      "raw": "Replace {{si|Flee}} with ''{{si|Bounce of the Poro King}}''.<br><br>[[File:Bounce of the Poro King.png|20px|link=]] {{sbc|Bounce of the Poro King:}} {{#invoke:SpellData|geteffect|Bounce of the Poro King}}",
      "text": "Replace Flee with Bounce of the Poro King.\n\nBounce of the Poro King: geteffect"
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
    "id": "bread-sandwich",
    "name": "Bread Sandwich",
    "tier": "Prismatic",
    "description": {
      "raw": "Gain {{sti|{{as|ability haste}}}}. Casting an ability grants you {{sti|{{as|40% '''bonus''' movement speed}}}} for 2 seconds.",
      "text": "Gain ability haste. Casting an ability grants you 40% bonus movement speed for 2 seconds."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|200 ability haste}}}}.",
        "text": "200 ability haste."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|300 ability haste}}}}.",
        "text": "300 ability haste."
      },
      {
        "level": 3,
        "raw": "{{sti|{{as|400 ability haste}}}}.",
        "text": "400 ability haste."
      }
    ],
    "notes": {
      "raw": "* This augment isn't available for choice. Instead, it can only be obtained when you gather all of {{aug|ar|Bread And Butter}}, {{aug|ar|Bread And Cheese}} and {{aug|ar|Bread And Jam}}.\n* Upon synthesizing this augment, those individual Bread augments will be removed from your augment slots, thus allowing you to gain further augment selections.\n* The initial level at the instant you gain this augment is determined by the levels of the ''ingredient bread'' augments.\n",
      "text": "* This augment isn't available for choice. Instead, it can only be obtained when you gather all of Bread And Butter, Bread And Cheese and Bread And Jam.\n* Upon synthesizing this augment, those individual Bread augments will be removed from your augment slots, thus allowing you to gain further augment selections.\n* The initial level at the instant you gain this augment is determined by the levels of the ingredient bread augments."
    },
    "references": {
      "augments": [
        "Bread And Butter",
        "Bread And Cheese",
        "Bread And Jam"
      ],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "ability-haste"
    ]
  },
  {
    "id": "cant-touch-this",
    "name": "Can't Touch This",
    "tier": "Prismatic",
    "description": {
      "raw": "Casting your ultimate grants you {{tip|invulnerability}} for 2 seconds ({{sti|8 seconds cooldown}}).",
      "text": "Casting your ultimate grants you invulnerability for 2 seconds (8 seconds cooldown)."
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
    "id": "center-of-the-universe",
    "name": "Center of the Universe",
    "tier": "Prismatic",
    "description": {
      "raw": "Gain {{cai|Center of the Universe|Aurelion Sol}}.<br><br>{{sbc|Center of the Universe:}} You are now permanently orbited by 6 ''Stars'' that exist {{tt|at your attack range|At the beginning of the current phase}}, and rotate clockwise one after another at the same constant speed.<br><br>Each ''Star'' deals {{as|{{pp|5 to 160}}|magic damage}} {{as|(+ 25% '''bonus''' AD)}} {{as|(+ 12% AP)}} {{as|magic damage}} to enemies that come into contact with it and has a width of {{tip|er|icononly=true}} 50 units.",
      "text": "Gain Center of the Universe.\n\nCenter of the Universe: You are now permanently orbited by 6 Stars that exist at your attack range, and rotate clockwise one after another at the same constant speed.\n\nEach Star deals 5 to 160 magic damage (+ 25% bonus AD) (+ 12% AP) magic damage to enemies that come into contact with it and has a width of 50 units."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Aurelion Sol"
      ],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "cerberus",
    "name": "Cerberus",
    "tier": "Prismatic",
    "description": {
      "raw": "Gain the {{ri|Hail of Blades}} and {{ri|Press the Attack}} keystone runes.<br><br>''See [[Arena#Runes]] for Arena-specific overrides on these runes.''",
      "text": "Gain the Hail of Blades and Press the Attack keystone runes.\n\nSee Arena#Runes for Arena-specific overrides on these runes."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": [
        "Hail of Blades",
        "Press the Attack"
      ]
    },
    "tags": []
  },
  {
    "id": "chain-lightning",
    "name": "Chain Lightning",
    "tier": "Prismatic",
    "description": {
      "raw": "Dealing damage to an enemy champion also damages the nearest other champion within 800 units of them for {{sti|{{as|true damage}}}} equal to a portion of damage instance {{tt|post-mitigation|Damage calculated after modifiers}}.",
      "text": "Dealing damage to an enemy champion also damages the nearest other champion within 800 units of them for true damage equal to a portion of damage instance post-mitigation."
    },
    "levels": [
      {
        "level": 1,
        "raw": "25% damage transmission efficiency.",
        "text": "25% damage transmission efficiency."
      },
      {
        "level": 2,
        "raw": "40% damage transmission efficiency.",
        "text": "40% damage transmission efficiency."
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
    "id": "chauffeur",
    "name": "Chauffeur",
    "tier": "Prismatic",
    "description": {
      "raw": "Become {{tip|attach|attached}} to your ally for the rest of the game, granting them {{sti|{{as|100% of your '''bonus''' movement speed}}}} as well as gaining {{sti|{{as|ability haste}}}} and {{sti|{{as|'''bonus''' attack speed}}}}.<br><br>{{tip|Dash|Dashing}} or {{tip|blink|blinking}} detaches you for {{fd|1.5}} seconds before attaching you back to your ally. While your ally is downed, the link is temporarily broken.",
      "text": "Become attached to your ally for the rest of the game, granting them 100% of your bonus movement speed as well as gaining ability haste and bonus attack speed.\n\nDashing or blinking detaches you for 1.5 seconds before attaching you back to your ally. While your ally is downed, the link is temporarily broken."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{sti|{{as|110 ability haste}}}}.</li><li>{{sti|{{as|60% '''bonus''' attack speed}}}}.</li></ul>",
        "text": "- 110 ability haste.\n- 60% bonus attack speed."
      },
      {
        "level": 2,
        "raw": "<ul><li>{{sti|{{as|170 ability haste}}}}.</li><li>{{sti|{{as|85% '''bonus''' attack speed}}}}.</li></ul>",
        "text": "- 170 ability haste.\n- 85% bonus attack speed."
      }
    ],
    "notes": {
      "raw": "* When {{cai|The Show Stopper|Sett}} is used on you, you will not reattach to your ally until you {{tip|dash}} or {{tip|blink}} again.\n* When {{cai|Realm of Death|Mordekaiser}} is used on you, your hitbox stays attached to your ally's location while you appear to stand at the position where you entered the ''Death Realm''.{{bug}}\n** When casting an ability, your champion will '''visually''' teleport to your real location, before '''visually''' teleporting back once the cast is over.\n* When {{cai|Realm of Death|Mordekaiser}} is used on your ally, you will follow them into the ''Death Realm''.\n** You will, however, only follow them back out of the ''Death Realm'' if you are attached or once you reattach to them.{{bug}}\n*** In the case that you find a way to never reattach, you can stay in the ''Death Realm'' until the round is over.\n",
      "text": "* When The Show Stopper is used on you, you will not reattach to your ally until you dash or blink again.\n* When Realm of Death is used on you, your hitbox stays attached to your ally's location while you appear to stand at the position where you entered the Death Realm.\n** When casting an ability, your champion will visually teleport to your real location, before visually teleporting back once the cast is over.\n* When Realm of Death is used on your ally, you will follow them into the Death Realm.\n** You will, however, only follow them back out of the Death Realm if you are attached or once you reattach to them.\n*** In the case that you find a way to never reattach, you can stay in the Death Realm until the round is over."
    },
    "references": {
      "augments": [],
      "champions": [
        "Mordekaiser",
        "Sett"
      ],
      "items": [],
      "runes": []
    },
    "tags": [
      "ability-haste",
      "attack-speed",
      "mobility"
    ]
  },
  {
    "id": "chroma-flux",
    "name": "Chroma Flux",
    "tier": "Prismatic",
    "description": {
      "raw": "{{as|Automatically}} cast {{cai|Essence Flux|Ezreal}} towards an enemy. The magical orb sticks to the first enemy champion, structure, or epic jungle monster hit and marks them for 4 seconds ({{sti|15 seconds cooldown}}).<br>Hitting the marked target with a basic attack or an ability will detonate the mark, deal (75 {{as|(+ 30% bonus AD)}} {{as|(+ 50% AP)}}) ({{times}} (1 + number of [[File:SpellcraftRedShard.png]] augments with a red sticker you have)) {{as|magic damage}} and grant you {{sti|movement speed|{{as|5 (+ 30 {{times}} number of [[File:SpellcraftBlueShard.png]] augments with a blue sticker you have) '''bonus''' movement speed}}}}, 10 (+ 30 {{times}} number of [[File:SpellcraftGreenShard.png]] augments with a green sticker you have) {{sti|{{as|armor}}}} and {{sti|{{as|magic resistance}}}} for 3 seconds.",
      "text": "Automatically cast Essence Flux towards an enemy. The magical orb sticks to the first enemy champion, structure, or epic jungle monster hit and marks them for 4 seconds (15 seconds cooldown).\nHitting the marked target with a basic attack or an ability will detonate the mark, deal (75 (+ 30% bonus AD) (+ 50% AP)) (x (1 + number of augments with a red sticker you have)) magic damage and grant you 5 (+ 30 x number of augments with a blue sticker you have) bonus movement speed, 10 (+ 30 x number of augments with a green sticker you have) armor and magic resistance for 3 seconds."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Ezreal"
      ],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "circle-of-death",
    "name": "Circle of Death",
    "tier": "Prismatic",
    "description": {
      "raw": "{{tip|Heal|Healing}} and {{stil|health regeneration}} you do causes you to deal a ratio of that value in {{as|magic damage}} to the nearest enemy champion within 1000 units.",
      "text": "Healing and health regeneration you do causes you to deal a ratio of that value in magic damage to the nearest enemy champion within 1000 units."
    },
    "levels": [
      {
        "level": 1,
        "raw": "50% {{tip|heal}} and {{stil|health regen}} converted to damage.",
        "text": "50% heal and health regen converted to damage."
      },
      {
        "level": 2,
        "raw": "100% {{tip|heal}} and {{stil|health regen}} converted to damage.",
        "text": "100% heal and health regen converted to damage."
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
    "id": "clown-college",
    "name": "Clown College",
    "tier": "Prismatic",
    "description": {
      "raw": "Gain {{cis|Shaco}} {{ai|Backstab|Shaco}}, {{ai|Deceive|Shaco}} and {{ais|Hallucinate|Shaco}} explosion. Replaces {{si|Flee}} with ''{{ai|Deceive|Shaco}}''.<br><br>[[File:Backstab.png|20px|link=]] {{sbc|Passive - Backstab:}} Your basic attacks deal {{as|{{pp|20 to 35}}|physical damage}} {{as|(+ 50% '''bonus''' AD)}} {{as|(+ 35% AP)}} {{ccs|{{as|'''bonus''' physical damage}}|physical}} on-hit when hitting an enemy from behind.<br><br>[[File:Deceive.png|20px|link=]] {{sbc|Active - Deceive:}} Become {{tip|invisible}} for up to 3 seconds and {{tip|blink}} to the target location within 400 units after a {{fd|0.125}}-second delay. Your next basic attack while in stealth deals {{as|100|physical damage}} {{as|(+ 150% '''bonus''' AD)}} {{as|(+ 55% AP)}} {{as|'''bonus''' physical damage}}, increased to{{ft|(155% + {{as|crit damage}}) damage|{{as|100 {{times}} (1.55 + {{as|crit damage}})|physical damage}} {{as|(+ 150% {{times}} (1.55 + {{as|crit damage}}) '''bonus''' AD)}} {{as|(+ 55% {{times}} (1.55 + {{as|crit damage}}) AP)}} {{as|'''bonus''' physical damage}}}} if [[File:Backstab.png|20px|link=]] ''Backstab'' was applied ({{sti|15 seconds cooldown}}).<br><br>[[File:Hallucinate.png|20px|link=]] {{sbc|Passive - Hallucinate:}} Upon your death, release an explosion in a {{tip|cr|icononly=true}} 350 radius of your death location, dealing {{as|25% of target's '''maximum''' health}} {{as|true damage}} to enemies within and {{tip|fear|fearing}} them for 1 second. ''This effect cannot award victory to the user if they are the last one standing on their team.''",
      "text": "Gain Shaco Backstab, Deceive and Hallucinate explosion. Replaces Flee with Deceive.\n\nPassive - Backstab: Your basic attacks deal 20 to 35 physical damage (+ 50% bonus AD) (+ 35% AP) bonus physical damage on-hit when hitting an enemy from behind.\n\nActive - Deceive: Become invisible for up to 3 seconds and blink to the target location within 400 units after a 0.125-second delay. Your next basic attack while in stealth deals 100 physical damage (+ 150% bonus AD) (+ 55% AP) bonus physical damage, increased to(155% + crit damage) damage if Backstab was applied (15 seconds cooldown).\n\nPassive - Hallucinate: Upon your death, release an explosion in a 350 radius of your death location, dealing 25% of target's maximum health true damage to enemies within and fearing them for 1 second. This effect cannot award victory to the user if they are the last one standing on their team."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Shaco"
      ],
      "items": [],
      "runes": []
    },
    "tags": [
      "flee-replacement",
      "healing",
      "mobility"
    ]
  },
  {
    "id": "combination-fried-rice",
    "name": "Combination Fried Rice",
    "tier": "Prismatic",
    "description": {
      "raw": "Your abilities gains increased damage, {{tip|heal|healing}} and {{tip|shield|shielding}}. However, you lose {{sti|{{as|50 ability haste}}}}. Casting an ability grants you {{sti|{{as|40% '''bonus''' movement speed}}}} for 2 seconds.",
      "text": "Your abilities gains increased damage, healing and shielding. However, you lose 50 ability haste. Casting an ability grants you 40% bonus movement speed for 2 seconds."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>100% increased damage.</li><li>75% {{tip|heal|healing}} and {{tip|shield|shielding}}.</li></ul>",
        "text": "- 100% increased damage.\n- 75% healing and shielding."
      },
      {
        "level": 2,
        "raw": "<ul><li>125% increased damage.</li><li>100% {{tip|heal|healing}} and {{tip|shield|shielding}}.</li></ul>",
        "text": "- 125% increased damage.\n- 100% healing and shielding."
      },
      {
        "level": 3,
        "raw": "<ul><li>150% increased damage.</li><li>125% {{tip|heal|healing}} and {{tip|shield|shielding}}.</li></ul>",
        "text": "- 150% increased damage.\n- 125% healing and shielding."
      }
    ],
    "notes": {
      "raw": "* This augment isn't available for choice. Instead, it can only be obtained when you gather all of {{aug|ar|Rice And Chicken}}, {{aug|ar|Rice And Fish}} and {{aug|ar|Rice And Pork}}.\n* Upon synthesizing this augment, those individual Rice augments will be removed from your augment slots, thus allowing you to gain further augment selections.\n* The initial level at the instant you gain this augment is determined by the levels of the ''ingredient rice'' augments.\n",
      "text": "* This augment isn't available for choice. Instead, it can only be obtained when you gather all of Rice And Chicken, Rice And Fish and Rice And Pork.\n* Upon synthesizing this augment, those individual Rice augments will be removed from your augment slots, thus allowing you to gain further augment selections.\n* The initial level at the instant you gain this augment is determined by the levels of the ingredient rice augments."
    },
    "references": {
      "augments": [
        "Rice And Chicken",
        "Rice And Fish",
        "Rice And Pork"
      ],
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
    "id": "courage-of-the-colossus",
    "name": "Courage of the Colossus",
    "tier": "Prismatic",
    "description": {
      "raw": "{{tip|immobilize|Immobilizing}} or {{tip|ground|grounding}} an enemy champion grants a shield based on {{as|your '''maximum''' health}} for 3 seconds ({{sti|5 seconds cooldown}} per {{tip|cast instance}}). Shields can stack between multiple triggers of this effect, though not refreshing the duration of previous shields.",
      "text": "Immobilizing or grounding an enemy champion grants a shield based on your maximum health for 3 seconds (5 seconds cooldown per cast instance). Shields can stack between multiple triggers of this effect, though not refreshing the duration of previous shields."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{pp|100 to 300}} {{as|(+ 3% '''maximum''' health)}} {{tip|shield}}.",
        "text": "100 to 300 (+ 3% maximum health) shield."
      },
      {
        "level": 2,
        "raw": "{{pp|100 to 300}} {{as|(+ 7% '''maximum''' health)}} {{tip|shield}}.",
        "text": "100 to 300 (+ 7% maximum health) shield."
      },
      {
        "level": 3,
        "raw": "{{pp|100 to 300}} {{as|(+ 11% '''maximum''' health)}} {{tip|shield}}.<br><br>{{sbc|Max-level effect:}} {{tip|immobilize|Immobilizing}} or {{tip|ground|grounding}} an enemy champion also grants you {{sti|5% increased size}} and {{sti|{{as|1% tenacity}}}}.",
        "text": "100 to 300 (+ 11% maximum health) shield.\n\nMax-level effect: Immobilizing or grounding an enemy champion also grants you 5% increased size and 1% tenacity."
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
    "id": "dashing",
    "name": "Dashing",
    "tier": "Prismatic",
    "description": {
      "raw": "Abilities with {{tip|dash|dashes}} or {{tip|blink|blinks}} gain {{sti|{{as|ability haste}}}}.<br><br>On {{ci|Kalista}}, {{ais|Martial Poise|Kalista}} dash gains {{sti|{{as|'''bonus''' movement speed}}}} toward its speed scaling instead.",
      "text": "Abilities with dashes or blinks gain ability haste.\n\nOn Kalista, Martial Poise dash gains bonus movement speed toward its speed scaling instead."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{sti|{{as|200 ability haste}}}}.</li><li>{{sti|{{as|{{fd|53.3}}% '''bonus''' movement speed}}}} for {{ci|Kalista}}.</li></ul>",
        "text": "- 200 ability haste.\n- 53.3% bonus movement speed for Kalista."
      },
      {
        "level": 2,
        "raw": "<ul><li>{{sti|{{as|275 ability haste}}}}.</li><li>{{sti|{{as|{{fd|73.3}}% '''bonus''' movement speed}}}} for {{ci|Kalista}}.</li></ul>",
        "text": "- 275 ability haste.\n- 73.3% bonus movement speed for Kalista."
      },
      {
        "level": 3,
        "raw": "<ul><li>{{sti|{{as|350 ability haste}}}}.</li><li>{{sti|{{as|{{fd|93.3}}% '''bonus''' movement speed}}}} for {{ci|Kalista}}.</li></ul><br>{{sbc|Max-level effect:}} {{tip|dash|Dashing}} or {{tip|blink|blinking}} also grants you {{sti|{{as|30% tenacity}}}} for 3 seconds.",
        "text": "- 350 ability haste.\n- 93.3% bonus movement speed for Kalista.\n\nMax-level effect: Dashing or blinking also grants you 30% tenacity for 3 seconds."
      }
    ],
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
      "ability-haste",
      "mobility"
    ]
  },
  {
    "id": "devil-on-your-shoulder",
    "name": "Devil on Your Shoulder",
    "tier": "Prismatic",
    "description": {
      "raw": "Forge a pact with {{csl|Teemo|Little Devil}}, who {{tip|health resource|drains}} {{as|{{fd|0.5%}} of your '''current''' health}} every second, increased to {{as|5%|hp}} if there are enemy champions within 1000 units. In return, you deal {{as|'''bonus''' true damage}} and your basic attacks and abilities summon a ''Life Remnant'' nearby for 5 seconds ({{fd|0.75}}-second spawn cooldown). You can absorb a ''Life Remnant'' by moving over it, {{tip|heal|healing}} you for {{pp|100 to 250}} {{as|(+ 60% '''bonus''' AD)}} {{as|(+ 30% AP)}} and granting you {{sti|{{as|'''bonus''' movement speed}}}}.",
      "text": "Forge a pact with Little Devil, who drains 0.5% of your current health every second, increased to 5% if there are enemy champions within 1000 units. In return, you deal bonus true damage and your basic attacks and abilities summon a Life Remnant nearby for 5 seconds (0.75-second spawn cooldown). You can absorb a Life Remnant by moving over it, healing you for 100 to 250 (+ 60% bonus AD) (+ 30% AP) and granting you bonus movement speed."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{as|10% '''bonus''' true damage}}.</li><li>{{sti|{{as|20% '''bonus''' movement speed}}}}.</li></ul>",
        "text": "- 10% bonus true damage.\n- 20% bonus movement speed."
      },
      {
        "level": 2,
        "raw": "<ul><li>{{as|20% '''bonus''' true damage}}.</li><li>{{sti|{{as|30% '''bonus''' movement speed}}}}.</li></ul>",
        "text": "- 20% bonus true damage.\n- 30% bonus movement speed."
      },
      {
        "level": 3,
        "raw": "<ul><li>{{as|30% '''bonus''' true damage}}.</li><li>{{sti|{{as|50% '''bonus''' movement speed}}}}.</li></ul>",
        "text": "- 30% bonus true damage.\n- 50% bonus movement speed."
      }
    ],
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
      "healing"
    ]
  },
  {
    "id": "doomsayer",
    "name": "Doomsayer",
    "tier": "Prismatic",
    "description": {
      "raw": "The next instance of [[ability damage]] against enemy champions generates {{as|2 Cursed Power}} ({{sti|3 seconds cooldown}}). You can generate up to {{as|30|Curse}} (+ {{as|20|Curse}}{{times}}number of Curse augments equipped by you and your teammate) {{as|Cursed Power}} per round. Permanently gain {{tip|adaptive force}} equal to {{as|a percentage of your Cursed Power}}.",
      "text": "The next instance of ability damage against enemy champions generates 2 Cursed Power (3 seconds cooldown). You can generate up to 30 Curse (+ 20 Cursexnumber of Curse augments equipped by you and your teammate) Cursed Power per round. Permanently gain adaptive force equal to a percentage of your Cursed Power."
    },
    "levels": [
      {
        "level": 1,
        "raw": "80% convert rate.",
        "text": "80% convert rate."
      },
      {
        "level": 2,
        "raw": "125% convert rate.",
        "text": "125% convert rate."
      },
      {
        "level": 3,
        "raw": "150% convert rate.",
        "text": "150% convert rate."
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
      "adaptive",
      "curse"
    ]
  },
  {
    "id": "draw-your-sword",
    "name": "Draw Your Sword",
    "tier": "Prismatic",
    "description": {
      "raw": "Become {{tip|melee}}, modifying your [[attack range]] to 200 units. Additionally, gain {{sti|{{as|'''bonus''' attack damage}}}}, {{sti|{{as|'''bonus''' attack speed}}}}, {{sti|{{as|'''bonus''' health}}}}, {{sti|{{as|15% '''bonus''' movement speed}}}} and {{sti|{{as|25% life steal}}}}. These bonuses are increased by {{pp|key=%|type=champion's default attack range|0 to 30 for 11|500 to 650|formula=3% for every 15 attack range starting from 500 attack range and with the maximum at 650 range}}.<br><br>''This augment is only available for {{tip|ranged}} champions.''",
      "text": "Become melee, modifying your attack range to 200 units. Additionally, gain bonus attack damage, bonus attack speed, bonus health, 15% bonus movement speed and 25% life steal. These bonuses are increased by 0 to 30 for 11.\n\nThis augment is only available for ranged champions."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{sti|{{as|25% '''bonus''' attack damage}}}}.</li><li>{{sti|{{as|20% '''bonus''' attack speed}}}}.</li><li>{{sti|{{as|25% '''bonus''' health}}}}.</li></ul>",
        "text": "- 25% bonus attack damage.\n- 20% bonus attack speed.\n- 25% bonus health."
      },
      {
        "level": 2,
        "raw": "<ul><li>{{sti|{{as|30% '''bonus''' attack damage}}}}.</li><li>{{sti|{{as|25% '''bonus''' attack speed}}}}.</li><li>{{sti|{{as|30% '''bonus''' health}}}}.</li></ul>",
        "text": "- 30% bonus attack damage.\n- 25% bonus attack speed.\n- 30% bonus health."
      },
      {
        "level": 3,
        "raw": "<ul><li>{{sti|{{as|35% '''bonus''' attack damage}}}}.</li><li>{{sti|{{as|30% '''bonus''' attack speed}}}}.</li><li>{{sti|{{as|35% '''bonus''' health}}}}.</li></ul>",
        "text": "- 35% bonus attack damage.\n- 30% bonus attack speed.\n- 35% bonus health."
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
      "champion-specific",
      "healing"
    ]
  },
  {
    "id": "dreadbringer",
    "name": "Dreadbringer",
    "tier": "Prismatic",
    "description": {
      "raw": "For every {{fd|0.5}} seconds that you are within 500 units of an enemy champion, generate {{as|1 Cursed Power}} for each one in range. You can generate up to {{as|30|Curse}} (+ {{as|20|Curse}}{{times}}number of Curse augments equipped by you and your teammate) {{as|Cursed Power}} per round. Permanently gain {{sti|{{as|'''bonus''' health}}}} equal to {{as|a percentage of your Cursed Power}}.",
      "text": "For every 0.5 seconds that you are within 500 units of an enemy champion, generate 1 Cursed Power for each one in range. You can generate up to 30 Curse (+ 20 Cursexnumber of Curse augments equipped by you and your teammate) Cursed Power per round. Permanently gain bonus health equal to a percentage of your Cursed Power."
    },
    "levels": [
      {
        "level": 1,
        "raw": "300% convert rate.",
        "text": "300% convert rate."
      },
      {
        "level": 2,
        "raw": "600% convert rate.",
        "text": "600% convert rate."
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
      "curse",
      "healing"
    ]
  },
  {
    "id": "dual-wield",
    "name": "Dual Wield",
    "tier": "Prismatic",
    "description": {
      "raw": "Your basic attacks launch a bolt at the target that fires after a {{tt|{{fd|0.225}}-second delay|Estimated}} {{tip|on-attack}}, deals 40% damage of the triggering attack's {{tt|pre-mitigation|Damage calculated before modifiers}} damage, and applies {{tip|on-hit}} effects at 40% effectiveness. Additionally, increase your {{sti|{{as|'''total''' attack speed}}}}.",
      "text": "Your basic attacks launch a bolt at the target that fires after a 0.225-second delay on-attack, deals 40% damage of the triggering attack's pre-mitigation damage, and applies on-hit effects at 40% effectiveness. Additionally, increase your total attack speed."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|20% '''total''' attack speed}}}}.",
        "text": "20% total attack speed."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|25% '''total''' attack speed}}}}.",
        "text": "25% total attack speed."
      },
      {
        "level": 3,
        "raw": "{{sti|{{as|30% '''total''' attack speed}}}}.<br><br>{{sbc|Max-level effect:}} {{as|Attack speed cap|as}} increases to {{as|99|as}}.",
        "text": "30% total attack speed.\n\nMax-level effect: Attack speed cap increases to 99."
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
    "id": "earthwake",
    "name": "Earthwake",
    "tier": "Prismatic",
    "description": {
      "raw": "{{tip|Dash|Dashing}} or {{tip|blink|blinking}} causes you to leave behind a trail {{tip|cr|icononly=true}} from the location you moved to your destination that detonates after {{fd|0.75}} seconds in a 300 radius, dealing {{as|physical damage}} per explosion to enemies hit. Enemies can only be affected once every {{fd|0.5}} seconds from all cast instances.",
      "text": "Dashing or blinking causes you to leave behind a trail from the location you moved to your destination that detonates after 0.75 seconds in a 300 radius, dealing physical damage per explosion to enemies hit. Enemies can only be affected once every 0.5 seconds from all cast instances."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{as|{{pp|140 to 300}}|physical damage}} {{as|(+ 80% '''bonus''' AD)}} {{as|(+ 20% AP)}} {{as|physical damage}}.",
        "text": "140 to 300 physical damage (+ 80% bonus AD) (+ 20% AP) physical damage."
      },
      {
        "level": 2,
        "raw": "{{as|{{pp|140 to 300}}|physical damage}} {{as|(+ 100% '''bonus''' AD)}} {{as|(+ 30% AP)}} {{as|physical damage}}.",
        "text": "140 to 300 physical damage (+ 100% bonus AD) (+ 30% AP) physical damage."
      },
      {
        "level": 3,
        "raw": "{{as|{{pp|140 to 300}}|physical damage}} {{as|(+ 120% '''bonus''' AD)}} {{as|(+ 40% AP)}} {{as|physical damage}}.<br><br>{{sbc|Max-level effect:}} When it triggers, it repeats for another time.",
        "text": "140 to 300 physical damage (+ 120% bonus AD) (+ 40% AP) physical damage.\n\nMax-level effect: When it triggers, it repeats for another time."
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
    "id": "eureka",
    "name": "Eureka",
    "tier": "Prismatic",
    "description": {
      "raw": "Gain {{sti|{{as|ability haste}}}} based on your {{sti|{{as|ability power}}}}.",
      "text": "Gain ability haste based on your ability power."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|20% AP}}}} converted to {{sti|{{as|ability haste}}}}.",
        "text": "20% AP converted to ability haste."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|30% AP}}}} converted to {{sti|{{as|ability haste}}}}.",
        "text": "30% AP converted to ability haste."
      },
      {
        "level": 3,
        "raw": "{{sti|{{as|45% AP}}}} converted to {{sti|{{as|ability haste}}}}.",
        "text": "45% AP converted to ability haste."
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
    "id": "fan-the-hammer",
    "name": "Fan the Hammer",
    "tier": "Prismatic",
    "description": {
      "raw": "Your next basic attack in each cardinal direction within {{sti|attack range|750 range}} additionally {{tip|on-attack}} fires 5 bolts at the target that each deals {{as|{{pp|10 to 52.5}}|physical damage}} {{as|(+ 15% '''bonus''' AD)}} {{as|physical damage}}. Each direction has {{sti|unique cooldown}}. Bolts' damage is increased by {{pp|type=distance travelled|0 to 50 for 11|0 to 750|key=%}}. Each bolt can {{tip|critically strike}} and applies {{tip|on-hit}} effects at 20% effectiveness.",
      "text": "Your next basic attack in each cardinal direction within 750 range additionally on-attack fires 5 bolts at the target that each deals 10 to 52.5 physical damage (+ 15% bonus AD) physical damage. Each direction has unique cooldown. Bolts' damage is increased by 0 to 50 for 11. Each bolt can critically strike and applies on-hit effects at 20% effectiveness."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|7 seconds cooldown}} per direction.",
        "text": "7 seconds cooldown per direction."
      },
      {
        "level": 2,
        "raw": "{{sti|5 seconds cooldown}} per direction.<br><br>{{sbc|Max-level effect:}} Firing from a different direction increases the number of bolts to be fired subsequently, for the rest of the round.",
        "text": "5 seconds cooldown per direction.\n\nMax-level effect: Firing from a different direction increases the number of bolts to be fired subsequently, for the rest of the round."
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
    "id": "feel-the-burn",
    "name": "Feel the Burn",
    "tier": "Prismatic",
    "description": {
      "raw": "Replaces {{si|Flee}} with ''{{si|Feel the Burn}}''.<br><br>[[File:Feel the Burn augment spell.png|20px|link=]] {{sbc|Feel the Burn:}} {{#invoke:SpellData|geteffect|Feel the Burn}}<br><br>This counts as a {{as|Burn}} source.",
      "text": "Replaces Flee with Feel the Burn.\n\nFeel the Burn: geteffect\n\nThis counts as a Burn source."
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
      "burn",
      "flee-replacement"
    ]
  },
  {
    "id": "fey-magic",
    "name": "Fey Magic",
    "tier": "Prismatic",
    "description": {
      "raw": "Damaging enemies with your ultimate ability {{tip|polymorph|polymorphs}} them into harmless critters for 2 seconds, during which their {{sti|{{as|'''base''' movement speed}}}} is reduced by {{as|60|ms}}, and {{tip|disarm|disarms}} them for the same duration ({{sti|15 seconds cooldown}} per target).",
      "text": "Damaging enemies with your ultimate ability polymorphs them into harmless critters for 2 seconds, during which their base movement speed is reduced by 60, and disarms them for the same duration (15 seconds cooldown per target)."
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
    "id": "final-form",
    "name": "Final Form",
    "tier": "Prismatic",
    "description": {
      "raw": "Casting your ultimate ability empowers you for 5 seconds, causing you to gain a {{tip|shield}} based on {{sti|{{as|your '''maximum''' health}}}}, {{sti|{{as|omnivamp}}}}, and {{sti|{{as|30% '''bonus''' movement speed}}}} for the duration ({{sti|20 seconds cooldown}}).",
      "text": "Casting your ultimate ability empowers you for 5 seconds, causing you to gain a shield based on your maximum health, omnivamp, and 30% bonus movement speed for the duration (20 seconds cooldown)."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{as|30% of your '''maximum''' health}} shield.</li><li>{{sti|{{as|15% omnivamp}}}}.</li></ul>",
        "text": "- 30% of your maximum health shield.\n- 15% omnivamp."
      },
      {
        "level": 2,
        "raw": "<ul><li>{{as|35% of your '''maximum''' health}} shield.</li><li>{{sti|{{as|20% Omnivamp}}}}.</li></ul>",
        "text": "- 35% of your maximum health shield.\n- 20% Omnivamp."
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
    "id": "gamba-anvil",
    "name": "Gamba Anvil",
    "tier": "Prismatic",
    "description": {
      "raw": "Gain {{g|1000}}. Additionally, in your Shop, the cost of {{ii|Prismatic Item|Prismatic Item Anvils}}, all {{ii|Legendary Fighter Item|icononly=true}}{{ii|Legendary Marksman Item|icononly=true}}{{ii|Legendary Assassin Item|icononly=true}}{{ii|Legendary Mage Item|icononly=true}}{{ii|Legendary Tank Item|icononly=true}}{{ii|Legendary Support Item|icononly=true}} Legendary Item Anvils and {{ii|Stat Bonus|Stat Bonus Anvils}} is reduced. The resale value of all ''Prismatic items'' and ''Legendary items'' is also reduced.",
      "text": "Gain 1000. Additionally, in your Shop, the cost of Prismatic Item Anvils, all Legendary Fighter ItemLegendary Marksman ItemLegendary Assassin ItemLegendary Mage ItemLegendary Tank ItemLegendary Support Item Legendary Item Anvils and Stat Bonus Anvils is reduced. The resale value of all Prismatic items and Legendary items is also reduced."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ol><li>The cost of {{ii|Prismatic Item|Prismatic Item Anvils}} is reduced to {{g|2500}}, but the resale value of all ''Prismatic items'' is also reduced to {{g|{{tt|{{ap|0.4*(5000-1500*1.25)}}|40% of the equivalent value decrease (1875g) on the 5000g base Prismatic item value.}}}}.</li><li>The cost of all Legendary Item Anvils is reduced to {{g|1500}}, but the resale value of all ''Legendary Items'' is also reduced to {{g|{{tt|{{ap|0.5*(2500-750*1.5)}}|50% of the equivalent value decrease (750g) on the 2500g base Legendary item value.}}}}.</li><li>The cost of {{ii|Stat Bonus|Stat Bonus Anvils}} is reduced by {{g|250}}.</li></ol>",
        "text": "- The cost of Prismatic Item Anvils is reduced to 2500, but the resale value of all Prismatic items is also reduced to 0.4*(5000-1500*1.25).\n- The cost of all Legendary Item Anvils is reduced to 1500, but the resale value of all Legendary Items is also reduced to 0.5*(2500-750*1.5).\n- The cost of Stat Bonus Anvils is reduced by 250."
      }
    ],
    "notes": {
      "raw": "* You will keep Gamba Anvils discounts even after losing the Augment.{{bug}}\n",
      "text": "* You will keep Gamba Anvils discounts even after losing the Augment."
    },
    "references": {
      "augments": [],
      "champions": [],
      "items": [
        "Legendary Assassin Item",
        "Legendary Fighter Item",
        "Legendary Mage Item",
        "Legendary Marksman Item",
        "Legendary Support Item",
        "Legendary Tank Item",
        "Prismatic Item",
        "Stat Bonus"
      ],
      "runes": []
    },
    "tags": [
      "item"
    ]
  },
  {
    "id": "giant-slayer",
    "name": "Giant Slayer",
    "tier": "Prismatic",
    "description": {
      "raw": "Become tiny, reducing your {{sti|size}} and gaining {{sti|{{as|'''bonus''' movement speed}}}}. Additionally, deal '''bonus''' damage against enemy champions with greater [[size]] than you.",
      "text": "Become tiny, reducing your size and gaining bonus movement speed. Additionally, deal bonus damage against enemy champions with greater size than you."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{sti|20% reduced size}}.</li><li>{{sti|{{as|25% '''bonus''' movement speed}}}}.</li><li>{{pp|key=%|type=target's size|10;15;25;30|Small;Medium;Large;Extra Large}} '''bonus''' damage.</li></ul>",
        "text": "- 20% reduced size.\n- 25% bonus movement speed.\n- 10;15;25;30 bonus damage."
      },
      {
        "level": 2,
        "raw": "<ul><li>{{sti|25% reduced size}}.</li><li>{{sti|{{as|30% '''bonus''' movement speed}}}}.</li><li>{{pp|key=%|type=target's size|15;20;30;35|Small;Medium;Large;Extra Large}} '''bonus''' damage.</li></ul>",
        "text": "- 25% reduced size.\n- 30% bonus movement speed.\n- 15;20;30;35 bonus damage."
      },
      {
        "level": 3,
        "raw": "<ul><li>{{sti|30% reduced size}}.</li><li>{{sti|{{as|35% '''bonus''' movement speed}}}}.</li><li>{{pp|key=%|type=target's size|20;25;35;40|Small;Medium;Large;Extra Large}} '''bonus''' damage.</li></ul>",
        "text": "- 30% reduced size.\n- 35% bonus movement speed.\n- 20;25;35;40 bonus damage."
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
    "id": "glass-cannon",
    "name": "Glass Cannon",
    "tier": "Prismatic",
    "description": {
      "raw": "You gain a [[Health#Health_threshold|health threshold]] equal to {{sti|{{as|70% '''maximum''' health}}}} which cannot be {{tt|modified|By increases or decreases to maximum health}} nor {{tt|exceeded|By healing and health regeneration}} by any means. In return, you deal {{as|'''bonus''' true damage}} equal to a percentage of all of the damage you deal {{tt|pre-mitigation|Damage calculated before modifiers}}.",
      "text": "You gain a health threshold equal to 70% maximum health which cannot be modified nor exceeded by any means. In return, you deal bonus true damage equal to a percentage of all of the damage you deal pre-mitigation."
    },
    "levels": [
      {
        "level": 1,
        "raw": "15% extra {{as|true damage}}.",
        "text": "15% extra true damage."
      },
      {
        "level": 2,
        "raw": "20% extra {{as|true damage}}.",
        "text": "20% extra true damage."
      },
      {
        "level": 3,
        "raw": "30% extra {{as|true damage}}.",
        "text": "30% extra true damage."
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
    "id": "goliath",
    "name": "Goliath",
    "tier": "Prismatic",
    "description": {
      "raw": "Grants {{sti|{{as|'''bonus maximum''' health}}}}, {{tip|adaptive force}} and {{sti|size}}.",
      "text": "Grants bonus maximum health, adaptive force and size."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{sti|{{as|15% '''bonus maximum''' health}}}}</li><li>10% {{tip|adaptive force}}</li><li>{{sti|30% size}}</li></ul>",
        "text": "- 15% bonus maximum health\n- 10% adaptive force\n- 30% size"
      },
      {
        "level": 2,
        "raw": "<ul><li>{{sti|{{as|30% '''bonus maximum''' health}}}}</li><li>20% {{tip|adaptive force}}</li><li>{{sti|60% size}}</li></ul>",
        "text": "- 30% bonus maximum health\n- 20% adaptive force\n- 60% size"
      },
      {
        "level": 3,
        "raw": "<ul><li>{{sti|{{as|50% '''bonus maximum''' health}}}}</li><li>30% {{tip|adaptive force}}</li><li>{{sti|100% size}}</li></ul>",
        "text": "- 50% bonus maximum health\n- 30% adaptive force\n- 100% size"
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
      "adaptive",
      "healing"
    ]
  },
  {
    "id": "hive-mind",
    "name": "Hive Mind",
    "tier": "Prismatic",
    "description": {
      "raw": "Start each round with a number of ''Bees'' following you; gain an additional ''Bee'' for each hit you or your teammate perform against {{ui|Power Flower|Power Flowers}}, up to a maximum of 8 ''Bees''. For each instance of damage dealt to an enemy champion you send a ''Bee'' to them, dealing {{ft|{{as|{{pp|40 to 100}}|magic damage}} {{as|(+ 20% '''bonus''' AD)}} {{as|(+ 20% AP)}} {{as|magic damage}} over 2 seconds|{{as|{{pp|40/8 to 100/8}}|magic damage}} {{as|(+ {{ap|20/8}}% '''bonus''' AD)}} {{as|(+ {{ap|20/8}}% AP)}} {{as|magic damage}} every {{fd|0.25}} seconds}} on arrival. ''Bees'' return to you 6 seconds after being sent off.",
      "text": "Start each round with a number of Bees following you; gain an additional Bee for each hit you or your teammate perform against Power Flowers, up to a maximum of 8 Bees. For each instance of damage dealt to an enemy champion you send a Bee to them, dealing 40 to 100 magic damage (+ 20% bonus AD) (+ 20% AP) magic damage over 2 seconds on arrival. Bees return to you 6 seconds after being sent off."
    },
    "levels": [
      {
        "level": 1,
        "raw": "Start with 1 ''Bee''.",
        "text": "Start with 1 Bee."
      },
      {
        "level": 2,
        "raw": "Start with 2 ''Bees''.",
        "text": "Start with 2 Bees."
      },
      {
        "level": 3,
        "raw": "Start with 3 ''Bees''.<br><br>{{sbc|Max-level effect:}} Reduce the target's {{sti|{{as|'''total''' attack speed}}}} by 30%.",
        "text": "Start with 3 Bees.\n\nMax-level effect: Reduce the target's total attack speed by 30%."
      }
    ],
    "notes": {
      "raw": "    * A special \"+Bee\" indicator accompanies gaining a ''Bee'' which displays over the user's model.\n** This is only visible to the user.\n    ",
      "text": "* A special \"+Bee\" indicator accompanies gaining a Bee which displays over the user's model.\n** This is only visible to the user."
    },
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
    "id": "infernal-conduit",
    "name": "Infernal Conduit",
    "tier": "Prismatic",
    "description": {
      "raw": "Your ability hits apply a {{as|Burn}} for 5 seconds that deals persistent {{as|magic damage}} ({{sti|1 second cooldown}} per {{tip|cast instance}}). This {{as|Burn}} stacks infinitely and refreshes with each application. Damage over time abilities can apply the effect only once every 2 seconds.<br><br>Additionally, all of your {{as|Burn}} effects reduce the {{sti|cooldowns}} of all your basic abilities for each tick of damage they deal to a target.<br><br>This counts as a {{as|Burn}} source.",
      "text": "Your ability hits apply a Burn for 5 seconds that deals persistent magic damage (1 second cooldown per cast instance). This Burn stacks infinitely and refreshes with each application. Damage over time abilities can apply the effect only once every 2 seconds.\n\nAdditionally, all of your Burn effects reduce the cooldowns of all your basic abilities for each tick of damage they deal to a target.\n\nThis counts as a Burn source."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{ft|{{pp|6/5 to 60/5|color=magic damage}} {{as|(+ {{ap|10/5}}% '''bonus''' AD)}} {{as|(+ {{ap|4.5/5}}% AP)}} {{as|'''bonus''' magic damage}} per second|{{pp|6 to 60|color=magic damage}} {{as|(+ 10% '''bonus''' AD)}} {{as|(+ {{fd|4.5}}% AP)}} {{as|'''bonus''' magic damage}} over the duration}}.</li><li>{{sti|{{fd|0.08}} seconds cooldown reduction}} per tick.</li></ul>",
        "text": "- 6/5 to 60/5 (+ 10/5% bonus AD) (+ 4.5/5% AP) bonus magic damage per second.\n- 0.08 seconds cooldown reduction per tick."
      },
      {
        "level": 2,
        "raw": "<ul><li>{{ft|{{pp|6/5 to 60/5|color=magic damage}} {{as|(+ {{ap|14/5}}% '''bonus''' AD)}} {{as|(+ {{ap|6/5}}% AP)}} {{as|'''bonus''' magic damage}} per second|{{pp|6 to 60|color=magic damage}} {{as|(+ 14% '''bonus''' AD)}} {{as|(+ 6% AP)}} {{as|'''bonus''' magic damage}} over the duration}}.</li><li>{{sti|{{fd|0.08}} seconds cooldown reduction}} per tick.</li></ul>",
        "text": "- 6/5 to 60/5 (+ 14/5% bonus AD) (+ 6/5% AP) bonus magic damage per second.\n- 0.08 seconds cooldown reduction per tick."
      },
      {
        "level": 3,
        "raw": "<ul><li>{{ft|{{pp|6/5 to 60/5|color=magic damage}} {{as|(+ {{ap|20/5}}% '''bonus''' AD)}} {{as|(+ {{ap|9/5}}% AP)}} {{as|'''bonus''' magic damage}} per second|{{pp|6 to 60|color=magic damage}} {{as|(+ 20% '''bonus''' AD)}} {{as|(+ 9% AP)}} {{as|'''bonus''' magic damage}} over the duration}}.</li><li>{{sti|{{fd|0.12}} seconds cooldown reduction}} per tick.</li></ul>",
        "text": "- 6/5 to 60/5 (+ 20/5% bonus AD) (+ 9/5% AP) bonus magic damage per second.\n- 0.12 seconds cooldown reduction per tick."
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
    "id": "jeweled-gauntlet",
    "name": "Jeweled Gauntlet",
    "tier": "Prismatic",
    "description": {
      "raw": "Your abilities can now {{tip|critical strike|critically strike}} to deal higher damage. Additionally, gain {{sti|{{as|critical strike chance}}}} based on your {{sti|{{as|ability power}}}}.<br><br>If both ''Jeweled Gauntlet'' and [[File:Vulnerability ar augment.png|20px|link=|An icon for the Arena augment Vulnerability]] ''Vulnerability'' are equipped, only rolls the {{sti|{{as|critical strike chance}}}} of the augment that has the higher {{sti|{{as|critical damage}}}} (or either if equal).",
      "text": "Your abilities can now critically strike to deal higher damage. Additionally, gain critical strike chance based on your ability power.\n\nIf both Jeweled Gauntlet and Vulnerability are equipped, only rolls the critical strike chance of the augment that has the higher critical damage (or either if equal)."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>Crit damage modifier: 140% + {{sti|{{as|'''bonus''' critical damage}}}}.</li><li>{{as|25%|critical strike chance}} {{as|(+ 4% per 100 AP)}} {{as|critical strike chance}}.</li></ul>",
        "text": "- Crit damage modifier: 140% + bonus critical damage.\n- 25% critical strike chance (+ 4% per 100 AP) critical strike chance."
      },
      {
        "level": 2,
        "raw": "<ul><li>Crit damage modifier: 150% + {{sti|{{as|'''bonus''' critical damage}}}}.</li><li>{{as|25%|critical strike chance}} {{as|(+ 5% per 100 AP)}} {{as|critical strike chance}}.</li></ul>",
        "text": "- Crit damage modifier: 150% + bonus critical damage.\n- 25% critical strike chance (+ 5% per 100 AP) critical strike chance."
      },
      {
        "level": 3,
        "raw": "<ul><li>Crit damage modifier: 160% + {{sti|{{as|'''bonus''' critical damage}}}}.</li><li>{{as|25%|critical strike chance}} {{as|(+ 6% per 100 AP)}} {{as|critical strike chance}}.</li></ul>",
        "text": "- Crit damage modifier: 160% + bonus critical damage.\n- 25% critical strike chance (+ 6% per 100 AP) critical strike chance."
      }
    ],
    "notes": null,
    "references": {
      "augments": [
        "Vulnerability"
      ],
      "champions": [],
      "items": [],
      "runes": []
    },
    "tags": [
      "crit"
    ]
  },
  {
    "id": "laser-eyes",
    "name": "Laser Eyes",
    "tier": "Prismatic",
    "description": {
      "raw": "Continuously fire a laser in a line 700 units from your facing direction, dealing {{as|{{pp|5 to 60}}|magic damage}} {{as|(+ {{ap|56/4}}% AD)}} {{as|(+ {{ap|36/4}}% AP)}} {{as|magic damage}} every {{fd|0.25}} seconds to enemies in its width of 80 units.",
      "text": "Continuously fire a laser in a line 700 units from your facing direction, dealing 5 to 60 magic damage (+ 56/4% AD) (+ 36/4% AP) magic damage every 0.25 seconds to enemies in its width of 80 units."
    },
    "levels": [
      {
        "level": 3,
        "raw": "{{sbc|Max-level effect:}} The laser deals 1% increased damage every {{fd|0.3}} seconds your enemy is in your {{tip|sight|sights}}. This effect resets if your enemy leaves your {{tip|sight|sights}}, and resets in each round.",
        "text": "Max-level effect: The laser deals 1% increased damage every 0.3 seconds your enemy is in your sights. This effect resets if your enemy leaves your sights, and resets in each round."
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
    "id": "mad-scientist",
    "name": "Mad Scientist",
    "tier": "Prismatic",
    "description": {
      "raw": "At the start of the combat phase in each round, gain either 30% {{tip|adaptive force}}, {{sti|{{as|'''bonus''' health}}}} and {{sti|40% increased size}}, or {{sti|{{as|ability haste}}}}, {{sti|{{as|40% '''bonus''' movement speed}}}} and {{sti|40% reduced size}}.",
      "text": "At the start of the combat phase in each round, gain either 30% adaptive force, bonus health and 40% increased size, or ability haste, 40% bonus movement speed and 40% reduced size."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{sti|{{as|20% '''bonus''' health}}}}.</li><li>{{sti|{{as|70 ability haste}}}}.</li></ul>",
        "text": "- 20% bonus health.\n- 70 ability haste."
      },
      {
        "level": 2,
        "raw": "<ul><li>{{sti|{{as|40% '''bonus''' health}}}}.</li><li>{{sti|{{as|100 ability haste}}}}.</li></ul>",
        "text": "- 40% bonus health.\n- 100 ability haste."
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
      "adaptive",
      "healing"
    ]
  },
  {
    "id": "magical-girl",
    "name": "Magical Girl",
    "tier": "Prismatic",
    "description": {
      "raw": "Each round, a star falls over 15 seconds. You can pick up the star by walking within {{tip|cr|200}} units of its landing location. After picking it up, you transform into a '''Magical Girl''', gain {{tip|adaptive force}} and a {{tip|shield}}. Upon transformation, you {{tip|airborne|knock back}} nearby enemies to {{tip|cr|1000}} units from you, and cause them to dance for 2 seconds, but granting them {{tip|invulnerability}} for the same duration.<br>As a Magical Girl, every 5 to 10 seconds (based on the number of enemies within {{tip|cr|700}} units from you), several stars fall from the sky striking around you and each of your enemies, dealing {{pp|100 to 500}} {{as|(+ 25% AP)}} {{as|magic damage}} to those hit.",
      "text": "Each round, a star falls over 15 seconds. You can pick up the star by walking within 200 units of its landing location. After picking it up, you transform into a Magical Girl, gain adaptive force and a shield. Upon transformation, you knock back nearby enemies to 1000 units from you, and cause them to dance for 2 seconds, but granting them invulnerability for the same duration.\nAs a Magical Girl, every 5 to 10 seconds (based on the number of enemies within 700 units from you), several stars fall from the sky striking around you and each of your enemies, dealing 100 to 500 (+ 25% AP) magic damage to those hit."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{as|200 adaptive force}}.</li><li>200 {{tip|shield}}.</li><li>2 stars in each fall.</li></ul>",
        "text": "- 200 adaptive force.\n- 200 shield.\n- 2 stars in each fall."
      },
      {
        "level": 2,
        "raw": "<ul><li>{{as|300 adaptive force}}.</li><li>300 {{tip|shield}}.</li><li>3 stars in each fall.</li></ul>",
        "text": "- 300 adaptive force.\n- 300 shield.\n- 3 stars in each fall."
      },
      {
        "level": 3,
        "raw": "<ul><li>{{as|300 adaptive force}}.</li><li>500 {{tip|shield}}.</li><li>5 stars in each fall.</li></ul>",
        "text": "- 300 adaptive force.\n- 500 shield.\n- 5 stars in each fall."
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
      "adaptive",
      "shield"
    ]
  },
  {
    "id": "master-of-duality",
    "name": "Master of Duality",
    "tier": "Prismatic",
    "description": {
      "raw": "Basic attacks {{tip|on-hit}} grant {{sti|{{as|{{pp|6 to 18}} ability power}}}} and ability casts grant {{sti|{{as|{{pp|3 to 9}} '''bonus''' attack damage}}}}. This effect stacks infinitely and lasts until the end of the current round phase.",
      "text": "Basic attacks on-hit grant 6 to 18 ability power and ability casts grant 3 to 9 bonus attack damage. This effect stacks infinitely and lasts until the end of the current round phase."
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
    "id": "mystic-punch",
    "name": "Mystic Punch",
    "tier": "Prismatic",
    "description": {
      "raw": "Basic attacks {{tip|on-hit}} reduce the remaining cooldowns of your abilities by {{sti|cooldown|{{fd|1.25}} seconds}}.",
      "text": "Basic attacks on-hit reduce the remaining cooldowns of your abilities by 1.25 seconds."
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
    "id": "nesting-doll",
    "name": "Nesting Doll",
    "tier": "Prismatic",
    "description": {
      "raw": "Upon taking fatal damage, you enter a [[Arena#Revival|downed state]] as normal but modify the arm time for the revive and automatically revive yourself without the help of your ally over 8 seconds. Additionally, you can enter the downed state for revival an additional time after the first revive, for a total of 2 revives per round. Each time you revive however, you respawn with reduced {{sti|{{as|'''maximum''' health}}}} and {{sti|size}}. The first revive reduces your {{sti|{{as|'''maximum''' health}}}} by {{as|20%|hp}} and {{sti|size}} by 20% and the second does so by {{as|36%|hp}} and 40% ({{as|80% '''total maximum''' health}} and 80% size for first revive, then {{as|64% '''total maximum''' health}} and 60% size for the second), and so on.<br><br>This effect only activates while your ally is alive and is cancelled immediately if they die while you are in the downed state. You and your ally can enter the downed state even after one of you has already been revived from one, though not a second time for your ally. If your ally stands in your revival zone, the revive occurs faster. Upon reviving, you {{tip|airborne|knock back}} all nearby enemies.",
      "text": "Upon taking fatal damage, you enter a downed state as normal but modify the arm time for the revive and automatically revive yourself without the help of your ally over 8 seconds. Additionally, you can enter the downed state for revival an additional time after the first revive, for a total of 2 revives per round. Each time you revive however, you respawn with reduced maximum health and size. The first revive reduces your maximum health by 20% and size by 20% and the second does so by 36% and 40% (80% total maximum health and 80% size for first revive, then 64% total maximum health and 60% size for the second), and so on.\n\nThis effect only activates while your ally is alive and is cancelled immediately if they die while you are in the downed state. You and your ally can enter the downed state even after one of you has already been revived from one, though not a second time for your ally. If your ally stands in your revival zone, the revive occurs faster. Upon reviving, you knock back all nearby enemies."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>2 seconds arm time.</li><li>1 extra revival.</li></ul>",
        "text": "- 2 seconds arm time.\n- 1 extra revival."
      },
      {
        "level": 2,
        "raw": "<ul><li>3 seconds arm time.</li><li>2 extra revivals.</li></ul>",
        "text": "- 3 seconds arm time.\n- 2 extra revivals."
      },
      {
        "level": 3,
        "raw": "<ul><li>3 seconds arm time.</li><li>3 extra revivals.</li></ul><br>{{sbc|Max-level effect:}} Each ally gains an additional revive.",
        "text": "- 3 seconds arm time.\n- 3 extra revivals.\n\nMax-level effect: Each ally gains an additional revive."
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
    "id": "null",
    "name": "Null",
    "tier": "Prismatic",
    "description": {
      "raw": "No effect.<br><br>''{{sbc|Error:}} This augment is '''only''' granted when the Parasitic Mutation augment has failed to copy an augment.''",
      "text": "No effect.\n\nError: This augment is only granted when the Parasitic Mutation augment has failed to copy an augment."
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
    "id": "ominous-pact",
    "name": "Ominous Pact",
    "tier": "Prismatic",
    "description": {
      "raw": "Your abilities now have a {{tip|health resource|health cost}} of {{sti|{{as|5% '''current''' health}}}} to cast them. In return, you gain {{sti|{{as|ability power}}}}, {{sti|{{as|'''bonus''' movement speed}}}} and {{sti|{{as|omnivamp}}}} based on your {{sti|{{as|'''missing''' health}}}}.",
      "text": "Your abilities now have a health cost of 5% current health to cast them. In return, you gain ability power, bonus movement speed and omnivamp based on your missing health."
    },
    "levels": [
      {
        "level": 1,
        "raw": "Capped at {{sti|{{as|70% '''missing''' health}}}}: <ul><li>{{sti|{{as|{{pp|75 to 150}} ability power}}}}.</li><li>{{sti|movement speed|icononly=true}} {{pp|key=%|key1=%|type='''missing''' health|0 to 50 for 11|0 to 70|formula=0.714% per 1% '''missing''' health, capped at 70% '''missing''' health}} {{as|'''bonus''' movement speed}}.</li><li>{{sti|omnivamp|icononly=true}} {{pp|key=%|key1=%|type='''missing''' health|0 to 15 for 11|0 to 70|formula=0.214% per 1% '''missing''' health, capped at 70% '''missing''' health}} {{as|omnivamp}}.</li></ul>",
        "text": "Capped at 70% missing health:\n- 75 to 150 ability power.\n- movement speed 0 to 50 for 11 bonus movement speed.\n- omnivamp 0 to 15 for 11 omnivamp."
      },
      {
        "level": 2,
        "raw": "Capped at {{sti|{{as|70% '''missing''' health}}}}: <ul><li>{{sti|{{as|{{pp|75 to 150}} ability power}}}}.</li><li>{{sti|movement speed|icononly=true}} {{pp|key=%|key1=%|type='''missing''' health|0 to 75 for 11|0 to 70|formula=1.071% per 1% '''missing''' health, capped at 70% '''missing''' health}} {{as|'''bonus''' movement speed}}.</li><li>{{sti|omnivamp|icononly=true}} {{pp|key=%|key1=%|type='''missing''' health|0 to 25 for 11|0 to 70|formula=0.357% per 1% '''missing''' health, capped at 70% '''missing''' health}} {{as|omnivamp}}.</li></ul>",
        "text": "Capped at 70% missing health:\n- 75 to 150 ability power.\n- movement speed 0 to 75 for 11 bonus movement speed.\n- omnivamp 0 to 25 for 11 omnivamp."
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
    "id": "omni-soul",
    "name": "Omni Soul",
    "tier": "Prismatic",
    "description": {
      "raw": "Grants random {{bi|Dragon Soul|Dragon Souls}}.",
      "text": "Grants random Dragon Souls."
    },
    "levels": [
      {
        "level": 1,
        "raw": "2 {{bi|Dragon Soul|Dragon Souls}}.",
        "text": "2 Dragon Souls."
      },
      {
        "level": 2,
        "raw": "3 {{bi|Dragon Soul|Dragon Souls}}.",
        "text": "3 Dragon Souls."
      },
      {
        "level": 3,
        "raw": "4 {{bi|Dragon Soul|Dragon Souls}}.",
        "text": "4 Dragon Souls."
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
    "id": "orbital-laser",
    "name": "Orbital Laser",
    "tier": "Prismatic",
    "description": {
      "raw": "Replaces {{si|Flee}} with ''{{si|Orbital Laser}}''.<br><br>[[File:Orbital Laser augment spell.png|20px|link=]] {{sbc|Orbital Laser:}} {{#invoke:SpellData|geteffect|Orbital Laser}}",
      "text": "Replaces Flee with Orbital Laser.\n\nOrbital Laser: geteffect"
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
    "id": "pandoras-box",
    "name": "Pandora's Box",
    "tier": "Prismatic",
    "description": {
      "raw": "Your current augments transform into an equal number of completely random Prismatic ones.",
      "text": "Your current augments transform into an equal number of completely random Prismatic ones."
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
    "id": "prismatic-egg",
    "name": "Prismatic Egg",
    "tier": "Prismatic",
    "description": {
      "raw": "Scoring a champion {{tip|takedown}} generates a stack, once per champion per round. This augment will transform into a free {{ii|Prismatic Item|Prismatic Item Anvil}}, a Prismatic Augment selection and a free {{ii|Stat Bonus|Prismatic Stat Anvil}} at 5 stacks.<br><br>''These bonuses are granted at the start of the shop phase after a combat phase where the stack requirement is achieved.''",
      "text": "Scoring a champion takedown generates a stack, once per champion per round. This augment will transform into a free Prismatic Item Anvil, a Prismatic Augment selection and a free Prismatic Stat Anvil at 5 stacks.\n\nThese bonuses are granted at the start of the shop phase after a combat phase where the stack requirement is achieved."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [
        "Prismatic Item",
        "Stat Bonus"
      ],
      "runes": []
    },
    "tags": [
      "item"
    ]
  },
  {
    "id": "protein-shake",
    "name": "Protein Shake",
    "tier": "Prismatic",
    "description": {
      "raw": "Gain {{sti|hsp|{{as|25%|heal and shield power}}}} {{as|(+ 35% per 100 '''bonus''' armor)}} {{as|(+ 35% per 100 '''bonus''' magic resistance)}} {{as|heal and shield power}}.",
      "text": "Gain 25% heal and shield power (+ 35% per 100 bonus armor) (+ 35% per 100 bonus magic resistance) heal and shield power."
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
    "id": "quantum-computing",
    "name": "Quantum Computing",
    "tier": "Prismatic",
    "description": {
      "raw": "{{as|Automatically}} cast an improved version of {{cai|Tactical Sweep|Camille}}, winding over {{fd|0.75}} seconds to slash in a 650 radius around you. The slash deals {{as|physical damage}} to enemies within the area ({{sti|12 seconds cooldown}}). Enemies hit by the outer edge of the circle take {{as|'''bonus''' physical damage}} equal to {{as|10%|hp}} {{as|(+ {{fd|2.5}}% per 100 '''bonus''' AD)}} {{as|(+ {{fd|1.6}}% per 100 AP)}} {{as|(+ {{fd|0.1}}% per 100 '''bonus''' health)}} {{as|of their '''maximum''' health}} and are {{tip|slow|slowed}} decaying over 2 seconds. Additionally, you are {{tip|heal|healed}} for a part of the '''bonus''' {{tt|post-mitigation|Damage calculated after modifiers}} damage against enemy champions hit by the outer edge.",
      "text": "Automatically cast an improved version of Tactical Sweep, winding over 0.75 seconds to slash in a 650 radius around you. The slash deals physical damage to enemies within the area (12 seconds cooldown). Enemies hit by the outer edge of the circle take bonus physical damage equal to 10% (+ 2.5% per 100 bonus AD) (+ 1.6% per 100 AP) (+ 0.1% per 100 bonus health) of their maximum health and are slowed decaying over 2 seconds. Additionally, you are healed for a part of the bonus post-mitigation damage against enemy champions hit by the outer edge."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{as|{{pp|150+9*x}}|physical damage}} {{as|(+ 85% '''bonus''' AD)}} {{as|(+ 50% AP)}} {{as|physical damage}}.</li><li>{{tip|slow|60% slow strength}}.</li></ul>",
        "text": "- 150+9*x physical damage (+ 85% bonus AD) (+ 50% AP) physical damage.\n- 60% slow strength."
      },
      {
        "level": 2,
        "raw": "<ul><li>{{as|{{pp|225+9*x}}|physical damage}} {{as|(+ 85% '''bonus''' AD)}} {{as|(+ 50% AP)}} {{as|physical damage}}.</li><li>{{tip|slow|80% slow strength}}.</li></ul>",
        "text": "- 225+9*x physical damage (+ 85% bonus AD) (+ 50% AP) physical damage.\n- 80% slow strength."
      },
      {
        "level": 3,
        "raw": "<ul><li>{{as|{{pp|300+9*x}}|physical damage}} {{as|(+ 85% '''bonus''' AD)}} {{as|(+ 50% AP)}} {{as|physical damage}}.</li><li>{{tip|slow|80% slow strength}}.</li></ul><br>{{sbc|Max-level effect:}} Your {{as|automatic effects}} have {{pp|type=cast times|label=chance|25%;10%;1%|2 to 4 by 1}} chance to multi-cast.",
        "text": "- 300+9*x physical damage (+ 85% bonus AD) (+ 50% AP) physical damage.\n- 80% slow strength.\n\nMax-level effect: Your automatic effects have 25%;10%;1% chance to multi-cast."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Camille"
      ],
      "items": [],
      "runes": []
    },
    "tags": [
      "healing"
    ]
  },
  {
    "id": "quest-icathias-fall",
    "name": "Quest: Icathia's Fall",
    "tier": "Prismatic",
    "description": {
      "raw": "Gain {{ii|Bami's Cinder}}. You can now purchase {{ii|Hollow Radiance}} and {{ii|Sunfire Aegis}} in spite of the item limit imposed by {{nie|Immolate}}.<br><br>{{sbc|Quest:}} Obtain {{ii|Hollow Radiance}} and {{ii|Sunfire Aegis}}.<br><br>{{sbc|Reward:}} Upon completing your {{sbc|Quest}}, convert the items you obtained for the quest into {{ii|Void Immolation}}.<br><br>''{{ii|Void Immolation}} counts as 2 {{as|Burn}} effect sources.",
      "text": "Gain Bami's Cinder. You can now purchase Hollow Radiance and Sunfire Aegis in spite of the item limit imposed by Immolate.\n\nQuest: Obtain Hollow Radiance and Sunfire Aegis.\n\nReward: Upon completing your Quest, convert the items you obtained for the quest into Void Immolation.\n\nVoid Immolation counts as 2 Burn effect sources."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [
        "Bami's Cinder",
        "Hollow Radiance",
        "Sunfire Aegis",
        "Void Immolation"
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
    "id": "quest-rite-of-the-forge-god",
    "name": "Quest: Rite of the Forge God",
    "tier": "Prismatic",
    "description": {
      "raw": "{{sbc|Quest:}} Purchase 2 Item Anvils ({{ii|Prismatic Item|icononly=true}} / {{ii|Legendary Assassin Item|icononly=true}}{{ii|Legendary Fighter Item|icononly=true}}{{ii|Legendary Mage Item|icononly=true}}{{ii|Legendary Marksman Item|icononly=true}}{{ii|Legendary Support Item|icononly=true}}{{ii|Legendary Tank Item|icononly=true}}).<br><br>{{sbc|Reward:}} All of your items will become {{ai|Living Forge|Ornn|Masterwork}}, increasing their stats by 35%.",
      "text": "Quest: Purchase 2 Item Anvils (Prismatic Item / Legendary Assassin ItemLegendary Fighter ItemLegendary Mage ItemLegendary Marksman ItemLegendary Support ItemLegendary Tank Item).\n\nReward: All of your items will become Masterwork, increasing their stats by 35%."
    },
    "levels": [],
    "notes": {
      "raw": "* Stats from item passives won't be amplified, like {{iis|Demon King's Crown}} ''Supremacy'', {{iis|Dragonheart}} ''Inner Flame'', {{iis|Twin Mask}} ''Unanimity'', etc.\n",
      "text": "* Stats from item passives won't be amplified, like Demon King's Crown Supremacy, Dragonheart Inner Flame, Twin Mask Unanimity, etc."
    },
    "references": {
      "augments": [],
      "champions": [],
      "items": [
        "Demon King's Crown",
        "Dragonheart",
        "Legendary Assassin Item",
        "Legendary Fighter Item",
        "Legendary Mage Item",
        "Legendary Marksman Item",
        "Legendary Support Item",
        "Legendary Tank Item",
        "Prismatic Item",
        "Twin Mask"
      ],
      "runes": []
    },
    "tags": [
      "item",
      "quest"
    ]
  },
  {
    "id": "quest-wooglets-witchcap",
    "name": "Quest: Wooglet's Witchcap",
    "tier": "Prismatic",
    "description": {
      "raw": "Gain a {{ii|Needlessly Large Rod}} that has its {{as|ability power}} stat modified to {{sti|{{as|120 AP}}}}.<br><br>{{sbc|Quest:}} Obtain {{ii|Rabadon's Deathcap}} and {{ii|Zhonya's Hourglass}}.<br><br>{{sbc|Reward:}} Upon completing your {{sbc|Quest}}, convert the items you obtained for the quest into {{ii|Wooglet's Witchcap}}.",
      "text": "Gain a Needlessly Large Rod that has its ability power stat modified to 120 AP.\n\nQuest: Obtain Rabadon's Deathcap and Zhonya's Hourglass.\n\nReward: Upon completing your Quest, convert the items you obtained for the quest into Wooglet's Witchcap."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [
        "Needlessly Large Rod",
        "Rabadon's Deathcap",
        "Wooglet's Witchcap",
        "Zhonya's Hourglass"
      ],
      "runes": []
    },
    "tags": [
      "item",
      "quest"
    ]
  },
  {
    "id": "raid-boss",
    "name": "Raid Boss",
    "tier": "Prismatic",
    "description": {
      "raw": "At the start of the combat phase in each round, you are now imprisoned in the center of the battlefield for 9 seconds, becoming {{tip|suppression|suppressed}} in the duration. While imprisoned, you gain {{pp|key=%|type=current round|40 to 70 for 11|1;2;3;4;5;6;7;8;9;10;11+}} damage reduction (including against {{sti|{{as|true damage}}}}) and {{tip|cc-immune|crowd control immunity}}, and increase your {{sti|{{as|attack damage}}}}, {{sti|{{as|ability power}}}}, {{sti|{{as|'''maximum''' health}}}}, and {{sti|size}} according to the time you're imprisoned.<br><br>At the end of the duration, or upon being damaged to {{as|50% '''maximum''' health}} otherwise, you are set free, {{tip|airborne|knocking back}} all nearby enemies and losing the damage reduction and crowd control immunity but keeping the other bonuses until the end of the round. Additionally, you receive a {{tip|shield}} that absorbs damage equal to {{sti|{{as|a percentage of your '''maximum''' health}}}} and lasts until destroyed.",
      "text": "At the start of the combat phase in each round, you are now imprisoned in the center of the battlefield for 9 seconds, becoming suppressed in the duration. While imprisoned, you gain 40 to 70 for 11 damage reduction (including against true damage) and crowd control immunity, and increase your attack damage, ability power, maximum health, and size according to the time you're imprisoned.\n\nAt the end of the duration, or upon being damaged to 50% maximum health otherwise, you are set free, knocking back all nearby enemies and losing the damage reduction and crowd control immunity but keeping the other bonuses until the end of the round. Additionally, you receive a shield that absorbs damage equal to a percentage of your maximum health and lasts until destroyed."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>Increase stats by {{pp|key=%|type=seconds imprisoned|0 to 35 for 10|0 to 9|formula=3.89% for every second imprisoned, capped at 9 seconds}}.</li><li>{{sti|{{as|25% '''maximum''' health}}}} {{tip|shield}}.</li></ul>",
        "text": "- Increase stats by 0 to 35 for 10.\n- 25% maximum health shield."
      },
      {
        "level": 2,
        "raw": "<ul><li>Increase stats by {{pp|key=%|type=seconds imprisoned|0 to 55 for 10|0 to 9|formula=6.11% for every second imprisoned, capped at 9 seconds}}.</li><li>{{sti|{{as|40% '''maximum''' health}}}} {{tip|shield}}.</li></ul>",
        "text": "- Increase stats by 0 to 55 for 10.\n- 40% maximum health shield."
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
    "id": "righteous-fury",
    "name": "Righteous Fury",
    "tier": "Prismatic",
    "description": {
      "raw": "Self and outgoing {{tip|healing}} or {{tip|shielding}} grants you increased ability damage ({{sti|3 seconds cooldown}}). This effect can only occur once per cast instance, stacks infinitely and lasts until the end of the current round phase.",
      "text": "Self and outgoing healing or shielding grants you increased ability damage (3 seconds cooldown). This effect can only occur once per cast instance, stacks infinitely and lasts until the end of the current round phase."
    },
    "levels": [
      {
        "level": 1,
        "raw": "2% increased ability damage per stack.",
        "text": "2% increased ability damage per stack."
      },
      {
        "level": 2,
        "raw": "3% increased ability damage per stack.",
        "text": "3% increased ability damage per stack."
      },
      {
        "level": 3,
        "raw": "4% increased ability damage per stack.",
        "text": "4% increased ability damage per stack."
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
    "id": "scopiest-weapons",
    "name": "Scopiest Weapons",
    "tier": "Prismatic",
    "description": {
      "raw": "Gain {{sti|attack range|'''bonus''' attack range}}.",
      "text": "Gain bonus attack range."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|attack range|{{rd|150|75}} attack range}}.",
        "text": "150 attack range."
      },
      {
        "level": 2,
        "raw": "{{sti|attack range|{{rd|225|125}} attack range}}.",
        "text": "225 attack range."
      },
      {
        "level": 3,
        "raw": "{{sti|attack range|{{rd|300|175}} attack range}}.",
        "text": "300 attack range."
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
    "id": "slow-cooker",
    "name": "Slow Cooker",
    "tier": "Prismatic",
    "description": {
      "raw": "Surrounds you in flames, causing you to apply a {{as|Burn}} every second to enemies within {{tip|cr|icononly=true}} 500 units for 5 seconds that deals {{as|magic damage}}. This {{as|Burn}} stacks infinitely and refreshes with each application.<br><br>This counts as a {{as|Burn}} source.",
      "text": "Surrounds you in flames, causing you to apply a Burn every second to enemies within 500 units for 5 seconds that deals magic damage. This Burn stacks infinitely and refreshes with each application.\n\nThis counts as a Burn source."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{ft|{{as|{{ap|1.3/5}}% of your '''maximum''' health}} per second.|{{as|{{fd|1.3}}% of your '''maximum''' health}} over the duration.}}",
        "text": "1.3/5% of your maximum health per second."
      },
      {
        "level": 2,
        "raw": "{{ft|{{as|{{ap|1.75/5}}% of your '''maximum''' health}} per second.|{{as|{{fd|1.75}}% of your '''maximum''' health}} over the duration.}}",
        "text": "1.75/5% of your maximum health per second."
      },
      {
        "level": 3,
        "raw": "{{ft|{{as|{{ap|2.25/5}}% of your '''maximum''' health}} per second.|{{as|{{fd|2.25}}% of your '''maximum''' health}} over the duration.}}",
        "text": "2.25/5% of your maximum health per second."
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
    "id": "spellcraft",
    "name": "Spellcraft",
    "tier": "Prismatic",
    "description": {
      "raw": "Replaces {{si|Flee}} with ''{{si|Spellcraft}}''.<br><br>[[File:Spellcraft augment spell.png|20px|link=]] {{sbc|Spellcraft:}} {{#invoke:SpellData|geteffect|Spellcraft}}",
      "text": "Replaces Flee with Spellcraft.\n\nSpellcraft: geteffect"
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
    "id": "spellwake",
    "name": "Spellwake",
    "tier": "Prismatic",
    "description": {
      "raw": "Hitting an enemy champion with an ability sends a trail centered from you to the location they were hit, detonating in a 100 width radius after {{fd|0.75}} seconds to deal {{as|magic damage}} to enemies within. This effect can only trigger once every 6 seconds from the same cast.",
      "text": "Hitting an enemy champion with an ability sends a trail centered from you to the location they were hit, detonating in a 100 width radius after 0.75 seconds to deal magic damage to enemies within. This effect can only trigger once every 6 seconds from the same cast."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{as|{{pp|100 to 325}}|magic damage}} {{as|(+ 145% '''bonus''' AD)}} {{as|(+ 20% AP)}} {{as|magic damage}}.",
        "text": "100 to 325 magic damage (+ 145% bonus AD) (+ 20% AP) magic damage."
      },
      {
        "level": 2,
        "raw": "{{as|{{pp|100 to 325}}|magic damage}} {{as|(+ 165% '''bonus''' AD)}} {{as|(+ 30% AP)}} {{as|magic damage}}.<br><br>{{sbc|Max-level effect:}} Fire an additional wave {{fd|0.5}} second after this effect is triggered.",
        "text": "100 to 325 magic damage (+ 165% bonus AD) (+ 30% AP) magic damage.\n\nMax-level effect: Fire an additional wave 0.5 second after this effect is triggered."
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
    "id": "spirit-link",
    "name": "Spirit Link",
    "tier": "Prismatic",
    "description": {
      "raw": "Redirect a part of the damage dealt to your ally to you, and {{tip|heal}} yourself equal to a part of the healing they receive.",
      "text": "Redirect a part of the damage dealt to your ally to you, and heal yourself equal to a part of the healing they receive."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{ft|{{fd|12.5}}% damage redirection (in teams of 2)|10% damage redirection (in teams of 3)}}.</li><li>{{ft|25% healing redirection (in teams of 2)|20% healing redirection (in teams of 3)}}.</li></ul>",
        "text": "- 12.5% damage redirection (in teams of 2).\n- 25% healing redirection (in teams of 2)."
      },
      {
        "level": 2,
        "raw": "<ul><li>{{ft|15% damage redirection (in teams of 2)|{{fd|12.5}}% damage redirection (in teams of 3)}}.</li><li>{{ft|35% healing redirection (in teams of 2)|25% healing redirection (in teams of 3)}}.</li></ul>",
        "text": "- 15% damage redirection (in teams of 2).\n- 35% healing redirection (in teams of 2)."
      },
      {
        "level": 3,
        "raw": "<ul><li>{{ft|20% damage redirection (in teams of 2)|15% damage redirection (in teams of 3)}}.</li><li>{{ft|65% healing redirection (in teams of 2)|30% healing redirection (in teams of 3)}}.</li></ul>",
        "text": "- 20% damage redirection (in teams of 2).\n- 65% healing redirection (in teams of 2)."
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
    "id": "stats-on-stats-on-stats",
    "name": "Stats on Stats on Stats!",
    "tier": "Prismatic",
    "description": {
      "raw": "Upon selecting this augment, gain {{ii|Stat Bonus|Stat Bonus Anvils}} for free.",
      "text": "Upon selecting this augment, gain Stat Bonus Anvils for free."
    },
    "levels": [
      {
        "level": 1,
        "raw": "4 {{ii|Stat Bonus|Stat Bonus Anvils}}.",
        "text": "4 Stat Bonus Anvils."
      },
      {
        "level": 2,
        "raw": "Gain another {{ii|Stat Bonus|Stat Bonus Anvils}}, for a total of 5.",
        "text": "Gain another Stat Bonus Anvils, for a total of 5."
      },
      {
        "level": 3,
        "raw": "Gain another {{ii|Stat Bonus|Stat Bonus Anvils}}, for a total of 6.<br><br>{{sbc|Max-level effect:}} Gain a {{ii|Stat Bonus|Prismatic Stat Anvil}}. Increase stats from {{ii|Stat Bonus|Stat Bonus Anvils}} by 20%.",
        "text": "Gain another Stat Bonus Anvils, for a total of 6.\n\nMax-level effect: Gain a Prismatic Stat Anvil. Increase stats from Stat Bonus Anvils by 20%."
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
    "id": "stuck-in-here-with-me",
    "name": "Stuck In Here With Me",
    "tier": "Prismatic",
    "description": {
      "raw": "Casting your ultimate ability grants you an aura for 2 seconds, growing in size over the duration to up to {{sti|size|500 units}}. After the duration, you {{tip|taunt}} all enemies within the aura and gain 50% damage reduction for the same duration ({{sti|30 seconds cooldown}}). Additionally, gain {{sti|ability haste|{{as|30 ultimate haste|ability haste}}}}.<br><br>''Aura is activated once the ultimate's effect {{tt|starts|For instant-cast spells}} or has {{tt|elapsed|For duration-based spells}}.''",
      "text": "Casting your ultimate ability grants you an aura for 2 seconds, growing in size over the duration to up to 500 units. After the duration, you taunt all enemies within the aura and gain 50% damage reduction for the same duration (30 seconds cooldown). Additionally, gain 30 ultimate haste ability haste.\n\nAura is activated once the ultimate's effect starts or has elapsed."
    },
    "levels": [],
    "notes": {
      "raw": "* On {{ci|Katarina}}, this augment will activate at the start of {{ais|R|Katarina}} channel.\n",
      "text": "* On Katarina, this augment will activate at the start of R channel."
    },
    "references": {
      "augments": [],
      "champions": [
        "Katarina"
      ],
      "items": [],
      "runes": []
    },
    "tags": [
      "ability-haste"
    ]
  },
  {
    "id": "summoners-roulette",
    "name": "Summoner's Roulette",
    "tier": "Prismatic",
    "description": {
      "raw": "Replace both of your summoner spells with random ones available in a pool. After using a summoner spell during the combat phase, replace the spell in the respective slot with another random one.<br><br>{{sbc|Summoner Spell Pool:}} {{si|Banner of Command}}, {{si|Barrier}}, {{si|Blade Waltz}}, {{si|Castle}}, {{si|Cleanse}}, {{si|Mark}} / {{si|Dash}}, {{si|Defensive Maneuvers}}, {{si|Die Another Day}}, {{si|Exhaust}}, {{si|Feel the Burn}}, {{si|Flash}}, {{si|Flee}}, {{si|Ghost}}, {{si|Heal}}, {{si|Ignite}}, {{si|Vanish}}",
      "text": "Replace both of your summoner spells with random ones available in a pool. After using a summoner spell during the combat phase, replace the spell in the respective slot with another random one.\n\nSummoner Spell Pool: Banner of Command, Barrier, Blade Waltz, Castle, Cleanse, Mark / Dash, Defensive Maneuvers, Die Another Day, Exhaust, Feel the Burn, Flash, Flee, Ghost, Heal, Ignite, Vanish"
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|6 seconds cooldown}} per slot.",
        "text": "6 seconds cooldown per slot."
      },
      {
        "level": 2,
        "raw": "{{sti|4 seconds cooldown}} per slot.<br><br>{{sbc|Max-level effect:}} Increase chance of rolling special summoner spells.",
        "text": "4 seconds cooldown per slot.\n\nMax-level effect: Increase chance of rolling special summoner spells."
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
    "id": "symphony-of-war",
    "name": "Symphony of War",
    "tier": "Prismatic",
    "description": {
      "raw": "Gain the {{ri|Conqueror}} and {{ri|Lethal Tempo}} keystone runes.<br><br>''See [[Arena#Runes]] for Arena-specific overrides on these keystones.''",
      "text": "Gain the Conqueror and Lethal Tempo keystone runes.\n\nSee Arena#Runes for Arena-specific overrides on these keystones."
    },
    "levels": [],
    "notes": {
      "raw": "* {{ri|Lethal Tempo}} at max stack sets {{sti|attack speed|{{as|attack speed cap}}}} to {{as|10|as}}.\n",
      "text": "* Lethal Tempo at max stack sets attack speed cap to 10."
    },
    "references": {
      "augments": [],
      "champions": [],
      "items": [],
      "runes": [
        "Conqueror",
        "Lethal Tempo"
      ]
    },
    "tags": [
      "attack-speed"
    ]
  },
  {
    "id": "tap-dancer",
    "name": "Tap Dancer",
    "tier": "Prismatic",
    "description": {
      "raw": "Basic attacks {{tip|on-hit}} grant {{sti|{{as|'''bonus''' movement speed}}}}, stacking infinitely and lasting until the end of the current round phase. Additionally, gain {{sti|{{as|'''bonus''' attack speed}}}} equal to {{sti|{{as|10% of your '''total''' movement speed}}}}.",
      "text": "Basic attacks on-hit grant bonus movement speed, stacking infinitely and lasting until the end of the current round phase. Additionally, gain bonus attack speed equal to 10% of your total movement speed."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|{{as|8 '''bonus''' movement speed}}}}.",
        "text": "8 bonus movement speed."
      },
      {
        "level": 2,
        "raw": "{{sti|{{as|10 '''bonus''' movement speed}}}}.",
        "text": "10 bonus movement speed."
      },
      {
        "level": 3,
        "raw": "{{sti|{{as|12 '''bonus''' movement speed}}}}.<br><br>{{sbc|Max-level effect:}} {{as|Attack speed cap|as}} increases to {{as|10|as}}.",
        "text": "12 bonus movement speed.\n\nMax-level effect: Attack speed cap increases to 10."
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
    "id": "transmute-chaos",
    "name": "Transmute: Chaos",
    "tier": "Prismatic",
    "description": {
      "raw": "Gain two completely random [[File:Augment.png|20px|icononly=true]] augments, excluding the other two offerings in your current assortment.",
      "text": "Gain two completely random augments, excluding the other two offerings in your current assortment."
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
    "id": "transmute-silver",
    "name": "Transmute: Silver",
    "tier": "Prismatic",
    "description": {
      "raw": "Gain completely random [[File:Augment.png|20px|icononly=true]] silver augments to fill all available slots.<br><br>You can no longer receive new augments, but replace or upgrade existing ones.",
      "text": "Gain completely random silver augments to fill all available slots.\n\nYou can no longer receive new augments, but replace or upgrade existing ones."
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
    "id": "trueshot-prodigy",
    "name": "Trueshot Prodigy",
    "tier": "Prismatic",
    "description": {
      "raw": "Upon damaging an enemy while located at over {{tip|cr|icononly=true}} {{tt|700 units away|center-to-edge}} at the time of the hit, cast {{cai|Trueshot Barrage|Ezreal}} in their direction. The barrage deals {{as|{{pp|175 to 525}}|magic damage}} {{as|(+ 100% '''bonus''' AD)}} {{as|(+ 70% AP)}} {{as|magic damage}} to enemies it passes through. This augment has {{sti|cooldown}} on each target.",
      "text": "Upon damaging an enemy while located at over 700 units away at the time of the hit, cast Trueshot Barrage in their direction. The barrage deals 175 to 525 magic damage (+ 100% bonus AD) (+ 70% AP) magic damage to enemies it passes through. This augment has cooldown on each target."
    },
    "levels": [
      {
        "level": 1,
        "raw": "{{sti|10 seconds cooldown}} per target.",
        "text": "10 seconds cooldown per target."
      },
      {
        "level": 2,
        "raw": "{{sti|8 seconds cooldown}} per target.",
        "text": "8 seconds cooldown per target."
      },
      {
        "level": 3,
        "raw": "{{sti|6 seconds cooldown}} per target.<br><br>{{sbc|Max-level effect:}} Fires an additional missile upon hit.",
        "text": "6 seconds cooldown per target.\n\nMax-level effect: Fires an additional missile upon hit."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Ezreal"
      ],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "ultimate-revolution",
    "name": "Ultimate Revolution",
    "tier": "Prismatic",
    "description": {
      "raw": "Casting your ultimate ability resets its {{sti|cooldown}} immediately after its effect {{tt|starts|For instant-cast spells}} or has {{tt|elapsed|For duration-based spells}}. This may occur only once per phase in a round.",
      "text": "Casting your ultimate ability resets its cooldown immediately after its effect starts or has elapsed. This may occur only once per phase in a round."
    },
    "levels": [
      {
        "level": 2,
        "raw": "{{sbc|Max-level effect:}} Your ultimate can refresh for a second time.",
        "text": "Max-level effect: Your ultimate can refresh for a second time."
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
    "id": "ultimate-roulette",
    "name": "Ultimate Roulette",
    "tier": "Prismatic",
    "description": {
      "raw": "Replaces {{si|Flee}} with a random champion's ultimate ability, available from a pool. After using the granted ultimate ability during the combat phase, replace the ultimate in the respective slot with another random one after the cooldown for this effect elapses ({{pp|20 to 15 for 3|1;6;16}} seconds {{tt|cooldown|Affected by ultimate haste}}, increased to {{pp|25 to 20 for 3|1;6;16}} for {{cai|Maximum Dosage|Dr. Mundo}}).<br><br>{{sbc|Ultimate Ability Pool:}} {{cai|Feast|Cho'Gath}}, {{cai|Maximum Dosage|Dr. Mundo}}, {{cai|Cannon Barrage|Gangplank}}, {{cai|Explosive Cask|Gragas}}, {{cai|The Culling|Lucian}}, {{cai|Final Spark|Lux}}, {{cai|Soul Shackles|Morgana}}.<br><br>''You can receive your own champion's ultimate ability from this augment. Ultimate abilities granted by this effect count as an ultimate for all purposes.''",
      "text": "Replaces Flee with a random champion's ultimate ability, available from a pool. After using the granted ultimate ability during the combat phase, replace the ultimate in the respective slot with another random one after the cooldown for this effect elapses (20 to 15 for 3 seconds cooldown, increased to 25 to 20 for 3 for Maximum Dosage).\n\nUltimate Ability Pool: Feast, Maximum Dosage, Cannon Barrage, Explosive Cask, The Culling, Final Spark, Soul Shackles.\n\nYou can receive your own champion's ultimate ability from this augment. Ultimate abilities granted by this effect count as an ultimate for all purposes."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Cho'Gath",
        "Dr. Mundo",
        "Gangplank",
        "Gragas",
        "Lucian",
        "Lux",
        "Morgana"
      ],
      "items": [],
      "runes": []
    },
    "tags": [
      "flee-replacement"
    ]
  },
  {
    "id": "upgrade-sword-of-blossoming-dawn",
    "name": "Upgrade Sword of Blossoming Dawn",
    "tier": "Prismatic",
    "description": {
      "raw": "Upgrades {{ii|Sword of Blossoming Dawn}}, empowering {{nie|Peppermint}} to have its {{sti|heal|healing}} increased by 250%. Additionally, you gain {{sti|{{as|100% '''bonus''' attack speed}}}}.",
      "text": "Upgrades Sword of Blossoming Dawn, empowering Peppermint to have its healing increased by 250%. Additionally, you gain 100% bonus attack speed."
    },
    "levels": [],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [],
      "items": [
        "Sword of Blossoming Dawn"
      ],
      "runes": []
    },
    "tags": [
      "attack-speed",
      "healing"
    ]
  },
  {
    "id": "wild-fire",
    "name": "Wild Fire",
    "tier": "Prismatic",
    "description": {
      "raw": "{{as|Automatically}} cast {{cai|Pyroclasm|Brand}} to an enemy champion within {{tip|cr|750}} units. The bouncing fireball deals {{as|magic damage}} to the target ({{sti|12 seconds cooldown}}). The fireball can bounce between you and enemy champions, up to several times.",
      "text": "Automatically cast Pyroclasm to an enemy champion within 750 units. The bouncing fireball deals magic damage to the target (12 seconds cooldown). The fireball can bounce between you and enemy champions, up to several times."
    },
    "levels": [
      {
        "level": 1,
        "raw": "<ul><li>{{as|350|magic damage}} {{as|(+ 30% '''bonus''' AD)}} {{as|(+ 40% AP)}} {{as|magic damage}}.</li><li>3 maximum bounces.</li></ul>",
        "text": "- 350 magic damage (+ 30% bonus AD) (+ 40% AP) magic damage.\n- 3 maximum bounces."
      },
      {
        "level": 2,
        "raw": "<ul><li>{{as|450|magic damage}} {{as|(+ 30% '''bonus''' AD)}} {{as|(+ 40% AP)}} {{as|magic damage}}.</li><li>4 maximum bounces.</li></ul>",
        "text": "- 450 magic damage (+ 30% bonus AD) (+ 40% AP) magic damage.\n- 4 maximum bounces."
      },
      {
        "level": 3,
        "raw": "<ul><li>{{as|550|magic damage}} {{as|(+ 30% '''bonus''' AD)}} {{as|(+ 40% AP)}} {{as|magic damage}}.</li><li>6 maximum bounces.</li></ul><br>{{sbc|Max-level effect:}} Max bounce count increases by 1.",
        "text": "- 550 magic damage (+ 30% bonus AD) (+ 40% AP) magic damage.\n- 6 maximum bounces.\n\nMax-level effect: Max bounce count increases by 1."
      }
    ],
    "notes": null,
    "references": {
      "augments": [],
      "champions": [
        "Brand"
      ],
      "items": [],
      "runes": []
    },
    "tags": []
  },
  {
    "id": "wisdom-of-ages",
    "name": "Wisdom of Ages",
    "tier": "Prismatic",
    "description": {
      "raw": "Grants 1 level upon selecting this augment and 1 additional level at the start of every other round. Additionally, the level cap for your champion is removed, allowing them to benefit from effects that scale past level 18, including stat growth.<br><br>If this augment is picked after Round 4, gain 3 levels upon selecting the augment instead of 1.",
      "text": "Grants 1 level upon selecting this augment and 1 additional level at the start of every other round. Additionally, the level cap for your champion is removed, allowing them to benefit from effects that scale past level 18, including stat growth.\n\nIf this augment is picked after Round 4, gain 3 levels upon selecting the augment instead of 1."
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
  }
] satisfies Augment[]
