import { useState } from 'react';
import { Card, Form, Button, Alert, Row, Col, Badge } from 'react-bootstrap';
import LoadingSpinner from './LoadingSpinner';
import { closetItems } from '../data/closetData';

function StyleAdvisor() {
  const [apiKey, setApiKey] = useState('');
  const [occasion, setOccasion] = useState('');
  const [weather, setWeather] = useState('');
  const [preferences, setPreferences] = useState('');
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getClosetSummary = () => {
    const categories = {};
    closetItems.forEach(item => {
      if (!categories[item.category]) {
        categories[item.category] = [];
      }
      categories[item.category].push(`${item.name} (${item.colorName}, ${item.style})`);
    });
    
    return Object.entries(categories)
      .map(([cat, items]) => `${cat}: ${items.join(', ')}`)
      .join('\n');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setAdvice(null);

    const closetSummary = getClosetSummary();
    
    const prompt = `You are a professional fashion stylist assistant. Based on the user's wardrobe and their request, provide outfit recommendations.

USER'S WARDROBE:
${closetSummary}

USER'S REQUEST:
- Occasion: ${occasion}
- Weather/Season: ${weather}
- Additional Preferences: ${preferences || 'None specified'}

Please provide:
1. A complete outfit recommendation using items from their wardrobe (be specific about which items)
2. Why these pieces work well together
3. Any styling tips for this look
4. An alternative outfit option if possible

Keep your response concise but helpful. Format with clear sections.`;

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: 'claude-3-haiku-20240307',
          max_tokens: 1024,
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get style advice. Please try again.');
      }

      const data = await response.json();
      setAdvice(data.content[0].text);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h2 className="h4 mb-4">
          <span role="img" aria-label="sparkles">✨</span> AI Style Advisor
        </h2>
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="apiKey">
            <Form.Label>Claude API Key</Form.Label>
            <Form.Control
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              required
              placeholder="sk-ant-api03-..."
              aria-describedby="apikey-help"
            />
            <Form.Text id="apikey-help" muted>
              Enter your Anthropic API key to enable AI recommendations
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="occasion">
            <Form.Label>What's the occasion?</Form.Label>
            <Form.Select 
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
              aria-describedby="occasion-help"
            >
              <option value="">Select an occasion...</option>
              <option value="casual day out">Casual Day Out</option>
              <option value="work/office">Work / Office</option>
              <option value="business meeting">Business Meeting</option>
              <option value="date night">Date Night</option>
              <option value="party/event">Party / Event</option>
              <option value="weekend brunch">Weekend Brunch</option>
              <option value="job interview">Job Interview</option>
            </Form.Select>
            <Form.Text id="occasion-help" muted>
              Choose the type of event you're dressing for
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="weather">
            <Form.Label>Weather / Season</Form.Label>
            <Form.Select 
              value={weather}
              onChange={(e) => setWeather(e.target.value)}
              required
              aria-describedby="weather-help"
            >
              <option value="">Select weather conditions...</option>
              <option value="hot summer day">Hot Summer Day (80°F+)</option>
              <option value="warm spring day">Warm Spring Day (65-80°F)</option>
              <option value="cool fall day">Cool Fall Day (50-65°F)</option>
              <option value="cold winter day">Cold Winter Day (Below 50°F)</option>
              <option value="rainy day">Rainy Day</option>
              <option value="indoor event">Indoor Event (Climate Controlled)</option>
            </Form.Select>
            <Form.Text id="weather-help" muted>
              This helps us recommend appropriate layers
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-4" controlId="preferences">
            <Form.Label>Any specific preferences? (Optional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              placeholder="e.g., I want to look professional but not too formal, prefer darker colors..."
              aria-describedby="preferences-help"
            />
            <Form.Text id="preferences-help" muted>
              Add any style preferences or requirements
            </Form.Text>
          </Form.Group>

          <Button 
            type="submit" 
            variant="primary" 
            size="lg" 
            className="w-100"
            disabled={loading}
          >
            {loading ? 'Getting Recommendations...' : 'Get AI Outfit Recommendation'}
          </Button>
        </Form>

        {loading && (
          <div className="mt-4">
            <LoadingSpinner text="Claude is analyzing your wardrobe..." />
          </div>
        )}

        {error && (
          <Alert variant="danger" className="mt-4" role="alert">
            <Alert.Heading className="h6">Error</Alert.Heading>
            {error}
          </Alert>
        )}

        {advice && (
          <div className="mt-4">
            <Alert variant="success" className="mb-3">
              <Badge bg="success" className="me-2">AI Powered</Badge>
              Recommendation generated successfully!
            </Alert>
            <Card className="bg-light">
              <Card.Body>
                <h3 className="h5 mb-3">Your Personalized Outfit</h3>
                <div 
                  style={{ whiteSpace: 'pre-wrap' }}
                  role="region"
                  aria-label="AI style recommendation"
                >
                  {advice}
                </div>
              </Card.Body>
            </Card>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default StyleAdvisor;
