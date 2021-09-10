import fetch, { Response } from "node-fetch";
import fs from "fs";
import path from "path";
// import Blob from "fetch-blob";
import {
  File,
  Blob,
  blobFrom,
  blobFromSync,
  fileFrom,
  fileFromSync,
} from "fetch-blob/from.js";

const writeSas =
  "https://jinhakstorageaccount.blob.core.windows.net/rms-8888/test.txt?st=2021-09-07T04%3A57%3A22Z&se=2021-09-07T05%3A22%3A22Z&sp=rw&sv=2018-03-28&sr=b&sig=UXXyJ6R8Zk2h9WDIdyj08RNIzaCKdIVaMCGgAwJVDlE%3D";

const fsBlob = await blobFrom("./test.txt");

// Not a 4 GiB memory snapshot, just holds references
// points to where data is located on the disk
// const blob = new Blob([fsBlob, "memory", new Uint8Array(10)]);
const blob = new Blob([fsBlob]);
// console.log(await blob.arrayBuffer()); // ~4 GiB

const aaa = blob.stream();
// console.log(aaa);
try {
  console.log("Try fetch");
  const response = await fetch(writeSas, {
    method: "PUT",
    body: blob.stream(),
    headers: {
      "x-ms-version": "2020-10-02",
      "x-ms-blob-type": "BlockBlob",
    },
  });
  console.log(response);
  console.log("Success fetch");
} catch (error) {
  console.error(error);
  console.log("Failure fetch");
}
console.log("End fetch");

// const stream = fs.createReadStream("test.txt");

// const blob = new Blob(["hello, world"]);
// // const blob = new Blob([stream]);
// // const blob = new Blob(stream);
// const txt = await blob.text();
// console.log(txt);

// const res = new Response(stream);
// const blob = await res.blob();
// console.log(blob);

// const fsBlob = await blobFrom("./test.txt");
// const blob = new Blob([fsBlob]);
// console.log(blob);

// console.log(res);
// console.log(res.body);
// console.log(res.body);

// res.blob().then((r) => {
//   console.log(r);
// });

// const resBody = res.body.

// const dest = fs.createWriteStream("result.txt");
// res.body.pipe(dest);

// console.log(new Response());
// fetch
// fetch("100.5mb.mp4").then((res) => {
//   console.log(res);
// });

// fs.createReadStream('./1005.mb.mp4').
// const readable = fs.createReadStream("./tmpTxt.txt");
// readable.on("data", (chunk) => {
//   console.log(chunk);
//   chunk.blob
//   console.log(chunk.toString());
// });

// let res;
// const readable = fs.createReadStream("./100.5mb.mp4");
// readable
//   .on("data", (chunk) => {
//     res = new Response(chunk);
//   })
//   .on("end", () => {
//     res.blob().then((blob) => console.log(blob));
//   });

// const a = path.join(path.resolve(), "tmpTxt.txt");
// console.log(a);
// const b = await fetch(`file://${a}`);
// console.log(b);
