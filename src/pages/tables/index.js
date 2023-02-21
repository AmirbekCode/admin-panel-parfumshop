// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import products from 'src/data/Products'
// ** Demo Components Imports
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
const MUITable = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='https://mui.com/components/tables/' target='_blank'>
            Buyurtmalar
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="340"
                image={`${products[0].imgUrl}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {products[0].productName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {products[0].description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Yakunlash
              </Button>
            </CardActions>
          </Card>
      </Grid>

    </Grid>
  )
}

export default MUITable
