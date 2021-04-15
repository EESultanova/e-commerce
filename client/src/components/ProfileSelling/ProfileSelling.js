import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getSellerGoods } from "../../redux/actionCreators/userAC"
import Good from "../Good/Good"



const ProfileSelling = () => {
	const user = useSelector(state => state.user)
	const state = useSelector(state => state)
  const language = useSelector(state => state.language)
	const dispatch = useDispatch()


	useEffect(() => {
		dispatch(getSellerGoods(user.id))
	}, [])

	// console.log('user.goods--------->', user?.goods[0])

	console.log(user?.goods[0])

	return (
		<article className="card">
			<div className="card-body">

				{user?.goods?.length ? user?.goods[0].map(el => <div key={el._id} className="d-flex flex-row justify-content-center">
					<div className="p-3" style={{ width: 600 }}>
						<figure className="card card-product-grid" >
							<div className="img-wrap">
								<img src={el.photo} alt="" className="mt-3" />
							</div>
							<figcaption className="info-wrap" style={{ minHeight: 160, minWindth: 300 }} >
								<a href="/" className="title mb-2">{el.name}</a>
								<div className="price-wrap mb-3">
									<span className="price">{el.price} $</span>
									<small className="text-muted">{(language === 'Russian') ? '/ единица товара' : '/ per item'}</small>
								</div>
								<Link to={`/profile/${el._id}/edit`} className="btn btn-outline-primary"> <i className="fa fa-pen"></i> {language === 'Russian' ? 'Изменить': 'Edit'}</Link>
                &nbsp;
								<Link to={`/profile/${el._id}/`} className="btn btn-primary"> <i className="fa fa-eye"></i> {language === 'Russian' ? 'Посмотреть': 'View'}</Link>
								<br />
							</figcaption>
						</figure>
					</div>
				</div>
				) : <div className="container"><p>{(language === 'Russian') ? 'Нет товаров для продажи' : 'No items for sale yet'}</p></div>}

			</div>
		</article>
	)
}

export default ProfileSelling;
