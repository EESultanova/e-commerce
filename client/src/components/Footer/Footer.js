import { SITE_URL } from "../../config";

const Footer = () => {
  return ( 
    <footer className="section-footer border-top">
	<div className="container">
		<section className="footer-top padding-y">
			<div className="row">
				<aside className="col-md-4">
					<article className="mr-3">
						<img src={`${SITE_URL}images/logocommerce3.png`} className="logo-footer" alt=''/>
						<p className="mt-3">Some short text about company like You might remember the Dell computer commercials in which a youth reports this exciting news to his friends.</p>
						<div>
						    <a className="btn btn-icon btn-light" title="Facebook" target="_blank" href="/"><i className="fab fa-facebook-f"></i></a>
						    <a className="btn btn-icon btn-light" title="Instagram" target="_blank" href="/"><i className="fab fa-instagram"></i></a>
						    <a className="btn btn-icon btn-light" title="Youtube" target="_blank" href="/"><i className="fab fa-youtube"></i></a>
						    <a className="btn btn-icon btn-light" title="Twitter" target="_blank" href="/"><i className="fab fa-twitter"></i></a>
						</div>
					</article>
				</aside>
				<aside className="col-sm-3 col-md-2">
					<h6 className="title">About</h6>
					<ul className="list-unstyled">
						<li> <a href="/">About us</a></li>
						<li> <a href="/">Services</a></li>
						<li> <a href="/">Rules and terms</a></li>
						<li> <a href="/">Blogs</a></li>
					</ul>
				</aside>
				<aside className="col-sm-3 col-md-2">
					<h6 className="title">Services</h6>
					<ul className="list-unstyled">
						<li> <a href="/">Help center</a></li>
						<li> <a href="/">Money refund</a></li>
						<li> <a href="/">Terms and Policy</a></li>
						<li> <a href="/">Open dispute</a></li>
					</ul>
				</aside>
				<aside className="col-sm-3  col-md-2">
					<h6 className="title">For users</h6>
					<ul className="list-unstyled">
						<li> <a href="/"> User Login </a></li>
						<li> <a href="/"> User register </a></li>
						<li> <a href="/"> Account Setting </a></li>
						<li> <a href="/"> My Orders </a></li>
						<li> <a href="/"> My Wishlist </a></li>
					</ul>
				</aside>
				<aside className="col-sm-2  col-md-2">
					<h6 className="title">Our app</h6>
					<a href="/" className="d-block mb-2"><img src="../images/misc/appstore.png" height="40" alt=''/></a>
					<a href="/"  className="d-block mb-2"><img src="../images/misc/playmarket.png" height="40" alt=''/></a>
				</aside>
			</div>
		</section>

		<section className="footer-copyright border-top">
				<p className="float-left text-muted"> &copy 2019 Company  All rights resetved </p>
				<p target="_blank" className="float-right text-muted">
					<a href="/">Privacy & Cookies</a> 
          &nbsp;&nbsp;
					<a href="/">Accessibility</a>
				</p>
		</section>
	</div>
</footer>
   );
}
 
export default Footer;
