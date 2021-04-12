const ProfileWishlist = () => {
  return ( 
    <article className="card">
			<div className="card-body">

        <div className="row">
            <div className="col-md-6">
              <figure className="itemside mb-4">
                <div className="aside"><img src="images/items/1.jpg" className="border img-md" alt="" /></div>
                <figcaption className="info">
                  <a href="/" className="title">Great product name goes here</a>
                  <p className="price mb-2">$80</p>
                  <a href="/" className="btn btn-secondary btn-sm mr-2"> Add to cart </a>
                  <a href="/" className="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i className="fa fa-times"></i> </a>
                </figcaption>
              </figure>
            </div>
          </div>

			</div>
		</article>
   );
}
 
export default ProfileWishlist;
