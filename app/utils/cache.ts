import LRU from "lru-cache";

let cache: LRU<unknown, unknown>;

declare global {
  var __cache: LRU<unknown, unknown>;
}
const cacheOption: LRU.Options<unknown, unknown> = {
  ttl: 1000 * 60 * 120,
  max: 200,
};
if (process.env.NODE_ENV === "production") {
  cache = new LRU(cacheOption);
} else {
  if (!global.__cache) {
    global.__cache = new LRU(cacheOption);
  }
  cache = global.__cache;
}

export default cache;
