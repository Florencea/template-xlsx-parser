# template-xlsx-parser

A lightweight template for parsing and processing Excel (.xlsx) files using Node.js and TypeScript.

## Quick Start

```sh
# 1. Install dependencies (Node.js version is enforced via package.json)
npm ci

# 2. Place your source data at data/data.example.xlsx

# 3. Process the file
npm start

# 4. The output will be saved to data/result.xlsx
```

## Customization

Modify `main.ts` to adjust the `InputRowT` / `OutputRowT` interfaces and write your custom data transformation logic inside the `parse()` function.

## License

MIT
