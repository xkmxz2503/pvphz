BlockEvents.modification(event => {
  event.modify('minecraft:ladder', block => {
    block.explosionResistance = 20
  })
  
  event.modify('create:andesite_ladder', block => {
    block.explosionResistance = 20
  })
  
  event.modify('create:brass_ladder', block => {
    block.explosionResistance = 20
  })
  
  event.modify('create:copper_ladder', block => {
    block.explosionResistance = 20
  })
  })