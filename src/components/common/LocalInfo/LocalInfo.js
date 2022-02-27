import './LocalInfo.css';

export function LocalInfo(geo) {
  console.log('sou x', geo)
  return (
    <div className="info">
      <div className="information">
        <span>
          IP Address 
        </span>
        <p>
          {geo.info.ip}
        </p>
      </div>
      <div className="information">
        <span>
          Location 
        </span>
        <p>
          {geo.info.location?.city},
          {geo.info.location?.region} <br/>
          {geo.info.location?.geonameId}
        </p>
      </div>
      <div className="information">
        <span>
          Timezone
        </span>
        <p> UTC
          {geo.info.location?.timezone}
        </p>
      </div>
      <div className="information">
        <span>
          ISP
        </span>
        <p>
          {geo.info.isp}
        </p>
      </div>
    </div>
  )
}