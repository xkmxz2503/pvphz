BlockEvents.modification(event => {
    event.modify('engineersdecor:panzerglass_block', block => {
      block.explosionResistance = 32
    })
    
    event.modify('engineersdecor:rebar_concrete', block => {
      block.explosionResistance = 24
    })
    
    event.modify('engineersdecor:rebar_concrete_tile', block => {
      block.explosionResistance = 24
    })
    
    event.modify('engineersdecor:rebar_concrete_stairs', block => {
      block.explosionResistance = 24
    })
    
    event.modify('engineersdecor:rebar_concrete_tile_slab', block => {
      block.explosionResistance = 24
    })
    
    event.modify('engineersdecor:rebar_concrete_tile_stairs', block => {
      block.explosionResistance = 24
    })
    
    event.modify('engineersdecor:halfslab_rebar_concrete', block => {
      block.explosionResistance = 24
    })
    
    event.modify('engineersdecor:rebar_concrete_wall', block => {
      block.explosionResistance = 24
    })

    event.modify('engineersdecor:panzerglass_slab', block => {
      block.explosionResistance = 12
    })

    event.modify('engineersdecor:iron_hatch', block => {
      block.explosionResistance = 12
    })
  })