// export function genRandomTree(N = 300, reverse = false) {
//   return {
//     nodes: [...Array(N).keys()].map(i => ({ id: i, name: i })),
//     links: [...Array(N).keys()]
//       .filter(id => id)
//       .map(id => ({
//         [reverse ? 'target' : 'source']: id,
//         [reverse ? 'source' : 'target']: Math.round(Math.random() * (id - 1))
//       }))
//   };
// }

// const gData = genRandomTree(10);

// // cross-link node objects
// gData.links.forEach(link => {
//   const a = gData.nodes[link.source];
//   const b = gData.nodes[link.target];
//   !a.neighbors && (a.neighbors = []);
//   !b.neighbors && (b.neighbors = []);
//   a.neighbors.push(b);
//   b.neighbors.push(a);

//   !a.links && (a.links = []);
//   !b.links && (b.links = []);
//   a.links.push(link);
//   b.links.push(link);
// });

// export default gData;
