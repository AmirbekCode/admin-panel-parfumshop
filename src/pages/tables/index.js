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
      <Grid item xs={12} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

          {products.map((item)=>{
        return  <Grid item xs={2} sm={3} md={3}>  
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="340"
                image={`${item.imgUrl}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.productName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {item.price}.000 som
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {item.count} dona
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Qabul Qilish
              </Button>
            </CardActions>
          </Card>
          </Grid>         
          })}

      </Grid>

    </Grid>
  )
}

export default MUITable
