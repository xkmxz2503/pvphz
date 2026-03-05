BlockEvents.modification(event => {
  event.modify('vs_clockwork:gyro', block => {
    block.explosionResistance = 6
  })
  
  event.modify('vs_clockwork:redstone_resistor', block => {
    block.explosionResistance = 10
  })
  
  event.modify('vs_clockwork:flap_bearing', block => {
    block.explosionResistance = 1.5
  })
  
  event.modify('vs_clockwork:flap', block => {
    block.explosionResistance = 2
  })
  
  event.modify('vs_clockwork:wing', block => {
    block.explosionResistance = 2
  })
  
  event.modify('vs_clockwork:propeller_bearing', block => {
    block.explosionResistance = 12
  })
  
  event.modify('vs_clockwork:phys_bearing', block => {
    block.explosionResistance = 32
  })
  
  })