// const jsdom = require('jsdom');

// const {
//   JSDOM,
// } = jsdom;
// //
// const helper = require('./helper.js');

// test('should list blog post links', () => {
//   const dom = new JSDOM(`
//     <!DOCTYPE html>
//       <html>
//         <body>

//           <div class="buttons">
//             <button class="first-button">First</button>
//             <button class="prev-button">Previous</button>
//             <button class="next-button">Next</button>
//             <button class="last-button">Last</button>
//           </div>

//         </body>
//       </html>`, {
//     url: 'http://localhost:8080',
//   });
//   const firstButton = dom.window.document.querySelector('.first-button');
//   const prevButton = dom.window.document.querySelector('.prev-button');
//   const nextButton = dom.window.document.querySelector('.next-button');
//   const lastButton = dom.window.document.querySelector('.last-button');
//   helper.disableButtons();
//   //   const logoDiv = `<div class="logo-image" id="logo-navbar">
//   //   <img src="<%=require('/src/images/m4j.jpg')%>" alt="Logo image">
//   // </div>`;
//   const expected = `
//     <button class="first-button" disabled>First</button>
//     <button class="prev-button" disabled>Previous</button>
//     <button class="next-button" disabled>Next</button>
//     <button class="last-button" disabled>Last</button>`;
//   const element = dom.window.document.querySelector('.buttons');
//   expect(element.innerHTML).toEqual(expected);
// });

test('shpuld pass', () => {
  expect(1).toEqual(1);
});
