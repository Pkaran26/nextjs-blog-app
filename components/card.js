
const Card = ({ children })=>(
  <div className="card bg-light" style={ styles.marb20 }>
    <div className="card-body">{ children }</div>
  </div>
)

export default Card

const styles = {
  marb20: {
    marginBottom: '20px'
  }
}
