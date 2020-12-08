import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const CardFeed = () => {

    return (
        <div>
            <Card>
            <CardActionArea>
                <CardMedia
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                Vinil Butantã
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span>50-60 min</span>
                    <span>Frete R$6,00</span>
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </div>
    )
}

export default CardFeed