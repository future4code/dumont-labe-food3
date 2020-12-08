import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { InfoContainer } from './styles'

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
                    <InfoContainer>
                        <p>50-60 min</p>
                        <p>Frete R$6,00</p>
                    </InfoContainer>
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </div>
    )
}

export default CardFeed