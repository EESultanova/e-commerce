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
					<h6 className="title">{language === 'Russian' ? 'О компании': 'About'}</h6>
					<ul className="list-unstyled">
						<li> <Link to="/">{language === 'Russian' ? 'Команда' : 'About us'}</Link></li>
						<li> <Link to="/">{language === 'Russian' ? 'Сервисы' : 'Services'}</Link></li>
						<li> <Link to="/">{language === 'Russian' ? 'Правила и условия' : 'Rules and terms'}</Link></li>
						<li> <Link to="/">{language === 'Russian' ? 'Блоги' : 'Blogs'}</Link></li>
					</ul>
				</aside>
				<aside className="col-sm-3 col-md-2">
					<h6 className="title">{language === 'Russian' ? 'Сервисы' : 'Services'}</h6>
					<ul className="list-unstyled">
						<li> <Link to="/">{language === 'Russian' ? 'Контактный центр' : 'Help center'}</Link></li>
						<li> <Link to="/">{language === 'Russian' ? 'Возврат денег' : 'Money refund'}</Link></li>
						<li> <Link to="/">{language === 'Russian' ? 'Условия и политика' : 'Terms and policy'}</Link></li>
						<li> <Link to="/">{language === 'Russian' ? 'Открытый спор' : 'Open dispute'}</Link></li>
					</ul>
				</aside>
				<aside className="col-sm-3  col-md-2">
					<h6 className="title">{language === 'Russian' ? 'Пользователям' : 'For users'}</h6>
					<ul className="list-unstyled">
						<li> <Link to="/">{language === 'Russian' ? 'Вход' : 'User login'}</Link></li>
						<li> <Link to="/">{language === 'Russian' ? 'Регистрация' : 'User register'}</Link></li>
						<li> <Link to="/">{language === 'Russian' ? 'Настройка аккаунта' : 'Account setting'}</Link></li>
						<li> <Link to="/">{language === 'Russian' ? 'Мои заказы' : 'My orders'}</Link></li>
						<li> <Link to="/">{language === 'Russian' ? 'Мой список пожеланий' : 'My wishlist'}</Link></li>
					</ul>
				</aside>
				<aside className="col-sm-2  col-md-2">
					<h6 className="title">{language === 'Russian' ? 'Наши приложения' : 'Our app'}</h6>
					<Link to="/" className="d-block mb-2"><img src="../images/misc/appstore.png" height="40" alt=''/></Link>
					<Link to="/"  className="d-block mb-2"><img src="../images/misc/playmarket.png" height="40" alt=''/></Link>
				</aside>
			</div>
		</section>

		<section className="footer-copyright border-top">
				<p className="float-left text-muted">{language === 'Russian' ? '2021 Все права защищены' : '2021 All rights resetved'}</p>
				<p target="_blank" className="float-right text-muted">
					<Link to="/">{language === 'Russian' ? 'Конфиденциальность и файлы cookie' : 'Privacy & Cookies'}</Link> 
				</p>
		</section>
	</div>
</footer>
   );
}
 
export default Footer;
