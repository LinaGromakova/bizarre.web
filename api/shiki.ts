export const config = {
  runtime: 'edge',
};

export default async function handler(request: Request) {
  const url = new URL(request.url);
  const targetPath = url.pathname.replace(/^\/shiki-api/, '/api');
  const targetUrl = `https://shikimori.io${targetPath}${url.search}`;

  const response = await fetch(targetUrl, {
    method: request.method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': 'BizarreWebApp/1.0',
    },
    body: request.method !== 'GET' ? await request.text() : undefined,
  });
  const data = await response.text();
  return new Response(data, {
    status: response.status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
