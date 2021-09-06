import FormData from "form-data";
import fetch, { Response } from "node-fetch";
import fs from "fs";
import path from "path";

const form = new FormData();
form.append("my_field", "my value");
form.append("my_buffer", new Buffer(10));
form.append("my_file", fs.createReadStream("./test.txt"));
console.log(form);
