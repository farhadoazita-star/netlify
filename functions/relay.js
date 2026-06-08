export default async (request) => {
  const url = new URL(request.url);
  const target = "http://185.158.249.43:2087" + url.pathname + url.search;
  
  const headers = new Headers(request.headers);
  headers.delete("host");
  
  const response = await fetch(target, {
    method: request.method,
    headers: headers,
    body: request.body,
    duplex: "half",
  });
  
  return new Response(response.body, {
    status: response.status,
    headers: response.headers,
  });
};

export const config = {
  path: "/*"
};
