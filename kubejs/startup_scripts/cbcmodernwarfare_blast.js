BlockEvents.modification(event => {
  event.modify('cbcmodernwarfare:era_block', block => {
    block.explosionResistance = 1200
    block.destroySpeed = 220;
  })
})

