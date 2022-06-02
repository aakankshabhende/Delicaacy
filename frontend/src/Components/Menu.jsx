import React from 'react'

const Menu = (props) => {
    const {pic, spc, price, name} = props;
    return (
        <>    
        <div class="menus d-flex align-items-center">
                  <div class="menu-img rounded-circle">
                    <img class="img-fluid" src={pic} alt="" />
                  </div>
                  <div class="text-wrap">
                    <div class="row align-items-start">
                      <div class="col-8">
                        <h4>{name}</h4>
                      </div>
                      <div class="col-4">
                        <h4 class="text-muted menu-price">{price}</h4>
                      </div>
                    </div>
                    <p>{spc}</p>
                  </div>
                </div>
            
        </>
    )
}

export default Menu
