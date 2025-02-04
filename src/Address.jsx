import React from 'react'

const Address = ({country, municipality, province}) => {
  return (
    <div>
Address Component
<p style={{color:"red", backgroundColor:"black"}}> Country:
{country}
</p>
<p style={{ color:"White",backgroundColor:"black"}}>Municipality:
{municipality}
</p>
<p style={{color:"White",backgroundColor:"black"}}>Province:
{province}
</p>

    </div>
  )
}

export default Address