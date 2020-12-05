export const Row = ({ children })=>(
  <div className="row">{ children }</div>
)

export const Column = ({ size, children })=>(
  <div className={`col-lg-${ size } col-md-${ size }`}>{ children }</div>
)
