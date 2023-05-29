import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import * as API from "../../api/public";
import { TopBar } from "../../components/TopBar";
import image from "../../assets/advice-article-background-beverage.jpg";
import { Box, Card, CardContent, Typography, CardMedia, CardActions, Button } from "@mui/material";


export const Article = () => {

    const { _id } = useParams()

    const [article, setArticle] = useState(
        {
            name: '',
            description: '',
            author: ''
        }
    )

    const loadArticleData = () => {
        API.read(_id).then((result) => {
            setArticle(result?.data)
        })
    }

    useEffect(() => {
        loadArticleData()
    }, [])
    return (
        <>
            <TopBar />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: 20
                }}
            >
                <Card
                    sx={{ maxWidth: '50%' }}
                >
                    <CardMedia
                        sx={{ height: 400, width: 800 }}
                        image={image}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {article.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {article.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

            </Box>
        </>
    )
}