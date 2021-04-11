const ProfileAddress = () => {
  return ( 
    <>
    <a href="/" class="btn btn-light mb-3"> <i class="fa fa-plus"></i> Add new address </a>

        <div class="row">
            <div class="col-md-6">
                <article class="box mb-4">
                    <h6>London, United Kingdom</h6>
                    <p>Building: Nestone <br/> Floor: 22, Aprt: 12  </p>
                    <a href="/" class="btn btn-light disabled"> <i class="fa fa-check"></i> Default</a> <a href="/" class="btn btn-light"> <i class="fa fa-pen"></i> </a>   <a href="/" class="btn btn-light"> <i class="text-danger fa fa-trash"></i>  </a>
                </article>
            </div>
            <div class="col-md-6">
                <article class="box mb-4">
                    <h6>Tashkent, Uzbekistan</h6>
                    <p>Building one <br/> Floor: 2, Aprt: 32  </p>
                    <a href="/" class="btn btn-light">Make default</a> <a href="/" class="btn btn-light"> <i class="fa fa-pen"></i> </a>   <a href="/" class="btn btn-light"> <i class="text-danger fa fa-trash"></i>  </a>
                </article>
            </div>
            <div class="col-md-6">
                <article class="box mb-4">
                    <h6>Moscow, Russia</h6>
                    <p>Lenin street <br/> Building A, Floor: 3, Aprt: 32  </p>
                    <a href="/" class="btn btn-light">Make default</a> <a href="/" class="btn btn-light"> <i class="fa fa-pen"></i> </a>   <a href="/" class="btn btn-light"> <i class="text-danger fa fa-trash"></i>  </a>
                </article>
            </div>
        </div>
      </>
   );
}
 
export default ProfileAddress;
