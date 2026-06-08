exports.handler = async function(event, context) {
  const target = "http://185.158.249.43:2087" + (event.path || "/") + (event.rawQuery ? "?" + event.rawQuery : "");
  
  const response = await fetch(target, {
    method: event.httpMethod,
    headers: { ...event.headers, host: "185.158.249.43" },
    body: event.body || undefined,
  });
  
  const body = await response.text();
  
  return {
    statusCode: response.status,
    body: body,
  };
};
