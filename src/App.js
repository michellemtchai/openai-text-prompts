import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import PromptForm from './components/PromptForm';
import Responses from './components/Responses';

const STORAGE_KEY = 'response-log';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [log, setLog] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedLog = localStorage.getItem(STORAGE_KEY);
    if (storedLog) {
      setLog(JSON.parse(storedLog));
    }
  }, []);

  const submitPrompt = async (prompt) => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/.netlify/functions/completions', {
        method: 'POST',
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      const { msg } = data;
      setLoading(false);
      if (res.status === 200) {
        addToLog(prompt, msg);
        setPrompt('');
      } else {
        setError(msg);
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  const addToLog = (prompt, response) => {
    const newLog = [
      {
        prompt,
        response,
      },
      ...log,
    ];
    setLog(newLog);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newLog));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPrompt = prompt.trim();
    if (newPrompt.length === 0) {
      setError('Your prompt cannot be empty or made of whitespace.');
    } else {
      submitPrompt(newPrompt);
    }
  };

  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  return (
    <Layout title="Fun With AI">
      <PromptForm
        value={prompt}
        onChange={handleChange}
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
      />
      <Responses log={log} />
    </Layout>
  );
};

export default App;
