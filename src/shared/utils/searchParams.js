export function transformQueryToObj(query) {
  const searchParams = new URLSearchParams(query);
  const obj = Object.fromEntries(searchParams.entries());
  return obj;
}

export function transformObjToQuery(obj) {
  const searchParams = new URLSearchParams(obj);
  const query = searchParams.toString();
  return query;
}
