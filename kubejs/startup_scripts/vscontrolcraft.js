BlockEvents.modification(event => {
  event.modify('vscontrolcraft:servo', block => {
    block.explosionResistance = 20
  })
  event.modify('vscontrolcraft:kinetic_resistor', block => {
    block.explosionResistance = 21
  })
})