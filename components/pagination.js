import Card from '../components/card'
import Link from 'next/link'

export const Pagination = ()=>{
  return (
    <Card>
      <div class="btn-group mr-2" role="group" aria-label="First group">
        <button type="button" class="btn btn-secondary">Prev</button>
        <button type="button" class="btn btn-secondary">1</button>
        <button type="button" class="btn btn-secondary">2</button>
        <button type="button" class="btn btn-secondary">3</button>
        <button type="button" class="btn btn-secondary">4</button>
        <button type="button" class="btn btn-secondary">Next</button>
      </div>
    </Card>
  )
}

export const PrevNext = ({ id })=>{
  return (
    <Card>
      <div className="d-flex justify-content-between">
        <div>
          <Link href={`/posts/${ id - 1 }`}>
            <button className="btn btn-primary">Prev</button>
          </Link>
        </div>
        <div>
          <Link href={`/posts/${ id + 1 }`}>
            <button className="btn btn-primary">Next</button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
