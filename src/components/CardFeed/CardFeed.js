import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { InfoContainer, ImageRestaurant } from './styles'

const CardFeed = (props) => {

    return (
        <div>
            <Card>
            <CardActionArea>
                <ImageRestaurant src={props.image}/>
                <CardMedia
                    image={props.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                {props.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <InfoContainer>
                        <p>{props.deliveryTime} min</p>
                        <p>Frete R${props.shipping}</p>
                    </InfoContainer>
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </div>
    )
}

export default CardFeed