const ProfileWishlist = () => {
  return ( 
    <article class="card">
			<div class="card-body">

        <div class="row">
            <div class="col-md-6">
              <figure class="itemside mb-4">
                <div class="aside"><img src="images/items/1.jpg" class="border img-md" alt="" /></div>
                <figcaption class="info">
                  <a href="/" class="title">Great product name goes here</a>
                  <p class="price mb-2">$80</p>
                  <a href="/" class="btn btn-secondary btn-sm"> Add to cart </a>
                  <a href="/" class="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i class="fa fa-times"></i> </a>
                </figcaption>
              </figure>
            </div>

            <div class="col-md-6">
              <figure class="itemside mb-4">
                <div class="aside"><img src="images/items/2.jpg" class="border img-md" alt="" /></div>
                <figcaption class="info">
                  <a href="/" class="title">Men's Jackeet for Winter </a>
                  <p class="price mb-2">$1280</p>
                  <a href="/" class="btn btn-secondary btn-sm"> Add to cart </a>
                  <a href="/" class="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i class="fa fa-times"></i> </a>
                </figcaption>
              </figure>
            </div>

            <div class="col-md-6">
              <figure class="itemside mb-4">
                <div class="aside"><img src="images/items/3.jpg" class="border img-md" alt="" /></div>
                <figcaption class="info">
                  <a href="/" class="title">Another book of item goes here </a>
                  <p class="price mb-2">$280</p>
                  <a href="/" class="btn btn-secondary btn-sm"> Add to cart </a>
                  <a href="/" class="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i class="fa fa-times"></i> </a>
                </figcaption>
              </figure>
            </div>
          </div>

			</div>
		</article>
   );
}
 
export default ProfileWishlist;
