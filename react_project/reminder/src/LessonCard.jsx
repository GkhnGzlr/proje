const LessonCard = (props) => {
    return (
      <div className="card mb-3" style={{maxwidth : "540px"}}>
      <div className="row g-0">
          <div className="col col-md-6 col-lg-4">
          <img src={props.image} className="img-fluid rounded-start" alt={props.name} style={{width : "100px"}}/>
          </div>
          <div className="col-md-8">
          <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
          </div>
          </div>
      </div>
      </div>
    )
  }
  export default LessonCard