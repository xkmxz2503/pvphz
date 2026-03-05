BlockEvents.modification(event => {
  event.modify('minecraft:iron_trapdoor', block => {
    block.explosionResistance = 30
  })
  })