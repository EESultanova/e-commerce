import { Link } from "react-router-dom";
import { SITE_URL } from "../../config";
import { useProfileContext } from "../../contexts/ProfileContext";

const Footer = () => {

  const { language } = useProfileContext()

  return ( 
    <footer className="section-footer border-top">
	<div className="container">
		<section className="footer-top padding-y">
			<div className="row">
				<aside className="col-md-4">
					<article className="mr-3">
						<img src="/images/logocommerce3.png" className="logo-footer mb-3 mt-2" alt=''/>
						<div>
						    <Link className="btn btn-icon btn-light" title="Facebook" target="_blank" to="/"><i className="fab fa-facebook-f"></i></Link>
						    <Link className="btn btn-icon btn-light" title="Instagram" target="_blank" to="/"><i className="fab fa-instagram"></i></Link>
						    <Link className="btn btn-icon btn-light" title="Youtube" target="_blank" to="/"><i className="fab fa-youtube"></i></Link>
						    <Link className="btn btn-icon btn-light" title="Twitter" target="_blank" to="/"><i className="fab fa-twitter"></i></Link>
						</div>
					</article>
				</aside>
				<aside className="col-sm-3 col-md-2">
					<h6 className="title">{language === 'English' ? 'About' : 'О компании'}</h6>
					<ul className="list-unstyled">
						<li> <Link to="/">{language === 'English' ? 'About us' : 'Команда'}</Link></li>
						<li> <Link to="/">{language === 'English' ? 'Services' : 'Сервисы'}</Link></li>
						<li> <Link to="/">{language === 'English' ? 'Rules and terms' : 'Правила и условия'}</Link></li>
						<li> <Link to="/">{language === 'English' ? 'Blogs' : 'Блоги'}</Link></li>
					</ul>
				</aside>
				<aside className="col-sm-3 col-md-2">
					<h6 className="title">{language === 'English' ? 'Services' : 'Сервисы'}</h6>
					<ul className="list-unstyled">
						<li> <Link to="/">{language === 'English' ? 'Help center' : 'Контактный центр'}</Link></li>
						<li> <Link to="/">{language === 'English' ? 'Money refund' : 'Возврат денег'}</Link></li>
						<li> <Link to="/">{language === 'English' ? 'Terms and policy' : 'Условия и политика'}</Link></li>
						<li> <Link to="/">{language === 'English' ? 'Open dispute' : 'Открытый спор'}</Link></li>
					</ul>
				</aside>
				<aside className="col-sm-3  col-md-2">
					<h6 className="title">{language === 'English' ? 'For users' : 'Пользователям'}</h6>
					<ul className="list-unstyled">
						<li> <Link to="/">{language === 'English' ? 'User login' : 'Вход'}</Link></li>
						<li> <Link to="/">{language === 'English' ? 'User register' : 'Регистрация'}</Link></li>
						<li> <Link to="/">{language === 'English' ? 'Account setting' : 'Настройка аккаунта'}</Link></li>
						<li> <Link to="/">{language === 'English' ? 'My orders' : 'Мои заказы'}</Link></li>
						<li> <Link to="/">{language === 'English' ? 'My wishlist' : 'Мой список пожеланий'}</Link></li>
					</ul>
				</aside>
				<aside className="col-sm-2  col-md-2">
					<h6 className="title">{language === 'English' ? 'Our app' : 'Наши приложения'}</h6>
					<Link to="/" className="d-block mb-2"><img src="../images/misc/appstore.png" height="40" alt=''/></Link>
					<Link to="/"  className="d-block mb-2"><img src="../images/misc/playmarket.png" height="40" alt=''/></Link>
				</aside>
			</div>
		</section>

		<section className="footer-copyright border-top">
				<p className="float-left text-muted">{language === 'English' ? '2021 All rights resetved' : '2021 Все права защищены'}</p>
				<p target="_blank" className="float-right text-muted">
					<Link to="/">{language === 'English' ? 'Privacy & Cookies' : 'Конфиденциальность и файлы cookie'}</Link> 
				</p>
		</section>
	</div>
</footer>
   );
}
 
export default Footer;
