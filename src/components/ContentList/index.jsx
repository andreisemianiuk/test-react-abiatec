import "./index.css";


const ContentList = ({content}) => {
  return (
    <ul className="Content">
      {content.map((v, i) =>
        <li className="Image" key={i}>
          <img src={v.image} alt={'some image'}/>
        </li>,
      )}
    </ul>
  )
}

export default ContentList
