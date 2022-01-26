(async () => {
  const { version } = await import("./../package.json");
  console.log(version);
})();
// import { version } from "./../package.json";
// console.log(version);
const modules = import.meta.glob("./components/*.ts");

console.log(modules);

console.log(__VERSION__);
console.log(import.meta.env.V_PATH);

export {};
