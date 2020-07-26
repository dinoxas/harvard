import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';

type Props = {
  imageUrl: string;
  artist: any[];
  title: string;
  year: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 'none'
    },
    media: {
      height: 180,
      backgroundSize: 'auto'
    }
  })
);

const Image: React.FC<Props> = ({ imageUrl, artist, title, year }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar>{artist[0].name.charAt(0)}</Avatar>}
        title={artist[0].name}
        component='h4'
        subheader={year}
      />
      {imageUrl ? (
        <CardMedia
          className={classes.media}
          image={`${imageUrl}?height=180&width=345`}
          title={title}
        />
      ) : (
        <div>
          <Skeleton variant='rect' width={345} height={180} animation={false} />
        </div>
      )}

      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Image;
