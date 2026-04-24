const express = require('express');
const router = express.Router();
const { load, save } = require('../db/storage');
const https = require('https');
const http = require('http');

router.get('/screenshot', async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).json({ error: 'URL required' });
  }
  
  try {
    const options = {
      headers: {
        'Referer': 'https://thum.io/',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    };
    
    const response = await new Promise((resolve, reject) => {
      const request = https.get(`https://image.thum.io/get/${targetUrl}`, options, (httpRes) => {
        const chunks = [];
        httpRes.on('data', chunk => chunks.push(chunk));
        httpRes.on('end', () => resolve(Buffer.concat(chunks)));
        httpRes.on('error', reject);
      });
      request.on('error', reject);
    });
    
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/fetch-preview', async (req, res) => {
  try {
    const url = decodeURIComponent(req.query.url || '');
    if (!url) {
      return res.status(400).json({ error: 'URL required' });
    }
    const preview = await fetchLinkPreview(url);
    res.json(preview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', (req, res) => {
  try {
    const links = load();
    res.json(links);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', (req, res) => {
  try {
    const links = load();
    const link = links.find(l => l.id === parseInt(req.params.id));
    if (!link) {
      return res.status(404).json({ error: 'Link not found' });
    }
    res.json(link);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', (req, res) => {
  try {
    const links = load();
    const { url, title, subtitle, description, imageUrl, iconUrl, note, tags } = req.body;
    
    const newLink = {
      id: Date.now(),
      url,
      title: title || extractDomain(url),
      subtitle: subtitle || '',
      description: description || '',
      imageUrl: imageUrl || '',
      iconUrl: iconUrl || generateIconUrl(url),
      note: note || '',
      tags: tags || [],
      createdAt: new Date().toISOString()
    };
    
    links.unshift(newLink);
    save(links);
    
    res.status(201).json(newLink);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', (req, res) => {
  try {
    const links = load();
    const index = links.findIndex(l => l.id === parseInt(req.params.id));
    
    if (index === -1) {
      return res.status(404).json({ error: 'Link not found' });
    }
    
    const { url, title, subtitle, description, imageUrl, iconUrl, note, tags } = req.body;
    
    links[index] = {
      ...links[index],
      url: url ?? links[index].url,
      title: title ?? links[index].title,
      subtitle: subtitle ?? links[index].subtitle,
      description: description ?? links[index].description,
      imageUrl: imageUrl ?? links[index].imageUrl,
      iconUrl: iconUrl ?? links[index].iconUrl,
      note: note ?? links[index].note,
      tags: tags ?? links[index].tags
    };
    
    save(links);
    res.json(links[index]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const links = load();
    const index = links.findIndex(l => l.id === parseInt(req.params.id));
    
    if (index === -1) {
      return res.status(404).json({ error: 'Link not found' });
    }
    
    links.splice(index, 1);
    save(links);
    
    res.json({ message: 'Link deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

function extractDomain(url) {
  try {
    const hostname = new URL(url).hostname;
    return hostname.replace('www.', '');
  } catch {
    return url;
  }
}

function generateIconUrl(url) {
  try {
    const hostname = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`;
  } catch {
    return '';
  }
}

async function fetchLinkPreview(url) {
  try {
    const hostname = new URL(url).hostname;
    
    const preview = {
      title: extractDomain(url),
      iconUrl: generateIconUrl(url),
      imageUrl: '',
      description: '',
      subtitle: ''
    };
    
    return preview;
  } catch (error) {
    return {
      title: '',
      iconUrl: '',
      imageUrl: '',
      description: '',
      subtitle: ''
    };
  }
}

module.exports = router;