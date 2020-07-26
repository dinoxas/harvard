import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from './Image';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Images: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    const BASE_URL: string = `https://api.harvardartmuseums.org/object?classification=Prints&hasimage=1&sortorder=desc&apikey=c28e4be0-4c0e-11ea-90d6-25d9a9fe80fc&size=10&page=`;
    axios.get(`${BASE_URL}${page}`).then((res) => {
      setImages(images.concat(res.data.records));
      setPage(page + 1);
    });
  };

  const useStyles = makeStyles(() =>
    createStyles({
      grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gridGap: '1rem',
        margin: '2rem auto',
        padding: '0 1rem'
      },
      loader: {
        position: 'absolute',
        transform: 'translateX(-50%)',
        left: '50%'
      }
    })
  );

  const classes = useStyles();

  return (
    <div>
      <InfiniteScroll
        dataLength={images.length}
        className={classes.grid}
        next={fetchImages}
        hasMore={true}
        loader={<CircularProgress className={classes.loader} />}
      >
        {images.map(({ id, primaryimageurl, people, title, dated }) => {
          return (
            <Image
              key={id}
              imageUrl={primaryimageurl}
              artist={people}
              year={dated}
              title={title}
            />
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default Images;
