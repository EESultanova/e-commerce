import { useSelector } from "react-redux";
import { SITE_URL } from '../../config'
import avatarLogo from '../../assets/avatar.svg';
import { useProfileContext } from "../../contexts/ProfileContext";
import { Link } from "react-router-dom";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  DiscreteColorLegend,
} from 'react-vis';

const ProfileOverview = () => {
  const currentUser = useSelector(state => state.user);
  const avatar = currentUser.avatar ? `${SITE_URL + currentUser.avatar}` : avatarLogo;
  const orders = useSelector(state => state.user?.orders[0])
  const language = useSelector(state => state.language)
  let {setChoice} = useProfileContext()
console.log(currentUser.goods[0])

  const BarSeries = VerticalBarSeries

  const dataResult = currentUser?.goods[0]?.filter(el => el.initQuantity - el.quantity > 0).map(el => el = new Object ({
    x: el.name?.split(' ').slice(0,2).join(' '),
    y: el.initQuantity - el.quantity
  }))

  const dataResultAll = currentUser?.goods[0]?.filter(el => el.initQuantity - el.quantity > 0).map(el => el = new Object ({
    x: el.name?.split(' ').slice(0,2).join(' '),
    y: el.initQuantity
  }))
  const ITEMS = [
    {title: 'ITEMS IN STOCK', color: '#79C7E3', strokeWidth: 9},
    {title: 'ORDERED', color: '#FF6A00', strokeWidth: 9}
  ]
  console.log('CHART DATA:', dataResult)
  return ( 
    <>
    <article className="card mb-3">
            <div className="card-body">
              <figure className="icontext d-flex">
                  <div className="icon">
                    <img className="rounded-circle img-sm border" src={avatar} alt=""/>
                  </div>
                  <div className="text" style={{'textAlign': 'start'}}>
                    <strong> {currentUser.name} </strong> <br/> 
                    <p className="mb-2"> {currentUser.email}  </p> 
                    <Link href="/profile" className="btn btn-light btn-sm" alt="" onClick={() => setChoice(4)}>{language === 'Russian' ? 'Редактировать': 'Edit'}</Link>
                  </div>
              </figure>
              <hr/>
              <p>
                <i className="fa fa-map-marker text-muted"></i> &nbsp; {language === 'Russian' ? 'Мой адрес:': 'My address:'} 
                <br/>
                {language === 'Russian' ? 'Москва, Ленинский проспект, дом 31, строение 2': 'Moscow city, Leninsky prospect, Building 31, House 2'} &nbsp; 
                <div >
                <Link to="/profile" className="btn-link">{language === 'Russian' ? 'Редактировать': 'Edit'} </Link>
                </div>
              </p>
              <article className="card-group card-stat">
                {currentUser.role === "buyer" && <figure className="card bg">
                  <div className="p-3">
                    <h4 className="title">1</h4>
                    <span>{language === 'Russian' ? 'Список желаний': 'Wishlists'}</span>
                  </div>
                </figure>}
                <figure className="card bg">
                  <div className="p-3">
                    <h4 className="title">1</h4>
                    <span>{language === 'Russian' ? 'Ожидают доставку': 'Awaiting delivery'}</span>
                  </div>
                </figure>
                <figure className="card bg">
                  <div className="p-3">
                    <h4 className="title">0</h4>
                    <span>{language === 'Russian' ? 'Доставлено товаров': 'Delivered items'}</span>
                  </div>
                </figure>
              </article>
            </div>
          </article>
          <article className="card  mb-3">
            <div className="card-body">
            {currentUser.role === 'seller' ?  (
              dataResult.length ? (
                <div>
            <h5 className="card-title mb-4">{language === 'Russian' ? 'Аналитика продаж': 'Sales Analytics'}</h5>
            <XYPlot
                className="clustered-stacked-bar-chart-example"
                xType="ordinal"
                stackBy="y"
                width={1000}
                height={500}
                xType="ordinal"
                margin={{bottom: 150}}
              >
              <DiscreteColorLegend
                  style={{position: 'absolute', left: '850px', top: '8px'}}
                  orientation="horizontal"
                  items={ITEMS}
                />
            
                <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis tickLabelAngle={-45}/>
                  <YAxis />
                  <BarSeries
                    cluster="sold"
                    color="#FF6A00"
                    data = {dataResult}
                  />
              <BarSeries
                cluster="soldq"
                color="#79C7E3"
                data={dataResultAll}
              />
            
            </XYPlot>
          </div>
              ) : <p>No sales yet</p>
         ) : (
          <>
            <h5 className="card-title mb-4">{language === 'Russian' ? 'Последние заказы': 'Recent orders'}</h5> 
            <div className="d-flex flex-row justify-content-center">
                <div>
                  {orders.map(order => {
                    return (
                      <div>
                        <figure className="itemside  mb-3">
                          <div className="aside"><img src={order?.cart[0]?.photo} className="border img-sm" alt=""/></div>
                          <figcaption className="info" style={{width: "100%"}}>
                            <time className="text-muted"><i className="fa fa-calendar-alt"></i> 12.09.2019</time>
                            <p>{order?.cart[0]?.name} </p>
                            <span className="text-success">{language === 'Russian' ? 'Заказ подтвержден': 'Order confirmed'}</span>
                          </figcaption>
                        </figure>
                      </div>
                    )
                  })}
              </div>
            </div>
          </>
         )}
          </div>
          </article>
          </>
   );
}
export default ProfileOverview;
