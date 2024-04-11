import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

export default function ThreadsCard({ doc }: any) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='user'>
            {doc.userEmail[0]}
          </Avatar>
        }
        title={doc.userEmail}
      />
      {doc.image && (
        <CardMedia component='img' image={doc.imageUrl} alt={doc.image} />
      )}
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {doc.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
