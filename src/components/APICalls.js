export default Object.create(null, {
   getJoke: {
      value: () => {
         return fetch("https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke")
            .then(res => res.json())
            .then((result) => {
               return result;
            },
               // Note: it's important to handle errors here
               // instead of a catch() block so that we don't swallow
               // exceptions from actual bugs in components.
               (error) => {
                  return error;
               })
            }
      }
   });

// const APICalls = Object.create(null, {
//    getJoke: {
//       value: () => {
//          return fetch("https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke")
//             .then(res => res.json())
//             .then((result) => {
//                return result;
//             },
//                // Note: it's important to handle errors here
//                // instead of a catch() block so that we don't swallow
//                // exceptions from actual bugs in components.
//                (error) => {
//                   return error;
//                })
//             }
//       }
//    });

// export default APICalls;