import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function WeatherWidget() {
  const [weather, setWeather] = useState({
    temp: 65,
    condition: 'Partly Cloudy',
    icon: '⛅',
    suggestion: 'Light layers recommended'
  });

  // Simulate weather data - in a real app, this would call a weather API
  useEffect(() => {
    const weatherOptions = [
      { temp: 75, condition: 'Sunny', icon: '☀️', suggestion: 'Light, breathable fabrics recommended' },
      { temp: 65, condition: 'Partly Cloudy', icon: '⛅', suggestion: 'Light layers recommended' },
      { temp: 55, condition: 'Cloudy', icon: '☁️', suggestion: 'Consider a light jacket' },
      { temp: 45, condition: 'Rainy', icon: '🌧️', suggestion: 'Waterproof outerwear suggested' },
      { temp: 35, condition: 'Cold', icon: '❄️', suggestion: 'Warm layers and coat needed' }
    ];
    
    // Pick weather based on current hour for variety
    const index = new Date().getHours() % weatherOptions.length;
    setWeather(weatherOptions[index]);
  }, []);

  return (
    <Card className="shadow-sm border-0 bg-gradient" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Card.Body className="text-white">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3 className="h6 mb-1 opacity-75">Today's Weather</h3>
            <p className="display-6 mb-0 fw-bold">{weather.temp}°F</p>
            <p className="mb-0 small">{weather.condition}</p>
          </div>
          <div className="display-3" aria-hidden="true">
            {weather.icon}
          </div>
        </div>
        <hr className="my-2 opacity-50" />
        <p className="small mb-0">
          <strong>Style Tip:</strong> {weather.suggestion}
        </p>
      </Card.Body>
    </Card>
  );
}

export default WeatherWidget;
