const Good = ({good}) => {

  console.log(good, "GOOd")

  return (
    <div class="col-md-3 mx-4">
            <figure class="card card-product-grid">
              <div class="img-wrap"> 
                <span class="badge badge-danger"> NEW </span>
                <img src={good.photo} alt=""/>
              </div>
              <figcaption class="info-wrap">
                  <a href="/" class="title mb-2">{good.name}</a>
                  <div class="price-wrap">
                    <span class="price">{good.price}$</span> 
                    <small class="text-muted">/per item</small>
                  </div>
                  
                  <p class="mb-2"> 2 Pieces  <small class="text-muted">(Min Order)</small></p>
                  
                  <p class="text-muted ">Guangzhou Yichuang Electronic Co</p>
                
                  
                  <p class="mb-3">
                    <span class="tag"> <i class="fa fa-check"></i> Verified</span> 
                    <span class="tag"> 2 Years </span> 
                    <span class="tag"> 23 reviews </span>
                    <span class="tag"> Japan </span>
                  </p>
                
                  <label class="custom-control mb-3 custom-checkbox">
                    <input type="checkbox" class="custom-control-input" />
                    <div class="custom-control-label">Add to compare
                    </div>
                  </label>

                  <a href="/" class="btn btn-outline-primary"> <i class="fa fa-envelope"></i> Contact supplier </a>	
              </figcaption>
            </figure>
          </div>
    
  )
}

export default Good
