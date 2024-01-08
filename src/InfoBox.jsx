import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox ({info}){
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1664303499312-917c50e4047b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHVzdCUyMGNsb3VkfGVufDB8fDB8fHww";
    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL ="https://images.unsplash.com/photo-1552901464-1449e53709c9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://www.gettyimages.in/detail/news-photo/boy-runs-with-an-umbrella-during-heavy-rainfall-in-kolkata-news-photo/1240914244";

    return (
    <div className="InfoBox">
        <h3>WeatherInfo - {info.weather} </h3>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity > 80 ? RAIN_URL : info.temp >15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}&nbsp;
      {info.humidity > 80 ? <ThunderstormIcon/>: info.temp >15 ? <WbSunnyIcon/> : <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity= {info.humidity}</p>
         <p>Min Temp= {info.tempMin}&deg;C</p>
         <p>Max Temp= {info.tempMax}&deg;C</p>
         <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
         
         
      </Typography>
      </CardContent>
    
    </Card>
    </div>
    )   
};