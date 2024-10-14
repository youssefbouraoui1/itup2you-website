import React from 'react'

const Consulting = () => {
  return (
    <div className="container text-center" style={{zIndex:20}}>
        <h1 style={{color:'white'}}> In ITUP2YOU We Offer A Range Of Consulting Services</h1>
        <div className='row'>
        <div className="col-sm-6 col-md-4 col-lg-3" style={{ backgroundColor: '#f8f9fa', padding: '10px' }}>
                Column 1
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3" style={{ backgroundColor: '#e9ecef', padding: '10px' }}>
                Column 2
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3" style={{ backgroundColor: '#dee2e6', padding: '10px' }}>
                Column 3
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3" style={{ backgroundColor: '#ced4da', padding: '10px' }}>
                Column 4
            </div>
        </div>
    </div>
  )
}

export default Consulting;