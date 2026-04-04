# template-xlsx-parser

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)

A lightweight template built with Node.js and TypeScript for parsing and processing Excel (.xlsx) files. It helps you quickly read Excel data, perform custom data transformations, and export the results to a new Excel file.

## Requirements

- Node.js (v24.14.1 or higher recommended)
- pnpm

## Installation

Run the following command in the project root directory to install the required dependencies:

```sh
pnpm install
```

## Usage

1. Prepare your Excel data file, name it `data.example.xlsx`, and place it in the `data/` directory. (Note: You can also modify the file path directly in `main.ts` to match your actual file name).
2. Run the processing script:

```sh
pnpm start
```

3. Once finished, the processed data will be automatically generated and saved at `data/result.xlsx`.

## Customization

This template is designed for easy data transformation. You can open `main.ts` and modify the following sections based on your specific needs:

### 1. Define Data Structures

Modify `InputRowT` and `OutputRowT` to match your Excel column names:

```typescript
interface InputRowT {
  col1: string;
  col2: string;
  col3: string;
}

interface OutputRowT {
  col1: string;
  col2: string;
  col3: string;
}
```

### 2. Write Transformation Logic

Inside the `parse` function, you can manipulate, calculate, or format each `row` of data:

```typescript
const parse = (data: InputRowT[]): OutputRowT[] =>
  data.map((row) => {
    // Write your custom data processing logic here
    // e.g., filtering blank fields, string manipulation, or mathematical calculations
    return row;
  });
```

## License

This project is licensed under the **MIT License**.
