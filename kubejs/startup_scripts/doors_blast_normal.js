BlockEvents.modification(event => {
  event.modify('create:brass_door', block => {
    block.explosionResistance = 20
  })
  
  event.modify('create:copper_door', block => {
    block.explosionResistance = 20
  })
  
  event.modify('create:train_door', block => {
    block.explosionResistance = 20
  })
  
  event.modify('create:train_trapdoor', block => {
    block.explosionResistance = 20
  })
  
  event.modify('create:andesite_door', block => {
    block.explosionResistance = 20
  })
  
  event.modify('copycats:copycat_trapdoor', block => {
    block.explosionResistance = 20
  })
  
  event.modify('copycats:copycat_door', block => {
    block.explosionResistance = 20
  })
  })