import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getGoodsFromServer } from "../../redux/actionCreators/goodAC"
import { getCategoriesFromServer } from "../../redux/actionCreators/categoryAC"
import Good from "../Good/Good.jsx"
import { Link } from "react-router-dom"


const ListGoods = () => {

  const { id } = useParams()
  const dispatch = useDispatch()

  const [sortedGoods, setSortedGoods] = useState([]);

  useEffect(() => {
    dispatch(getCategoriesFromServer);
    dispatch(getGoodsFromServer(id))
  }, [])

  const goods = useSelector(state => state.goods.goods)
  const categories = useSelector(state => state.categories)
  const currentCategory = categories.find(categories => categories._id === id)

  // const sortedItems = useSelector(state => state.sortedGoods)
  // sortedItems.push('1');

  // console.log(currentCategory.name, '======')
  console.log(goods)

  function sortGoods(arg) {
    if (arg === 'sortasc') return setSortedGoods(goods.sort((a, b) => a.price - b.price).slice(0));
    else if (arg === 'sortdesc') return setSortedGoods(goods.sort((a, b) => b.price - a.price).slice(0));
    else return setSortedGoods(goods.sort((a, b) => b.rating - a.rating).slice(0));
  }



  // function sortAsc(sortType) {
  //   let nav = document.querySelector('#goods-wrap');
  //   for (let i = 0; i < nav.children.length; i++) {
  //     for (let j = i; j < nav.children.length; j++) {
  //       if (+nav.children[i].getAttribute(sortType) > +nav.children[j].getAttribute(sortType)) {
  //         let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
  //         insertAfter(replacedNode, nav.children[i]);
  //       }
  //     }
  //   }
  // }

  // function sortDesc(sortType) {
  //   let nav = document.querySelector('#goods-wrap');
  //   console.log(nav.children.length)
  //   for (let i = 0; i < nav.children.length; i++) {
  //     for (let j = i; j < nav.children.length; j++) {
  //       if (+nav.children[i].getAttribute(sortType) < +nav.children[j].getAttribute(sortType)) {
  //         let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
  //         insertAfter(replacedNode, nav.children[i]);
  //       }
  //     }
  //   }
  // }

  // function insertAfter(elem, refElem) {
  //   return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
  // }

  return (
    <>
      <div className="card mb-3 mx-4 my-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-2"> Your are here: </div>
            <nav className="col-md-8" style={{ marginRight: 205 }}>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                {currentCategory && <li className="breadcrumb-item"><Link to={`/categories/${currentCategory._id}`}>{currentCategory.name}</Link></li>}
                <li className="breadcrumb-item active" aria-current="page">Items</li>
              </ol>
            </nav>
          </div>

          <div className="row">
            <div className="col-md-2">Filter by</div>
            <div className="col-md-10">
              <ul className="list-inline" style={{ display: 'flex', marginLeft: '1.2rem' }}>
                <li className="list-inline-item mr-3 dropdown"><a href="/" className="dropdown-toggle" data-toggle="dropdown">   Supplier type </a>
                  <div className="dropdown-menu p-3" style={{ maxWidth: "20rem" }}>
                    <label className="form-check">
                      <input type="radio" name="myfilter" className="form-check-input" /> Good supplier
                  </label>
                    <label className="form-check">
                      <input type="radio" name="myfilter" className="form-check-input" /> Best supplier
                  </label>
                    <label className="form-check">
                      <input type="radio" name="myfilter" className="form-check-input" /> New supplier
                  </label>
                  </div>
                </li>
                <li className="list-inline-item mr-3 dropdown">
                  <a href="/" className="dropdown-toggle" data-toggle="dropdown">  Country </a>
                  <div className="dropdown-menu p-3">
                    <label className="form-check"> 	 <input type="checkbox" className="form-check-input" /> China    </label>
                    <label className="form-check">   	 <input type="checkbox" className="form-check-input" /> Japan      </label>
                    <label className="form-check">    <input type="checkbox" className="form-check-input" /> Uzbekistan  </label>
                    <label className="form-check">  <input type="checkbox" className="form-check-input" /> Russia     </label>
                  </div>
                </li>
                <li className="list-inline-item mr-3 dropdown">
                  <a href="/" className="dropdown-toggle" data-toggle="dropdown">Feature</a>
                  <div className="dropdown-menu">
                    <a href="/" className="dropdown-item">Anti backterial</a>
                    <a href="/" className="dropdown-item">With buttons</a>
                    <a href="/" className="dropdown-item">Extra safety</a>
                  </div>
                </li>
                <li className="list-inline-item mr-3"><a href="/">Color</a></li>
                <li className="list-inline-item mr-3"><a href="/">Size</a></li>
                <li className="list-inline-item mr-3">
                  <div className="form-inline">
                    <label className="mr-2">Price</label>
                    <input className="form-control form-control-sm" placeholder="Min" type="number" />
                    <span className="px-2"> - </span>
                    <input className="form-control form-control-sm" placeholder="Max" type="number" />
                    <button type="submit" className="btn btn-sm btn-light ml-2">Ok</button>
                  </div>
                </li>
                <li className="list-inline-item mr-3">
                  <label className="custom-control mt-1 custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <div className="custom-control-label">Ready to ship
                </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <header className="mb-3 mx-4">
        <div className="form-inline">
          <strong className="mr-md-auto">{goods.length} Items found </strong>
          <form>
            <select onChange={(event) => sortGoods(event.target.value)} className="mr-2 form-control">
              <option value="sortasc">Price Low to High</option>
              <option value="sortdesc">Price High to Low</option>
              <option value="sortrating">Sort by rating</option>
            </select>
          </form>
          <div className="btn-group">
            <a href="page-listing-grid.html" className="btn btn-light active" data-toggle="tooltip" title="List view">
              <i className="fa fa-bars"></i></a>
            <a href="page-listing-large.html" className="btn btn-light" data-toggle="tooltip" title="Grid view">
              <i className="fa fa-th"></i></a>
          </div>
        </div>
        {/* <div className="d-flex justify-content-center mb-5">
          <button onClick={() => sortAsc('data-price')} id="sort-asc" type="submit" className="btn btn-success mx-2">Цена возрастание</button>
          <button onClick={() => sortDesc('data-price')} id="sort-desc" type="submit" className="btn btn-success mx-2">Цена убывание</button>
          <button onClick={() => sortDesc('data-rate')} id="sort-rating" type="submit" className="btn btn-success mx-2">Sort rating</button>
        </div> */}
      </header>

      <div id="goods-wrap" className="row">
        {
          goods.length ? goods.map(good => {
            return (
              <Good key={good._id} good={good} />
            )
          })
            : 'No goods'
        }
      </div>


      <nav className="mb-4 mx-4" aria-label="Page navigation sample">
        <ul className="pagination">
          <li className="page-item disabled"><a className="page-link" href="/">Previous</a></li>
          <li className="page-item active"><a className="page-link" href="/">1</a></li>
          <li className="page-item"><a className="page-link" href="/">2</a></li>
          <li className="page-item"><a className="page-link" href="/">3</a></li>
          <li className="page-item"><a className="page-link" href="/">4</a></li>
          <li className="page-item"><a className="page-link" href="/">5</a></li>
          <li className="page-item"><a className="page-link" href="/">Next</a></li>
        </ul>
      </nav>


      <div className="box text-center">
        <p>Did you find what you were looking for？</p>
        <a href="/" className="btn btn-light">Yes</a>
        <a href="/" className="btn btn-light">No</a>
      </div>


    </>
  )
}

export default ListGoods
