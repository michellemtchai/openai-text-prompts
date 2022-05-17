import React, { useState } from 'react';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [log, setLog] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
        setLog([
          {
            prompt: prompt,
            response: msg,
          },
          ...log,
        ]);
      } else {
        setError(msg);
      }
    } catch (err) {
      setError(err.message);
    }
    setPrompt('');
  };

  const handleSubmit = () => {
    const newPrompt = prompt.trim();
    if (newPrompt.length === 0) {
      setError('Please enter a prompt.');
    } else {
      submitPrompt(newPrompt);
    }
  };

  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  return (
    <main>
      <article>
        <h1>Fun With AI</h1>
        {error && <p>{error}</p>}
        <textarea onChange={handleChange} value={prompt} />
        {loading ? (
          <button disabled>Loading...</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
        <ul>
          {log.map((entry, i) => (
            <li key={i}>
              <b>Prompt:</b> {entry.prompt}
              <br />
              <b>Response:</b> {entry.response}
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
};

export default App;
