import {useCallback, useState} from 'react'
import Button from '../Button'
import './index.css'

const FetchMoreButton = ({onSearchMore}) => {
  let [clickCount, setClickCount] = useState(0)
  const onSubmit = useCallback(() => {
    setClickCount(++clickCount)
    onSearchMore(clickCount)
  }, [onSearchMore, clickCount])
  
  return (
    <div className="FetchMoreButton">
      <Button onClick={onSubmit}>Search more</Button>
    </div>
  )
}

export default FetchMoreButton
