import fetch from 'node-fetch';

const API_ROUTE =
  'https://api.openai.com/v1/engines/text-curie-001/completions';

const postCompletion = async (event, context) => {
  const { prompt } = JSON.parse(event.body);
  try {
    const response = await fetch(API_ROUTE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_SECRET}`,
      },
      body: JSON.stringify({
        prompt,
      }),
    });
    const data = await response.json();
    const reply = data.choices[0]?.text;
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: reply }),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};

const rest_filter = (event, context, rest_methods) => {
  if (!rest_methods[event.httpMethod]) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        msg: `No ${event.httpMethod} method for ${event.path}.`,
      }),
    };
  } else {
    return rest_methods[event.httpMethod](event, context);
  }
};

exports.handler = async (event, context) => {
  return rest_filter(event, context, {
    POST: postCompletion,
  });
};
