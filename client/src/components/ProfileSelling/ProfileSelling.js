import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getGoods } from "../../redux/actionCreators/goodAC"



const ProfileSelling = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  console.log('user.goods--->', user.goods)

  // useEffect(() => {
  //   dispatch(getGoods())
  // })

  return ( 
    <article className="card">
			<div className="card-body">

		{ user.goods.length ? user.goods.map( el => <div key={el._id} className="d-flex flex-row justify-content-center">
				<div className="p-3" style={{width:600}}>
					<figure className="card card-product-grid" >
						<div className="img-wrap"> 
							<img src={el.photo} alt=""/>
						</div>
						<figcaption className="info-wrap" style={{minHeight:160, minWindth: 300}} >
								<a href="/" className="title mb-2">{el.name}</a>
								<div className="price-wrap mb-3">
									<span className="price">{el.price} $</span> 
									<small className="text-muted"> /per item</small>
								</div>
								<a href="/" className="btn btn-outline-primary"> <i className="fa fa-pen"></i> Edit </a>
								<a href="/" className="btn btn-primary"> <i className="fa fa-eye"></i> View  </a>
                <br/>					
						</figcaption>
					</figure>
				</div>
			</div>
    ): <div class="container"><p>No items for sale yet</p></div> }

			</div>
		</article>
   )
}
 
export default ProfileSelling;
