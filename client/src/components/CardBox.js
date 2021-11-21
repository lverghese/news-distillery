import react, { useState, useEffect } from 'react';
import { Card, CardColumns, } from 'react-bootstrap';
import ArtCard from './ArtCard'


const CardBox = (props) => {
    const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n + 1));
    const [isFetching, setIsFetching] = useState(false);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    useEffect(() => {
      if (!isFetching) return;
      fetchMoreListItems();
    }, [isFetching]);
  
    function handleScroll() {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
      setIsFetching(true);
    }
  
    function fetchMoreListItems() {
      setTimeout(() => {
        setListItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
        setIsFetching(false);
      }, 2000);
    }
    console.log(props)

    return (
        <>
      <ul className="list-group mb-2">
        <CardColumns style={{margin: '25px'}}>
            {props.articles.map(({ title, articleId, url, urlToImage, author, description, handleSave}) => {
                return (
                    <ArtCard
                    key={articleId}
                    title={title}
                    author={author}
                    url={url}
                    urlToImage={urlToImage}
                    description={description}
                    handleSave={(e) => handleSave(e)}
                    />
                )
            }
            )}
        </CardColumns>
        </ul>
        {isFetching && 'Fetching more list items...'}
        </>
    )
}


export default CardBox;