import {useCallback, useRef, useState} from 'react'
import axios from 'axios'

export const useFetchContent = () => {
  const [imgList, setImgList] = useState([])
  let searchString = useRef()
  let clicks = useRef()
  const fetch = useCallback(async (v) => {
    /* TODO: fetch images from this url: https://rickandmortyapi.com/api/character/
      (to fetch with name add name in search query: https://rickandmortyapi.com/api/character/?name=rick)
    */
    searchString = v
    // clicks = 0
    await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchString}`)
      .then(res => {
        setImgList(res.data.results.slice(0, 10))
      })
      .catch(e => {
        throw new Error(e)
      })
  }, [])
  
  // TODO: Put fetchMore method here
  const fetchMore = useCallback(async (v) => {
    clicks.current = v
    const pagesCount = await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchString}`)
      .then(res => {
        return res.data.info.pages
      })
      .catch(e => {
        throw new Error(e)
      })
    let stack = []
    while (clicks.current + 1) {
      const page = Math.ceil(clicks.current + 2 / 2)
      if (page > pagesCount) {
        alert('No more images')
        return
      }
      await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchString}&page=${page}`).then(res => {
        if (!clicks.current % 2) {
          stack.push(...res.data.results.slice(0, 10))
        } else {
          stack.push(...res.data.results.slice(-10))
        }
      })
        .catch(e => {
        throw new Error(e)
      })
      clicks.current--
    }
    setImgList(stack)
  }, [])
  return [imgList, fetch, fetchMore]
}
