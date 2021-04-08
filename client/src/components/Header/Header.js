import '../../html/css/ui.css'
import '../../html/css/responsive.css'
import '../../html/css/bootstrap.css'

import { 
  Link
} from 'react-router-dom';


const Header = () => {
  return ( 
    <header className="section-header">
<section className="header-main border-bottom">
	<div className="container">
		<div className="row align-items-center">
			<div className="col-xl-2 col-lg-3 col-md-12">
				<Link to="/" className="brand-wrap">
					<img className="logo" src="images/logo.png" alt=""/>
				</Link>
			</div>
			<div className="col-xl-6 col-lg-5 col-md-6">
				<form action="#" className="search-header">
					<div className="input-group w-100">
						<select className="custom-select border-right"  name="category_name">
								<option value="">All type</option><option value="codex">Special</option>
								<option value="comments">Only best</option>
								<option value="content">Latest</option>
						</select>
					    <input type="text" className="form-control" placeholder="Search" />
					    
					    <div className="input-group-append">
					      <button className="btn btn-primary" type="submit">
					        <i className="fa fa-search"></i> Search
					      </button>
					    </div>
				    </div>
				</form>
			</div>
			<div className="col-xl-4 col-lg-4 col-md-6">
				<div className="widgets-wrap float-md-right">
					<div className="widget-header mr-3">
						<a href="/" className="widget-view">
							<div className="icon-area">
								<i className="fa fa-user"></i>
								<span className="notify">3</span>
							</div>
							<small className="text"> My profile </small>
						</a>
					</div>
					<div className="widget-header mr-3">
						<a href="/" className="widget-view">
							<div className="icon-area">
								<i className="fa fa-comment-dots"></i>
								<span className="notify">1</span>
							</div>
							<small className="text"> Message </small>
						</a>
					</div>
					<div className="widget-header mr-3">
						<a href="/" className="widget-view">
							<div className="icon-area">
								<i className="fa fa-store"></i>
							</div>
							<small className="text"> Orders </small>
						</a>
					</div>
					<div className="widget-header">
						<Link to="/cart" className="widget-view">
							<div className="icon-area">
								<i className="fa fa-shopping-cart"></i>
							</div>
							<small className="text"> Cart </small>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>



<nav className="navbar navbar-main navbar-expand-lg border-bottom">
<div className="container">
	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
	<span className="navbar-toggler-icon"></span>
	</button>

	<div className="collapse navbar-collapse" id="main_nav">
	<ul className="navbar-nav">
		<li className="nav-item dropdown">
			<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/"> <i className="fa fa-bars text-muted mr-2"></i> Demo pages </a>
			<div className="dropdown-menu dropdown-large">
				<nav className="row">
					<div className="col-12 ml-3">
						<a href="page-index-1.html">Home page 1</a>
						<a href="page-index-2.html">Home page 2</a>
						<a href="page-category.html">All category</a>
						<a href="page-listing-large.html">Listing list</a>
						<a href="page-listing-grid.html">Listing grid</a>
						<a href="page-shopping-cart.html">Shopping cart</a>
						<a href="page-detail-product.html">Product detail</a>
						<a href="page-content.html">Page content</a>
						<a href="page-user-login.html">Page login</a>
						<a href="page-user-register.html">Page register</a>
					</div>
				</nav>
			</div> 
		</li>
		<li className="nav-item">
			<a className="nav-link" href="/">Ready to ship</a>
		</li>
		<li className="nav-item">
		<a className="nav-link" href="/">Trade shows</a>
		</li>
		<li className="nav-item">
		<a className="nav-link" href="/">Services</a>
		</li>
		<li className="nav-item">
		<a className="nav-link" href="/">Sell with us</a>
		</li>
	</ul>
	<ul className="navbar-nav ml-md-auto">
			<li className="nav-item">
			<a className="nav-link" href="/">Get the app</a>
		</li>
		<li className="nav-item dropdown">
			<a className="nav-link dropdown-toggle" href="http://example.com" data-toggle="dropdown">English</a>
			<div className="dropdown-menu dropdown-menu-right">
			<a className="dropdown-item" href="/">Russian</a>
			<a className="dropdown-item" href="/">French</a>
			<a className="dropdown-item" href="/">Spanish</a>
			<a className="dropdown-item" href="/">Chinese</a>
			</div>
		</li>
		</ul>
	</div>
</div>
</nav>

</header>
   );
}
 
export default Header;
