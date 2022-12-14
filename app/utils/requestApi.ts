export default async function RequestApi(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) {
  const response = await fetch(input, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    ...init,
  });

  if (response.status == 401 && typeof window != "undefined") {
    window.location.replace("/login");
    return [];
  }
  const result = await response.json();

  return result;
}
