BlockEvents.modification(event => {
  event.modify('taov_core:schematic_anchor', block => {
    block.explosionResistance = 40
  })
})