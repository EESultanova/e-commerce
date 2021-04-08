import { useState } from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

function Order() {
  const [value, setValue] = useState()


  
  return(
  <div>
    <AddressSuggestions token="5380c3726e32d6ce9d7fba825b4570fea6395f1b" value={value} onChange={setValue} />
    <p>ЛАЛАЛАЛАЛЛАЛАЛА</p>
  </div>
  )
}

export default Order
