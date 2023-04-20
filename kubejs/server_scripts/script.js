//Give Akashic Tome on Join

PlayerEvents.loggedIn(event => {
    if (!event.player.persistentData.contains('firstjoin')) {
        event.player.persistentData.putBoolean('firstjoin', true)
        event.player.give(Item.of('akashictome:tome', '{"akashictome:data":{alexsmobs:{Count:1b,id:"alexsmobs:animal_dictionary"},apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}},ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook"},botania:{Count:1b,id:"botania:lexicon"},enigmaticlegacy:{Count:1b,id:"enigmaticlegacy:the_acknowledgment",tag:{"akashictome:displayName":{text:\'{"translate":"item.enigmaticlegacy.the_acknowledgment"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.enigmaticlegacy.the_acknowledgment"}]}\'}}},feywild:{Count:1b,id:"feywild:feywild_lexicon"},forcecraft:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"forcecraft:force_and_you"}},hexcasting:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"hexcasting:thehexbook"}},mahoutsukai:{Count:1b,id:"mahoutsukai:guidebook"},modonomicon:{Count:1b,id:"modonomicon:modonomicon",tag:{"modonomicon:book_id":"theurgy:the_hermetica"}},mysticalagriculture:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"mysticalagriculture:guide"}},occultism:{Count:1b,id:"occultism:dictionary_of_spirits",tag:{"modonomicon:book_id":"occultism:dictionary_of_spirits"}},primalmagick:{Count:1b,id:"primalmagick:grimoire",tag:{"akashictome:displayName":{text:\'{"translate":"item.primalmagick.grimoire"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.primalmagick.grimoire"}]}\'}}},simplyswords:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"simplyswords:runic_grimoire"}},solarcraft:{Count:1b,ForgeCaps:{"solarcraft:lexicon_inventory":{Items:[],Size:94}},id:"solarcraft:solar_lexicon"},totemic:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"totemic:totempedia"}}},"akashictome:is_morphing":1b}'))
    }
})